const express = require("express");
// const { model } = require("mongoose");
const app = express();
const { getUserData, postUser } = require("../controller/controller");
const Route = express.Router();

Route.route("/sign").post(postUser);
Route.route("/login").get(getUserData);

module.exports = Route;
