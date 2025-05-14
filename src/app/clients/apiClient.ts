import { getSession } from 'next-auth/react'

import axios from 'axios'

import { CustomSession } from '../types/CustomSession'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(async (config) => {
  const session = (await getSession()) as CustomSession

  if (session?.accessToken) {
    config.headers.Authorization = `Bearer ${session.accessToken}`
  }
  return config
})

export default apiClient
