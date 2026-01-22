'use client'

import { motion } from 'framer-motion'

export default function Button({ children, variant = 'primary', href, onClick, className = '', ...props }) {
  const baseStyles = 'px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-block text-center'
  
  const variants = {
    primary: 'bg-neon-blue text-dark-bg hover:bg-neon-blue-dark hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transform hover:scale-105',
    outline: 'border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]',
    ghost: 'text-neon-blue hover:bg-neon-blue/10',
  }

  const Component = href ? 'a' : 'button'

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        target={href && href.startsWith('http') ? '_blank' : undefined}
        rel={href && href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  )
}
