import { Router } from "express";
import { loginValidationSchema, registerValidationSchema } from "@repo/types";
import { registerController, loginController, verifyOTPController, forgotPasswordController, resendOTPController, resetPasswordController, logout, getMe } from "../../controllers/authController";
import { protect } from "../../middleware/auth"
import { validate } from "../../middleware/validate";

const router:Router = Router();

router.post("/register", validate(registerValidationSchema), registerController);
router.post("/verify-otp", verifyOTPController);
router.post("/resend-otp", resendOTPController);
router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password", resetPasswordController);
router.post("/login", validate(loginValidationSchema), loginController);
router.post("/logout", logout);
router.get("/me", protect, getMe);

export default router;