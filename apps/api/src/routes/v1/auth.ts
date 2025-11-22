import { Router } from "express";
import {
  getMe,
  loginController,
  logout,
  registerController,
} from "../../controllers/authController";
import { protect } from "../../middleware/auth";
import { validate } from "../../middleware/validate";
import { loginValidationSchema, registerValidationSchema } from "@repo/types";

const router: Router = Router();

router.post("/register", validate(registerValidationSchema), registerController);
router.post("/login", validate(loginValidationSchema), loginController);
router.post("/logout", logout);
router.get("/me", protect, getMe);

export default router;
