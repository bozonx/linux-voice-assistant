<template>
  <div class="flex flex-col gap-2 h-full">
    <Card class="flex-1">
      <div class="overflow-y-auto">
        <ChatItem
          v-for="message in chatStore.messages"
          :key="message.content"
          :message="message"
        />
      </div>
    </Card>

    <Card class="flex flex-col gap-2">
      <div class="flex flex-row gap-2">
        <div class="flex-1 flex flex-row gap-2">
          <Button
            small
            secondary
            v-for="attachment in attachments"
            :key="attachment"
            :title="attachment"
          >
            {{ truncate(attachment, 24) }}
          </Button>
        </div>
        <div v-if="roles.length > 0" class="flex flex-col gap-2">
          <FieldSelect
            :options="roles"
            v-model:value="selectedRole"
            title="Роль"
          />
        </div>
      </div>

      <div class="flex flex-row gap-2">
        <ChatInput />
        <div class="flex flex-col gap-2">
          <Button sm square @click="sendMessage" title="Отправить сообщение">
            <Icon icon="mdi:send" height="24" />
          </Button>
          <Button sm square @click="clearInput" title="Очистить поле ввода">
            <Icon icon="mdi:clear" height="24" />
          </Button>
          <Button sm square @click="voiceInput" title="Голосовой ввод">
            <Icon icon="mdi:microphone" height="24" />
          </Button>
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { truncate } from '@/lib/squidlet-lib-local'

import { useChatStore } from '../stores/chat'
import { useChatInputStore } from '../stores/chatInput'
import { useIpcStore } from '../stores/ipc'
import { MenuModals, useMenuModalsStore } from '../stores/menuModals'
import { Icon } from '@iconify/vue'

const chatInputStore = useChatInputStore()
const ipcStore = useIpcStore()
const chatStore = useChatStore()
const menuModalsStore = useMenuModalsStore()
const userConfig = computed(() => ipcStore.params!.userConfig)
const attachments = computed(() => chatStore.newChatParams.attachments || [])
const roles = computed(() =>
  userConfig.value.chatRoles.map((role: any) => ({
    id: role.name,
    name: truncate(role.name, 16),
  }))
)
const selectedRole = ref<string | undefined>(roles.value[0]?.id)

const sendMessage = async () => {
  const msg = chatInputStore.value.trim()

  if (!msg) return

  await chatStore.sendMessage(
    msg,
    attachments.value,
    userConfig.value.chatRoles.find(
      (role: any) => role.name === selectedRole.value
    )?.rule || ''
  )

  chatInputStore.clear()
}

const clearInput = () => {
  chatInputStore.clear()
  chatInputStore.focus()
}

const voiceInput = () => {
  menuModalsStore.nextModal(MenuModals.VOICE_RECOGNITION, {
    onCorrected: (resultText: string) => {
      chatInputStore.setValue(resultText)
      menuModalsStore.closeAll()
    },
  })
}
</script>

<style scoped>
/* .message {
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
  } */
</style>
