import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    googleId: {
      type: String,
    },
  },
  { timeStamps: true }
);

export const User = mongoose.model("User", userSchema);
