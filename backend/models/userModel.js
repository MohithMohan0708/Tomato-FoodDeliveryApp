import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false}) 
//if we donot specify minimize as false, the cartData wont be created as we intialised it as an empty Object

const userModel = mongoose.model.user || mongoose.model("user",userSchema)
//if the model is already created it uses it if not creates a new model

export default userModel;