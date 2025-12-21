<!-- coffee-tea-cancer.vue -->
<script setup>
import { ref, markRaw } from 'vue'
import { useHead } from '@vueuse/head'
import { useRouter } from 'vue-router'
import ArticleNavButton from '@/components/ArticleNavButton.vue'
import coffeeImage from '@/assets/carecompass/coffee_ca.webp'

const router = markRaw(useRouter())
const articleUrl = ref('https://rrurgentcare.com/articles/tea-and-coffee-may-lower-risk-for-some-cancers')
const currentDate = new Date().toISOString().split('T')[0]
const mainContent = ref(null)
const imageAltText = ref('Coffee cup with research data visualization showing cancer risk reduction statistics')

const schemaOrgData = {
  "@context": "https://schema.org",
  "@type": "MedicalScholarlyArticle",
  "headline": "Coffee and Tea May Reduce Head and Neck Cancer Risk: Major Study Findings",
  "datePublished": currentDate,
  "dateModified": currentDate,
  "description": "Comprehensive analysis reveals protective effects of coffee and tea consumption against head and neck cancers, with specific benefits varying by cancer type and beverage amount.",
  "image": {
    "@type": "ImageObject",
    "url": `${articleUrl.value}/assets/carecompass/coffee_ca.webp`,
    "caption": imageAltText.value,
    "width": "600",
    "height": "315"
  },
  "keywords": "coffee consumption, tea consumption, head and neck cancer, cancer prevention, epidemiology, INHANCE consortium, cancer research",
  "author": {
    "@type": "Organization",
    "name": "Rapid Response Urgent Care",
    "url": "https://rrurgentcare.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Rapid Response Urgent Care",
    "logo": {
      "@type": "ImageObject",
      "url": "https://rrurgentcare.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": articleUrl.value
  },
  "articleSection": "Cancer Research",
  "inLanguage": "en-US",
  "citation": {
    "@type": "CreativeWork",
    "name": "Coffee and tea consumption and the risk of head and neck cancer: An updated pooled analysis in the International Head and Neck Cancer Epidemiology Consortium",
    "author": "Nguyen T, et al.",
    "datePublished": "2024",
    "publisher": "Cancer Journal"
  }
}

useHead({
  title: 'Coffee and Tea May Reduce Head and Neck Cancer Risk: Major Study Findings | Rapid Response Urgent Care',
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr'
  },
  meta: [
    {
      name: 'description',
      content: 'Major international study shows drinking coffee and tea may help reduce risk of certain head and neck cancers. Learn about optimal consumption levels and specific benefits.'
    },
    {
      name: 'keywords',
      content: 'coffee consumption, tea consumption, head and neck cancer, cancer prevention, epidemiology, INHANCE consortium, medical research, cancer risk factors'
    },
    {
      name: 'author',
      content: 'Rapid Response Urgent Care'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'og:title',
      content: 'Coffee and Tea May Reduce Head and Neck Cancer Risk: Major Study Findings'
    },
    {
      property: 'og:description',
      content: 'Comprehensive analysis reveals protective effects of coffee and tea consumption against head and neck cancers. Key findings from major international study.'
    },
    {
      property: 'og:image',
      content: `${articleUrl.value}/assets/carecompass/coffee_ca.webp`
    },
    {
      property: 'og:image:alt',
      content: imageAltText.value
    },
    {
      property: 'og:image:type',
      content: 'image/webp'
    },
    {
      property: 'og:image:width',
      content: '600'
    },
    {
      property: 'og:image:height',
      content: '315'
    },
    {
      property: 'og:url',
      content: articleUrl.value
    },
    {
      property: 'og:site_name',
      content: 'Rapid Response Urgent Care'
    },
    {
      property: 'og:locale',
      content: 'en_US'
    },
    {
      property: 'article:published_time',
      content: currentDate
    },
    {
      property: 'article:modified_time',
      content: currentDate
    },
    {
      property: 'article:section',
      content: 'Cancer Research'
    },
    {
      property: 'article:tag',
      content: 'Cancer Prevention'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Coffee and Tea May Reduce Head and Neck Cancer Risk: New Research'
    },
    {
      name: 'twitter:description',
      content: 'Major study reveals protective effects of coffee and tea against head and neck cancers. Key findings and implications.'
    },
    {
      name: 'twitter:image',
      content: `${articleUrl.value}/assets/carecompass/coffee_ca.webp`
    },
    {
      name: 'twitter:image:alt',
      content: imageAltText.value
    },
    {
      name: 'twitter:site',
      content: '@RRUrgentCare'
    },
    {
      name: 'theme-color',
      content: '#ffffff'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: articleUrl.value
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(schemaOrgData)
    }
  ]
})
</script>

<template>
  <div class="article-wrapper">
    <a 
      href="#main-content" 
      class="skip-link"
      @click="$refs.mainContent.focus()"
    >
      Skip to main content
    </a>

    <v-app>
      <v-main>
        <v-container 
          class="article-container py-4"
          ref="mainContent"
          id="main-content"
          tabindex="-1"
        >
          <v-row justify="center">
            <v-col cols="12" md="10" lg="8">
              <!-- Back to CareCompass -->
              <div class="d-flex flex-column flex-sm-row align-center justify-space-between mb-4">
                <v-btn
                  color="primary"
                  variant="outlined"
                  to="/carecompass"
                  class="text-none mb-4 mb-sm-0 w-100 w-sm-auto"
                >
                  <v-icon start>mdi-arrow-left</v-icon>
                  BACK TO CARECOMPASS
                </v-btn>
                
                <v-chip
                  color="error"
                  variant="outlined"
                  size="large"
                  class="w-100 w-sm-auto text-center"
                >
                  Cancer Research
                </v-chip>
              </div>

              <article itemscope itemtype="https://schema.org/MedicalScholarlyArticle">
                <!-- Article Header -->
                <!-- CHANGED: Removed mb-4 from header and reduced mb-4 to mb-2 on h1 -->
                <header class="text-center">
                  <h1 
                    class="text-h2 font-weight-bold mb-2"
                    itemprop="headline"
                  >
                    Coffee and Tea May Reduce Head and Neck Cancer Risk: Major Study Findings
                  </h1>
                  <time 
                    class="text-subtitle-1 text-medium-emphasis"
                    itemprop="datePublished"
                    :datetime="currentDate"
                  >
                    December 24, 2024
                  </time>
                </header>

                <!-- Featured Image -->
                <figure class="mb-16">
                  <v-img
                    :src="coffeeImage"
                    :alt="imageAltText"
                    class="rounded-lg mx-auto"
                    width="50%"
                    max-height="250"
                    contain
                    itemprop="image"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="primary"
                          aria-label="Loading image"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </figure>

                <!-- Research Highlights -->
                <div 
                  class="research-highlights mb-16"
                  role="complementary"
                  aria-label="Key Research Findings"
                >
                  <v-alert
                    class="research-alert"
                    icon="mdi-flask-outline"
                    prominent
                    border="start"
                    elevation="2"
                  >
                    <h2 class="text-h5 mb-3 white--text">Research Highlights</h2>
                    <p class="text-body-1 white--text">
                      Study of over 25,000 participants shows drinking more than 4 cups of coffee daily associated with 17% lower risk of head and neck cancer, with protective effects varying by cancer type and beverage amount. 
                      <a 
                        href="https://acsjournals.onlinelibrary.wiley.com/doi/epdf/10.1002/cncr.35620" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="research-link font-weight-bold"
                      >
                        View the complete research
                      </a>
                    </p>
                  </v-alert>
                </div>

                <!-- Narrative Paragraphs -->
                <section class="narrative mb-16">
                  <p class="text-body-1 mb-4">
                    Head and neck cancer represents a significant global health challenge as the seventh most common cancer worldwide, with approximately 745,000 new cases annually. This groundbreaking research provides new hope in the form of everyday beverages that may help reduce cancer risk through their natural protective compounds.
                  </p>
                  
                  <p class="text-body-1 mb-4">
                    The comprehensive analysis, conducted by the International Head and Neck Cancer Epidemiology consortium, reveals that both coffee and tea contain powerful bioactive compounds with potential antioxidant, anticancer, and anti-inflammatory properties. Coffee's protective effects were particularly noteworthy, with consumption of more than 4 cups daily associated with significant risk reductions across multiple cancer types.
                  </p>
                  
                  <p class="text-body-1 mb-4">
                    While tea showed more modest benefits overall, regular tea drinkers demonstrated a notable 29% lower risk of hypopharyngeal cancer. These findings suggest that incorporating these beverages into a healthy lifestyle might offer additional protection against certain types of cancer, though researchers emphasize the need for further studies to fully understand the mechanisms involved.
                  </p>
                </section>

                <!-- Main Findings -->
                <section 
                  class="mb-16"
                  aria-labelledby="main-findings"
                >
                  <h2 
                    id="main-findings"
                    class="text-h3 font-weight-bold mb-6"
                  >
                    Key Research Findings
                  </h2>
                  <v-card class="bg-blue-lighten-5" elevation="2">
                    <v-card-text>
                      <div class="findings-content">
                        <h3 class="text-h4 mb-4">Coffee Consumption Benefits</h3>
                        <p class="text-body-1 mb-4">
                          The study found that drinking more than 4 cups of caffeinated coffee daily was associated with:
                        </p>
                        <ul class="text-body-1 mb-6">
                          <li>17% lower risk of overall head and neck cancer</li>
                          <li>30% lower risk of oral cavity cancer</li>
                          <li>22% lower risk of oropharyngeal cancer</li>
                          <li>41% lower risk of hypopharyngeal cancer (when drinking 3-4 cups daily)</li>
                        </ul>

                        <h3 class="text-h4 mb-4">Tea Consumption Benefits</h3>
                        <p class="text-body-1 mb-4">
                          Regular tea drinkers showed reduced risks including:
                        </p>
                        <ul class="text-body-1">
                          <li>29% lower risk of hypopharyngeal cancer</li>
                          <li>9% lower risk of overall head and neck cancer (with moderate consumption)</li>
                        </ul>
                      </div>
                    </v-card-text>
                  </v-card>
                </section>

                <!-- Research Methods -->
                <section 
                  class="mb-16"
                  aria-labelledby="research-methods"
                >
                  <h2 
                    id="research-methods"
                    class="text-h3 font-weight-bold mb-6"
                  >
                    Research Methodology
                  </h2>
                  <v-card>
                    <v-card-text>
                      <p class="text-body-1 mb-4">
                        This comprehensive analysis represents one of the largest investigations of its kind, including:
                      </p>
                      <ul class="text-body-1">
                        <li>Analysis of 9,548 cancer cases and 15,783 controls</li>
                        <li>Data from 14 individual case-control studies</li>
                        <li>Multiple international research centers</li>
                        <li>Detailed assessment of various cancer subtypes</li>
                        <li>Adjustment for sociodemographic and lifestyle factors</li>
                      </ul>
                    </v-card-text>
                  </v-card>
                </section>

                <!-- Future Research -->
                <section 
                  class="mb-16"
                  aria-labelledby="future-research"
                >
                  <h2 
                    id="future-research"
                    class="text-h3 font-weight-bold mb-6"
                  >
                    Future Research Directions
                  </h2>
                  <v-card>
                    <v-card-text>
                      <p class="text-body-1 mb-4">
                        While the findings are promising, researchers emphasize the need for:
                      </p>
                      <ul class="text-body-1">
                        <li>Studies in different geographical regions, particularly in low- and middle-income countries</li>
                        <li>Investigation of specific types of coffee and tea preparations</li>
                        <li>Analysis of preparation methods and their impact on protective effects</li>
                        <li>Long-term follow-up studies to confirm sustained benefits</li>
                        <li>Research into potential biological mechanisms</li>
                      </ul>
                    </v-card-text>
                  </v-card>
                </section>

                <!-- Additional Resources -->
                <section 
                  class="mb-16"
                  aria-labelledby="resources"
                >
                  <h2 
                    id="resources"
                    class="text-h3 font-weight-bold mb-6"
                  >
                    Additional Resources
                  </h2>
                  <v-card class="mb-4">
                    <v-card-text>
                      <div class="d-flex align-center">
                        <v-icon 
                          icon="mdi-file-document-outline" 
                          class="mr-4"
                          color="primary"
                        ></v-icon>
                        <div>
                          <h3 class="text-h6 mb-1">Original Research Paper</h3>
                          <p class="mb-2">Access the complete study in Cancer Journal</p>
                          <v-btn
                            href="https://acsjournals.onlinelibrary.wiley.com/doi/epdf/10.1002/cncr.35620"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                            variant="outlined"
                          >
                            <v-icon start>mdi-open-in-new</v-icon>
                            View Study
                          </v-btn>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                  <v-card>
                    <v-card-text>
                      <div class="d-flex align-center">
                        <v-icon 
                          icon="mdi-web" 
                          class="mr-4"
                          color="primary"
                        ></v-icon>
                        <div>
                          <h3 class="text-h6 mb-1">INHANCE Consortium</h3>
                          <p class="mb-2">Explore more research from the International Head and Neck Cancer Epidemiology Consortium</p>
                          <v-btn
                            href="https://www.inhance.utah.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                            variant="outlined"
                          >
                            <v-icon start>mdi-open-in-new</v-icon>
                            Visit Website
                          </v-btn>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                </section>
              </article>

              <!-- Bottom Navigation -->
              <ArticleNavButton class="mt-8" />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<style scoped>
.article-container {
  font-family: 'Georgia', serif;
  line-height: 1.8;
}

.text-body-1 {
  text-align: justify;
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.87);
}

.v-card-title {
  font-family: 'Georgia', serif;
}

ul {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

li {
  margin-bottom: 0.75rem;
}

a {
  color: #1976D2;
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: #1565C0;
  text-decoration: underline;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #1976D2;
  color: white;
  padding: 8px;
  z-index: 100;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 0;
}

.research-highlights .research-alert {
  background-color: #2E7D32 !important;
}

.research-link {
  color: #FFFFFF !important;
  text-decoration: underline !important;
  opacity: 1 !important;
}

.research-link:hover {
  color: #E8F5E9 !important;
}

.narrative {
  max-width: 800px;
  margin: 0 auto;
}

a:focus-visible {
  outline: 3px solid #1976D2;
  outline-offset: 2px;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

figure {
  margin: 0;
  padding: 0;
}

.text-caption {
  color: rgba(0, 0, 0, 0.6);
}

@media (max-width: 600px) {
  .text-h2 {
    font-size: 2rem !important;
  }
  
  .text-h3 {
    font-size: 1.75rem !important;
  }
  
  .text-h4 {
    font-size: 1.5rem !important;
  }
}

@media print {
  .skip-link,
  .v-btn {
    display: none;
  }

  a[href]:after {
    content: " (" attr(href) ")";
  }

  .v-img {
    page-break-inside: avoid;
  }
}
</style>
