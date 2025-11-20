// import { Router } from "express";
// import { dbClient } from "@repo/db/client";
// import { SigninSchema, SignupSchema } from "../../types";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { IMAGEKIT_PRIVATE_KEY, IMAGEKIT_PUBLIC_KEY, JWT_PASSWORD } from "../../config";
// import { adminRouter } from "./admin";
// import ImageKit from "imagekit";

// export const router: import("express").Router = Router();

// const imagekit = new ImageKit({
//     urlEndpoint: 'https://ik.imagekit.io/sekvmxelf', // https://ik.imagekit.io/your_imagekit_id
//     publicKey: IMAGEKIT_PUBLIC_KEY!,
//     privateKey: IMAGEKIT_PRIVATE_KEY!
//   });
  

// router.post("/signup", async (req, res) => {
//   const parsedData = SignupSchema.safeParse(req.body);
//   console.log(req.body);
//   if (!parsedData.success) {
//     return res.status(400).json({ message: "Validation Failed" });
//   }
  
//   const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);
//   try {
//     const user = await dbClient.user.create({
//       data: {
//         username: parsedData.data.username,
//         password: hashedPassword,
//         role: parsedData.data.role === "admin" ? "Admin" : "User",
//         avatarId: parsedData.data.avatarId, // Include avatarId if provided
//       },
//     });
//     res.json({ userId: user.id });
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({ message: "User Already Exists" });
//   }
// });

// router.post("/signin", async (req, res)=>{
//     const parsedData = SigninSchema.safeParse(req.body)
//     if(!parsedData.success){
//         return res.status(400).json({message:"Validation Failed"})
//     }
//     try {
//        const user = await dbClient.user.findUnique({
//             where:{
//                 username: parsedData.data.username
//             }
//         })
//         if(!user){
//             return res.status(403).json({message:"User Not Found"})
//         }
//         const isValid = await bcrypt.compare(parsedData.data.password, user.password)
//         if(!isValid){
//             return res.status(400).json({message:"Invalid Password"})
//         }
//         const token = jwt.sign({
//             id: user.id,
//             username: user.username,
//             role: user.role,
//         }, JWT_PASSWORD as string, {
//             expiresIn: "10h"
//         })
//         res.json({
//             token
//         })
//     } catch (error) {
//         res.status(400).json({message:"Internal Server Error"})
//     }
// })

  





// router.get('/image-auth', function (req, res) {

//   const { token, expire, signature } = imagekit.getAuthenticationParameters();
//   res.send({ token, expire, signature, publicKey: IMAGEKIT_PUBLIC_KEY });
// });

// router.use("/admin", adminRouter);




// src/routes/index.ts
import { Router } from 'express';
import authRoutes from './auth';
import userRoutes from './user';
import fileRoutes from './file';
import campaignRoutes from './campaign';
import quickSmsRoutes from './quickSms';

const router:Router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/files', fileRoutes);
router.use('/campaigns', campaignRoutes);
router.use('/quick-sms', quickSmsRoutes);

router.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

export default router;