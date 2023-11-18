import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    id: {
      type: Number,
    },
  },
  { timeStamps: true }
);

export const user = mongoose.model("user", userSchema);
