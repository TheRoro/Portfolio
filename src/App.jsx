import React, { lazy, Suspense, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import AnalyticsRouteTracker from "./analytics/routeTracker"

const BodegaPage = lazy(() => import("./pages/bodega"))
const DrawlyPage = lazy(() => import("./pages/drawly"))
const HomePage = lazy(() => import("./pages/index"))
const PokeAppPage = lazy(() => import("./pages/pokeapp"))
const PortfolioPage = lazy(() => import("./pages/portfolio"))
const ProjectsPage = lazy(() => import("./pages/projects"))
const RepoColorsPage = lazy(() => import("./pages/repo-colors"))
const UpSpellPage = lazy(() => import("./pages/upspell"))
const VSQuotePage = lazy(() => import("./pages/vsquote"))

const App = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [location.pathname])

  return (
    <>
      <AnalyticsRouteTracker />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <AnimatePresence mode="wait">
        <Suspense fallback={null}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/" element={<ProjectsPage />} />
            <Route path="/bodega/" element={<BodegaPage />} />
            <Route path="/drawly/" element={<DrawlyPage />} />
            <Route path="/pokeapp/" element={<PokeAppPage />} />
            <Route path="/portfolio/" element={<PortfolioPage />} />
            <Route path="/repo-colors/" element={<RepoColorsPage />} />
            <Route path="/upspell/" element={<UpSpellPage />} />
            <Route path="/vsquote/" element={<VSQuotePage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  )
}

export default App
