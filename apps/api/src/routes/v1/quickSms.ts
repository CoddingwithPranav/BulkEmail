import { Router } from 'express';
import * as quickSmsCtrl from '../../controllers/quickSmsController';
import { protect } from '../../middleware/auth';
import { validate } from '../../middleware/validate';
import { sendBulkQuickSmsSchema, sendQuickSmsSchema } from '@repo/types';

const router:Router = Router();

router.use(protect);

// Send single quick SMS
router.post('/send', validate(sendQuickSmsSchema), quickSmsCtrl.sendQuickSms);

// Send to multiple numbers (max 500)
router.post('/bulk', validate(sendBulkQuickSmsSchema), quickSmsCtrl.sendBulkQuickSms);

// History
router.get('/history', quickSmsCtrl.getMyQuickSmsHistory);

export default router;