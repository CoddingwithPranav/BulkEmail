import { z } from 'zod';

export const loginSchema = z.object({
  name: z.string().nonempty({ message: 'Login name is required' }),
  password: z.string().min(6, { message: 'Password is too short' }),
});

export type LoginForm = z.infer<typeof loginSchema>;
