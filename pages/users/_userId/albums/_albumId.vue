<template>
  <v-row>
    <v-col cols="12">
      <v-breadcrumbs :items="breadcrumbs" />
    </v-col>
    <v-col
      v-for="photo in photos"
      :key="photo.id"
      xs="12"
      sm="4"
      md="3"
      lg="2"
    >
      <v-img
        :src="photo.thumbnailUrl"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PhotosPage',
  async asyncData ({ $axios, params }) {
    const [
      user,
      photos
    ] = await Promise.all([
      $axios.$get(`/users/${params.userId}`),
      $axios.$get(`/albums/${params.albumId}/photos`)
    ])

    return {
      photos,
      user,
      albumId: params.albumId
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
          to: `/users/${this.user.id}`,
          exact: true
        },
        {
          text: 'Photos',
          to: `/users/${this.user.id}/albums/${this.albumId}`
        }
      ]
    }
  }
}
</script>
