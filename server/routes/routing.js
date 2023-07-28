const express = require("express");
// const { model } = require("mongoose");
const app = express();
const {getUserData , postUser} = require("../controller/controller")
const Route = express.Router();

Route.get('/login' , getUserData);
Route.post('/sign' , postUser);


module.exports = Route