//use this to build api so that we can add new items

import foodModel from "../models/foodModels.js";
import fs from 'fs'

//add food items

const addFood = async(req,res)=>{

    let image_filename = `${req.file.filename}`;
    //to store data in a Database
    const food = new foodModel({
        name: req.body.name,
        description : req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


//all food list
const listFood = async(req,res)=>{
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

//remove foodItem
const removeFood = async(req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`, ()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
export {addFood,listFood,removeFood}
//create a route for this in routes folder