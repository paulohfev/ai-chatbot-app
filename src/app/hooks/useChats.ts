import { useQuery } from '@tanstack/react-query'

import { getChats } from '@/app/services/chatService'

import { TanstackQueryKeys } from '../constants/TanstackQueryKeys'

const useChats = () => {
  const { data: chats, isLoading } = useQuery({
    queryKey: [TanstackQueryKeys.chats],
    queryFn: () => getChats(),
  })

  return { chats, isLoading }
}

export default useChats
