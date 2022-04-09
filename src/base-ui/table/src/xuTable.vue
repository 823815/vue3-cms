<template>
  <div class="header">
    <slot name="header">
      <div class="title">{{ title }}</div>
    </slot>
  </div>
  <el-table
    :data="userList"
    border
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column
      v-if="showSelectColumn"
      type="selection"
      align="center"
      width="80"
    >
    </el-table-column>
    <el-table-column
      v-if="showIndexColumn"
      type="index"
      label="序号"
      align="center"
      width="80"
    ></el-table-column>
    <template v-for="propItem in propItems" :key="propItem.id">
      <el-table-column v-bind="propItem" align="center">
        <template #default="scope">
          <slot :name="propItem.prop" :row="scope.row">
            {{ scope.row[propItem.prop] }}
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
  <div class="footer"></div>
</template>

<script setup lang="ts">
import type { IPropItems } from '../types'
import { withDefaults } from 'vue'

const emit = defineEmits(['selectionChange'])

withDefaults(
  defineProps<{
    propItems: IPropItems[]
    userList: any
    showIndexColumn: boolean
    showSelectColumn: boolean
    title: string
  }>(),
  {
    propItems: () => []
  }
)

const handleSelectionChange = (value: any) => {
  emit('selectionChange', value)
}
</script>

<style scoped lang="less"></style>
