<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <SnackbarQueue />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  // components: { SnackbarQueue }
  data () {
    return {
      title: 'App'
    }
  }
}
</script>
