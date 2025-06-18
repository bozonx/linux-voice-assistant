<template>
  <div class="chat-container">
    <div class="messages-container">
      <div v-for="message in chatStore.messages" :key="message.content" class="message" :class="{ 'user': message.role === 'user', 'opponent': message.role === 'assistant' }">
        <p>{{ message.content }}</p>
      </div>
    </div>
    <div class="input-container">
      <div class="input">
        <textarea v-model="message" />
      </div>
      <div class="input-buttons">
        <button class="button" @click="sendMessage">Send</button>
        <button class="button" @click="chatStore.clearMessages">Clear</button>
        <button class="button" @click="back">Back</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useChatStore } from "../stores/chat";

  const router = useRouter();
  const chatStore = useChatStore();
  const message = ref<string>("");

  const sendMessage = () => {
    chatStore.sendMessage(message.value);
    message.value = "";
  };

  const back = () => {
    router.push("/");
  };
</script>

<style scoped>
  .chat-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
  }
  .messages-container {
    gap: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

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

  .input-container {
    display: flex;
    gap: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .input {
    flex: 1;
  }

  .input textarea {
    width: 100%;
    height: 100px;
  }

  .input-buttons {
    display: flex;
    flex-direction: column;
    width: 50px;
    gap: 10px;
  } 

</style>
