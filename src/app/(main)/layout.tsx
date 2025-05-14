'use client'

import { Box, Theme } from '@mui/material'

import ChatsSidebar from '../../components/ChatsSidebar'
import Navbar from '../../components/Navbar'
import { useChatsSidebarStore } from '../../store/chatsSidebarStore'
import styles from './styles'

export default function MainAppLayout({ children }: { children: React.ReactNode }) {
  const { isSidebarOpen } = useChatsSidebarStore()

  return (
    <Box sx={(theme: Theme) => styles.wrapper(theme, isSidebarOpen)}>
      <Navbar />

      <ChatsSidebar />

      {children}
    </Box>
  )
}
