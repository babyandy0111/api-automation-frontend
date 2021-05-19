<template>
  <div class="flex h-screen bg-gray-200">
    <aside class="flex">
      <Sidebar />
    </aside>
    <section class="flex-1 flex flex-col overflow-hidden">
      <Nuxt />
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Sidebar from '@/components/dashboard/Sidebar.vue';
@Component({
  components: {
    Sidebar,
  }
})
export default class Dashboard extends Vue {
}
</script>