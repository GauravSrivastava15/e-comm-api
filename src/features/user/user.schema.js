import mongoose from "mongoose";
import { Schema } from "mongoose";

export const userSchema = new Schema({
    name:{type:String, maxLength:[25, "Name can't be greater than 25 characters"],required:true},
    email:{type:String, unique:true, required:true,
        match:[/.+\@.+\../,"Please enter a valid email"]
    },
    password: {type:String,
        validate:{
            validator:function(value){
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
            },
            message:"Password should be atleast 8 characters and have a special character one uppercase one lowercase and atleast one digit"
        }
    },
    type:{type:String, enum:["Customer","Seller"]}
})