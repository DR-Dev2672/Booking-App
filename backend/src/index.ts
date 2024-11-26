import express,{Response,Request} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose'




const app=express()
const PORT=8000;  
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/api/test",(req:Request,res:Response)=>{
    res.json({message:"hello from express endpoint"})
    // res.send("hii from server");

} ) 

app.listen(PORT,()=>{
    console.log(`server is running at PORT:${PORT}`)
})



