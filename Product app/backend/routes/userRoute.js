var express=require("express")
var router =express.Router();
var userModel=require('../model/user')


//signup api
router.post("/",(req,res)=>{
  try {
    userModel(req.body).save()
    res.status(200).send({message:"User added successfully"})
  } catch (error) {
    res.status(500).send({message:"Something went wrong"})
  }  
})

//api for login
router.post('/login',async(req,res)=>{
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if(!user){
            return res.send({message:"user not found"})
        }
        if(user.password === req.body.password){
            return res.status(200).send({message:`WELCOME ${user.role}`,user})
        }
        return res.send({message:"Invalid password"})
    } catch (error) {
      res.status(500).send({message:"Something Went Wrongg"})  
    }
})
module.exports=router;