import { Router } from 'express';
import * as campaignCtrl from '../../controllers/campaignController';
import { protect } from '../../middleware/auth';
import { restrictTo } from '../../middleware/role';
import { validate } from '../../middleware/validate';
import {
  createCampaignSchema,
  updateCampaignSchema,
  approveCampaignSchema,
} from '../../validators/campaignSchemas';

const router:Router = Router();

router.use(protect);

// User routes
// @ts-expect-error: createCampaignSchema is a ZodEffects, so use .schema for the inner object
router.post('/', validate(createCampaignSchema.schema), campaignCtrl.createCampaign);
router.get('/', campaignCtrl.getMyCampaigns);
router.get('/:id', campaignCtrl.getCampaignById);
router.patch('/:id', validate(updateCampaignSchema), campaignCtrl.updateCampaign);
router.delete('/:id', campaignCtrl.deleteCampaign);

// Admin approval routes
router.patch(
  '/:id/approve',
  restrictTo('ADMIN', 'SUPERADMIN'),
  validate(approveCampaignSchema),
  campaignCtrl.approveOrCancelCampaign
);createCampaignSchema

// Admin: see all campaigns
router.get('/admin/all', restrictTo('ADMIN', 'SUPERADMIN'), campaignCtrl.getAllCampaigns);

export default router;