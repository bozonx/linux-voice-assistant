<template>
  <div class="chat-container">
    <div class="messages">
      <div class="message">
        <p>Hello, how are you?</p>
      </div>
    </div>
    <div class="input">
      <input type="text" v-model="message" />
      <button @click="sendMessage">Send</button>
      <button @click="clearMessages">Clear</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const messages = ref<string[]>([]);
  const message = ref<string>("");

  const sendMessage = () => {
    messages.value.push(message.value);
    message.value = "";
  };

  const clearMessages = () => {
    messages.value = [];
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
  .messages {
    gap: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .message {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .input {
    display: flex;
    gap: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .input input {
    flex: 1;
  }

  .input button {
    flex: 1;
  }
</style>
