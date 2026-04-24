import { APP_CONFIG } from './app-config'
import type { ChatMessage } from './desktop'
import type { LlmModel } from './user-config'

export const useAiRequest = () => {
  const prepareDevInstructions = (
    devInstructions: string,
    devInstructionsData?: Record<string, string>
  ) => {
    let result = devInstructions

    if (devInstructionsData) {
      Object.entries(devInstructionsData).forEach(([key, value]) => {
        result = result.replace('{{' + key + '}}', value)
      })
    }

    return result
  }

  function prepareAiMessages(
    rawMessages: string | ChatMessage[],
    rules?: string,
    devInstructions?: string
  ) {
    const messages: ChatMessage[] = []

    if (devInstructions) {
      messages.push({ role: 'developer', content: devInstructions.trim() })
    }

    if (rules) {
      messages.push({
        role: 'user',
        content: APP_CONFIG.rulePrefix + ':\n\n' + rules.trim(),
      })
    }

    if (Array.isArray(rawMessages)) {
      messages.push(
        ...rawMessages.map((item) => ({
          ...item,
          content: item.content.trim(),
        }))
      )
    } else {
      messages.push({ role: 'user', content: rawMessages.trim() })
    }

    return messages
  }

  async function chatCompletion(
    model: LlmModel,
    messages: string | ChatMessage[],
    options?: { onChunk?: (chunk: string) => void; signal?: AbortSignal }
  ): Promise<Record<string, any>> {
    const provider = model.provider || model.model

    if (provider === 'ollama') {
      return await ollamaChatCompletion(model, messages, options)
    }

    return await openAiCompatibleChatCompletion(model, messages, options)
  }

  async function openAiCompatibleChatCompletion(
    model: LlmModel,
    messages: string | ChatMessage[],
    options?: { onChunk?: (chunk: string) => void; signal?: AbortSignal }
  ): Promise<Record<string, any>> {
    try {
      const result = await fetch(
        (model.baseUrl || '').replace(/\/$/, '') + '/chat/completions',
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + (model.apiKey || ''),
            'X-Title': 'Librnet assistant',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: model.model,
            messages,
            stream: !!options?.onChunk,
          }),
          signal: options?.signal,
        }
      )

      if (!result.ok) {
        const body = await result.text()
        return {
          error: body,
          status: result.status,
          statusText: result.statusText,
        }
      }

      if (options?.onChunk && result.body) {
        const reader = result.body.getReader()
        const decoder = new TextDecoder()
        let content = ''

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value, { stream: true })
          const lines = chunk.split('\n')

          for (const line of lines) {
            if (line.startsWith('data: ') && line !== 'data: [DONE]') {
              try {
                const data = JSON.parse(line.slice(6))
                const text = data.choices[0]?.delta?.content || ''
                if (text) {
                  content += text
                  options.onChunk(text)
                }
              } catch (e) {
                // Ignore parse errors for incomplete chunks
              }
            }
          }
        }
        return { content }
      }

      const data = await result.json()
      return data.choices[0].message
    } catch (e) {
      if (e instanceof Error && e.name === 'AbortError') {
        return { content: '' } // Aborted
      }
      throw e
    }
  }

  async function ollamaChatCompletion(
    model: LlmModel,
    messages: string | ChatMessage[],
    options?: { onChunk?: (chunk: string) => void; signal?: AbortSignal }
  ): Promise<Record<string, any>> {
    const normalizedMessages = Array.isArray(messages)
      ? messages.map((message) => ({
          role: message.role === 'developer' ? 'system' : message.role,
          content: message.content,
        }))
      : [{ role: 'user', content: messages }]

    try {
      const result = await fetch(
        (model.baseUrl || 'http://localhost:11434').replace(/\/$/, '') +
          '/api/chat',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: model.model,
            messages: normalizedMessages,
            stream: !!options?.onChunk,
            options: {
              temperature: model.temperature ?? 0.2,
              num_predict: model.maxTokens ?? 512,
            },
          }),
          signal: options?.signal,
        }
      )

      if (!result.ok) {
        const body = await result.text()
        return {
          error: body,
          status: result.status,
          statusText: result.statusText,
        }
      }

      if (options?.onChunk && result.body) {
        const reader = result.body.getReader()
        const decoder = new TextDecoder()
        let content = ''

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value, { stream: true })
          const lines = chunk.split('\n')

          for (const line of lines) {
            if (line.trim()) {
              try {
                const data = JSON.parse(line)
                const text = data.message?.content || ''
                if (text) {
                  content += text
                  options.onChunk(text)
                }
              } catch (e) {
                // Ignore parse errors
              }
            }
          }
        }
        return { content }
      }

      const data = await result.json()
      return { content: data.message?.content || '' }
    } catch (e) {
      if (e instanceof Error && e.name === 'AbortError') {
        return { content: '' } // Aborted
      }
      throw e
    }
  }

  return { chatCompletion, prepareAiMessages, prepareDevInstructions }
}
