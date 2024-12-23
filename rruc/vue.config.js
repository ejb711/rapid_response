const articlesJson = require('./src/data/articles.json');

module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: articlesJson.articles.map(article => `/articles/${article.link.split('/articles/')[1]}`),
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}