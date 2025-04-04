import { z } from "zod";

export const verifyCodeSchema = z.object({
  verificationCode: z
    .string()
    .length(6, "Verification code must be of length 6 characters."),
});
