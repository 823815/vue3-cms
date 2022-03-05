export const rules = {
  //验证规则配置
  name: [
    {
      require: true,
      message: '用户名为必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名为5到10位的数字或字母',
      trigger: 'blur'
    }
  ],
  phone: [
    {
      require: true,
      message: '手机号为必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '用户名为11位的数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      require: true,
      message: '密码为必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: '密码至少6位',
      trigger: 'blur'
    }
  ]
}
