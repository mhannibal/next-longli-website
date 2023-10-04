import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from "next/link";

export default async function CancelDeleteAccountPage() {
    const supabase = createServerComponentClient({ cookies })
    const { data, error } = await supabase.auth.getUser()
    if (error) console.log(error);
    if (data) console.log(data);

    if (!data.user)
        redirect('/')

    return (
        <>
            {data && data.user &&
                (
                    <div className=" flex flex-col justify-center items-center my-8 mb-16">
                        <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-4'>
                            Thank you for you trust , keep learning keep growing :) 
                            <Link className="p-2 border border-green-600 bg-green-400" href={'/'}>go to the first page</Link>
                        </div>
                    </div>
                )
            }
        </>
    )
}