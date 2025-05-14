'use client'

import { ReactNode } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export type TanstackQueryProviderProps = {
  children: ReactNode
}

const TanstackQueryProvider: React.FC<TanstackQueryProviderProps> = ({ children }) => {
  const queryClient = new QueryClient()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default TanstackQueryProvider
