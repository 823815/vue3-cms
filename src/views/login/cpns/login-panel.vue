<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><lock /></el-icon>账号登录
          </span>
        </template>
        <LoginAccount ref="accountRef"></LoginAccount>
      </el-tab-pane>

      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>手机登录
          </span>
        </template>
        <LoginPhone></LoginPhone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword" size="large">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-button" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Lock, Iphone } from '@element-plus/icons-vue'

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

const isKeepPassword = ref(true)
const accountRef = ref<InstanceType<typeof LoginAccount>>()

const handleLoginClick = () => {
  accountRef.value?.loginAction()
}
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 300px;
  width: 320px;
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
  }
  .login-button {
    width: 100%;
  }
}
</style>
