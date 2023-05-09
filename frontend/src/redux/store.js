import { configureStore } from "@reduxjs/toolkit";
import { autosReducer } from "./slices/autos";
import { userReducer } from "./slices/user";
import { carBrdandsReducer } from "./slices/carBrands";
import { carModelsReducer } from "./slices/carModels";
import { carBodysReducer } from "./slices/carBodys";
import { carTransmissionReducer } from "./slices/carTransmissions";
import { carEngineReducer } from "./slices/carEngines";
import { carDrivesReducer } from "./slices/carDrives";
import { countriesReducer } from "./slices/countries";
import { yearsAndPricesReducer } from "./slices/yearsAndPrices";

const store = configureStore({
  reducer: {
    autos: autosReducer,
    user: userReducer,
    carBrands: carBrdandsReducer,
    carModels: carModelsReducer,
    carBodys: carBodysReducer,
    carTransmissions: carTransmissionReducer,
    carEngines: carEngineReducer,
    carDrives: carDrivesReducer,
    countries: countriesReducer,
    yearsAndPrices: yearsAndPricesReducer,
  },
});

export default store;
