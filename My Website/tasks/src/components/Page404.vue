<template>
  <section class="page_404">
    <div class="four_zero_four_bg">
      <h1 class="text-center">404</h1>
    </div>

    <div class="contant_box_404">
      <h3 class="h2">Look like you're lost</h3>

      <p>the page you are looking for not avaible!</p>

      <router-link to="/" class="link_404">Go to Home</router-link>
    </div>
  </section>
</template>
<script>
export default { name: "Page404" };
</script>
<style scoped>
/*======================
    404 page
=======================*/

.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: "Arvo", serif;
  margin: auto;
  display: block;
  width: fit-content;
  text-align: center;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}
.contant_box_404 {
  margin-top: -50px;
}
</style>
