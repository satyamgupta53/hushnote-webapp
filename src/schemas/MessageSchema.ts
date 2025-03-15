import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, "Minimum length to send message is 10 characters.")
    .max(200, "Please restrict your feedback within 200 characters."),
});
