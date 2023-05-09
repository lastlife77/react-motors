import CarTransmissionModel from "../models/CarTransmission.js";

export const create = async (req, res) => {
  try {
    const doc = new CarTransmissionModel({
      type: req.body.type,
    });

    const carTransmission = await doc.save();

    res.json({
      carTransmission,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать АКПП автомобиля",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const carTransmissions = await CarTransmissionModel.find();
    let types = carTransmissions.map((item) => {
      return item.type;
    });
    types.unshift("КПП");
    res.json(types);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить все АКПП",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const carTransmissionId = req.params.id;
    const carTransmission = await CarTransmissionModel.findOne({
      _id: carTransmissionId,
    });
    res.json(carTransmission);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить АКПП",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const carTransmissionId = req.params.id;
    CarTransmissionModel.findOneAndDelete(
      {
        _id: carTransmission,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Не удалось удалить АКПП",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "АКПП не найдена",
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
      message: "Не удалось удалить АКПП",
    });
  }
};

export const update = async (req, res) => {
  try {
    const carTransmissionId = req.params.id;
    await CarTransmissionModel.updateOne(
      {
        _id: carTransmissionId,
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
      message: "Не удалось обновить АКПП",
    });
  }
};

export const getAllIds = async () => {
  let carTransmissions = await CarTransmissionModel.find();
  let ids = carTransmissions.map((carTransmission) => {
    return carTransmission.id;
  });
  return ids;
};

export const getIdsByType = async (types) => {
  let carTransmissions = await CarTransmissionModel.find({ type: types });
  let ids = carTransmissions.map((carTransmission) => {
    return carTransmission.id;
  });
  return ids;
};

export const getTypeById = async (id) => {
  let carTransmission = await CarTransmissionModel.findOne({ _id: id });
  let type = carTransmission.type;
  return type;
};
