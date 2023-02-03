<template>
  <v-container>
    <v-row>
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
  </v-container>
</template>

<script>
export default {
  name: 'UserPage',
  async asyncData ({ $axios, params }) {
    const photos = await $axios.$get(`/albums/${params.albumId}/photos`)

    return {
      photos
    }
  }
}
</script>
