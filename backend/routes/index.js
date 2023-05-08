import Router from "express";

import userRouter from "./UserRouter.js";
import autoRouter from "./AutoRouter.js";
import carBodyRouter from "./CarBodyRouter.js";
import carBrandRouter from "./CarBrandRouter.js";
import carDriveRouter from "./CarDriveRouter.js";
import carEngineRouter from "./CarEngineRouter.js";
import carModelRouter from "./CarModelRouter.js";
import carTransmissionRouter from "./CarTransmissionRouter.js";
import countryRouter from "./CountryRouter.js";
import autoImageRouter from "./AutoImageRouter.js";
import carEngineTypeRouter from "./CarEngineTypeRouter.js";

const router = new Router();
router.use("/user", userRouter);
router.use("/auto", autoRouter);
router.use("/carBody", carBodyRouter);
router.use("/carBrand", carBrandRouter);
router.use("/carDrive", carDriveRouter);
router.use("/carEngine", carEngineRouter);
router.use("/carModel", carModelRouter);
router.use("/carTransmission", carTransmissionRouter);
router.use("/country", countryRouter);
router.use("/autoImage", autoImageRouter);
router.use("/carEngineType", carEngineTypeRouter);

export default router;
