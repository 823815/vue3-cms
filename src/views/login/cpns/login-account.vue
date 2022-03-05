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
import { rules } from '../config/account-config'
import { defineExpose } from 'vue'
const acount = reactive({
  name: '',
  password: ''
})
const loginAction = () => {
  console.log('登陆中')
}
defineExpose({
  loginAction
})
</script>

<style scoped></style>
