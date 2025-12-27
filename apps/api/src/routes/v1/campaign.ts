import {
  approveCampaignValidationSchema,
  createCampaignValidationSchema,
  updateCampaignValidationSchema,
} from "@repo/types";
import { Router } from "express";
import * as campaignCtrl from "../../controllers/campaignController";
import { protect } from "../../middleware/auth";
import { restrictTo } from "../../middleware/role";
import { validate } from "../../middleware/validate";

const router: Router = Router();

router.use(protect);

router.post(
  "/",
  validate(createCampaignValidationSchema),
  campaignCtrl.createCampaign
);
router.post("/:id/start", campaignCtrl.startCampaign);
router.get("/", campaignCtrl.getMyCampaigns);
router.get("/:id", campaignCtrl.getCampaignById);
router.patch(
  "/:id",
  validate(updateCampaignValidationSchema),
  campaignCtrl.updateCampaign
);
router.delete("/:id", campaignCtrl.deleteCampaign);

router.patch(
  "/:id/approve",
  restrictTo("ADMIN", "SUPERADMIN"),
  validate(approveCampaignValidationSchema),
  campaignCtrl.approveOrCancelCampaign
);

router.get(
  "/admin/all",
  restrictTo("ADMIN", "SUPERADMIN"),
  campaignCtrl.getAllCampaigns
);

export default router;
