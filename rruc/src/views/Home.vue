<template>
  <main class="home">
    <!-- Hero Section -->
    <section 
      class="hero-section py-12"
      aria-labelledby="hero-title"
    >
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <h1 
              id="hero-title"
              class="text-h2 font-weight-bold mb-4"
            >
              Healthcare That Puts You First
            </h1>
            <p class="text-body-1 mb-6">
              Delivering accessible, high-quality healthcare through both in-person and virtual solutions. We accept walk-ins or you can reserve and schedule appointments online. Our mission is to make healthcare more convenient and personalized for everyone.
            </p>
            <v-btn
                variant="outlined"
                size="large"
                color="primary"
                href="https://www.clockwisemd.com/hospitals/15568/visits/new"
                target="_blank"
                rel="noopener"
                prepend-icon="mdi-calendar"
                aria-label="Schedule an in-person visit"
              >
                Schedule In-Person Visit
              </v-btn>
          </v-col>
          <v-col cols="12" md="6" class="d-flex justify-center">
            <v-img
              :src="girlTissueImage"
              alt="Healthcare provider examining patient tissue sample"
              class="rounded-lg hero-image"
              cover
              height="400"
              role="img"
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
          </v-col>
        </v-row>
      </v-container>
    </section>

<!-- Weight Loss Services Section -->
<section 
  class="weight-loss-promo py-12"
  aria-labelledby="weight-loss-heading"
>
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="6" order="2" order-md="1">
        <v-img
          :src="weightLossLettersImage"
          alt="Medical weight loss success stories"
          class="rounded-lg"
          height="400"
          cover
          role="img"
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
      </v-col>
      
      <v-col cols="12" md="6" order="1" order-md="2">
        <h2 
          id="weight-loss-heading" 
          class="text-h2 font-weight-bold mb-4"
        >
          Transform Your Life with Medical Weight Loss
        </h2>
        <p class="text-body-1 mb-6">
          Experience breakthrough weight loss with FDA-approved medications and personalized medical supervision. Our program combines the latest advancements in weight loss medication with ongoing support to help you achieve lasting results.
        </p>
        <v-btn
          size="large"
          color="primary"
          :to="{ path: '/weightloss' }"
          prepend-icon="mdi-arrow-right"
          class="text-none"
        >
          Our Weight Loss Services
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</section>

    <!-- Location Section -->
    <section 
      class="location-section py-8 bg-grey-lighten-4" 
      aria-labelledby="location-heading"
    >
      <v-container fluid>
        <v-row align="center">
          <v-col cols="12" sm="12" md="6">
            <div class="location-info pa-4">
              <h2 id="location-heading" class="text-h4 mb-4"><b>Now Open</b> in Morgan City!</h2>
              <address class="text-h6">
                <p>609 Brashear Ave</p>
                <p class="text-body-1 text-grey">Next to CORE Physical Therapy</p>
                <p class="text-body-1 text-grey">Down the street from the Spirit of Morgan City Shrimp Boat</p>
                <p class="text-body-1 mt-4">Hours of Operation:</p>
                <p class="text-body-1 text-grey mb-4">Monday - Friday: 8:00 AM - 4:00 PM</p>
                <p class="text-body-1 mt-4">Phone:</p>
                <p class="text-body-1 text-grey mb-4">985-300-6123</p>
              </address>
              <v-btn
                variant="outlined"
                size="large"
                prepend-icon="mdi-map-marker"
                href="https://maps.app.goo.gl/sQF1w3L17VPvbrPL6"
                target="_blank"
                rel="noopener"
                class="text-primary"
                aria-label="Get directions to Rapid Response Urgent Care Morgan City location"
              >
                Get Directions
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="d-flex justify-center">
            <div class="map-container">
              <iframe 
                title="Rapid Response Urgent Care Morgan City Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.825076838367!2d-91.20791123487523!3d29.700816782000523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8621619b6a2c70e5%3A0x141e910f3837b6cb!2sRapid%20Response%20Urgent%20Care!5e0!3m2!1sen!2sus!4v1702750848673!5m2!1sen!2sus"
                width="100%" 
                height="400" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- In-Person Visit Section -->
    <section 
      class="in-person-section py-12"
      aria-labelledby="in-person-heading"
    >
      <v-container fluid>
        <v-row align="center">
          <v-col cols="12" sm="12" md="6">
            <v-img
              :src="clinicImage"
              alt="Medical clinic examination room"
              class="in-person-image"
              cover
              rounded="lg"
              role="img"
              aria-label="In-person visit illustration"
            />
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <div class="d-flex align-center flex-wrap gap-4 mb-4">
              <h2 id="in-person-heading" class="text-h2 font-weight-bold">
                Healthcare When You Need It
              </h2>
            </div>
            <p class="text-body-1 mb-6">
              Get immediate medical attention for non-emergency conditions. <b>Walk in</b> today, no appointment needed. Or, with the convenience of <b>virtual check-in</b>, skip the physical waiting room - we'll notify you when it's your turn.
            </p>
            <div class="d-flex gap-4">
              <v-btn
                variant="outlined"
                size="large"
                color="primary"
                href="https://www.clockwisemd.com/hospitals/15568/visits/new"
                target="_blank"
                rel="noopener"
                prepend-icon="mdi-calendar"
                aria-label="Schedule an in-person visit"
              >
                Schedule In-Person Visit
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Telemedicine Hero Section -->
    <section 
      class="telemedicine-section py-12"
      aria-labelledby="telemedicine-heading"
    >
      <v-container fluid>
        <v-row align="center">
          <v-col cols="12" sm="12" md="6">
            <div class="d-flex align-center flex-wrap gap-4 mb-4">
              <h2 id="telemedicine-heading" class="text-h2 font-weight-bold">
                Urgent Care from the comfort of your home
              </h2>
              <v-chip
                color="primary"
                variant="outlined"
                label
                class="coming-soon-chip"
                aria-label="Coming Soon Badge"
              >
                Coming Soon
              </v-chip>
            </div>
            <p class="text-body-1 mb-6">
              Skip the waiting room. Our telemedicine service connects you with experienced healthcare providers for immediate, non-emergency medical concerns.
            </p>
            <div class="d-flex gap-4">
              <v-btn
                variant="outlined"
                size="large"
                prepend-icon="mdi-information"
                :to="{ name: 'VirtualVisitLearnMore' }"
                aria-label="Learn more about virtual visits"
              >
                Learn More
              </v-btn>
            </div>
          </v-col>

          <v-col cols="12" sm="12" md="6" class="d-flex justify-center">
            <v-img
              :src="feverImage"
              alt="Telemedicine consultation for child with fever"
              class="telemedicine-image"
              cover
              rounded="lg"
              role="img"
              aria-label="Telemedicine consultation illustration"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Services Section -->
    <section 
      class="services-section py-16 bg-grey-lighten-4"
      aria-labelledby="services-heading"
    >
      <v-container>
        <h2 id="services-heading" class="text-h4 text-center mb-12">Urgent Care Services</h2>
        <v-row>
          <v-col 
            v-for="service in services" 
            :key="service.title" 
            cols="12" 
            md="4"
          >
            <v-card class="h-100" role="article">
              <v-card-item>
                <v-icon
                  :icon="service.icon"
                  size="large"
                  color="primary"
                  class="mb-4"
                  :aria-label="service.iconLabel"
                />
                <v-card-title class="text-h6">{{ service.title }}</v-card-title>
                <v-card-text>{{ service.description }}</v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section 
      class="cta py-16"
      aria-labelledby="cta-heading"
    >
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 id="cta-heading" class="text-h4 mb-6">Coming Soon: Virtual Visits</h2>
            <p class="text-body-1 mb-6">
              Experience the future of urgent care from the comfort of your home. Coming Soon.
            </p>
            <v-btn
              variant="outlined"
              size="large"
              prepend-icon="mdi-information"
              :to="{ name: 'VirtualVisitLearnMore' }"
              class="text-primary"
              aria-label="Learn more about upcoming virtual visits"
            >
              Learn More
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import girlTissueImage from '@/assets/stock/girl_tissue.jpg'
import feverImage from '@/assets/stock/telemed_child_with_fever.jpg'
import clinicImage from '@/assets/stock/bp.jpg'
import weightLossLettersImage from '@/assets/stock/weightloss/weightLossLetters.jpg'

useHead({
  title: 'Rapid Response Urgent Care - Morgan City, LA | Healthcare That Puts You First',
  meta: [
    {
      name: 'description',
      content: 'Open Now in Morgan City! Rapid Response Urgent Care provides accessible, high-quality healthcare through in-person and virtual solutions. Located at 609 Brashear Ave. Open Monday-Friday 8am-4pm.'
    },
    {
      name: 'keywords',
      content: 'urgent care, Morgan City, telemedicine, virtual visits, medical care, walk-in clinic, Louisiana healthcare'
    },
    {
      property: 'og:title',
      content: 'Rapid Response Urgent Care - Morgan City, LA'
    },
    {
      property: 'og:description',
      content: 'Open now in Morgan City! Quick medical attention and virtual visits for non-emergency conditions. Open Monday-Friday 8am-4pm.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:image',
      content: girlTissueImage
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Rapid Response Urgent Care",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "609 Brashear Ave",
          "addressLocality": "Morgan City",
          "addressRegion": "LA",
          "addressCountry": "US"
        },
        "description": "Quick medical attention and virtual visits for non-emergency conditions",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "16:00"
          }
        ],
        "url": "https://rrurgentcare.com",
        "sameAs": ["https://www.facebook.com/people/Rapid-Response-Urgent-Care/61566987523640/"]
      })
    }
  ]
})

const services = [
  {
    icon: 'mdi-stethoscope',
    iconLabel: 'Medical Evaluations Icon',
    title: 'Medical Evaluations',
    description: 'Quick medical attention for non-emergency conditions like minor injuries, infections, and acute illnesses.'
  },
  {
    icon: 'mdi-pill',
    iconLabel: 'Prescriptions Icon',
    title: 'Prescriptions',
    description: 'Get prescriptions for urgent medical needs when appropriate, sent directly to your preferred pharmacy.'
  },
  {
    icon: 'mdi-file-document',
    iconLabel: 'Medical Documentation Icon',
    title: 'Medical Documentation',
    description: 'Receive comprehensive visit summaries and sick notes for work or school as needed.'
  }
]
</script>

<style scoped>
.hero-section {
  background: linear-gradient(to right, var(--v-background-base), var(--v-surface-base));
}

.hero-image {
  width: 25%;
  max-width: 50%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.location-section {
  border-bottom: 1px solid #e0e0e0;
}

.location-info {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.telemedicine-section {
  background-color: var(--v-background-base);
}

.telemedicine-image {
  width: 100%;
  max-width: 250px;
  height: auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.in-person-image {
  width: 75%;
  max-width: 100%;
  margin-bottom: 2rem;
}

.map-container {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
}

.gap-4 {
  gap: 1rem;
}

.coming-soon-chip {
  animation: pulse 2s infinite;
}

.in-person-section {
  background-color: var(--v-background-base);
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .coming-soon-chip {
    animation: none;
  }
  
  * {
    animation: none !important;
    transition: none !important;
  }
}

/* High contrast improvements */
@media (prefers-contrast: high) {
  .text-medium-emphasis {
    color: #000000 !important;
  }
  
  .bg-grey-lighten-4 {
    background-color: #ffffff !important;
  }
}

@media (max-width: 600px) {
  .hero-section {
    text-align: center;
  }
  
  .hero-image {
    margin-top: 24px;
  }

  .telemedicine-section,
  .location-section,
  .in-person-section {
    text-align: center;
    padding: 4rem 0;
  }

  .gap-4 {
    justify-content: center;
  }
  
  .coming-soon-chip {
    margin: 0 auto;
  }

  .in-person-image {
    max-width: 100%;
    margin-bottom: 2rem;
  }
}

.weight-loss-promo {
  background: linear-gradient(to right, var(--v-background-base), var(--v-surface-base));
}

@media (max-width: 600px) {
  .weight-loss-promo {
    text-align: center;
  }
}

</style>