import { Hono } from "hono";

import { decode, sign, verify } from "hono/jwt";
import { signupInput } from "../zod/inputValidation";

type variables = {
  prisma: any;
};

const user = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: variables;
}>();

user.post("/signup", async (c) => {
  const prisma = c.get("prisma");
  const body = await c.req.json();
  const parsedResponse = signupInput.safeParse(body);
  try {
    if (!parsedResponse.success) {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
        },
      });
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ token: jwt });
    }
    c.status(401);
    return c.json({ error: "invalid Inputs" });
  } catch (ex) {
    c.status(403);
    return c.json({ error: "Email already exists!" });
  }
});
user.post("/signin", async (c) => {
  const prisma = c.get("prisma");
  const { email, password } = await c.req.json();
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user) {
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ token: jwt });
    }
  } catch (ex) {
    c.status(403);
    return c.json({ error: "error while signing in" });
  }

  return c.json({ Sucess: true });
});

export default user;
