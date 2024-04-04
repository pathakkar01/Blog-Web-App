import { z } from "zod";

export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export const signInInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const createBolgInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateBlogInput = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
});

export type signupParams = z.infer<typeof signupInput>;
export type signInParams = z.infer<typeof signInInput>;
export type updateBlogParams = z.infer<typeof updateBlogInput>;
export type createBlogParams = z.infer<typeof createBolgInput>;
