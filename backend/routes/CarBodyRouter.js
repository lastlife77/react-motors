import Router from "express";
import { CarBodyController } from "../controllers/index.js";

const router = new Router();

router.post("/", CarBodyController.create);
router.get("/", CarBodyController.getAll);
router.get("/:id", CarBodyController.getOne);
router.delete("/:id", CarBodyController.remove);
router.patch("/:id", CarBodyController.update);

export default router;
