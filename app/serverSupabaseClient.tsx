import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cache } from 'react';

export const createServerSupabaseClient = cache(() => {
    const cookieStore = cookies()
    return createServerComponentClient({ cookies: () => cookieStore })
})
