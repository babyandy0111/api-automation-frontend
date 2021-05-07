<template>
  <div>
    <h1>Oops!</h1>
    <h2>你沒有權限</h2>
    <h6>不爽可以去問主管為何不給你權限</h6>
    <ul>
      <li>或者你可以去:</li>
      <li>
        <router-link to="/">首頁</router-link>
      </li>
    </ul>
    <img
      :src="errGif"
      width="313"
      height="428"
      alt="Girl has dropped her ice cream."
    />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

const errGif = require('~/assets/images/401-images/401.gif')

@Component({
  name: 'Page403',
  meta: {
    title: '403',
    url: '/403'
  }
})
export default class extends Vue {
  private errGif = errGif + '?' + +new Date()
}
</script>
