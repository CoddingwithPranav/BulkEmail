import axiosInstance from '@/axios';
import { LoginForm, RegisterForm } from '../schemas/auth.schema';

export const login = async (data: LoginForm) => {
  const { data: result } = await axiosInstance.post('/auth/login', data);
  return result;
};

export const register = async (data:RegisterForm) =>{
  const { data: result } = await axiosInstance.post('/auth/register', data);
  return result;
}