<script setup>
import { ref, onMounted } from 'vue'

const showContent = ref(false)

onMounted(() => {
  setTimeout(() => {
    showContent.value = true
  }, 500)
})
</script>

<template>
  <main class="bg-gradient-to-b from-teal-100 to-blue-50 min-h-screen pt-20">
    <!-- Hero Section -->
    <section
      id="home"
      class="relative flex flex-col items-center justify-center text-center py-20 px-4"
    >
      <h1
        class="text-4xl md:text-6xl font-bold text-teal-700 transition-opacity duration-1000"
        :class="{ 'opacity-100': showContent, 'opacity-0': !showContent }"
      >
        Benvenuti nella vostra Amministrazione Condominiale
      </h1>
      <p
        class="mt-4 text-lg md:text-xl text-teal-600 transition-opacity duration-1000 delay-200"
        :class="{ 'opacity-100': showContent, 'opacity-0': !showContent }"
      >
        Affidatevi a noi per una gestione trasparente, sicura e professionale.
      </p>
      <div
        class="mt-8 w-full max-w-lg h-64 bg-gray-300 rounded-lg shadow-lg transition-transform duration-1000"
        :class="{ 'scale-100': showContent, 'scale-90': !showContent }"
      >
        <!-- Placeholder for hero image -->
      </div>
      <a
        href="#why-choose-us"
        class="mt-8 inline-block bg-teal-600 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-teal-700 transition-colors"
      >
        Scopri perché sceglierci
      </a>
    </section>

    <!-- Why Choose Us Section -->
    <section id="why-choose-us" class="py-16 bg-teal-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-semibold text-teal-700 mb-8">Perché Sceglierci</h2>
        <p class="text-lg text-teal-600 mb-8">
          Siamo un team di professionisti dedicati a fornire un servizio di alta qualità,
          trasparente e affidabile.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div
              class="bg-teal-100 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center"
            >
              <!-- Placeholder for icon -->
              <span class="text-teal-700 text-3xl font-bold">T</span>
            </div>
            <h3 class="mt-4 text-xl font-medium text-teal-700">Trasparenza</h3>
            <p class="mt-2 text-teal-600">Ogni decisione è condivisa e ogni spesa è tracciabile.</p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div
              class="bg-teal-100 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center"
            >
              <!-- Placeholder for icon -->
              <span class="text-teal-700 text-3xl font-bold">S</span>
            </div>
            <h3 class="mt-4 text-xl font-medium text-teal-700">Sicurezza</h3>
            <p class="mt-2 text-teal-600">
              Proteggiamo i vostri dati e garantiamo una gestione sicura.
            </p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div
              class="bg-teal-100 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center"
            >
              <!-- Placeholder for icon -->
              <span class="text-teal-700 text-3xl font-bold">P</span>
            </div>
            <h3 class="mt-4 text-xl font-medium text-teal-700">Professionalità</h3>
            <p class="mt-2 text-teal-600">Un team esperto sempre al vostro servizio.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="servizi" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-semibold text-teal-700 text-center mb-8">
          I Nostri Servizi
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div
            class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
          >
            <div
              class="bg-teal-100 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center"
            >
              <span class="text-teal-700 text-3xl font-bold">1</span>
            </div>
            <h3 class="mt-4 text-xl font-medium text-teal-700">Gestione Amministrativa</h3>
            <p class="mt-2 text-teal-600">
              Ci occupiamo di tutte le pratiche amministrative, dalla gestione delle spese alla
              redazione dei bilanci.
            </p>
          </div>

          <!-- Service 2 -->
          <div
            class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
          >
            <div
              class="bg-teal-100 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center"
            >
              <span class="text-teal-700 text-3xl font-bold">2</span>
            </div>
            <h3 class="mt-4 text-xl font-medium text-teal-700">Manutenzione Ordinaria</h3>
            <p class="mt-2 text-teal-600">
              Organizziamo e supervisioniamo interventi di manutenzione per garantire il perfetto
              funzionamento del condominio.
            </p>
          </div>

          <!-- Service 3 -->
          <div
            class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
          >
            <div
              class="bg-teal-100 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center"
            >
              <span class="text-teal-700 text-3xl font-bold">3</span>
            </div>
            <h3 class="mt-4 text-xl font-medium text-teal-700">Consulenza Legale</h3>
            <p class="mt-2 text-teal-600">
              Offriamo supporto legale per risolvere controversie e garantire il rispetto delle
              normative condominiali.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section id="contatti" class="py-16 bg-gradient-to-b from-teal-100 to-blue-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-semibold text-teal-700">Contattaci oggi stesso!</h2>
        <p class="mt-4 text-lg text-teal-600">
          Scopri come possiamo aiutarti a gestire il tuo condominio in modo semplice e sicuro.
        </p>
        <a
          href="/contatti"
          class="mt-6 inline-block bg-teal-600 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-teal-700 transition-colors"
        >
          Contattaci
        </a>
      </div>
    </section>
  </main>
</template>
