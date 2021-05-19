<template>
  <div>
    <div class="header bg-iYellow p-3 pl-6">
      <img
        :src="ck.src"
        alt="pic"
        class="w-16 h-16 rounded-full inline-block cursor-pointer"
      />
      <p class="inline-block text-lg font-semibold px-3 w-3/4">{{ ck.name }}</p>
      <button class="">...</button>
    </div>
    <div class="content">adsf</div>
    <div class="msgBar">
      <span class="material-icons"> more_vert </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop, Emit } from "vue-property-decorator";

interface personal {
  name: String;
  src: String;
}

@Component({
  components: {},
})
export default class homePage extends Vue {
  // data
  ck: personal = {
    name: "Candice",
    src: "https://truth.bahamut.com.tw/s01/201207/28a8513919088d3328aaa40284c6b13e.PNG",
  };
  //methods
}
</script>

<style scopde>
ul li {
  padding: 12px 20px;
}
</style>
