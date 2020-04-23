import Head from "next/head";

function Layout({
  children,
  title = "Mentoring para programadores - Dani de la Cruz",
}) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Mentoring, tutoría y coaching a medida para programadores y programadoras que buscan dar un salto en su carrera profesional."
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="google-site-verification"
          content="EjvTftuJDIpIilQKH0ZPmH5_HmVA4dZMdUS8n6-V7hw"
        />
        <title>{title}</title>

        <link
          rel="preconnect dns-prefetch"
          href="https://www.googletagmanager.com"
        />
        <link
          rel="preconnect dns-prefetch"
          href="https://www.google-analytics.com"
        />
        <link
          rel="preconnect dns-prefetch"
          href="https://cdnjs.cloudflare.com"
        />

        {/* <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-141784503-1');
      </script> */}

        <link rel="canonical" href="{{ .Permalink }}" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@d4nidev" />
        <meta name="twitter:domain" content="delacruz.dev" />
        <meta
          name="twitter:image"
          content="https://delacruz.dev/favicon/apple-touch-icon.png"
        />
        <meta name="twitter:site" content="@d4nidev" />
        <meta name="og:locale" content="es-ES" />
        <meta
          name="og:title"
          content="Mentoring para programadores - Dani de la Cruz"
        />
        <meta
          name="og:image"
          content="https://delacruz.dev/favicon/apple-touch-icon.png"
        />
        <meta
          name="og:description"
          content="Mentoring, tutoría y coaching a medida para programadores y programadoras que buscan dar un salto en su carrera profesional."
        />
        <meta name="og:site_name" content="delacruz.dev" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/bulma-timeline.min.css" />
        <link
          rel="stylesheet"
          href="/css/bulma.min.css"
        />
        <link
          rel="stylesheet"
          media="(max-width: 640px)"
          href="/css/max-640px.css"
        />
        <link
          rel="stylesheet"
          media="(min-width: 640px)"
          href="/css/min-640px.css"
        />
        <link
          rel="stylesheet"
          media="(min-width: 1088px)"
          href="/css/min-1088px.css"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-141784503-1"
        ></script>
      </Head>
      {children}
      <script type="text/javascript" src="/js/analytics.js"></script>
    </>
  );
}

export default Layout;