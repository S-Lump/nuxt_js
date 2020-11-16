<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleDateString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
        <img 
        src="https://nallihanhaber.com/wp-content/uploads/2020/03/appledan-evde-calisanlarin-isini-kolaylastiracak-oneriler-EprZBAOj.jpg"
        alt="Post image" 
        >
      </div>
    </header>
    <main class="post-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eveniet, est libero recusandae iure quo numquam amet tempore repudiandae minus esse ab, temporibus quaerat harum sunt nobis, quod nihil mollitia.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eveniet, est libero recusandae iure quo numquam amet tempore repudiandae minus esse ab, temporibus quaerat harum sunt nobis, quod nihil mollitia.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eveniet, est libero recusandae iure quo numquam amet tempore repudiandae minus esse ab, temporibus quaerat harum sunt nobis, quod nihil mollitia.</p>
    </main>
    <footer>

    </footer>
  </article>
</template>

<script>
export default {
  validate({params}) {
    return !!params.id
  }
}
</script>

<style lang="scss" scoped>
  .post {
    min-width: 600px;
    margin: 0 auto;
  }

  .post-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;
  }

  .post-image img {
    width: 100%;
    height: auto;
  }

  .post-header {
    margin-bottom: 1.5rem;
  }

  .post-content {
    margin-bottom: 2rem;
  }
</style>