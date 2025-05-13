import Link from 'next/link'

import { Box, CircularProgress, Drawer, List, ListItemButton, ListItemText } from '@mui/material'

import ChatsActionHeader, { ChatsActionHeaderCategory } from '../ChatsActionHeader'
import styles from './styles'
import useChatsSidebarController from './useChatsSidebarController'

const ChatsSidebar: React.FC = () => {
  const { chatsList, checkIsActiveChat, isSidebarOpen, isLoading } = useChatsSidebarController()

  return (
    <Drawer anchor='left' variant='persistent' open={isSidebarOpen} sx={styles.drawer}>
      <ChatsActionHeader category={ChatsActionHeaderCategory.Navbar} />

      <Box component='nav' sx={(theme) => styles.drawerContainer(theme, isLoading)}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <List>
            {chatsList?.map((chat) => (
              <Link href={`/chats/${chat.id}`} key={chat.id} title={chat.title}>
                <ListItemButton divider sx={styles.listItemButton(checkIsActiveChat(chat.id))}>
                  <ListItemText primary={chat.listItemTitle} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        )}
      </Box>
    </Drawer>
  )
}

export default ChatsSidebar
