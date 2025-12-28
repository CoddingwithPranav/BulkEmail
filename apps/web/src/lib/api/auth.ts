// src/lib/api/auth.ts
import axiosInstance from "@/axios";
import { LoginForm, RegisterForm, UserProfile } from "@repo/types";
import { ProfileForm } from "../schemas/profile.schema";

export const login = async (data: LoginForm) => {
  const { data: result } = await axiosInstance.post("/auth/login", data);
  return result;
};

export const register = async (data: RegisterForm) => {
  const { data: result } = await axiosInstance.post("/auth/register", data);
  return result;
};

export const verifyOTP = async (email: string, otp: string) => {
  const { data: result } = await axiosInstance.post("/auth/verify-otp", {
    email,
    otp,
  });
  return result;
};

export const resendOTP = async (email: string) => {
  const { data: result } = await axiosInstance.post("/auth/resend-otp", { email });
  return result;
};

export const changePassword = async (currentPassword: string, newPassword: string) => {
  const { data: result } = await axiosInstance.post("/auth/change-password", {
    currentPassword,
    newPassword,
  });
  return result;
};

export const logout = async () => {
  const { data: result } = await axiosInstance.post("/auth/logout");
  return result;
};

export const resetPassword = async (data: {
  email: string;
  otp: string;
  newPassword: string;
}) => {
  const response = await axiosInstance.post("/auth/reset-password", data);
  return response.data;
};

export const getMyProfile = async (): Promise<UserProfile> => {
  const { data } = await axiosInstance.get("/users/profile");
  return data.user;
};

export const updateMyProfile = async (payload: ProfileForm) => {
  const { data } = await axiosInstance.patch("/users/profile", payload);
  return data.user;
};