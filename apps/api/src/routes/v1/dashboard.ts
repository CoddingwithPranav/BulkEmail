import { Router } from "express";
import { protect } from "../../middleware/auth";
import { getDashboard } from "../../controllers/dashboardController";

const router:Router = Router();
router.use(protect);


router.get("/", getDashboard);

export default router;