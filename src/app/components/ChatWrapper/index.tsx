import { useEffect, useState } from 'react'

import { Box, CircularProgress } from '@mui/material'

import { ChatMessage } from '@/app/types/ChatMessage'

import ChatForm from '../ChatForm'
import ChatMessages from '../ChatMessages'
import styles from './styles'

export type ChatWrapperProps = {
  chatId?: string
  isChatCreated?: boolean
  isChatLoading?: boolean
  initialMessages?: ChatMessage[]
}

const ChatWrapper: React.FC<ChatWrapperProps> = ({ chatId, isChatCreated, isChatLoading, initialMessages }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([])

  useEffect(() => {
    if (initialMessages && initialMessages.length > 0) {
      setMessages(initialMessages)
    }
  }, [initialMessages])

  return (
    <Box sx={styles.wrapper}>
      <Box>
        {isChatLoading ? (
          <Box sx={styles.loadingContainer}>
            <CircularProgress />
          </Box>
        ) : (
          <ChatMessages messages={messages} />
        )}
      </Box>

      <ChatForm chatId={chatId} isChatCreated={isChatCreated} setMessages={setMessages} />
    </Box>
  )
}

export default ChatWrapper
