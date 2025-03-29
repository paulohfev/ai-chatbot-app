import chatAIClient from '../clients/chatAIClient'
import { ChatCompletionResponse } from '../types/chatCompleteResponse'

type ChatCompletionRequestParams = {
  prompt: string
}

export const getChatCompletion = async ({ prompt }: ChatCompletionRequestParams) => {
  try {
    const response = await chatAIClient.post<ChatCompletionResponse>('/chat/completions', {
      model: process.env.API_MODEL,
      messages: [{ role: 'user', content: prompt }],
    })

    // @TODO review messaging continuation and listing
    return response.data.choices[0].message.content
  } catch (error: unknown) {
    console.error('Error creating chat completion:', error)
    const err = error as { response?: { data?: { error?: string } } }
    throw new Error(err.response?.data?.error ?? 'Failed to retrieve a response. Please try again later.')
  }
}
