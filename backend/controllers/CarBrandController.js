import CarBrandModel from "../models/CarBrand.js";

export const create = async (req, res) => {
  try {
    const doc = new CarBrandModel({
      name: req.body.name,
    });

    const carBrand = await doc.save();

    res.json({
      carBrand,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать марку автомобиля",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const carBrands = await CarBrandModel.find();
    let names = carBrands.map((carBrand) => {
      return carBrand.name;
    });
    names.unshift("Все марки");

    res.json(names);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить все марки",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const carBrandId = req.params.id;
    const carBrand = await CarBrandModel.findOne({
      _id: carBrandId,
    });
    res.json(carBrand);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить марку",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const carBrandId = req.params.id;
    CarBrandModel.findOneAndDelete(
      {
        _id: carBrandId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Не удалось удалить марку",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Марка не найдена",
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
      message: "Не удалось удалить марку",
    });
  }
};

export const update = async (req, res) => {
  try {
    const carBrandId = req.params.id;
    await CarBrandModel.updateOne(
      {
        _id: carBrandId,
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
      message: "Не удалось обновить марку",
    });
  }
};

export const getIdsByName = async (names) => {
  let carBrands = await CarBrandModel.find({ name: names });
  let ids = carBrands.map((carBrand) => {
    return carBrand.id;
  });
  return ids;
};

export const getNameById = async (id) => {
  let carBrand = await CarBrandModel.findOne({ _id: id });
  let name = carBrand.name;
  return name;
};
