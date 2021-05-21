<template>
  <table class="table-list container mx-auto px-6 py-8">
    <thead>
      <TableHead :columns="columns">
        <input
          class="w-6/12 rounded-full px-4 py-2 border-2 border-cool-gray-3 outline-none focus:border-green-500 transition-all duration-150"
          type="text" name="search" id="search"
          placeholder="Search"
        />
      </TableHead>
    </thead>
    <tbody class="bg-white">
      <template v-for="(datas, idx) in listDatas">
        <tr :key="idx">
          <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" v-for="(data, name) in datas" :key="name">
            <p class="text-gray-500">{{ data }}</p>
          </td>
          <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" :key="name">
            <slot name="actions" />
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import TableHead from '~/components/TableHead.vue'

@Component({
  components: {
    TableHead
  },
})
export default class TableList extends Vue {
  @Prop({ type: Array, required: true, default: () => { return [] } })
  columns!: Array<any>

  @Prop({ type: Array, required: true, default: () => { return [] } })
  listDatas!: Array<any>
}
</script>