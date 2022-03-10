import { Module } from 'vuex'
import type { IloginState } from './types'
import type { IRootState } from '../types'
import type { IAccount } from '@/service/login/type'

import { accountLoginRequest, getUserInfo } from '@/service/login/login'
import LocalCache from '@/utils/cache'

const loginModule: Module<IloginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    changeToken(state, token: string) {
      // console.log(token)
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // console.log('account', payload)
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      // console.log(loginResult.data)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      LocalCache.setCatch('token', token)
      // 根据id获取用户信息
      const userInfo = await getUserInfo(id)
      console.log(userInfo)
      commit('changeUserInfo', userInfo)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('phone', payload)
    }
  }
}
export default loginModule
