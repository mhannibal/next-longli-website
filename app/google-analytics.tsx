"use client";

import Script from "next/script"
import * as gtag from "../gtag"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react";

const GoogleAnalytics = () => {

    //You can show in the console the GA_TRACKING_ID to confirm
    //console.log(gtag.GA_TRACKING_ID)


    
    const pathname = usePathname()
    const searchParams = useSearchParams()
  
    useEffect(() => {
      if (pathname) {
        gtag.pageview(pathname)
      }
    }, [pathname, searchParams])
  
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
      return null
    }
  
    return (
      <>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtag.GA_TRACKING_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer', '${gtag.GA_TRACKING_ID}');
    `,
          }}
        />
      </>
    )  
}

export default GoogleAnalytics
