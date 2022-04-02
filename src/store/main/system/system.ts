import { IRootState } from '@/store/types'
import type { ISystemState } from './types'
import type { IPageListParameter } from '@/service/main/system/types'
import type { Module } from 'vuex'
import { getPageListData } from '@/service/main/system/system'

const systemMoudle: Module<ISystemState, IRootState> = {
  namespaced: true,
  state(): ISystemState {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: []) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: IPageListParameter) {
      // console.log(payload)
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      )
      // console.log(pageResult)
      const { list, totalCount } = pageResult.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemMoudle
