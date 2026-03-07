'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container, SectionHeader } from './ui/Section'

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader 
            title="About Me" 
            subtitle="A results-driven admissions professional focused on quality, compliance, and student success"
          />
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  As an <strong>Admission Officer</strong> with expertise in international higher education, 
                  I manage high-volume application workflows while maintaining strong standards in 
                  evaluation quality, documentation control, and turnaround time.
                </p>
                
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  My professional focus is to <strong>improve admissions outcomes at scale</strong> by 
                  combining structured assessment processes with student-centered communication and guidance.
                </p>
                
                <p className="text-lg text-neutral-700 leading-relaxed">
                  With extensive experience in <strong>UK university admissions</strong>, CRM management, 
                  and compliance-driven documentation, I&apos;ve built a practical operating model that balances 
                  speed, accuracy, and a consistently professional applicant experience.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">My Mission</h3>
                <p className="text-neutral-700">
                  To elevate international admissions standards through measurable process excellence 
                  and trusted student guidance.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-50 p-5 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">40+</div>
                  <div className="text-sm text-neutral-700">Profiles Managed Per Intake</div>
                </div>
                <div className="bg-neutral-50 p-5 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">2025</div>
                  <div className="text-sm text-neutral-700">Started UK Admissions Role</div>
                </div>
                <div className="bg-neutral-50 p-5 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
                  <div className="text-sm text-neutral-700">Professional Certifications</div>
                </div>
                <div className="bg-neutral-50 p-5 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
                  <div className="text-sm text-neutral-700">Academic Qualifications</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 text-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Core Values</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">✓</span>
                    <span>Clarity and accountability in every case</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">✓</span>
                    <span>Precision in documentation and decisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">✓</span>
                    <span>Continuous workflow optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">✓</span>
                    <span>Culturally aware student support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
