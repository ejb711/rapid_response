<template>
  <v-card 
    class="service-card h-100" 
    :elevation="elevation"
    :class="{ 'urgent-service': isUrgent }"
  >
    <v-card-item>
      <!-- Urgent Care Badge -->
      <v-chip
        v-if="isUrgent"
        color="primary"
        variant="outlined"
        class="mb-4"
        size="small"
      >
        <v-icon start size="small">mdi-lightning-bolt</v-icon>
        Urgent Care
      </v-chip>

      <!-- Service Icon -->
      <div class="mb-4">
        <v-icon
          :icon="icon"
          :size="iconSize"
          :color="isUrgent ? 'primary' : iconColor"
          class="service-icon"
        />
      </div>

      <!-- Service Title -->
      <v-card-title class="text-h6 font-weight-bold mb-2">{{ title }}</v-card-title>

      <!-- Service Description -->
      <v-card-text class="text-body-1">
        <p class="mb-4">{{ description }}</p>
        
        <!-- Optional Features List -->
        <v-list v-if="features?.length" density="compact" class="bg-transparent features-list">
          <v-list-item
            v-for="feature in features"
            :key="feature"
            :prepend-icon="checkIcon"
            :title="feature"
            class="px-0 feature-item"
          ></v-list-item>
        </v-list>

        <!-- Optional Wait Time -->
        <div v-if="waitTime" class="d-flex align-center mt-4 wait-time">
          <v-icon color="success" size="small" class="mr-2">mdi-clock-outline</v-icon>
          <span class="text-caption text-success">
            Estimated wait: {{ waitTime }}
          </span>
        </div>

        <!-- Optional Price Display -->
        <div v-if="price" class="mt-4 d-flex align-center justify-space-between">
          <span class="text-subtitle-1 font-weight-medium">Starting at</span>
          <span class="text-h6 font-weight-bold text-primary">${{ price }}</span>
        </div>
      </v-card-text>
    </v-card-item>

    <!-- Action Button -->
    <v-card-actions class="pa-4 pt-0">
      <v-btn
        :variant="buttonVariant"
        :color="isUrgent ? 'primary' : buttonColor"
        :to="link"
        block
        class="medical-button"
        @click="$emit('action-click')"
      >
        <v-icon start>{{ buttonIcon }}</v-icon>
        {{ buttonText }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ''
  },
  features: {
    type: Array,
    default: () => []
  },
  price: {
    type: [Number, String],
    default: null
  },
  waitTime: {
    type: String,
    default: ''
  },
  isUrgent: {
    type: Boolean,
    default: false
  },
  // Customization props
  iconSize: {
    type: String,
    default: 'large'
  },
  iconColor: {
    type: String,
    default: 'secondary'
  },
  checkIcon: {
    type: String,
    default: 'mdi-check-circle'
  },
  elevation: {
    type: [Number, String],
    default: 1
  },
  buttonText: {
    type: String,
    default: 'Learn More'
  },
  buttonIcon: {
    type: String,
    default: 'mdi-arrow-right'
  },
  buttonVariant: {
    type: String,
    default: 'elevated'
  },
  buttonColor: {
    type: String,
    default: 'secondary'
  }
})

defineEmits(['action-click'])
</script>

<style scoped>
.service-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid var(--v-border-color-base);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 25px rgba(0,0,0,0.1) !important;
}

.urgent-service {
  border: 2px solid var(--v-primary-base);
}

.service-icon {
  padding: 12px;
  border-radius: 12px;
  background: rgba(var(--v-theme-primary), 0.1);
}

.features-list {
  background-color: transparent !important;
}

.feature-item {
  padding-left: 0 !important;
}

.medical-button {
  text-transform: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.wait-time {
  font-family: 'Source Sans Pro', sans-serif;
}
</style>