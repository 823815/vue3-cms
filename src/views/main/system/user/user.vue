<template>
  <div class="user">
    <xu-from v-bind="fromConfig"></xu-from>
  </div>
  <div class="content"></div>
</template>

<script setup lang="ts">
import XuFrom from '@/base-ui/from'
import { fromConfig } from './config/search'
</script>

<style scoped>
.user {
  padding-top: 22px;
}
</style>
