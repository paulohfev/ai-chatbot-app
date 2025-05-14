import { useMemo } from 'react'

import { useQuery } from '@tanstack/react-query'

import { TanstackQueryKeys } from '@/constants/TanstackQueryKeys'
import { getChat } from '@/services/chatService'

const useChatController = (id: string) => {
  const { data: chat, isLoading: isChatLoading } = useQuery({
    queryKey: TanstackQueryKeys.chatById(id),
    queryFn: () => getChat(id),
  })

  const messages = useMemo(() => {
    return chat?.messages
  }, [chat])

  return { isChatLoading, messages }
}

export default useChatController
