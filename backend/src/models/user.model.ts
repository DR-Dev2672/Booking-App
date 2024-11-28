
import mongoose, { mongo } from "mongoose";

export type userType={
    _id:string,
    email:string,
    password:string,
    firstName:string,
    lastName:string
}

const userSchema =new mongoose.Schema({
    email:{
        type:String,
        require:true

    },
    password:{
        type:String,
        require:true,

    },
    firstName:{
        type:String,
        require:true,

    },
    lastName:{
        type:String,
        require:true,

    }

})

export const User=mongoose.model<userType>("User",userSchema)