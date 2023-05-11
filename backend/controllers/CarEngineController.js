import CarEngineModel from "../models/CarEngine.js";
import { CarEngineTypeController } from "./index.js";

export const create = async (req, res) => {
  try {
    const doc = new CarEngineModel({
      name: req.body.name,
      type: req.body.type,
      power: req.body.power,
      volume: req.body.volume,
    });

    const carEngine = await doc.save();

    res.json({
      carEngine,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать двигатель автомобиля",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const carEngines = await CarEngineModel.find();
    let types = await Promise.all(
      carEngines.map(async (item) => {
        item = await CarEngineTypeController.getNameById(item.type);
        return item;
      })
    );
    let minPower = await CarEngineModel.find().sort({ power: 1 }).limit(1);
    minPower = minPower[0].power;
    let maxPower = await CarEngineModel.find().sort({ power: -1 }).limit(1);
    maxPower = maxPower[0].power;
    let powers = [minPower, maxPower];

    let minVolume = await CarEngineModel.find().sort({ volume: 1 }).limit(1);
    minVolume = minVolume[0].volume;
    let maxVolume = await CarEngineModel.find().sort({ volume: -1 }).limit(1);
    maxVolume = maxVolume[0].volume;
    let volumes = [minVolume, maxVolume];
    types.unshift("Двигатель");
    res.json([types, powers, volumes]);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить все двигатели",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const carEngineId = req.params.id;
    const carEngine = await CarEngineModel.findOne({
      _id: carEngineId,
    });
    res.json(carEngine);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить двигатель",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const carEngineId = req.params.id;
    CarEngineModel.findOneAndDelete(
      {
        _id: carEngineId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Не удалось удалить двигатель",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Двигатель не найден",
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
      message: "Не удалось удалить двигатель",
    });
  }
};

export const update = async (req, res) => {
  try {
    const carEngineId = req.params.id;
    await CarEngineModel.updateOne(
      {
        _id: carEngineId,
      },
      {
        type: req.body.type,
        power: req.body.power,
        volume: req.body.volume,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось обновить двигатель",
    });
  }
};

export const getAllIds = async () => {
  let carEngines = await CarEngineModel.find();
  let ids = carEngines.map((carEngine) => {
    return carEngine.id;
  });
  return ids;
};

export const getIds = async (types, powers, volumes) => {
  let typeIds, minPower, maxPower, minVolume, maxVolume;

  //types
  if (types) {
    types = parseQuery(types);
    typeIds = await CarEngineTypeController.getIdsByType(types);
  } else {
    typeIds = await CarEngineTypeController.getAllIds();
  }
  //powers
  if (powers) {
    powers = parseQuery(powers);
    minPower = powers[0];
    maxPower = powers[1];
  } else {
    let minPowerEngine = await CarEngineModel.find()
      .sort({ power: 1 })
      .limit(1);
    minPower = minPowerEngine[0].power;
    let maxPowerEngine = await CarEngineModel.find()
      .sort({ power: -1 })
      .limit(1);
    maxPower = maxPowerEngine[0].power;
  }

  //volumes
  if (powers) {
    volumes = parseQuery(volumes);
    minVolume = volumes[0];
    maxVolume = volumes[1];
  } else {
    let minVolumeEngine = CarEngineModel.find().sort({ volume: 1 }).limit(1);
    minVolume = minVolumeEngine[0].volume;
    let maxVolumeEngine = CarEngineModel.find().sort({ volume: -1 }).limit(1);
    maxVolume = maxVolumeEngine[0].volume;
  }

  let carEngines = await CarEngineModel.find({
    type: types,
    power: { $gte: minPower, $lte: maxPower },
    volume: { $gte: minVolume, $lte: maxVolume },
  });
  let ids = carEngines.map((carEngine) => {
    return carEngine.id;
  });
  return ids;
};

function parseQuery(query) {
  return query.split("-");
}

export const getNameById = async (id) => {
  let carEngine = await CarEngineModel.findOne({ _id: id });
  let name = carEngine.name;
  return name;
};

export const getPowerById = async (id) => {
  let carEngine = await CarEngineModel.findOne({ _id: id });
  let power = carEngine.power;
  return power;
};

export const getVolumeById = async (id) => {
  let carEngine = await CarEngineModel.findOne({ _id: id });
  let volume = carEngine.volume;
  return volume;
};

export const getTypeById = async (id) => {
  let carEngine = await CarEngineModel.findOne({ _id: id });
  let type = carEngine.type;
  return type;
};
