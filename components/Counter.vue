<template>
    <section>
        <h2>{{ title }}</h2>
        counter: {{ $store.state.counter.counter }}
        <button v-on:click="$store.dispatch('counter/countUp')">+1</button>
        <button v-on:click="$store.dispatch('counter/countDown')">-1</button>
    </section>
</template>

<script>
export default {
    data: function () {
        return {
            title: 'Counter App'
        }
    }
}
</script>