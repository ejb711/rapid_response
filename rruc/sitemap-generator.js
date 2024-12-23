// sitemap-generator.js

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import xml2js from 'xml2js' // Ensure xml2js is installed via npm

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const staticUrls = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/carecompass', changefreq: 'weekly', priority: 0.8 },
  { url: '/virtual-visit/learn-more', changefreq: 'monthly', priority: 0.8 },
  { url: '/privacy', changefreq: 'yearly', priority: 0.5 },
  { url: '/accessibility', changefreq: 'yearly', priority: 0.5 },
  { url: '/terms', changefreq: 'yearly', priority: 0.5 }
]

const generateSitemap = async () => {
  try {
    // Path to src/data/articles.json
    const articlesDataPath = path.join(__dirname, 'src', 'data', 'articles.json')
    const articlesDataContent = await fs.readFile(articlesDataPath, 'utf-8')
    const articlesData = JSON.parse(articlesDataContent)

    // Convert articles to sitemap format
    const articleUrls = articlesData.articles.map(article => ({
      url: article.link.startsWith('/') ? article.link : `/${article.link}`,
      changefreq: 'weekly',
      priority: article.featured ? 0.9 : 0.8,
      lastmod: new Date(article.date).toISOString().split('T')[0]
    }))

    // Combine static and article URLs
    const allUrls = [...staticUrls, ...articleUrls]

    // Generate sitemap XML using xml2js
    const urlset = {
      urlset: {
        $: {
          xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'
        },
        url: allUrls.map(({ url, changefreq, priority, lastmod }) => ({
          loc: `https://rrurgentcare.com${url}`,
          changefreq: changefreq || 'weekly',
          priority: priority || 0.8,
          ...(lastmod && { lastmod }) // Only include if lastmod exists
        }))
      }
    }

    const builder = new xml2js.Builder()
    const sitemapXml = builder.buildObject(urlset)

    // Path to dist directory
    const distDir = path.join(__dirname, 'dist')

    // Ensure the dist directory exists
    try {
      await fs.access(distDir)
    } catch {
      await fs.mkdir(distDir, { recursive: true })
    }

    // Write the sitemap.xml file to dist/
    const sitemapPath = path.join(distDir, 'sitemap.xml')
    await fs.writeFile(sitemapPath, sitemapXml)
    console.log('✓ Sitemap generated successfully at', sitemapPath)
  } catch (error) {
    console.error('Error generating sitemap:', error)
    throw error
  }
}

// Export the function for importing
export default generateSitemap

// Allow running directly with node
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateSitemap().catch(console.error)
}
