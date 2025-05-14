'use client'

import { Box } from '@mui/material'

import Navbar from '../../components/Navbar'
import styles from './styles'

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={styles.wrapper}>
      <Navbar showActions={false} />

      {children}
    </Box>
  )
}
