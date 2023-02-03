<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-breadcrumbs :items="breadcrumbs" />
    </v-col>
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-text>
          <v-card-title>
            Album List
          </v-card-title>
          <v-list>
            <v-list-item
              v-for="album in albums"
              :key="album.id"
              :to="`/users/${user.id}/albums/${album.id}`"
            >
              <v-list-item-content>
                {{ album.title }}
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
  name: 'AlbumsPage',
  async asyncData ({ $axios, params }) {
    const [
      user,
      albums
    ] = await Promise.all([
      $axios.$get(`/users/${params.userId}`),
      $axios.$get(`/users/${params.userId}/albums`)
    ])

    return {
      user,
      albums,
      userId: params.userId
    }
  },
  computed: {
    breadcrumbs () {
      return [
        {
          text: 'Users',
          to: '/',
          exact: true
        },
        {
          text: this.user.name,
          to: `/users/${this.userId}`,
          exact: true
        }
      ]
    }
  }
}
</script>
