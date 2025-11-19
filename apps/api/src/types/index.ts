import z from "zod";

export const SignupSchema = z.object({
    username: z.string(),
    password: z.string(),
    role: z.enum(["user", "admin"]),
    avatarId: z.string().optional(), 
})

export const SigninSchema = z.object({
    username: z.string(),
    password: z.string(),
})

declare global {
    namespace Express {
      export interface Request {
        role?: "Admin" | "User";
        userId?: string;
      }
    }
}