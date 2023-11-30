/**
 * npm intall mongoose -- is data modelling tool for mongoose db
 * 3 steps -- import -- create schema -- create model ( boiler plate)
 * create model -- creates collection in db if it does not exist
 */
import mongoose from "mongoose";

//const userSchema = new mongoose.Schema({}, {timestamps:true});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const user = mongoose.model("user", userSchema);
