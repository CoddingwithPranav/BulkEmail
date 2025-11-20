import axiosInstance from '@/axios';
import { LoginForm } from '../schemas/auth.schema';

export const login = async (data: LoginForm) => {
  const { data: result } = await axiosInstance.post('/auth/login', data);
  return result;
};
