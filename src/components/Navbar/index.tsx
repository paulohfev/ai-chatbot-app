'use client'

import { useSession } from 'next-auth/react'

import { AppBar, Avatar, Box, Theme, Typography } from '@mui/material'

import { useChatsSidebarStore } from '@/store/chatsSidebarStore'

import ChatsActionHeader, { ChatsActionHeaderCategory } from '../ChatsActionHeader'
import styles from './styles'

type NavbarProps = Readonly<{
  showActions?: boolean
}>

const Navbar: React.FC<NavbarProps> = ({ showActions = true }) => {
  const { isSidebarOpen } = useChatsSidebarStore()
  const { data: session } = useSession()

  const showActionButtons = showActions && !isSidebarOpen

  return (
    <AppBar position='fixed' sx={(theme: Theme) => styles.navbar(theme, isSidebarOpen)}>
      {showActionButtons && <ChatsActionHeader category={ChatsActionHeaderCategory.Navbar} />}

      <Box sx={styles.navbarProfileContainer}>
        <Typography variant='h6'>Ai Chatbot App</Typography>

        {session && <Avatar src={session?.user?.image || ''} />}
      </Box>
    </AppBar>
  )
}

export default Navbar
