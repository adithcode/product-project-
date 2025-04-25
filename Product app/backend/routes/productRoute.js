var express = require('express');
var router = express.Router();
var pModel = require('../model/product');
const upload = require('../middleware/multer');

// api to add product details
router.post('/',upload.array("image",5),async(req,res)=>{
    try {
        console.log("h")
        console.log(req.body)
        const imagePaths = req.files.map(file=>file.filename)
        const{pname,price,stock,description}=req.body;
       const newProduct = new pModel({
        pname,
        price,
        stock,
        description,
        image:imagePaths
       })
       await newProduct.save()
       res.status(200).send({message:"Product added successfully",product:newProduct})
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
    }
})
// to get all products
router.get('/',async(req,res)=>{
    try {
        const products = await pModel.find()
        res.status(200).send({message:"Products fetched successfully",products})
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
    }
})

module.exports= router
