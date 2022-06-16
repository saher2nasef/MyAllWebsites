const express = require("express");
const postContrels = require("../controllers/postControllers");
const roter = express.Router();

roter.route("/").get(postContrels.GetAllPosts).post(postContrels.CreateNewPost);
roter.route("/:id").get(postContrels.GetPostById);

module.exports = roter;
