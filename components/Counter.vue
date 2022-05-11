<template>
    <section>
        <h2>{{ title }}</h2>
        counter: {{ $store.state.counter.counter }}
        <button v-on:click="$store.dispatch('counter/countUpAction')">+1</button>
        <button v-on:click="$store.dispatch('counter/countDownAction')">-1</button>
        <button v-on:click="$store.dispatch('counter/countResetAction')">Reset</button>
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