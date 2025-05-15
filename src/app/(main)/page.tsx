'use client'

import { useSession } from 'next-auth/react'

import { Box, Typography } from '@mui/material'

import ChatWrapper from '../../components/ChatWrapper'
import Grid from '../../components/Grid'
import styles from '../styles'

export default function Home() {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <Box>
      <Grid container sx={styles.container}>
        <Grid size={12} sx={styles.gridColumn}>
          {!!user && (
            <Typography component='h4' variant='h4' sx={styles.title}>
              Welcome, {user.name}
            </Typography>
          )}

          <Typography component='h6' variant='h6' sx={styles.title}>
            What can I help you with?
          </Typography>

          <ChatWrapper />
        </Grid>
      </Grid>
    </Box>
  )
}
