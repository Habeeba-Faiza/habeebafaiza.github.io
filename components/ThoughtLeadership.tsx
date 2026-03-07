'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container, SectionHeader } from './ui/Section'

const articles = [
  {
    title: 'How to Build a High-Quality UK University Application Strategy',
    excerpt: 'A practical framework for shortlisting institutions, planning timelines, and strengthening application quality for international candidates.',
    category: 'Application Strategy',
    readTime: '8 min read',
  },
  {
    title: 'International Student Recruitment in the UK: What Is Changing Now',
    excerpt: 'Key policy and market shifts shaping student pathways, institution expectations, and admissions priorities.',
    category: 'Industry Trends',
    readTime: '10 min read',
  },
  {
    title: 'Designing Admissions Workflows That Scale Without Losing Quality',
    excerpt: 'Operational lessons on reducing processing delays while improving documentation standards and decision consistency.',
    category: 'Operational Excellence',
    readTime: '7 min read',
  },
  {
    title: 'Cross-Cultural Communication That Improves Student Outcomes',
    excerpt: 'Communication practices that build trust, reduce friction, and support clearer decision-making for international applicants.',
    category: 'Student Experience',
    readTime: '6 min read',
  },
  {
    title: 'CRM and Data Governance in Modern Admissions Operations',
    excerpt: 'How admissions teams can use CRM discipline to improve data quality, compliance readiness, and reporting clarity.',
    category: 'Technology',
    readTime: '9 min read',
  },
  {
    title: 'Quality Assurance Frameworks for International Admissions Teams',
    excerpt: 'A checklist-based model to protect quality, reduce rework, and maintain service standards during peak intake cycles.',
    category: 'Quality Management',
    readTime: '8 min read',
  },
]

const insights = [
  {
    stat: 'UK International Students',
    description: 'The UK remains one of the world&apos;s top destinations for international students, creating sustained demand for strong admissions operations.',
  },
  {
    stat: 'Admissions Complexity',
    description: 'Documentation-heavy pathways require precise review systems, timeline discipline, and clear applicant communication.',
  },
  {
    stat: 'Digital Transformation',
    description: 'Institutions are investing in process automation, making data quality and workflow design critical capabilities for admissions teams.',
  },
]

export const ThoughtLeadership: React.FC = () => {
  return (
    <Section id="thought-leadership" className="bg-neutral-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader 
            title="Thought Leadership" 
            subtitle="Practical insights on admissions quality, student pathways, and higher education operations"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                  <span className="text-xs text-neutral-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </motion.article>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-neutral-900 mb-8">Industry Insights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-8"
                >
                  <h4 className="text-lg font-bold mb-3">{insight.stat}</h4>
                  <p className="text-primary-50 text-sm leading-relaxed">
                    {insight.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
