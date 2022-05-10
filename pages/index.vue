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

  </section>
</template>

<script>
const axios = require("axios");
let url = "https://jsonplaceholder.typicode.com/users";

export default {
  asyncData({ params }) {
    return axios.get(url).then((res) => {
      return { users: res.data };
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