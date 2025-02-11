
import mongoose, { mongo } from "mongoose";

import bcrypt from "bcryptjs";

export type userType={
    isModified(arg0: string): unknown;
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

userSchema.pre<userType>("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,8);
    }
    next();
});

export const User=mongoose.model<userType>("User",userSchema)