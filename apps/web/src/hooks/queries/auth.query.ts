import axiosInstance from '@/axios';
import { login , register} from '@/lib/api/auth';
import { clearAuthToken } from '@/lib/data/cookies';
import { LoginForm, RegisterForm } from '@/lib/schemas/auth.schema';
import { useAuthStore } from '@/lib/store';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: LoginForm) => login(data),
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (data: RegisterForm) => register(data),
  })
}
export const useLogout = () => {
  const queryClient = useQueryClient();
  const { clearAuth } = useAuthStore();
  return useMutation({
    mutationFn: () => axiosInstance.post('/auth/logout'),
    onSuccess: async () => {
      await clearAuthToken();
      queryClient.clear();
      clearAuth();
    },
    meta: {
      successMessage: 'Logout successful',
      errorMessage: 'Logout failed',
    },
  });
};
