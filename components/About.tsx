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
            subtitle="Building bridges between ambitious students and transformative educational opportunities"
          />
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  As an <strong>Admission Officer</strong> with expertise in international higher education, 
                  I specialize in guiding students through the complex landscape of university admissions 
                  while ensuring institutions maintain the highest standards of excellence.
                </p>
                
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  My journey in education has been driven by a singular mission: <strong>to make 
                  quality higher education accessible</strong> to talented students worldwide, while 
                  streamlining admissions processes for leading universities.
                </p>
                
                <p className="text-lg text-neutral-700 leading-relaxed">
                  With extensive experience in <strong>UK university admissions</strong>, CRM management, 
                  and international documentation, I've developed a systematic approach that balances 
                  efficiency with the personal touch each student deserves.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">My Mission</h3>
                <p className="text-neutral-700">
                  To transform the admissions experience by combining deep expertise, 
                  innovative processes, and genuine care for student success.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-50 p-5 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                  <div className="text-sm text-neutral-700">Years in Higher Education</div>
                </div>
                <div className="bg-neutral-50 p-5 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-sm text-neutral-700">Countries Served</div>
                </div>
                <div className="bg-neutral-50 p-5 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
                  <div className="text-sm text-neutral-700">Applications Reviewed</div>
                </div>
                <div className="bg-neutral-50 p-5 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                  <div className="text-sm text-neutral-700">Processing Accuracy</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 text-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Core Values</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">✓</span>
                    <span>Student-centered approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">✓</span>
                    <span>Precision and attention to detail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">✓</span>
                    <span>Continuous process improvement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">✓</span>
                    <span>Cultural sensitivity and inclusion</span>
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
