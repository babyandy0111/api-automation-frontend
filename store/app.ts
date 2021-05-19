import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

@Module({
  name: 'app',
  namespaced: true,
  stateFactory: true
})
export default class App extends VuexModule {
  public sidebar: Array<any> = [
    {
      label: '資料庫管理',
      icon: '',
      subMenu: [
        {
          label: '建立數據來源',
          icon: '',
        },
        {
          label: '資料庫列表',
          icon: '',
        }
      ]
    }
  ]
}
