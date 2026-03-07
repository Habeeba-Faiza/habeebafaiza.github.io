'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { Container } from './ui/Section'

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white pt-20">
      <Container>
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-8">
                International Education & Admissions Specialist
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-tight">
              International Admissions
              <br />
              <span className="text-primary-600">with Precision, Speed, and Impact</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              I help institutions and students navigate complex university admissions workflows 
              through structured evaluation, documentation excellence, and student-first guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="#contact">
                Let&apos;s Connect
              </Button>
              <Button variant="outline" size="lg" href="#portfolio">
                See Case Studies
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">40+</div>
              <div className="text-sm md:text-base text-neutral-600">Profiles Per Intake</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">2025</div>
              <div className="text-sm md:text-base text-neutral-600">UK Admissions Role Since</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">3</div>
              <div className="text-sm md:text-base text-neutral-600">Industry Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">2</div>
              <div className="text-sm md:text-base text-neutral-600">Academic Degrees</div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
