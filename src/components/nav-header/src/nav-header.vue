<template>
  <div class="nav-header">
    <el-icon class="fontIcon">
      <component
        :is="isFold ? 'Fold' : 'Expand'"
        @click="handleFoldClick"
      ></component>
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <div>
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import userInfo from './cpn/user-info.vue'
const isFold = ref(false)
const emit = defineEmits(['foldChange'])

const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fontIcon {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    flex: 1;
    margin: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
