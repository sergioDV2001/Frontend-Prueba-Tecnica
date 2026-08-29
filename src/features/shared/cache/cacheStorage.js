import { CACHE_TTL_MS } from '../config'

export function readCache(key) {
  try {
    const data = localStorage.getItem(key)
    if (!data) {
      return null
    }

    const { value, expiresAt } = JSON.parse(data)
    if (Date.now() > expiresAt) {
      localStorage.removeItem(key)
      return null
    }

    return value
  } catch {
    return null
  }
}

export function writeCache(key, value, ttl = CACHE_TTL_MS) {
  try {
    const entry = { value, expiresAt: Date.now() + ttl }
    localStorage.setItem(key, JSON.stringify(entry))
  } catch {
    return
  }
}
