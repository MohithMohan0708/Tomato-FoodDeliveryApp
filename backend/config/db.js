import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const connectDB = async()=>{
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(()=>console.log('Database connected'));
}

