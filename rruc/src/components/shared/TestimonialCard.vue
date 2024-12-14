<template>
    <v-card class="testimonial-card h-100" :elevation="elevation">
      <v-card-item>
        <!-- Author Image (if provided) -->
        <div v-if="authorImage" class="mb-4 d-flex justify-center">
          <v-avatar size="80">
            <v-img
              :src="authorImage"
              :alt="authorName"
              cover
            />
          </v-avatar>
        </div>
  
        <!-- Rating -->
        <div v-if="showRating" class="mb-4">
          <v-rating
            :model-value="rating"
            :length="maxRating"
            :half-increments="allowHalfStars"
            color="amber"
            density="compact"
            readonly
          ></v-rating>
          <div v-if="showRatingValue" class="text-caption text-grey mt-1">
            {{ rating }} out of {{ maxRating }}
          </div>
        </div>
  
        <!-- Quote -->
        <v-card-text class="text-body-1">
          <span class="quote-mark">"</span>
          {{ quote }}
          <span class="quote-mark">"</span>
        </v-card-text>
  
        <!-- Author Info -->
        <v-card-subtitle class="pt-4">
          <div class="font-weight-medium">{{ authorName }}</div>
          <div v-if="authorTitle" class="text-caption">{{ authorTitle }}</div>
          <div v-if="date" class="text-caption text-grey mt-1">{{ date }}</div>
        </v-card-subtitle>
  
        <!-- Optional Verification Badge -->
        <div 
          v-if="verified" 
          class="d-flex align-center mt-2"
        >
          <v-icon
            icon="mdi-check-circle"
            color="success"
            size="small"
            class="mr-1"
          ></v-icon>
          <span class="text-caption text-success">Verified Patient</span>
        </div>
      </v-card-item>
    </v-card>
  </template>
  
  <script setup>
  defineProps({
    // Content
    quote: {
      type: String,
      required: true
    },
    authorName: {
      type: String,
      required: true
    },
    authorTitle: {
      type: String,
      default: ''
    },
    authorImage: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    
    // Rating
    rating: {
      type: Number,
      default: 5
    },
    maxRating: {
      type: Number,
      default: 5
    },
    showRating: {
      type: Boolean,
      default: true
    },
    showRatingValue: {
      type: Boolean,
      default: false
    },
    allowHalfStars: {
      type: Boolean,
      default: false
    },
    
    // Verification
    verified: {
      type: Boolean,
      default: false
    },
    
    // Card Style
    elevation: {
      type: [Number, String],
      default: 1
    }
  })
  </script>
  
  <style scoped>
  .testimonial-card {
    transition: transform 0.2s ease;
  }
  
  .testimonial-card:hover {
    transform: translateY(-4px);
  }
  
  .quote-mark {
    font-size: 1.5em;
    font-weight: bold;
    color: var(--v-primary-lighten-2);
  }
  
  .v-card-text {
    font-style: italic;
    line-height: 1.6;
  }
  </style>