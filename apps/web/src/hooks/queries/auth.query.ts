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
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (data: RegisterForm) => register(data),
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
  });
};

export const useResendOTPMutation = () => {
  return useMutation({
    mutationFn: (email: string) => resendOTP(email),
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
  });
};

export const useResetPasswordMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
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
  });
};
