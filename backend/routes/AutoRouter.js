import Router from "express";
import { AutoController } from "../controllers/index.js";

const router = new Router();

router.post("/", AutoController.create);
router.post("/get", AutoController.getAll);
router.get("/yearsAndPrices", AutoController.getYearsAndPrices);

router.get("/:id", AutoController.getOne);
router.delete("/:id", AutoController.remove);
router.patch("/:id", AutoController.update);

export default router;
