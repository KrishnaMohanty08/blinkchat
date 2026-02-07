'use client'

import { motion } from 'framer-motion'
import Button from './ui/Button'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-neon-blue/5" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 212, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-20 h-20 border border-neon-blue/20 rounded-lg"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-32 h-32 border border-neon-blue/10 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-40 left-1/4 w-16 h-16 border border-neon-blue/15"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-1/4 w-24 h-24 border border-neon-blue/10 rounded-lg"
        />
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
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-white"
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
            <Button href="/Krishna_Resume.pdf" variant="primary" target="_blank" rel="noopener noreferrer">
               Download CV<ArrowRight className="inline ml-2" size={20} />
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

    </section>
  )
}
