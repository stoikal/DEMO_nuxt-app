<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-breadcrumbs :items="breadcrumbs" />
    </v-col>
    <v-col cols="12" sm="6">
      <v-card>
        <v-card-text>
          <table>
            <tbody>
              <tr
                v-for="(value, key) in userInfo"
                :key="key"
              >
                <td>{{ key }}</td>
                <td>:</td>
                <td>{{ value }}</td>
              </tr>
            </tbody>
          </table>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6">
      <v-card>
        <v-card-text>
          <v-card-title>
            Photo Albums
          </v-card-title>
          <v-list>
            <v-list-item
              v-for="album in albums"
              :key="album.id"
              :to="`/users/${user.id}/albums/${album.id}`"
            >
              <v-list-item-content>
                <span class="text-capitalize">
                  {{ album.title }}
                </span>
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
    },
    userInfo () {
      const { street, suite, city, zipcode } = this.user.address
      return {
        Name: this.user.name,
        Phone: this.user.phone,
        Email: this.user.email,
        Company: this.user.company.name,
        Address: `${street} ${suite}, ${city}`,
        'Zip Code': zipcode
      }
    }
  }
}
</script>

<style scoped>
table td:nth-child(2) {
  width: 40px;
  text-align: center;
}
</style>
