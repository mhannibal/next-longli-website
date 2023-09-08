
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID


type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[]
}

declare const window: WindowWithDataLayer

export const GTM_ID = process.env.NEXT_PUBLIC_GTM

export const pageview = (url: string) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    })
  } else {
    console.log({
      event: "pageview",
      page: url,
    })
  }
}


// export const pageview = (url) => {
//   window.gtag("config", GA_TRACKING_ID, {
//     page_path: url,
//   })
// }

// export const event = ({ action, category, label, value }) => {
//   window.gtag("event", action, {
//     event_category: category,
//     event_label: label,
//     value: value,
//   })
// }
