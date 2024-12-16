import { NextResponse } from "next/server"
import dbConnect from "@/dbConnect"
import UserModel from "@/models/UserModel"


export const GET=async(req)=>{

     // Connect to MongoDB
     await dbConnect();
     const userData= await UserModel.find();

    return NextResponse.json({
        userData
    })
} 

export const POST=async(req)=>{

    let body=await req.json();

    
     // Connect to MongoDB
     await dbConnect();

     const userData=await new UserModel(body);
     await userData.save()

    return NextResponse.json(
        {
        success:true,
        data:userData,
        message: "User added successfully"
      },{status:201}
    )
} 

export const PUT=async(req)=>{
    let body=await req.json();
 
    // Connect to MongoDB
    try {
        
        await dbConnect();

        const userData= await UserModel.findByIdAndUpdate({_id:body.id},body,{new:true});
    
        return NextResponse.json(
            {
            success:true,
            data:userData,
            message: "User updated successfully"
          },{status:200}
        )
    } catch (error) {
        return NextResponse.json({success:false, message: error.message}, {status: 500})
    }



}

export const DELETE=async(req)=>{

    try {
        const body=await req.json();
            // Connect to MongoDB
    await dbConnect();


    const userData= await UserModel.findByIdAndDelete({_id:body.id});

    return NextResponse.json(
        {
        success:true,
        data:userData,
        message: "User Deleted successfully"
      },{status:200}
    )
        
    } catch (error) {
        return NextResponse.json({success:false, message: error.message}, {status: 500})
        
    }



}