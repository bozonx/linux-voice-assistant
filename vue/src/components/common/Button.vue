<template>
  <button :class="['btn btn-primary btn-soft', buttonClass, props.class]" :disabled="props.disabled" @click="onClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  class?: string;
  icon?: string;
  small?: boolean;
  big?: boolean;
  primary?: boolean;
  secondary?: boolean;
  active?: boolean;
  disabled?: boolean;
}>();

const buttonClass = computed(() => {
  return {
    'btn-neutral': props.secondary,
    'btn-xs': props.small,
    // 'big': props.big,
    // 'primary': props.primary,
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

<style scoped>
/* Button styles */
/* .button {
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  text-align: left;
} */

/* .button:hover {
  background-color: #1976D2;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
} */
/* 
.small {
  background-color: #1b72b7;
  color: white;
  border: none;
  padding: 2px 6px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
}

.small:hover {
  background-color: #1976D2;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.small-pressed {
  background-color: #19528b;
  color: white;
} */

/* .active {
  background-color: #1976D2;
  color: white;
} */



/* List styles */
/* .small-buttons-toolbar {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  gap: 2px;
  list-style: none;
  padding: 0;
  margin: 0 0 2px 0;
}

.big-buttons-toolbar {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 4px;
}

.dialog-button {
  background-color: #1b72b7;
  color: white;
  border: none;
  padding: 2px 6px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
}

.button:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
} */
</style>