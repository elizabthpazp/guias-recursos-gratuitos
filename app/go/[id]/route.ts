import { NextResponse } from 'next/server'
import { getResourceUrlById } from '@/lib/guides-data'
import { decodeUrl } from '@/lib/url-codec'

export const dynamic = 'force-dynamic'

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const encodedUrl = getResourceUrlById(id)
  const destination = encodedUrl ? decodeUrl(encodedUrl) : ''

  if (!destination || !/^https?:\/\//.test(destination)) {
    return new NextResponse('Not found', { status: 404 })
  }

  return NextResponse.redirect(destination, {
    status: 307,
    headers: {
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
    },
  })
}
