<template>
  <div>
    <h1>TODO app</h1>
    <div class="form">
      <!-- addボタンを押された時、リロードを無効にする -->
      <form v-on:submit.prevent="add">
        <input v-model="name" />
        <button>Add</button>
      </form>
    </div>

    <!-- {{ todos }} -->
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input
          type="checkbox"
          v-bind:checked="todo.done"
          @change="toggle(todo)"
        />
        {{ todo.name }} {{ todo.created }}
        <button v-on:click="remove(todo.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // 一時的に格納するデータ
  data: function () {
    return {
      name: "",
      done: false,
    };
  },
  created: function () {
    this.$store.dispatch("todos/init");
  },
  methods: {
    // firebaseに追加する
    add() {
      this.$store.dispatch("todos/add", this.name);
      this.name = "";
    },
    remove(id) {
      this.$store.dispatch("todos/remove", id);
    },
    toggle(todo) {
      this.$store.dispatch("todos/toggle", todo);
    },
  },
  computed: {
    todos() {
      return this.$store.state.todos.todos;
    },
  },
};
</script>