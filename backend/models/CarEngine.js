import mongoose from "mongoose";

const CarEngineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CarEngineType",
      required: true,
    },
    power: {
      type: Number,
      required: true,
    },
    volume: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("CarEngine", CarEngineSchema);
