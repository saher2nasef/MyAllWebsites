<template>
  <div class="Container_WebSite" v-if="Islogin">
    <div class="Grid">
      <div class="Left padding-20"></div>
      <div class="Right padding-20">
        <h2>Create Your Blog</h2>
        <div class="CreateYourBlog">
          <input
            type="text"
            class="input"
            placeholder="Enter Your Title To Url Image"
            v-model="UrlImage"
          />
          <input
            type="text"
            class="input"
            placeholder="Enter Your Title To Blog"
            v-model="Title"
          />
          <select v-model="Direction" class="input">
            <option value="ltr">Direction left To right</option>
            <option value="rtl">Direction right To Left</option>
          </select>
          <textarea
            class="input"
            placeholder="Enter Your Body To Blog"
            v-model="Body"
          ></textarea>
          <button class="BtnCust" @click="CreateBlog">
            <font-awesome-icon icon="plus" class="me-2" />
            Create Blog
          </button>
        </div>
        <div class="alert alert-danger mt-4" v-if="Message != ''" role="alert">
          <span>{{ Message }}</span>
        </div>
        <h2 class="mt-2">All Your Blog</h2>
        <div class="Blogs" v-if="Message == ''">
          <blog
            class="Blog"
            v-for="(Blog, i) in Blogs"
            :key="'A' + i"
            :Title="Blog.Title"
            :Body="Blog.Body"
            :UrlImage="Blog.UrlImage"
            :id="Blog.id"
            @Data="Data"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Blogservices from "../../services/Blogservices";
import blog from "./Blog.vue";
export default {
  name: "CreateNewBlog",
  components: { blog },
  data() {
    return {
      Title: "",
      Body: "",
      UrlImage: "",
      Blogs: "",
      Message: "",
      Islogin: false,
      Direction: "ltr",
    };
  },
  created() {
    this.Islogin = this.$store.state.auth.status.loggedIn;
    if (this.Islogin) {
      Blogservices.GetAllBlogs(this.$store.state.auth.user.UserId).then(
        (Val) => {
          if (Val.data[0].Message == undefined && Val.data.length != 0) {
            if (Val.data.length == 0) {
              this.Message = "No Blogs";
            } else {
              this.Blogs = Val.data;
            }
          } else {
            this.Message = Val.data[0].Message;
          }
        }
      );
    } else {
      this.$router.push("identity");
    }
  },
  methods: {
    CreateBlog() {
      if (
        this.Title != "" &&
        this.Body != "" &&
        this.UrlImage != "" &&
        this.Direction != ""
      ) {
        Blogservices.Create(
          this.Title,
          this.Body,
          this.$store.state.auth.user.UserId,
          this.UrlImage,
          this.Direction
        ).then((Val) => {
          this.Blogs = Val.data;
          this.Message = "";
          this.Title = "";
          this.Body = "";
          this.UrlImage = "";
          this.$toast.success(`Has Been Added Your Blog`);
        });
      } else {
        this.$toast.error(`The Fields Must Not Be Empty`);
      }
    },
    Data(Value) {
      this.Blogs = "";
      this.Blogs = Value;
      this.Meassage = "";
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
  width: 100%;
}
.Grid .Left {
  width: 35%;
  padding-right: 10px;
}
.Grid .Right {
  width: 64%;
  padding-left: 10px;
}
.Grid .Right .CreateYourBlog {
  width: 100%;
  background-color: var(--bs-gray-900);
  color: #fff;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.Grid .Right .CreateYourBlog input {
  width: 100%;
}
.Grid .Right .CreateYourBlog textarea {
  width: 100%;
  height: 150px;
}
.Grid .Right .CreateYourBlog button {
  width: 200px !important;
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
</style>
