import express,{Response,Request} from 'express';
import cors from 'cors';
import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";
import mongoose from 'mongoose'
import userRoutes from './routes/user.Route'
import authRoutes from './routes/auth.Route';
import myHotelRoutes from './routes/my-hotels.Route';
import path from 'path';
import cookieParser from 'cookie-parser';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

const app=express()
app.use(cookieParser())
const PORT=8000;  
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors(
    {
        origin:process.env.FRONTEND_URL,
        credentials:true
    }
))
app.use(express.static(path.join(__dirname,"../../frontend/dist")))
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/my-hotels",myHotelRoutes);

app.get("/api/test",(req:Request,res:Response)=>{
    res.json({message:"hello from express endpoint"})
    // res.send("hii from server");

} ) 

app.listen(PORT,()=>{
    console.log(`server is running at PORT:${PORT}`)
})



