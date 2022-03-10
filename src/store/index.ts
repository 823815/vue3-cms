import { createStore } from 'vuex'
import login from './login/login'
import type { IRootState } from './types'

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

export default store
