'use client'

import { signIn } from 'next-auth/react'

import { Google } from '@mui/icons-material'
import { Box, Button } from '@mui/material'

import Grid from '../components/Grid'

const LoginPage = () => {
  return (
    <Box>
      <Grid container>
        <Grid size={12}>
          <Button onClick={() => signIn('google')} variant='contained' color='primary'>
            <Google />
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default LoginPage
