<template>
  <form @submit.prevent="onSubmit">
      <h1>Login</h1>
      <div class="form-group">
          <input type="text" name="" id="" class="form-control">
      </div>
      <div class="form-group">
          <input type="text" name="" id="" class="form-control">
      </div>
      <button class="btn btn-primary" type="submit">Login</button>
      <p>
          <nuxt-link to="/">Home</nuxt-link>
      </p>
  </form>
</template>

<script>
export default {
    layout: 'empty',
    methods: {
        onSubmit() {
            this.$store.dispatch('login')
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    form {
        width: 600px;
    }
</style>