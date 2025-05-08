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
}

export default styles
