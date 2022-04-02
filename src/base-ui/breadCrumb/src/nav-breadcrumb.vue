<template>
  <div class="">
    <el-breadcrumb separator="/">
      <template v-for="item in breadCrumb" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import type { IBreadCrumb } from '../types'
import { withDefaults } from 'vue'
withDefaults(
  defineProps<{
    breadCrumb: IBreadCrumb[]
  }>(),
  {
    breadCrumb: () => []
  }
)
</script>

<style scoped lang="less"></style>
