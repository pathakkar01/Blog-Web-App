import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createBolgInput, updateBlogInput } from "@pathakkar01/common";

type variables = {
  userId: string;
  prisma: any;
};

const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: variables;
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("Authorization") || "";

  try {
    const token = authHeader.split(" ")[1];
    const user = await verify(token, c.env.JWT_SECRET);

    if (!user) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
    c.set("userId", user.id);

    await next();
  } catch (e) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
});
blogRouter.get("/bulk", async (c) => {
  console.log("here");
  try {
    const prisma = c.get("prisma");
    const blogs = await prisma.post.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    // console.log(blogs);

    return c.json({ blogs });
  } catch (e) {
    c.status(403);
    return c.json({ error: "Something went Wrong!" });
  }
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  try {
    const prisma = c.get("prisma");
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    return c.json(post);
  } catch (e) {
    console.log("error", e);
    c.status(404);
    return c.json({ error: "Blog with given id not Found" });
  }
});

blogRouter.post("/", async (c) => {
  try {
    const userId = c.get("userId");
    const body = await c.req.json();
    const parsedResponse = createBolgInput.safeParse(body);
    if (parsedResponse.success) {
      const prisma = c.get("prisma");
      const post = await prisma.post.create({
        data: {
          title: body.title,
          content: body.content,
          authorId: userId,
        },
      });
      console.log(post);
      return c.json(post);
    }
    c.status(403);
    return c.json({ error: "invalid Inputs" });
  } catch (e) {
    console.log(e);
    c.status(401);
    return c.json({ error: "Something went Wrong!" });
  }
});
blogRouter.put("/", async (c) => {
  try {
    const body = await c.req.json();
    const userId = c.get("userId");
    const prisma = c.get("prisma");
    const parsedResponse = updateBlogInput.safeParse(body);
    if (parsedResponse.success) {
      const post = await prisma.post.update({
        where: {
          id: body.id,
          authorId: userId,
        },
        data: {
          title: body.title,
          content: body.content,
        },
      });
      return c.json({ success: true, blogId: post.id });
    }
    c.status(403);
    return c.json({ error: "invalid Inputs" });
  } catch (e) {
    c.status(403);
    return c.json({ error: "Email already exists!" });
  }
});

export default blogRouter;
