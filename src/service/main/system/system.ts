import xuRequest from '../../index'
import type { IPageListResult } from './types'
import type { IDataType } from '../../types'

export function getPageListData(url: string, querryInfo: any) {
  return xuRequest.post<IDataType<IPageListResult>>({ url, data: querryInfo })
}
