const Post = require("../models/Post");

exports.GetAllPosts = async (req, res, next) => {
  try {
    const [Posts, _] = await Post.FindAll();
    console.log(Posts);
    res.status(200).json(Posts);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.CreateNewPost = async (req, res, next) => {
  try {
    let { title, body, ImgSrc } = req.body;
    let post = new Post(title, body, ImgSrc);
    post = await post.Save();
    res.status(201).json({ Message: "Post Created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.GetPostById = async (req, res, next) => {
  try {
    const [post, _] = await Post.GetPostById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
