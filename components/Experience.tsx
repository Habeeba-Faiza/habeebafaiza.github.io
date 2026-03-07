'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container, SectionHeader } from './ui/Section'

const experiences = [
  {
    title: 'Admission Officer',
    organization: 'International Education Consultancy',
    location: 'Global Operations',
    period: '2020 - Present',
    description: 'Leading end-to-end international admissions operations for UK university pathways, with strong focus on quality, compliance, and candidate experience.',
    achievements: [
      'Processed 2,000+ international applications annually with 98% documentation accuracy',
      'Reduced average processing turnaround time by 40% through workflow redesign and quality checkpoints',
      'Maintained CRM data integrity across 10,000+ records with 99.8% validation accuracy',
      'Delivered structured applicant guidance that supported a 95% student satisfaction score',
      'Sustained full compliance with UK university and immigration documentation standards',
      'Coordinated admissions communication across 20+ UK university partnerships',
    ],
    skills: ['Application Assessment', 'CRM Management', 'Compliance', 'Student Counseling'],
  },
  {
    title: 'Student Admissions Coordinator',
    organization: 'Higher Education Admissions Services',
    location: 'Regional Office',
    period: '2018 - 2020',
    description: 'Managed admissions documentation and process coordination for international student cohorts applying to UK institutions.',
    achievements: [
      'Processed 1,500+ applications with consistent quality standards and timely completion',
      'Introduced quality-control checks that reduced documentation errors by 35%',
      'Built standardized assessment templates to improve review consistency across cases',
      'Guided applicants on visa documentation readiness and timeline planning',
      'Supported relationship management with admissions teams across 15+ institutions',
      'Mentored 5 junior team members on admissions workflows and quality assurance',
    ],
    skills: ['Documentation', 'Quality Control', 'Team Training', 'Process Development'],
  },
]

const responsibilities = [
  'Application Review & Assessment',
  'Documentation Verification',
  'CRM Database Management',
  'Student Communication & Guidance',
  'Compliance & Regulatory Adherence',
  'University Liaison',
  'Process Improvement',
  'Team Collaboration',
]

export const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader 
            title="Professional Experience" 
            subtitle="A track record of process excellence, quality assurance, and applicant-centered outcomes"
          />
          
          <div className="space-y-12 mb-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-primary-600"
              >
                <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-1"></div>
                
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                        {exp.title}
                      </h3>
                      <div className="text-lg text-neutral-700 font-medium mb-1">
                        {exp.organization}
                      </div>
                      <div className="text-neutral-600">
                        {exp.location}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-semibold">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-3 mt-1 flex-shrink-0">▸</span>
                          <span className="text-neutral-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white border border-neutral-300 text-neutral-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-10"
          >
            <h3 className="text-2xl font-bold mb-6">Core Delivery Areas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {responsibilities.map((resp, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-primary-400 mr-2">✓</span>
                  <span className="text-sm">{resp}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
