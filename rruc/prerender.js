//prerender.js
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read articles.json from src/data
const articlesJsonPath = path.join(__dirname, 'src', 'data', 'articles.json')
const articlesData = JSON.parse(fs.readFileSync(articlesJsonPath, 'utf-8'))

// Convert articles data to meta tag format
const articles = articlesData.articles.reduce((acc, article) => {
  const slug = article.link.split('/').pop()
  
  acc[slug] = {
    og: {
      site_name: 'Rapid Response Urgent Care',
      title: article.title,
      description: article.excerpt,
      image: `https://rrurgentcare.com/assets/carecompass/${article.imagePath}`,
      'image:width': '1200',
      'image:height': '800',
      url: `https://rrurgentcare.com${article.link}`,
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      image: `https://rrurgentcare.com/assets/carecompass/${article.imagePath}`
    }
  }
  return acc
}, {})

function updateMetaTags(html, metadata) {
  let newHtml = html.replace(/<meta property="og:[^>]*>/g, '')
                    .replace(/<meta name="twitter:[^>]*>/g, '')
                    .replace(/<!--[\s\S]*?-->/g, '')

  const metaTags = [
    ...Object.entries(metadata.og).map(([key, value]) => 
      `<meta property="og:${key}" content="${value}" />`
    ),
    ...Object.entries(metadata.twitter).map(([key, value]) => 
      `<meta name="twitter:${key}" content="${value}" />`
    )
  ].join('\n    ')

  return newHtml.replace('</head>', `    ${metaTags}\n  </head>`)
}

export default {
  name: 'prerender',
  async closeBundle() {
    try {
      const distPath = 'dist'
      
      const indexPath = path.join(distPath, 'index.html')
      const html = fs.readFileSync(indexPath, 'utf-8')
      
      for (const [slug, metadata] of Object.entries(articles)) {
        const articlePath = path.join(distPath, 'articles', slug)
        fs.mkdirSync(articlePath, { recursive: true })
        
        const articleHtml = updateMetaTags(html, metadata)
        const outputPath = path.join(articlePath, 'index.html')
        fs.writeFileSync(outputPath, articleHtml)
        
        console.log(`Created article page: ${outputPath}`)
      }
    } catch (error) {
      console.error('Error in prerender plugin:', error, error.stack)
    }
  }
}