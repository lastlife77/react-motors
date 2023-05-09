import CountrylModel from "../models/Country.js";

export const create = async (req, res) => {
  try {
    const doc = new CountrylModel({
      name: req.body.name,
    });

    const country = await doc.save();

    res.json({
      country,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать страну",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const countries = await CountrylModel.find();
    let names = countries.map((item) => {
      return item.name;
    });
    names.unshift("Страны");

    res.json(names);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить все страны",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const countryId = req.params.id;
    const country = await CountrylModel.findOne({
      _id: countryId,
    });
    res.json(country);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить страну",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const countryId = req.params.id;
    CountrylModel.findOneAndDelete(
      {
        _id: countryId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Не удалось удалить страну",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Страна не найдена",
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
      message: "Не удалось удалить страну",
    });
  }
};

export const update = async (req, res) => {
  try {
    const countryId = req.params.id;
    await CountrylModel.updateOne(
      {
        _id: countryId,
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
      message: "Не удалось обновить страну",
    });
  }
};

export const getIdsByName = async (names) => {
  let countries = await CountrylModel.find({ name: names });
  let ids = countries.map((country) => {
    return country.id;
  });
  return ids;
};

export const getAllIds = async () => {
  let countries = await CountrylModel.find();
  let ids = countries.map((country) => {
    return country.id;
  });
  return ids;
};

export const getNameById = async (id) => {
  let country = await CountrylModel.findOne({ _id: id });
  let name = country.name;
  return name;
};
