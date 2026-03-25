'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container, SectionHeader } from './ui/Section'
import { MetricCard } from './ui/Card'

const achievements = [
  {
    value: '40+',
    label: 'Profiles Per Intake',
    description: 'Managed 40+ student/client profiles per intake, maintaining structured progression from documentation to submission stages',
  },
  {
    value: '2025',
    label: 'Current UK Admissions Role Since',
    description: 'Serving as Admission Officer in UK education consulting with hands-on responsibility across admissions coordination workflows',
  },
  {
    value: '4',
    label: 'Professional Certifications',
    description: 'Completed certifications from ABCC German Counsellor, British Council, Google, and TCS iON to strengthen admissions, digital, and data foundations',
  },
  {
    value: '150+',
    label: 'Research Respondents',
    description: 'Conducted market research with 150+ respondents in MBA venture project to validate planning and engagement direction',
  },
  {
    value: '30%',
    label: 'MVP Engagement Improvement',
    description: 'Improved MVP engagement by 30% during startup planning project through structured insights and positioning adjustments',
  },
  {
    value: '25%',
    label: 'Event Participation Growth',
    description: 'Increased student participation by 25% through planning and coordination in leadership and campus event initiatives',
  },
]

const keyImpacts = [
  {
    title: 'Admissions Workflow Coordination',
    description: 'Built intake-level profile tracking and follow-up structure to improve clarity across active student pipelines.',
    impact: '40+ profiles coordinated per intake',
  },
  {
    title: 'Compliance and Documentation Discipline',
    description: 'Supported eligibility checks and document verification before submissions to reduce avoidable rework and delays.',
    impact: 'Compliance-first review built into workflow',
  },
  {
    title: 'CRM and Record Management',
    description: 'Maintained detailed logs, invoices, TT copies, and CRM updates for clear status visibility and stakeholder communication.',
    impact: 'Improved traceability across application stages',
  },
  {
    title: 'Research and Leadership Execution',
    description: 'Delivered measurable outcomes through MBA project research and college-level team coordination initiatives.',
    impact: '30% engagement lift and 25% participation growth',
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
