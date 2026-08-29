import { API_BASE_URL } from '../config'

async function request(path, options) {
  const response = await fetch(`${API_BASE_URL}${path}`, options)

  if (!response.ok) {
    throw new Error(`La petición a ${path} falló con estado ${response.status}`)
  }

  return response.json()
}

export function httpGet(path) {
  return request(path)
}

export function httpPost(path, body) {
  return request(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}
