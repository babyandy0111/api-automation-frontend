<template>
  <div class="px-8 -translate-x-full ease-in fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-cool-gray-800 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
    <div class="flex flex-row items-center justify-between my-5">
      <Logo class="flex h-12 w-12" />
    </div>
    <ul class="text-yellow-200">
      <li class="px-8 py-5 -mx-8 bg-cool-gray-700" v-for="(opt, idx) in sidebar" :key="idx">
        {{ opt.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from "vuex-class";
const AppModule = namespace("app");
import Sidebar from '@/components/dashboard/Sidebar.vue';
@Component({
  components: {
    Sidebar,
  }
})
export default class Dashboard extends Vue {
  @AppModule.State("sidebar") sidebar!: Array<any>
}
</script>
