import React from "react"
import { motion } from "framer-motion"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"

const PageTransition = ({ children }) => {
  const reduceMotion = usePrefersReducedMotion()

  return (
    <motion.main
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              type: "spring",
              mass: 0.35,
              stiffness: 75,
              duration: 0.3,
            }
      }
    >
      {children}
    </motion.main>
  )
}

export default PageTransition
