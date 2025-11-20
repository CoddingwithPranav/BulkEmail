import { Router } from 'express';
import * as userCtrl from '../../controllers/userController';
import { protect } from '../../middleware/auth';
import { restrictTo } from '../../middleware/role';
import { validate } from '../../middleware/validate';
// import { updateProfileSchema } from '../../validators/authSchemas';

const router:Router = Router();

router.use(protect);

// Regular user routes
router.get('/profile', userCtrl.getMyProfile);
// router.patch('/profile', validate(updateProfileSchema), userCtrl.updateMyProfile);

// Admin only: manage users
router.get('/', restrictTo('ADMIN', 'SUPERADMIN'), userCtrl.getAllUsers);
router.get('/:id', restrictTo('ADMIN', 'SUPERADMIN'), userCtrl.getUserById);
router.patch('/:id/role', restrictTo('SUPERADMIN'), userCtrl.updateUserRole);
router.delete('/:id', restrictTo('SUPERADMIN'), userCtrl.deleteUser);

export default router;