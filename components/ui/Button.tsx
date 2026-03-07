import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-900',
    secondary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-600',
    outline: 'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white focus:ring-neutral-900',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    )
  }
  
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  )
}
