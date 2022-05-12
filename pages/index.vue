<template>
  <section class="container title">
    <p>{{ message }}</p>
    <hr />
    <router-link to="/price">Price Page</router-link>
    <router-link to="/mypage">My Page</router-link>
    <router-link to="/todos">Todo Page</router-link>

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

    <div>
      <h2>vuex</h2>
      <p>{{ $store.state.hello.message }}</p>

      <button v-on:click="$store.dispatch('hello/updateMessageAction', 'Commit with payload', {root: true})">Dispatch</button>
    </div>
    <div>
      <Counter></Counter>
      <hr>
      <Counter></Counter>
      <hr>
      <Counter></Counter>
      <hr>
    </div>

  </section>
</template>

<script>
import Counter from '~/components/Counter.vue'

const axios = require("axios");
let url = "https://jsonplaceholder.typicode.com/users";

export default {
  components: {
    Counter
  },
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