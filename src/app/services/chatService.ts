import apiClient from '../clients/apiClient'

interface ChatRequest {
  prompt: string
}

// @TODO review the response structure
export async function sendChatMessage({ prompt }: ChatRequest) {
  try {
    const { data } = await apiClient.post('/chat', { prompt })
    return data.reply
  } catch (err: any) {
    throw new Error(err.response?.data?.error ?? 'There was an error connecting to the chat. Please try again later.')
  }
}
