<template>
  <div>
    <h1>User with id: {{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  }
}
</script>

<style>

</style>