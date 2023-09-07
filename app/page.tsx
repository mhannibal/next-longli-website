import Image from 'next/image'
import kidzProfBookImage from '../public/teacher-kids-book.jpg'

import cardshow from '../public/cardshow.png';
import song from '../public/song.png';
import updateImage from '../public/update.png';
import imagetick from '../public/imagetick.png';

 import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Longli - تطبيق لتعلم اللغة الإنجليزية بطريقة ممتعة',
  description: "Longli تطبيق لتعلم اللغة الإنجليزية بطريقة ممتعة، استكشف اللغة الإنجليزية بأسلوب تفاعلي وشيق. ابدأ التعلم اليوم!",
  keywords: ["english", "learn", "app", 'fun', 'تعلم'],
  openGraph: {
    title: 'Longli - تطبيق لتعلم اللغة الإنجليزية بطريقة ممتعة',
    description: "Longli تطبيق لتعلم اللغة الإنجليزية بطريقة ممتعة، استكشف اللغة الإنجليزية بأسلوب تفاعلي وشيق. ابدأ التعلم اليوم!",
    url: 'https://longli.app',
    siteName: 'longli',
    images: [
      {
        url: '/fb-og.png',
        width: 1200,
        height: 630,
        alt: 'longli app open grpah image',
      },
      
    ],
    locale: 'en_US',
    type: 'website',
  },

}

export default function Home() {
  return (
    <>
      <section className='flex flex-col gap-20  md:flex-row  pt-32 bg-mpink-100 text-white items-center md:justify-center inclined-border '>
        <div className='flex flex-col justify-center items-center md:w-1/3'>
          <div className='w-3/4 text-right text-xl font-noto'>
            <h1 className='drop-shadow-2xl mounir-text-shadow pb-4 text-xl md:text-right md:text-3xl '><span
              className="font-titan px-4">Longli</span>تطبيق </h1>
            استكشف اللغة الإنجليزية بطريقة ممتعة , حيث يصبح التعلم متعة .
          </div>
          <div className='items-center flex flex-col md:flex-row gap-4 mt-32 font-noto'>
            <div className="w-full flex flex-col gap-1 hidden">
              <div className="bg-white capitalize md:h-12  md:w-full2  rounded-lg justify-center md:flex md:flex-row items-center   text-mpink-100 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>
                  ابدأ التعلم
                </p>
              </div>
              <div className='text-center'>
                قريبا
              </div>
            </div>

            <div className="w-full">
              <Image
                className=' cursor-pointer'
                src='/google-play-badge.png'
                alt="google play download badge"
                width={300}
                height={28}
              />
              <span className='text-white flex justify-center '>حمل التطبيق مجانا</span>
            </div>
          </div>
        </div>
        <Image 
          priority
          className='hidden md:block'
          src='/mockup_transparent_App.png'
          alt="phone"
          width={300}
          height={10}
 
        />
      </section>


      <section className='flex flex-col bg-white text-gray-900 items-center md:h-screen py-24'>
      <Image 
          priority
          // width={300} 
          // height={1}  
          src={kidzProfBookImage} 
          alt='kids with their teacher reading from a book'
          className='w-1/2 md:w-2/5' 
      />
      <div className='flex flex-col md:flex-row w-5/6 gap-20'>
          <div className='flex flex-col'>
              <h2 className='md:text-right text-2xl mb-5 font-serif text-center'>طريقة تفاعلية شيقة</h2>
              <p className='text-right'>
                  التعلم باستخدام التقنيات الحديثة لم يعد
                  مملا ولا منفرا ، أصبح مرادفا للاستفادة و
                  المتعة ، تعلم و كأنك تلعب
              </p>
          </div>
          <div className='flex flex-col'>
              <h2 className='md:text-right text-2xl mb-5 font-serif text-center'>تعرف على نطق الكلمة</h2>
              <p className='text-right'>
                  بفضل تقنيات الصوت ، يمكنك التعرف على
                  نطق الكلمة بالشكل الصحيح ، اضافة للتهجئة
                  وتبطئة سرعة النطق
              </p>
          </div>
          <div className='flex flex-col'>
              <h2 className='md:text-right text-2xl mb-5 font-serif text-center'>اثر رصيدك اللغوي</h2>
              <p className='text-right'>
                  يحوي التطبيق على الكثير من الألفاظ
                  الأساسية للغة الواجب معرفتها،
                  هاذا ما سيجعل رصيدك اللغوي غنيا
              </p>
          </div>
      </div>

      </section>


      <section
        className='flex flex-col py-16 px-8 gap-8 bg-mgreen-100 md:h-screen  md:flex-row  align md:items-center  md:justify-center md:gap-4 md:py-12 md:px-40 text-gray-900 '>
        <div className="flex flex-col gap-8 md:gap-4  md:w-1/3 md:h-full text-center md:text-right justify-around ">
            <div className="flex flex-col items-center">
                <Image
                    className="w-12 h-12" 
                    src={cardshow} alt="شاهد اسمع وكرر"/>
                    
                        <h2 className="text-xl  text-gray-900 font-semibold font-noto mt-8">شاهد اسمع وكرر</h2>
                        <p className="text-gray-900">تعتبرالذاكرة البصرية اداة ممتازة للربط بين الصورة و المعنى و النطق الصحيح وهاذا بفضل الفلاش كاردس
                            الممتعة</p>

                    
            </div>
            <div className="flex flex-col items-center">
                <Image
                    className="w-12 h-12" 
                    src={imagetick} alt="quiz"/>
                    
            
                <h2 className="text-xl font-semibold font-noto text-gray-900 mt-8">العب و تمرن ورسخ المعلومة</h2>
                <p className="text-gray-900">العب و احفظ كلمات جديدة و مفيدة عن طريق ألعاب الذاكرة الشيقة و أكسب نقاطا كثيرة</p>
              </div>
          </div>
     
       
        <div className="flex justify-center items-center md:w-1/2">
            <div className="carousel w-2/4 rounded-3xl border-4 border-slate-800">
                <div id="slide1" className="carousel-item relative w-full ">
                  <Image loading="lazy"  src="/app/screen1.png" width={200} height={100} alt="longli app home screen" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <Image loading="lazy"  src="/app/screen2.png" width={200} height={100} alt="longli app activity screen" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <Image loading="lazy"  src="/app/screen3.png" width={200} height={1} alt="longli app another activity screen" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                  <Image loading="lazy"  src="/app/screen4.png" width={200} height={1} alt="longli app quiz activity screen" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
                </div>
              </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-4  md:w-1/3 md:h-full text-gray-900 text-center md:text-right justify-around ">
            <div className="flex flex-col items-center">
                <Image
                    className="w-12 h-12"
                    src={song} alt="تعلم النطق الصحيح"/>
            
                <h2 className="text-xl font-semibold text-gray-900 mt-8">تعلم النطق الصحيح</h2>
                <p className="text-gray-900">تعلم النطق الصحيح للكلمات كأنك تسمعها من شخص بريطاني</p>
            
            </div>
            <div className="flex flex-col items-center">
                <Image
                    className="w-12 h-12" 
                    src={updateImage} alt="تحديثات دائمة"/>
            
                <h2 className="text-xl font-semibold font-noto text-gray-900 mt-8">تحديثات دائمة</h2>
                <p className="text-gray-900"> استفد من التحديثات الدائمة للبرنامج ، كلمات جديدة, ألعاب جديدة وميزات أحدث لتطور مستواك دائما</p>
            </div>
        </div>
    </section>
      <section
        className='flex flex-col bg-white text-gray-900 justify-center items-center align-middle gap-4  mx-auto py-32  md:my-52'>
        <h2 className="font-noto text-2xl mb-8">تطبيق مجاني لتعلم الانجليزية</h2>
         <div className='flex flex-row gap-4 items-center '>
          <Image   src='/logo64black.svg'  width={64} height={64} alt='longli app logo'  />
            <div className='flex flex-col gap-1 border-l border-black px-4'>
                <h3 className='capitalize text-xl text-black font-titan '>Longli</h3>
                <h4 className='text-xs text-black uppercase  '>learning becomes fun</h4>
            </div>
        </div>
        <div className='mt-8'>
            <Image 
              src='/google-play-badge.png' 
              width={256}
              height={1}
              className='cursor-pointer w-64 ' 
              alt="google play download badge"
            />
            <p className="font-noto ">حمل التطبيق و ابدأ الصعود نحو قمة الاحتراف</p>
        </div>
    </section>
    </>
  )
}
