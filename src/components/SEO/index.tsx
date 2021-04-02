import { FC } from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  amphtml?: string;
  ogType?: 'website' | 'article';
  image?: string;
  altImage?: string;
  shouldExcludeTitleSuffix?: boolean;
  shouldIndexPage?: boolean;
}

const SEO: FC<SEOProps> = ({
  title,
  description,
  canonical,
  amphtml,
  ogType,
  image,
  altImage,
  // shouldExcludeTitleSuffix = false,
  shouldIndexPage = true,
}) => {
  // const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? '- ABQM' : ''}`;
  const pageImage =
    image || 'images/mao.jpg';

  return (
    <Head>
      <title>{title}</title>

      {!shouldIndexPage && <meta name="robots" content="noindex.nofollow" />}
      <meta name="description" content={description} />
      <meta name="image" content={pageImage} />


      {/* <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" /> */}
      {/* <meta name="MobileOptimized" content="320" /> */}
      {/* <meta name="HandheldFriendly" content="True" /> */}
      {/* <meta name="msapplication-TileColor" content="#121214" /> */}
      {/* <meta name="referrer" content="no-referrer-when-downgrade" /> */}
      {/* <meta name="google" content="notranslate" /> */}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={ogType || 'website'} />
      <meta property="og:site_name" content="TOBRUXO" />
      <meta property="og:image" content={pageImage} />
      {/* <meta property="og:image:secure_url" content={pageImage} /> */}
      <meta property="og:image:alt" content={altImage || 'Imagem destaque'} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="675" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content={pageImage} />
      <meta name="twitter:site" content="@to_bruxo" />
      <meta name="twitter:creator" content="@to_bruxo" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content={altImage || 'Imagem destaque'} />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="675" />

      <link rel="canonical" href={canonical} />
      {amphtml && <link rel="amphtml" href={amphtml} />}
    </Head>
  );
};

export { SEO };