<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-breadcrumbs :items="breadcrumbs" />
    </v-col>
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title>
          User List
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="user in users"
              :key="user.id"
              :to="`/users/${user.id}`"
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ user.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ user.email }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $axios }) {
    const users = await $axios.$get('/users/')

    return {
      users
    }
  },
  data: () => ({
    breadcrumbs: [
      {
        text: 'Users',
        to: '/',
        exact: true
      }
    ]
  })
}
</script>
