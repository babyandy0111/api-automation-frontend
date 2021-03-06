import { Store, ActionTree } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Test from '~/store/test'

interface RootState {
  TestModule: Test,
}

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit (_context, _server: { req: any; app: Vue }) {
    // eslint-disable-next-line no-console
    // console.log(_context)
    TestModule.SetType()
  }
}

// eslint-disable-next-line import/no-mutable-exports
let TestModule: Test

function initialiseStores (store: Store<any>): void {
  TestModule = getModule(Test, store)
}

export { initialiseStores, TestModule }
