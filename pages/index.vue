<template>
  <section class="container">
    <p>{{ message }}</p>
    <hr>
    <router-link to="/price">Price Page</router-link>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  data: function() {
    return {
      message: 'Hello world'
    }
  }
}
</script>
