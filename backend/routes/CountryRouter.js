import Router from "express";
import { CountryController } from "../controllers/index.js";

const router = new Router();

router.post("/", CountryController.create);
router.get("/", CountryController.getAll);
router.get("/:id", CountryController.getOne);
router.delete("/:id", CountryController.remove);
router.patch("/:id", CountryController.update);

export default router;
