import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  await supabase.auth.getSession()
  return res
}



// export async function authMiddleware(req) {
//   const res = NextResponse.next()
//   const supabase = createMiddlewareClient({ req, res })
//   const { data, error } = await supabase.auth.getUser()
//     if (!data.user && request.nextUrl.pathname.startsWith('/accounts')) {
//     return NextResponse.rewrite(new URL('/login', request.url))
//   }


// }