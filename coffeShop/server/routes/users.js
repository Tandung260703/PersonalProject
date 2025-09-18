const router=require('express').Router()
const {
  getAllUsers,
  postTheUser,putTheUser,patchTheUser,deleteTheUser}=require("../controllers/controllersUser")
const productOfCus=require('./products.js')
const User=require('../models/modelUser.js')
 
router.use('/product',productOfCus)

router.get('/',getAllUsers)
router.post('/', postTheUser);

router.put("/:id",putTheUser)

router.patch("/:id",patchTheUser)

router.delete("/:id",deleteTheUser)
module.exports=router

