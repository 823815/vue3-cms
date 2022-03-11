import { Module } from 'vuex'
import router from '@/router'
import type { IloginState } from './types'
import type { IRootState } from '../types'
import type { IAccount } from '@/service/login/type'

import {
  accountLoginRequest,
  getUserInfo,
  getUserMenus
} from '@/service/login/login'
import LocalCache from '@/utils/cache'

const loginModule: Module<IloginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      // console.log(token)
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeuserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  getters: {},
  actions: {
    // 账户登录
    async accountLoginAction({ commit }, payload: IAccount) {
      // console.log('account', payload)
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      LocalCache.setCatch('token', token)

      // 根据id获取用户信息
      const userInfoResult = await getUserInfo(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      LocalCache.setCatch('userInfo', userInfo)

      // 请求用户菜单
      const userMenus = await getUserMenus(userInfo.role.id)
      commit('changeuserMenus', userMenus.data)
      LocalCache.setCatch('userMenus', userMenus.data)

      //跳转到首页
      router.push('/main')
    },
    //手机登录
    phoneLoginAction({ commit }, payload: any) {
      console.log('phone', payload)
    },
    loadLocalLoginInfo({ commit }) {
      const token = LocalCache.getCatch('token')
      const userMenus = LocalCache.getCatch('userMenus')
      const userInfo = LocalCache.getCatch('userInfo')
      if (token) {
        commit('changeToken', token)
      }
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      if (userMenus) {
        commit('changeuserMenus', userMenus)
      }
    }
  }
}
export default loginModule
