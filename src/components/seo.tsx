import Head from "next/head";
import React from "react";

interface Props {
  title?: string;
  description?: string;
}

const SEO = ({
  description = "Nettsiden for echo Webkom.",
  title = "echo Webkom",
}: Props): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
    </Head>
  );
};

export default SEO;
