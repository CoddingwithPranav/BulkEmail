import { Router } from "express";
import authRoutes from "./auth";
import campaignRoutes from "./campaign";
import fileRoutes from "./file";
import quickSmsRoutes from "./quickSms";
import userRoutes from "./user";
import receiverRoutes from "./receiver";
import { protect } from "../../middleware/auth";

const router: Router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/files", fileRoutes);
router.use("/campaigns", campaignRoutes);
router.use("/quick-sms", quickSmsRoutes);
router.use("/receiver", receiverRoutes);

export default router;
