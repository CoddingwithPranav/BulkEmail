import { Router } from "express";
import {
  getMe,
  loginController,
  logout,
  registerController,
} from "../../controllers/authController";
import { protect } from "../../middleware/auth";
import { validate } from "../../middleware/validate";
import { loginSchema, registerSchema } from "../../validators/authSchemas";

const router: Router = Router();

router.post("/register", validate(registerSchema), registerController);
router.post("/login", validate(loginSchema), loginController);
router.post("/logout", logout);
router.get("/me", protect, getMe);

export default router;
