import Link from 'next/link'

import { Box, CircularProgress, Drawer, List, ListItemButton, ListItemText } from '@mui/material'

import styles from './styles'
import useChatsSidebarController from './useChatsSidebarController'

const ChatsSidebar: React.FC = () => {
  const { chatsList, isLoading } = useChatsSidebarController()

  return (
    <Box>
      <Drawer anchor='left' variant='permanent' open sx={styles.drawer}>
        <Box component='nav' sx={(theme) => styles.drawerContainer(theme, isLoading)}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <List>
              {chatsList?.map((chat) => (
                <Link href={`/chats/${chat.id}`} key={chat.id}>
                  <ListItemButton divider>
                    <ListItemText primary={chat.title} />
                  </ListItemButton>
                </Link>
              ))}
            </List>
          )}
        </Box>
      </Drawer>
    </Box>
  )
}

export default ChatsSidebar
