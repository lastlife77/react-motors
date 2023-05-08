import mongoose from "mongoose";

const CarModelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    carBrand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CarBrand",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("CarModel", CarModelSchema);
