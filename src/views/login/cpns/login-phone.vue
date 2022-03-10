<template>
  <div class="loginAccount">
    <el-form :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-row :gutter="20">
          <el-col :span="11"
            ><el-input v-model="phone.verifCode"></el-input
          ></el-col>
          <el-col :span="13"
            ><el-button type="primary">获取验证码</el-button></el-col
          >
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, defineExpose, ref } from 'vue'
import type { ElForm } from 'element-plus'
import { useStore } from 'vuex'

import { rules } from '../config/account-config'
const phone = reactive({
  number: '',
  verifCode: ''
})
const store = useStore()
const formRef = ref<InstanceType<typeof ElForm>>()
const loginAction = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      store.dispatch('login/phoneLoginAction', { ...phone })
    }
  })
}
defineExpose({
  loginAction
})
</script>

<style scoped></style>
