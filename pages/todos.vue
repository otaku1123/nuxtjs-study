<template>
    <div>
        <h1>TODO app</h1>
    </div>
</template>

<script>
export default {
    created: function() {
        this.$store.dispatch('todos/init')
    }
}
</script>