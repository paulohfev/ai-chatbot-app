import chatAIClient from '../clients/chatAIClient'

type ChatCompletionRequest = {
  prompt: string
}

export async function getChatCompletion({ prompt }: ChatCompletionRequest) {
  try {
    const response = await chatAIClient.post('/chat/completions', {
      model: process.env.API_MODEL,
      messages: [{ role: 'user', content: prompt }],
    })

    // @TODO review messaging continuation and listing
    return response.data.choices[0].message.content
  } catch (error: any) {
    throw new Error(error.response?.data?.error?.message || 'Failed to fetch response from OpenAI')
  }
}
