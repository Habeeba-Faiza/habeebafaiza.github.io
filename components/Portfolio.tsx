'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container, SectionHeader } from './ui/Section'

const projects = [
  {
    title: 'Admissions Workflow Optimization',
    category: 'Process Improvement',
    description: 'Rebuilt the application review journey to improve speed, consistency, and documentation quality across intake cycles.',
    impact: [
      'Reduced processing time from 10 days to 6 days (40% improvement)',
      'Increased accuracy rate from 92% to 98%',
      'Introduced structured quality checkpoints across decision stages',
      'Improved student-facing service feedback by 25%'
    ],
    metrics: '2,000+ applications annually',
    technologies: ['CRM Optimization', 'Process Mapping', 'Quality Assurance'],
  },
  {
    title: 'CRM Database Restructuring',
    category: 'Data Management',
    description: 'Led a full CRM cleanup and governance initiative to improve data quality and reporting reliability.',
    impact: [
      'Achieved 99.8% data accuracy rate',
      'Reduced duplicate records by 95%',
      'Built recurring data validation controls',
      'Improved reporting clarity and usability by 60%'
    ],
    metrics: '10,000+ student records',
    technologies: ['Database Management', 'Data Validation', 'System Integration'],
  },
  {
    title: 'International Student Guidance Framework',
    category: 'Student Experience',
    description: 'Designed a structured guidance model to support applicants from profile planning through final submission readiness.',
    impact: [
      '95% student satisfaction rating',
      'Reduced application errors by 40%',
      'Created standardized communication and checklist templates',
      'Served applicants from 50+ countries'
    ],
    metrics: '50+ countries served',
    technologies: ['Communication Strategy', 'Cultural Competency', 'Support Systems'],
  },
  {
    title: 'Compliance & Documentation System',
    category: 'Regulatory Excellence',
    description: 'Implemented a documentation control framework to strengthen compliance readiness and reduce avoidable rework.',
    impact: [
      '100% compliance rate maintained',
      'Zero refusals attributed to documentation errors in managed cases',
      'Improved CAS-related document turnaround',
      'Established an internal audit-trail method'
    ],
    metrics: '100% compliance rate',
    technologies: ['UKVI Standards', 'Documentation Control', 'Audit Systems'],
  },
  {
    title: 'Multi-University Partnership Program',
    category: 'Stakeholder Management',
    description: 'Coordinated admissions communication and submission standards across a broad network of UK institutions.',
    impact: [
      'Supported relationships across 20+ university partners',
      'Managed submissions across 100+ academic programs',
      'Maintained consistent service and documentation standards',
      'Achieved 98% partner satisfaction score'
    ],
    metrics: '20+ university partners',
    technologies: ['Relationship Management', 'Coordination', 'Service Excellence'],
  },
  {
    title: 'Peak Season Operations Scaling',
    category: 'Operational Excellence',
    description: 'Scaled operations during peak intake windows without compromising decision quality or response consistency.',
    impact: [
      'Handled 3x normal application volume',
      'Maintained quality benchmarks throughout peak period',
      'Reduced average response time by 30%',
      'Implemented intake-based capacity planning model'
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
            subtitle="Selected case studies demonstrating measurable impact across admissions operations"
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
