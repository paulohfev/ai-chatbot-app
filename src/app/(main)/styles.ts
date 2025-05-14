import { Theme } from '@mui/material'

const styles = {
  wrapper: (theme: Theme, isSidebarOpen: boolean) => ({
    marginTop: theme.navbar.height,

    ...(isSidebarOpen && {
      marginLeft: theme.drawer.width,
    }),
  }),
}

export default styles
