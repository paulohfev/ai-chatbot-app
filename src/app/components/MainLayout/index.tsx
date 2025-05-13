'use client'

import { Box, Theme } from '@mui/material'

import { useChatsSidebarStore } from '@/app/store/chatsSidebarStore'

import ChatsSidebar from '../ChatsSidebar'
import styles from './styles'

export type MainLayoutProps = Readonly<{
  children: React.ReactNode
}>

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isSidebarOpen } = useChatsSidebarStore()

  return (
    <Box component='main' sx={(theme: Theme) => styles.main(theme, isSidebarOpen)}>
      <ChatsSidebar />

      {children}
    </Box>
  )
}

export default MainLayout
