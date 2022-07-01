const express=require('express')
const router=express.Router()
const userController=require("../controllers/user.controller")
const doctorController=require("../controllers/doctor.controller")
router.get('/',userController.LandingPage)
router.post('/signup',userController.Signup)
router.post('/signup',doctorController.Signup)
router.post('/login',userController.Login)
router.post('/login',doctorController.Login)
module.exports=router