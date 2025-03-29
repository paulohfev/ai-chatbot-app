import axios from 'axios'

const chatAIClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
})

export default chatAIClient
