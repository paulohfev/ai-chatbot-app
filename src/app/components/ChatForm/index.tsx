import { useState } from 'react'

import { Box, Button, Paper, TextField, Typography } from '@mui/material'

import { sendChatMessage } from '@/app/services/chatService'

import styles from './styles'

const ChatForm: React.FC = () => {
  // @TODO review and move to state management system
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])

  const sendMessage = async () => {
    const userMessage = { role: 'user', content: value }
    setMessages((prev) => [...prev, userMessage])

    const reply = await sendChatMessage({ prompt: value })
    const botMessage = { role: 'assistant', content: reply }
    setMessages((prev) => [...prev, botMessage])

    setValue('')
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.messagesListWrapper}>
        {messages.map((msg, index) => (
          <Box key={index} sx={styles.messageContainer(msg.role)}>
            <Paper sx={styles.messagePaper}>
              <Typography>{msg.content}</Typography>
            </Paper>
          </Box>
        ))}
      </Box>

      <TextField
        label='Ask something'
        fullWidth
        maxRows={5}
        multiline
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <Button onClick={sendMessage} variant='contained'>
        Send
      </Button>
    </Box>
  )
}

export default ChatForm
