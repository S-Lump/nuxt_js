<template>
<header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <nuxt-link class="navbar-brand" to="/">Nuxt JS</nuxt-link>

  <div class="navbar-collapse" >
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <nuxt-link exact active-class="active" class="nav-link" to="/">Home</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link no-prefetch active-class="active" class="nav-link" to="/users">Users</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link no-prefetch active-class="active" class="nav-link" to="/about">About</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link no-prefetch active-class="active" class="nav-link" to="/login">Login</nuxt-link>
      </li>
      <li v-if="isAuth" class="nav-item">
        <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
      </li>
    </ul>
  </div>
</nav>
</header>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>