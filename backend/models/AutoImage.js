import mongoose from "mongoose";

const AutoImageSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    auto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auto",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("AutoImage", AutoImageSchema);
