import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

export async function POST(request) {
  const requestUrl = new URL(request.url)
  const supabase = createRouteHandlerClient({ cookies })

  const { data  } = await supabase.auth.getUser()
  console.log('data.user.id', data.user.id);

  const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SECRET_KEY, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
  await supabaseAdmin.auth.admin.deleteUser(
    data.user.id
  )
  
  await supabase.auth.signOut()
  

  return NextResponse.redirect(`${requestUrl.origin}`, {
    status: 301,
  })
}
