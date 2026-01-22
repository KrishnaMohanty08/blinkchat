'use client'

import { motion } from 'framer-motion'
import SectionWrapper from './ui/SectionWrapper'
import Card from './ui/Card'
import { Code2, Database, Lightbulb } from 'lucide-react'

export default function About() {
  return (
    <SectionWrapper id="about" className="flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            About <span className="text-neon-blue">Me</span>
          </h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              I'm a <span className="text-neon-blue font-semibold">Computer Science undergraduate</span> at KIIT University, 
              passionate about building web applications that solve real-world problems.
            </p>
            <p>
              My expertise lies in <span className="text-neon-blue font-semibold">full-stack development</span> with 
              a strong focus on performance optimization, scalability, and clean architecture. I've worked on projects 
              that have improved load times by up to 40% and successfully submissions by implementing robust backend solutions.
            </p>
            <p>
              With a solid foundation in <span className="text-neon-blue font-semibold">Data Structures, Algorithms, and DBMS</span>, 
              I approach every problem with a systematic mindset, ensuring efficient and maintainable code.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-3xl font-bold text-neon-blue mb-1">200+</div>
              <div className="text-sm text-gray-400">LeetCode Problems</div>
            </div>
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-3xl font-bold text-neon-blue mb-1">2+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>
        </motion.div>

        {/* Right: Feature Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Card className="flex items-start gap-4">
            <div className="p-3 bg-neon-blue/10 rounded-lg">
              <Code2 className="text-neon-blue" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-400">
                Writing maintainable, scalable code following industry best practices and design patterns.
              </p>
            </div>
          </Card>

          <Card className="flex items-start gap-4">
            <div className="p-3 bg-neon-blue/10 rounded-lg">
              <Database className="text-neon-blue" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Performance Focused</h3>
              <p className="text-gray-400">
                Optimizing applications for speed and efficiency, reducing load times and improving user experience.
              </p>
            </div>
          </Card>

          <Card className="flex items-start gap-4">
            <div className="p-3 bg-neon-blue/10 rounded-lg">
              <Lightbulb className="text-neon-blue" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
              <p className="text-gray-400">
                Strong foundation in DSA and algorithms, with 200+ problems solved on LeetCode using Java.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
