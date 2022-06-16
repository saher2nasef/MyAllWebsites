const db = require("../config/db");
class Post {
  constructor(title, body, ImgSrc) {
    this.title = title;
    this.body = body;
    this.ImgSrc = ImgSrc;
  }
  async Save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let CreatedAtDate = `${yyyy}-${mm}-${dd}`;
    let sql = `INSERT INTO posts VALUES (3,'${this.title}','${this.body}','${this.ImgSrc}','${CreatedAtDate}')`;

    return db.execute(sql);
  }
  static FindAll() {
    let sql = `SELECT * FROM posts;`;
    return db.execute(sql);
  }
  static GetPostById(id) {
    let sql = `SELECT * FROM posts WHERE id = ${id};`;
    return db.execute(sql);
  }
}
module.exports = Post;
