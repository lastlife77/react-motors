import mongoose from "mongoose";

const CarTransmissionSchema = new mongoose.Schema(
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

export default mongoose.model("CarTransmission", CarTransmissionSchema);
