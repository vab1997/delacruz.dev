import Head from "next/head";
import { useEffect } from "react";
import globalStyles from "../styles/global";
import Footer from "./footer";
import NavBar from "./navbar";

function Layout({
  children,
  title = "Mentoring para programadores",
  description = "Mentoring, tutoría y coaching a medida para programadores y programadoras que buscan dar un salto en su carrera profesional",
  image = "/images/profile/dani-mobile-flat.jpg",
  url,
}) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{title} - Dani de la Cruz</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="preconnect dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
        <link rel="canonical" href={url ? `https://delacruz.dev/blog/${url}` : "https://delacruz.dev"} />

        <link rel="alternate" type="application/rss+xml" title="Dani de la Cruz" href="https://delacruz.dev/feed.xml" />
        <meta name="author" content="Dani de la Cruz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@d4nidev" />
        <meta name="twitter:domain" content="delacruz.dev" />
        <meta name="twitter:image" content={`https://delacruz.dev${image}`} />
        <meta name="twitter:site" content="@d4nidev" />
        <meta name="twitter:title" content={`${title} - Dani de la Cruz`} />
        <meta property="og:url" content={url ? `https://delacruz.dev/blog/${url}` : "https://delacruz.dev"} />
        <meta property="og:locale" content="es-ES" />
        <meta property="og:site_name" content="delacruz.dev" />
        <meta property="og:title" content={`${title} - Dani de la Cruz`} />
        <meta property="og:image" content={`https://delacruz.dev${image}`} />
        <meta property="og:description" content={description} />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}

export default Layout;
