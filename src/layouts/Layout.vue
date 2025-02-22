<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img src="/logo.svg" alt="Logo" class="h-8 w-auto" />
          </div>

          <!-- Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-center space-x-4">
              <a
                href="#"
                class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >Accueil</a
              >
              <a
                href="#"
                class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >Services</a
              >
              <a
                href="#"
                class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >À propos</a
              >
              <a
                href="#"
                class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >Contact</a
              >
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Logo et Description -->
          <div class="col-span-1">
            <img src="/logo-white.svg" alt="Logo" class="h-8 w-auto mb-4" />
            <p class="text-gray-400 text-sm">
              Votre partenaire de confiance pour tous vos projets digitaux.
            </p>
          </div>

          <!-- Mini Menu -->
          <div class="col-span-1">
            <h3 class="text-lg font-semibold mb-4">Menu Rapide</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white">Accueil</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">Services</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">À propos</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="col-span-1">
            <h3 class="text-lg font-semibold mb-4">Contact</h3>
            <ul class="space-y-2 text-gray-400">
              <li>123 Rue Example</li>
              <li>75000 Paris</li>
              <li>Tél: 01 23 45 67 89</li>
              <li>Email: contact@example.com</li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div class="col-span-1">
            <h3 class="text-lg font-semibold mb-4">Newsletter</h3>
            <form class="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Votre email"
                  class="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <!-- Copyright -->
        <div
          class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
        >
          <p>
            &copy; {{ new Date().getFullYear() }} Votre Entreprise. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Le composant est déjà en setup script, prêt pour la composition API
</script>
