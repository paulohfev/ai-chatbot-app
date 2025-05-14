import { Theme } from '@mui/material'

const styles = {
  wrapper: (theme: Theme) => ({
    alignItems: 'center',
    display: 'flex',
    height: `calc(100vh - ${theme.navbar.height} - 48px)`,
    justifyContent: 'center',
    marginTop: '64px',
  }),
}

export default styles
