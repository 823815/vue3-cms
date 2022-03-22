<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!isCollapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="isCollapse"
      collapse-transition
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.sort + ''">
            <template #title>
              <el-icon>
                <component
                  :is="item.icon.replace(/-./, (match: any) => {
                    return match.replace('-', '')
                  }).replace('elicon', '')"
                ></component>
                <!-- <el-icon><chat-line-round /></el-icon> -->
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id"
              ><el-menu-item-group>
                <el-menu-item
                  :index="subitem.sort + ''"
                  @click="handleMenuItemClick(subitem)"
                  >{{ subitem.name }}</el-menu-item
                >
              </el-menu-item-group>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-sub-menu>
            <span>{{ item.name }}</span>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'

defineProps({
  isCollapse: Boolean
})

const store = useStore()
const router = useRouter()
const route = useRoute()

const userMenus = computed(() => store.state.login.userMenus)

const currentPath = route.path
const menu = pathMapToMenu(userMenus.value, currentPath)
const defaultValue = ref(menu.sort + '')

const handleMenuItemClick = (item: any) => {
  router.push({
    path: item.url ?? ''
  })
}
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu {
    border-right: none;
  }
}
</style>
