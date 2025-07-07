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
      <!-- <Dropdown v-else-if="item.type === 'select'" v-model:value="value[item.name]" :options="item.options" /> -->
      <Checkbox
        v-else-if="item.type === 'checkbox'"
        v-model:value="values[item.name]"
        @update:value="updateValue(item.name, $event)"
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
    values.value[item.name] = item.value || item.defaultValue;
  });

  // watch(values, () => {
  //   emit("update:values", values.value);
  // });

  function updateValue(name: string, value: any) {
    // values.value[name] = value;
    emit("update:values", values.value);
  }
</script>
