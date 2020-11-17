<template>
  <div class="page-wrap">
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form 
      :model="controls" 
      :rules="rules" 
      ref="form"
      @submit.native.prevent="onSubmit">

      <!-- <h2>Войти в панель администратора</h2> -->

      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input 
          v-model.trim="controls.text"
          type="textarea"
          resize="none"
          :rows="10"></el-input>
      </el-form-item>

      <div class="mb">
        <small>
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">
            {{ new Date(post.date).toLocaleString() }}
          </span>
        </small>
      </div>

      <el-form-item>
        <el-button 
          type="primary" 
          round
          native-type="submit"
          :loading="loading">
          Обновить
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  head() {
    return {
      title: this.post.title
    }
  },
  validate({params}) {
    return !!params.id
  },
  async asyncData({store, params}) {
    const post = await store.dispatch('post/fetchAdminById', params.id)
    return {post} 
  },
  data() {
    return {
      loading: false,
      controls: {
        text: '',
        password: ''
      },
      rules: {
        text: [
          { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = false

          const formData = {
            text: this.controls.text,
            id: this.post._id
          }

          try {
            await this.$store.dispatch('post/update', formData)
            this.$message.success('Пост обновлен') 
            this.loading = false                 
          } catch(e) {
            this.loading = false  
          } 
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-wrap {
    max-width: 600px;
  }
</style>