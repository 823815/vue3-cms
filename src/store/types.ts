import { IloginState } from './login/types'
import { ISystemState } from './main/system/types'
export interface IRootState {
  name: string
  age: number
}
export interface IRootWidthModule {
  login: IloginState
  system: ISystemState
}

export type IStoreType = IRootWidthModule & IRootState
