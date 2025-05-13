import { Theme } from '@mui/material'

const styles = {
  main: (theme: Theme, isSidebarOpen: boolean) => ({
    marginTop: '64px',
    padding: '24px',

    ...(isSidebarOpen && {
      marginLeft: theme.drawer.width,
    }),
  }),
}

export default styles
