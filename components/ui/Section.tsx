import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      {children}
    </section>
  )
}

export const Container: React.FC<SectionProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  className = '' 
}) => {
  return (
    <div className={`mb-16 md:mb-20 ${className}`}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
