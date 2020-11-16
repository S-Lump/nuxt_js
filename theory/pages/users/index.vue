<template>
  <div>
      <h1>{{ pageTitle }}</h1>
      <ul>
        <li v-for="user of users" :key="user.id">
          <a href="#" @click.prevent="goTo(user)">{{user.name}} | {{user.email}}</a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  // async asyncData({store, error}) {
  //   try {
  //     await store.dispatch('users/fetchUsers')
  //     return {}
  //   } catch(e) {
  //     error(e)
  //   }
  // },
  // async fetch({store, error}) {
  //   await store.dispatch('users/fetchUsers')
  // },
  
  data() {
    return {
      pageTitle: 'Users page'
    }
  },
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  },
  methods: {
    goTo(user) {
      this.$router.push('/users/' + user.id)
    }
  }
}
</script>

<style>

</style>