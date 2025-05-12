'use client'

import { Box, Typography } from '@mui/material'

import ChatWrapper from './components/ChatWrapper'
import Grid from './components/Grid'
import styles from './styles'

export default function Home() {
  return (
    <Box>
      <Grid container sx={styles.container}>
        <Grid size={12} sx={styles.gridColumn}>
          <Typography>What can I help you with?</Typography>

          <ChatWrapper />
        </Grid>
      </Grid>
    </Box>
  )
}
