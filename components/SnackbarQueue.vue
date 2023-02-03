<template>
  <div>
    <v-snackbar
      v-for="(item, index) in snackbarQueue"
      :key="item.id"
      :value="true"
      :style="`--top: ${64 + index * 56}px`"
      class="snackbar"
      dense
      top
      text
      min-height="40"
      :color="getColor(item)"
      @input="handleInput(item, $event)"
    >
      <v-icon
        :color="getColor(item)"
        class="icon mr-1"
      >
        {{ getIcon(item) }}
      </v-icon>
      <span class="font-weight-bold">
        {{ item.message }}
      </span>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'SnackbarQueue',
  computed: {
    snackbarQueue () {
      return this.$store.state.snackbar.queue
    }
  },
  methods: {
    getColor (item) {
      switch (item.type) {
        case 'success': return 'primary'
        case 'error': return 'error'
        case 'warning': return 'warning'
        case 'info': return 'info'
      }
    },
    getIcon (item) {
      switch (item.type) {
        case 'success': return 'mdi-check-circle'
        case 'warning': return 'mdi-alert-circle'
        case 'error': return 'mdi-close-circle'
        case 'info': return 'mdi-information'
      }
    },
    handleInput (item, isOpen) {
      if (!isOpen) {
        this.$store.dispatch('snackbar/remove', item)
      }
    }
  }
}
</script>

<style scoped>
.v-snack >>> .v-snack__wrapper {
  top: var(--top);
  transition: 200ms;
}

.icon {
  font-size: 20px !important;
}
</style>
