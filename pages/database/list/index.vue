<template>
  <div class="container mx-auto px-6 py-8">
    <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
      <Table :columns="columns" :listDatas="listDatas">
        <button class="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 focus:outline-none transition-colors duration-150" slot="actions">查看</button>
      </Table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Table from '~/components/Table.vue'

@Component({
  layout: 'Dashboard',
  components: {
    Table
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
::v-deep table.table-list tr > *:last-child {
  @apply text-right;
}
</style>
