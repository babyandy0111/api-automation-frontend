<template>
  <tr>
    <th
      class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
      v-for="(col, idx) in columns" :key="idx"
    >
      {{ col.label }}
    </th>
    <th
      class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
    >
      <slot />
    </th>
  </tr>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})

export default class Thead extends Vue {
  @Prop({ type: Array, required: true, default: () => { return [] } })
  columns!: Array<any>
}
</script>