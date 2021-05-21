<template>
  <div class="-translate-x-full ease-in fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-cool-gray-800 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
    <div class="flex flex-row items-center justify-between px-8 my-5">
      <Logo class="flex h-12 w-12" />
    </div>
    <ul class="text-cool-gray-400 text-lg">
      <li
        v-for="(opt) in activeSidebar"
        :key="opt.label"
        :class="[{ 'bg-cool-gray-700 text-yellow-300': opt.isActive && !opt.subMenu }]"
      >
        <ul
          class="flex flex-row items-center justify-between px-8 py-5"
        >
          <li>
            <font-awesome-icon
              :icon="opt.icon"
            />
            {{ opt.label }}
          </li>
          <li v-if="opt.subMenu">
            <font-awesome-icon
              :icon="'angle-right'"
              :class="[
                'transform transition duration-500 ease-in-out',
                { 'rotate-90': opt.isShowSubMenu }
              ]"
            />
          </li>
        </ul>
        <transition name="collapse" :duration="{ leave: 0 }">
          <ul v-show="opt.subMenu && opt.isShowSubMenu">
            <li
              class="px-8 pl-12 py-3"
              :class="[{ 'bg-cool-gray-700 text-yellow-300': activePath(sub.name) }]"
              v-for="sub in opt.subMenu"
              :key="sub.label"
            >
              <template v-if="sub.url">
                <nuxt-link :to="sub.url">{{ sub.label }}</nuxt-link>
              </template>
              <template v-else>
                {{ sub.label }}
              </template>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from "vuex-class";
const AppModule = namespace("app");
@Component({})
export default class Navbar extends Vue {
  // vue
  activeSidebar: Array<any> = []

  get pathName(): any {
    return this.$route.name
  }

  get setActiveSidebar(): any {
    return this.sidebar
  }

  set setActiveSidebar(val: any) {
    this.activeSidebar = val
  }

  // vuex
  @AppModule.State("sidebar") sidebar!: Array<any>

  created() {
    const currentIdx = this.sidebar.findIndex((item, idx) => {
      return !!~this.pathName.indexOf(item.name)
    })
    this.handleToggleSubmenu(this.sidebar[currentIdx])
  }

  // methods
  handleToggleSubmenu(opt: any) {
    let sidebar = JSON.parse(JSON.stringify(this.setActiveSidebar))
    sidebar.map((item: any) => {
      if (item.name === opt.name) {
        item['isActive'] = true
        if (item?.subMenu) {
          if (!!~this.pathName.indexOf(opt.name)) {
            item['isShowSubMenu'] = true
          } else {
            item['isShowSubMenu'] = false
          }
        }
      } else {
        item['isActive'] = false
      }
      return item
    })
    this.activeSidebar = sidebar
  }
  activePath(name: string) {
    return !!~this.pathName.indexOf(name);
  }
}
</script>

<style scoped>
.collapse-enter-active, .collapse-leave-active {
  @apply transition-all;
  @apply duration-700;
}
.collapse-enter, .collapse-leave-to {
  @apply opacity-0;
}
</style>
