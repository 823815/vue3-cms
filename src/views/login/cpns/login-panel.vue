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
        <LoginAccount></LoginAccount>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Lock, Iphone } from '@element-plus/icons-vue'

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    Lock,
    Iphone,
    LoginAccount,
    LoginPhone
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 300px;
  width: 320px;
  .title {
    text-align: center;
  }
}
</style>
