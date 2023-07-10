import { Inter, Titan_One, Noto_Sans_Arabic } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 

export const noto_sans_arabic = Noto_Sans_Arabic({
    subsets: ['arabic'],
    display: 'swap',
    variable: '--font-noto-sans-arabic',
  })

export const titane_one = Titan_One({
    subsets: ['latin'],
    weight: "400",
    display: 'swap',
    variable: '--font-titan-one',
  })

