<template>
  <div class="container mx-auto px-6 py-8">
    <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
      <Table :columns="columns" :listDatas="listDatas">
        <ButtonRoundMd :buttonText="buttonText" slot="actions" />
      </Table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Table from '~/components/Table.vue'
import ButtonRoundMd from '~/components/ButtonRoundMd.vue'

@Component({
  layout: 'Dashboard',
  components: {
    Table,
    ButtonRoundMd
  },
})

export default class DashboardListPage extends Vue {
  buttonText: string = '查看'
  buttonFlatColor: string = 'blue'
  columns: Array<any> = [
    {
      name: 'table_name',
      label: 'Table Name',
    }
  ]

  listDatas: Array<any> = [
    {
      table_name: 'channel',
    },
    {
      table_name: 'channel_member',
    }
  ]
}
</script>

<style scoped>
::v-deep table.table-list tr > *:last-child {
  @apply text-right;
}
</style>
