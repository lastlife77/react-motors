import CarDriveModel from "../models/CarDrive.js";

export const create = async (req, res) => {
  try {
    const doc = new CarDriveModel({
      type: req.body.type,
    });

    const carDrive = await doc.save();

    res.json({
      carDrive,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать привод автомобиля",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const carDrives = await CarDriveModel.find();
    res.json(carDrives);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить все приводы",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const carDriveId = req.params.id;
    const carDrive = await CarDriveModel.findOne({
      _id: carDriveId,
    });
    res.json(carDrive);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить привод",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const carDriveId = req.params.id;
    CarDriveModel.findOneAndDelete(
      {
        _id: carDriveId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Не удалось удалить привод",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Привод не найден",
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
      message: "Не удалось удалить привод",
    });
  }
};

export const update = async (req, res) => {
  try {
    const carDriveId = req.params.id;
    await CarBrandModel.updateOne(
      {
        _id: carDrive,
      },
      {
        type: req.body.type,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось обновить привод",
    });
  }
};

export const getIdsByType = async (types) => {
  let carDrives = await CarDriveModel.find({ type: types });
  let ids = carDrives.map((carDrive) => {
    return carDrive.id;
  });
  return ids;
};

export const getAllIds = async () => {
  let carDrives = await CarDriveModel.find();
  let ids = carDrives.map((carDrive) => {
    return carDrive.id;
  });
  return ids;
};

export const getTypeById = async (id) => {
  let carDrive = await CarDriveModel.findOne({ _id: id });
  let type = carDrive.type;
  return type;
};
