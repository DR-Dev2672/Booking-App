
import express,{Request,Response } from "express"
import verifyToken from "../middleware/auth.middleware";
import cloudinary from "cloudinary";
import multer from "multer";
import { body } from "express-validator";
import Hotel, { HotelType } from "../models/hotel.model";

const router=express.Router();


const storage=multer.memoryStorage();

const upload=multer({
    storage:storage,
    limits:{
        fileSize:5*1024*1024,
    },
});

router.post("/",verifyToken,
[
    body("name").notEmpty().withMessage("Name is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("type").notEmpty().withMessage("Hotel Type is required"),
    body("pricePerNight").notEmpty().isNumeric().withMessage("Price per night is required and must be a number"),
    body("facilities")
    .notEmpty()
    .isArray()
    .withMessage("Facilities are required"),


],upload.array("imageFiles",6),
async(req:Request,res:Response)=>{
    try {
        const imageFiles=req.files as Express.Multer.File[];
        const newHotel:HotelType=req.body;

        const imageUrls = await uploadImages(imageFiles);

        newHotel.imageUrls=imageUrls;
        newHotel.lastUpdated= new Date;
        newHotel.userId=req.userId;
        const hotel=new Hotel(newHotel);
        await hotel.save();

        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong"})
    }



})

async function uploadImages(imageFiles: Express.Multer.File[]) {
    const uploadPromises = imageFiles.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString("base64");
      let dataURI = "data:" + image.mimetype + ";base64," + b64;
      const res = await cloudinary.v2.uploader.upload(dataURI);
      return res.url;
    });
  
    const imageUrls = await Promise.all(uploadPromises);
    return imageUrls;
  }
  

export default router