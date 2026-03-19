import { MetadataRoute } from 'next'
import { locales } from '@/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shahzeb.dev' // Replace with actual domain

  // Generate URLs for all supported locales
  const localizedUrls = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  }))

  return [
    {
      url: baseUrl, 
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...localizedUrls,
  ]
}
