import mongoose from "mongoose";

const CarDriveSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("CarDrive", CarDriveSchema);
