import { Theme } from '@mui/material'

const styles = {
  button: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    gap: '5px',
  },

  buttonText: {
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textTransform: 'none',
  },

  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '20px',
  },

  divider: { 
    '&::before, &::after': {
      borderColor: 'divider',
    },
    width: '100%',
    my: 2
  },

  wrapper: (theme: Theme) => ({
    alignItems: 'center',
    display: 'flex',
    height: `calc(100vh - ${theme.navbar.height} - 48px)`,
    justifyContent: 'center',
    marginTop: '64px',
  }),
}

export default styles
