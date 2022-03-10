<template>
  <div class="loginAccount">
    <el-form :rules="rules" :model="acount" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="acount.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="acount.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, defineExpose } from 'vue'
import type { ElForm } from 'element-plus'
import { useStore } from 'vuex'

import { rules } from '../config/account-config'
import localCatch from '../../../utils/cache'
const acount = reactive({
  name: localCatch.getCatch('userName') ?? '',
  password: localCatch.getCatch('passWord') ?? ''
})

const store = useStore()

const formRef = ref<InstanceType<typeof ElForm>>()
const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 1.判断是否需要记住密码
      if (isKeepPassword) {
        localCatch.setCatch('userName', acount.name)
        localCatch.setCatch('passWord', acount.password)
      } else {
        localCatch.deleteCatch('userName')
        localCatch.deleteCatch('passWord')
      }
      //2.开始进行登录验证
      store.dispatch('login/accountLoginAction', { ...acount })
    }
  })
}
defineExpose({
  loginAction
})
</script>

<style scoped></style>
