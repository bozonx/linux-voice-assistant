import { describe, expect, it, vi } from 'vitest'

import { type ChatStoreDeps, createChatStoreModel } from './chat-store'

function createDeps(overrides: Partial<ChatStoreDeps> = {}): ChatStoreDeps {
  return {
    sendChatMessage: vi.fn(async () => 'Assistant reply'),
    saveChatHistory: vi.fn(),
    navigateTo: vi.fn(),
    notifyError: vi.fn(),
    emptyMessageError: () => 'No text selected',
    createId: vi.fn(() => 'chat-id-1'),
    nowIso: vi.fn(() => '2026-04-22T00:00:00.000Z'),
    ...overrides,
  }
}

describe('chat-store', () => {
  it('rejects empty messages and notifies the user', async () => {
    const deps = createDeps()
    const store = createChatStoreModel(deps)

    const result = await store.sendMessage('   ')

    expect(result).toBeUndefined()
    expect(deps.notifyError).toHaveBeenCalledWith('No text selected')
    expect(deps.sendChatMessage).not.toHaveBeenCalled()
  })

  it('sends a message, appends assistant response, and saves history', async () => {
    const deps = createDeps()
    const store = createChatStoreModel(deps)
    store.newChatParams.value = {
      id: 'chat-id-1',
      initialMessage: 'Hello',
      attachments: ['file-a'],
    }

    const result = await store.sendMessage('Hello', ['file-a'], 'Be concise')

    expect(result).toBe('Assistant reply')
    expect(store.messages.value).toHaveLength(2)
    expect(store.messages.value[0]?.role).toBe('user')
    expect(store.messages.value[1]?.role).toBe('assistant')
    expect(deps.sendChatMessage).toHaveBeenCalledOnce()
    expect(deps.saveChatHistory).toHaveBeenCalledOnce()
    expect(store.newChatParams.value.attachments).toEqual([])
  })

  it('adds developer instructions for follow-up messages', async () => {
    const deps = createDeps()
    const store = createChatStoreModel(deps)
    store.messages.value.push({
      role: 'assistant',
      content: 'Earlier answer',
    })

    await store.sendMessage('Next question')

    expect(deps.sendChatMessage).toHaveBeenCalledWith(
      'Next question',
      expect.any(Array),
      expect.any(String)
    )
  })

  it('starts a chat with generated id and navigates to chat page', async () => {
    const deps = createDeps()
    const store = createChatStoreModel(deps)

    await store.startChat({
      initialMessage: 'Start here',
    })

    expect(store.newChatParams.value).toEqual({
      initialMessage: 'Start here',
      id: 'chat-id-1',
    })
    expect(deps.navigateTo).toHaveBeenCalledWith('/chat')
  })
})
