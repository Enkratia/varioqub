"use client";

import React, { Suspense } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";

const YM_COUNTER_NUMBER = 97936289;

const scriptBody = `
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    window?.ym?.(${YM_COUNTER_NUMBER}, "init", {
      defer: true,
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true,
      trackHash:true
  }); 
  `;

// **
const MetrikaSuspense: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    // @ts-expect-error TODO: протипизировать яндекс метрику позже
    window.ym(YM_COUNTER_NUMBER, "hit", window.location.href);

    // @ts-expect-error TODO: протипизировать яндекс метрику позже
    console.log("window?.ym", window?.ym);
  }, [pathname, searchParams]);

  return (
    <Script strategy="beforeInteractive" id="yandex-metrika">
      {scriptBody}
    </Script>
  );
};

// **
export const Metrika: React.FC = () => (
  <Suspense>
    <MetrikaSuspense />
  </Suspense>
);

//////////////////////////////////////////////////
/* <Head>
        <GoogleTagManager gtmId="GTM-T9RXZGS" />
      </Head> */

/* <Script id="yandex-metrika">{data.script}</Script> */

/* <Script id="gtm">{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T9RXZGS');
        `}</Script> */

// strategy="lazyOnload"
// <>
//   <Head>
//     <script defer id="yandex-metrika">
//       {data.script}
//     </script>
//   </Head>
// </>
