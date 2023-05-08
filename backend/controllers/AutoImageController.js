import AutoImageModel from "../models/AutoImage.js";

export const create = async (req, res) => {
  try {
    const doc = new AutoImageModel({
      image: `/uploads/${req.file.originalname}`,
      auto: req.body.auto,
    });

    const autoImage = await doc.save();

    res.json({
      autoImage,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось добавить картинку",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const autoImages = await AutoImageModel.find();
    res.json(autoImages);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить все изображения",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const autoImageId = req.params.id;
    const autoImage = await AutoImageModel.findOne({
      _id: autoImageId,
    });
    res.json(autoImage);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить изображение",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const autoImageId = req.params.id;
    AutoImageModel.findOneAndDelete(
      {
        _id: autoImageId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Не удалось удалить изображение",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Изображение не найдено",
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
      message: "Не удалось удалить изображение",
    });
  }
};

export const update = async (req, res) => {
  try {
    const autoImageId = req.params.id;
    await AutoImageModel.updateOne(
      {
        _id: autoImageId,
      },
      {
        image: `uploads/${req.file.originalname}`,
        auto: req.body.auto,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось обновить изображение",
    });
  }
};

export const getForCar = async (req, res) => {
  try {
    const autoId = req.body.carId;
    const autoImages = await AutoImageModel.find({
      auto: autoId,
    });
    res.json(autoImages);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить изображения",
    });
  }
};

export const getImgsByCar = async (auto) => {
  let autoImgs = await AutoImageModel.find({
    auto: auto,
  });
  let imgs = autoImgs.map((img) => {
    return img.image;
  });
  return imgs;
};
