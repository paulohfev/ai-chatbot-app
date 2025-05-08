import apiClient from '../clients/apiClient'

interface ChatRequest {
  prompt: string
}

// @TODO review the response structure
export const sendChatMessage = async ({ prompt }: ChatRequest) => {
  try {
    const { data } = await apiClient.post('/chats', { prompt })
    return data.reply
  } catch (error: unknown) {
    console.error('Error sending chat message:', error)
    throw error
  }
}

export const getChats = async () => {
  try {
    const response = await apiClient.get('/chats')

    return response.data
  } catch (error: unknown) {
    console.error('Error getting chats:', error)
    throw error
  }
}
