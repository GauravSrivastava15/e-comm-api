import mongoose from "mongoose";
import { Schema } from "mongoose";

export const cartItemsSchema = new Schema({
    productID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    quantity:Number
})