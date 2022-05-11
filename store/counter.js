export const state = () => ({
    counter: 0
})

export const mutations = {
    updateCount: function(state, payload) {
        state.counter = state.counter + payload
    }
}

export const actions = {
    countUp(context) {
        context.commit('updateCount', 1)
    },
    countDown(context) {
        context.commit('updateCount', -1)
    },
}