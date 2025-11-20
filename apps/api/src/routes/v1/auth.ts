// src/routes/auth.ts
import { Router } from 'express';
import {
  registerController
} from '../../controllers/authController'; // ← correct relative path
import { validate } from '../../middleware/validate';
import { loginSchema, registerSchema } from '../../validators/authSchemas';
import { protect } from '../../middleware/auth';

const router:Router = Router();

router.post('/register', registerController);
// router.post('/login', validate(loginSchema), loginController);
// router.post('/logout', logout);
// router.get('/me', protect, getMe);

export default router;