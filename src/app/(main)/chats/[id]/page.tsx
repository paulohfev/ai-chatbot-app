'use client'

import { useParams } from 'next/navigation'

import { Box } from '@mui/material'

import ChatWrapper from '@/components/ChatWrapper'
import Grid from '@/components/Grid'

import useChatController from './useChatController'

const ChatPage: React.FC = () => {
  const { id } = useParams()
  const { isChatLoading, messages } = useChatController(id as string)

  return (
    <Box>
      <Grid container>
        <Grid size={12}>
          <ChatWrapper
            chatId={id as string}
            isChatCreated={!!id}
            initialMessages={messages}
            isChatLoading={isChatLoading}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ChatPage
