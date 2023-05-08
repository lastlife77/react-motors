import Router from "express";
import { CarTransmissionController } from "../controllers/index.js";

const router = new Router();

router.post("/", CarTransmissionController.create);
router.get("/", CarTransmissionController.getAll);
router.get("/:id", CarTransmissionController.getOne);
router.delete("/:id", CarTransmissionController.remove);
router.patch("/:id", CarTransmissionController.update);

export default router;
