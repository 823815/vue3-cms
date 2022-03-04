<template>
  <div class="loginAccount">
    <el-form :rules="rules" :model="acount">
      <el-form-item label="账号" prop="name">
        <el-input v-model="acount.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="acount.password" type="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const acount = reactive({
  name: '',
  password: ''
})

const rules = {
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
</script>

<style scoped></style>
