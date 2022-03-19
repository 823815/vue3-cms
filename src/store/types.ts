import { IloginState } from './login/types'
export interface IRootState {
  name: string
  age: number
}
export interface IRootWidthModule {
  login: IloginState
}

export type IStoreType = IRootWidthModule & IRootState
