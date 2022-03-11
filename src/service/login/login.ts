import httpRequset from '../index'
import type { IAccount, IloginResult, IDataType, IUserResult } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  userMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return httpRequset.post<IDataType<IloginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function getUserInfo(id: number) {
  return httpRequset.get<IDataType<IUserResult>>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function getUserMenus(id: number) {
  return httpRequset.get<IDataType>({
    url: LoginAPI.userMenus + id + '/menu'
  })
}
