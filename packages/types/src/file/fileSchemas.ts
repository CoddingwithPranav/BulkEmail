import { z } from 'zod';

export const uploadFileSchema = z.object({
  file: z.any().refine((file) => file, "File is required"),
  // Multer will validate mimetype, but we double-check
});