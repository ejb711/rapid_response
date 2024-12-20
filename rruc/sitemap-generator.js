// sitemap-generator.js
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
];

const generateSitemap = async () => {
  try {
    // Update the path to point to src/data/articles.json
    const articlesData = JSON.parse(
      await fs.readFile(path.join(__dirname, 'src', 'data', 'articles.json'), 'utf-8')
    );

    // Convert articles to sitemap format
    const articleUrls = articlesData.articles.map(article => ({
      url: article.link,
      changefreq: 'weekly',
      priority: article.featured ? 0.9 : 0.8,
      lastmod: new Date(article.date).toISOString().split('T')[0]
    }));

    // Combine static and article URLs
    const allUrls = [...staticUrls, ...articleUrls];

    // Generate sitemap XML with manual formatting
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(({ url, changefreq, priority, lastmod }) => `  <url>
    <loc>https://rrurgentcare.com${url}</loc>
    ${changefreq ? `    <changefreq>${changefreq}</changefreq>\n` : ''}${priority ? `    <priority>${priority}</priority>\n` : ''}${lastmod ? `    <lastmod>${lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

    // Ensure the public directory exists
    const publicDir = path.join(__dirname, 'public');
    try {
      await fs.access(publicDir);
    } catch {
      await fs.mkdir(publicDir, { recursive: true });
    }

    // Write the sitemap
    await fs.writeFile(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('✓ Sitemap generated successfully');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    throw error;
  }
};

// Default export for importing
export default generateSitemap;

// For running directly with node
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateSitemap().catch(console.error);
}