import * as z from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Please enter your email address")
    .email("Invalid email address"),
  password: z.string().min(8, "Invalid password"),
});

export type SignInFormData = z.infer<typeof signInSchema>;
