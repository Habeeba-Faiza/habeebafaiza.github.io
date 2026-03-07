'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container, SectionHeader } from './ui/Section'

const articles = [
  {
    title: 'Navigating UK University Admissions: A Comprehensive Guide for International Students',
    excerpt: 'Understanding the complexities of UK higher education applications, from choosing the right institution to mastering documentation requirements.',
    category: 'Application Strategy',
    readTime: '8 min read',
  },
  {
    title: 'The Evolution of International Student Recruitment in Post-Brexit Britain',
    excerpt: 'Analyzing changing immigration policies and their impact on international student pathways to UK universities.',
    category: 'Industry Trends',
    readTime: '10 min read',
  },
  {
    title: 'Building Efficient Admissions Workflows: Lessons from Processing 10,000+ Applications',
    excerpt: 'How systematic process optimization and quality control measures improve both speed and accuracy in admissions operations.',
    category: 'Operational Excellence',
    readTime: '7 min read',
  },
  {
    title: 'Cross-Cultural Communication in Higher Education Admissions',
    excerpt: 'Best practices for supporting diverse international student populations through culturally sensitive guidance.',
    category: 'Student Experience',
    readTime: '6 min read',
  },
  {
    title: 'CRM Systems and Data Management Excellence in Education',
    excerpt: 'Leveraging technology to maintain data accuracy, compliance, and operational efficiency in student information management.',
    category: 'Technology',
    readTime: '9 min read',
  },
  {
    title: 'Quality Assurance in International Admissions: A Framework for Success',
    excerpt: 'Developing systematic approaches to maintain 98%+ accuracy rates while scaling operations.',
    category: 'Quality Management',
    readTime: '8 min read',
  },
]

const insights = [
  {
    stat: 'UK International Students',
    description: 'The UK hosts over 600,000 international students, making it the second most popular destination globally for higher education.',
  },
  {
    stat: 'Application Complexity',
    description: 'Average UK university application requires 15-20 document types, with processing times varying from 2-8 weeks.',
  },
  {
    stat: 'Digital Transformation',
    description: 'Higher education institutions are increasingly adopting AI and automation, reducing processing times by up to 40%.',
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
            subtitle="Insights on higher education, admissions, and international student pathways"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
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
