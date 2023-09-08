"use client";

import Script from "next/script"
import * as gtag from "../gtag"
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation"

const GoogleAnalytics = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
  
    useEffect(() => {
      if (pathname) {
        gtag.pageview(pathname)
      }
    }, [pathname, searchParams])
  

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${gtag.GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                      });
                    `,
                }}
            />
        </>
    )
}

export default GoogleAnalytics
