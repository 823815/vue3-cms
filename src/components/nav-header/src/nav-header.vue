<template>
  <div class="nav-header">
    <el-icon class="fontIcon">
      <component
        :is="isFold ? 'Fold' : 'Expand'"
        @click="handleFoldClick"
      ></component>
    </el-icon>
    <div class="content">
      <div>
        <diy-breadcrumb :breadCrumb="breadCrumb"></diy-breadcrumb>
      </div>
      <div>
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import userInfo from './cpn/user-info.vue'
import diyBreadcrumb, { IBreadCrumb } from '@/base-ui/breadCrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
const isFold = ref(false)
const emit = defineEmits(['foldChange'])

const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

const rouet = useRoute().path
const userMenus = useStore().state.login.userMenus
const breadCrumb: IBreadCrumb[] = pathMapBreadcrumbs(userMenus, rouet)
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fontIcon {
    font-size: 30px;
    cursor: pointer;
    margin: auto 0;
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
