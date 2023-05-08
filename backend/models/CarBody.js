import mongoose from "mongoose";

const CarBodySchema = new mongoose.Schema(
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

export default mongoose.model("CarBody", CarBodySchema);
