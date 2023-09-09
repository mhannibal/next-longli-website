"use client";

import Script from "next/script"
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation"
import mixpanel from 'mixpanel-browser'

const MixPanelAnalytics = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
  
    useEffect(() => {
        if (pathname) { 
            mixpanel.track('Page View', {
               'Page Type': pathname,
            });
        }
   }, [pathname, searchParams]);

  

    return (
        <>
          <Script>
            {
              `mixpanel.init("${process.env.NEXT_MIXPANEL_TOKEN}", { debug: true, track_pageview: true, persistence: 'localStorage' });`
            }
          </Script>
        </>
    )
}

export default MixPanelAnalytics