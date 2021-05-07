<template>
  <nuxt-child/>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator'
import {NuxtError} from '@nuxt/types'

// 這邊處理erroe錯誤頁面
@Component
export default class extends Vue {
  @Prop() private error!: any

  @Watch('error', {immediate: true})
  private handleError(error: NuxtError) {
    if (error.statusCode === 403) {
      return this.$router.push('/error/403')
    } else if (error.statusCode === 404) {
      return this.$router.push('/error/404')
    }
    /*try {
      this.$confirm(error.message || '', '出錯拉！', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(() => {
        location.reload()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    } catch {
    }*/
  }
}
</script>
