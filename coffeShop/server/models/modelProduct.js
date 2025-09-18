const mongoose=require('mongoose')

const productSchema= new mongoose.Schema({
    namepd:String,
    price:Number,
    Qty:Number
})

const Product= mongoose.model("Product",productSchema)

module.exports=Product


