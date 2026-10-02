"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function Splash() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600)
    return () => clearTimeout(t)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1230f0]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-script text-6xl text-white sm:text-8xl"
          >
            Hello world
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
