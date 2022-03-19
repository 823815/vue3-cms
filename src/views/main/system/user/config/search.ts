import { IFrom } from '@/base-ui/from'

export const fromConfig: IFrom = {
  itemStyle: { padding: '10px 40px' },
  colLayout: { xl: 6, lg: 8, md: 12, sm: 24, xs: 24 },
  labelWidth: '120px',
  fromItems: [
    {
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: 'subject',
      placeholder: '请选择',
      options: [
        { label: '语文', value: 'Chinese' },
        { label: '英语', value: 'English' }
      ]
    },
    {
      type: 'datepicker',
      label: '选择时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
