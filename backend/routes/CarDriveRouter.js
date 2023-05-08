import Router from "express";
import { CarDriveController } from "../controllers/index.js";

const router = new Router();

router.post("/", CarDriveController.create);
router.get("/", CarDriveController.getAll);
router.get("/:id", CarDriveController.getOne);
router.delete("/:id", CarDriveController.remove);
router.patch("/:id", CarDriveController.update);

export default router;
