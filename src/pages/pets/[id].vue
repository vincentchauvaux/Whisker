<template>
  <MainLayout>
    <div class="bg-white min-h-screen mt-16">
      <main class="container mx-auto px-4 py-12">
        <!-- État de chargement -->
        <div v-if="loading" class="flex justify-center items-center py-24">
          <div
            class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"
          ></div>
        </div>

        <!-- Message d'erreur -->
        <div v-else-if="error" class="text-center py-24">
          <p class="text-red-500 text-xl">{{ error }}</p>
          <button
            @click="loadPetDetails"
            class="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
          >
            Réessayer
          </button>
        </div>

        <!-- Contenu principal -->
        <div v-else-if="pet" class="max-w-6xl mx-auto">
          <!-- En-tête avec statut et navigation -->
          <div class="flex flex-wrap justify-between items-center mb-8">
            <div class="flex items-center gap-4 mb-4 md:mb-0">
              <router-link
                to="/pets"
                class="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
              >
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12H5M5 12L12 19M5 12L12 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Retour à la liste</span>
              </router-link>
              <span
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium',
                  pet.status === 'lost'
                    ? STATUS_COLORS.LOST.bg + ' ' + STATUS_COLORS.LOST.text
                    : STATUS_COLORS.FOUND.bg + ' ' + STATUS_COLORS.FOUND.text,
                ]"
              >
                {{ pet.status === "lost" ? "Perdu" : "Trouvé" }}
              </span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-gray-500"
                >Publié le {{ formatDate(pet.createdAt) }}</span
              >
            </div>
          </div>

          <!-- Contenu principal -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Galerie d'images -->
            <div class="lg:col-span-2">
              <div v-if="pet.images && pet.images.length > 0" class="mb-8">
                <div class="relative rounded-xl overflow-hidden h-96 mb-4">
                  <img
                    :src="currentImage"
                    :alt="pet.name || 'Chat sans nom'"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div
                  v-if="pet.images.length > 1"
                  class="flex gap-2 overflow-x-auto pb-2"
                >
                  <button
                    v-for="(image, index) in pet.images"
                    :key="index"
                    @click="currentImageIndex = index"
                    class="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden"
                    :class="{
                      'ring-2 ring-primary': currentImageIndex === index,
                    }"
                  >
                    <img
                      :src="image"
                      :alt="`Image ${index + 1} de ${
                        pet.name || 'Chat sans nom'
                      }`"
                      class="w-full h-full object-cover"
                    />
                  </button>
                </div>
              </div>
              <div
                v-else
                class="mb-8 rounded-xl overflow-hidden h-96 bg-gray-100 flex items-center justify-center"
              >
                <span class="text-gray-400 text-lg"
                  >Aucune image disponible</span
                >
              </div>

              <!-- Informations principales -->
              <div class="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h1 class="text-3xl font-bold text-gray-900 mb-4 font-serif">
                  {{ pet.name || "Chat sans nom" }}
                </h1>

                <!-- Informations importantes mises en évidence -->
                <div
                  class="mb-6 p-4 rounded-lg"
                  :class="
                    pet.status === 'lost'
                      ? STATUS_COLORS.LOST.bgLight
                      : STATUS_COLORS.FOUND.bgLight
                  "
                >
                  <p
                    class="text-base font-medium"
                    :class="
                      pet.status === 'lost'
                        ? STATUS_COLORS.LOST.text
                        : STATUS_COLORS.FOUND.text
                    "
                  >
                    <span class="font-semibold">Lieu:</span>
                    {{ getLocationText(pet) }}
                  </p>
                  <p
                    v-if="pet.status === 'lost' && pet.last_seen_date"
                    class="text-sm mt-2"
                    :class="
                      pet.status === 'lost'
                        ? STATUS_COLORS.LOST.text
                        : STATUS_COLORS.FOUND.text
                    "
                  >
                    <span class="font-semibold">Perdu le:</span>
                    {{ formatDate(pet.last_seen_date) }}
                  </p>
                  <p
                    v-if="pet.status === 'found' && pet.found_date"
                    class="text-sm mt-2"
                    :class="
                      pet.status === 'lost'
                        ? STATUS_COLORS.LOST.text
                        : STATUS_COLORS.FOUND.text
                    "
                  >
                    <span class="font-semibold">Trouvé le:</span>
                    {{ formatDate(pet.found_date) }}
                  </p>
                </div>

                <!-- Caractéristiques principales -->
                <div class="mb-6">
                  <h2 class="text-xl font-bold text-gray-900 mb-3 font-serif">
                    Caractéristiques
                  </h2>

                  <!-- Race, couleur et âge mis en avant -->
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div v-if="pet.breed" class="bg-gray-50 p-4 rounded-lg">
                      <div class="flex items-center gap-2">
                        <svg
                          class="w-6 h-6 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"
                            fill="currentColor"
                          />
                        </svg>
                        <div>
                          <p class="text-sm text-gray-500">Race</p>
                          <p class="font-medium text-gray-900">
                            {{ pet.breed }}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div v-if="pet.color" class="bg-gray-50 p-4 rounded-lg">
                      <div class="flex items-center gap-2">
                        <div
                          class="w-6 h-6 rounded-full border border-gray-300 flex-shrink-0"
                          :style="{
                            background: pet.color
                              .toLowerCase()
                              .includes('blanc')
                              ? 'white'
                              : pet.color.toLowerCase().includes('noir')
                              ? 'black'
                              : pet.color.toLowerCase().includes('gris')
                              ? 'gray'
                              : pet.color.toLowerCase().includes('roux')
                              ? 'orange'
                              : pet.color.toLowerCase().includes('marron')
                              ? 'brown'
                              : pet.color.toLowerCase().includes('tigré')
                              ? 'repeating-linear-gradient(45deg, #f5f5f5, #f5f5f5 5px, #e0e0e0 5px, #e0e0e0 10px)'
                              : '#f5f5f5',
                          }"
                        ></div>
                        <div>
                          <p class="text-sm text-gray-500">Couleur</p>
                          <p class="font-medium text-gray-900">
                            {{ pet.color }}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div v-if="pet.age" class="bg-gray-50 p-4 rounded-lg">
                      <div class="flex items-center gap-2">
                        <svg
                          class="w-6 h-6 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z"
                            fill="currentColor"
                          />
                        </svg>
                        <div>
                          <p class="text-sm text-gray-500">Âge</p>
                          <p class="font-medium text-gray-900">
                            {{ pet.age }}
                            {{
                              isNaN(parseInt(pet.age)) ||
                              String(pet.age).toLowerCase().includes("an")
                                ? ""
                                : parseInt(pet.age) > 1
                                ? "ans"
                                : parseInt(pet.age) === 1
                                ? "an"
                                : "mois"
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Autres caractéristiques -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-if="pet.gender" class="flex items-center gap-3">
                      <span
                        :class="[
                          'w-8 h-8 flex items-center justify-center rounded-full text-white font-bold flex-shrink-0',
                          pet.gender === 'male'
                            ? 'bg-blue-600'
                            : pet.gender === 'female'
                            ? 'bg-pink-600'
                            : 'bg-gray-500',
                        ]"
                      >
                        {{
                          pet.gender === "male"
                            ? "♂"
                            : pet.gender === "female"
                            ? "♀"
                            : "?"
                        }}
                      </span>
                      <div>
                        <p class="text-sm text-gray-500">Sexe</p>
                        <p class="font-medium text-gray-900">
                          {{ pet.gender === "male" ? "Mâle" : "Femelle" }}
                        </p>
                      </div>
                    </div>

                    <div
                      v-if="pet.microchipped !== undefined"
                      class="flex items-center gap-3"
                    >
                      <div
                        :class="[
                          'w-8 h-8 flex items-center justify-center rounded-full text-white',
                          pet.microchipped ? 'bg-green-500' : 'bg-red-500',
                        ]"
                      >
                        <svg
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                            fill="currentColor"
                            v-if="pet.microchipped"
                          />
                          <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                            fill="currentColor"
                            v-else
                          />
                        </svg>
                      </div>
                      <div>
                        <p class="text-sm text-gray-500">Puce électronique</p>
                        <p class="font-medium text-gray-900">
                          {{ pet.microchipped ? "Pucé" : "Non pucé" }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Tags -->
                <div v-if="pet.tags && pet.tags.length > 0" class="mb-6">
                  <h2 class="text-xl font-bold text-gray-900 mb-3 font-serif">
                    Particularités
                  </h2>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in pet.tags"
                      :key="tag"
                      :class="[
                        'px-3 py-1.5 rounded-full text-sm font-medium',
                        getTagColorClass
                          ? getTagColorClass(tag)
                          : 'bg-gray-100 text-gray-800',
                      ]"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <div v-if="pet.description" class="mb-6">
                  <h2 class="text-xl font-bold text-gray-900 mb-3 font-serif">
                    Description
                  </h2>
                  <p class="text-gray-700 whitespace-pre-line">
                    {{ pet.description }}
                  </p>
                </div>
              </div>

              <!-- Calendrier de santé simplifié -->
              <div class="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 class="text-xl font-bold text-gray-900 mb-6 font-serif">
                  Calendrier de santé
                </h2>

                <!-- Navigation du calendrier -->
                <div class="flex justify-between items-center mb-4">
                  <button
                    @click="previousMonth"
                    class="p-1 rounded-full hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <h3 class="text-lg font-medium text-gray-800">
                    {{ currentMonthName }} {{ currentYear }}
                  </h3>
                  <button
                    @click="nextMonth"
                    class="p-1 rounded-full hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                <!-- Jours de la semaine -->
                <div class="grid grid-cols-7 gap-1 mb-2">
                  <div
                    v-for="day in weekDays"
                    :key="day"
                    class="text-center text-xs font-medium text-gray-500 py-1"
                  >
                    {{ day }}
                  </div>
                </div>

                <!-- Jours du mois -->
                <div class="grid grid-cols-7 gap-1 mb-6">
                  <div
                    v-for="(day, index) in calendarDays"
                    :key="index"
                    :class="[
                      'relative h-10 flex items-center justify-center rounded-full cursor-pointer',
                      day.isCurrentMonth
                        ? 'text-gray-800'
                        : 'text-gray-400 bg-gray-50',
                      day.isToday ? 'bg-primary-light' : '',
                      day.hasEvent ? 'font-bold' : '',
                    ]"
                    @click="selectDay(day)"
                  >
                    <span>{{ day.number }}</span>
                    <div
                      v-if="day.hasEvent"
                      class="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1"
                    >
                      <span
                        v-if="day.hasVetVisit"
                        class="w-2 h-2 rounded-full bg-red-500"
                        title="Visite vétérinaire"
                      ></span>
                      <span
                        v-if="day.hasVaccination"
                        class="w-2 h-2 rounded-full bg-blue-500"
                        title="Vaccination"
                      ></span>
                    </div>
                  </div>
                </div>

                <!-- Événements du jour sélectionné -->
                <div v-if="selectedDayEvents.length > 0">
                  <h4 class="font-medium text-gray-800 mb-3">
                    Événements du {{ formatSelectedDay }}
                  </h4>
                  <div class="space-y-3">
                    <div
                      v-for="event in selectedDayEvents"
                      :key="event.id"
                      class="border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-shadow"
                    >
                      <div class="flex items-center gap-2">
                        <div
                          :class="[
                            'p-1.5 rounded-full',
                            event.type === 'vet_visit'
                              ? 'bg-red-100'
                              : 'bg-blue-100',
                          ]"
                        >
                          <svg
                            v-if="event.type === 'vet_visit'"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 text-red-600"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
                            />
                          </svg>
                          <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 text-blue-600"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              d="M12.5 2c-0.28 0-0.5 0.22-0.5 0.5v2c0 0.28 0.22 0.5 0.5 0.5s0.5-0.22 0.5-0.5v-2c0-0.28-0.22-0.5-0.5-0.5zM12.5 6c-0.28 0-0.5 0.22-0.5 0.5v2c0 0.28 0.22 0.5 0.5 0.5s0.5-0.22 0.5-0.5v-2c0-0.28-0.22-0.5-0.5-0.5zM12.5 10c-0.28 0-0.5 0.22-0.5 0.5v2c0 0.28 0.22 0.5 0.5 0.5s0.5-0.22 0.5-0.5v-2c0-0.28-0.22-0.5-0.5-0.5zM12.5 14c-0.28 0-0.5 0.22-0.5 0.5v2c0 0.28 0.22 0.5 0.5 0.5s0.5-0.22 0.5-0.5v-2c0-0.28-0.22-0.5-0.5-0.5zM12.5 18c-0.28 0-0.5 0.22-0.5 0.5v2c0 0.28 0.22 0.5 0.5 0.5s0.5-0.22 0.5-0.5v-2c0-0.28-0.22-0.5-0.5-0.5z"
                            />
                          </svg>
                        </div>
                        <div class="flex-1">
                          <div class="flex justify-between">
                            <h5 class="font-medium text-gray-800 text-sm">
                              {{ event.title }}
                            </h5>
                          </div>
                          <p
                            v-if="event.description"
                            class="text-xs text-gray-600 mt-1 line-clamp-1"
                          >
                            {{ event.description }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else-if="selectedDay" class="text-center py-4">
                  <p class="text-gray-500 text-sm">
                    Aucun événement prévu pour cette date
                  </p>
                </div>
              </div>
            </div>

            <!-- Sidebar avec informations de contact -->
            <div class="lg:col-span-1">
              <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 class="text-xl font-bold text-gray-900 mb-4 font-serif">
                  Contact
                </h2>

                <div v-if="petOwner" class="mb-6">
                  <div class="flex items-center gap-3 mb-4">
                    <div
                      class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden"
                    >
                      <img
                        v-if="petOwner.photoURL"
                        :src="petOwner.photoURL"
                        :alt="petOwner.displayName || 'Utilisateur'"
                        class="w-full h-full object-cover"
                      />
                      <div
                        v-else
                        class="w-full h-full flex items-center justify-center bg-primary text-white text-xl font-bold"
                      >
                        {{ getInitials(petOwner.displayName) }}
                      </div>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">
                        {{ petOwner.displayName || "Utilisateur" }}
                      </p>
                      <p class="text-sm text-gray-500">
                        Membre depuis {{ formatDate(petOwner.createdAt, true) }}
                      </p>
                    </div>
                  </div>

                  <div class="flex flex-col gap-3">
                    <button
                      v-if="petOwner && petOwner.email"
                      class="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                    >
                      <svg
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                          fill="currentColor"
                        />
                      </svg>
                      Contacter par email
                    </button>
                    <button
                      v-if="petOwner && petOwner.phone"
                      class="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <svg
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                          fill="currentColor"
                        />
                      </svg>
                      Appeler
                    </button>
                  </div>
                </div>
              </div>

              <!-- Carte de localisation -->
              <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 class="text-xl font-bold text-gray-900 mb-4 font-serif">
                  Localisation
                </h2>
                <div class="h-64 rounded-lg overflow-hidden">
                  <PetMap
                    v-if="
                      pet &&
                      ((pet.status === 'lost' &&
                        pet.last_seen_location?.coordinates) ||
                        (pet.status === 'found' &&
                          pet.found_location?.coordinates))
                    "
                    :pet="pet"
                  />
                  <div
                    v-else
                    class="w-full h-full flex items-center justify-center bg-gray-100"
                  >
                    <p class="text-gray-500">Aucune localisation disponible</p>
                  </div>
                </div>
                <p class="mt-3 text-gray-700">
                  {{ getLocationText(pet) }}
                </p>
              </div>

              <!-- Calendrier de santé -->
              <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 class="text-xl font-bold text-gray-900 mb-4 font-serif">
                  Calendrier de santé
                </h2>

                <div class="space-y-4">
                  <!-- Prochains rendez-vous -->
                  <div
                    v-for="(event, index) in healthEvents"
                    :key="index"
                    class="border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-shadow"
                  >
                    <div class="flex items-start gap-3">
                      <div
                        :class="[
                          'p-2 rounded-full',
                          event.type === 'vet_visit'
                            ? 'bg-red-100'
                            : 'bg-blue-100',
                        ]"
                      >
                        <!-- Icône patte avec croix pour visite vétérinaire -->
                        <svg
                          v-if="event.type === 'vet_visit'"
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-red-600"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
                          />
                        </svg>
                        <!-- Icône seringue pour vaccination -->
                        <svg
                          v-else
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-blue-600"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d="M12.5 2c-0.28 0-0.5 0.22-0.5 0.5v2c0 0.28 0.22 0.5 0.5 0.5s0.5-0.22 0.5-0.5v-2c0-0.28-0.22-0.5-0.5-0.5zM12.5 6c-0.28 0-0.5 0.22-0.5 0.5v2c0 0.28 0.22 0.5 0.5 0.5s0.5-0.22 0.5-0.5v-2c0-0.28-0.22-0.5-0.5-0.5zM12.5 10c-0.28 0-0.5 0.22-0.5 0.5v2c0 0.28 0.22 0.5 0.5 0.5s0.5-0.22 0.5-0.5v-2c0-0.28-0.22-0.5-0.5-0.5zM12.5 14c-0.28 0-0.5 0.22-0.5 0.5v2c0 0.28 0.22 0.5 0.5 0.5s0.5-0.22 0.5-0.5v-2c0-0.28-0.22-0.5-0.5-0.5zM12.5 18c-0.28 0-0.5 0.22-0.5 0.5v2c0 0.28 0.22 0.5 0.5 0.5s0.5-0.22 0.5-0.5v-2c0-0.28-0.22-0.5-0.5-0.5z"
                          />
                        </svg>
                      </div>
                      <div class="flex-1">
                        <div class="flex justify-between">
                          <h4 class="font-medium text-gray-800">
                            {{ event.title }}
                          </h4>
                          <span class="text-sm text-gray-500">{{
                            formatDate(event.date, true)
                          }}</span>
                        </div>
                        <p class="text-sm text-gray-600 mt-1">
                          {{ event.description }}
                        </p>
                        <div class="flex items-center mt-2">
                          <span
                            :class="[
                              'text-xs px-2 py-1 rounded-full',
                              event.type === 'vet_visit'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-blue-100 text-blue-800',
                            ]"
                          >
                            {{
                              event.type === "vet_visit"
                                ? "Visite vétérinaire"
                                : "Vaccination"
                            }}
                          </span>
                        </div>
                      </div>
                      <div v-if="isCurrentUserPet" class="flex space-x-1">
                        <button
                          @click="editEvent(event)"
                          class="p-1 text-gray-500 hover:text-primary"
                          title="Modifier"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </button>
                        <button
                          @click="deleteEvent(event.id)"
                          class="p-1 text-gray-500 hover:text-red-500"
                          title="Supprimer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="isCurrentUserPet" class="mt-4">
                  <button
                    @click="showAddEventModal = true"
                    class="w-full bg-secondary text-white py-2 px-4 rounded-lg font-medium hover:bg-secondary-dark transition-colors flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Ajouter un événement
                  </button>
                </div>
              </div>

              <!-- Signaler -->
              <div class="bg-white rounded-xl shadow-sm p-6">
                <h2 class="text-xl font-bold text-gray-900 mb-4 font-serif">
                  Signaler
                </h2>
                <button
                  class="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"
                      fill="currentColor"
                    />
                  </svg>
                  Signaler cette annonce
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Aucun chat trouvé -->
        <div v-if="!pet && !loading && !error" class="text-center py-24">
          <p class="text-gray-500 text-xl">Chat non trouvé</p>
          <router-link
            to="/pets"
            class="mt-6 inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
          >
            Retour à la liste des chats
          </router-link>
        </div>
      </main>
    </div>

    <!-- Modal pour ajouter/modifier un événement de santé -->
    <div
      v-if="showAddEventModal"
      class="fixed inset-0 z-50 overflow-y-auto"
      aria-modal="true"
    >
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          @click="showAddEventModal = false"
        ></div>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg font-medium text-gray-900 font-serif mb-4">
              {{
                editingEvent ? "Modifier l'événement" : "Ajouter un événement"
              }}
            </h3>

            <form @submit.prevent="saveEvent" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Type d'événement
                </label>
                <select
                  v-model="eventForm.type"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  required
                >
                  <option value="vet_visit">Visite vétérinaire</option>
                  <option value="vaccination">Vaccination</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Titre
                </label>
                <input
                  type="text"
                  v-model="eventForm.title"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  v-model="eventForm.date"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  v-model="eventForm.description"
                  rows="3"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
            </form>
          </div>

          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              @click="saveEvent"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm"
            >
              {{ editingEvent ? "Mettre à jour" : "Ajouter" }}
            </button>
            <button
              type="button"
              @click="showAddEventModal = false"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { inject, getCurrentInstance } from "vue";
import MainLayout from "../../layouts/MainLayout.vue";
import PetMap from "../../components/PetMap.vue";
import {
  STATUS_COLORS,
  getTagColorClass,
  getColorBackground,
} from "../../constants/colors.js";

// Accéder au store et à la route
const { proxy } = getCurrentInstance();
const petStore = proxy.$petStore;
const userStore = proxy.$userStore;
const route = useRoute();

// État local
const loading = ref(false);
const error = ref(null);
const currentImageIndex = ref(0);
const petOwner = ref(null);
const showAddEventModal = ref(false);
const editingEvent = ref(null);
const currentDate = ref(new Date());
const selectedDay = ref(null);
const weekDays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

// Formulaire pour les événements de santé
const eventForm = ref({
  type: "vet_visit",
  title: "",
  date: "",
  description: "",
});

// Données en dur pour les événements de santé
const healthEvents = ref([
  {
    id: 1,
    type: "vet_visit",
    title: "Visite annuelle",
    date: new Date(new Date().setDate(new Date().getDate() + 15)), // Dans 15 jours
    description: "Visite annuelle de contrôle et vaccins",
  },
  {
    id: 2,
    type: "vaccination",
    title: "Rappel vaccin rage",
    date: new Date(new Date().setDate(new Date().getDate() + 45)), // Dans 45 jours
    description: "Rappel du vaccin contre la rage",
  },
  {
    id: 3,
    type: "vet_visit",
    title: "Contrôle dentaire",
    date: new Date(new Date().setDate(new Date().getDate() + 30)), // Dans 30 jours
    description: "Vérification de l'état des dents et détartrage si nécessaire",
  },
]);

// Vérifier si l'utilisateur connecté est le propriétaire de l'animal
const isCurrentUserPet = computed(() => {
  const currentUser = userStore.currentUser;
  return currentUser && pet.value && pet.value.userId === currentUser.uid;
});

// Obtenir l'ID du chat depuis les paramètres de route
const petId = computed(() => route.params.id);

// Image actuelle dans la galerie
const currentImage = computed(() => {
  if (!pet.value || !pet.value.images || pet.value.images.length === 0) {
    return "/logo-nb-transparent.png";
  }
  return pet.value.images[currentImageIndex.value];
});

// Référence au chat actuel
const pet = computed(() => {
  return petStore.getPetById(petId.value);
});

// Charger les détails du chat
const loadPetDetails = async () => {
  if (!petId.value) return;

  loading.value = true;
  error.value = null;

  try {
    // Charger les détails du chat
    await petStore.fetchPetById(petId.value);

    // Si le chat a un propriétaire, charger ses informations
    if (pet.value && pet.value.userId) {
      try {
        const ownerData = await userStore.fetchUserProfile(pet.value.userId);
        petOwner.value = ownerData;
      } catch (err) {
        console.error(
          "Erreur lors du chargement des informations du propriétaire:",
          err
        );
        // Ne pas afficher d'erreur à l'utilisateur pour cette partie
      }
    }
  } catch (err) {
    console.error("Erreur lors du chargement des détails du chat:", err);
    error.value =
      "Impossible de charger les détails du chat. Veuillez réessayer.";
  } finally {
    loading.value = false;
  }
};

// Formater la date
const formatDate = (timestamp, dateOnly = false) => {
  if (!timestamp) return "Date inconnue";

  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);

  if (dateOnly) {
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Obtenir le texte de localisation
const getLocationText = (pet) => {
  if (pet.status === "lost" && pet.last_seen_location) {
    return (
      pet.last_seen_location.address ||
      pet.last_seen_location.city ||
      "Lieu inconnu"
    );
  } else if (pet.status === "found" && pet.found_location) {
    return (
      pet.found_location.address || pet.found_location.city || "Lieu inconnu"
    );
  }
  return "Lieu inconnu";
};

// Obtenir les initiales d'un nom
const getInitials = (name) => {
  if (!name) return "?";
  return name
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
};

// Éditer un événement existant
const editEvent = (event) => {
  editingEvent.value = event;
  eventForm.value = {
    type: event.type,
    title: event.title,
    date: new Date(event.date).toISOString().split("T")[0],
    description: event.description || "",
  };
  showAddEventModal.value = true;
};

// Réinitialiser le formulaire
const resetForm = () => {
  editingEvent.value = null;
  eventForm.value = {
    type: "vet_visit",
    title: "",
    date: "",
    description: "",
  };
};

// Sauvegarder un événement (ajout ou modification)
const saveEvent = () => {
  // Vérifier que les champs obligatoires sont remplis
  if (!eventForm.value.title || !eventForm.value.date) {
    alert("Veuillez remplir tous les champs obligatoires");
    return;
  }

  if (editingEvent.value) {
    // Mise à jour d'un événement existant
    const index = healthEvents.value.findIndex(
      (e) => e.id === editingEvent.value.id
    );
    if (index !== -1) {
      healthEvents.value[index] = {
        ...editingEvent.value,
        ...eventForm.value,
        date: new Date(eventForm.value.date),
      };
    }
  } else {
    // Création d'un nouvel événement
    const newId = Math.max(0, ...healthEvents.value.map((e) => e.id)) + 1;
    healthEvents.value.push({
      id: newId,
      ...eventForm.value,
      date: new Date(eventForm.value.date),
    });
  }

  // Trier les événements par date
  healthEvents.value.sort((a, b) => a.date - b.date);

  // Fermer le modal et réinitialiser le formulaire
  showAddEventModal.value = false;
  resetForm();
};

// Supprimer un événement
const deleteEvent = (eventId) => {
  if (confirm("Êtes-vous sûr de vouloir supprimer cet événement ?")) {
    healthEvents.value = healthEvents.value.filter((e) => e.id !== eventId);
  }
};

// Observer les changements d'ID pour recharger les données
watch(petId, () => {
  loadPetDetails();
});

// Charger les données au montage du composant
onMounted(() => {
  loadPetDetails();
});

// Calendrier
const currentMonthName = computed(() => {
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  return months[currentDate.value.getMonth()];
});

const currentYear = computed(() => {
  return currentDate.value.getFullYear();
});

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();

  // Premier jour du mois
  const firstDay = new Date(year, month, 1);
  // Dernier jour du mois
  const lastDay = new Date(year, month + 1, 0);

  // Ajuster pour commencer par lundi (1) au lieu de dimanche (0)
  let dayOfWeek = firstDay.getDay() || 7;
  dayOfWeek = dayOfWeek - 1; // 0 pour lundi, 6 pour dimanche

  const days = [];

  // Jours du mois précédent
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = dayOfWeek - 1; i >= 0; i--) {
    days.push({
      number: prevMonthLastDay - i,
      isCurrentMonth: false,
      isToday: false,
      hasEvent: false,
      date: new Date(year, month - 1, prevMonthLastDay - i),
    });
  }

  // Jours du mois actuel
  const today = new Date();
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(year, month, i);

    // Vérifier si ce jour a des événements
    const dayEvents = healthEvents.value.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === i &&
        eventDate.getMonth() === month &&
        eventDate.getFullYear() === year
      );
    });

    days.push({
      number: i,
      isCurrentMonth: true,
      isToday:
        today.getDate() === i &&
        today.getMonth() === month &&
        today.getFullYear() === year,
      hasEvent: dayEvents.length > 0,
      hasVetVisit: dayEvents.some((e) => e.type === "vet_visit"),
      hasVaccination: dayEvents.some((e) => e.type === "vaccination"),
      date: new Date(year, month, i),
    });
  }

  // Jours du mois suivant
  const remainingDays = 42 - days.length; // 6 semaines complètes
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      number: i,
      isCurrentMonth: false,
      isToday: false,
      hasEvent: false,
      date: new Date(year, month + 1, i),
    });
  }

  return days;
});

const selectedDayEvents = computed(() => {
  if (!selectedDay.value) return [];

  return healthEvents.value.filter((event) => {
    const eventDate = new Date(event.date);
    const selectedDate = new Date(selectedDay.value.date);
    return (
      eventDate.getDate() === selectedDate.getDate() &&
      eventDate.getMonth() === selectedDate.getMonth() &&
      eventDate.getFullYear() === selectedDate.getFullYear()
    );
  });
});

const formatSelectedDay = computed(() => {
  if (!selectedDay.value) return "";

  const options = { day: "numeric", month: "long" };
  return new Date(selectedDay.value.date).toLocaleDateString("fr-FR", options);
});

// Navigation du calendrier
const previousMonth = () => {
  const date = new Date(currentDate.value);
  date.setMonth(date.getMonth() - 1);
  currentDate.value = date;
  selectedDay.value = null;
};

const nextMonth = () => {
  const date = new Date(currentDate.value);
  date.setMonth(date.getMonth() + 1);
  currentDate.value = date;
  selectedDay.value = null;
};

const selectDay = (day) => {
  selectedDay.value = day;
};
</script>
