import apiClient from '../clients/apiClient'

interface ChatRequest {
  prompt: string
}

// @TODO review the response structure
export async function sendChatMessage({ prompt }: ChatRequest) {
  try {
    const { data } = await apiClient.post('/chat', { prompt })
    return data.reply
  } catch (error: unknown) {
    console.error('Error sending chat message:', error)
    throw error
  }
}
