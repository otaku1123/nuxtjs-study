<template>
    <div>
        <h1>TODO app</h1>
        <div class="form">
            <!-- addボタンを押された時、リロードを無効にする -->
            <form v-on:submit.prevent="add">
                <input v-model="name">
                <button>Add</button>
            </form>
        </div>

        <!-- {{ todos }} -->
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                {{ todo.done }} {{ todo.name }} {{ todo.created }}
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    // 一時的に格納するデータ
    data: function() {
        return {
            name: '',
            done: false
        }
    },
    created: function() {
        this.$store.dispatch('todos/init')
    },
    methods: {
        // firebaseに追加する
        add() {
            this.$store.dispatch('todos/add', this.name)
            this.name = ''
        }
    },
    computed: {
        todos() {
            return this.$store.state.todos.todos
        }
    }
}
</script>