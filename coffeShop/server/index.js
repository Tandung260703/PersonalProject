const express=require("express")
const morgan=require("morgan")
const cors=require("cors")
const app=express()
const dotenv=require("dotenv")
const rt=require('./routes/rt.js')
const mongoose=require('mongoose')
dotenv.config()
const {PORT}=process.env
mongoose.connect('mongodb://localhost:27017/users')
.then(()=>console.log("Kết nối mongodb thành công!"))
.catch((err)=>console.log("Kết nối mongodb thất bại!",err))
app.use(express.json())
app.use(morgan("combined"))
app.use(cors())
app.use('/api',rt)


app.listen(PORT,()=>{
    console.log(`app is listen to http://localhost:${PORT}`)
})

