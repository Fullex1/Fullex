// components/AnimateIn.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export default function AnimateIn({
  children,
  className,
  delay = 0.1,
  duration = 0.6,
  y = 100,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
}) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [inView, hasAnimated])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
