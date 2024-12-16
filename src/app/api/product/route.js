import dbConnect from "@/dbConnect";

const { NextResponse } = require("next/server");

import ProductModel from "@/models/ProductModel.js"

export const GET=async(req)=>{
    // Connect to MongoDB
    await dbConnect();
    // const productData= await ProductModel.find();

    const productData= await ProductModel.aggregate([
      {
        $lookup: {
          from: "users", 
          localField: "user_id", 
          foreignField: "_id", 
         as: "allData" 
        }
      },
       {
         $match: { "allData.username": "salim khan"}
       }
    ])


   return NextResponse.json({
    productData
   })
} 


export const POST=async(req)=>{

    const ProductData = await req.json()
    // Connect to MongoDB
    await dbConnect();

    const newData= await new ProductModel(ProductData);
    await newData.save();

   return NextResponse.json({
    message:"Product created successfully",
    newData
   })
} 


