import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

@Module({
  name: 'database',
  namespaced: true,
  stateFactory: true
})
export default class Database extends VuexModule {
  public sidebar: Array<{ label: string, subMenu: Array<any>}> = [
    {
      label: '123',
      subMenu: []
    }
  ]
}
