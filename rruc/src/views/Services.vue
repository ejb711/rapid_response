<template>
  <div class="services">
    <!-- Coming Soon Banner -->
    <section class="coming-soon-banner py-3 bg-primary">
      <v-container fluid>
        <div class="d-flex align-center justify-center gap-4">
          <v-icon icon="mdi-hospital-building" color="white" />
          <p class="text-white mb-0">
            Urgent Care Services - Coming Soon!
          </p>
        </div>
      </v-container>
    </section>

    <!-- Hero Sections Container -->
    <section class="hero-container py-4">
      <v-container fluid>
        <v-row>
          <!-- In Person Urgent Care Hero -->
          <v-col cols="12" md="4" class="px-6">
            <div id="urgent" class="hero-content h-100 d-flex flex-column justify-center">
              <div class="d-flex align-center flex-wrap gap-4 mb-4">
                <h1 class="hero-title font-weight-bold">
                  In Person Visit
                </h1>
                <v-chip
                  color="primary"
                  variant="outlined"
                  label
                  class="coming-soon-chip"
                >
                  Coming Soon
                </v-chip>
              </div>
              <p class="text-body-1 mb-6">
                Immediate medical attention for non-emergency conditions. No appointment necessary, walk in or schedule an appointment today.
              </p>
              <div>
                <v-btn
                  color="primary"
                  size="large"
                  class="bg-error"
                  @click="showBookingDialog = true"
                >
                  Schedule Visit
                </v-btn>
              </div>
            </div>
          </v-col>

          <!-- Virtual Waiting Room Hero -->
          <v-col cols="12" md="4" class="px-6">
            <div id="virtual-waiting" class="hero-content h-100 d-flex flex-column justify-center">
              <div class="d-flex align-center flex-wrap gap-4 mb-4">
                <h1 class="hero-title font-weight-bold">
                  Virtual Waiting Room
                </h1>
                <v-chip
                  color="primary"
                  variant="outlined"
                  label
                  class="coming-soon-chip"
                >
                  Coming Soon
                </v-chip>
              </div>
              <p class="text-body-1 mb-6">
                Skip the physical waiting room. Check in virtually and we'll notify you when it's your turn to be seen. Continue your daily activities while waiting for your appointment.
              </p>
              <div>
                <v-btn
                  color="primary"
                  size="large"
                  class="bg-error"
                  @click="handleCheckIn"
                >
                  Check In Now
                </v-btn>
              </div>
            </div>
          </v-col>

          <!-- Virtual Services Hero -->
          <v-col cols="12" md="4" class="px-6">
            <div id="virtual-visit" class="hero-content h-100 d-flex flex-column justify-center">
              <div class="d-flex align-center flex-wrap gap-4 mb-4">
                <h1 class="hero-title font-weight-bold">
                  Virtual Healthcare Services
                </h1>
                <v-chip
                  color="primary"
                  variant="outlined"
                  label
                  class="coming-soon-chip"
                >
                  Coming Soon
                </v-chip>
              </div>
              <p class="text-body-1 mb-6">
                High-quality care delivered directly to you. Our virtual visits connect you with experienced healthcare providers from the comfort of your home.
              </p>
              <div>
                <v-btn
                  color="primary"
                  size="large"
                  class="bg-error"
                  @click="showBookingDialog = true"
                >
                  Book Appointment Now
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Main Services Section -->
    <section class="available-services pt-2">
      <v-container>
        <p class="text-body-1 text-center mb-8">
          Quick access for all of your urgent care needs. Our experienced team provides friendly comprehensive care, making healthcare more accessible and convenient for you.
        </p>
        <v-row>
          <v-col cols="12" class="mb-8">
            <v-card class="d-flex flex-column">
              <v-row no-gutters class="flex-grow-1">
                <v-col cols="12" md="2" class="d-flex">
                  <v-img
                    :src="ankleSprain"
                    alt="Virtual Urgent Care Services"
                    contain
                    class="flex-grow-1 service-image"
                  />
                </v-col>
                <v-col cols="12" md="8" class="d-flex align-start">
                  <v-card-item class="flex-grow-1 pt-4">
                    <v-card-text class="h-100">
                      <p class="mb-4 text-h6">Services and benefits include:</p>
                      <v-list density="compact" class="flex-grow-1">
                        <v-list-item
                          v-for="feature in serviceFeatures" 
                          :key="feature"
                          :prepend-icon="'mdi-check'"
                          :title="feature"
                          class="pa-1"
                        ></v-list-item>
                      </v-list>
                    </v-card-text>
                  </v-card-item>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Insurance Section -->
    <section class="insurance-info py-16 bg-grey-lighten-4">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="text-h4 mb-6">Insurance Coverage</h2>
            <p class="text-body-1 mb-6">
            </p>
            <div class="d-flex justify-center">
              <div class="insurance-icon-wrapper">
                <svg viewBox="0 0 100 100" class="insurance-icon">
                  <path d="M50 5 L90 20 V45 C90 65 72 85 50 95 C28 85 10 65 10 45 V20 L50 5Z" 
                        fill="#e0e0e0" 
                        stroke="#666666" 
                        stroke-width="2"/>
                  <path d="M30 50 L45 65 L70 35" 
                        fill="none" 
                        stroke="#4CAF50" 
                        stroke-width="6" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"/>
                </svg>
                <p class="text-subtitle-1 mt-4">Most Insurance Plans Accepted</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- FAQs Section -->
    <section class="faqs py-16">
      <v-container>
        <h2 class="text-h4 text-center mb-12">Frequently Asked Questions</h2>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-expansion-panels>
              <v-expansion-panel
                v-for="faq in faqs"
                :key="faq.question"
              >
                <v-expansion-panel-title>
                  {{ faq.question }}
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  {{ faq.answer }}
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Booking Dialog -->
    <v-dialog
      v-model="showBookingDialog"
      max-width="600px"
    >
      <v-card>
        <v-card-title class="text-h5 pa-4">
          Book Your Visit
          <v-spacer></v-spacer>
          <v-btn
            icon
            @click="showBookingDialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <appointment-form @submit="handleBooking" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppointmentForm from '@/components/shared/AppointmentForm.vue'

// Import images
import ankleSprain from '../assets/stock/ankle-sprain.jpg'

// State
const showBookingDialog = ref(false)

// In Person Features
const inPersonFeatures = [
  'No appointment necessary',
  'On-site lab testing',
  'X-ray services',
  'Treatment for injuries and illnesses',
  'Occupational medicine',
  'Sports physicals',
  'Vaccinations'
]

// Service Features
const serviceFeatures = [
  'Shorter wait times than emergency room',
  'Walk-in service, no appointment needed',
  "Virtual waiting room - Get a message when it's your turn to be seen",
  'Extended virtual visit hours',
  'Physical exams for work/school',
  'Lower costs than ER visits',
  'Medication prescriptions and refills',
  'Strep, RSV, Flu, and COVID-19 testing',
  'Pediatric care for common illnesses',
  'Treatment for sprains and fractures',
  'And more...'
]

// FAQs
const faqs = [
  {
    question: 'How do virtual visits work?',
    answer: 'Virtual visits are conducted through our secure video platform. Once you book an appointment, you\'ll receive a link to join the video call at your scheduled time.'
  },
  {
    question: 'What technology do I need?',
    answer: 'You need a device with a camera and microphone (smartphone, tablet, or computer) and a stable internet connection.'
  },
  {
    question: 'Are virtual visits covered by insurance?',
    answer: 'Many insurance providers cover virtual visits. We recommend checking with your insurance provider about specific coverage details.'
  },
  {
    question: 'Can I get prescriptions through virtual visits?',
    answer: 'Yes, our providers can prescribe medications when appropriate. Prescriptions will be sent directly to your preferred pharmacy.'
  }
]

// Methods
const handleCheckIn = () => {
  console.log('Checking in to virtual waiting room')
}

const handleBooking = (formData) => {
  console.log('Booking submitted:', formData)
  showBookingDialog.value = false
}
</script>

<style scoped>
/* Coming Soon Banner gradient */
.coming-soon-banner {
  background: linear-gradient(90deg, var(--v-primary-base), var(--v-primary-darken1));
}

.hero-container {
  background: linear-gradient(to right, var(--v-background-base), var(--v-surface-base));
  min-height: 450px;
}

.hero-content {
  padding: 2rem;
  height: 100%;
  border-radius: 8px;
}

.hero-content .hero-title {
  font-size: 2.25rem;
  line-height: 1.2;
  letter-spacing: -0.5px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}

.insurance-info {
  background-color: var(--v-surface-variant-base);
}

/* Insurance icon styles */
.insurance-icon-wrapper {
  text-align: center;
  padding: 2rem;
}

.insurance-icon {
  width: 120px;
  height: 120px;
  margin: 0 auto;
}

/* Card container styles */
.v-card {
  height: fit-content;
  display: flex;
  flex-direction: column;
}

.v-row {
  align-items: start;
}

.v-col {
  display: flex;
  flex-direction: column;
}

.image-container {
  aspect-ratio: 16/9;
  max-height: 500vh;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.v-list-item {
  min-height: 32px;
}

/* Pulsing chip animation */
.coming-soon-chip {
  animation: pulse 2s infinite;
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

.gap-4 {
  gap: 1rem;
}

@media (max-width: 960px) {
  .hero-content {
    text-align: center;
    padding: 1rem;
  }

  .hero-container {
    min-height: auto;
  }
  
  .hero-content .hero-title {
    font-size: 1.5rem;
  }

  .gap-4 {
    justify-content: center;
  }
  
  .coming-soon-chip {
    margin: 0 auto;
  }
}
</style>