'use client'

import { AppBar, Box, Theme, Typography } from '@mui/material'

import { useChatsSidebarStore } from '@/store/chatsSidebarStore'

import ChatsActionHeader, { ChatsActionHeaderCategory } from '../ChatsActionHeader'
import styles from './styles'

type NavbarProps = Readonly<{
  showActions?: boolean
}>

const Navbar: React.FC<NavbarProps> = ({ showActions = true }) => {
  const { isSidebarOpen } = useChatsSidebarStore()

  const showActionButtons = showActions && !isSidebarOpen

  return (
    <AppBar position='fixed' sx={(theme: Theme) => styles.navbar(theme, isSidebarOpen)}>
      {showActionButtons && <ChatsActionHeader category={ChatsActionHeaderCategory.Navbar} />}

      <Box>
        <Typography variant='h6'>Ai Chatbot App</Typography>
      </Box>
    </AppBar>
  )
}

export default Navbar
