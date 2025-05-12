import { useEffect, useState, useRef } from 'react'

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
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (initialMessages && initialMessages.length > 0) {
      setMessages(initialMessages)
    }
  }, [initialMessages])

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <Box sx={styles.wrapper(!!isChatCreated)}>
      <Box ref={messagesContainerRef} sx={styles.messagesContainer}>
        {isChatLoading ? (
          <Box sx={styles.loadingContainer}>
            <CircularProgress />
          </Box>
        ) : (
          <ChatMessages messages={messages} />
        )}
      </Box>

      <Box sx={styles.formContainer(!!isChatCreated)}>
        <ChatForm chatId={chatId} isChatCreated={isChatCreated} setMessages={setMessages} />
      </Box>
    </Box>
  )
}

export default ChatWrapper
