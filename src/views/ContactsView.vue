<script setup></script>

<template>
  <main class="bg-gradient-to-b from-teal-100 to-blue-50 min-h-screen py-16">
    <!-- Header Section -->
    <section class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-teal-700">Contattaci</h1>
      <p class="mt-4 text-lg text-teal-600">
        Siamo qui per rispondere a tutte le tue domande. Compila il modulo qui sotto e ti
        risponderemo al più presto.
      </p>
    </section>

    <!-- Contact Form Section -->
    <section class="container mx-auto px-4 max-w-2xl bg-white rounded-lg shadow-lg py-8">
      <form class="space-y-6">
        <!-- Name Field -->
        <div>
          <label for="name" class="block text-teal-700 font-medium mb-2">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Inserisci il tuo nome"
          />
        </div>

        <!-- Email Field -->
        <div>
          <label for="email" class="block text-teal-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Inserisci la tua email"
          />
        </div>

        <!-- Message Field -->
        <div>
          <label for="message" class="block text-teal-700 font-medium mb-2">Messaggio</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Scrivi il tuo messaggio"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="text-center">
          <button
            type="submit"
            class="bg-teal-600 text-white font-medium py-2 px-6 rounded-lg shadow-lg hover:bg-teal-700 transition-colors"
          >
            Invia Messaggio
          </button>
        </div>
      </form>
    </section>
  </main>
</template>
