import Router from "express";
import multer from "multer";
import { AutoImageController } from "../controllers/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = new Router();
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
router.post("/", upload.single("image"), AutoImageController.create);

router.get("/", AutoImageController.getAll);

export default router;
