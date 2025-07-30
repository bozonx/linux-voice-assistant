<template>
  <div>
    <FieldRow v-for="item in config" :key="item.name" :label="item.label">
      <FieldInput
        v-if="item.type === 'text'"
        v-model:value="values[item.name]"
        @update:value="updateValue(item.name, $event)"
      />
      <FieldTextArea
        v-else-if="item.type === 'textarea'"
        v-model:value="values[item.name]"
        @update:value="updateValue(item.name, $event)"
      />
      <Checkbox
        v-else-if="item.type === 'checkbox'"
        v-model:value="values[item.name]"
        @update:value="updateValue(item.name, $event)"
      />
    </FieldRow>
  </div>
</template>

<script setup lang="ts">
import { InputConfigItem } from 'src/types/index'

const props = defineProps<{
  config: InputConfigItem[]
}>()

const emit = defineEmits<{
  (e: 'update:values', values: Record<string, any>): void
}>()

const config = computed(() => props.config)
const values = ref<Record<string, any>>({})

config.value.forEach((item: InputConfigItem) => {
  values.value[item.name] = item.value || item.defaultValue
})

function updateValue(name: string, value: any) {
  emit('update:values', values.value)
}
</script>
