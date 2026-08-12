/**
 * Encode/decode utilities for resource URLs
 * URLs are stored as Base64 in guides-data.ts to prevent scraper detection
 */

export function encodeUrl(url: string): string {
  if (typeof window !== 'undefined') {
    return btoa(unescape(encodeURIComponent(url)))
  }
  return Buffer.from(url, 'utf-8').toString('base64')
}

export function decodeUrl(encoded: string): string {
  try {
    if (typeof window !== 'undefined') {
      return decodeURIComponent(escape(atob(encoded)))
    }
    return Buffer.from(encoded, 'base64').toString('utf-8')
  } catch {
    return ''
  }
}
