import { useMemo } from 'react'

import { useParams } from 'next/navigation'

import useChats from '@/hooks/useChats'
import { useChatsSidebarStore } from '@/store/chatsSidebarStore'
import { Chat } from '@/types/Chat'
import { truncateText } from '@/utils/truncateText'

type ChatsLink = {
  id: string
  listItemTitle: string
  title: string
}

const useChatsSidebarController = () => {
  const { id } = useParams()
  const { isSidebarOpen } = useChatsSidebarStore()
  const { chats, isLoading } = useChats()

  const chatsList: ChatsLink[] = useMemo(() => {
    return chats?.map((chat: Chat) => {
      const listItemTitle = truncateText(chat.messages[0].content, 25)
      const title = truncateText(chat.messages[0].content, 35)

      return {
        id: chat._id,
        listItemTitle,
        title,
      }
    })
  }, [chats])

  const checkIsActiveChat = (chatId: string) => {
    return id === chatId
  }

  return { chatsList, checkIsActiveChat, isLoading, isSidebarOpen }
}

export default useChatsSidebarController
