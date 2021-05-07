<template>
  <div class="bg-blue-900">
    <div>
      <div>
        <img src="~assets/images/404-images/404.png" alt="404">
        <img src="~assets/images/404-images/404-cloud.png" alt="404">
        <img src="~assets/images/404-images/404-cloud.png" alt="404">
        <img src="~assets/images/404-images/404-cloud.png" alt="404">
      </div>
      <div>
        <div>
          OOPS!
        </div>
        <div>
          {{ message }}
        </div>
        <div>
          Please check that the URL you entered is correct, or click the button below to return to the homepage.
        </div>
        <nuxt-link to="/">回到首页</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component({
  name: 'Page404',
  meta: {
    title: '404',
    url: '/404'
  }
})
export default class extends Vue {
  private message = '404 Page Not Found'
}
</script>
