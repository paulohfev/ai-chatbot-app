import { NextRequest, NextResponse } from 'next/server'

const AUTH_USER = process.env.AUTH_USER
const AUTH_PASS = process.env.AUTH_PASS

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get('authorization')

  if (!authHeader) {
    return new Response('Authentication required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
    })
  }

  const base64Credentials = authHeader.split(' ')[1]
  const credentials = atob(base64Credentials).split(':')
  const [username, password] = credentials

  if (username !== AUTH_USER || password !== AUTH_PASS) {
    return new Response('Invalid credentials', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
