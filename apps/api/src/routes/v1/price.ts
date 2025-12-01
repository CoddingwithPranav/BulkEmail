import { Router } from "express";
import { createPriceHandler, getCurrentSmsPricePaisa, getPricingHistoryHandler } from "../../controllers/priceController";
import { protect } from "../../middleware/auth";
import { validate } from "../../middleware/validate";
import { createPriceValidation, getPricingHistoryValidation } from "@repo/types";


const router:Router = Router();

router.get("/current", protect, getCurrentSmsPricePaisa);
router.use(protect);
router.post("/", validate(createPriceValidation),createPriceHandler);
router.get("/history",validate(getPricingHistoryValidation), getPricingHistoryHandler);

export default router;