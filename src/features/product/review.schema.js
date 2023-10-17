import mongoose from "mongoose";
import { Schema } from "mongoose";

export const reviewSchema = new Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rating: Number,
});
