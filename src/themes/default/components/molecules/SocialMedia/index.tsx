import { Social } from '@/payload-types'

import SVG from '../../atoms/SVG'

const SocialMedia = ({ data }: { data?: (string | Social)[] }) => {
  const socialLinks = data?.map((social) => {
    // Handle both string IDs and populated Social objects
    if (typeof social === 'string') {
      return {
        icon: 'github', // Default fallback
        href: '#',
        label: 'Social',
      }
    }

    return {
      icon: social.name?.toLowerCase() || 'github',
      href: social.url || '#',
      label: social.name || 'Social',
    }
  })

  return (
    <div className="flex space-x-4">
      {socialLinks?.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
          aria-label={social.label}
        >
          <SVG
            name={social.icon}
            className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
          />
        </a>
      ))}
    </div>
  )
}

export default SocialMedia
