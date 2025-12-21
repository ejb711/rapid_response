<template>
  <v-app role="banner">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <v-main role="main" id="main-content">
      <v-container class="article-container py-12">
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <!-- Navigation and Category Header -->
            <div class="d-flex align-center justify-space-between mb-8">
              <ArticleNavButton />
              <div>
                <v-chip
                  color="error"
                  variant="outlined"
                  size="large"
                  role="status"
                  aria-label="Article Category: Public Health"
                >
                  Public Health
                </v-chip>
              </div>
            </div>

            <article itemscope itemtype="https://schema.org/Article">
              <!-- Article Header with Title -->
              <div class="text-center mb-16">
                <h1
                  class="text-h2 font-weight-bold mb-4"
                  itemprop="headline"
                >
                  Influenza Activity Surges Across Louisiana: What You Need to Know
                </h1>

                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-center gap-4 mb-8">
                  <time
                    itemprop="datePublished"
                    datetime="2024-12-23"
                    aria-label="Published on December 23, 2024"
                  >
                    December 23, 2024
                  </time>
                  <span class="text-grey-darken-1">|</span>
                  <span class="font-italic">Based on CDC Weekly Surveillance Report</span>
                </div>

                <!-- Rest of the existing content remains unchanged -->
                <!-- Including all sections, images, cards, and alerts -->
                <!-- Just adding the navigation buttons at top and bottom -->

                <!-- Flu Map Image -->
                <v-img
                  :src="fluMapImage"
                  :alt="imageAltText"
                  class="flu-map-img"
                  itemprop="image"
                  role="img"
                  contain
                  loading="lazy"
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
              </div>

              <!-- All existing sections remain exactly the same -->
              <!-- Main Article Content -->
              <section class="mb-16">
                <h2 class="text-h3 font-weight-bold mb-6">Understanding the Current Surge</h2>
                <p class="text-body-1 mb-6">
                  Influenza, commonly referred to as the flu, is making headlines again as Louisiana and other regions report a sharp increase in cases. According to the latest CDC FluView report, the United States is experiencing an uptick in influenza-like illness, with Louisiana among the states most affected.
                </p>
                <p class="text-body-1 mb-6">
                  The flu is caused by the influenza virus, which spreads primarily through respiratory droplets when infected individuals cough, sneeze, or talk. With the holiday season in full swing, gatherings and close contact are creating ideal conditions for transmission.
                </p>
              </section>

              <!-- Regional Impact Section -->
              <section class="mb-16">
                <h2 class="text-h3 font-weight-bold mb-6">Louisiana at the Forefront</h2>
                <p class="text-body-1 mb-6">
                  Louisiana is among the six jurisdictions with high or very high levels of respiratory illness activity. Healthcare facilities are experiencing a significant increase in emergency department visits and hospitalizations, particularly among vulnerable populations such as young children and the elderly.
                </p>
                <p class="text-body-1 mb-6">
                  Data from the CDC indicates that outpatient visits for influenza-like illness in Louisiana have reached 3.4%, which is significantly above the national baseline. Hospitals are preparing for an influx of patients as the flu season intensifies.
                </p>
              </section>

              <!-- Demographics and Risk Factors -->
              <section class="mb-16">
                <h2 class="text-h3 font-weight-bold mb-6">Who Is Most at Risk?</h2>
                <p class="text-body-1 mb-6">
                  Influenza affects people of all ages, but certain groups are at higher risk for severe complications. According to CDC data, adults aged 65 and older, children under 5, and individuals with chronic health conditions are experiencing the highest hospitalization rates.
                </p>
                <p class="text-body-1 mb-6">
                  Among these groups, hospitalization rates are highest for adults over 65, at 9.9 per 100,000, and for young children under 5, at 2.6 per 100,000. Public health officials emphasize the importance of vaccination and preventive measures for these vulnerable populations.
                </p>
              </section>

              <!-- Prevention Guidelines -->
              <section class="mb-16">
                <h2 class="text-h3 font-weight-bold mb-6">Protect Yourself and Your Community</h2>
                <p class="text-body-1 mb-6">
                  Preventing the flu requires a combination of personal and community efforts. The CDC recommends annual flu vaccinations, which are effective at reducing the severity of illness and preventing hospitalizations. This year's flu vaccine is well-matched to circulating strains.
                </p>
                <p class="text-body-1 mb-6">
                  In addition to vaccination, maintaining good hygiene practices is crucial. Regular handwashing, covering your mouth and nose when coughing or sneezing, and cleaning frequently touched surfaces can help curb the spread of the virus.
                </p>
              </section>

              <!-- Treatment and When to Seek Help -->
              <section class="mb-16">
                <h2 class="text-h3 font-weight-bold mb-6">When to Seek Medical Care</h2>
                <p class="text-body-1 mb-6">
                  If you develop flu symptoms, such as fever, cough, sore throat, or fatigue, it's important to rest, stay hydrated, and consult a healthcare provider if symptoms worsen. Antiviral medications can be effective if taken within the first 48 hours of symptom onset.
                </p>
                <v-alert
                  color="info"
                  icon="mdi-information"
                  border="start"
                  class="mb-6"
                >
                  <div class="text-body-1">
                    <p class="font-weight-bold mb-2">Emergency Warning Signs:</p>
                    <ul>
                      <li>Difficulty breathing or shortness of breath</li>
                      <li>Persistent chest pain or pressure</li>
                      <li>Confusion or difficulty waking</li>
                      <li>Severe muscle pain or weakness</li>
                    </ul>
                  </div>
                </v-alert>
              </section>

              <!-- Resources Section -->
              <section class="mb-16">
                <h2 class="text-h3 font-weight-bold mb-6">Learn More</h2>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card
                      class="mb-6 h-100"
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
                            <h3 class="text-h6 mb-1">CDC FluView Weekly Report</h3>
                            <p class="mb-2">Latest national influenza surveillance data</p>
                            <v-btn
                              href="https://www.cdc.gov/flu/weekly/index.htm"
                              target="_blank"
                              rel="noopener noreferrer"
                              color="primary"
                              variant="outlined"
                              aria-label="View CDC FluView Weekly Report in a new tab"
                            >
                              <v-icon start>mdi-open-in-new</v-icon>
                              View Report
                            </v-btn>
                          </div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-card
                      class="mb-6 h-100"
                      elevation="1"
                    >
                      <v-card-text>
                        <div class="d-flex align-center">
                          <v-icon
                            icon="mdi-medical-bag"
                            class="mr-4"
                            color="primary"
                          ></v-icon>
                          <div>
                            <h3 class="text-h6 mb-1">Rapid Response Urgent Care</h3>
                            <p class="mb-2">State-specific updates and resources</p>
                            <v-btn
                              href="https://rrurgentcare.com/flu-info"
                              target="_blank"
                              rel="noopener noreferrer"
                              color="primary"
                              variant="outlined"
                              aria-label="Learn more about flu information at Rapid Response Urgent Care in a new tab"
                            >
                              <v-icon start>mdi-open-in-new</v-icon>
                              Learn More
                            </v-btn>
                          </div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
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
import { onMounted } from 'vue';
import fluMapImage from '@/assets/carecompass/flu-map.jpg';
import ArticleNavButton from '@/components/ArticleNavButton.vue';

const imageAltText = 'Representation of flu activity across Louisiana and the United States';

// Rest of the script remains exactly the same
const updateMetaTags = () => {
  const metaTags = {
    description: 'Influenza activity surges across Louisiana. Learn about current flu trends, risk factors, prevention guidelines, and when to seek care.',
    keywords: 'public health, flu, influenza, CDC, Louisiana, Rapid Response Urgent Care, health tips',
    author: 'Rapid Response Urgent Care',
    'og:title': 'Influenza Activity Surges Across Louisiana: What You Need to Know',
    'og:description': "Get the latest updates on Louisiana's flu surge based on the CDC Weekly Surveillance Report, plus prevention and treatment tips.",
    'og:image': '/assets/carecompass/flu-map.jpg',
    'og:type': 'article',
    'og:site_name': 'Rapid Response Urgent Care',
    'og:locale': 'en_US',
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

  // Canonical Link
  const canonicalUrl = 'https://rrurgentcare.com/news/flu-surge-2024';
  const link = document.createElement('link');
  link.setAttribute('rel', 'canonical');
  link.setAttribute('href', canonicalUrl);
  document.head.appendChild(link);
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Influenza Activity Surges Across Louisiana: What You Need to Know',
  datePublished: '2024-12-23',
  dateModified: '2024-12-23',
  description:
    "Flu surges across Louisiana, with the latest CDC Weekly Surveillance Report. The article covers the cause, risk factors, prevention guidelines, and the surge's impact on vulnerable populations.",
  image: '/assets/carecompass/flu-map.jpg',
  author: {
    '@type': 'Organization',
    name: 'Rapid Response Urgent Care',
    url: 'https://rrurgentcare.com'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Rapid Response Urgent Care',
    url: 'https://rrurgentcare.com'
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://rrurgentcare.com/news/flu-surge-2024'
  },
  articleSection: 'Public Health',
  keywords: 'Influenza, Flu, Public Health, Louisiana, CDC Report, Rapid Response Urgent Care'
};

const breadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://rrurgentcare.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'News',
      item: 'https://rrurgentcare.com/news'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Influenza Surge 2024',
      item: 'https://rrurgentcare.com/news/flu-surge-2024'
    }
  ]
};

const injectStructuredData = () => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);

  const breadcrumbScript = document.createElement('script');
  breadcrumbScript.type = 'application/ld+json';
  breadcrumbScript.text = JSON.stringify(breadcrumbs);
  document.head.appendChild(breadcrumbScript);
};

onMounted(() => {
  updateMetaTags();
  injectStructuredData();
});
</script>

<style scoped>
.flu-map-img {
  max-width: 65%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.article-container {
  font-family: 'Georgia', serif;
  line-height: 1.8;
}

.text-body-1 {
  text-align: justify;
  font-size: 1.1rem;
  line-height: 1.8;
}

@media (max-width: 600px) {
  .text-h2 {
    font-size: 2rem !important;
  }
  
  .text-h3 {
    font-size: 1.75rem !important;
  }
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
</style>