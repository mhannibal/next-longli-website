import Image from "next/image";
import kalimaLogo from '../../public/kalima.png'
import Link from "next/link";

export default function Footer(){

    return (
        <footer className='bg-mfooter-100 h-80 text-white flex flex-col items-center justify-between  p-8 inclined-top-border'>
                <div className="flex flex-row gap-4 ">
                    <button className="border rounded-xl p-4">
                        <a href="https://www.facebook.com/profile.php?id=100094400536750" target="_blank">فيسبوك</a>
                    </button>
                    <button className="border rounded-xl p-4">
                        <Link href={'/contact'}>اتصل بنا</Link>
                    </button>
                </div>
                <div className='flex flex-row gap-4 align-middle items-center justify-center'>
                    <p>
                        وفقا لمنهاج وزارة التربية الجزائرية
                        انتاج مؤسسة كلمة 2023
                    </p>
                    <Image className='w-7' src={kalimaLogo} alt='kalima company logo' />
                </div>
            </footer>
    )
}