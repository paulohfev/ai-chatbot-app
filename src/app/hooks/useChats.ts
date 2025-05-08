import { useQuery } from '@tanstack/react-query'

import { getChats } from '@/app/services/chatService'

const useChats = () => {
  const { data: chats, isLoading } = useQuery({
    queryKey: ['chats'],
    queryFn: () => getChats(),
  })

  return { chats, isLoading }
}

export default useChats
