import { Theme } from '@mui/material'

const styles = {
  navbar: (theme: Theme, isSidebarOpen: boolean) => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: '64px',
    justifyContent: 'space-between',
    padding: '10px 16px',

    ...(isSidebarOpen && {
      justifyContent: 'flex-end',
      padding: `10px 16px 10px calc(${theme.drawer.width} + 16px)`,
    }),
  }),

  navbarProfileContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
}

export default styles
