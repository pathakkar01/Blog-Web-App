import { z } from "zod";

export const signupInput = z.object({
  email: z.string(),
  password: z.string(),
  name: z.string().optional(),
});

export const bolgInput = z.object({
  title: z.string(),
  content: z.string(),
  authorId: z.string(),
});

export type signupParams = z.infer<typeof signupInput>;
export type blogParams = z.infer<typeof bolgInput>;
