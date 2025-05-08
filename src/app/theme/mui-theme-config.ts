import { ThemeOptions, createTheme } from '@mui/material'

import components from './components'

declare module '@mui/material/styles' {
  interface Theme {
    drawer: {
      width: string
    }
  }
}

const muiThemeConfig = {
  drawer: {
    width: components.drawer.width,
  },
}

const theme = createTheme(muiThemeConfig as ThemeOptions)

export default theme
