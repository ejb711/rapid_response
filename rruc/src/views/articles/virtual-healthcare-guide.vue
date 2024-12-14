// App.vue
<template>
  <v-app>
    <v-main>
      <v-container class="article-container py-12">
        <!-- Article Header -->
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <div class="text-center mb-16">
              <v-chip
                color="primary"
                variant="outlined"
                class="mb-6"
                size="large"
              >
                Healthcare Innovation
              </v-chip>
              
              <h1 class="text-h2 font-weight-bold mb-4">
                Virtual Urgent Care: A New Era in Convenient Healthcare
              </h1>
              
              <p class="text-subtitle-1 text-medium-emphasis">
                December 8, 2024
              </p>
            </div>

            <!-- Featured Image -->
            <v-img
              src="/src/assets/carecompass/virtual-visit.jpg"
              height="600"
              cover
              class="rounded-lg mb-8"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <p class="text-caption text-center mb-16 font-italic">
              Virtual urgent care platforms are revolutionizing healthcare delivery through innovative technology solutions
            </p>

            <!-- Introduction -->
            <p class="text-h5 font-weight-regular mb-16 text-grey-darken-2">
              The healthcare landscape is undergoing a transformative evolution, with virtual urgent care emerging as a cornerstone of modern medical service delivery. This innovative approach to healthcare is fundamentally changing how patients access medical services, offering unprecedented convenience while maintaining the highest standards of care quality and patient satisfaction.
            </p>

            <!-- Key Benefits Card -->
            <v-card
              class="mb-16 bg-blue-lighten-5"
              elevation="2"
            >
              <v-card-title class="text-h4 pa-6">
                Key Benefits at a Glance
              </v-card-title>
              
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card
                      variant="outlined"
                      class="h-100"
                    >
                      <v-card-title>Immediate Access</v-card-title>
                      <v-card-text>
                        Connect with qualified healthcare providers within minutes from any location, eliminating traditional barriers to healthcare access. Our platform ensures swift connection times while maintaining high standards of care delivery.
                      </v-card-text>
                    </v-card>
                  </v-col>
                  
                  <v-col cols="12" md="6">
                    <v-card
                      variant="outlined"
                      class="h-100"
                    >
                      <v-card-title>Reduced Exposure</v-card-title>
                      <v-card-text>
                        Minimize contact with contagious illnesses by avoiding crowded waiting rooms. This feature proves especially valuable during peak illness seasons and public health concerns, ensuring both patient and community safety.
                      </v-card-text>
                    </v-card>
                  </v-col>
                  
                  <v-col cols="12" md="6">
                    <v-card
                      variant="outlined"
                      class="h-100"
                    >
                      <v-card-title>Prescription Services</v-card-title>
                      <v-card-text>
                        Experience seamless medication management with direct prescription services to your preferred pharmacy. Our integrated system ensures accurate prescription handling and swift processing for immediate treatment initiation.
                      </v-card-text>
                    </v-card>
                  </v-col>
                  
                  <v-col cols="12" md="6">
                    <v-card
                      variant="outlined"
                      class="h-100"
                    >
                      <v-card-title>Expanded Availability</v-card-title>
                      <v-card-text>
                        Access medical care beyond traditional clinic hours, including evenings and weekends. Our extended service hours accommodate diverse schedules and urgent care needs, ensuring healthcare accessibility when you need it most.
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <!-- Main Content Sections -->
            <section class="mb-16">
              <h2 class="text-h3 font-weight-bold mb-6">Convenience Redefined</h2>
              <p class="text-body-1 mb-6">
                Virtual urgent care fundamentally transforms the healthcare experience by eliminating the need for physical travel to medical facilities. Through sophisticated yet user-friendly technology, patients can now consult with healthcare professionals from any location using common devices such as smartphones, tablets, or computers. This revolutionary approach particularly benefits individuals managing demanding schedules, those with mobility challenges, and residents in remote areas with limited access to traditional healthcare facilities.
              </p>
              <p class="text-body-1 mb-6">
                The platform's intuitive interface ensures that patients of all technological backgrounds can easily navigate the system, schedule appointments, and connect with healthcare providers. This democratization of healthcare access represents a significant step forward in addressing healthcare disparities and ensuring equitable access to medical services.
              </p>
            </section>

            <section class="mb-16">
              <h2 class="text-h3 font-weight-bold mb-6">Enhanced Safety Protocol</h2>
              <p class="text-body-1 mb-6">
                The virtual urgent care model significantly reduces exposure risks associated with traditional medical visits. By enabling patients to seek medical attention from home, this system creates a safer healthcare environment for both patients and healthcare providers. This approach proves particularly valuable during seasonal illness outbreaks, public health emergencies, and for immunocompromised individuals requiring regular medical consultation.
              </p>
              <p class="text-body-1 mb-6">
                Furthermore, the virtual platform incorporates advanced security measures to protect patient privacy and ensure confidential communication between patients and healthcare providers. This commitment to safety extends beyond physical well-being to encompass comprehensive data protection and secure medical information handling.
              </p>
            </section>

            <section class="mb-16">
              <h2 class="text-h3 font-weight-bold mb-6">Streamlined Prescription Management</h2>
              <p class="text-body-1 mb-6">
                The integration of prescription services within the virtual urgent care platform represents a significant advancement in healthcare delivery. Healthcare providers can electronically transmit prescriptions directly to the patient's preferred pharmacy, eliminating potential transcription errors and reducing wait times. This streamlined process ensures that patients can begin their prescribed treatments promptly, improving therapeutic outcomes.
              </p>
              <p class="text-body-1 mb-6">
                The system also maintains comprehensive medication records, enabling healthcare providers to review current medications, check for potential interactions, and ensure appropriate dosing. This integrated approach to prescription management enhances patient safety and treatment efficacy while providing a convenient, efficient service.
              </p>
            </section>

            <section class="mb-16">
              <h2 class="text-h3 font-weight-bold mb-6">Future of Healthcare Delivery</h2>
              <p class="text-body-1 mb-6">
                Virtual urgent care represents more than a temporary solution; it embodies the future of healthcare delivery. As technology continues to advance, these platforms will incorporate additional features such as artificial intelligence-driven symptom assessment, integrated health monitoring devices, and enhanced communication tools. This ongoing evolution ensures that virtual urgent care remains at the forefront of healthcare innovation.
              </p>
              <p class="text-body-1">
                The increasing adoption of virtual urgent care services by healthcare providers and insurance companies further validates its role in modern medicine. This transformation in healthcare delivery continues to drive improvements in accessibility, efficiency, and patient outcomes, setting new standards for medical care in the digital age.
              </p>
            </section>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.article-container {
  font-family: 'Georgia', serif;
  line-height: 1.8;
}

.text-body-1 {
  text-align: justify;
  font-size: 1.1rem;
}

.v-card-title {
  font-family: 'Georgia', serif;
}
</style>