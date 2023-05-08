import Router from "express";
import { CarEngineController } from "../controllers/index.js";

const router = new Router();

router.post("/", CarEngineController.create);
router.get("/", CarEngineController.getAll);
router.get("/:id", CarEngineController.getOne);
router.delete("/:id", CarEngineController.remove);
router.patch("/:id", CarEngineController.update);

export default router;
