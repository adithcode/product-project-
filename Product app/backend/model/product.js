var mongoose=require("mongoose")
var pSchema=mongoose.Schema({
    pname:String,
    price:Number,
    stock:Number,
    description:String,
    image:[String]
    // role:{type:String,enum:["admin","user"],default:"user"}
})
var pModel=mongoose.model("admin",pSchema)
module.exports=pModel;