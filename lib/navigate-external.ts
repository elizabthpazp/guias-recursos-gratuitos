import { decodeUrl } from './url-codec'

/**
 * Safely navigates to an encoded or plain external URL in a new tab.
 * Decodes client-side at interaction time to avoid exposing external URLs in static HTML.
 */
export function openExternalUrl(rawUrl?: string): void {
  if (!rawUrl || typeof window === 'undefined') return
  
  let targetUrl = rawUrl
  if (!rawUrl.startsWith('http://') && !rawUrl.startsWith('https://')) {
    targetUrl = decodeUrl(rawUrl)
  }
  
  if (targetUrl) {
    window.open(targetUrl, '_blank', 'noopener,noreferrer')
  }
}
