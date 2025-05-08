import { useMemo } from 'react'

import useChats from '@/app/hooks/useChats'
import { Chat } from '@/app/types/Chat'

type ChatsLink = {
  id: string
  title: string
}

const useChatsSidebarController = () => {
  const { chats, isLoading } = useChats()

  const chatsList: ChatsLink[] = useMemo(() => {
    return chats?.map((chat: Chat) => ({
      id: chat._id,
      title: chat.messages[0].content,
    }))
  }, [chats])

  return { chatsList, isLoading }
}

export default useChatsSidebarController
