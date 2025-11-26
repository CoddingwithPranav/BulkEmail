import { Request, Response } from "express";
import {
  register,
  verifyOTP,
  resendOTP,
  forgotPassword,
  resetPassword,
  login,
} from "../services/authService";
import { signToken } from "../utils/jwt";
import { cookieOptions } from "../utils/cookieOptions";
import { AuthRequest } from "../middleware/auth";

export const registerController = async (req: Request, res: Response) => {
  try {
    const user = await register(req.body);
    res.status(201).json({
      message: "Registration successful! Please check your email for OTP.",
      data: { email: user.email },
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const verifyOTPController = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;
    console.log("Verifying OTP for email:", email, "with OTP:", otp);
    const user = await verifyOTP(email, otp);
    const token = signToken({ id: user.id, role: user.role });

    res.cookie("jwt", token, cookieOptions);
    res.json({
      message: "Email verified! You are now logged in.",
      data: { user: { id: user.id, email: user.email } },
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const resendOTPController = async (req: Request, res: Response) => {
  try {
    await resendOTP(req.body.email);
    res.json({ message: "New OTP sent to your email" });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const forgotPasswordController = async (req: Request, res: Response) => {
  try {
    await forgotPassword(req.body.email);
    res.json({ message: "If account exists, OTP has been sent to your email" });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const resetPasswordController = async (req: Request, res: Response) => {
  try {
    const { email, otp, newPassword } = req.body;
    const user = await resetPassword(email, otp, newPassword);
    const token = signToken({ id: user.id, role: user.role });

    res.cookie("jwt", token, cookieOptions);
    res.json({ message: "Password reset successful! You are logged in." });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { name, password } = req.body;
    const user = await login(name, password);
    const token = signToken({ id: user.id, role: user.role });

    res.cookie("jwt", token, cookieOptions);
    res.json({
      message: "Login successful",
      data: { user: { id: user.id, email: user.email, role: user.role },
    token:{
        accessToken: token
      } },
      

    });
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
};

export const logout = (_req: Request, res: Response) => {
  res.clearCookie("jwt", cookieOptions);
  res.json({ message: "Logged out successfully" });
};

export const getMe = (req: AuthRequest, res: Response) => {
  res.json({ user: req.user });
};
