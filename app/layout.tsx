import './globals.css'
import type { Metadata } from 'next'
import SiteHeader from './site-header'
import SiteFooter from './site-footer'
import { inter, noto_sans_arabic, titane_one } from './fonts'


 
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className={`${inter.className}  ${titane_one.variable} ${noto_sans_arabic.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
