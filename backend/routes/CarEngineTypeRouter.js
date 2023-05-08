import Router from "express";
import { CarEngineTypeController } from "../controllers/index.js";

const router = new Router();

router.post("/", CarEngineTypeController.create);
router.get("/", CarEngineTypeController.getAll);
router.get("/:id", CarEngineTypeController.getOne);
router.delete("/:id", CarEngineTypeController.remove);
router.patch("/:id", CarEngineTypeController.update);

export default router;
