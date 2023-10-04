import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import { redirect } from 'next/navigation'

export default async function DeleteAccountPage() {
    const supabase = createServerComponentClient({ cookies })
    const { data, error } = await supabase.auth.getUser()
    if (error) console.log(error);
    if (data) console.log(data);

    if (!data.user)
        redirect('/login')

    return (
        <>
            {data && data.user &&
                (
                    <div className=' flex flex-col justify-center items-center my-8 mb-16'>
                        <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-4'>
                            <Image
                                src={data.user.user_metadata.avatar_url}
                                width={64}
                                height={64}
                                className='rounded-full'
                                alt={data.user.user_metadata.full_name} />
                            <h1>Hello <strong>{data.user.user_metadata.full_name}</strong> !</h1>
                        </div>
                        <div className='p-8 md:w-1/2 mb-2'>
                            <h1 className='font-semibold'>Account Deletion</h1>
                            <p>You have the option to permanently delete your account associated with the email address <strong>{data.user.email}</strong>.</p>
                            <p>All the information retained by our platform is essential for the optimal operation of our application. We store the following:</p>
                            <ul className='list-disc px-8'>
                                <li>Your full name</li>
                                <li>Profile picture</li>
                                <li>Email address</li>
                                <li>Your linguistic preferences</li>
                            </ul>
                            <p className='py-2 px-4 bg-amber-200 text-amber-950 m-4 rounded-md'>
                                By clicking on 'Delete my account,' you will <strong>permanently erase</strong> this data. Please be aware that all internal data, such as your progress and scores within our application, will also be lost.
                            </p>
                        </div>

                        <div className='p-8 md:w-1/2 mb-2'>

                            <h1 className='font-semibold'>حذف الحساب</h1>
                            <p>لديك الخيار لحذف حسابك بشكل دائم المرتبط بهذا البريد الإلكتروني <strong>{data.user.email}</strong>.</p>
                            <p>جميع المعلومات التي يتم الاحتفاظ بها على منصتنا ضرورية لتشغيل تطبيقنا بكفاءة. نحن نقوم بتخزين ما يلي:</p>
                            <ul className='list-disc px-8'>
                                <li>اسمك الكامل</li>
                                <li>صورة الملف الشخصي</li>
                                <li>عنوان البريد الإلكتروني</li>
                                <li>تفضيلاتك اللغوية</li>
                            </ul>
                            <p className='py-2 px-4 bg-amber-200 text-amber-950 m-4 rounded-md'>
                                بالنقر على 'حذف حسابي'، ستقوم<strong> بمسح هذه البيانات بشكل دائم</strong>. يُرجى ملاحظة أن جميع البيانات الداخلية، مثل تقدمك ونقاطك داخل تطبيقنا، ستفقد أيضًا.
                            </p>
                        </div>


                        <div className='p-8 md:w-1/2 mb-2'>

                            <h1 className='font-semibold'>Suppression de Compte</h1>
                            <p>Vous avez la possibilité de supprimer définitivement votre compte associé à l'adresse e-mail <strong>{data.user.email}</strong>.</p>
                            <p>Toutes les informations conservées par notre plateforme sont essentielles au bon fonctionnement de notre application. Nous stockons les éléments suivants :</p>
                            <ul className='list-disc px-8'>
                                <li>Votre nom complet</li>
                                <li>Photo de profil</li>
                                <li>Adresse e-mail</li>
                                <li>Vos préférences linguistiques</li>
                            </ul>
                            <p className='py-2 px-4 bg-amber-200 text-amber-950 m-4 rounded-md'>
                                En cliquant sur 'Supprimer mon compte', vous <strong>effacerez de manière permanente </strong>ces données. Veuillez noter que toutes les données internes, telles que votre progression et vos scores au sein de notre application, seront également perdues.
                            </p>
                        </div>

                        <div className='m-4 flex flex-col md:flex-row gap-4'>
                            <a href='/accounts/delete/deny' className='px-4 py-2 border-green-400 text-center bg-green-300 text-green-800 border'>Cancel</a>
                            <a href='/accounts/delete/agree' className='px-4 py-2 border-red-600 bg-red-600 text-center text-white border'>Delete my account</a>

                        </div>

                    </div>
                )
            }
        </>
    )
}