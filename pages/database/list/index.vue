<template>
  <div class="container mx-auto px-6 py-8">
    <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
      <Table :columns="columns" :listDatas="listDatas" />
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
