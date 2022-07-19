const userModel = require('../models/user.model')
const cloudinary=require('cloudinary');
const SECRET=process.env.JWT_SECRET;
const bcrypt =require('bcryptjs');
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
    var date=new Date()
    console.log(req.body)
    if (req.body!==""){
     const email=req.body.email;
     const username=req.body.username;
     newUser.patient_id= "PAT"+
       date.getDate()+Math.floor(Math.random()*100)
    
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
                            const token = jwt.sign({email},SECRET,{expiresIn:"24h"})
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
const allPatients=(req,res)=>{
    userModel.find((err,result)=>{
        if (err) {
            console.log(err)
            console.log(`error`)
            res.send({message:"user details stuck!",status:false})
        }
        else{
            res.send({allUsers:result,status:true})
           
        }
    })
}
const presentPatient=(req,res)=>{
    const token=req.headers.authorization.split(' ')[1]
    console.log(token)
    jwt.verify(token,SECRET,(err,result)=>{
        if (err) {
            console.log(err)
            res.send({status:false,message:'unauthorized'})
        }
        else{
            userModel.findOne({email:result.email},(err,userDetails)=>{
                if (err) {
                    res.send({status:false,message:'internal server error'})
                }
                else{
                    res.send({status:true,message:" still valid",userDetails})
                }
            })
          
            
        }
    })
}
const checkPassword=(req,res)=>{
    const password=req.body.oldpass
    const id=req.body.id
    console.log(req.body)
    userModel.findOne({_id:id},(err,result)=>{
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
                            res.send({message:"Correct Password",status:true})
                        }else{
                            res.send({message:"Invalid Password",status:false})
                        }
                    }
                })
            }
        }
    })
}
const resetPassword=(req,res)=>{
    const id=req.body.id
    const password=req.body.password
    const saltRound=10
   
    bcrypt.hash(password,saltRound,(err,hashedPassword)=>{
        if (err) {
            console.log(err)
            
            res.send({status:false,message:"Server side error , Please try again"})
        }
        else{
           var hashed=hashedPassword
                userModel.updateOne({_id:id},{$set:{password:hashed}},
                    (error,result)=>{
                        if(error){
                            console.log(error);
                            res.send({status:false,message:"Password not set error occcured, try again"})
                        }
                        else{
                        
                        res.send({status:true,message:"Password reset successful"})
                    }  
                })
           }
         
    })
}

module.exports={LandingPage,Signup,Login,presentPatient,allPatients,checkPassword,resetPassword}