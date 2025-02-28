import express,{Response,Request} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose'
import userRoutes from './routes/user.Route'
import authRoutes from './routes/auth.Route';
import path from 'path';
import cookieParser from 'cookie-parser';

const app=express()
app.use(cookieParser())
const PORT=8000;  
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true
    }
))
app.use(express.static(path.join(__dirname,"../../frontend/dist")))
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes)

app.get("/api/test",(req:Request,res:Response)=>{
    res.json({message:"hello from express endpoint"})
    // res.send("hii from server");

} ) 

app.listen(PORT,()=>{
    console.log(`server is running at PORT:${PORT}`)
})



