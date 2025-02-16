import express from "express"
import { addFood,listFood,removeFood } from "../controllers/foodController.js"
import multer from "multer" //used for image handling

const foodRouter = express.Router(); //using this method we can create get,post...methods

//logic to store images in uploads folder i.e Image Storage Engine using multer
const storage = multer.diskStorage({
    destination: 'uploads',
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

//at localhost/api/food/add we run this to add foods
foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)


export default foodRouter