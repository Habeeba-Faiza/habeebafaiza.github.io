'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from './ui/Section'
import { Button } from './ui/Button'

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-xl md:text-2xl text-neutral-300 mb-12 leading-relaxed">
            Interested in collaborating, discussing higher education trends, or exploring 
            opportunities in international admissions? I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href="https://www.linkedin.com/in/habeeba-faiza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-neutral-900 rounded-lg font-semibold hover:bg-neutral-100 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
            <a
              href="mailto:habeeba.faiza@education.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-neutral-900 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-neutral-700">
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-neutral-400">Global • Remote</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Availability</h3>
              <p className="text-neutral-400">Open to opportunities</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-neutral-400">Within 24-48 hours</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © 2026 Habeeba Faiza. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/habeeba-faiza"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:habeeba.faiza@education.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
