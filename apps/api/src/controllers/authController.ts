import { Request, Response } from "express";
import {
  register,
  verifyOTP,
  resendOTP,
  forgotPassword,
  login,
  changePassword,
  resetPassword,
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

export const changePasswordController = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await changePassword(
      req.user.id,
      currentPassword,
      newPassword
    );

    res.clearCookie("jwt", cookieOptions);

    res.json({
      message: "Password changed successfully. Please log in again.",
      data: { user: { id: user.id, email: user.email } },
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
export const resetPasswordController = async (req: Request, res: Response) => {
  try {
    const { email, otp, newPassword } = req.body;

    // Validation
    if (!email || !otp || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Email, OTP, and new password are required",
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    await resetPassword(email, otp, newPassword);

    return res.json({
      success: true,
      message: "Password reset successfully! You can now log in.",
    });
  } catch (err: any) {
    return res.status(400).json({
      success: false,
      message: err.message || "Failed to reset password",
    });
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
      data: {
        user: { id: user.id, email: user.email, role: user.role },
        token: {
          accessToken: token,
        },
      },
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
