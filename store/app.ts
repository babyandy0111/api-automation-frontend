import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

@Module({
  name: 'app',
  namespaced: true,
  stateFactory: true
})
export default class App extends VuexModule {
  public authenticated: boolean = false
  public sidebar: Array<any> = [
    {
      label: 'API 管理',
      icon: 'database',
      name: 'database',
      subMenu: [
        {
          label: '建立數據來源',
          name: 'database-create',
          url: '/database/create',
        },
        {
          label: 'API 列表',
          name: 'database-list',
          url: '/database/list',
        }
      ]
    },{
      label: 'API 管理',
      icon: 'code',
      name: 'api',
      subMenu: [
        // {
        //   label: 'API 列表',
        //   name: 'api-list',
        //   // url: '/api/list',
        // },
        {
          label: '建立 API',
          name: 'api-create',
          // url: '/api/create',
        }
        // 未來可能會新增
      ]
    },{
      label: '域名管理',
      icon: 'code',
      name: 'domain',
      subMenu: [
        {
          label: '建立 API',
          name: 'api-create',
          // url: '/api/create',
        }
      ]
    }
  ]

  public get getAuthenticated () {
    return this.authenticated
  }

  @Mutation
  SET_TOKEN (payload: boolean) {
    console.log('SET_TOKEN')
    this.authenticated = payload
  }
}
