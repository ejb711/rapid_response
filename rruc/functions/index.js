// functions/index.js
const functions = require('firebase-functions');
const fs = require('fs');
const path = require('path');

exports.handleArticleRoutes = functions.https.onRequest((req, res) => {
  const articlePath = req.path;
  
  if (articlePath.startsWith('/articles/')) {
    // Read the article's HTML file
    const articleHtml = path.join(__dirname, 'dist', articlePath, 'index.html');
    
    if (fs.existsSync(articleHtml)) {
      const content = fs.readFileSync(articleHtml, 'utf8');
      res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
      res.send(content);
    } else {
      // Fallback to main index.html
      const indexHtml = path.join(__dirname, 'dist', 'index.html');
      const content = fs.readFileSync(indexHtml, 'utf8');
      res.send(content);
    }
  } else {
    res.status(404).send('Not Found');
  }
});