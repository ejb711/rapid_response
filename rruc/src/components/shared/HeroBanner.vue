<template>
  <section 
    class="hero-banner" 
    :class="[
      backgroundClass,
      { 'urgent-banner': urgent }
    ]"
  >
    <v-container>
      <v-row :justify="imagePosition === 'right' ? 'start' : 'center'">
        <!-- Text Content -->
        <v-col 
          :cols="12" 
          :md="image ? 6 : 8"
          :class="{'text-center': !image || centered}"
        >
          <!-- Emergency Badge -->
          <v-chip
            v-if="urgent"
            color="primary"
            class="mb-4 urgent-chip"
            size="large"
          >
            <v-icon start icon="mdi-hospital-box" />
            Urgent Care Services
          </v-chip>

          <h1 class="text-h2 font-weight-bold mb-4">
            {{ title }}
          </h1>
          
          <p v-if="subtitle" class="text-body-1 text-medium-emphasis mb-6">
            {{ subtitle }}
          </p>

          <slot name="content"></slot>

          <!-- Action Buttons -->
          <div 
            v-if="primaryAction || secondaryAction"
            class="d-flex flex-wrap"
            :class="buttonAlignment"
            :style="{ gap: '1rem' }"
          >
            <v-btn
              v-if="primaryAction"
              color="primary"
              size="x-large"
              :to="primaryAction.to"
              @click="primaryAction.onClick"
              class="medical-button"
              elevation="2"
            >
              <v-icon start>{{ primaryAction.icon || 'mdi-calendar-clock' }}</v-icon>
              {{ primaryAction.text }}
            </v-btn>

            <v-btn
              v-if="secondaryAction"
              variant="outlined"
              size="x-large"
              :to="secondaryAction.to"
              @click="secondaryAction.onClick"
              class="medical-button-outline"
            >
              <v-icon start>{{ secondaryAction.icon || 'mdi-information' }}</v-icon>
              {{ secondaryAction.text }}
            </v-btn>
          </div>

          <!-- Wait Time Indicator if Urgent -->
          <div v-if="urgent" class="mt-6 d-flex align-center wait-time">
            <v-icon color="success" class="mr-2">mdi-clock-fast</v-icon>
            <span class="text-success font-weight-medium">Current Wait Time: ~15 mins</span>
          </div>
        </v-col>

        <!-- Image -->
        <v-col 
          v-if="image"
          cols="12"
          md="6"
          class="d-flex justify-center align-center"
          :order="imagePosition === 'left' ? 'first' : 'last'"
        >
          <v-img
            :src="image"
            :alt="imageAlt"
            :max-width="imageMaxWidth"
            class="rounded-lg hero-image"
            :class="imageClass"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // Content
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  urgent: {
    type: Boolean,
    default: false
  },
  
  // Image
  image: {
    type: String,
    default: ''
  },
  imageAlt: {
    type: String,
    default: ''
  },
  imagePosition: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right'].includes(value)
  },
  imageMaxWidth: {
    type: [Number, String],
    default: 500
  },
  imageClass: {
    type: String,
    default: ''
  },

  // Layout
  centered: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'gradient'].includes(value)
  },

  // Actions
  primaryAction: {
    type: Object,
    default: null,
  },
  secondaryAction: {
    type: Object,
    default: null,
  }
})

// Computed properties
const backgroundClass = computed(() => ({
  'bg-primary': props.variant === 'primary',
  'bg-gradient': props.variant === 'gradient',
  'bg-default': props.variant === 'default'
}))

const buttonAlignment = computed(() => ({
  'justify-center': props.centered || !props.image,
  'justify-start': !props.centered && props.image
}))
</script>

<style scoped>
.hero-banner {
  padding: 4rem 0;
  background-color: var(--v-background-base);
}

.urgent-banner {
  position: relative;
  overflow: hidden;
}

.urgent-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(196, 30, 58, 0.05), rgba(74, 144, 226, 0.05));
  z-index: 0;
}

.urgent-chip {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

.medical-button {
  text-transform: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.medical-button-outline {
  text-transform: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.wait-time {
  font-family: 'Source Sans Pro', sans-serif;
}

.hero-image {
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

/* Responsive styles */
@media (max-width: 960px) {
  .hero-banner {
    padding: 3rem 0;
  }
}

@media (max-width: 600px) {
  .hero-banner {
    padding: 2rem 0;
    text-align: center;
  }

  .d-flex {
    justify-content: center !important;
  }
}
</style>