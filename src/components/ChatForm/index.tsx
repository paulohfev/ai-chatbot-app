import { Dispatch, SetStateAction } from 'react'

import { Box, Button, CircularProgress, TextField } from '@mui/material'

import { ChatMessage } from '@/types/ChatMessage'

import styles from './styles'
import useChatFormController from './useChatFormController'

export type ChatFormProps = {
  chatId?: string
  isChatCreated?: boolean
  setMessages: Dispatch<SetStateAction<ChatMessage[]>>
}

const ChatForm: React.FC<ChatFormProps> = ({ chatId, isChatCreated, setMessages }) => {
  const { isSendingMessage, value, setValue, sendMessage } = useChatFormController({
    chatId,
    isChatCreated,
    setMessages,
  })

  return (
    <Box sx={styles.wrapper}>
      <TextField
        disabled={isSendingMessage}
        label='Ask something'
        fullWidth
        maxRows={5}
        multiline
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <Button disabled={isSendingMessage} onClick={sendMessage} variant='contained'>
        {isSendingMessage ? <CircularProgress size={20} /> : 'Send'}
      </Button>
    </Box>
  )
}

export default ChatForm
