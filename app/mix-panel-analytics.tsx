"use client";

import Script from "next/script"
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation"
import mixpanel from 'mixpanel-browser'

const MixPanelAnalytics = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
  
    useEffect(() => { 
        mixpanel.init(`"${process.env.NEXT_PUBLIC_MIXPANEL_TOKEN}"`, { debug: true, track_pageview: true, persistence: 'localStorage' });
    }, [])

    useEffect(() => { 
        if (pathname) { 
            mixpanel.track('Page View', {
               'Page Type': pathname,
            });
        }
   }, [pathname, searchParams]);


    return (
        <>
        </>
    )
}

export default MixPanelAnalytics
