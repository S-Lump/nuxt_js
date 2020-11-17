<template>
  <el-card
    shadow="always"
    :style="{width: '500px'}">
    <el-form 
      :model="controls" 
      :rules="rules" 
      ref="form"
      @submit.native.prevent="onSubmit"
    >
    <h2>Войти в панель администратора</h2>

    <el-form-item label="Логин" prop="login">
      <el-input v-model.trim="controls.login"></el-input>
    </el-form-item>

    <el-form-item label="Пароль" prop="password" class="mb2">
      <el-input v-model.trim="controls.password" type="password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button 
        type="primary" 
        round
        native-type="submit"
        :loading="loading">
        Войти
      </el-button>
    </el-form-item>
  </el-form>
  </el-card>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      loading: false,
      controls: {
        login: '',
        password: ''
      },
      rules: {
        login: [
          { required: true, message: 'Введите логин', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Введите пароль', trigger: 'blur' },
          { min: 6, message: 'Пароль слишком короткий', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('SUBMIT')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>