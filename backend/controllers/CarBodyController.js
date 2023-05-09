import CarBodyModel from "../models/CarBody.js";

export const create = async (req, res) => {
  try {
    const doc = new CarBodyModel({
      type: req.body.type,
    });

    const carBody = await doc.save();

    res.json({
      carBody,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать тип кузова автомобиля",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const carBodys = await CarBodyModel.find();
    let types = carBodys.map((item) => {
      return item.type;
    });
    types.unshift("Кузов");
    res.json(types);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить все типы кузова",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const carBodyId = req.params.id;
    const carBody = await CarBodyModel.findOne({
      _id: carBodyId,
    });
    res.json(carBody);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить кузов",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const carBodyId = req.params.id;
    CarBodyModel.findOneAndDelete(
      {
        _id: carBodyID,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Не удалось удалить кузов",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Кузов не найден",
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
      message: "Не удалось удалить кузов",
    });
  }
};

export const update = async (req, res) => {
  try {
    const carBodyID = req.params.id;
    await CarBodyModel.updateOne(
      {
        _id: carBodyID,
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
      message: "Не удалось обновить кузов",
    });
  }
};

export const getAllIds = async () => {
  let carBodys = await CarBodyModel.find();
  let ids = carBodys.map((carBody) => {
    return carBody.id;
  });
  return ids;
};

export const getIdsByType = async (types) => {
  let carBodys = await CarBodyModel.find({ type: types });
  let ids = carBodys.map((carBody) => {
    return carBody.id;
  });
  return ids;
};

export const getTypeById = async (id) => {
  let carBody = await CarBodyModel.findOne({ _id: id });
  let type = carBody.type;
  return type;
};
