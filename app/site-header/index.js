import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
    return (
        <header className='flex flex-row  w-full justify-between items-center p-5 text-white lg:px-40 bg-mpink-100 font-noto'>

            <div className='flex flex-row gap-4 items-center  '>
                <Image loading="lazy" src='/logo64white.svg' width={64} height={64} alt='longli app logo' />
                    <div className='flex flex-col gap-1 border-l px-4'>
                        <h3 className='capitalize  text-xl font-titan mounir-text-shadow tracking-widest'>Longli</h3>
                        <h4 className=' text-xs uppercase  mounir-text-shadow'>learning becomes fun</h4>
                    </div>
            </div>

            <nav className='flex md:hidden md:opacity-0 opacity-100 w-12 h-12 relative'>
                
                <input type="checkbox" id="humburger-checkbox" />
                    <div className="humburger">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu">
                        <li><Link href={'/'}>الرئيسية</Link></li>    
                        <li><a href="#portfolio">المدونة</a></li>
                        <li><a href="#contact">مساعدة</a></li>
                        <li><a href="#contact">تحميل</a></li>
                        <li><Link href={'/about'}>تعرف علينا</Link></li>
                        <li><Link href={'/contact'}>اتصل بنا</Link></li>
                    </ul>
            </nav>

            <ul className="hidden md:flex flex-row-reverse gap-4 opacity-0 md:opacity-100">
                <li><Link href={'/'}>الرئيسية</Link></li>    
                <li><a href="#portfolio">المدونة</a></li>
                <li><a href="#contact">مساعدة</a></li>
                <li><a href="#contact">تحميل</a></li>
                <li><Link href={'/about'}>تعرف علينا</Link></li>
                <li><Link href={'/contact'}>اتصل بنا</Link></li>
                        
            </ul>
        </header>
    )
}