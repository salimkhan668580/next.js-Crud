import mongoose from "mongoose";

const ProductSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
   user_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User'
   }
})

const Product= mongoose.models.Product ||mongoose.model('Product',ProductSchema)

export default Product;