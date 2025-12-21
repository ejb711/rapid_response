<template>
  <v-app>
    <v-main class="pa-0">
      <v-container class="article-container py-1" style="height: 100%; overflow: hidden;">
        <v-row justify="center" style="height: 100%; overflow-y: auto;">
          <v-col cols="12" md="10" lg="8">
            <!-- Header with Nav Button and Alert -->
            <div class="d-flex align-center justify-space-between mb-8">
              <ArticleNavButton />
              <div>
                <v-chip
                  color="primary"
                  variant="outlined"
                  size="large"
                  role="status"
                  aria-label="Public Health Alert"
                >
                  Public Health Alert
                </v-chip>
              </div>
            </div>

            <!-- Article Content -->
            <article itemscope itemtype="https://schema.org/NewsArticle">
              <!-- Title Section -->
              <div class="text-center mb-16">
                <h1 
                  class="text-h2 font-weight-bold mb-4"
                  itemprop="headline"
                >
                  LDH Detects First Presumptive Positive Human H5N1 Case in Louisiana
                </h1>
                
                <time 
                  class="text-subtitle-1 text-medium-emphasis"
                  itemprop="datePublished"
                  datetime="2024-12-16"
                >
                  December 16, 2024
                </time>
              </div>

              <!-- Main Image -->
              <v-img
                :src="birdFluImage"
                height="45vh"
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
                    />
                  </v-row>
                </template>
              </v-img>

              <!-- Description -->
              <p 
                class="text-caption text-center mb-16 font-italic"
                itemprop="description"
              >
                The Louisiana Department of Health (LDH) released a statement on December 13, 2024, indicating the first presumptive positive human case of highly pathogenic avian influenza (HPAI), or H5N1, in southwestern Louisiana. The patient is reportedly hospitalized and had exposure to sick or dead birds.
              </p>
              
              <!-- Intro Paragraph -->
              <p class="text-h5 font-weight-regular mb-16 text-grey-darken-2">
                This development marks a significant milestone for public health in Louisiana. According to LDH and the CDC, H5N1 bird flu has been circulating among wild birds and poultry in various parts of the country. While human infections are rare, the agency's statement underscores the need for vigilance and preventive measures, particularly for those who work with or handle birds.
              </p>

              <!-- Key Facts Card -->
              <v-card 
                class="mb-16 bg-red-lighten-5" 
                elevation="2"
                role="region"
                aria-labelledby="key-facts-title"
              >
                <v-card-title 
                  id="key-facts-title"
                  class="text-h4 pa-6"
                >
                  Key Facts About H5N1
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col 
                      v-for="(fact, index) in keyFacts"
                      :key="index"
                      cols="12" 
                      md="6"
                    >
                      <v-card 
                        variant="outlined" 
                        class="h-100"
                        :aria-labelledby="`fact-title-${index}`"
                      >
                        <v-card-title :id="`fact-title-${index}`">
                          {{ fact.title }}
                        </v-card-title>
                        <v-card-text>
                          {{ fact.content }}
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>

              <!-- Article Sections -->
              <section 
                class="mb-16"
                aria-labelledby="understanding-title"
              >
                <h2 
                  id="understanding-title"
                  class="text-h3 font-weight-bold mb-6"
                >
                  Understanding H5N1
                </h2>
                <p class="text-body-1 mb-6">
                  H5N1, also referred to as avian influenza or bird flu, is a highly pathogenic strain of influenza virus commonly found in birds. Human infections typically arise from direct and prolonged exposure to infected birds or contaminated environments.
                </p>
                <p class="text-body-1">
                  In Louisiana, the presumptive positive case is the first of its kind, prompting heightened surveillance and investigation. The LDH and the CDC are coordinating with healthcare providers to ensure early detection, isolation, and treatment of any additional potential cases.
                </p>
              </section>

              <section 
                class="mb-16"
                aria-labelledby="prevention-title"
              >
                <h2 
                  id="prevention-title"
                  class="text-h3 font-weight-bold mb-6"
                >
                  Preventive Measures
                </h2>
                <p class="text-body-1 mb-6">
                  To help reduce the spread of H5N1 and safeguard public health, LDH, CDC, and other health agencies recommend:
                </p>
                <v-list aria-label="List of preventive measures">
                  <v-list-item 
                    v-for="(item, i) in preventiveMeasures" 
                    :key="i"
                    role="listitem"
                  >
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </section>

              <section 
                class="mb-16"
                aria-labelledby="response-title"
              >
                <h2 
                  id="response-title"
                  class="text-h3 font-weight-bold mb-6"
                >
                  State and Federal Response
                </h2>
                <p class="text-body-1 mb-6">
                  The Louisiana Department of Health is coordinating with the CDC and USDA to contain any potential spread and to further investigate this presumptive case. State-level surveillance includes testing flocks, tracing possible exposure routes, and issuing updated guidelines for healthcare providers.
                </p>
                <p class="text-body-1">
                  The public health risk remains low, according to official statements, but authorities emphasize the importance of awareness, reporting, and timely medical intervention.
                </p>
              </section>

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
                <nav aria-label="Additional resources">
                  <v-list>
                    <v-list-item 
                      v-for="(resource, i) in resources" 
                      :key="i" 
                      :href="resource.link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      role="link"
                      :aria-label="`Visit ${resource.title} (opens in new tab)`"
                    >
                      <v-list-item-title>{{ resource.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </nav>
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

<script setup>
import { ref, onMounted } from 'vue';
import birdFluImage from '@/assets/carecompass/bird-flu.jpg';
import ArticleNavButton from '@/components/ArticleNavButton.vue';

// SEO Meta Tags
onMounted(() => {
  updateMetaTags();
  injectStructuredData();
});

const updateMetaTags = () => {
  const metaTags = {
    description: 'First presumptive positive human H5N1 case detected in Louisiana. Latest updates on bird flu outbreak, preventive measures, and public health response.',
    keywords: 'H5N1, bird flu, avian influenza, Louisiana, public health, CDC, LDH',
    author: 'Louisiana Department of Health',
    'og:title': 'First H5N1 Case Detected in Louisiana - Public Health Alert',
    'og:description': 'Louisiana Department of Health reports first presumptive positive human case of H5N1 bird flu. Learn about symptoms, risks, and preventive measures.',
    'og:image': '/assets/carecompass/bird-flu.jpg',
    'og:type': 'article',
    'twitter:card': 'summary_large_image'
  };

  Object.entries(metaTags).forEach(([name, content]) => {
    const meta = document.createElement('meta');
    if (name.startsWith('og:')) {
      meta.setAttribute('property', name);
    } else {
      meta.setAttribute('name', name);
    }
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  });
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "LDH Detects First Presumptive Positive Human H5N1 Case in Louisiana",
  "datePublished": "2024-12-16",
  "dateModified": "2024-12-16",
  "description": "Louisiana Department of Health reports first presumptive positive human case of H5N1 bird flu in southwestern Louisiana. Patient is hospitalized following exposure to sick birds.",
  "image": "/assets/carecompass/bird-flu.jpg",
  "author": {
    "@type": "Organization",
    "name": "Louisiana Department of Health",
    "url": "https://ldh.la.gov"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Louisiana Department of Health",
    "url": "https://ldh.la.gov"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://ldh.la.gov/news/H5N1-2024"
  }
};

const injectStructuredData = () => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

const imageAltText = "Illustration representing H5N1 bird flu virus and its impact on public health";

const keyFacts = [
  {
    title: 'Human Cases',
    content: 'The LDH report states the infected individual is a resident of southwestern Louisiana and is currently hospitalized. Nationally, as of December 13, 2024, the CDC has tracked approximately 60 confirmed human H5N1 cases in the U.S. to date.'
  },
  {
    title: 'Animal Infections',
    content: 'H5N1 is widespread in bird populations worldwide, with ongoing outbreaks in both wild and domestic birds. In Louisiana, state officials have been monitoring poultry operations and wild bird populations.'
  },
  {
    title: 'Risk to Humans',
    content: 'While the general risk to the public remains low, those who work in poultry farms, veterinary clinics, or have recreational exposure to birds face higher chances of contact.'
  },
  {
    title: 'Symptoms',
    content: 'Symptoms may mirror those of seasonal influenza, including fever, cough, sore throat, muscle aches, and in severe cases, pneumonia or acute respiratory distress syndrome (ARDS).'
  }
];

const preventiveMeasures = [
  'Avoid contact with sick or dead birds, particularly in areas where H5N1 has been detected',
  'Wear appropriate protective gear when working with poultry or wild birds',
  'Wash hands thoroughly with soap and water after handling birds',
  'Cook poultry and eggs to an internal temperature of at least 165°F (74°C)',
  'Report unusual wild bird die-offs to local authorities'
];

const resources = [
  {
    title: 'Louisiana Department of Health: Official H5N1 Updates',
    link: 'https://ldh.la.gov/news/H5N1-2024'
  },
  {
    title: 'CDC: Avian Influenza (Bird Flu)',
    link: 'https://www.cdc.gov/flu/avianflu/'
  },
  {
    title: 'WHO: Avian Influenza Overview',
    link: 'https://www.who.int/health-topics/influenza-avian'
  }
];
</script>

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
</style>