import { Router } from "express";
import {
  deleteFile,
  downloadInvalidRows,
  getFileStatus,
  getUserFiles,
  uploadFile,
} from "../../controllers/fileController";
import { protect } from "../../middleware/auth";
import { upload } from "../../middleware/upload";

const router: Router = Router();

router.use(protect);
router.post("/upload", upload.single("file"), uploadFile);
// router.get("/progress/:jobId", getFileProgressSSE);

router.get("/list", getUserFiles);
router.get("/status/:id", getFileStatus);
router.get("/invalid/:id", downloadInvalidRows);
router.delete("/:id", deleteFile);

export default router;
