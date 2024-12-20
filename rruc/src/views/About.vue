<template>
  <main class="about" role="main" v-if="isReady">
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
              Exceptional Care When You Need It Most
            </h1>
            <p class="text-body-1 mb-6">
              Experience a new standard in modern healthcare delivery. Whether you prefer traditional in-person visits or the convenience of virtual consultations, we're here to serve you. No appointment necessary for walk-ins, or plan ahead with our easy online scheduling system. We've reimagined healthcare to be more flexible, responsive, and tailored to fit seamlessly into your lifestyle.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              :src="girlThroatImage"
              alt="Healthcare provider examining patient throat sample"
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

    <!-- Combined "Our Mission & Values" and "Our Journey" Section -->
    <section 
      class="our-story py-16 bg-grey-lighten-4"
      aria-labelledby="about-title"
    >
      <v-container>
        <v-row justify="center" class="mb-12">
          <v-col cols="12" md="8" class="text-center">
            <h2 
              id="about-title"
              class="text-h4 mb-6"
            >
              Who We Are &amp; Our Journey
            </h2>
            <div itemprop="description">
              <p class="text-body-1 mb-6">
                Welcome to Rapid Response Urgent Care - where your neighborhood's health is our priority!
                We're your local healthcare team, proudly serving this community with the expertise that comes from years of emergency medical experience. Our founder's extensive background in emergency care means you're getting top-notch medical attention from a team that truly knows what they're doing.
                Need care fast? We've got you covered! Stop by for a walk-in visit, schedule an appointment that fits your busy life, or connect with us virtually from the comfort of your home. We're here to make getting quality healthcare as easy as possible.
                At Rapid Response, we believe everyone deserves convenient access to great medical care. That's why we've built a practice that puts you first - with friendly, experienced providers who take the time to listen and understand your needs. No long waits, no hassle - just professional, personalized care when you need it most.
              </p>
              <p class="text-body-1">
                Come experience the difference at Rapid Response Urgent Care, where we're not just treating patients - we're taking care of neighbors.
              </p>
            </div>
          </v-col>
        </v-row>
        
        <v-row role="list" aria-label="Our Core Values">
          <v-col 
            v-for="(value, index) in companyValues" 
            :key="value.title"
            cols="12"
            md="4"
            role="listitem"
          >
            <v-card height="100%">
              <v-card-item>
                <div class="d-flex align-center mb-4">
                  <v-icon
                    :icon="value.icon"
                    color="primary"
                    size="large"
                    class="mr-4"
                    :aria-label="value.title"
                  ></v-icon>
                  <v-card-title 
                    class="text-h6"
                    :id="`value-title-${index}`"
                  >
                    {{ value.title }}
                  </v-card-title>
                </div>
                <v-card-text :aria-labelledby="`value-title-${index}`">
                  {{ value.description }}
                </v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Team Section -->
    <section 
      class="team py-16"
      aria-labelledby="team-title"
    >
      <v-container>
        <h2 
          id="team-title"
          class="text-h4 text-center mb-12"
        >
          Meet Our Team
        </h2>
        <v-row role="list" aria-label="Team Members">
          <v-col 
            v-for="(member, index) in teamMembers" 
            :key="member.name"
            cols="12"
            md="4"
            role="listitem"
          >
            <v-card class="text-center">
              <div 
                class="staff-image-container"
                role="img"
                :aria-label="`Profile photo of ${member.name}`"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 300 300" 
                  class="staff-placeholder"
                  role="presentation"
                  aria-hidden="true"
                >
                  <rect width="300" height="300" fill="#f0f0f0"/>
                  <path d="
                    M150 60 
                    a40 40 0 0 1 0 80 
                    a40 40 0 0 1 0 -80
                    M110 155
                    c-30 0 -60 25 -60 55
                    v30
                    h200
                    v-30
                    c0 -30 -30 -55 -60 -55
                    h-80
                    " 
                    fill="#d0d0d0"/>
                </svg>
              </div>
              <v-card-item>
                <v-card-title 
                  class="text-h6"
                  :id="`team-member-${index}`"
                >
                  {{ member.name }}
                </v-card-title>
                <v-card-subtitle 
                  class="mb-2"
                  :aria-labelledby="`team-member-${index}`"
                >
                  {{ member.position }}
                </v-card-subtitle>
                <v-card-text :aria-labelledby="`team-member-${index}`">
                  {{ member.description }}
                </v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section 
      class="cta py-16 bg-grey-lighten-4"
      aria-labelledby="cta-title"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 
              id="cta-title"
              class="text-h4 mb-6"
            >
              Rapid Response Urgent Care
            </h2>
            <p class="text-body-1 mb-6">
              Feel better faster with urgent care that revolves around you.
              <br>Walk in, schedule your in-person visit or virtual visit today and see the difference.
            </p>
            <v-btn
              color="primary"
              size="large"
              to="/services"
              aria-label="View our services"
            >
              Get Started
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import girlThroatImage from '@/assets/stock/girl_throat.jpg';

// Control component rendering
const isReady = ref(false);

// Company Values
const companyValues = ref([
  {
    icon: 'mdi-heart-pulse',
    title: 'Patient-First Care',
    description: 'We prioritize your health and well-being above all else, ensuring personalized care that meets your unique needs.'
  },
  {
    icon: 'mdi-shield-check',
    title: 'Quality & Safety',
    description: 'Our clinic maintains the highest standards of healthcare delivery, data security, and patient privacy.'
  },
  {
    icon: 'mdi-hand-heart',
    title: 'Accessibility',
    description: 'Making quality healthcare accessible to everyone through in-person visits and innovative virtual solutions.'
  }
]);

// Team Members
const teamMembers = ref([
  {
    name: 'Sydney Burchfield, FNP, ENP',
    position: 'Owner, Provider',
    description: 'Extensive experience in emergency medical services, leading our locally owned clinic.'
  },
  {
    name: 'Eric Brooks',
    position: 'Medical Director',
    description: 'Ensures the clinic operates under high medical standards and best practices.'
  },
  {
    name: 'Vanessa Martinez, FNP',
    position: 'Provider',
    description: 'Dedicated to providing personalized quality patient care.'
  },
  {
    name: 'Tommie Landry, FNP',
    position: 'Provider',
    description: 'Dedicated to providing personalized quality patient care.'
  },
  {
    name: 'Jonathan Sealine, LPN',
    position: 'Nurse Manager',
    description: 'Oversees daily nursing operations and ensures seamless patient flow.'
  },
  {
    name: 'Laila Henry, CMA',
    position: 'Medical Assistant',
    description: 'Provides essential clinical support, patient triage, and administrative assistance.'
  }
]);

// SEO Meta Tags
onMounted(async () => {
  try {
    await updateMetaTags();
    await injectStructuredData();
    isReady.value = true;
  } catch (error) {
    console.error('Error initializing about page:', error);
  }
});

const updateMetaTags = async () => {
  const metaTags = {
    description: 'Rapid Response Urgent Care provides accessible, high-quality healthcare through in-person and virtual solutions. Walk-ins welcome, or schedule appointments online.',
    keywords: 'urgent care, healthcare, medical services, walk-in clinic, virtual healthcare, medical team',
    author: 'Rapid Response Urgent Care',
    'og:title': 'About Rapid Response Urgent Care - Healthcare That Puts You First',
    'og:description': 'Local healthcare team providing accessible, quality medical care with walk-in and virtual options.',
    'og:type': 'website',
    'og:image': girlThroatImage,
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
  "@type": "MedicalClinic",
  "name": "Rapid Response Urgent Care",
  "description": "Local healthcare team providing accessible, quality medical care with walk-in and virtual options.",
  "medicalSpecialty": "Urgent Care",
  "availableService": [
    {
      "@type": "MedicalService",
      "name": "Walk-in Urgent Care",
      "description": "Immediate medical care without appointment"
    },
    {
      "@type": "MedicalService",
      "name": "Virtual Care",
      "description": "Remote healthcare consultations"
    }
  ]
};

const injectStructuredData = async () => {
  const updatedStructuredData = {
    ...structuredData,
    image: girlThroatImage,
    employee: teamMembers.value.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.position,
      "description": member.description
    }))
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(updatedStructuredData);
  document.head.appendChild(script);
};
</script>

<style scoped>
.hero-section {
  background: linear-gradient(to right, var(--v-background-base), var(--v-surface-base));
}

.hero-image {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.our-story {
  background-color: var(--v-grey-lighten-4);
}

.team .v-card {
  margin-bottom: 24px;
}

.staff-image-container {
  height: 300px;
  width: 100%;
  overflow: hidden;
}

.staff-placeholder {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 600px) {
  .hero-section {
    text-align: center;
  }
  
  .hero-image {
    margin-top: 24px;
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

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
</style>