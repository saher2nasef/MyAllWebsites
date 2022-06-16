<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/layout/Navbar";

export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>
