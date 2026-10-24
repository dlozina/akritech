import Head from 'next/head';

import { AppConfig } from '../utils/AppConfig';
import { structuredData } from '../utils/structuredData';

type IMetaProps = {
  title: string;
  description: string;
  canonical: string;
};

const Meta = ({ title, description, canonical }: IMetaProps) => (
  <Head>
    <meta charSet="UTF-8" key="charset" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} key="description" />
    <link rel="canonical" href={canonical} key="canonical" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <meta name="theme-color" content="#013349" />
    <meta name="author" content="Dino Lozina" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={AppConfig.site_name} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={AppConfig.socialImage} />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1254" />
    <meta property="og:image:height" content="1254" />
    <meta
      property="og:image:alt"
      content="Akritech's coastal engineering workshop, illustrated in pixel art."
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={AppConfig.socialImage} />
    <meta
      name="twitter:image:alt"
      content="Akritech's coastal engineering workshop, illustrated in pixel art."
    />

    <link
      rel="preload"
      href="/assets/fonts/jetbrains-mono-regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href="/assets/fonts/jetbrains-mono-bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon" href="/favicon.ico" />
    <script
      id="akritech-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      }}
    />
  </Head>
);

export { Meta };
