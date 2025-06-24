import { LinkedInIcon, GithubIcon } from '../../../../../assets/svg'

export const SocialMedia = () => {
  const socialLinks = [
    {
      icon: LinkedInIcon,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:text-blue-600 text-linkedin dark:hover:text-blue-400'
    },
    {
      icon: GithubIcon,
      href: 'https://github.com',
      label: 'GitHub',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    }
  ]

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${social.color} hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200`}
          aria-label={social.label}
        >
          <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </a>
      ))}
    </div>
  )
} 