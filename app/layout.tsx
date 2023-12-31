import './globals.css'
import type { Metadata } from 'next'
import SiteHeader from './site-header'
import SiteFooter from './site-footer'
import { inter, noto_sans_arabic, titane_one } from './fonts'
import GoogleAnalytics from './google-analytics'
import Script from 'next/script'
import MixPanelAnalytics from './mix-panel-analytics'


 
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <Script 
        async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4765062324183329"
        crossOrigin="anonymous"
        strategy="lazyOnload"
        />

      <body  className={`${inter.className}  ${titane_one.variable} ${noto_sans_arabic.variable}`}>

        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
