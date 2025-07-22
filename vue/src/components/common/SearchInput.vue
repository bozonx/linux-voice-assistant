<template>
  <div class="flex flex-row w-full">
    <label class="input w-full">
      <Icon icon="mdi:search" height="18" />
      <input
        :value="modelValue"
        ref="searchInput"
        type="search"
        class="grow"
        :placeholder="props.placeholder"
        @input="onInput"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
  import { Icon } from "@iconify/vue";

  const emit = defineEmits<{
    (e: "update:modelValue", value: string): void;
  }>();

  const props = defineProps<{
    placeholder?: string;
    modelValue?: string;
  }>();

  const searchInput = ref<HTMLInputElement | null>(null);

  const focus = () => {
    if (searchInput.value) {
      searchInput.value.focus();
    }
  };

  defineExpose({
    focus
  });

  const onInput = (event: Event) => {
    const newValue = (event.target as HTMLInputElement).value;
    emit("update:modelValue", newValue);
  };
</script>
