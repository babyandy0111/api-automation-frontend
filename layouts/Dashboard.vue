<template>
  <div class="flex h-screen bg-gray-200">
    <aside class="flex">
      <Sidebar />
    </aside>
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="flex justify-end items-center py-4 px-6 bg-cool-gray-100 border-b-4 border-green-500 shadow-sm">
        <Header />
      </header>
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
@Component({
  components: {
    Header,
    Sidebar,
  }
})
export default class Dashboard extends Vue {
}
</script>