'use client'

import { AppBar, Box, Theme, Typography } from '@mui/material'

import { useChatsSidebarStore } from '@/app/store/chatsSidebarStore'

import ChatsActionHeader, { ChatsActionHeaderCategory } from '../ChatsActionHeader'
import styles from './styles'

const Navbar: React.FC = () => {
  const { isSidebarOpen } = useChatsSidebarStore()

  return (
    <AppBar position='fixed' sx={(theme: Theme) => styles.navbar(theme, isSidebarOpen)}>
      {!isSidebarOpen && <ChatsActionHeader category={ChatsActionHeaderCategory.Navbar} />}

      <Box>
        <Typography variant='h6'>Ai Chatbot App</Typography>
      </Box>
    </AppBar>
  )
}

export default Navbar
