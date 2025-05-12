import { AccountCircle, SmartToyOutlined } from '@mui/icons-material'
import { Box, Paper, Typography } from '@mui/material'

import { ChatMessage } from '@/app/types/ChatMessage'

import styles from './styles'

type ChatMessagesProps = {
  messages?: ChatMessage[]
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  return (
    <Box sx={styles.messagesListWrapper}>
      {messages?.map((msg, index) => (
        <Box key={index} sx={styles.messageContainer(msg.role)}>
          <Box sx={styles.messageIcon(msg.role)}>{msg.role === 'user' ? <AccountCircle /> : <SmartToyOutlined />}</Box>
          <Paper sx={styles.messagePaper(msg.role)}>
            <Typography>{msg.content}</Typography>
          </Paper>
        </Box>
      ))}
    </Box>
  )
}

export default ChatMessages
