const userModel = require("../modles/user.js");

const getUserData = async (req, res) => {
  const { password, name } = req.body;

  const dataUser = await userModel.findOne({ name }); // Use findOne instead of find
  if (dataUser && dataUser.password === password) {
    res.status(200).json({ dataUser });
  } else {
    res.json({ message: "error" });
  }
};

const postUser = async (req, res) => {
  const { name, password, role } = req.body;

  await userModel.create({ name, password, role });
  res.status(200).json({ messgae: "created" });
};

module.exports = { getUserData, postUser };
