const  Router  = require("express");
const isAuth = require("../middlewares/Auth");
const user = require("../models/studentsignup");


const password =Router()

password.get('/password',isAuth,(req,res)=>{
    res.render("password")
})

password.patch("/changepassword",async(req,res)=>{

    let userPassword=await user.findById(req.user.id)

    if(userPassword.password !== req.body.password) return res.json({success:false,message:"Incorrect password"})

    if(req.body.newPassword !== req.body.confirmPassword) return res.json({success:false,message:"password does not match"})

    userPassword.password = req.body.newPassword

    await userPassword.save()
    
    res.json({success:true,userPassword})
})

module.exports=password