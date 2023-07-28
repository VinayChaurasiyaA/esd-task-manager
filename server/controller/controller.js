const userModel = require("../modle/user")

const getUserData = async (req , res) => {
    const {password , name } = req.body;

    const dataUser = await userModel.find({name});
    if(dataUser.password === password) {
        res.status(200).json(dataUser);
    }
    throw new Error("password didn't matched");
}

const postUser = async (req , res) => {
    const {name , password , role} = req.body;

    await userModel.create({name , password , role});
    res.status(200).json({messgae: "created"});
}
module.exports = {getUserData , postUser}
