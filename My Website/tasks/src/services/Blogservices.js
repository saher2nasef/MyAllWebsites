import axios from "axios";
const API_URL = "https://saher-nasef.herokuapp.com/Blog/";
const ReadBlog = "https://saher-nasef.herokuapp.com/ReadBlog/";
class Blogservices {
  GetAllBlogs(UserId) {
    return axios.get(API_URL + UserId).then((Val) => {
      return Val;
    });
  }
  GetAllBlogsToRead() {
    return axios.get(API_URL).then((Val) => {
      return Val;
    });
  }
  GetBlogToRead(BlogId) {
    return axios.get(ReadBlog + BlogId).then((Val) => {
      return Val;
    });
  }
  Create(Title, Body, UserId, UrlImage, Direction) {
    return axios
      .post(API_URL, {
        Title: Title,
        Body: Body,
        UserId: UserId,
        UrlImage: UrlImage,
        Direction: Direction,
      })
      .then((Val) => {
        return Val;
      });
  }
  delete(BlogId, UserId) {
    return axios.delete(API_URL + UserId + "/" + BlogId).then((Val) => {
      return Val;
    });
  }
}

export default new Blogservices();
