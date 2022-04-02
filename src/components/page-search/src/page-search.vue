<template>
  <xu-from v-bind="fromConfig" v-model:data="formData">
    <template #header>
      <h1>高级检索</h1>
    </template>
    <template #footer>
      <div class="handle-btns">
        <el-button type="primary">
          <el-icon style="vertical-align: middle">
            <refresh-right />
          </el-icon>
          <span style="vertical-align: middle"> 重置 </span>
        </el-button>
        <el-button type="primary">
          <el-icon style="vertical-align: middle">
            <search />
          </el-icon>
          <span style="vertical-align: middle"> 搜索 </span>
        </el-button>
      </div>
    </template>
  </xu-from>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import xuFrom from '@/base-ui/from'
import { IFrom } from '@/base-ui/from'

const formData = ref({
  id: '',
  name: '',
  password: '',
  subject: '',
  createTime: ''
})
defineProps<{
  fromConfig: IFrom
}>()
</script>

<style scoped lang="less">
.handle-btns {
  text-align: right;
  padding-bottom: 10px;
  padding-right: 10px;
}
</style>
