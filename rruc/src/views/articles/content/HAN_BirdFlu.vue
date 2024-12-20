<template>
    <v-app>
      <v-main>
        <v-container class="article-container py-12">
          <v-row justify="center">
            <v-col cols="12" md="10" lg="8">
              <article itemscope itemtype="https://schema.org/Article">
                <!-- Article Header -->
                <div class="text-center mb-16">
                  <v-chip
                    color="primary"
                    variant="outlined"
                    class="mb-6"
                    size="large"
                    role="status"
                    aria-label="Article Category: Public Health Advisory"
                  >
                    Public Health Advisory
                  </v-chip>
  
                  <h1 
                    class="text-h2 font-weight-bold mb-4"
                    itemprop="headline"
                  >
                    First Human Highly Pathogenic Avian Influenza A(H5N1) Case Detected in Louisiana
                  </h1>
  
                  <time
                    class="text-subtitle-1 text-medium-emphasis"
                    itemprop="datePublished"
                    datetime="2024-12-16"
                  >
                    December 16, 2024
                  </time>
                </div>
  
                <!-- Featured Image -->
                <v-img
                  :src="birdFluImage"
                  height="600"
                  cover
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
                <p 
                  class="text-caption text-center mb-16 font-italic"
                  itemprop="description"
                >
                  Louisiana confirms its first human case of highly pathogenic avian influenza A(H5N1), raising awareness for public health safety.
                </p>
  
                <!-- Introduction -->
                <p class="text-h5 font-weight-regular mb-16 text-grey-darken-2">
                  On December 12, 2024, Louisiana reported its first human case of highly pathogenic avian influenza A(H5N1). This rare infection underscores the importance of vigilance in identifying and mitigating zoonotic diseases that threaten both human and animal populations.
                </p>
  
                <!-- Key Information Card -->
                <v-card
                  class="mb-16 bg-blue-lighten-5"
                  elevation="2"
                  role="region"
                  aria-labelledby="key-info-title"
                >
                  <v-card-title 
                    id="key-info-title"
                    class="text-h4 pa-6"
                  >
                    Key Facts About the Case
                  </v-card-title>
                  
                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <ul>
                          <li>The case involves a resident of southwestern Louisiana hospitalized due to severe illness.</li>
                          <li>Exposure occurred through contact with sick and dead birds infected with H5N1.</li>
                          <li>To date, no person-to-person transmission has been reported in the U.S.</li>
                        </ul>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
  
                <!-- Main Content Sections -->
                <div itemprop="articleBody">
                  <section 
                    class="mb-16"
                    aria-labelledby="clinical-guidance-title"
                  >
                    <h2 
                      id="clinical-guidance-title"
                      class="text-h3 font-weight-bold mb-6"
                    >
                      Clinical Guidance for Healthcare Providers
                    </h2>
                    <p class="text-body-1 mb-6">
                      Clinicians are advised to consider H5N1 infection in patients presenting with acute respiratory symptoms and relevant exposure history, such as contact with infected birds or contaminated environments within 10 days before symptom onset.
                    </p>
                    <p class="text-body-1 mb-6">
                      For suspected cases, infection control measures, including isolation and use of appropriate PPE, must be implemented immediately. Empiric antiviral treatment with oseltamivir is recommended without waiting for lab results.
                    </p>
                  </section>
  
                  <section 
                    class="mb-16"
                    aria-labelledby="public-health-title"
                  >
                    <h2 
                      id="public-health-title"
                      class="text-h3 font-weight-bold mb-6"
                    >
                      Public Health Risk Assessment
                    </h2>
                    <p class="text-body-1 mb-6">
                      While the CDC considers the current public health risk of H5N1 to the general population as low, individuals with close or prolonged unprotected exposure to infected animals remain at greater risk.
                    </p>
                    <p class="text-body-1 mb-6">
                      Avian influenza A viruses, primarily found in birds, can occasionally infect humans, leading to severe respiratory illnesses. Vigilance and prompt reporting of suspected cases are critical to controlling potential outbreaks.
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
                      Preventive Measures and Reporting
                    </h2>
                    <p class="text-body-1 mb-6">
                      Public health officials encourage reporting all suspected H5N1 cases to the Louisiana Department of Health via the 24/7 clinician hotline at 800-256-2748. Routine safety measures, including avoiding contact with sick or dead birds, should be emphasized to minimize exposure.
                    </p>
                    <p class="text-body-1 mb-6">
                      For more information on infection control, testing, and treatment protocols, visit the CDC and LDH official guidelines.
                    </p>
                  </section>
  
                  <!-- Resources Section -->
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
                            <h3 class="text-h6 mb-1">Official Health Alert Network Advisory</h3>
                            <p class="mb-2">Louisiana Department of Health Communication 24-5</p>
                            <v-btn
                              href="https://ldh.la.gov/assets/oph/Center-CP/HANs/2024/Communication-24-5.pdf"
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
                    <p class="text-caption">
                      Note: This document contains detailed guidance for healthcare providers and public health officials regarding the H5N1 case in Louisiana.
                    </p>
                  </section>
                </div>
              </article>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import birdFluImage from '@/assets/carecompass/sick_chicken.webp';
  
  const updateMetaTags = () => {
    const metaTags = {
      description: 'Louisiana reports first human case of highly pathogenic avian influenza A(H5N1), emphasizing the importance of public health surveillance and preventive measures.',
      keywords: 'avian influenza, H5N1, Louisiana, public health, zoonotic diseases',
      author: 'Louisiana Department of Health',
      'og:title': 'First Human H5N1 Case in Louisiana: Public Health Advisory',
      'og:description': 'Louisiana confirms first human case of highly pathogenic avian influenza A(H5N1). Learn about symptoms, risks, and preventive measures.',
      'og:image': '/assets/health/bird-flu.jpg',
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
    "@type": "Article",
    "headline": "First Human Highly Pathogenic Avian Influenza A(H5N1) Case Detected in Louisiana",
    "datePublished": "2024-12-16",
    "dateModified": "2024-12-16",
    "description": "Louisiana confirms its first human case of highly pathogenic avian influenza A(H5N1), raising awareness for public health safety.",
    "image": "/assets/health/bird-flu.jpg",
    "author": {
      "@type": "Organization",
      "name": "Louisiana Department of Health"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Louisiana Department of Health"
    },
    "mainEntityOfPage": {
      "@type": "WebPage"
    }
  };
  
  const injectStructuredData = () => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  };
  
  const imageAltText = "Medical professionals in protective equipment examining diagnostic results";
  
  // Mount hooks
  onMounted(() => {
    updateMetaTags();
    injectStructuredData();
  });
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