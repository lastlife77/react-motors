import Router from "express";
import { CarBrandController } from "../controllers/index.js";

const router = new Router();

router.post("/", CarBrandController.create);
router.get("/", CarBrandController.getAll);
router.get("/:id", CarBrandController.getOne);
router.delete("/:id", CarBrandController.remove);
router.patch("/:id", CarBrandController.update);

export default router;
