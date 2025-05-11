import { Dispatch, SetStateAction, useState } from 'react'

import { useRouter } from 'next/navigation'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TanstackQueryKeys } from '@/app/constants/TanstackQueryKeys'
import { updateChat } from '@/app/services/chatService'
import { createChat } from '@/app/services/chatService'
import { ChatMessage } from '@/app/types/ChatMessage'

export type UseChatFormControllerParams = {
  chatId?: string
  isChatCreated?: boolean
  setMessages: Dispatch<SetStateAction<ChatMessage[]>>
}

const useChatFormController = ({ chatId, isChatCreated, setMessages }: UseChatFormControllerParams) => {
  const [value, setValue] = useState('')
  const router = useRouter()
  const queryClient = useQueryClient()

  const handleSendMessage = async () => {
    if (!!isChatCreated && !!chatId) {
      const response = await updateChat({ id: chatId, prompt: value })
      return {
        lastMessage: response.messages[response.messages.length - 1].content,
      }
    } else {
      const response = await createChat({ prompt: value })
      return {
        chatId: response._id,
        lastMessage: response.messages[response.messages.length - 1].content,
      }
    }
  }

  const { mutate: sendMessageMutation, isPending: isSendingMessage } = useMutation({
    mutationFn: handleSendMessage,
    onSuccess: (data) => {
      const botMessage = { role: 'assistant', content: data.lastMessage } as ChatMessage
      setValue('')

      // If the chat has not been created, we need to invalidate the chats query and push the user to the new chat
      // If the chat has already been created, we add the bot message to the messages array to update the UI seamlessly
      if (!isChatCreated) {
        queryClient.invalidateQueries({ queryKey: [TanstackQueryKeys.chats] })
        router.push(`/chats/${data.chatId}`)
      } else {
        setMessages((prev: ChatMessage[]) => [...prev, botMessage])
      }
    },
  })

  const sendMessage = async () => {
    // @TODO revise error handling scenario from the API side and the UI
    const userMessage = { role: 'user', content: value } as ChatMessage
    setMessages((prev: ChatMessage[]) => [...prev, userMessage])

    sendMessageMutation()
  }

  return {
    isSendingMessage,
    sendMessage,
    setValue,
    value,
  }
}

export default useChatFormController
