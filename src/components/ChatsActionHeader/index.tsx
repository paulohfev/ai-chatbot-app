import { useRouter } from 'next/navigation'

import { Chat, Search, ViewSidebar } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'

import { useChatsSidebarStore } from '@/store/chatsSidebarStore'

import styles from './styles'

export enum ChatsActionHeaderCategory {
  Sidebar = 'sidebar',
  Navbar = 'navbar',
}

export type ChatsActionHeaderProps = {
  category?: ChatsActionHeaderCategory
}

const ChatsActionHeader: React.FC<ChatsActionHeaderProps> = ({ category = ChatsActionHeaderCategory.Sidebar }) => {
  const router = useRouter()
  const { toggleSidebar } = useChatsSidebarStore()

  const handleAddChatOnClick = () => router.push('/')

  const handleToggleSidebar = () => toggleSidebar()

  return (
    <Box sx={styles.header(category)}>
      <IconButton sx={styles.headerButton} onClick={() => handleToggleSidebar()}>
        <ViewSidebar sx={styles.headerIcon(category)} />
      </IconButton>

      {/* @TODO add search functionality */}
      <IconButton sx={styles.headerButton}>
        <Search sx={styles.headerIcon(category)} />
      </IconButton>

      <IconButton sx={styles.headerButton} onClick={() => handleAddChatOnClick()}>
        <Chat sx={styles.headerIcon(category)} />
      </IconButton>
    </Box>
  )
}

export default ChatsActionHeader
