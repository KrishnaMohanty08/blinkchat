'use client'

import { motion } from 'framer-motion'
import SectionWrapper from './ui/SectionWrapper'
import { 
  Code2, 
  Database, 
  Layout, 
  Server,
  Coffee,
  FileCode,
  Globe,
  Palette,
  Table,
  CircleDot,
  Triangle,
  Wind,
  Circle,
  Zap,
  Flame,
  Lightbulb,
  BarChart3,
  Binary,
  Target,
  HardDrive
} from 'lucide-react'

const skills = {
  Languages: [
    { name: 'Java', Icon: Coffee },
    { name: 'JavaScript', Icon: FileCode },
    { name: 'HTML', Icon: Globe },
    { name: 'CSS', Icon: Palette },
    { name: 'SQL', Icon: Table },
  ],
  Frontend: [
    { name: 'React.js', Icon: CircleDot },
    { name: 'Next.js', Icon: Triangle },
    { name: 'Tailwind CSS', Icon: Wind },
  ],
  Backend: [
    { name: 'Node.js', Icon: Circle },
    { name: 'Express.js', Icon: Zap },
    { name: 'Firebase', Icon: Flame },
    { name: 'Supabase', Icon: Lightbulb },
  ],
  'Core CS': [
    { name: 'Data Structures', Icon: BarChart3 },
    { name: 'Algorithms', Icon: Binary },
    { name: 'OOPs', Icon: Target },
    { name: 'DBMS', Icon: HardDrive },
  ],
}

const categoryIcons = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  'Core CS': Database,
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="flex items-center">
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
            Tech <span className="text-neon-blue">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => {
            const Icon = categoryIcons[category]
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass rounded-xl p-6 hover:border-neon-blue/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-neon-blue/10 rounded-lg">
                    <Icon className="text-neon-blue" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold">{category}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {items.map((skill, index) => {
                    const SkillIcon = skill.Icon
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: categoryIndex * 0.1 + index * 0.05 
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -5,
                          boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)'
                        }}
                        className="bg-dark-card rounded-lg p-4 text-center cursor-pointer transition-all duration-300 border border-gray-800 hover:border-neon-blue/50"
                      >
                        <div className="flex justify-center mb-2">
                          <SkillIcon className="text-neon-blue" size={28} strokeWidth={1.5} />
                        </div>
                        <div className="text-sm text-gray-300">{skill.name}</div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
