'use client'

import { signIn } from 'next-auth/react'

import { Google } from '@mui/icons-material'
import { Box, Button, Divider, Typography } from '@mui/material'

import Grid from '../../components/Grid'
import styles from './styles'
import Image from 'next/image'

const LoginPage = () => {
  return (
    <Grid container>
      <Grid size={8}>
        <Image src='/images/login.svg' alt='login' width={400} height={400} />
      </Grid>

      <Grid size={4}>
        <Box sx={styles.container}>
          <Typography variant='h4'>Welcome to the AI Chatbot App!</Typography>

          <Divider sx={styles.divider}>
            <Typography>Sign in with Google</Typography>
          </Divider>

          <Button color='primary'  onClick={() => signIn('google')} sx={styles.button} variant='contained'>
            <Google />
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default LoginPage
