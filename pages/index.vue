<template>
  <section class="container title">
    <p>{{ message }}</p>
    <hr />
    <router-link to="/price">Price Page</router-link>
    <router-link to="/mypage">My Page</router-link>

    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.id }}, {{ user.name }}, {{ user.company.name }}
        </li>
      </ul>
    </div>

    <div>
      <img src="~/assets/cat.jpg" alt="cat">
    </div>

  </section>
</template>

<script>
const axios = require("axios");
let url = "https://jsonplaceholder.typicode.com/users";

export default {
  asyncData({ params, error }) {
    return axios
      .get(url)
      .then((res) => {
        return { users: res.data };
      })
      .catch((e) => {
        // console.log(e.response.status);
        error({ statusCode: e.response.status, message: e.message });
      });
  },
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