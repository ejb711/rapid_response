# hpai-duck-hunter.vue
<script setup>
import { ref, markRaw } from 'vue'
import { useHead } from '@vueuse/head'
import { useRouter } from 'vue-router'
import birdFluImage from '@/assets/carecompass/duck_hunter.jpg'
import ArticleNavButton from '@/components/ArticleNavButton.vue'

const router = markRaw(useRouter())
const imageAltText = ref("Hunters safely process game birds with protective gear")
const articleUrl = ref('https://rrurgentcare.com/articles/HPAI_DuckHunter')
const currentDate = new Date().toISOString().split('T')[0]

// Schema.org structured data
const schemaOrgData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Bird Flu Safety Guidelines for Hunters",
  "datePublished": currentDate,
  "dateModified": currentDate,
  "description": "USDA confirms safe hunting practices amid HPAI concerns. Learn about proper handling, field dressing, cooking, and protective measures for bird owners.",
  "image": {
    "@type": "ImageObject",
    "url": `${articleUrl.value}/assets/carecompass/duck_hunter.jpg`,
    "width": "1200",
    "height": "630"
  },
  "author": {
    "@type": "Organization",
    "name": "Rapid Response Urgent Care",
    "url": articleUrl.value
  },
  "publisher": {
    "@type": "Organization",
    "name": "Rapid Response Urgent Care",
    "logo": {
      "@type": "ImageObject",
      "url": `${articleUrl.value}/logo.png`
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": articleUrl.value
  },
  "keywords": "HPAI, avian influenza, bird flu, hunting safety, wildlife diseases, game birds",
  "articleSection": "Wildlife Health Advisory",
  "inLanguage": "en-US"
}

// Configure meta tags using @vueuse/head
useHead({
  title: 'HPAI Safety Guidelines for Hunters: Updated USDA Advisory | Rapid Response Urgent Care',
  meta: [
    {
      name: 'description',
      content: 'USDA reaffirms safe hunting practices amid HPAI concerns. Learn about essential precautions, field dressing tips, and food safety measures.'
    },
    {
      name: 'keywords',
      content: 'HPAI, avian influenza, bird flu, hunting safety, wildlife diseases, game birds, poultry safety, USDA guidelines'
    },
    {
      property: 'og:title',
      content: 'Rapid Response Urgent Care | Bird Flu Safety Guidelines for Hunters'
    },
    {
      property: 'og:description',
      content: 'Expanded guidelines highlight safe practices to prevent Highly Pathogenic Avian Influenza (HPAI) spread. Includes essential handling and cooking tips.'
    },
    {
      property: 'og:image',
      content: `${articleUrl.value}/assets/carecompass/duck_hunter.jpg`
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '630'
    },
    {
      property: 'og:url',
      content: articleUrl.value
    },
    {
      property: 'og:type',
      content: 'article'
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
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Bird Flu Safety Guidelines for Hunters | Rapid Response Urgent Care'
    },
    {
      name: 'twitter:description',
      content: 'Essential safety guidelines for hunters regarding avian influenza (HPAI). USDA-approved precautions and best practices.'
    },
    {
      name: 'twitter:image',
      content: `${articleUrl.value}/assets/carecompass/duck_hunter.jpg`
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: articleUrl.value
    }
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
  <v-app>
    <v-main>
      <v-container class="article-container py-12">
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <!-- Navigation and Category Header -->
            <div class="d-flex align-center justify-space-between mb-8">
              <ArticleNavButton />
              <div>
                <v-chip
                  color="primary"
                  variant="outlined"
                  size="large"
                  role="status"
                  aria-label="Article Category: Wildlife Health Advisory"
                >
                  Wildlife Health Advisory
                </v-chip>
              </div>
            </div>

            <!-- ARTICLE START -->
            <article itemscope itemtype="https://schema.org/Article">
              <!-- ARTICLE HEADER -->
              <div class="text-center mb-16">
                <h1
                  class="text-h2 font-weight-bold mb-4"
                  itemprop="headline"
                >
                  Bird Flu Safety Guidelines for Hunters
                </h1>

                <time
                  class="text-subtitle-1 text-medium-emphasis"
                  itemprop="datePublished"
                  datetime="2024-12-21"
                >
                  December 21, 2024
                </time>
              </div>

              <!-- FEATURED IMAGE -->
              <v-img
                :src="birdFluImage"
                height="300"
                contain
                class="rounded-lg mb-8"
                :alt="imageAltText"
                role="img"
                itemprop="image"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                    role="status"
                    aria-label="Loading image"
                  >
                    <v-progress-circular
                      indeterminate
                      color="primary"
                      aria-label="Loading"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>

              <!-- KEY SAFETY MESSAGE -->
              <v-card
                class="mb-8 bg-green-lighten-5"
                elevation="3"
                border
              >
                <v-card-text class="pa-6">
                  <div class="d-flex align-center mb-4">
                    <v-icon
                      icon="mdi-shield-check"
                      color="success"
                      size="large"
                      class="mr-4"
                    ></v-icon>
                    <h2 class="text-h4 text-success font-weight-bold">
                      Key Safety Information
                    </h2>
                  </div>
                  <p class="text-h5 font-weight-medium text-success">
                    USDA studies show that proper handling and thorough cooking effectively eliminate potential risks to hunters and consumers.
                  </p>
                </v-card-text>
              </v-card>

              <!-- SAFETY NOTICE ALERT -->
              <v-alert
                color="success"
                icon="mdi-shield-check"
                prominent
                class="mb-16"
                border="start"
                elevation="2"
              >
                <h3 class="text-h5 mb-3">Important Notice for Hunters</h3>
                <p class="text-body-1">
                  Hunting and handling waterfowl remain safe when you follow recommended precautions. 
                  While <a href="https://www.cdc.gov/bird-flu/index.html" target="_blank" rel="noopener noreferrer" class="alert-link font-weight-bold" style="color: #003366">Highly Pathogenic Avian Influenza (HPAI)</a> is present in wild bird populations
                </p>
              </v-alert>

              <!-- INTRODUCTION -->
              <p class="text-h5 font-weight-regular mb-16 text-grey-darken-2">
                In response to HPAI detections across multiple regions, the <a href="https://www.aphis.usda.gov/sites/default/files/alert-ws-hpai-hunters.pdf" target="_blank" rel="noopener noreferrer">U.S. Department of Agriculture (USDA)</a> has issued updated guidelines for hunters. These measures aim to protect wild and domestic bird populations, as well as safeguard human health. By following the guidance below, hunters can continue enjoying waterfowl season without worry.
              </p>

              <!-- KEY INFORMATION CARD: UNDERSTANDING AVIAN INFLUENZA -->
              <v-card
                class="mb-16 bg-blue-lighten-5"
                elevation="2"
                role="region"
                aria-labelledby="understanding-hpai"
              >
                <v-card-title 
                  id="understanding-hpai"
                  class="text-h4 pa-6"
                >
                  Understanding Avian Influenza
                </v-card-title>
                
                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <p class="text-body-1">
                        Avian influenza is primarily a respiratory disease in birds, caused by influenza A viruses. Wild birds—especially ducks, gulls, and shorebirds—can carry these viruses while showing few or no symptoms. In contrast, HPAI can be fatal to domestic poultry and certain wild birds. According to the USDA, properly cooked game poses no threat to human consumers. Most documented human cases of avian influenza worldwide involved close contact with infected domestic birds, not wild waterfowl.
                      </p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>

              <!-- IMPACT ON HUNTING SECTION -->
              <section 
                class="mb-16"
                aria-labelledby="hunting-impact"
              >
                <h2
                  id="hunting-impact"
                  class="text-h3 font-weight-bold mb-6"
                >
                  Impact on Hunting Activities
                </h2>
                <p class="text-body-1 mb-6">
                  Wildlife officials emphasize that waterfowl hunting can safely continue. So far, HPAI detections have not led to major restrictions on hunting seasons or bag limits. Hunters, who play a crucial role in conservation and disease surveillance, are encouraged to report any unusual bird deaths to their local wildlife agency.
                </p>
                <p class="text-body-1 mb-6">
                  According to the <a href="https://www.fws.gov/avian-influenza" target="_blank" rel="noopener noreferrer">U.S. Fish &amp; Wildlife Service</a>, the possibility of contracting bird flu through harvested wild game remains extremely low. Observing proper field dressing, cleaning, and cooking methods effectively neutralizes any lingering risk.
                </p>
              </section>

              <!-- MAIN CONTENT: ESSENTIAL SAFETY GUIDELINES -->
              <section 
                class="mb-16"
                aria-labelledby="guidelines-title"
              >
                <h2
                  id="guidelines-title"
                  class="text-h3 font-weight-bold mb-6"
                >
                  Essential Safety Guidelines for Hunters
                </h2>
                <div class="text-body-1 mb-6">
                  <h3 class="text-h4 mb-4">During the Hunt</h3>
                  <ul class="mb-6">
                    <li>Avoid handling birds that appear sick or have died unexpectedly</li>
                    <li>Wash hands with soap and water or use an alcohol-based sanitizer as soon as possible</li>
                  </ul>

                  <h3 class="text-h4 mb-4">When Processing Game Birds</h3>
                  <ul>
                    <li>Wear disposable gloves and use dedicated tools for cleaning</li>
                    <li>Process birds in the field if possible, to avoid contaminating home areas</li>
                    <li>Clean knives, surfaces, and equipment thoroughly before reuse</li>
                  </ul>
                </div>
              </section>

              <!-- PROTECTIVE MEASURES FOR BIRD OWNERS -->
              <section 
                class="mb-16"
                aria-labelledby="protective-measures"
              >
                <h2
                  id="protective-measures"
                  class="text-h3 font-weight-bold mb-6"
                >
                  Protective Measures for Bird Owners
                </h2>
                <p class="text-body-1 mb-6">
                  Backyard poultry keepers and bird enthusiasts should remain vigilant:
                </p>
                <ul class="text-body-1">
                  <li>Use separate footwear and clothing for game cleaning areas</li>
                  <li>Double-bag and dispose of bird carcasses and by-products in a secure trash receptacle</li>
                  <li>Regularly disinfect all surfaces and tools used for processing</li>
                </ul>
              </section>

              <!-- FOOD SAFETY GUIDELINES -->
              <section 
                class="mb-16"
                aria-labelledby="food-safety"
              >
                <h2
                  id="food-safety"
                  class="text-h3 font-weight-bold mb-6"
                >
                  Food Safety Guidelines
                </h2>
                <ul class="text-body-1">
                  <li>Cook all game birds to an internal temperature of <strong>165°F</strong></li>
                  <li>Use separate utensils and cutting boards for raw and cooked foods to prevent cross-contamination</li>
                  <li>Avoid eating, drinking, or smoking while handling and processing birds</li>
                </ul>
              </section>

              <!-- LATEST RESEARCH FINDINGS -->
              <section 
                class="mb-16"
                aria-labelledby="research-findings"
              >
                <h2
                  id="research-findings"
                  class="text-h3 font-weight-bold mb-6"
                >
                  Latest Research Findings
                </h2>
                <p class="text-body-1 mb-6">
                  In recent studies, wildlife health experts confirmed that rigorous cleaning, handling, and cooking methods mitigate risks associated with HPAI in harvested game birds. The USDA continues to track wild bird populations, updating guidelines to reflect emerging scientific data. You can find more on current HPAI monitoring efforts through the <a href="https://www.usda.gov/topics/animals/one-health" target="_blank" rel="noopener noreferrer">USDA's One Health initiative</a>.
                </p>
              </section>

              <!-- RESOURCES SECTION -->
              <section 
              class="mb-16"
                aria-labelledby="resources-title"
              >
                <h2 
                  id="resources-title"
                  class="text-h3 font-weight-bold mb-6"
                >
                  Additional Resources
                </h2>

                <!-- USDA APHIS PDF GUIDE -->
                <v-card
                  class="mb-6 bg-grey-lighten-4"
                  elevation="1"
                >
                  <v-card-text>
                    <div class="d-flex align-center">
                      <v-icon
                        icon="mdi-file-document-outline"
                        class="mr-4"
                        color="primary"
                      ></v-icon>
                      <div>
                        <h3 class="text-h6 mb-1">
                          USDA APHIS Wildlife Services Guide
                        </h3>
                        <p class="mb-2">
                          Detailed safety information for hunters and field biologists
                        </p>
                        <v-btn
                          href="https://www.aphis.usda.gov/sites/default/files/alert-ws-hpai-hunters.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          color="primary"
                          variant="outlined"
                        >
                          <v-icon start>mdi-download</v-icon>
                          Download PDF
                        </v-btn>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>

                <!-- CDC Wild Bird Data Map -->
                <v-card
                  class="mb-6 bg-grey-lighten-4"
                  elevation="1"
                >
                  <v-card-text>
                    <div class="d-flex align-center">
                      <v-icon
                        icon="mdi-web"
                        class="mr-4"
                        color="primary"
                      ></v-icon>
                      <div>
                        <h3 class="text-h6 mb-1">
                          CDC Avian Influenza in Wild Birds
                        </h3>
                        <p class="mb-2">
                          Up-to-date data on HPAI in wild bird populations.
                        </p>
                        <v-btn
                          href="https://www.cdc.gov/bird-flu/situation-summary/data-map-wild-birds.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          color="primary"
                          variant="outlined"
                        >
                          <v-icon start>mdi-open-in-new</v-icon>
                          View CDC Map
                        </v-btn>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>

                <!-- USDA APHIS HPAI Detections -->
                <v-card
                  class="mb-6 bg-grey-lighten-4"
                  elevation="1"
                >
                  <v-card-text>
                    <div class="d-flex align-center">
                      <v-icon
                        icon="mdi-web"
                        class="mr-4"
                        color="primary"
                      ></v-icon>
                      <div>
                        <h3 class="text-h6 mb-1">
                          USDA APHIS HPAI Detections in Wild Birds
                        </h3>
                        <p class="mb-2">
                          Latest data on HPAI detection in wild bird populations.
                        </p>
                        <v-btn
                          href="https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza/hpai-detections/wild-birds"
                          target="_blank"
                          rel="noopener noreferrer"
                          color="primary"
                          variant="outlined"
                        >
                          <v-icon start>mdi-open-in-new</v-icon>
                          View APHIS Site
                        </v-btn>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </section>
            </article>

            <!-- Bottom Navigation Button -->
            <ArticleNavButton class="mt-8" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.article-container {
  font-family: 'Georgia', serif;
  line-height: 1.8;
}

.text-body-1 {
  text-align: justify;
  font-size: 1.1rem;
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
</style>