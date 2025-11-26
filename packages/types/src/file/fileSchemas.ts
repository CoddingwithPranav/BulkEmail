import { z } from "zod";

export const uploadFileSchema = z.object({
  FirstName: z.string().min(1, "First name required"),
  LastName: z.string().min(1, "Last name required"),
  PhoneNumber: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
  Province: z.string().min(1, "Province required"),
  District: z.string().min(1, "District required"),
  Municipality: z.string().min(1, "Municipality required"),
});

export type UploadFile = z.infer<typeof uploadFileSchema>;
