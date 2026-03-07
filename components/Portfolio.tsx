'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container, SectionHeader } from './ui/Section'

const projects = [
  {
    title: 'Admissions Workflow Optimization',
    category: 'Process Improvement',
    description: 'Redesigned end-to-end application processing workflow for a leading UK university partnership program.',
    impact: [
      'Reduced processing time from 10 days to 6 days (40% improvement)',
      'Increased accuracy rate from 92% to 98%',
      'Implemented automated quality checkpoints',
      'Improved student satisfaction by 25%'
    ],
    metrics: '2,000+ applications annually',
    technologies: ['CRM Optimization', 'Process Mapping', 'Quality Assurance'],
  },
  {
    title: 'CRM Database Restructuring',
    category: 'Data Management',
    description: 'Led comprehensive database cleanup and optimization project for 10,000+ student records.',
    impact: [
      'Achieved 99.8% data accuracy rate',
      'Reduced duplicate records by 95%',
      'Implemented data validation protocols',
      'Improved reporting capabilities by 60%'
    ],
    metrics: '10,000+ student records',
    technologies: ['Database Management', 'Data Validation', 'System Integration'],
  },
  {
    title: 'International Student Guidance Framework',
    category: 'Student Experience',
    description: 'Developed comprehensive support framework for international students navigating UK admissions.',
    impact: [
      '95% student satisfaction rating',
      'Reduced application errors by 40%',
      'Created standardized guidance materials',
      'Served students from 50+ countries'
    ],
    metrics: '50+ countries served',
    technologies: ['Communication Strategy', 'Cultural Competency', 'Support Systems'],
  },
  {
    title: 'Compliance & Documentation System',
    category: 'Regulatory Excellence',
    description: 'Established robust compliance framework for UK visa and immigration documentation processing.',
    impact: [
      '100% compliance rate maintained',
      'Zero visa refusals due to documentation errors',
      'Streamlined CAS processing workflow',
      'Implemented audit trail system'
    ],
    metrics: '100% compliance rate',
    technologies: ['UKVI Standards', 'Documentation Control', 'Audit Systems'],
  },
  {
    title: 'Multi-University Partnership Program',
    category: 'Stakeholder Management',
    description: 'Coordinated admissions operations across 20+ UK university partnerships.',
    impact: [
      'Managed relationships with 20+ institutions',
      'Processed applications across 100+ programs',
      'Maintained consistent service standards',
      'Achieved 98% partner satisfaction'
    ],
    metrics: '20+ university partners',
    technologies: ['Relationship Management', 'Coordination', 'Service Excellence'],
  },
  {
    title: 'Peak Season Operations Scaling',
    category: 'Operational Excellence',
    description: 'Successfully scaled operations to handle 3x volume increase during peak admissions period.',
    impact: [
      'Handled 3x normal application volume',
      'Maintained quality standards throughout',
      'Reduced average response time by 30%',
      'Implemented capacity planning framework'
    ],
    metrics: '3x volume capacity',
    technologies: ['Capacity Planning', 'Resource Management', 'Performance Optimization'],
  },
]

export const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader 
            title="Professional Portfolio" 
            subtitle="Case studies and projects demonstrating impact across admissions operations"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-600 text-white rounded-lg text-xs font-semibold mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-3">
                    Key Impact
                  </h4>
                  <ul className="space-y-2">
                    {project.impact.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-primary-600 mr-2 mt-1 flex-shrink-0">✓</span>
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-semibold">
                    {project.metrics}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white border border-neutral-300 text-neutral-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
