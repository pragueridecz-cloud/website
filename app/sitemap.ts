import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.naletistelevne.cz'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/letistni-preprava`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/mezimestska-doprava`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/vlakove-autobusove-nadrazi`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/hodinovy-pronajem`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/preprava-pro-firmy`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ]
}
