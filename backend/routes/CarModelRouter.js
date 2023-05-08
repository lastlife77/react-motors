import Router from "express";
import { CarModelController } from "../controllers/index.js";

const router = new Router();

router.post("/", CarModelController.create);
router.get("/", CarModelController.getAll);
router.get("/:id", CarModelController.getOne);
router.delete("/:id", CarModelController.remove);
router.patch("/:id", CarModelController.update);

export default router;
