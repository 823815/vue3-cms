<template>
  <el-table :data="userList" border style="width: 100%">
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
</template>

<script setup lang="ts">
import type { IPropItems } from '../types'
import { withDefaults } from 'vue'

// defineProps({
//   userList: {
//     type: Array,
//     required: true
//   }
// })
withDefaults(
  defineProps<{
    propItems: IPropItems[]
    userList: any
  }>(),
  {
    propItems: () => []
  }
)
</script>

<style scoped lang="less"></style>
