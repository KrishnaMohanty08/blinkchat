'use client'

import { motion } from 'framer-motion'

export default function SectionWrapper({ children, id, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen px-6 py-20 md:px-12 lg:px-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  )
}
