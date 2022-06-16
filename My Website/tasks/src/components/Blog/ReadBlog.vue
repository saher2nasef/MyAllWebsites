<template>
  <div class="Container_WebSite">
    <div class="Grid">
      <div class="Left padding-20"></div>
      <div class="Right padding-20">
        <router-link to="/Blog/" class="BtnCust">
          <font-awesome-icon icon="arrow-left" class="me-2" />
          Go To Blog
        </router-link>
        <div class="card m-auto" :dir="Blog.Direction">
          <img :src="Blog.UrlImage" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ Blog.Title }}</h5>
            <p class="card-text">
              {{ Blog.Body }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blogservices from "../../services/Blogservices.js";
export default {
  name: "ReadBlog",
  props: ["id"],
  data() {
    return {
      Blog: "",
    };
  },
  created() {
    Blogservices.GetBlogToRead(this.id).then((Val) => {
      this.Blog = Val.data;
    });
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
.Grid .Right a {
  margin-right: auto !important;
  margin-left: 0 !important;
  margin-bottom: 10px !important;
}
.card {
  width: 100%;
  font-family: "Cairo", sans-serif !important;
}
.card-text {
  white-space: pre-line;
  word-break: break-word;
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
@media (max-width: 850px) {
  .card {
    width: 95%;
  }
}
</style>
