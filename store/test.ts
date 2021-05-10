import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  name: 'test',
  namespaced: true,
  stateFactory: true
})
export default class App extends VuexModule {
  public andyts: number = 0

  public get andy () {
    return this.andyts || 0
  }

  @Mutation
  private SET_TYPE (andyts: number) {
    this.andyts = andyts
    // setToken(type)
  }

  @Action
  public SetType () {
    this.SET_TYPE(8888)
  }
}
