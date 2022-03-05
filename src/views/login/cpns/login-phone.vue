<template>
  <div class="loginAccount">
    <el-form :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verify-code">
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
import { reactive } from 'vue'
import { rules } from '../config/account-config'
const phone = reactive({
  number: '',
  verifCode: ''
})
</script>

<style scoped></style>
