<template>
  <el-table
    :data="posts"
    style="width: 100%">
    <el-table-column 
      prop="title"
      label="Название"/>
    <el-table-column
      label="Date"
      width="180">
      <template slot-scope="{row: {date}}">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ new Date(date).toLocaleDateString() }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="views"
      label="Просмотры"
      width="180">
      <template slot-scope="{row: {views}}">
        <i class="el-icon-view"></i>
        <span style="margin-left: 10px">{{ views }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="comments"
      label="Комментарии"
      width="180">
      <template slot-scope="{row: {comments}}">
        <i class="el-icon-message"></i>
        <span style="margin-left: 10px">{{ comments.length }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Действия">
      <template slot-scope="{row}">
        <el-tooltip
          effect="dark"
          content="Открыть"
          placement="top">
          <el-button
            icon="el-icon-edit"
            type="primary"
            circle=""
            @click="open(row._id)"/>
        </el-tooltip>
        <el-tooltip
          effect="dark"
          content="Удалить"
          placement="top">
          <el-button
            icon="el-icon-delete"
            type="danger"
            circle
            @click="remove(row._id)"/>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({store}) {
    const posts = await store.dispatch('post/fetchAdminPosts')
    return {posts}
  },
  methods: {
    open(id) {
      this.$router.push(`/admin/post/${id}`)
    },
    async remove(id) {
      try {
        await this.$confirm('Удалить пост?', 'Внимание!', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Нет',
          type: 'warning'
        })
        await this.$store.dispatch('post/remove', id)
        this.posts = this.posts.filter(p => p._id !== id)

        this.$message.success('Пост удален')
      } catch(e) {

      } 
    }
  }
}
</script>

<style>

</style>