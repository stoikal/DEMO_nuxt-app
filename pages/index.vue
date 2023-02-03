<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-breadcrumbs :items="breadcrumbs" />
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title>
          User List
        </v-card-title>
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
    breadcrumbs: [
      {
        text: 'Users',
        to: '/',
        exact: true
      }
    ],
    tableHeaders: [
      { text: 'Name', value: 'name' },
      { text: 'Email', value: 'email' },
      { text: 'Phone', value: 'phone' },
      { text: 'Company', value: 'company.name' },
      { text: 'City', value: 'address.city' }
    ]
  })
}
</script>
