<template>
  <div>
      <h1>Users page</h1>
      <ul>
        <li v-for="user of users" :key="user">
          <a href="#" @click.prevent="goTo(user)">User {{user}}</a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    goTo(user) {
      this.$router.push('/users/' + user)
    }
  }
}
</script>

<style>

</style>