// import dayjs from 'dayjs'

type IFromType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFromItem {
  field: string
  type: IFromType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOptions?: any
}

export interface IFrom {
  fromItems: IFromItem[]
  labelWidth: string
  itemStyle: Record<string, unknown>
  colLayout: Record<string, unknown>
}
