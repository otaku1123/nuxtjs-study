export const state = () => ({
    counter: 0
})

export const mutations = {
    updateCount: function(state, payload) {
        state.counter = state.counter + payload
    },
    resetCount: function(state) {
        state.counter = 0
    }
}

export const actions = {
    countUpAction(context) {
        context.commit('updateCount', 1)
    },
    countDownAction(context) {
        context.commit('updateCount', -1)
    },
    countResetAction(context) {
        context.commit('resetCount')
    }
}