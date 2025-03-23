import { Box } from '@mui/material'

import Grid from './components/Grid'
import styles from './styles'

export default function Home() {
  return (
    <Box>
      <Grid container sx={styles.container}>
        <Grid size={6} sx={styles.gridColumn}>
          HOME
        </Grid>
      </Grid>
    </Box>
  )
}
