import React from "react"
import { SITE_NAME, absoluteUrl } from "./siteMetadata"

const Seo = ({
  title,
  description,
  path,
  imagePath,
  imageAlt,
  type = "website",
  structuredData,
}) => {
  const canonicalUrl = absoluteUrl(path)
  const imageUrl = absoluteUrl(imagePath)

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#121921" />
      <meta name="image" content={imageUrl} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  )
}

export * from "./siteMetadata"
export default Seo
