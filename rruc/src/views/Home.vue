<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero-section py-12">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <h1 class="text-h2 font-weight-bold mb-4">
              Virtual Visits from the comfort of your home
            </h1>
            <p class="text-body-1 mb-6">
              Virtual visits are a convenient and comfortable process to connect with healthcare providers. Get quality care from your phone or computer.
            </p>
            <div class="d-flex gap-4">
              <v-btn
                color="primary"
                size="large"
                class="text-white"
                prepend-icon="mdi-calendar"
                to="/services"
              >
                Book an Appointment
              </v-btn>
              <v-btn
                variant="outlined"
                size="large"
                prepend-icon="mdi-information"
              >
                Learn More
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Services Section -->
    <section class="services-section py-16 bg-grey-lighten-4">
      <v-container>
        <h2 class="text-h4 text-center mb-12">Our Virtual Services</h2>
        <v-row>
          <v-col 
            v-for="service in services" 
            :key="service.title" 
            cols="12" 
            md="4"
          >
            <v-card class="h-100">
              <v-card-item>
                <v-icon
                  :icon="service.icon"
                  size="large"
                  color="primary"
                  class="mb-4"
                />
                <v-card-title class="text-h6">{{ service.title }}</v-card-title>
                <v-card-text>{{ service.description }}</v-card-text>
                <v-card-actions>
                  <v-btn
                    variant="text"
                    color="primary"
                    class="px-0"
                  >
                    Learn More
                  </v-btn>
                </v-card-actions>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works py-16">
      <v-container>
        <h2 class="text-h4 text-center mb-12">How Virtual Visits Work</h2>
        <v-row>
          <v-col 
            v-for="(step, index) in steps" 
            :key="step.title" 
            cols="12" 
            md="3"
          >
            <div class="text-center">
              <div class="step-number mb-4">{{ index + 1 }}</div>
              <h3 class="text-h6 mb-4">{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials py-16 bg-grey-lighten-4">
      <v-container>
        <h2 class="text-h4 text-center mb-12">What Our Patients Say</h2>
        <v-row>
          <v-col 
            v-for="testimonial in testimonials" 
            :key="testimonial.name" 
            cols="12" 
            md="4"
          >
            <v-card class="h-100">
              <v-card-item>
                <div class="mb-4">
                  <v-rating
                    :model-value="5"
                    color="amber"
                    density="compact"
                    readonly
                  ></v-rating>
                </div>
                <v-card-text>
                  "{{ testimonial.quote }}"
                </v-card-text>
                <v-card-subtitle class="pt-4">
                  - {{ testimonial.name }}
                </v-card-subtitle>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="cta py-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="text-h4 mb-6">Ready to get started?</h2>
            <p class="text-body-1 mb-6">
              Book your virtual visit today and experience healthcare from the comfort of your home.
            </p>
            <v-btn
              color="primary"
              size="large"
              to="/services"
              class="text-white"
            >
              Book an Appointment
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
// Service options data
const services = [
  {
    icon: 'mdi-doctor',
    title: 'General Consultations',
    description: 'Connect with healthcare providers for general health concerns and follow-ups.'
  },
  {
    icon: 'mdi-pill',
    title: 'Prescription Renewals',
    description: 'Easy prescription renewals and medication management with our virtual service.'
  },
  {
    icon: 'mdi-account-group',
    title: 'Family Care',
    description: 'Comprehensive healthcare for the whole family, including pediatric services.'
  }
]

// How it works steps
const steps = [
  {
    title: 'Book Appointment',
    description: 'Select a time that works best for you through our online booking system.'
  },
  {
    title: 'Fill Information',
    description: 'Provide basic information about your health concern and medical history.'
  },
  {
    title: 'Join Virtual Visit',
    description: 'Connect with your healthcare provider through our secure video platform.'
  },
  {
    title: 'Get Care',
    description: 'Receive personalized care, prescriptions, and follow-up instructions.'
  }
]

// Testimonials data
const testimonials = [
  {
    quote: 'The virtual visit was so convenient and the doctor was very thorough and caring.',
    name: 'Sarah M.'
  },
  {
    quote: 'Quick, efficient, and professional. Saved me so much time compared to in-person visits.',
    name: 'James R.'
  },
  {
    quote: 'Excellent service! The platform was easy to use and the care was top-notch.',
    name: 'Emily L.'
  }
]
</script>

<style scoped>
.hero-section {
  background-color: var(--v-background-base);
  min-height: 500px;
  display: flex;
  align-items: center;
}

.step-number {
  width: 40px;
  height: 40px;
  background-color: var(--v-primary-base);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 1.25rem;
  font-weight: bold;
}

.gap-4 {
  gap: 1rem;
}

@media (max-width: 600px) {
  .hero-section {
    text-align: center;
    min-height: auto;
    padding: 4rem 0;
  }
  
  .gap-4 {
    justify-content: center;
  }
}
</style>