import AutoModel from "./../models/Auto.js";
import CarModelModel from "./../models/CarModel.js";
import CarBrandModel from "./../models/CarBrand.js";
import CarBodyModel from "./../models/CarBody.js";

import {
  CarBrandController,
  CarModelController,
  CarBodyController,
  CarTransmissionController,
  CarEngineController,
  CarDriveController,
  CountryController,
  CarEngineTypeController,
  AutoImageController,
} from "./index.js";

export const create = async (req, res) => {
  try {
    const doc = new AutoModel({
      carModel: req.body.carModel,
      carBody: req.body.carBody,
      carTransmission: req.body.carTransmission,
      carEngine: req.body.carEngine,
      carDrive: req.body.carDrive,
      year: req.body.year,
      country: req.body.country,
      price: req.body.price,
    });

    const auto = await doc.save();

    res.json({
      auto,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать авто",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    let {
      carBrand,
      carModel,
      carBody,
      carTransmission,
      carEngine,
      carEnginePower,
      carEngineVolume,
      carDrive,
      year,
      country,
      price,
    } = req.query;

    let carModelIds,
      carBodyIds,
      carTransmissionIds,
      carEngineIds,
      carDriveIds,
      years,
      countryIds,
      minPrice,
      maxPrice;

    //carModel
    if (carBrand) {
      carBrand = parseQuery(carBrand);
      let carBrandIds = await CarBrandController.getIdsByName(carBrand);
      carModelIds = await CarModelController.getIdsByCarBrandId(carBrandIds);
    } else if (carModel) {
      carModelIds = await CarModelController.getIdsByName(carModel);
    } else {
      carModelIds = await CarModelController.getAllIds();
    }

    //carBody
    if (carBody) {
      carBody = parseQuery(carBody);
      carBodyIds = await CarBodyController.getIdsByType(carBody);
    } else {
      carBodyIds = await CarBodyController.getAllIds();
    }

    //carTransmission
    if (carTransmission) {
      carTransmission = parseQuery(carTransmission);
      carTransmissionIds = await CarTransmissionController.getIdsByType(
        carTransmission
      );
    } else {
      carTransmissionIds = await CarTransmissionController.getAllIds();
    }

    //carEngine
    if (carEngine || carEnginePower || carEngineVolume) {
      carEngineIds = await CarEngineController.getIds(
        carEngine,
        carEnginePower,
        carEngineVolume
      );
    } else {
      carEngineIds = await CarEngineController.getAllIds();
    }

    //carDrive
    if (carDrive) {
      carDrive = parseQuery(carDrive);
      carDriveIds = await CarDriveController.getIdsByType(carDrive);
    } else {
      carDriveIds = await CarDriveController.getAllIds();
    }

    //year
    if (year) {
      years = parseQuery(year);
    } else {
      years = await getAllYears();
    }

    //country
    if (country) {
      country = parseQuery(country);
      countryIds = await CountryController.getIdsByName(country);
    } else {
      countryIds = await CountryController.getAllIds();
    }

    //price
    if (price) {
      price = parseQuery(price);
      minPrice = price[0];
      maxPrice = price[1];
    } else {
      let minPriceAuto = await AutoModel.find().sort({ price: 1 }).limit(1);
      minPrice = minPriceAuto[0].price;
      let maxPriceAuto = await AutoModel.find().sort({ price: -1 }).limit(1);
      maxPrice = maxPriceAuto[0].price;
    }

    let autos = await AutoModel.find({
      carModel: carModelIds,
      carBody: carBodyIds,
      carTransmission: carTransmissionIds,
      carEngine: carEngineIds,
      carDrive: carDriveIds,
      year: years,
      country: countryIds,
      price: { $gte: minPrice, $lte: maxPrice },
    });
    autos = await Promise.all(
      autos.map(async (auto) => {
        let carBrandId = await CarModelController.getCarBrandById(
          auto.carModel
        );
        let carBrand = await CarBrandController.getNameById(carBrandId);
        let carModel = await CarModelController.getNameById(auto.carModel);
        let carBody = await CarBodyController.getTypeById(auto.carBody);
        let carTransmission = await CarTransmissionController.getTypeById(
          auto.carTransmission
        );
        let carEngine = await CarEngineController.getNameById(auto.carEngine);
        let power = await CarEngineController.getPowerById(auto.carEngine);
        let volume = await CarEngineController.getVolumeById(auto.carEngine);
        let carEngineTypeId = await CarEngineController.getTypeById(
          auto.carEngine
        );
        let carEngineType = await CarEngineTypeController.getNameById(
          carEngineTypeId
        );
        let carDrive = await CarDriveController.getTypeById(auto.carDrive);
        let year = auto.year;
        let country = await CountryController.getNameById(auto.country);
        let price = auto.price;
        let imgs = await AutoImageController.getImgsByCar(auto.id);

        let res = {
          id: auto.id,
          carBrand: carBrand,
          carModel: carModel,
          carBody: carBody,
          carTransmission: carTransmission,
          carEngine: carEngine,
          power: power,
          volume: volume,
          carEngineType: carEngineType,
          carDrive: carDrive,
          year: year,
          country: country,
          price: price,
          imgs: imgs,
        };
        return res;
      })
    );
    res.json(autos);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить все авто",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const autoId = req.params.id;
    const auto = await AutoModel.findOne({
      _id: autoId,
    });
    res.json(auto);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить авто",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const autoId = req.params.id;
    AutoModel.findOneAndDelete(
      {
        _id: autoId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Не удалось удалить авто",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Авто не найдено",
          });
        }

        res.json({
          success: true,
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось удалить авто",
    });
  }
};

export const update = async (req, res) => {
  try {
    const autoId = req.params.id;
    await AutoModel.updateOne(
      {
        _id: autoId,
      },
      {
        carModel: req.body.carModel,
        carBody: req.body.carBody,
        carTransmission: req.body.carTransmission,
        carEngine: req.body.carEngine,
        carDrive: req.body.carDrive,
        year: req.body.year,
        country: req.body.country,
        price: req.body.price,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось обновить авто",
    });
  }
};

function parseQuery(query) {
  return query.split("-");
}

async function getAllYears() {
  let autos = await AutoModel.find();
  let years = autos.map((auto) => {
    return auto.year;
  });
  return years;
}
