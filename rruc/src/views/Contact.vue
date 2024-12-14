<template>
    <div class="contact">
      <!-- Hero Section -->
      <section class="hero-section py-12">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
              <h1 class="text-h2 font-weight-bold mb-4">
                We're Here to Help
              </h1>
              <p class="text-body-1 mb-6">
                Have questions about our healthcare services or your virtual visit? Our team is available to assist you.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </section>
  
      <!-- Contact Options -->
      <section class="contact-options py-16">
        <v-container>
          <v-row>
            <!-- Quick Contact Cards -->
            <v-col cols="12" md="4">
              <v-card class="mb-4">
                <v-card-item>
                  <v-icon
                    icon="mdi-phone"
                    color="primary"
                    size="large"
                    class="mb-4"
                  ></v-icon>
                  <v-card-title>Call Us</v-card-title>
                  <v-card-text>
                    <p class="mb-2">Support Line:</p>
                    <p class="font-weight-bold">985-300-6132</p>
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>
  
            <v-col cols="12" md="4">
              <v-card class="mb-4">
                <v-card-item>
                  <v-icon
                    icon="mdi-email"
                    color="primary"
                    size="large"
                    class="mb-4"
                  ></v-icon>
                  <v-card-title>Email Us</v-card-title>
                  <v-card-text>
                    <p class="mb-2">Support Email:</p>
                    <p class="font-weight-bold">support@rrurgentcare.com</p>
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>
  
            <v-col cols="12" md="4">
              <v-card class="mb-4">
                <v-card-item>
                  <v-icon
                    icon="mdi-chat"
                    color="primary"
                    size="large"
                    class="mb-4"
                  ></v-icon>
                  <v-card-title>Live Chat</v-card-title>
                  <v-card-text>
                    <p class="mb-4">Available Monday-Friday</p>
                    <v-btn
                      color="primary"
                      @click="startChat"
                    >
                      Start Chat
                    </v-btn>
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
  
      <!-- Contact Form Section -->
      <section class="contact-form py-16 bg-grey-lighten-4">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-card>
                <v-card-title class="text-h5 pa-4">
                  Send Us a Message
                </v-card-title>
                <v-card-text>
                  <v-form
                    ref="form"
                    v-model="isValid"
                    @submit.prevent="handleSubmit"
                  >
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="formData.firstName"
                          label="First Name"
                          :rules="[rules.required]"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="formData.lastName"
                          label="Last Name"
                          :rules="[rules.required]"
                        ></v-text-field>
                      </v-col>
                    </v-row>
  
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="formData.email"
                          label="Email"
                          type="email"
                          :rules="[rules.required, rules.email]"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="formData.subject"
                          :items="subjectOptions"
                          label="Subject"
                          :rules="[rules.required]"
                        ></v-select>
                      </v-col>
                    </v-row>
  
                    <v-textarea
                      v-model="formData.message"
                      label="Message"
                      :rules="[rules.required]"
                      rows="4"
                    ></v-textarea>
  
                    <v-btn
                      type="submit"
                      color="primary"
                      block
                      :loading="loading"
                      :disabled="!isValid || loading"
                      class="mt-4"
                    >
                      Send Message
                    </v-btn>
                  </v-form>
  
                  <v-alert
                    v-if="alert.show"
                    :type="alert.type"
                    :text="alert.message"
                    class="mt-4"
                    closable
                    @click:close="alert.show = false"
                  ></v-alert>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
  
      <!-- FAQ Section -->
      <section class="faq py-16">
        <v-container>
          <h2 class="text-h4 text-center mb-12">Common Questions</h2>
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
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  
  // Form state
  const form = ref(null)
  const isValid = ref(false)
  const loading = ref(false)
  
  const formData = reactive({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const alert = reactive({
    show: false,
    type: 'success',
    message: ''
  })
  
  // Form options
  const subjectOptions = [
    'General Inquiry',
    'Technical Support',
    'Billing Question',
    'Appointment Issue',
    'Other'
  ]
  
  // Validation rules
  const rules = {
    required: value => !!value || 'This field is required',
    email: value => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return pattern.test(value) || 'Invalid email address'
    }
  }
  
  // FAQ data
  const faqs = [
    {
      question: 'How quickly can I expect a response?',
      answer: 'We aim to respond to all inquiries within 24 hours during business days.'
    },
    {
      question: 'What are your support hours?',
      answer: 'Our phone support is available 24/7. Live chat is available Monday-Friday, 9 AM - 5 PM EST.'
    },
    {
      question: 'How do I schedule an urgent appointment?',
      answer: 'For urgent care needs, please call our 24/7 support line at 1-800-HEALTH.'
    },
    {
      question: 'Can I update my insurance information?',
      answer: 'Yes, you can update your insurance information through your patient portal or by contacting our support team.'
    }
  ]
  
  // Methods
  const handleSubmit = async () => {
    if (!isValid.value) return
  
    loading.value = true
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      alert.type = 'success'
      alert.message = 'Message sent successfully! We\'ll get back to you soon.'
      alert.show = true
      
      form.value?.reset()
      Object.keys(formData).forEach(key => {
        formData[key] = ''
      })
    } catch (error) {
      alert.type = 'error'
      alert.message = 'Failed to send message. Please try again.'
      alert.show = true
    } finally {
      loading.value = false
    }
  }
  
  const startChat = () => {
    // Implement chat functionality
    console.log('Starting chat...')
  }
  </script>
  
  <style scoped>
  .hero-section {
    background: linear-gradient(to right, var(--v-background-base), var(--v-surface-base));
  }
  
  @media (max-width: 600px) {
    .hero-section {
      text-align: center;
    }
  }
  </style>