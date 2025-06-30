import LinkedInIcon from '@/assets/svg/linkedin.svg'
import GithubIcon from '@/assets/svg/github.svg'

interface SocialMediaProps {
  className?: string
}

export const SocialMedia = ({ className = '' }: SocialMediaProps) => {
  const socialLinks = [
    {
      icon: LinkedInIcon,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:text-cyan-600 dark:hover:text-cyan-400'
    },
    {
      icon: GithubIcon,
      href: 'https://github.com',
      label: 'GitHub',
      color: 'hover:text-cyan-700 dark:hover:text-cyan-300'
    }
  ]

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 ${social.color} hover:bg-cyan-200 dark:hover:bg-cyan-800/50 transition-all duration-200`}
          aria-label={social.label}
        >
          <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </a>
      ))}
    </div>
  )
} 