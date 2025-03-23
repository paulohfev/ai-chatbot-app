import { Box, Typography } from '@mui/material'

import GPTForm from './components/GPTForm'
import Grid from './components/Grid'
import styles from './styles'

export default function Home() {
  return (
    <Box>
      <Grid container sx={styles.container}>
        <Grid size={6} sx={styles.gridColumn}>
          <Typography>What can I help you with?</Typography>

          <GPTForm />
        </Grid>
      </Grid>
    </Box>
  )
}
