<template>
  <div class="header">
    <slot name="header"> </slot>
  </div>
  <el-form :label-width="labelWidth">
    <el-row>
      <template v-for="item in fromItems" :key="item.label">
        <el-col v-bind="colLayout">
          <el-form-item
            :label="item.label"
            :rules="item.rules"
            :style="itemStyle"
          >
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input
                :placeholder="item.placeholder"
                :show-password="item.type === 'password'"
                v-bind="item.otherOptions"
                v-model="formData[`${item.field}`]"
              ></el-input>
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select
                :placeholder="item.placeholder"
                v-bind="item.otherOptions"
                style="width: 100%"
                v-model="formData[`${item.field}`]"
              >
                <template v-for="option in item.options" :key="option.label">
                  <el-option :value="option.value">{{
                    option.label
                  }}</el-option>
                </template>
              </el-select>
            </template>
            <template v-else-if="item.type === 'datepicker'">
              <el-date-picker
                unlink-panels
                range-separator="To"
                v-bind="item.otherOptions"
                v-model="formData[`${item.field}`]"
              />
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
  <div class="footer">
    <slot name="footer"> </slot>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, ref, watch } from 'vue'
import type { IFromItem } from '../types'
// const props = defineProps({
//   fromItems: {
//     type: Array as unknown as PropType<IFromItem>
//   }
// })
const props = withDefaults(
  defineProps<{
    // fromItems: Array<IFromItem>
    fromItems: IFromItem[]
    labelWidth: string
    itemStyle: Record<string, unknown> //object不推荐用<原因还未知,有待学习>
    colLayout: Record<string, unknown>
    data: Record<string, unknown>
  }>(),
  {
    fromItems: () => [],
    labelWidth: '100px',
    itemStyle: () => ({ padding: '10px 40px' }),
    colLayout: () => ({ xl: 6, lg: 8, md: 12, sm: 24, xs: 24 }),
    data: () => ({})
  }
)
// console.log(props.data)

const emit = defineEmits(['update:data'])
const formData = ref({ ...props.data })
watch(
  formData,
  (newValue) => {
    emit('update:data', newValue)
  },
  {
    deep: true
  }
)
</script>

<style scoped></style>
