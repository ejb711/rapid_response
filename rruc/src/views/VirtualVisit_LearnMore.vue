<template>
    <div class="learn-more">
      <!-- Hero Section -->
      <section class="hero-section py-12 bg-background">
        <v-container>
          <v-row align="center" class="mb-8">
            <v-col cols="12" md="6">
              <h1 class="text-h3 font-weight-bold mb-4">
                Virtual Visits: Personalized Care from Wherever You Are
              </h1>
              <p class="text-body-1">
                Our virtual care platform provides a convenient way for patients to see a healthcare provider using a computer or mobile device. 
                Gain access to quality medical advice, diagnosis, and treatments — all while staying in the comfort of your own home.
              </p>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-center">
              <v-img
                :src="doctorConsultImage"
                alt="Physician offering remote consultation"
                max-width="400"
                class="rounded-lg"
                cover
              />
            </v-col>
          </v-row>
  
          <!-- Quick Action Buttons -->
          <v-row class="mb-16">
            <v-col cols="12" sm="6">
              <v-card variant="outlined" class="h-100">
                <v-card-item>
                  <v-icon icon="mdi-calendar" color="primary" size="large" class="mb-2" />
                  <v-card-title>Flexibility & Convenience</v-card-title>
                  <v-card-text>
                    Reserve an appointment slot that suits your schedule and avoid unnecessary travel or wait times.
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card 
                variant="outlined" 
                class="h-100 cursor-pointer"
                @click="scrollToFAQ"
              >
                <v-card-item>
                  <v-icon icon="mdi-frequently-asked-questions" color="primary" size="large" class="mb-2" />
                  <v-card-title>Virtual Visit FAQs</v-card-title>
                  <v-card-text>
                    Discover answers to common questions and learn about what to expect from a virtual appointment.
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
  
      <!-- Quality Care Section -->
      <section class="quality-care-section py-16 bg-grey-lighten-4">
        <v-container>
          <v-row align="center" class="mb-16">
            <v-col cols="12" md="6">
              <v-img
                :src="providerImage"
                alt="Healthcare professional reviewing a patient's chart"
                max-width="400"
                class="rounded-lg"
                cover
              />
            </v-col>
            <v-col cols="12" md="6">
              <h2 class="text-h4 mb-6">Experience High-Quality Virtual Consultations</h2>
              <p class="text-body-1 mb-4">
                Our telehealth services deliver personalized, face-to-face interactions just like an in-person visit.
                With secure connectivity and real-time communication, our providers can conduct thorough evaluations 
                and discuss tailored care plans, ensuring you receive the same attention to detail you’d expect on-site.
              </p>
              <div class="d-flex flex-column gap-4">
                <div class="d-flex align-center gap-4">
                  <v-icon icon="mdi-clock-outline" color="primary" />
                  <div>
                    <h3 class="text-h6">Shorter Wait Times</h3>
                    <p class="mb-0">
                      Meet with a qualified provider sooner and get on the path to feeling better right away.
                    </p>
                  </div>
                </div>
                <div class="d-flex align-center gap-4">
                  <v-icon icon="mdi-message-text" color="primary" />
                  <div>
                    <h3 class="text-h6">Enhanced Follow-Up</h3>
                    <p class="mb-0">
                      Providers can recommend in-person treatment when needed, and create a detailed plan for ongoing care.
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
  
      <!-- Common Conditions Section -->
      <section class="conditions-section py-16">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <h2 class="text-h4 mb-6">Virtual Care for Common Health Concerns</h2>
              <p class="text-body-1 mb-6">
                Our dedicated telehealth team can address a wide range of non-emergency conditions and injuries, including:
              </p>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-list>
                    <v-list-item
                      v-for="condition in commonConditions.slice(0, 4)"
                      :key="condition"
                      :title="condition"
                      prepend-icon="mdi-check"
                    />
                  </v-list>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-list>
                    <v-list-item
                      v-for="condition in commonConditions.slice(4, 8)"
                      :key="condition"
                      :title="condition"
                      prepend-icon="mdi-check"
                    />
                  </v-list>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="6" class="d-flex align-center justify-center">
              <v-img
                :src="virtualCareImage"
                alt="Video consultation between patient and provider"
                max-width="400"
                class="rounded-lg"
                cover
              />
            </v-col>
          </v-row>
        </v-container>
      </section>
  
      <!-- Family Care Section -->
      <section class="family-care-section py-16 bg-grey-lighten-4">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="6" class="d-flex justify-center">
              <v-img
                :src="familyCareImage"
                alt="Family using telehealth services"
                max-width="400"
                class="rounded-lg"
                cover
              />
            </v-col>
            <v-col cols="12" md="6">
              <h2 class="text-h4 mb-4">Virtual Care for All Ages</h2>
              <h3 class="text-h5 mb-4">Pediatric Virtual Visits</h3>
              <p class="text-body-1">
                Set up online visits for your child’s day-to-day health needs including rashes, mild fevers, allergies, 
                pink eye, and more. Our pediatric providers focus on compassionate care to keep your little ones comfortable 
                and secure during virtual consults.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </section>
  
      <!-- Insurance and Billing Section -->
      <section class="insurance-section py-16">
        <v-container>
          <v-row align="center" class="mb-8">
            <v-col cols="12">
              <h2 class="text-h4 mb-4">Insurance & Billing</h2>
              <p class="text-body-1">
                We accept a variety of insurance plans to help keep telehealth affordable. For uninsured patients 
                or those with coverage questions, our billing department can clarify costs and payment options. 
                A convenient and transparent billing process ensures you know what to expect when scheduling 
                your virtual appointment.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </section>
  
      <!-- Emergency Care Disclaimer Section -->
      <section class="emergency-disclaimer-section py-16 bg-grey-lighten-4">
        <v-container>
          <v-row align="center" class="mb-8">
            <v-col cols="12">
              <h2 class="text-h4 mb-4">When to Seek Emergency Care</h2>
              <p class="text-body-1">
                Virtual Visits are not suitable for life-threatening emergencies. If you or a loved one 
                is experiencing severe symptoms such as chest pain, difficulty breathing, sudden confusion, 
                or other signs of a medical crisis, please visit the nearest emergency room or call 911 immediately.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </section>
  
      <!-- FAQ Section -->
      <section ref="faqSection" class="faq-section py-16">
        <v-container>
          <h2 class="text-h4 mb-8">Frequently Asked Questions</h2>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(faq, index) in faqs"
              :key="index"
              class="mb-2"
            >
              <v-expansion-panel-title>{{ faq.question }}</v-expansion-panel-title>
              <v-expansion-panel-text>{{ faq.answer }}</v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  // Import images
  import doctorConsultImage from '../assets/stock/doctor_consulting.jpg'
  import providerImage from '../assets/stock/provider_digital.jpg'
  import virtualCareImage from '../assets/stock/virtual_care.jpg'
  import familyCareImage from '../assets/stock/family_care.jpg'
  
  const faqSection = ref(null)
  const route = useRoute()
  
  // Scroll function WITH OFFSET
  const scrollToFAQ = () => {
    const offset = 100
    const elementY = faqSection.value.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementY - offset,
      behavior: 'smooth',
    })
  }
  
  // Check for query parameter on mount
  onMounted(() => {
    if (route.query.section === 'faq') {
      setTimeout(() => {
        scrollToFAQ()
      }, 100)
    }
  })
  
  // Common conditions that can be treated virtually
  const commonConditions = [
    'Allergies',
    'Cold & Flu',
    'Rashes',
    'Sinus Problems',
    'Pink Eye',
    'Sore Throat',
    'Headaches',
    'Minor Injuries'
  ]
  
  // FAQ data
  const faqs = [
    {
      question: "How do Virtual Visits work?",
      answer: "Virtual consultations use a secure video link to connect you with a licensed healthcare professional, similar to popular video platforms."
    },
    {
      question: "What types of conditions are appropriate for telehealth?",
      answer: "Providers can assess non-emergency issues like minor illnesses and injuries, plus offer prescription refills and care plans."
    },
    {
      question: "What technology do I need for a Virtual Visit?",
      answer: "You’ll need an internet-connected device (computer, tablet, or smartphone) with a camera and microphone."
    },
    {
      question: "How much does a Virtual Visit cost?",
      answer: "Costs vary based on your insurance coverage and any applicable copays. Contact your insurer or our billing team for details."
    },
    {
      question: "Is there a minimum age for telehealth services?",
      answer: "Yes. Virtual Visits are available to individuals aged one year and older, though parental/guardian supervision is required for minors."
    },
    {
      question: "Will I receive a summary and any prescriptions?",
      answer: "Following your telehealth appointment, you’ll be given a summary of the visit, and any prescriptions will be sent to your preferred pharmacy."
    },
    {
      question: "Can I get a medication prescription via Virtual Visit?",
      answer: "Yes, our providers can prescribe most medications electronically. Certain controlled substances may require an in-person evaluation."
    }
  ]
  </script>
  
  <style scoped>
  .hero-section {
    position: relative;
    overflow: hidden;
  }
  
  .quality-care-section,
  .conditions-section,
  .family-care-section,
  .faq-section,
  .insurance-section,
  .emergency-disclaimer-section {
    position: relative;
  }
  
  .cursor-pointer {
    cursor: pointer;
  }
  
  /* Responsive spacing */
  .gap-4 {
    gap: 1rem;
  }
  
  /* Mobile responsiveness */
  @media (max-width: 600px) {
    .hero-section {
      text-align: center;
      padding: 4rem 0;
    }
  
    .gap-4 {
      gap: 2rem;
    }
  }
  </style>
  