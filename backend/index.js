import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";
import cors from "cors";

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.neszwau.mongodb.net/react-motors?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB OK");
  })
  .catch((err) => {
    console.log("DB error", err);
  });

const app = express();

app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use("/", router);

app.listen(4444, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server OK");
});
