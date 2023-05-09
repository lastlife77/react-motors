import CarModelModel from "../models/CarModel.js";

export const create = async (req, res) => {
  try {
    const doc = new CarModelModel({
      name: req.body.name,
      carBrand: req.body.carBrand,
    });

    const carModel = await doc.save();

    res.json({
      carModel,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать модель автомобиля",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const carModels = await CarModelModel.find();
    let names = carModels.map((item) => {
      return item.name;
    });
    names.unshift("Все модели");
    res.json(names);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить все модели",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const carModelId = req.params.id;
    const carModel = await CarModelModel.findOne({
      _id: carModelId,
    });
    res.json(carModel);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить модель",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const carModelId = req.params.id;
    CarModelModel.findOneAndDelete(
      {
        _id: carModelId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Не удалось удалить модель",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Модель не найдена",
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
      message: "Не удалось удалить модель",
    });
  }
};

export const update = async (req, res) => {
  try {
    const carModelId = req.params.id;
    await CarModelModel.updateOne(
      {
        _id: carModelId,
      },
      {
        name: req.body.name,
        carBrand: req.body.carBrand,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось обновить модель",
    });
  }
};

export const getIdsByCarBrandId = async (carBrandsId) => {
  let carModels = await CarModelModel.find({ carBrand: carBrandsId });
  let ids = carModels.map((carModel) => {
    return carModel.id;
  });
  return ids;
};

export const getIdsByName = async (names) => {
  let carModels = await CarModelModel.find({ name: names });
  let ids = carModels.map((carModel) => {
    return carModel.id;
  });
  return ids;
};

export const getNameById = async (id) => {
  let carModel = await CarModelModel.findOne({ _id: id });
  let name = carModel.name;
  return name;
};

export const getCarBrandById = async (id) => {
  let carModel = await CarModelModel.findOne({ _id: id });
  let carBrandId = carModel.carBrand;
  return carBrandId;
};

export const getAllIds = async () => {
  let carModels = await CarModelModel.find();
  let ids = carModels.map((carModel) => {
    return carModel.id;
  });
  return ids;
};
