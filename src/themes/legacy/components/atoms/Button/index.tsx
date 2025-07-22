import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  icon?: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
}

const Button = ({ 
  children, 
  icon, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false 
}: ButtonProps) => {
  const baseClasses = 'flex cursor-pointer hover:text-red-hover o-theme-window border rounded my-4 w-fit transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: '',
    secondary: 'bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600 text-white focus:ring-gray-500',
    outline: 'border-2 border-cyan-300 dark:border-cyan-600 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-900 focus:ring-cyan-500'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <span className={`${size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} mr-2 group-hover:scale-110 transition-transform duration-200`}>
          {icon}
        </span>
      )}
      {children}
    </button>
  )
} 

export default Button;