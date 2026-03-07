'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container, SectionHeader } from './ui/Section'
import { MetricCard } from './ui/Card'

const achievements = [
  {
    value: '10K+',
    label: 'Applications Processed',
    description: 'Successfully reviewed and processed over 10,000 international student applications with 98% accuracy rate',
  },
  {
    value: '40%',
    label: 'Efficiency Increase',
    description: 'Implemented streamlined workflows that reduced application processing time by 40% while maintaining quality',
  },
  {
    value: '20+',
    label: 'University Partners',
    description: 'Established and maintained relationships with leading UK universities across multiple academic disciplines',
  },
  {
    value: '95%',
    label: 'Student Satisfaction',
    description: 'Achieved 95% satisfaction rating through personalized guidance and responsive communication',
  },
  {
    value: '50+',
    label: 'Countries Served',
    description: 'Provided admissions support to students from over 50 countries across 6 continents',
  },
  {
    value: '99.8%',
    label: 'Compliance Rate',
    description: 'Maintained exceptional compliance with UK visa and immigration documentation requirements',
  },
]

const keyImpacts = [
  {
    title: 'Process Innovation',
    description: 'Redesigned application review workflows, implementing quality checkpoints that improved accuracy while reducing turnaround time.',
    impact: 'Reduced processing errors by 35%',
  },
  {
    title: 'Database Management Excellence',
    description: 'Optimized CRM systems and implemented data validation protocols for 10,000+ student records.',
    impact: 'Improved data accuracy to 99.8%',
  },
  {
    title: 'Cross-Cultural Communication',
    description: 'Developed culturally sensitive communication frameworks for diverse international student populations.',
    impact: '95% student satisfaction rating',
  },
  {
    title: 'Operational Scaling',
    description: 'Successfully scaled admissions operations during peak periods while maintaining service quality standards.',
    impact: 'Handled 3x volume increase',
  },
]

export const Achievements: React.FC = () => {
  return (
    <Section id="achievements" className="bg-neutral-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader 
            title="Key Achievements" 
            subtitle="Measurable impact across international higher education"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <MetricCard
                  value={achievement.value}
                  label={achievement.label}
                  description={achievement.description}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-neutral-900 mb-8">Impact Highlights</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {keyImpacts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold text-neutral-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-neutral-700 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-semibold">
                  {item.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
