'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Button from './ui/Button'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

// Dynamically import 3D scene to avoid SSR issues
const Scene3D = dynamic(() => import('./3D/Scene3D'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 border-4 border-neon-blue border-t-transparent rounded-full animate-spin" />
    </div>
  )
})

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg to-transparent" />
      
      {/* 3D Scene */}
      <div className="absolute inset-0 opacity-40">
        <Scene3D />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-neon-blue font-medium mb-4 tracking-wider uppercase text-sm md:text-base"
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 neon-glow"
          >
            Krishna Mohanty
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-4 font-light"
          >
            Computer Science Undergraduate | Full Stack Web Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Building scalable, performant web applications
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button href="#projects" variant="primary">
              View Projects <ArrowRight className="inline ml-2" size={20} />
            </Button>
            <Button href="#contact" variant="outline">
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-6 justify-center"
          >
            <motion.a
              href="https://github.com/KrishnaMohanty08"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#00d4ff' }}
              className="text-gray-400 hover:text-neon-blue transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/krishna-mohanty-67a9082b0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#00d4ff' }}
              className="text-gray-400 hover:text-neon-blue transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="mailto:mohantykrishna57@gmail.com"
              whileHover={{ scale: 1.2, color: '#00d4ff' }}
              className="text-gray-400 hover:text-neon-blue transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={28} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-neon-blue rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-neon-blue rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
