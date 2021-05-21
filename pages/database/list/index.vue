<template>
  <div class="container mx-auto px-6 py-8">
    <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
      <table class="table-list container mx-auto px-6 py-8">
        <tbody class="bg-white">
          <TableHead :columns="columns">
            <input
              class="w-6/12 rounded-full px-4 py-2 border-2 border-cool-gray-3 outline-none focus:border-green-500 transition-all duration-150"
              type="text" name="search" id="search"
              placeholder="Search"
            />
          </TableHead>
          <template v-for="(datas, key) in listDatas">
            <tr v-for="(data, idx) in datas" :key="idx">
              <td
                class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                v-for="col in columns" :key="col.name">
                <template v-if="key === col.name">
                  <p class="text-gray-500">
                    {{ data.value }}
                  </p>
                </template>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <button class="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 focus:outline-none transition-colors duration-150">查看</button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TableHead from '~/components/TableHead.vue'

@Component({
  layout: 'Dashboard',
  components: {
    TableHead
  },
})

export default class DashboardListPage extends Vue {

  columns: Array<any> = [
    {
      name: 'table_name',
      label: 'Table Name',
    },
  ]

  listDatas: {} = {
    table_name: [
      {
        value: 'channel',
      },
      {
        value: 'channel_member',
      },
    ]
  }

}
</script>

<style scoped>
table.table-list tbody tr > *:last-child {
  @apply text-right;
}
</style>
