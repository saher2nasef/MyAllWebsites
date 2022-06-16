<template>
  <div>
    <img :src="UrlImage" alt="" />
    <div>
      <h3>
        {{ Title.length > 50 ? Title.slice(0, 50) + "..." : Title }}
      </h3>
      <p>
        {{ Body.length > 100 ? Body.slice(0, 100) + "..." : Body }}
      </p>
      <button class="btn btn-danger" @click="Delete(id)">
        <font-awesome-icon icon="trash" />
      </button>
    </div>
  </div>
</template>

<script>
import Blogservices from "../../services/Blogservices";
export default {
  name: "Blog",
  props: ["Title", "Body", "UrlImage", "id"],
  methods: {
    Delete(BlogId) {
      Blogservices.delete(BlogId, this.$store.state.auth.user.UserId).then(
        (Val) => {
          this.$emit("Data", Val.data);
          this.$toast.success(`Has Been Reomved Your Blog`);
        }
      );
    },
  },
};
</script>

<style scoped>
.Blog {
  width: 100%;
  padding: 10px;
  background: #eee;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0;
}
.Blog img {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
}
.Blog div {
  width: calc(100% - 300px);
  font-family: "Cairo", sans-serif !important;
}
@media (max-width: 500px) {
  .Blog {
    flex-direction: column;
    justify-content: center;
  }
  .Blog img,
  .Blog div {
    width: 100%;
  }
  .Blog img {
    border-radius: 5px;
    height: fit-content;
    margin-right: 0;
  }
}
</style>
