<template>
  <button :class="['btn', buttonClass, props.class]" :disabled="props.disabled" @click="onClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  class?: string;
  icon?: string;
  sm?: boolean;
  xs?: boolean;
  neutral?: boolean;
  active?: boolean;
  disabled?: boolean;
}>();

const buttonClass = computed(() => {
  return {
    'btn-neutral': props.neutral,
    'btn-primary': !props.neutral,
    'btn-xs': props.xs,
    'btn-sm': props.sm,
    'btn-active': props.active,
    'btn-disabled': props.disabled,
  };
});

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const onClick = () => {
  emit('click');
};
</script>
