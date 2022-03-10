import httpRequset from '../index'
import type { IAccount, IloginResult, IDataType } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/'
}

export function accountLoginRequest(account: IAccount) {
  return httpRequset.post<IDataType<IloginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function getUserInfo(id: number) {
  return httpRequset.get<IDataType<IloginResult>>({
    url: LoginAPI.LoginUserInfo + id
  })
}
