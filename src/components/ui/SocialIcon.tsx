import type { SocialPlatform } from '@/types'

interface SocialIconProps {
  platform: SocialPlatform
  className?: string
}

export function SocialIcon({
  platform,
  className = 'h-4 w-4',
}: SocialIconProps) {
  switch (platform) {
    case 'facebook':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
        >
          <path d="M13.5 21v-8.2h2.75l.41-3.2H13.5V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14A22.8 22.8 0 0 0 14.3 3c-2.46 0-4.14 1.5-4.14 4.26v2.34H7.4v3.2h2.76V21h3.34Z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect width="18" height="18" x="3" y="3" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'x':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
        >
          <path d="M18.244 3h3.308l-7.227 8.26L22.8 21h-6.656l-5.214-6.817L4.99 21H1.68l7.73-8.835L1.254 3H8.08l4.713 6.231L18.244 3Zm-1.161 16.173h1.833L7.084 4.73H5.117l11.966 14.443Z" />
        </svg>
      )
    case 'tiktok':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.13v13.1a2.67 2.67 0 1 1-2.67-2.67c.26 0 .51.04.75.1V9.32a5.8 5.8 0 1 0 5.05 5.75V8.69a7.9 7.9 0 0 0 4.62 1.49V7.06c-.3 0-.59-.13-.85-.37Z" />
        </svg>
      )
  }
}
