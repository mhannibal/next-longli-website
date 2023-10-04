export default function Login() {
    return (
        <section className="p-16 flex flex-col gap-4 justify-center items-center">
            <h1 className=" bg-red-300 text-red-700 py-2 px-4 border border-red-600 rounded">هذه الصفحة محمية، يجب عليك تسجيل الدخول للمتابعة</h1>
            <h1 className=" bg-red-300 text-red-700 py-2 px-4 border border-red-600 rounded">This page is protected, you should sign in to continue</h1>
            <h1 className=" bg-red-300 text-red-700 py-2 px-4 border border-red-600 rounded">Cette page est protégée, vous devez vous connecter pour continuer</h1>
            <a href="/auth/login" className="border border-gray-600 py-2 px-4 bg-pink-700 hover:bg-pink-500 text-white rounded bg-">Sign in  with google</a>
        </section>
        
    )
  }
  