export const state = () => ({
  queue: []
})

export const mutations = {
  add (state, snackbar) {
    state.queue.push(snackbar)
  },
  remove (state, id) {
    state.queue = state.queue.filter(item => item.id !== id)
  }
}

export const actions = {
  enqueue (ctx, payload) {
    const id = Symbol('id')
    ctx.commit('add', {
      id,
      type: payload.type,
      message: payload.message
    })

    return id
  },
  remove (ctx, payload) {
    ctx.commit('remove', payload.id)
  }
}
