const User=require('../models/modelUser.js')

const usersInfo = [{
    id: 1,
    username: "ddd5532",
    password: "123456",
    email: "tandung5532@gmail.com",
    name: "Dung"
}]

const getAllUsers = async (req,res)=>{
    const data =await User.find({})
    return res.status(200).json({dataFetch:data})
}
const getOneUser = (req, res) => {
    const id = req.params.id
    const checkExist = usersInfo.findIndex(user => user.id == id)
    if (checkExist != -1) {
        return res.status(200).json({
            user: usersInfo[checkExist]
        })
    } else {
        return res.status(401).json({
            alert: "Your user want to find is not exist"
        })
    }
}

const postTheUser = async (req, res) => {
  console.log("Data nhận từ FE:", req.body); // 👉 log ra để xem có đúng không

  try {
    const user = new User(req.body);
    console.log(user)
    await user.save();
    return res.send({ message: "Lưu thành công", user });
  } catch (err) {
    console.log("Lỗi khi lưu user")
    return res.status(500).send({ message: "Lỗi lưu user", error: err.message });
  }
}

const putTheUser = (req, res) => {
    const id = req.params.id
    const checkExist = usersInfo.findIndex(user => user.id == id)
    if (checkExist == -1) {
        return res.status(409).json({
            alert: "User doesn't exist"
        })
    } else {
        const name = req.body.name
        const username = req.body.username
        const password = req.body.password
        const email = req.body.email
        const putUser = {
            id: id,
            name: name,
            username: username,
            password: password,
            email: email
        }
        const keyValue = Object.entries(putUser)
        const blank = keyValue.find((value) => (value[1] == "" || value[1] == undefined))
        if (blank) {
            return res.status(400).json({
                alert: "check your input"
            })
        } else {
            usersInfo[usersInfo.findIndex(user => user.id == id)] = putUser
            return res.status(200).json({
                dataPut: usersInfo
            })
        }
    }

}
const patchTheUser = (req, res) => {
    const id = req.params.id
    const checkExist = usersInfo.findIndex(user => user.id == id)
    if (checkExist == -1) {
        return res.status(409).json({
            alert: "Can't find the user"
        })
    } else {
        const value=req.body
        const property=Object.keys(value)
        let oldUser=usersInfo.find((user)=>(user.id==id))
        property.map((field)=>{oldUser={...oldUser,[field]:value[field]}})
        usersInfo[checkExist]=oldUser
        return res.status(200).json({value:oldUser,dataUser:usersInfo})
    }
}
const deleteTheUser=(req,res)=>{
    const id=req.params.id
    const checkExists=usersInfo.findIndex(user=>user.id==id)
    if(checkExists==-1){
        return res.status(409).json({alert:"Can't find the user"})
    }else{
        usersInfo.slice(checkExists-1,1)
        return res.status(200).json({deleteUser:usersInfo})
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    postTheUser,
    putTheUser,
    patchTheUser,
    deleteTheUser
}