<template>
  <div class="Container_WebSite">
    <div class="Grid">
      <div class="Left padding-20"></div>
      <div class="Right padding-20">
        <button @click="exportData" class="BtnCust me-auto mb-2 ms-0">
          download Blogs
        </button>
        <div class="alert alert-danger mt-4" v-if="Message != ''" role="alert">
          <span>{{ Message }}</span>
        </div>
        <div class="Blogs" v-if="Message == ''">
          <div class="Blog" v-for="(Blog, i) in Blogs" :key="'A' + i">
            <img :src="Blog.UrlImage" alt="" />
            <div>
              <h3>
                {{
                  Blog.Title.length > 50
                    ? Blog.Title.slice(0, 50) + "..."
                    : Blog.Title
                }}
              </h3>
              <p>
                {{
                  Blog.Body.length > 100
                    ? Blog.Body.slice(0, 100) + "..."
                    : Blog.Body
                }}
              </p>
              <router-link
                class="BtnCust me-auto ms-0"
                :to="'/Blog/' + Blog.id"
              >
                Read more
                <font-awesome-icon icon="arrow-right" class="ms-2" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Blogservices from "../../services/Blogservices";

export default {
  name: "Blog",
  data() {
    return {
      Blogs: [],
      Message: "",
    };
  },
  created() {
    Blogservices.GetAllBlogsToRead().then((Val) => {
      this.Message = "";
      if (Val.data[0].Message == undefined && Val.data.length != 0) {
        if (Val.data.length == 0) {
          this.Message = "No Blogs";
        } else {
          this.Blogs = Val.data;
        }
      } else {
        this.Message = Val.data[0].Message;
      }
    });
  },
  methods: {
    exportData() {
      var html, link, blob, url, css;
      let Table = document.createElement("table");
      Table.innerHTML = "";
      Table.innerHTML += `
      <tr>
        <thead>
          <th>Image</th>
          <th>Title</th>
          <th>Body</th>
        </thead>
      </tr>`;

      for (let i = 0; i < this.Blogs.length; i++) {
        Table.innerHTML += `
        <tr>
          <th><img width="100" height="100" src="${this.Blogs[i].UrlImage}" /></th>
          <th>${this.Blogs[i].Title}</th>
          <th>${this.Blogs[i].Body}</th>
        </tr>`;
      }
      css =
        "<style>  table {width:100%; border-collapse: collapse;  border-style:none;  } .tables td,th{border:1px solid black;}" +
        "</style>";
      html = Table.outerHTML;
      blob = new Blob(["\ufeff", css + html], {
        type: "application/msword",
      });
      url = URL.createObjectURL(blob);
      link = document.createElement("A");
      link.href = url;
      link.download = "Document"; // default name without extension
      document.body.appendChild(link);
      if (navigator.msSaveOrOpenBlob)
        navigator.msSaveOrOpenBlob(blob, "Document.doc"); // IE10-11
      else link.click(); // other browsers
      document.body.removeChild(link);
    },
  },
};
</script>
<style scoped>
.Grid {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row-reverse;
}
.Grid .Left {
  width: 35%;
  padding-right: 10px;
}
.Grid .Right {
  width: 64%;
  padding-left: 10px;
}

.Grid .Right .Blog {
  width: 100%;
  padding: 10px;
  background: #eee;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0;
  font-family: "Cairo", sans-serif !important;
}
.Grid .Right .Blog img {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
}
.Grid .Right .Blog div {
  width: calc(100% - 300px);
}
@media (max-width: 900px) {
  .Grid {
    flex-direction: column;
  }
  .Grid .Left,
  .Grid .Right {
    width: 100% !important;
    padding: 0;
  }
}
@media (max-width: 500px) {
  .Grid .Right .Blog {
    flex-direction: column;
    justify-content: center;
  }
  .Grid .Right .Blog img,
  .Grid .Right .Blog div {
    width: 100%;
  }
  .Grid .Right .Blog img {
    border-radius: 5px;
    height: fit-content;
    margin-right: 0;
  }
}
</style>
