<template>
  <div style="line-height: 40px; padding: 20px;">
    <div>demo</div>
    <div>Watch效果見Console: a={{ a }}
      <button @click="adda()">+1</button>
    </div>
    <div>顯示計算b屬性: b={{ b }}
      <button @click="setb = b + '0'">+0</button>
    </div>
    <div>Emit自己定義事件onEvent,見Console
      <button @click="onEvent('Test Emit')">onEvent</button>
    </div>
    <div>Emit自己定義事件onTest,見Console
      <button @click="onTest('Test Emit')">onTest</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Watch, Prop, Emit} from 'vue-property-decorator';
import {$axios} from "~/utils/api";

// Nuxt對Vue的拓展
// 一定要加, 沒有加的話export default 不會生效
// 可以不給options, 類似error畫面
@Component({
  async asyncData(context) {
    const ip = await $axios.$get('http://icanhazip.com')
    console.log(ip);
    console.log("asyncData!");
    return {ip}
  },
  async validate(context) {
    console.log("validate!");
    return true;
  },
  async fetch(context) {
    console.log("fetch!");
  },
  head: {
    title: 'Nuxt+TypeScript page' // 設定head的title
  }
})

export default class IndexPage extends Vue {
  a: number = 0;     // 宣告數字, 預設0
  b: string = "";    // 宣告字串, 預設空
  c: boolean = true; // 宣告布林, 預設true
  d: Amodel = new Amodel(); // 宣告類別實例
  e: any[] = [];     // 宣告陣列

  // 類別的屬性，同Vue中的props, ?代表可空, 這裏不能直接給值，否则會報錯"避免直接改prop...."
  @Prop() prop1?: string;
  @Prop() prop2?: string;

  // 同Vue的beforeCreate
  beforeCreate() {
    console.log("Before Create!");
  }

  // 同Vue的created
  created() {
    console.log("Created!");
  }

  // 同Vue的beforeMount
  beforeMount() {
    console.log("Before Mount!");
  }

  // 同Vue的mounted
  mounted() {
    console.log("Mounted!");

    // 監聽事件“on-event”
    this.$on('on-event', function (val: string) {
      console.log("onEvent:" + val);
    });

    // 監聽事件“on-test”
    this.$on('on-test', function (val: string) {
      console.log("onEvent:" + val);
    });

  }

  // 同Vue的beforeUpdate
  beforeUpdate() {
    console.log("Before Update!");
  }

  // 同Vue的updated
  updated() {
    console.log("Update!");
  }

  // 同Vue的beforeDestroy
  beforeDestroy() {
    console.log("Before Destroy!");
  }

  // 同Vue的destroyed
  destroyed() {
    console.log("Destroyed!");
  }

  // @Emit裝飾的fun會在運行之後觸發跟自己函數名一樣的事件,
  // 注意:駝峰命名會轉-寫法, 例如onEvent => on-event
  @Emit()
  onEvent(val: string) {
    console.log("Exec onEvent(1)...");
  }

  @Emit()
  onTest(val: string) {
    console.log("Exec onEvent(2)...");
  }

  // 無參數的寫法, 同Vue
  adda() {
    this.a++;
  }

  // 一般fun的帶參數寫法, 同Vue
  fn(val: string): boolean {
    return false;
  }

  // 閉包的fun寫法
  fn1 = () => {
    return false;
  }

  // 屬性get的寫法, 方法名前加get, 無參數, 但必須return值
  get setb(): string {
    return this.b;
  }

  // 屬性set寫法, 方法名前加set,
  set setb(value: string) {
    this.b = value;
  }

  // 監聽a的變化，相當於Vue的watch
  @Watch("a")
  routeChange(newVal: number, oldVal: number) {
    console.log("Watch a:" + oldVal + " -> " + newVal);
  }
}

// 宣告一個類別, 一般會放在另外一個文件中,透過import引入
export class Amodel {
  a: number = 0;
}
</script>
