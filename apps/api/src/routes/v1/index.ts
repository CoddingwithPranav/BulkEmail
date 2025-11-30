import { Router } from "express";
import authRoutes from "./auth";
import campaignRoutes from "./campaign";
import fileRoutes from "./file";
import quickSmsRoutes from "./quickSms";
import userRoutes from "./user";
import receiverRoutes from "./receiver";
import categoriesRoutes from "./categories";
import myContactRoutes from "./myContact";
import { protect } from "../../middleware/auth";

const router: Router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/files", fileRoutes);
router.use("/campaigns", campaignRoutes);
router.use("/quick-sms", quickSmsRoutes);
router.use("/receiver", receiverRoutes);
router.use("/categories", categoriesRoutes);
router.use('/my-contacts', myContactRoutes);

export default router;
