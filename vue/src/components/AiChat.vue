<template>
  <div class="flex flex-col gap-2 h-full">

    <Card class="flex-1 ">
      <div class="overflow-y-auto">
        <div v-for="message in chatStore.messages"
          :key="message.content" class="message"
          :class="{ 'user': message.role === 'user', 'opponent': message.role === 'assistant' }"
        >
          <pre>{{ message.content }}</pre>
        </div>
      </div>
    </Card>

    <Card class="flex flex-col gap-2">
      <div class="flex flex-row gap-2">
        <div class="flex-1 flex flex-row gap-2">
          <Button
            small secondary 
            v-for="attachment in attachments"
            :key="attachment"
            :title="attachment"
          >
            {{ truncate(attachment, 24) }}
          </Button>
        </div>
        <div v-if="roles.length > 0" class="flex flex-col gap-2">
          <Dropdown :options="roles" v-model:value="selectedRole" title="Роль" />
        </div>
      </div>
    
      <div class="flex flex-row gap-2">
        <textarea v-model="message" class="text-area" ref="textAreaRef" />
        <div class="flex flex-col gap-2">
          <Button small secondary @click="sendMessage" title="Отправить сообщение">Send</Button>
          <Button small secondary @click="clearInput" title="Очистить поле ввода">Clear</Button>
          <Button small secondary @click="voiceInput" title="Голосовой ввод">Voice</Button>
        </div>
      </div>

    </Card>
  </div>
</template>

<script setup lang="ts">
  import { useChatStore } from "../stores/chat";
  import { useRouteParams } from "../stores/routeParams";
  import { truncate } from "squidlet-lib";
  import { useIpcStore } from "../stores/ipc";
  import { MenuModals, useMenuModalsStore } from '../stores/menuModals';

  const ipcStore = useIpcStore();
  const chatStore = useChatStore();
  const menuModalsStore = useMenuModalsStore();
  const userConfig = computed(() => ipcStore.params!.userConfig);
  const message = ref<string>(chatStore.params.initialMessage || "");
  const textAreaRef = ref<HTMLTextAreaElement | null>(null);
  const attachments = computed(() => chatStore.params.attachments || []);
  const roles = computed(() => userConfig.value.chatRoles.map((role: any) => ({ id: role.name, name: truncate(role.name, 16) })));
  const selectedRole = ref<string | undefined>(roles.value[0]?.id);
  
  const routeParamsStore = useRouteParams();

  onMounted(() => {
    if (routeParamsStore.params.message) {
      message.value = routeParamsStore.params.message;
    }
    if (textAreaRef.value) {
      textAreaRef.value.focus();
    }
  });

  const sendMessage = async () => {
    const msg = message.value.trim();

    if (!msg) return;
    
    await chatStore.sendMessage(
      msg,
       attachments.value,
       userConfig.value.chatRoles.find((role: any) => role.name === selectedRole.value)?.rule || ""
      );
    message.value = "";
  };

  const clearInput = () => {
    message.value = "";
    if (textAreaRef.value) {
      textAreaRef.value.focus();
    }
  };

  const voiceInput = () => {
    menuModalsStore.nextModal(MenuModals.VOICE_RECOGNITION, {
      onCorrected: (resultText: string) => {
        message.value = resultText;
        menuModalsStore.closeAll();
      },
    });
  };
</script>

<style scoped>
  .message {
    display: flex;
    padding: 10px;
  }

  .message pre {
    margin: 0;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    white-space: break-spaces;
  }

  .message.user {
    justify-content: flex-end;
  }

  .message.user pre {
    background-color: #007bff;
    color: white;
  }

  .message.opponent pre {
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
