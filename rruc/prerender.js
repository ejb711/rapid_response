// prerender.js - Handles static meta tag generation for articles
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const articles = {
  'HPAI_DuckHunter': {
    og: {
      site_name: 'Rapid Response Urgent Care',
      title: 'Bird Flu Safety Guidelines for Hunters',
      description: 'Essential safety guidelines for hunters regarding avian influenza (HPAI).',
      image: 'https://rrurgentcare.com/assets/carecompass/duck_hunter.jpg',
      'image:width': '1200',
      'image:height': '630',
      url: 'https://rrurgentcare.com/articles/HPAI_DuckHunter',
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Bird Flu Safety Guidelines for Hunters',
      description: 'Essential safety guidelines for hunters regarding avian influenza (HPAI).',
      image: 'https://rrurgentcare.com/assets/carecompass/duck_hunter.jpg'
    }
  },
  'virtual-healthcare-guide': {
    og: {
      site_name: 'Rapid Response Urgent Care',
      title: 'Virtual Urgent Care: A New Era in Convenient Healthcare',
      description: 'Explore how virtual urgent care is transforming healthcare delivery with convenient access, enhanced safety, and streamlined prescription management.',
      image: 'https://rrurgentcare.com/assets/carecompass/virtual-visit.jpg',
      'image:width': '1200',
      'image:height': '630',
      url: 'https://rrurgentcare.com/articles/virtual-healthcare-guide',
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Virtual Urgent Care: A New Era in Convenient Healthcare',
      description: 'Discover how virtual urgent care is revolutionizing healthcare delivery through innovative technology solutions.',
      image: 'https://rrurgentcare.com/assets/carecompass/virtual-visit.jpg'
    }
  },
  'h5n1': {
    og: {
      site_name: 'Rapid Response Urgent Care',
      title: 'LDH Detects First Presumptive Positive Human H5N1 Case in Louisiana',
      description: 'First presumptive positive human H5N1 case detected in Louisiana. Latest updates on bird flu outbreak, preventive measures, and public health response.',
      image: 'https://rrurgentcare.com/assets/carecompass/bird-flu.jpg',
      'image:width': '1200',
      'image:height': '630',
      url: 'https://rrurgentcare.com/articles/h5n1',
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'First H5N1 Case Detected in Louisiana - Public Health Alert',
      description: 'Louisiana Department of Health reports first presumptive positive human case of H5N1 bird flu. Learn about symptoms, risks, and preventive measures.',
      image: 'https://rrurgentcare.com/assets/carecompass/bird-flu.jpg'
    }
  },
  'han-bird-flu': {
    og: {
      site_name: 'Rapid Response Urgent Care',
      title: 'First Human Highly Pathogenic Avian Influenza A(H5N1) Case Detected in Louisiana',
      description: 'Louisiana reports first human case of highly pathogenic avian influenza A(H5N1), emphasizing the importance of public health surveillance and preventive measures.',
      image: 'https://rrurgentcare.com/assets/carecompass/sick_chicken.webp',
      'image:width': '1200',
      'image:height': '630',
      url: 'https://rrurgentcare.com/articles/han-bird-flu',
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'First Human H5N1 Case in Louisiana: Public Health Advisory',
      description: 'Louisiana confirms first human case of highly pathogenic avian influenza A(H5N1). Learn about symptoms, risks, and preventive measures.',
      image: 'https://rrurgentcare.com/assets/carecompass/sick_chicken.webp'
    }
  }
}

function updateMetaTags(html, metadata) {
  // Remove existing meta tags and comments
  let newHtml = html.replace(/<meta property="og:[^>]*>/g, '')
                    .replace(/<meta name="twitter:[^>]*>/g, '')
                    .replace(/<!--[\s\S]*?-->/g, '')

  // Generate new meta tags
  const metaTags = [
    ...Object.entries(metadata.og).map(([key, value]) => 
      `<meta property="og:${key}" content="${value}" />`
    ),
    ...Object.entries(metadata.twitter).map(([key, value]) => 
      `<meta name="twitter:${key}" content="${value}" />`
    )
  ].join('\n    ')

  // Insert new meta tags before closing head tag
  return newHtml.replace('</head>', `    ${metaTags}\n  </head>`)
}

export default {
  name: 'prerender',
  async closeBundle() {
    try {
      console.log('Starting prerender process...')
      const distPath = 'dist'
      
      if (!fs.existsSync(distPath)) {
        console.error('Dist directory not found at:', distPath)
        return
      }

      const indexPath = path.join(distPath, 'index.html')
      console.log('Looking for index.html at:', indexPath)
      
      if (!fs.existsSync(indexPath)) {
        console.error('index.html not found at:', indexPath)
        return
      }

      const html = fs.readFileSync(indexPath, 'utf-8')
      console.log('Successfully read index.html')
      
      // Process each article's metadata
      for (const [id, metadata] of Object.entries(articles)) {
        console.log('Processing article:', id)
        
        const articlePath = path.join(distPath, 'articles', id)
        console.log('Creating article directory at:', articlePath)
        
        fs.mkdirSync(articlePath, { recursive: true })
        
        const articleHtml = updateMetaTags(html, metadata)
        const outputPath = path.join(articlePath, 'index.html')
        fs.writeFileSync(outputPath, articleHtml)
        
        console.log('Successfully created article page:', outputPath)
      }
    } catch (error) {
      console.error('Error in prerender plugin:', error, error.stack)
    }
  }
}