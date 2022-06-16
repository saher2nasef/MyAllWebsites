<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid Media">
      <router-link to="/" class="navbar-brand"> All Things </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <div v-if="!currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/identity" class="nav-link">
                <font-awesome-icon icon="sign-in-alt" class="mx-2" />
                <span>identity</span>
              </router-link>
            </li>
          </div>
          <li class="nav-item">
            <router-link to="/Blog" class="nav-link">
              <font-awesome-icon icon="blog" />
              Blog
            </router-link>
          </li>
          <div v-if="currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">
                <font-awesome-icon icon="user" class="mx-2" />
                {{ currentUser.username }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Create_Task" class="nav-link">
                <font-awesome-icon icon="plus" class="mx-2" />
                <span>Create Task</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Create_Blog" class="nav-link">
                <font-awesome-icon icon="plus" class="mx-2" />
                <span>Create Your Blog</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/identity"
                class="nav-link"
                @click.prevent="logOut"
              >
                <font-awesome-icon icon="sign-out-alt" class="mx-2" />
                <span>LogOut</span>
              </router-link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  nam: "NavBar",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_ADMIN");
      }
      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_MODERATOR");
      }
      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/identity");
    },
  },
};
</script>
<style scoped>
.Media {
  padding: 0 25px;
  width: 1370px;
}
@media (min-width: 1400px) {
  .Container_WebSite {
    width: 1400px;
  }
}
</style>
