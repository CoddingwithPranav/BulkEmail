import {
  createReceiverValidationSchema,
  updateReceiverValidationSchema,
} from "@repo/types";
import { Router } from "express";
import * as receiverCtrl from "../../controllers/receiverController";
import { protect } from "../../middleware/auth";
import { validate } from "../../middleware/validate";

const router: Router = Router();

router.use(protect);

router.post(
  "/",
  validate(createReceiverValidationSchema),
  receiverCtrl.createReceiver
);

router.get("/", receiverCtrl.getAllReceivers);
router.get("/:id", receiverCtrl.getReceiverById);
router.patch(
  "/:id",
  validate(updateReceiverValidationSchema),
  receiverCtrl.updateReceiver
);
router.delete("/:id", receiverCtrl.deleteReceiver);

export default router;
