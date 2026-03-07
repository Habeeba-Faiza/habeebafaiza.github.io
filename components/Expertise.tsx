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
      'International application screening and triage',
      'Academic credential and profile evaluation',
      'Document verification and readiness checks',
      'Offer recommendation support and tracking',
      'Conditional offer requirements management',
      'Entry criteria interpretation across institutions',
    ],
  },
  {
    category: 'Compliance & Documentation',
    icon: '✓',
    skills: [
      'UK student-route documentation standards',
      'CAS documentation readiness and validation',
      'Admissions compliance control procedures',
      'Regulatory requirement interpretation',
      'Data protection and confidentiality practice',
      'Internal quality assurance checkpoints',
    ],
  },
  {
    category: 'CRM & Database Systems',
    icon: '💾',
    skills: [
      'Student information and CRM operations',
      'Database hygiene and process optimization',
      'Data validation and error prevention',
      'Admissions reporting and KPI visibility',
      'Workflow automation opportunities',
      'Cross-team data handoff alignment',
    ],
  },
  {
    category: 'Student Counseling',
    icon: '🎓',
    skills: [
      'Program and university fit guidance',
      'Application planning and submission strategy',
      'Document preparation and review support',
      'Pre-visa documentation orientation',
      'Cross-cultural applicant communication',
      'Decision and timeline expectation management',
    ],
  },
  {
    category: 'Operational Excellence',
    icon: '⚙️',
    skills: [
      'Process mapping and efficiency improvement',
      'Quality control framework implementation',
      'Workflow standardization and SOP discipline',
      'Performance metrics and trend tracking',
      'Cross-functional team coordination',
      'Stakeholder communication management',
    ],
  },
  {
    category: 'International Education',
    icon: '🌍',
    skills: [
      'UK higher education admissions ecosystem',
      'International qualification pathway alignment',
      'University partner communication',
      'Market and applicant trend awareness',
      'International student pathway planning',
      'Global education service standards',
    ],
  },
]

const technicalSkills = {
  'CRM Systems': ['Salesforce (workflow use)', 'Student Information Systems', 'Database Administration'],
  'Documentation Tools': ['Microsoft Office Suite', 'Document Management Platforms', 'Adobe Acrobat'],
  'Communication': ['Stakeholder Email Management', 'Video Conferencing', 'Multi-channel Follow-up'],
  'Data Analysis': ['Excel-based Analysis', 'Operational Reporting', 'Performance Dashboards'],
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
            subtitle="Core capabilities across admissions operations, documentation quality, and student guidance"
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
