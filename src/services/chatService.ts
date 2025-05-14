import apiClient from '../clients/apiClient'
import { Chat } from '../types/Chat'

type CreateChatParams = {
  prompt: string
}

type UpdateChatParams = CreateChatParams & {
  id: string
}

// @TODO review the response structure
export const createChat = async ({ prompt }: CreateChatParams): Promise<Chat> => {
  try {
    const { data } = await apiClient.post('/chats', { prompt })
    return data
  } catch (error: unknown) {
    console.error('Error sending chat message:', error)
    throw error
  }
}

export const updateChat = async ({ id, prompt }: UpdateChatParams): Promise<Chat> => {
  try {
    const { data } = await apiClient.post(`/chats/${id}`, { prompt })
    return data
  } catch (error: unknown) {
    console.error('Error updating chat:', error)
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

export const getChat = async (id: string) => {
  try {
    const response = await apiClient.get(`/chats/${id}`)
    return response.data
  } catch (error: unknown) {
    console.error('Error getting chat:', error)
    throw error
  }
}
