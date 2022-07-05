const userModel = require('../models/user.model')
const cloudinary=require('cloudinary');
const SECRET=process.env.JWT_SECRET;
const jwt=require('jsonwebtoken')
cloudinary.config({ 
    cloud_name:process.env.CLOUD_NAME, 
    api_key:process.env.API_KEY, 
    api_secret:process.env.API_SECRET 
  });

const LandingPage=(res,req)=>{
    res.send("I am here o")
}
const Signup=(req,res)=>{
    const newUser=req.body;
    console.log(req.body)
    if (req.body!==""){
     const email=req.body.email;
     const username=req.body.username;
    
   
    userModel.findOne({email:email},(err,result)=>{
            if (err) {
                res.status(501).send({message:'Internal server error',status:false})
            }
            else{
                if(result){
                    res.send({message:'email already exist',status:false})
                }
                else{
                    const form= new userModel(newUser)
                        form.save((err,result)=>{
                        if (err) {
                            console.log(err)
                            console.log(`error`)
                            res.send({message:"user signup failed, please try again later",status:false})
                        }
                        else{
                            res.send({message:"registration successful",status:true})
                        }
                    })
                    }
                }
        })
    }
}
const Login=(req,res)=>{
    console.log('heeee')
    const password =req.body.password
    const email =req.body.email
    userModel.findOne({email:email},(err,result)=>{
        if(err){
            res.status(501).send({message:"Server Eror",status:false})
        }else{
            if(!result){
                res.send({message:"Error",status:false})  
            }else{
                result.validatePassword(password,(err,same)=>{
                    if(err){
                        console.log(error)
                        console.log(`error dey`)
                    }else{
                        if(same){
                            const token = jwt.sign({email},SECRET,{expiresIn:"7h"})
                            console.log(token)
                            res.send({message:"Correct Password",status:true,token})
                        }else{
                            res.send({message:"Invalid Password",status:false})
                        }
                    }
                })
            }
        }
    })
}
module.exports={LandingPage,Signup,Login}