'use client'

import { motion } from 'framer-motion'
import SectionWrapper from './ui/SectionWrapper'
import { Trophy, Code, Award, TrendingUp } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: 'Enactus National Cup 2025',
    description: 'Winner',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
  },
  {
    icon: Code,
    title: 'LeetCode',
    description: '200+ Problems Solved (Java)',
    color: 'text-neon-blue',
    bgColor: 'bg-neon-blue/10',
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'Up to 40% load time improvement',
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
  },
  {
    icon: Award,
    title: 'KIIT University',
    description: 'B.Tech CSE (2023-2027)',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
  },
]

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="flex items-center">
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
            Achievements & <span className="text-neon-blue">Milestones</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition and accomplishments throughout my journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)'
                }}
                className="glass rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:border-neon-blue/50"
              >
                <div className={`inline-flex p-4 ${achievement.bgColor} rounded-full mb-4`}>
                  <Icon className={achievement.color} size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center glass rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Currently pursuing <span className="text-neon-blue">B.Tech in Computer Science</span>
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            at KIIT University, Bhubaneswar (2023-2027). Focused on building a strong foundation in 
            computer science fundamentals while gaining hands-on experience through real-world projects.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
