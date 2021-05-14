<template>
  <div>
    <div class="header bg-iYellow p-3 pl-6">
      <img
        src="https://truth.bahamut.com.tw/s01/201207/28a8513919088d3328aaa40284c6b13e.PNG"
        alt="pic"
        class="w-16 h-16 rounded-full inline-block cursor-pointer"
      />
      <p class="inline-block text-lg font-semibold px-3 w-3/4">Candice</p>
      <button class="">...</button>
    </div>
    <ul class="list-box text-white h-screen overflow-x-scroll">
      <!-- border-b  -->
      <li class="flex bg-iGray hover:bg-iFont focus:bg-iFont cursor-pointer" tabindex="1" v-for="(data, index) in listInfo" :key="index">
        <img
          :src="data.src"
          alt="pic"
          class="w-16 h-16 rounded-full"
        />
        <div class="w-5/6 flex flex-wrap pl-3 align-middle leading-8">
          <p class="w-2/4 text-lg">{{ data.name }}</p>
          <p class="w-2/4 text-right text-sm leading-8">{{ data.date }}</p>
          <p class="w-10/12 truncate text-sm leading-8">{{ data.history }}</p>
          <p class="w-2/12 text-right">
            <span v-if="data.unread !== 0" class="bg-iFontY text-iFont py-0.5 px-1.5 rounded-full text-sm leading-8">{{ data.unread }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop, Emit } from "vue-property-decorator";

@Component({
  components: {}
})
export default class homePage extends Vue {
  // data
  aaa: string = "hi su3cl3";
  b: number = 2;
  listInfo: any[] = [
    {
      name: 'jay chou',
      date: '2021-05-18',
      history: 'if you go to the movie, then give me a call',
      unread: 2,
      src: 'https://stickershop.line-scdn.net/sticonshop/v1/sticon/5bb73710040ab16e9504852f/iphone/018.png',
    },
    {
      name: 'youtube',
      date: '2021-01-31',
      history: 'have you seen infinity war?',
      unread: 0,
      src: 'https://lh5.googleusercontent.com/2nKcDeMslYkzHmGCbLTXfGG0T0UN3eokdCa2SkH3gmltgNaQaXz2hCrR2FMimWSZwPZ3mppacOvYsRn_RDeHPoKOEPfbdoJcRXCQxs4kDvrqsoaE1SyFELftGQnj9drSPaFZj80g',
    },
    {
      name: 'wanwan',
      date: '2020-12-20',
      history: 'if you go to the movie, then give me a call callcallcall',
      unread: 12,
      src: 'https://i1.sndcdn.com/artworks-000037993749-g0n2wg-t500x500.jpg',
    },
    {
      name: 'wanwan',
      date: '2020-12-20',
      history: 'if you go to the movie, then give me a call',
      unread: 12,
      src: 'https://i1.sndcdn.com/artworks-000037993749-g0n2wg-t500x500.jpg',
    },
    {
      name: 'wanwan',
      date: '2020-12-20',
      history: 'if you go to the movie, then give me a call',
      unread: 12,
      src: 'https://i1.sndcdn.com/artworks-000037993749-g0n2wg-t500x500.jpg',
    },
    {
      name: 'wanwan',
      date: '2020-12-20',
      history: 'if you go to the movie, then give me a call',
      unread: 12,
      src: 'https://i1.sndcdn.com/artworks-000037993749-g0n2wg-t500x500.jpg',
    },
    {
      name: 'wanwan',
      date: '2020-12-20',
      history: 'if you go to the movie, then give me a call',
      unread: 12,
      src: 'https://i1.sndcdn.com/artworks-000037993749-g0n2wg-t500x500.jpg',
    },
    {
      name: 'wanwan',
      date: '2020-12-20',
      history: 'if you go to the movie, then give me a call',
      unread: 12,
      src: 'https://i1.sndcdn.com/artworks-000037993749-g0n2wg-t500x500.jpg',
    },
    {
      name: 'wanwan',
      date: '2020-12-20',
      history: 'if you go to the movie, then give me a call',
      unread: 12,
      src: 'https://i1.sndcdn.com/artworks-000037993749-g0n2wg-t500x500.jpg',
    },
  ];
  //methods
  adda() {
    this.b++;
  }
}
</script>

<style scopde>
  ul li {
    padding: 12px 20px;
  }
</style>
