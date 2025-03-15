import { z } from "zod";

export const signUpSchema = z.object({
  username: z
    .string()
    .min(6, "Username must contain atleast 6 characters.")
    .max(20, "Username atmost can have 20 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain alphanumerics and underscore."
    ),

  emailAddress: z.string().email({
    message: "Invalid email address. Please check provided email ID.",
  }),

  password: z
    .string()
    .min(6, "Password must contain atleast 6 characters.")
    .max(20, "Password atmost can have 20 characters."),
});
