import { NextRequest } from 'next/server'

import { getChatCompletion } from '@/app/api/services/chatService'

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json()

    if (!prompt) {
      return new Response(JSON.stringify({ error: 'Prompt is required' }), { status: 400 })
    }

    // @TODO review
    const reply = await getChatCompletion({ prompt })

    return new Response(JSON.stringify({ reply }), { status: 200 })
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
}
