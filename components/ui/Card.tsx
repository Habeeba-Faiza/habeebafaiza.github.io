import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div 
      className={`
        bg-white border border-neutral-200 rounded-xl p-8
        ${hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-neutral-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

interface MetricCardProps {
  value: string
  label: string
  description?: string
}

export const MetricCard: React.FC<MetricCardProps> = ({ value, label, description }) => {
  return (
    <Card hover>
      <div className="text-5xl md:text-6xl font-bold text-neutral-900 mb-3">
        {value}
      </div>
      <div className="text-lg md:text-xl font-semibold text-neutral-800 mb-2">
        {label}
      </div>
      {description && (
        <p className="text-neutral-600 text-sm leading-relaxed">
          {description}
        </p>
      )}
    </Card>
  )
}
