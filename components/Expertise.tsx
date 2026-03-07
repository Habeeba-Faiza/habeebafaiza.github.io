'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container, SectionHeader } from './ui/Section'
import { Card } from './ui/Card'

const expertiseAreas = [
  {
    category: 'Admissions Management',
    icon: '📋',
    skills: [
      'International application assessment',
      'Academic credential evaluation',
      'Document verification & authentication',
      'Offer decision processing',
      'Conditional requirements management',
      'Entry requirements interpretation',
    ],
  },
  {
    category: 'Compliance & Documentation',
    icon: '✓',
    skills: [
      'UK visa documentation (Tier 4/Student Route)',
      'CAS (Confirmation of Acceptance) processing',
      'Immigration compliance standards',
      'UKVI regulatory requirements',
      'Data protection (GDPR)',
      'Quality assurance protocols',
    ],
  },
  {
    category: 'CRM & Database Systems',
    icon: '💾',
    skills: [
      'Student information systems',
      'Database management & optimization',
      'Data accuracy & validation',
      'Reporting & analytics',
      'Workflow automation',
      'System integration',
    ],
  },
  {
    category: 'Student Counseling',
    icon: '🎓',
    skills: [
      'University program guidance',
      'Application strategy consulting',
      'Document preparation support',
      'Visa process navigation',
      'Cross-cultural communication',
      'Expectation management',
    ],
  },
  {
    category: 'Operational Excellence',
    icon: '⚙️',
    skills: [
      'Process optimization',
      'Quality control implementation',
      'Workflow standardization',
      'Performance metrics tracking',
      'Team coordination',
      'Stakeholder management',
    ],
  },
  {
    category: 'International Education',
    icon: '🌍',
    skills: [
      'UK higher education system',
      'International qualification frameworks',
      'Partner university relations',
      'Market trends & insights',
      'Student recruitment pathways',
      'Global education standards',
    ],
  },
]

const technicalSkills = {
  'CRM Systems': ['Salesforce', 'Student Information Systems', 'Database Management'],
  'Documentation Tools': ['MS Office Suite', 'Document Management Systems', 'Adobe Acrobat'],
  'Communication': ['Email Management', 'Video Conferencing', 'Multi-channel Support'],
  'Data Analysis': ['Excel Analytics', 'Reporting Tools', 'Performance Dashboards'],
}

export const Expertise: React.FC = () => {
  return (
    <Section id="expertise" className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader 
            title="Expertise & Skills" 
            subtitle="Comprehensive capabilities across international admissions and higher education"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card hover>
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    {area.category}
                  </h3>
                  <ul className="space-y-2">
                    {area.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-primary-600 mr-2 mt-1 flex-shrink-0">•</span>
                        <span className="text-neutral-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-neutral-900 mb-8">Technical Proficiencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(technicalSkills).map(([category, skills], index) => (
                <div
                  key={index}
                  className="bg-neutral-50 border border-neutral-200 rounded-lg p-6"
                >
                  <h4 className="font-semibold text-neutral-900 mb-3">{category}</h4>
                  <ul className="space-y-2">
                    {skills.map((skill, idx) => (
                      <li key={idx} className="text-sm text-neutral-700">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
