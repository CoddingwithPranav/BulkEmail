import { Request, Response } from 'express';
import { register, login } from '../services/authService';
import prisma from '../config/database';
import { signToken } from '../utils/jwt';
import { cookieOptions } from '../utils/cookieOptions';
import { AuthRequest } from '../middleware/auth';
import { hashPassword } from '../utils/password';
import logger from '../config/logger';

export const registerController = async (req: Request, res: Response) => {
  try {
    const user = await register(req.body);
    const token = signToken({ id: user.id, role: user.role });

    res.cookie('jwt', token, cookieOptions);
    logger.info('User registered', { userId: user.id, email: user.email });

    res.status(201).json({
      message: 'Registration successful',
      // user: {
      //   id: user.id,
      //   email: user.email,
      //   phoneNumber: user.phoneNumber,
      //   role: user.role,
      //   isGuest: user.isGuest,
      // },
    });
  } catch (err: any) {
    logger.error('Registration failed', { error: err.message });
    res.status(400).json({ message: err.message });
  }
};

// export const loginController = async (req: Request, res: Response) => {
//   try {
//     const { identifier, password } = req.body;
//     const user = await login(identifier, password);
//     const token = signToken({ id: user.id, role: user.role });

//     res.cookie('jwt', token, cookieOptions);
//     logger.info('User logged in', { userId: user.id });

//     res.json({
//       message: 'Login successful',
//       user: { id: user.id, email: user.email, phoneNumber: user.phoneNumber, role: user.role },
//     });
//   } catch (err: any) {
//     logger.warn('Login failed', { identifier: req.body.identifier });
//     res.status(401).json({ message: err.message });
//   }
// };

// export const logout = (_req: Request, res: Response) => {
//   res.clearCookie('jwt', cookieOptions);
//   res.json({ message: 'Logged out successfully' });
// };

// export const getMe = (req: AuthRequest, res: Response) => {
//   res.json({ user: req.user });
// };

// export const updateProfile = async (req: AuthRequest, res: Response) => {
//   try {
//     const updates = req.body;
//     if (updates.password) {
//       updates.hashedPassword = await hashPassword(updates.password);
//       delete updates.password;
//     }

//     const user = await prisma.user.update({
//       where: { id: req.user.id },
//       data: updates,
//       select: {
//         id: true,
//         email: true,
//         phoneNumber: true,
//         firstName: true,
//         lastName: true,
//         organizationName: true,
//         profileImage: true,
//         accountType: true,
//         role: true,
//       },
//     });

//     logger.info('Profile updated', { userId: user.id });
//     res.json({ message: 'Profile updated', user });
//   } catch (err: any) {
//     logger.error('Profile update failed', { userId: req.user.id, error: err.message });
//     res.status(400).json({ message: err.message });
//   }
// };