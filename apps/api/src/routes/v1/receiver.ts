import { Router } from "express";
import * as receiverCtrl from "../../controllers/receiverController";
import { protect } from "../../middleware/auth";
import { validate } from "../../middleware/validate";

import {
  createReceiverValidation,
  updateReceiverValidation,
  deleteReceiverValidation,
  getReceiversValidation,
} from "@repo/types";

const router: Router = Router();

router.use(protect);

router.get("/", validate(getReceiversValidation), receiverCtrl.getReceivers);
router.post("/", validate(createReceiverValidation), receiverCtrl.createReceiver);
router.get("/:id", receiverCtrl.getReceiverById);
router.patch("/:id", validate(updateReceiverValidation), receiverCtrl.updateReceiver);
router.delete("/:id", receiverCtrl.deleteReceiver);

export default router;
