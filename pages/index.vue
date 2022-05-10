<template>
  <section class="container title">
    <p>{{ message }}</p>
    <hr />
    <router-link to="/price">Price Page</router-link>
    <router-link to="/mypage">My Page</router-link>
  </section>
</template>

<script>
export default {
  name: "IndexPage",
  data: function () {
    return {
      message: "Hello world",
    };
  },
};
</script>

<style>
.title {
  font-family: "Permanent Marker", cursive;
}
</style>