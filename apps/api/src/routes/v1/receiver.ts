import { Router } from "express";
import { protect } from "../../middleware/auth";
import { validate } from "../../middleware/validate";
import { createReceiverValidationSchema } from "@repo/types";
import * as receiverCtrl from "../../controllers/receiverController";

const router: Router = Router();

router.use(protect);

router.post(
  "/",
  validate(createReceiverValidationSchema),
  receiverCtrl.createReceiver
);

router.get("/", receiverCtrl.getAllReceivers);
router.get("/:id", receiverCtrl.getReceiverById);
router.patch("/:id", receiverCtrl.updateReceiver);
router.delete("/:id", receiverCtrl.deleteReceiver);

export default router;

