<template>
  <div>Index Page</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  middleware: 'auth',
  layout: 'Empty',
})
export default class HomePage extends Vue {}
</script>
