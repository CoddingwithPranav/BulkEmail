// src/routes/myContact.ts
import { Router } from "express";
import * as ctrl from "../../controllers/myContactController";
import {
  createMyContactValidation,
  updateMyContactValidation,
  deleteMyContactValidation,
  getMyContactValidation,
  getMyContactsValidation,
} from "@repo/types";
import { protect } from "../../middleware/auth";
import { validate } from "../../middleware/validate";

const router:Router = Router();

router.use(protect);

router.post("/", validate(createMyContactValidation), ctrl.createContact);

router.get("/", validate(getMyContactsValidation), ctrl.getContacts);
router.get("/:id", validate(getMyContactValidation), ctrl.getContact);

router.patch("/:id", validate(updateMyContactValidation), ctrl.updateContact);

router.delete("/:id", validate(deleteMyContactValidation), ctrl.deleteContact);

export default router;