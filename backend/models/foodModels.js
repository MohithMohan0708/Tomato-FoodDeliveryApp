import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,required:true},
    image: {type:String,required:true},
    category: {type:String,required:true}
})

//every time we run this file a new model is created inorder to avoid use or operator to check whether the model already existed or not

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema)

export default foodModel;