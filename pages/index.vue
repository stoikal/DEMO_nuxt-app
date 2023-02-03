<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-row align="center">
        <v-col>
          <h1>User List</h1>
        </v-col>
        <v-col cols="auto">
          <v-btn @click="handleShow">
            Add User
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-text>
          <v-data-table
            :headers="tableHeaders"
            :items="users"
          >
            <!-- eslint-disable-next-line vue/valid-v-slot -->
            <template #item.name="{ item }">
              <NuxtLink :to="`/users/${item.id}`">
                <div>{{ item.name }}</div>
              </NuxtLink>
            </template>
          </v-data-table>
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
    tableHeaders: [
      { text: 'Name', value: 'name' },
      { text: 'Email', value: 'email' },
      { text: 'Phone', value: 'phone' },
      { text: 'Company', value: 'company.name' },
      { text: 'City', value: 'address.city' }
    ]
  }),
  methods: {
    handleShow () {
      this.$store.dispatch('snackbar/enqueue', { message: 'Coming soon...', type: 'info' })
    }
  }
}
</script>
