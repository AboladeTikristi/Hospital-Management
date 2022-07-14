const doctorModel=require('../models/doctor.model')
const cloudinary=require('cloudinary');
const SECRET=process.env.JWT_SECRET;
const jwt=require('jsonwebtoken')
cloudinary.config({ 
    cloud_name:process.env.CLOUD_NAME, 
    api_key:process.env.API_KEY, 
    api_secret:process.env.API_SECRET 
  });

const Signup=(req,res)=>{
    const newUser=req.body;
    console.log(req.body)
    if (req.body!==""){
     const email=req.body.email;
     const username=req.body.username;
 
    doctorModel.findOne({email:email},(err,result)=>{
            if (err) {
                res.status(501).send({message:'Internal server error',status:false})
            }
            else{
                if(result){
                    res.send({message:'email already exist',status:false})
                }
                else{
                    const form= new doctorModel(newUser)
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
    const logUser=req.body;
    console.log(req.body)
    const email=req.body.email
    const password=req.body.password
    doctorModel.findOne({email:email},(err,user)=>{
        if (err) {
            res.send({message:'server error',status:false})
        }
        else{
            if (!user) {
                res.send({message:'unrecognized email',staus:false})
            }
            else{
                user.validatePassword(password,(err,same)=>{
                 if (err) {
                     console.log(`an error occured`)
                 }  
                 else{
                     if(same){
                         const token=jwt.sign({email},SECRET,{expiresIn:'12h'})
                         console.log(token)
                          res.send({message:'correct password',status:true,token})
                     }
                     else{
                         res.send({message:'invalid password',status:false})
                     }
                     
                    console.log(same)
                } 
                })
            }
        }
        })
}
const allDoctors=(req,res)=>{
    doctorModel.find((err,result)=>{
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
const presentDoctor=(req,res)=>{
    const token=req.headers.authorization.split(' ')[1]
    jwt.verify(token,SECRET,(err,result)=>{
        if (err) {
            console.log(err)
            res.send({status:false,message:'unauthorized'})
        }
        else{
            doctorModel.findOne({email:result.email},(err,userDetails)=>{
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
module.exports={Signup,Login,allDoctors,presentDoctor}