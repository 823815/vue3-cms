export interface List {
  id: number
  name: string
  realname: string
  cellphone: any
  enable: number
  departmentId: number
  roleId: number
  createAt: Date
  updateAt: Date
}

export interface IPageListResult {
  list: List[]
  totalCount: number
}
export interface IPageListParameter {
  pageUrl: string
  queryInfo: Record<string, unknown>
}
