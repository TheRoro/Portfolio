import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { trackPageView } from "./events"

const AnalyticsRouteTracker = () => {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname)
  }, [location.pathname])

  return null
}

export default AnalyticsRouteTracker
