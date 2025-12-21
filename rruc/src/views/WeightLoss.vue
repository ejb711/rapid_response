<!--
  Filename: WeightLoss.vue
  Purpose: Medical weight loss program page with Tirzepatide/Semaglutide pricing
  Last Updated: December 21, 2024
-->
<template>
  <main class="weight-loss">
    <!-- Hero Section -->
    <section 
      class="hero-section py-12"
      aria-labelledby="hero-title"
    >
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <h1 
              id="hero-title"
              class="text-h2 font-weight-bold mb-4"
            >
              Medical Weight Loss Solutions
            </h1>
            <p class="text-body-1 mb-6">
              Achieve your weight loss goals with our medically supervised program featuring FDA-approved medications. Our comprehensive approach combines prescription medications with personalized support for sustainable results.
            </p>
            <v-card class="pa-4 bg-primary-lighten-5">
              <p class="text-h6 mb-2">To Schedule an Appointment:</p>
              <p class="text-body-1">Call <strong>985-300-6123</strong></p>
              <p class="text-body-1">Monday - Friday: 8:00 AM - 5:30 PM</p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              :src="beforeAfterImage"
              alt="Weight loss transformation"
              class="rounded-lg"
              height="400"
              cover
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Medication Options Section -->
  <section 
    class="medication-section py-12 bg-grey-lighten-4"
    aria-labelledby="medication-heading"
  >
    <v-container>
      <!-- Section Header -->
      <h2 
        id="medication-heading" 
        class="text-h4 text-center mb-12"
      >
        Treatment Options
      </h2>

      <!-- Medication Comparison Cards -->
      <v-row>
        <!-- Tirzepatide Card -->
        <v-col cols="12" md="6">
          <v-card class="h-100 pa-6">
            <h3 class="text-h5 mb-4">Tirzepatide 16.75 mg/ml</h3>
            <p class="text-body-2 text-grey mb-4">(Generic Mounjaro)</p>
            <p class="text-body-1 mb-4">
              This advanced medication achieves superior weight loss results through its unique dual-action approach, targeting both GLP-1 and GIP hormones. Clinical studies show 82% of patients achieve at least 5% weight loss, with many reaching 15% or more.
            </p>
            <v-table density="compact" class="mb-4">
              <thead>
                <tr>
                  <th>Dose</th>
                  <th>Weeks of Medication</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2.5 mg</td>
                  <td>4 weeks</td>
                  <td>$260</td>
                </tr>
                <tr>
                  <td>5 mg</td>
                  <td>5 weeks</td>
                  <td>$300</td>
                </tr>
                <tr>
                  <td>7.5 mg</td>
                  <td>5 weeks</td>
                  <td>$320</td>
                </tr>
                <tr>
                  <td>10 mg</td>
                  <td>5 weeks</td>
                  <td>$355</td>
                </tr>
                <tr>
                  <td>12.5 mg</td>
                  <td>4 weeks</td>
                  <td>$365</td>
                </tr>
                <tr>
                  <td>15 mg</td>
                  <td>4 weeks</td>
                  <td>$375</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>

        <!-- Semaglutide Card -->
        <v-col cols="12" md="6">
          <v-card class="h-100 pa-6">
            <h3 class="text-h5 mb-4">Semaglutide 2.65 mg/ml</h3>
            <p class="text-body-2 text-grey mb-4">(Generic Ozempic)</p>
            <p class="text-body-1 mb-4">
              A well-established medication that focuses specifically on GLP-1 receptors, offering proven weight loss benefits. Clinical studies show 66.5% of patients achieve 5% or more weight loss with consistent, steady results.
            </p>
            <v-table density="compact" class="mb-4">
              <thead>
                <tr>
                  <th>Dose</th>
                  <th>Weeks of Medication</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0.25 mg</td>
                  <td>6 weeks</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>0.5 mg</td>
                  <td>5 weeks</td>
                  <td>$220</td>
                </tr>
                <tr>
                  <td>1 mg</td>
                  <td>4 weeks</td>
                  <td>$235</td>
                </tr>
                <tr>
                  <td>1.7 mg</td>
                  <td>5 weeks</td>
                  <td>$245</td>
                </tr>
                <tr>
                  <td>2.4 mg</td>
                  <td>4 weeks</td>
                  <td>$255</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
      </v-row>

      <!-- Pricing Footnotes -->
      <v-row class="mt-4">
        <v-col cols="12">
          <p class="text-body-2 text-grey text-center">
            *Prices include medication, supplies, 1-2 day cold-chain shipping, and visit cost.<br>
            *Doses can be adjusted and tailored for desired results.
          </p>
        </v-col>
      </v-row>

      <!-- Research Citation -->
      <v-row class="mt-8">
        <v-col cols="12">
          <v-card class="pa-4 bg-grey-lighten-5">
            <p class="text-body-2 text-center mb-0">
              Based on clinical research published in
              <v-btn
                variant="text"
                density="compact"
                href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2821080"
                target="_blank"
                rel="noopener noreferrer"
                class="text-none pa-0 font-weight-medium"
              >
                JAMA Internal Medicine (2024)
              </v-btn>
              comparing 18,386 patients receiving either medication.
              <v-tooltip location="top">
                <template v-slot:activator="{ props }">
                  <v-icon
                    icon="mdi-information"
                    size="small"
                    color="primary"
                    class="ms-1"
                    v-bind="props"
                  />
                </template>
                <span>Rodriguez PJ, et al. Semaglutide vs Tirzepatide for Weight Loss in Adults With Overweight or Obesity.</span>
              </v-tooltip>
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>

    <!-- Results Section -->
    <section 
      class="results-section py-12"
      aria-labelledby="results-heading"
    >
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <h2 
              id="results-heading"
              class="text-h4 mb-6"
            >
              Real Results, Sustainable Success
            </h2>
            <p class="text-body-1 mb-4">
              Our medical weight loss program offers several advantages over traditional weight loss methods:
            </p>
            <ul class="ml-6 mb-6">
              <li class="mb-2">No strict dieting or calorie counting required</li>
              <li class="mb-2">No processed meal replacements or shakes</li>
              <li class="mb-2">Eat what you want, when you want - just less of it</li>
              <li class="mb-2">Reduced cravings and better portion control</li>
              <li>Medical supervision and ongoing support</li>
            </ul>
            <v-img
              :src="scaleImage"
              alt="Weight scale showing weight loss progress"
              class="rounded-lg mt-4"
              height="300"
              cover
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-6">
              <h3 class="text-h5 mb-4">Program Cost Comparison</h3>
              <v-table>
                <thead>
                  <tr>
                    <th>Program</th>
                    <th>Monthly Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Our Program</td>
                    <td>$200 - $375 (all-inclusive)*</td>
                  </tr>
                  <tr>
                    <td>Nutrisystem</td>
                    <td>$300-400 per month</td>
                  </tr>
                  <tr>
                    <td>Optavia</td>
                    <td>$400-500 per month</td>
                  </tr>
                  <tr>
                    <td>Jenny Craig</td>
                    <td>$400-800 per month</td>
                  </tr>
                </tbody>
              </v-table>
              <p class="text-body-2 text-grey mt-2">*Includes medication, supplies, shipping, and visit</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Process Section -->
    <section 
      class="process-section py-12 bg-grey-lighten-4"
      aria-labelledby="process-heading"
    >
      <v-container>
        <h2 
          id="process-heading" 
          class="text-h4 text-center mb-12"
        >
          Getting Started
        </h2>
        <v-timeline align="start">
          <v-timeline-item
            dot-color="primary"
            size="small"
          >
            <div class="mb-4">
              <h3 class="text-h6 mb-2">Initial Consultation</h3>
              <p>Schedule a consultation with our medical team to discuss your weight loss goals and medical history. Cost: $50</p>
            </div>
          </v-timeline-item>

          <v-timeline-item
            dot-color="primary"
            size="small"
          >
            <div class="mb-4">
              <h3 class="text-h6 mb-2">Personalized Treatment Plan</h3>
              <p>Receive a customized treatment plan including medication selection and dosing schedule based on your needs.</p>
            </div>
          </v-timeline-item>

          <v-timeline-item
            dot-color="primary"
            size="small"
          >
            <div class="mb-4">
              <h3 class="text-h6 mb-2">Ongoing Support</h3>
              <p>Regular follow-up appointments to monitor your progress and adjust treatment as needed. Monthly follow-ups: $25</p>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </section>

    <!-- Side Effects Management Section -->
    <section 
      class="side-effects-section py-12"
      aria-labelledby="side-effects-heading"
    >
   <v-container>
        <h2 
          id="side-effects-heading" 
          class="text-h4 text-center mb-12"
        >
          Your Comfort Matters
        </h2>
        <v-row>
          <v-col cols="12" md="6">
            <v-img
              :src="bigPantsImage"
              alt="Person showing weight loss success"
              class="rounded-lg mb-6"
              height="400"
              cover
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-6">
              <h3 class="text-h5 mb-4">What to Expect</h3>
              <p class="text-body-1 mb-4">
                Most of our patients experience minimal or no side effects. When they do occur, they're usually mild and easy to manage. Our medical team will work with you every step of the way to ensure your comfort.
              </p>
              <v-list>
                <v-list-item>
                  <v-list-item-title class="font-weight-bold">Occasional Mild Nausea</v-list-item-title>
                  <v-list-item-subtitle>Usually improves within a few days. We can recommend simple solutions if needed.</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="font-weight-bold">Minor Stomach Discomfort</v-list-item-title>
                  <v-list-item-subtitle>Typically mild and manageable with common medicines from your local pharmacy.</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="font-weight-bold">Stay Hydrated</v-list-item-title>
                  <v-list-item-subtitle>Drinking plenty of water throughout the day helps you feel your best.</v-list-item-subtitle>
                </v-list-item>
              </v-list>
              <p class="text-body-1 mt-4">
                Remember, our medical team is always here to answer your questions and ensure you're comfortable with your treatment.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

 <!-- Pharmacy Section -->
 <section 
    class="pharmacy-quality-section py-12 bg-grey-lighten-4"
    aria-labelledby="pharmacy-heading"
  >
    <v-container>
      <h2 
        id="pharmacy-heading" 
        class="text-h4 text-center mb-12"
      >
        Partnering with Excellence in Pharmaceutical Care
      </h2>

      <v-row align="center" class="mb-16">
        <v-col cols="12" md="6">
          <div class="pe-md-8">
            <h3 class="text-h5 mb-4">Quality You Can Trust</h3>
            <p class="text-body-1 mb-4">
              To ensure you receive the highest quality medications, we've partnered with a leading compounding pharmacy that maintains exceptional standards in pharmaceutical preparation. Their state-of-the-art 60,000-square-foot facility represents the gold standard in medication compounding and safety.
            </p>
            <p class="text-body-1">
              This partnership allows us to provide you with customized medications prepared under stringent quality controls, while our medical team focuses on providing personalized care and monitoring your progress.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            :src="labStock1"
            alt="Professional pharmaceutical laboratory facility"
            class="rounded-lg"
            height="400"
            cover
          />
        </v-col>
      </v-row>

      <v-row align="center" class="mb-16">
        <v-col cols="12" md="6" order="2" order-md="1">
          <v-img
            :src="labStock2"
            alt="Advanced pharmaceutical testing equipment"
            class="rounded-lg"
            height="400"
            cover
          />
        </v-col>
        <v-col cols="12" md="6" order="1" order-md="2">
          <div class="ps-md-8">
            <h3 class="text-h5 mb-4">Why Pharmacy Standards Matter for Your Care</h3>
            <p class="text-body-1 mb-4">
              Our partner pharmacy holds accreditation from the Pharmacy Compounding Accreditation Board (PCAB), demonstrating their commitment to excellence. This certification means every medication is prepared following strict protocols that exceed industry requirements.
            </p>
            <p class="text-body-1">
              Each medication undergoes thorough testing before being dispensed, ensuring consistent quality and potency. This attention to detail means you can trust that every dose is precisely prepared to support your treatment goals.
            </p>
            <v-card class="pa-4 mt-4 bg-primary-lighten-5">
              <p class="text-body-1 mb-0">
                <strong>What this means for you:</strong> When you receive your medication, you can be confident it has been prepared with precision, tested for quality, and handled with care every step of the way.
              </p>
            </v-card>
          </div>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col cols="12">
          <v-card class="pa-6">
            <h3 class="text-h5 mb-4">Our Commitment to Quality Medications</h3>
            <v-row>
              <v-col cols="12" md="4">
                <div class="text-center mb-4">
                  <v-icon
                    icon="mdi-check-circle"
                    color="primary"
                    size="x-large"
                    class="mb-2"
                  />
                  <h4 class="text-h6 mb-2">FDA-Registered Materials</h4>
                  <p class="text-body-2">
                    All ingredients sourced from verified suppliers, ensuring pharmaceutical-grade quality
                  </p>
                </div>
              </v-col>
              <v-col cols="12" md="4">
                <div class="text-center mb-4">
                  <v-icon
                    icon="mdi-test-tube"
                    color="primary"
                    size="x-large"
                    class="mb-2"
                  />
                  <h4 class="text-h6 mb-2">Rigorous Testing</h4>
                  <p class="text-body-2">
                    Every batch verified through comprehensive quality control measures
                  </p>
                </div>
              </v-col>
              <v-col cols="12" md="4">
                <div class="text-center mb-4">
                  <v-icon
                    icon="mdi-shield-check"
                    color="primary"
                    size="x-large"
                    class="mb-2"
                  />
                  <h4 class="text-h6 mb-2">Professional Oversight</h4>
                  <p class="text-body-2">
                    Expert pharmacists and chemists supervise every step of the preparation process
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>

    <!-- FAQ Section -->
    <section 
      class="faq-section py-12 bg-grey-lighten-4"
      aria-labelledby="faq-heading"
    >
      <v-container>
        <h2 
          id="faq-heading" 
          class="text-h4 text-center mb-12"
        >
          Frequently Asked Questions
        </h2>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>When should I start seeing results?</v-expansion-panel-title>
            <v-expansion-panel-text>
              Most patients see results within 7 days, though it can take up to 2-3 weeks for full effect.
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>Do I need to follow a specific diet?</v-expansion-panel-title>
            <v-expansion-panel-text>
              No specific diet is required. While a healthy diet will enhance results, there's no need for calorie counting or special meal plans. The medication helps you naturally eat less by reducing appetite and cravings.
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>How long will I stay on the medicine?</v-expansion-panel-title>
            <v-expansion-panel-text>
              Studies show the medicine is safe for long-term use. Once you reach your goal weight, we can lower you to half the success dose weekly. As long as you maintain your goal weight, we can extend your maintenance dose to every 10-14 days.
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>What happens if I stop taking the medication?</v-expansion-panel-title>
            <v-expansion-panel-text>
              You can stop the medication at any time. However, you'll need to maintain discipline in controlling cravings and hunger. As with any weight loss method, including bariatric surgery, it's possible to regain weight if you return to previous eating habits or become sedentary.
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>How is the medication administered?</v-expansion-panel-title>
            <v-expansion-panel-text>
              Both medications are administered as once-weekly injections using a fine insulin needle. You'll receive complete training on proper injection technique during your initial visit.
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </section>

    <!--Switch Section-->
    <section 
    class="medication-switch-section py-8"
    aria-labelledby="switch-heading"
  >
    <v-container>
      <v-card class="pa-6">
        <v-row align="center">
          <v-col cols="auto">
            <v-icon
              icon="mdi-swap-horizontal-circle"
              color="primary"
              size="x-large"
              class="me-4"
            />
          </v-col>
          <v-col>
            <h3 
              id="switch-heading"
              class="text-h5 mb-2"
            >
              Flexible Treatment Options
            </h3>
            <p class="text-body-1 mb-0">
              Already using semaglutide or tirzepatide? We understand that finding the right medication is important for your success. During your visit, our medical team can evaluate your current treatment and help you transition between medications if appropriate. We'll ensure a smooth switch by calculating the correct equivalent dosage and timing, always prioritizing your comfort and results.
            </p>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </section>

    <!-- CTA Section -->
    <section 
      class="cta-section py-12"
      aria-labelledby="cta-heading"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 
              id="cta-heading"
              class="text-h4 mb-6"
            >
              Ready to Start Your Weight Loss Journey?
            </h2>
            <v-card class="pa-6 text-center">
              <p class="text-h5 mb-2">Call to Schedule Your Consultation</p>
              <p class="text-h4 mb-2"><strong>985-300-6123</strong></p>
              <p class="text-body-1">Monday - Friday: 8:00 AM - 5:30 PM</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import beforeAfterImage from '@/assets/stock/weightloss/bellyFat.jpg'
import scaleImage from '@/assets/stock/weightloss/scale.jpg'
import bigPantsImage from '@/assets/stock/weightloss/bigPants.jpg'
import labStock1 from '@/assets/stock/weightloss/labStock1.jpg'
import labStock2 from '@/assets/stock/weightloss/labStock2.jpg'

useHead({
  title: 'Medical Weight Loss Program - Rapid Response Urgent Care Morgan City',
  meta: [
    {
      name: 'description',
      content: 'Achieve your weight loss goals with FDA-approved medications like Tirzepatide and Semaglutide. Medically supervised weight loss program in Morgan City, LA.'
    },
    {
      name: 'keywords',
      content: 'weight loss, Tirzepatide, Semaglutide, Mounjaro, Ozempic, Morgan City, medical weight loss, prescription weight loss'
    },
    {
      property: 'og:title',
      content: 'Medical Weight Loss Program - Rapid Response Urgent Care Morgan City'
    },
    {
      property: 'og:description',
      content: 'FDA-approved weight loss medications with medical supervision. Serving Morgan City and surrounding areas. Call 985-300-6123 to schedule a consultation.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:image',
      content: beforeAfterImage
    }
  ]
})
</script>

<style scoped>
.hero-section {
  background: linear-gradient(to right, var(--v-background-base), var(--v-surface-base));
}

.medication-section {
  border-bottom: 1px solid #e0e0e0;
}

@media (max-width: 600px) {
  .hero-section {
    text-align: center;
  }
  
  .medication-section,
  .process-section,
  .faq-section,
  .cta-section {
    text-align: center;
    padding: 4rem 0;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

/* High contrast improvements */
@media (prefers-contrast: high) {
  .text-medium-emphasis {
    color: #000000 !important;
  }
  
  .bg-grey-lighten-4 {
    background-color: #ffffff !important;
  }
}

.pharmacy-quality-section {
  background: linear-gradient(to right, var(--v-background-base), var(--v-surface-base));
}

@media (max-width: 600px) {
  .pharmacy-quality-section {
    text-align: center;
  }
}

.medication-switch-section {
  background: linear-gradient(to right, var(--v-background-base), var(--v-surface-base));
}

.wrapping-subtitle {
  white-space: normal !important;
  line-height: 1.4 !important;
  overflow: visible !important;
  text-overflow: unset !important;
  width: 100% !important;
}


</style>