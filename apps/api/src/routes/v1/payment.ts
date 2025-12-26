// routes/paymentRoutes.ts
import { Router } from "express";
import * as paymentCtrl from "../../controllers/paymentController";
import { protect } from "../../middleware/auth";

const router:Router = Router();


// Initiate payment (protected)
router.post("/create", protect, paymentCtrl.initiatePayment);

// eSewa success webhook
router.get("/esewa/success", paymentCtrl.verifyEsewaSuccess, paymentCtrl.confirmPaymentSuccess);

export default router;