const userModel=require('../models/user.model')
const doctorModel=require('../models/doctor.model')
const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')
const crypto = require('crypto')
const cloudinary=require('cloudinary');
const SECRET=process.env.JWT_SECRET;
const jwt=require('jsonwebtoken')
const bcrypt =require('bcryptjs');

const resetPassword=(req,res)=>{
    console.log(req.body)
    const password=req.body.password;
    const email=req.body.email;
    var who=req.body.who;
    const saltRound=10
   
    bcrypt.hash(password,saltRound,(err,hashedPassword)=>{
        if (err) {
            console.log(err)
        }
        else{
           var hashed=hashedPassword
           if (who=="doctor") {
                doctorModel.updateOne({email:email},{$set:{password:hashed}},
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
           else if (who=="patient") {
                userModel.updateOne({email:email},{$set:{password:hashed}},
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
         }
    })

}
const forgetEmail=(req,res)=>{
    const email=req.body.email
    var who=req.body.who
    console.log(req.body)
    if (who="doctor"){
        doctorModel.findOne({email:email},(err,user)=>{
            if(err){
                res.send({status:false,message:"User not found"})
            }
            else if(user==null){
                res.send({status:false,message:"User not found"})
            }
            else{
                
                 // initialize nodemailer
             var transporter = nodemailer.createTransport(
            {
                service: 'gmail',
                auth:{
                    user: 'ladyj2183@gmail.com',
                    pass: 'sydorencexfzcmdc'
                }
            }
        );
        
        // point to the template folder
        const handlebarOptions = {
            viewEngine: {
                partialsDir: path.resolve('./views/'),
                defaultLayout: false,
            },
            viewPath: path.resolve('./views/'),
        };
        
        // use a template file with nodemailer
        transporter.use('compile', hbs(handlebarOptions))
        
        const num=Math.floor(100000 + Math.random() * 900000);
        var mailOptions = {
            from: '"Joanna" <ladyj2183@gmail.com>', // sender address
            to: user.email, // list of receivers
            subject: 'Welcome!',
            template: 'email', // the name of the template file i.e email.handlebars
            context:{
                name:`${user.firstname} ${user.lastname}`, // replace {{name}} with Adebola
                company: 'Medicare',
                email:user.email,
                who:"doctor",
                token:num,
            }
        };
        
        // trigger the sending of the E-mail
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
               console.log(error);
                res.send({status:false,message:"error sending token"})
            }
            else{
           
            res.send({status:true,message:num,email:user.email})
            console.log('Message sent: ' + info.response);
        }
        });
            }
        })
    }
    else if (who="patient") {
        userModel.findOne({email:email},(err,user)=>{
            if(err){
                res.send({status:false,message:"User not found"})
            }
            // else if(!user){
            //     res.send({status:false,message:"This email is not registered with us ,Please input the correct email"})
            // }
            else if(user==null){
                res.send({status:false,message:"User not found"})
            }
            else{
                // res.send({status:true,message:"Email found",email:user.email})
                // crypto
                const realEmail=user.email
               
                 // initialize nodemailer
             var transporter = nodemailer.createTransport(
            {
                service: 'gmail',
                auth:{
                    user: 'ladyj2183@gmail.com',
                    pass: 'sydorencexfzcmdc'
                }
            }
        );
        
        // point to the template folder
        const handlebarOptions = {
            viewEngine: {
                partialsDir: path.resolve('./views/'),
                defaultLayout: false,
            },
            viewPath: path.resolve('./views/'),
        };
        
        // use a template file with nodemailer
        transporter.use('compile', hbs(handlebarOptions))
        
        const num=Math.floor(100000 + Math.random() * 900000);
        var mailOptions = {
            from: '"Joanna" <ladyj2183@gmail.com>', // sender address
            to: user.email, // list of receivers
            subject: 'Welcome!',
            template: 'email', // the name of the template file i.e email.handlebars
            context:{
                name:`${user.firstname} ${user.lastname}`, // replace {{name}} with Adebola
                company: 'Medicare',
                email:user.email,
                who:patient,
                token:num,
            }
        };
        
        // trigger the sending of the E-mail
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
               console.log(error);
                res.send({status:false,message:"error sending token"})
            }
            else{
           
            res.send({status:true,message:num,email:user.email})
            console.log('Message sent: ' + info.response);
        }
        });
            }
        }) 
    }
}
module.exports={resetPassword,forgetEmail}