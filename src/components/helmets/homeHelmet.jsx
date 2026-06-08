import React from "react"
import Seo, { HOME_SEO, homeStructuredData } from "../seo"

const HomeHelmet = () => {
  return <Seo {...HOME_SEO} structuredData={homeStructuredData} />
}

export default HomeHelmet
