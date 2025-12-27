import { Router } from "express";
import { webhookController } from "../../controllers/webhookController";


const router: Router = Router();

router.post("/", webhookController);

export default router;