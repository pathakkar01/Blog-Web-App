import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

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

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
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
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
    console.log(post);
    return c.json(post);
  } catch (e) {
    console.log(e);
    c.status(401);
    return c.json({ error: "Something went Wrong!" });
  }
});
blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
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
});

export default blogRouter;
