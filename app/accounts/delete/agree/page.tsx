export default async function AgreeDeleteAccountPage() {
    return (
        <div className=' flex flex-col justify-center items-center my-8 mb-16'>

            <div className='p-8 md:w-1/2 mb-2'>
                <p className='py-2 px-4 bg-amber-200 text-amber-950 m-4 rounded-md'>
                    بالنقر على حذف حسابي، ستقوم<strong> بمسح هذه البيانات بشكل دائم</strong>. يُرجى ملاحظة أن جميع البيانات الداخلية، مثل تقدمك ونقاطك داخل تطبيقنا، ستفقد أيضًا.
                </p>

                <p className='py-2 px-4 bg-amber-200 text-amber-950 m-4 rounded-md'>
                                By clicking on Delete my account, you will <strong>permanently erase</strong> this data. Please be aware that all internal data, such as your progress and scores within our application, will also be lost.
                            </p>

                <p className='py-2 px-4 bg-amber-200 text-amber-950 m-4 rounded-md'>
                    En cliquant sur Supprimer mon compte, vous <strong>effacerez de manière permanente </strong>ces données. Veuillez noter que toutes les données internes, telles que votre progression et vos scores au sein de notre application, seront également perdues.
                </p>

            </div>

            <div className='m-4 flex flex-col md:flex-row gap-4'>
                <a href='/accounts/delete/deny' className='px-4 py-2 border-green-400 text-center bg-green-300 text-green-800 border'>Cancel</a>
                <form action='/auth/delete' method='POST'>
                    <button formAction='/auth/delete'  className='px-4 py-2 border-red-600 bg-red-600 text-center text-white border'>Delete my account</button>

                </form>
            </div>
        </div>

    )
}