<template>
    <v-form
      ref="form"
      v-model="isValid"
      @submit.prevent="handleSubmit"
    >
      <!-- Service Selection -->
      <v-select
        v-model="formData.serviceType"
        :items="serviceTypes"
        label="Type of Service"
        :rules="[rules.required]"
        class="mb-4"
      ></v-select>
  
      <!-- Appointment Date & Time -->
      <v-row>
        <v-col cols="12" md="6">
          <v-date-picker
            v-model="formData.date"
            :min="minDate"
            :max="maxDate"
            class="mb-4"
          ></v-date-picker>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            v-model="formData.timeSlot"
            :items="availableTimeSlots"
            label="Preferred Time"
            :rules="[rules.required]"
            :disabled="!formData.date"
            class="mb-4"
          ></v-select>
        </v-col>
      </v-row>
  
      <!-- Personal Information -->
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
          <v-text-field
            v-model="formData.phone"
            label="Phone Number"
            type="tel"
            :rules="[rules.required, rules.phone]"
          ></v-text-field>
        </v-col>
      </v-row>
  
      <!-- Medical Information -->
      <v-textarea
        v-model="formData.symptoms"
        label="Please describe your symptoms or reason for visit"
        :rules="[rules.required]"
        rows="3"
        class="mb-4"
      ></v-textarea>
  
      <!-- Insurance Information -->
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.insuranceProvider"
            label="Insurance Provider"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.insuranceNumber"
            label="Insurance Member ID"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
      </v-row>
  
      <!-- Terms and Consent -->
      <v-checkbox
        v-model="formData.termsAccepted"
        :rules="[rules.required]"
        label="I agree to the terms and conditions"
        class="mb-4"
      ></v-checkbox>
  
      <!-- Submit Button -->
      <v-btn
        type="submit"
        color="primary"
        block
        :loading="loading"
        :disabled="!isValid || loading"
      >
        Schedule Appointment
      </v-btn>
  
      <!-- Success/Error Alert -->
      <v-alert
        v-if="alert.show"
        :type="alert.type"
        :text="alert.message"
        class="mt-4"
        closable
        @click:close="alert.show = false"
      ></v-alert>
    </v-form>
  </template>
  
  <script setup>
  import { ref, reactive, computed } from 'vue'
  
  const emit = defineEmits(['submit'])
  
  // Form reference for validation
  const form = ref(null)
  const isValid = ref(false)
  const loading = ref(false)
  
  // Form Data
  const formData = reactive({
    serviceType: '',
    date: '',
    timeSlot: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    symptoms: '',
    insuranceProvider: '',
    insuranceNumber: '',
    termsAccepted: false
  })
  
  // Alert State
  const alert = reactive({
    show: false,
    type: 'success',
    message: ''
  })
  
  // Available Services
  const serviceTypes = [
    'General Consultation',
    'Urgent Care',
    'Mental Health Services',
    'Prescription Renewal',
    'Follow-up Visit'
  ]
  
  // Date Range Constraints
  const minDate = computed(() => {
    const date = new Date()
    return date.toISOString().split('T')[0]
  })
  
  const maxDate = computed(() => {
    const date = new Date()
    date.setMonth(date.getMonth() + 2)
    return date.toISOString().split('T')[0]
  })
  
  // Time Slots Generation
  const availableTimeSlots = computed(() => {
    // This would typically come from an API based on selected date
    return [
      '9:00 AM',
      '10:00 AM',
      '11:00 AM',
      '1:00 PM',
      '2:00 PM',
      '3:00 PM',
      '4:00 PM',
      '5:00 PM'
    ]
  })
  
  // Validation Rules
  const rules = {
    required: value => !!value || 'This field is required',
    email: value => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return pattern.test(value) || 'Invalid email address'
    },
    phone: value => {
      const pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
      return pattern.test(value) || 'Invalid phone number'
    }
  }
  
  // Form Submission Handler
  const handleSubmit = async () => {
    if (!isValid.value) return
  
    loading.value = true
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      emit('submit', { ...formData })
      
      alert.type = 'success'
      alert.message = 'Appointment scheduled successfully!'
      alert.show = true
      
      // Reset form after successful submission
      form.value?.reset()
      Object.keys(formData).forEach(key => {
        formData[key] = key === 'termsAccepted' ? false : ''
      })
    } catch (error) {
      alert.type = 'error'
      alert.message = 'Failed to schedule appointment. Please try again.'
      alert.show = true
    } finally {
      loading.value = false
    }
  }
  </script>
  
  <style scoped>
  .v-date-picker {
    width: 100%;
    border: 1px solid var(--v-border-color);
    border-radius: var(--border-radius);
  }
  
  @media (max-width: 600px) {
    .v-date-picker {
      max-width: 100%;
      overflow-x: auto;
    }
  }
  </style>