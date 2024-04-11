import { Hono } from "hono";
import user from "./routes/users";
import blogRouter from "./routes/blog";
import { PrismaClient } from "@prisma/client/edge";
import { cors } from "hono/cors";
import { withAccelerate } from "@prisma/extension-accelerate";

type variables = {
  prisma: any;
};

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: variables;
}>();
app.use("/api/*", cors());

app.use("*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  c.set("prisma", prisma);
  await next();
});

app.route("/api/v1/user", user);
app.route("/api/v1/blog", blogRouter);

export default app;
