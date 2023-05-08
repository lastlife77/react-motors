import mongoose from "mongoose";

const CarEngineTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("CarEngineType", CarEngineTypeSchema);
