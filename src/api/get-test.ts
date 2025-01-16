import { api } from '@/lib/axios'

export async function getTest() {
  const response = await api.get('/test')

  return response
}
