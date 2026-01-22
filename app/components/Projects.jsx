'use client'

import { motion } from 'framer-motion'
import SectionWrapper from './ui/SectionWrapper'
import Card from './ui/Card'
import Button from './ui/Button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'KIIT Saathi',
    description: 'Comprehensive student platform with study material and interview deadline tracker. Enhanced UI/UX and fixed critical forms, increasing successful submissions significantly.',
    features: [
      'Study material and interview deadline tracker modules',
      'Improved homepage UI and overall usability',
      'Fixed contact & feedback forms',
      'Integrated backend APIs with caching',
      '~40% improvement in load speed',
    ],
    tech: ['Next.js', 'React', 'Node.js', 'Database Integration'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Arogyam',
    description: 'Real-time hospital bed availability system using Firebase. Built with performance in mind, utilizing SSR/ISR and component caching for optimal user experience.',
    features: [
      'Real-time bed availability using Firebase Realtime DB',
      'Scalable Next.js frontend with SSR/ISR',
      'Component caching for better performance',
      'Secure authentication with Firebase Auth',
      '~30% performance improvement',
    ],
    tech: ['Next.js', 'React', 'Firebase', 'Firestore'],
    gradient: 'from-purple-500/20 to-pink-500/20',
    liveUrl: '#',
    githubUrl: '#',
  },
]

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="flex items-center">
      <div>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-neon-blue">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Scalable applications built with modern technologies and best practices
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col">
                {/* Gradient Header */}
                <div className={`w-full h-48 rounded-lg bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="relative z-10 text-4xl font-bold text-white"
                  >
                    {project.title}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-neon-blue mt-1">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-sm rounded-full border border-neon-blue/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-800">
                  <Button 
                    href={project.liveUrl} 
                    variant="outline" 
                    className="flex-1 !py-2 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    href={project.githubUrl} 
                    variant="ghost" 
                    className="flex-1 !py-2 text-sm"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
