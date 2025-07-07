<template>
  <div>
    <FieldRow v-for="item in config" :key="item.name" :label="item.label">
      <FieldInput
        v-if="item.type === 'text'"
        v-model:value="values[item.name]"
      />
      <FieldTextArea
        v-else-if="item.type === 'textarea'"
        v-model:value="values[item.name]"
      />
      <!-- <Dropdown v-else-if="item.type === 'select'" v-model:value="value[item.name]" :options="item.options" /> -->
      <Checkbox
        v-else-if="item.type === 'checkbox'"
        v-model:value="values[item.name]"
      />
    </FieldRow>
  </div>
</template>

<script setup lang="ts">
  import { InputConfigItem } from "src/types/index";

  const props = defineProps<{
    config: InputConfigItem[];
  }>();

  const emit = defineEmits<{
    (e: "update:values", values: Record<string, any>): void;
  }>();

  const config = computed(() => props.config);
  const values = ref<Record<string, any>>({});

  config.value.forEach((item) => {
    values.value[item.name] = item.defaultValue;
  });

  watch(values, () => {
    emit("update:values", values.value);
  });
</script>
