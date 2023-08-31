import z from "zod";

export const postSchema = z.object({
  title: z.string().min(1).max(100),
  author: z.string().min(1),
  content: z.string().min(50),
});

export type postType = z.infer<typeof postSchema>;
