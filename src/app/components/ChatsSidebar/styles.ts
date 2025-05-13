import { Theme } from '@mui/material'

const styles = {
  drawer: (theme: Theme) => ({
    flexShrink: 0,

    [`& .MuiDrawer-paper`]: {
      width: theme.drawer.width,
    },
  }),

  drawerContainer: (_theme: Theme, isLoading: boolean) => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: isLoading ? 'center' : 'flex-start',
  }),

  listItemButton: (isActive: boolean) => ({
    ...(isActive && {
      backgroundColor: '#1976d2',
      color: '#ffffff',

      '&:hover': {
        backgroundColor: '#1976d2',
        color: '#ffffff',
      },
    }),
  }),
}

export default styles
