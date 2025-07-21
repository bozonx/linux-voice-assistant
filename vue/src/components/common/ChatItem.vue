<template>
  <div class="chat" :class="{ 'chat-start': isUser, 'chat-end': !isUser }">
    <div class="chat-bubble" :class="{ 'chat-bubble-primary': isUser }">
      {{ message.content }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ChatMessage } from "../../../../electron/types/types";

  const props = defineProps<{
    message: ChatMessage;
  }>();

  const isUser = computed(() => props.message.role === "user");
</script>
