<template>
<header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <nuxt-link class="navbar-brand" to="/">Nuxt JS</nuxt-link>

  <div class="navbar-collapse" >
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <nuxt-link class="nav-link" to="/">Home</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/users">Users</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/about">About</nuxt-link>
      </li>
    </ul>
  </div>
</nav>
</header>
</template>

<script>
export default {

}
</script>

<style>

</style>