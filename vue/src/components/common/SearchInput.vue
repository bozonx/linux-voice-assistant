<template>
  <div class="flex flex-row w-full">
    <div class="flex-1">
      <label class="input w-full">
        <Icon icon="mdi:search" height="18" />
        <input
          v-model="value"
          ref="searchInput"
          type="search"
          class="grow"
          :placeholder="props.placeholder"
          @input="onInput"
        />
      </label>
    </div>
    <Button sm neutral @click="clear">
      <Icon icon="mdi:clear" height="18" />
    </Button>
  </div>
</template>

<script setup lang="ts">
  import { Icon } from "@iconify/vue";

  const emit = defineEmits<{
    (e: "input", value: string): void;
  }>();

  const props = defineProps<{
    placeholder?: string;
    value?: string;
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

  watch(
    () => props.value,
    (newValue) => {
      value.value = newValue || "";
    }
  );

  const value = ref<string>(props.value || "");

  const onInput = (event: Event) => {
    value.value = (event.target as HTMLInputElement).value;

    emit("input", value.value);
  };

  const clear = () => {
    value.value = "";
    emit("input", value.value);
  };
</script>
