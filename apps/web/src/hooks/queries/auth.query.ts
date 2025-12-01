import {
  login,
  register,
  verifyOTP,
  resendOTP,
  changePassword,
  logout,
  resetPassword,
} from "@/lib/api/auth";
import { clearAuthToken } from "@/lib/data/cookies";
import { useAuthStore } from "@/lib/store";
import { LoginForm, RegisterForm } from "@repo/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { getMyProfile, updateMyProfile } from "@/lib/api/auth";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: LoginForm) => login(data),
    onError: (error: any) =>
      toast.error(error.response?.data?.message || "Login failed"),
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (data: RegisterForm) => register(data),
    onSuccess: () => {
      toast.success("Check your email for OTP!");
    },
    onError: (error: any) =>
      toast.error(error.response?.data?.message || "Registration failed"),
  });
};

export const useVerifyOTPMutation = () => {
  const { setToken, setUser } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ email, otp }: { email: string; otp: string }) =>
      verifyOTP(email, otp),
    onSuccess: (response) => {
      queryClient.clear();
    },
    onError: (error: any) =>
      toast.error(error.response?.data?.message || "Invalid OTP"),
  });
};

export const useResendOTPMutation = () => {
  return useMutation({
    mutationFn: (email: string) => resendOTP(email),
    onSuccess: () => toast.success("New OTP sent!"),
    onError: () => toast.error("Failed to resend OTP"),
  });
};

export const useChangePasswordMutation = () => {
  return useMutation({
    mutationFn: ({
      currentPassword,
      newPassword,
    }: {
      currentPassword: string;
      newPassword: string;
    }) => changePassword(currentPassword, newPassword),
    onSuccess: () => {
      toast.success("Password changed! Logging you out...");
      setTimeout(() => window.location.href = "/login", 1500);
    },
    onError: (error: any) =>
      toast.error(error.response?.data?.message || "Failed to change password"),
  });
};

export const useResetPasswordMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast.success("Password changed successfully!");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Failed to reset password");
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const { clearAuth } = useAuthStore();

  return useMutation({
    mutationFn: logout,
    onSuccess: async () => {
      await clearAuthToken();
      clearAuth();
      queryClient.clear();
      toast.success("Logged out successfully");
    },
    onError: () => toast.error("Logout failed"),
  });
};




export const useUserProfile = () => {
  return useQuery({
    queryKey: ["my-profile"],
    queryFn: getMyProfile,
  });
};

export const useUpdateMyProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMyProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-profile"] });
      toast.success("Profile updated!");
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Update failed");
    },
  });
};
