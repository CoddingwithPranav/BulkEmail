import { uploadFileSchema } from "@repo/types";
import { Router } from "express";
import * as fileCtrl from "../../controllers/fileController";
import { protect } from "../../middleware/auth";
import { upload } from "../../middleware/upload";
import { validate } from "../../middleware/validate";

const router: Router = Router();

router.use(protect);

// Upload new file (CSV/XLSX)
router.post(
  "/upload",
  upload.single("file"),
  validate(uploadFileSchema),
  fileCtrl.uploadFile
);

// My files
router.get("/", fileCtrl.getMyFiles);
router.get("/:id", fileCtrl.getFileById);
router.delete("/:id", fileCtrl.deleteFile);

// Optional: Download parsed file (for debugging)
router.get("/:id/download", fileCtrl.downloadFile);

export default router;
