<template>
  <div class="flex flex-wrap h-screen overflow-hidden">
    <div class="w-1/3 bg-iBar">
      <List />
    </div>
    <div class="w-2/3 bg-iBar border-l-2 border-white">
      <Message />
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Watch, Prop, Emit} from 'vue-property-decorator';
import List from '@/components/IndexPage/List.vue';
import Message from '@/components/IndexPage/Message.vue';

@Component({
    components: {
      List,
      Message,
    },
})

export default class homePage extends Vue {
  // data
  aaa: string = 'hi su3cl3';
  b: number = 2
  //methods
  adda() {
    this.b++;
  }
};
</script>

<style scopde>

/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
