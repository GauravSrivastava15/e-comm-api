import mongoose from "mongoose";
import { Schema } from "mongoose";

export const productSchema = new Schema({
    name:String, 
    prices: Number,
    category: String,
    description: String,
    inStock: Number,
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ],
    categories:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Category'
        }
    ]
    
})