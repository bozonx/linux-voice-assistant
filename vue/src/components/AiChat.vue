<template>
  <div class="flex flex-col gap-2 h-full">

    <Card class="flex-1 ">
      <div class="overflow-y-auto">
        <div v-for="message in chatStore.messages"
          :key="message.content" class="message"
          :class="{ 'user': message.role === 'user', 'opponent': message.role === 'assistant' }"
        >
          <p>{{ message.content }}</p>
        </div>
      </div>
    </Card>

    <Card class="flex flex-col gap-2">
      <div class="flex flex-row gap-2">
        <div v-if="context.length > 0" class="flex-1 flex flex-row gap-2">
          <span class="text-sm font-bold">Контекст:</span>
          <Button small secondary v-for="contextItem in context" :key="contextItem">
            {{ truncate(contextItem, 10) }}
          </Button>
        </div>
        <div v-if="roles.length > 0" class="flex flex-col gap-2">
          <span class="text-sm font-bold">Роли:</span>
          <Button small secondary v-for="role in roles" :key="role">
            {{ role }}
          </Button>
        </div>
      </div>
    
      <div class="flex flex-row gap-2">
        <textarea v-model="message" class="text-area" />
        <div class="flex flex-col gap-2">
          <Button small secondary @click="sendMessage">Send</Button>
          <Button small secondary @click="chatStore.clearMessages">Clear</Button>
        </div>
      </div>

    </Card>
  </div>
</template>

<script setup lang="ts">
  import { useChatStore } from "../stores/chat";
  import { useRouteParams } from "../stores/routeParams";
  import { truncate } from "squidlet-lib";

  const chatStore = useChatStore();
  const message = ref<string>("");
  const context = computed(() => chatStore.params.context || []);
  // TODO: get from config
  const roles = computed(() =>  []);
  const routeParamsStore = useRouteParams();

  onMounted(() => {
    if (routeParamsStore.params.message) {
      message.value = routeParamsStore.params.message;
    }
  });

  const sendMessage = () => {
    if (!message.value.trim()) return;
    
    chatStore.sendMessage(message.value);
    message.value = "";
  };
</script>

<style scoped>
  /* .chat-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
  } */
  /* .messages-container {
    gap: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  } */

  .message {
    display: flex;
    padding: 10px;

  }

  .message p {
    margin: 0;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
  }

  .message.user {
    justify-content: flex-end;
  }

  .message.user p {
    background-color: #007bff;
    color: white;
  }

  .message.opponent p {
    background-color: #f0f0f0;
    color: black;
  }

  .text-area {
    width: 100%;
    height: 100px;
    resize: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    background-color: white;
  }
</style>
