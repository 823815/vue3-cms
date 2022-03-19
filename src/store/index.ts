import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import type { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'aabb3',
      age: 28
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLoginInfo')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
