import fs from "fs";
import multer from "multer";
import path from "path";

const getUploadsDir = () => {
  const turboRoot = process.env.TURBO_ROOT;
  if (turboRoot) {
    return path.join(turboRoot, "uploads");
  }
  return path.join(process.cwd(), "..", "..", "uploads"); // go up two levels from apps/api
};

const uploadDir = getUploadsDir();

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${ext}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 1_073_741_824 }, // 1GB
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if ([".csv", ".xlsx", ".xls"].includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error("Only CSV, XLSX, and XLS files are allowed"));
    }
  },
});
