'use client'

import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, rotateX: 2, rotateY: 2 } : {}}
      className={`glass rounded-xl p-6 transition-all duration-300 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
