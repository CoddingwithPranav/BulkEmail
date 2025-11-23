import { Router } from "express";
import {
  downloadInvalidRows,
  getFileStatus,
  uploadFile,
} from "../../controllers/fileController";
import { protect } from "../../middleware/auth";
import { upload } from "../../middleware/upload";

const router: Router = Router();
router.use(protect);

router.post("/upload", upload.single("file"), uploadFile);
router.get("/status/:id", getFileStatus);
router.get("/invalid/:id", downloadInvalidRows);

export default router;
