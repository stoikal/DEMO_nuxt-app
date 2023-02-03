export default (ctx, inject) => {
  /**
   * Show snackbar/alert on page with layout:
   * default
   *
   * available type: success, error, warning, info
   * usage:
   * this.$snackbar('hello world') // will use type: success
   * or
   * this.$snackbar({ message: 'osorry we messed up', type: 'error' })
   */
  inject('snackbar', (options) => {
    let snackbarItem = options

    if (typeof options === 'string') {
      snackbarItem = {
        message: options,
        type: 'success'
      }
    }

    ctx.store.dispatch('snackbar/enqueue', snackbarItem)
  })
}
