import { z } from "zod";

export const uploadFileSchema = z.object({
  name: z.string().min(1, "Name required"),
  email: z.string().email("Invalid email"),
  phoneNumber: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
});

export type UploadFile = z.infer<typeof uploadFileSchema>;
