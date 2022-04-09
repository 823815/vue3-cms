<template>
  <div class="user">
    <page-search :fromConfig="fromConfig"></page-search>
  </div>
  <div class="content">
    <xu-table
      :userList="userList"
      :propItems="propItems"
      :showIndexColumn="showIndexColumn"
      :showSelectColumn="showSelectColumn"
      :title="title"
      @selectionChange="selectionChange"
    >
      <template #enable="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #operation>
        <el-button type="primary">
          <el-icon style="vertical-align: middle">
            <edit />
          </el-icon>
          <span style="vertical-align: middle">编辑 </span></el-button
        >
        <el-button type="danger"
          ><el-icon style="vertical-align: middle">
            <delete />
          </el-icon>
          <span style="vertical-align: middle">删除 </span></el-button
        >
      </template>
      <!-- <template #header>hhh</template> -->
    </xu-table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import { fromConfig } from './config/search'

import PageSearch from '@/components/page-search'
import XuTable from '@/base-ui/table'
import type { IPropItems } from '@/base-ui/table/types'

const store = useStore()
store.dispatch('system/getPageListAction', {
  pageUrl: '/users/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
})

const showIndexColumn = true
const showSelectColumn = true
const title = '用户列表'

const selectionChange = (value: any) => {
  console.log(value)
}

const userList = computed(() => store.state.system.userList)

const propItems: IPropItems[] = [
  {
    prop: 'name',
    label: '用户名',
    width: '100'
  },
  {
    prop: 'realname',
    label: '姓名',
    width: '100'
  },
  {
    prop: 'cellphone',
    label: '电话',
    width: '120'
  },

  {
    prop: 'enable',
    label: '状态',
    width: '100'
  },
  {
    prop: 'createAt',
    label: '创建事件',
    width: ''
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    width: ''
  },
  {
    prop: 'departmentId',
    label: '部门',
    width: ''
  },
  {
    prop: 'roleId',
    label: '角色',
    width: ''
  },
  {
    prop: 'operation',
    label: '操作',
    width: '200'
  }
]
</script>

<style scoped>
.user {
  padding-top: 22px;
}
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
