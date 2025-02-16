import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import 'dotenv/config'

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors()) //using this we can access backend from frontend

//Database connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))//if we insert any files in uploads folder those can be seen at /images/f_name
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API working")
})

// mongodb+srv://mohithmohan0708:<db_password>@cluster0.mm6le.mongodb.net/?

//to run the express Server
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})