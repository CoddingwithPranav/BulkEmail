import { Router } from "express";
import { z } from "zod";
import * as receiverCtrl from "../../controllers/receiverController";
import { protect } from "../../middleware/auth";
import { validate } from "../../middleware/validate";
import { createReceiverSchema, updateReceiverValidationSchema } from "@repo/types";


const router: Router = Router();

router.use(protect);

router.get("/", receiverCtrl.getAllReceivers);
router.post("/", validate(createReceiverSchema), receiverCtrl.createReceiver);

router.get(
  "/:id",
  receiverCtrl.getReceiverById
);


router.patch(
  "/:id",
  validate(updateReceiverValidationSchema),
  receiverCtrl.updateReceiver
);


router.delete(
  "/:id",
  receiverCtrl.deleteReceiver
);

export default router;
