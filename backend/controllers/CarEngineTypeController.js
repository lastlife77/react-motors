import CarEngineTypeModel from "../models/CarEngineType.js";

export const create = async (req, res) => {
  try {
    const doc = new CarEngineTypeModel({
      name: req.body.name,
    });

    const carEngineType = await doc.save();

    res.json({
      carEngineType,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать тип двигателя",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const carEngineType = await CarEngineTypeModel.find();
    res.json(carEngineType);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить все типы двигателей",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const carEngineTypeId = req.params.id;
    const carEngineType = await CarEngineTypeModel.findOne({
      _id: carEngineTypeId,
    });
    res.json(carEngineType);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить тип двигателя",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const carEngineTypeId = req.params.id;
    CarEngineTypeModel.findOneAndDelete(
      {
        _id: carEngineTypeId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Не удалось удалить тип двигателя",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Тип двигателя не найден",
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
      message: "Не удалось удалить тип двигателя",
    });
  }
};

export const update = async (req, res) => {
  try {
    const carEngineTypeId = req.params.id;
    await CarEngineTypeModel.updateOne(
      {
        _id: carEngineTypeId,
      },
      {
        name: req.body.name,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось обновить тип двигателя",
    });
  }
};

export const getAllIds = async () => {
  let carEngineTypes = await CarEngineTypeModel.find();
  let ids = carEngineTypes.map((carEngineType) => {
    return carEngineType.id;
  });
  return ids;
};

export const getIdsByType = async (types) => {
  let carEngineTypes = await CarEngineTypeModel.find({ type: types });
  let ids = carEngineTypes.map((carEngineType) => {
    return carEngineType.id;
  });
  return ids;
};

export const getNameById = async (id) => {
  let carEngineType = await CarEngineTypeModel.findOne({ _id: id });
  let name = carEngineType.name;
  return name;
};
