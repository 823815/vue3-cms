<template>
  <div class="userInfo">
    <el-dropdown>
      <div class="avatarAndName">
        <el-avatar :size="size" :src="userSrc" />
        <span>{{ userName }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from '@/store'

const size = ref('default')
const userSrc = ref(
  'https://p9-passport.byteacctimg.com/img/user-avatar/c3aa5a1b8e08e129c17c13de76a945a7~300x300.image'
)
const store = useStore()
const userName = computed(() => store.state.login.userInfo.name)
</script>

<style scoped>
.avatarAndName {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
