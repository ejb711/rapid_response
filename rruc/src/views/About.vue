<template>
    <div class="about">
      <!-- Hero Section -->
      <section class="hero-section py-12">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="6">
              <h1 class="text-h2 font-weight-bold mb-4">
                Healthcare That Puts You First
              </h1>
              <p class="text-body-1 mb-6">
                Delivering accessible, high-quality healthcare through innovative virtual solutions. Our mission is to make healthcare more convenient and personalized for everyone.
              </p>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-center">
              <v-img
                src="Image 1"
                alt="Healthcare Team"
                max-width="500"
                class="rounded-lg"
              />
            </v-col>
          </v-row>
        </v-container>
      </section>
  
      <!-- Mission & Values Section -->
      <section class="mission-values py-16 bg-grey-lighten-4">
        <v-container>
          <v-row justify="center" class="mb-12">
            <v-col cols="12" md="8" class="text-center">
              <h2 class="text-h4 mb-6">Our Mission & Values</h2>
              <p class="text-body-1">
                We believe healthcare should be accessible, convenient, and personalized for everyone. Our virtual healthcare platform connects you with experienced providers who are committed to your well-being.
              </p>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col 
              v-for="value in companyValues" 
              :key="value.title"
              cols="12"
              md="4"
            >
              <v-card height="100%">
                <v-card-item>
                  <div class="d-flex align-center mb-4">
                    <v-icon
                      :icon="value.icon"
                      color="primary"
                      size="large"
                      class="mr-4"
                    ></v-icon>
                    <v-card-title class="text-h6">
                      {{ value.title }}
                    </v-card-title>
                  </div>
                  <v-card-text>
                    {{ value.description }}
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
  
      <!-- Team Section -->
      <section class="team py-16">
        <v-container>
          <h2 class="text-h4 text-center mb-12">Our Leadership Team</h2>
          <v-row>
            <v-col 
              v-for="member in teamMembers" 
              :key="member.name"
              cols="12"
              md="4"
            >
              <v-card class="text-center">
                <v-img
                  :src="member.image"
                  :alt="member.name"
                  height="300"
                  cover
                  class="mb-4"
                ></v-img>
                <v-card-item>
                  <v-card-title class="text-h6">
                    {{ member.name }}
                  </v-card-title>
                  <v-card-subtitle class="mb-2">
                    {{ member.position }}
                  </v-card-subtitle>
                  <v-card-text>
                    {{ member.description }}
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
  
      <!-- Stats Section -->
      <section class="stats py-16 bg-primary">
        <v-container>
          <v-row>
            <v-col 
              v-for="stat in stats" 
              :key="stat.label"
              cols="6"
              md="3"
              class="text-center"
            >
              <div class="text-h3 font-weight-bold text-white mb-2">
                {{ stat.value }}
              </div>
              <div class="text-body-1 text-white">
                {{ stat.label }}
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
  
      <!-- History Timeline -->
      <section class="history py-16">
        <v-container>
          <h2 class="text-h4 text-center mb-12">Our Journey</h2>
          <v-timeline>
            <v-timeline-item
              v-for="item in historyTimeline"
              :key="item.year"
              :dot-color="item.color"
              size="small"
            >
              <template v-slot:opposite>
                <div class="text-h6">{{ item.year }}</div>
              </template>
              <v-card>
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-text>
                  {{ item.description }}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-container>
      </section>
  
      <!-- CTA Section -->
      <section class="cta py-16 bg-grey-lighten-4">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
              <h2 class="text-h4 mb-6">Join Our Mission</h2>
              <p class="text-body-1 mb-6">
                Experience healthcare that's designed around you. Book your virtual visit today and see the difference.
              </p>
              <v-btn
                color="primary"
                size="large"
                to="/services"
              >
                Get Started
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </div>
  </template>
  
  <script setup>
  // Company Values
  const companyValues = [
    {
      icon: 'mdi-heart-pulse',
      title: 'Patient-First Care',
      description: 'We prioritize your health and well-being above all else, ensuring personalized care that meets your unique needs.'
    },
    {
      icon: 'mdi-shield-check',
      title: 'Quality & Safety',
      description: 'Our platform maintains the highest standards of healthcare delivery and data security.'
    },
    {
      icon: 'mdi-hand-heart',
      title: 'Accessibility',
      description: 'Making quality healthcare accessible to everyone through innovative virtual solutions.'
    }
  ]
  
  // Team Members
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Chief Medical Officer',
      image: 'Image 2',
      description: 'Board-certified physician with over 15 years of experience in virtual healthcare.'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      image: 'Image 3',
      description: 'Technology leader with expertise in healthcare innovation and digital platforms.'
    },
    {
      name: 'Dr. Emily Rodriguez',
      position: 'Director of Patient Care',
      image: 'Image 4',
      description: 'Specialized in creating exceptional patient experiences and care protocols.'
    }
  ]
  
  // Company Stats
  const stats = [
    {
      value: '50K+',
      label: 'Patients Served'
    },
    {
      value: '98%',
      label: 'Patient Satisfaction'
    },
    {
      value: '24/7',
      label: 'Availability'
    },
    {
      value: '500+',
      label: 'Healthcare Providers'
    }
  ]
  
  // History Timeline
  const historyTimeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Launched with a mission to make healthcare more accessible through virtual solutions.',
      color: 'primary'
    },
    {
      year: '2021',
      title: 'Expanded Services',
      description: 'Added mental health services and specialist consultations to our platform.',
      color: 'secondary'
    },
    {
      year: '2022',
      title: 'National Coverage',
      description: 'Expanded operations to serve patients nationwide with 24/7 availability.',
      color: 'accent'
    },
    {
      year: '2023',
      title: 'Innovation Award',
      description: 'Recognized for excellence in healthcare technology and patient care.',
      color: 'success'
    }
  ]
  </script>
  
  <style scoped>
  .hero-section {
    background: linear-gradient(to right, var(--v-background-base), var(--v-surface-base));
  }
  
  .stats {
    background: linear-gradient(45deg, var(--v-primary-base), var(--v-primary-darken-1));
  }
  
  @media (max-width: 600px) {
    .hero-section {
      text-align: center;
    }
    
    .stats .text-h3 {
      font-size: 2rem;
    }
  }
  </style>