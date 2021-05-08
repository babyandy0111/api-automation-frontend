<template>
  <nuxt-child/>
</template>

<script lang="ts">
import {Vue, Prop, Watch, Component} from 'vue-property-decorator'
import {NuxtError} from '@nuxt/types'

@Component
export default class extends Vue {
  @Prop() private error!: any

  @Watch('error', {immediate: true})
  private handleError(error: NuxtError) {
    if (error.statusCode === 403) {
      console.log("403!");
      return this.$router.push('/error/403')
    } else if (error.statusCode === 404) {
      console.log("404!");
      return this.$router.push('/error/404')
    }
  }
}
</script>
