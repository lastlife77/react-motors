import mongoose from "mongoose";

const AutoSchema = new mongoose.Schema(
  {
    carModel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CarModel",
      required: true,
    },
    carBody: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CarBody",
      required: true,
    },
    carTransmission: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CarTransmission",
      required: true,
    },
    carEngine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CarEngine",
      required: true,
    },
    carDrive: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CarDrive",
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Auto", AutoSchema);
