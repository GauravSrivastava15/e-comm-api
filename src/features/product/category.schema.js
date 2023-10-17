import { Schema } from "mongoose";
import mongoose from "mongoose";

export const categorySchema = new Schema({
    name:String,
    product:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ]
})