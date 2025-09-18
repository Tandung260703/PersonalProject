const router=require("express").Router()
const usersInfo=require('./users.js')

router.use('/users',usersInfo)

module.exports=router