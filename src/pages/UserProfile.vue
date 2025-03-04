<template>
  <MainLayout>
    <div class="bg-white">
      <main class="pt-24 pb-16">
        <div class="container mx-auto px-4 max-w-4xl">
          <div v-if="loading" class="flex justify-center py-12">
            <div
              class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
            ></div>
          </div>

          <div v-else-if="!userData" class="text-center py-12">
            <p class="text-xl text-gray-600 font-sans">
              Vous n'êtes pas connecté.
            </p>
            <button
              @click="router.push('/')"
              class="mt-4 px-4 py-2 bg-white text-secondary border border-secondary rounded-full hover:bg-secondary hover:text-white transition-colors shadow-sm"
            >
              Retour à l'accueil
            </button>
          </div>

          <div v-else class="bg-white shadow-lg rounded-2xl overflow-hidden">
            <!-- En-tête du profil avec bannière personnalisable -->
            <div class="h-48 relative" :style="bannerStyle">
              <!-- Bouton pour modifier la bannière (visible uniquement pour l'utilisateur actuel) -->
              <button
                v-if="isCurrentUser"
                @click="showBannerModal = true"
                class="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
                title="Modifier la bannière"
              >
                <svg
                  class="w-5 h-5 text-primary"
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

              <div
                class="absolute bottom-0 translate-y-1/2 mx-auto right-0 left-0 w-fit"
              >
                <img
                  :src="userData.photoURL"
                  alt="Photo de profil"
                  class="w-32 h-32 rounded-full border-4 border-white object-cover"
                  @error="handleProfileImageError"
                />
              </div>
            </div>

            <!-- Informations du profil -->
            <div class="pb-8 px-8">
              <div class="grid grid-cols-3 gap-2 md:gap-8">
                <!-- Boutons de contact dans la grille de droite -->
                <div>
                  <!-- Boutons de contact style [id].vue -->
                  <div class="mt-3 flex flex-col gap-3 overflow-hidden">
                    <a
                      v-if="userData.contactEmail || userData.email"
                      :href="`mailto:${
                        userData.contactEmail || userData.email
                      }`"
                      class="group w-fit md:gap-2 px-2 md:px-4 py-2 bg-primary text-white border border-primary rounded-full hover:bg-white hover:text-primary transition-all duration-300 text-sm flex items-center shadow-sm"
                    >
                      <svg
                        class="w-5 h-5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                          fill="currentColor"
                        />
                      </svg>
                      <span
                        class="overflow-hidden max-w-0 md:max-w-xs md:group-hover:max-w-xs transition-all duration-300 whitespace-nowrap ml-0 group-hover:ml-2"
                      >
                        Envoyer un email
                      </span>
                    </a>
                    <a
                      v-if="userData.phone"
                      :href="`tel:${userData.phone}`"
                      class="group md:gap-2 w-fit px-2 md:px-4 py-2 bg-green-500 text-white border border-green-500 rounded-full hover:bg-white hover:text-green-500 transition-all duration-300 text-sm flex items-center shadow-sm"
                    >
                      <svg
                        class="w-5 h-5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                          fill="currentColor"
                        />
                      </svg>
                      <span
                        class="overflow-hidden max-w-0 md:max-w-xs md:group-hover:max-w-xs transition-all duration-300 whitespace-nowrap ml-0 group-hover:ml-2"
                      >
                        Appeler {{ userData.phone }}
                      </span>
                    </a>
                  </div>
                </div>
                <!-- mon display name -->
                <div class="flex items-end justify-center">
                  <h1
                    class="text-2xl lg:text-3xl font-bold text-center text-primary drop-shadow-xl font-serif whitespace-nowrap"
                  >
                    {{ userData.displayName }}
                  </h1>
                </div>
                <!-- Informations de localisation -->
                <div
                  v-if="userData.address || userData.city || userData.country"
                  class="flex justify-end"
                >
                  <!-- Informations textuelles de localisation -->
                  <div class="mt-3">
                    <div
                      class="grid grid-cols-1 gap-2 overflow-hidden items-start"
                    >
                      <div
                        v-if="userData.address"
                        class="flex items-center gap-2 -translate-x-[-80%] md:hover:translate-x-0 transition-all duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-primary-light self-end flex-shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>

                        <p class="font-medium text-gray-900 whitespace-nowrap">
                          {{ userData.address }}
                        </p>
                      </div>

                      <div
                        v-if="userData.city"
                        class="flex items-center gap-2 -translate-x-[-80%] md:hover:translate-x-0 transition-all duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-primary-light self-end flex-shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>

                        <p class="font-medium text-gray-900 whitespace-nowrap">
                          {{ userData.city }}
                        </p>
                      </div>

                      <div
                        v-if="userData.country"
                        class="flex items-center gap-2 -translate-x-[-80%] md:hover:translate-x-0 transition-all duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-primary-light self-end flex-shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <p class="font-medium text-gray-900 whitespace-nowrap">
                          {{ userData.country }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-8 border-t border-gray-200 pt-8">
                <div class="flex justify-between items-center mb-4">
                  <h2 class="text-xl font-semibold text-primary font-serif">
                    Informations du compte
                  </h2>
                  <!-- Bouton d'administration (visible uniquement pour l'utilisateur avec l'email spécifique) -->
                  <button
                    v-if="
                      isCurrentUser &&
                      userData.email === 'vincent.chauvaux@gmail.com'
                    "
                    @click="router.push('/admin')"
                    class="group ml-2 px-2 md:px-4 py-2 bg-white text-red-600 border border-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors text-sm flex items-center md:gap-1 shadow-sm"
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p
                      class="overflow-hidden max-w-0 md:max-w-xs group-hover:max-w-xs transition-all duration-300 whitespace-nowrap ml-0 group-hover:ml-2"
                    >
                      Administration
                    </p>
                  </button>
                  <!-- Bouton pour modifier le profil (visible uniquement pour l'utilisateur actuel) -->
                  <button
                    v-if="isCurrentUser"
                    @click="showEditProfileModal"
                    class="group px-2 md:px-4 py-2 bg-white text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-colors text-sm flex items-center md:gap-1 shadow-sm"
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
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                    <p
                      class="overflow-hidden max-w-0 md:max-w-xs group-hover:max-w-xs transition-all duration-300 whitespace-nowrap ml-0 group-hover:ml-2"
                    >
                      Modifier mon profil
                    </p>
                  </button>
                </div>

                <div class="space-y-4">
                  <div
                    class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100"
                  >
                    <span class="text-gray-600 font-sans">Membre depuis</span>
                    <span class="font-medium text-gray-900 font-sans">{{
                      formatDate(userData.createdAt)
                    }}</span>
                  </div>

                  <div
                    class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100"
                  >
                    <span class="text-gray-600 font-sans"
                      >Dernière connexion</span
                    >
                    <span class="font-medium text-gray-900 font-sans">{{
                      formatDate(userData.lastLogin)
                    }}</span>
                  </div>

                  <!-- Informations de localisation -->
                  <div
                    v-if="userData.address || userData.city || userData.country"
                    class="mt-6"
                  >
                    <h3
                      class="text-xl font-semibold text-primary font-serif mb-3"
                    >
                      Information de localisation
                    </h3>

                    <UserLocationMap
                      :userData="userData"
                      :isEditable="false"
                      height="250px"
                    />
                  </div>

                  <!-- Site web -->
                  <div v-if="userData.website" class="mt-6">
                    <h3
                      class="text-lg font-semibold text-primary font-serif mb-3"
                    >
                      Site web
                    </h3>

                    <div class="bg-gray-50 rounded-lg p-4 shadow-sm">
                      <div
                        class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2"
                      >
                        <span
                          class="text-gray-600 font-sans flex items-center gap-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                          </svg>
                          Site web
                        </span>
                        <a
                          :href="userData.website"
                          target="_blank"
                          class="font-medium text-secondary hover:text-secondary-dark font-sans flex items-center gap-1 group"
                        >
                          {{ userData.website }}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Badges et accomplissements -->
              <div class="mt-8 border-t border-gray-200 pt-8">
                <h2 class="text-xl font-semibold text-primary font-serif mb-4">
                  Badges et accomplissements
                </h2>

                <div v-if="userBadges.length === 0" class="text-center py-6">
                  <p class="text-gray-500 font-sans">
                    {{
                      isCurrentUser
                        ? "Vous n'avez pas encore obtenu de badges."
                        : "Cet utilisateur n'a pas encore obtenu de badges."
                    }}
                  </p>
                  <p class="text-sm text-gray-400 mt-2 font-sans">
                    Participez activement à la communauté pour débloquer des
                    badges.
                  </p>
                </div>

                <div
                  v-else
                  class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4"
                >
                  <!-- Badge: Explorateur urbain -->
                  <div
                    v-if="userBadges.includes('explorer')"
                    class="flex flex-col items-center p-3 rounded-lg bg-blue-100 hover:shadow-md transition-shadow group relative"
                  >
                    <div
                      class="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polygon
                          points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
                        />
                      </svg>
                    </div>
                    <h3 class="text-sm font-medium text-center">
                      Explorateur urbain
                    </h3>
                    <div
                      class="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 mb-2 w-48 text-center"
                    >
                      Obtenu en signalant un chat errant dans votre quartier
                    </div>
                  </div>

                  <!-- Badge: Gardien des animaux -->
                  <div
                    v-if="userBadges.includes('guardian')"
                    class="flex flex-col items-center p-3 rounded-lg bg-green-100 hover:shadow-md transition-shadow group relative"
                  >
                    <div
                      class="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mb-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <h3 class="text-sm font-medium text-center">
                      Gardien des animaux
                    </h3>
                    <div
                      class="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 mb-2 w-48 text-center"
                    >
                      Obtenu en trouvant un animal perdu et en créant une alerte
                    </div>
                  </div>

                  <!-- Badge: Samaritain communautaire -->
                  <div
                    v-if="userBadges.includes('samaritan')"
                    class="flex flex-col items-center p-3 rounded-lg bg-orange-100 hover:shadow-md transition-shadow group relative"
                  >
                    <div
                      class="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mb-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                        />
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                      </svg>
                    </div>
                    <h3 class="text-sm font-medium text-center">
                      Samaritain communautaire
                    </h3>
                    <div
                      class="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 mb-2 w-48 text-center"
                    >
                      Obtenu en aidant un voisin à signaler un chat trouvé
                    </div>
                  </div>

                  <!-- Badge: Détective des poils -->
                  <div
                    v-if="userBadges.includes('detective')"
                    class="flex flex-col items-center p-3 rounded-lg bg-yellow-100 hover:shadow-md transition-shadow group relative"
                  >
                    <div
                      class="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mb-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </div>
                    <h3 class="text-sm font-medium text-center">
                      Détective des poils
                    </h3>
                    <div
                      class="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 mb-2 w-48 text-center"
                    >
                      Obtenu en comparant les particularités d'un animal trouvé
                    </div>
                  </div>

                  <!-- Badge: Contributeur assidu -->
                  <div
                    v-if="userBadges.includes('contributor')"
                    class="flex flex-col items-center p-3 rounded-lg bg-blue-100 hover:shadow-md transition-shadow group relative"
                  >
                    <div
                      class="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center mb-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <h3 class="text-sm font-medium text-center">
                      Contributeur assidu
                    </h3>
                    <div
                      class="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 mb-2 w-48 text-center"
                    >
                      Obtenu en se connectant quotidiennement pour suivre les
                      signalements
                    </div>
                  </div>

                  <!-- Badge: Diplomate des chats -->
                  <div
                    v-if="userBadges.includes('diplomat')"
                    class="flex flex-col items-center p-3 rounded-lg bg-purple-100 hover:shadow-md transition-shadow group relative"
                  >
                    <div
                      class="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mb-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <h3 class="text-sm font-medium text-center">
                      Diplomate des chats
                    </h3>
                    <div
                      class="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 mb-2 w-48 text-center"
                    >
                      Obtenu en aidant à résoudre un conflit concernant la
                      propriété d'un chat
                    </div>
                  </div>

                  <!-- Badge: Garde-forestier -->
                  <div
                    v-if="userBadges.includes('ranger')"
                    class="flex flex-col items-center p-3 rounded-lg bg-green-100 hover:shadow-md transition-shadow group relative"
                  >
                    <div
                      class="w-16 h-16 rounded-full bg-green-800 flex items-center justify-center mb-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path d="M17 22v-2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2" />
                        <path d="M12 2v7" />
                        <path d="M8 9l4 4 4-4" />
                      </svg>
                    </div>
                    <h3 class="text-sm font-medium text-center">
                      Garde-forestier
                    </h3>
                    <div
                      class="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 mb-2 w-48 text-center"
                    >
                      Obtenu en signalant un animal perdu dans une zone boisée
                    </div>
                  </div>

                  <!-- Badge: Éducateur animalier -->
                  <div
                    v-if="userBadges.includes('educator')"
                    class="flex flex-col items-center p-3 rounded-lg bg-gray-100 hover:shadow-md transition-shadow group relative"
                  >
                    <div
                      class="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                    <h3 class="text-sm font-medium text-center">
                      Éducateur animalier
                    </h3>
                    <div
                      class="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 mb-2 w-48 text-center"
                    >
                      Obtenu en publiant un article éducatif sur les soins aux
                      chats errants
                    </div>
                  </div>

                  <!-- Badge: Ami des animaux -->
                  <div
                    v-if="userBadges.includes('friend')"
                    class="flex flex-col items-center p-3 rounded-lg bg-pink-100 hover:shadow-md transition-shadow group relative"
                  >
                    <div
                      class="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center mb-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                        />
                      </svg>
                    </div>
                    <h3 class="text-sm font-medium text-center">
                      Ami des animaux
                    </h3>
                    <div
                      class="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 mb-2 w-48 text-center"
                    >
                      Obtenu en adoptant un animal signalé et en partageant des
                      nouvelles de sa vie
                    </div>
                  </div>

                  <!-- Badge: Chasseur de trésors -->
                  <div
                    v-if="userBadges.includes('treasure')"
                    class="flex flex-col items-center p-3 rounded-lg bg-amber-100 hover:shadow-md transition-shadow group relative"
                  >
                    <div
                      class="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center mb-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path d="M4 7V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
                        <path d="M20 14v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3" />
                        <path d="M2 7h20v7H2z" />
                      </svg>
                    </div>
                    <h3 class="text-sm font-medium text-center">
                      Chasseur de trésors
                    </h3>
                    <div
                      class="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 mb-2 w-48 text-center"
                    >
                      Obtenu en trouvant un animal avec une particularité rare
                    </div>
                  </div>

                  <!-- Badge: Vétéran des sauvetages -->
                  <div
                    v-if="userBadges.includes('veteran')"
                    class="flex flex-col items-center p-3 rounded-lg bg-blue-100 hover:shadow-md transition-shadow group relative"
                  >
                    <div
                      class="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center mb-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <circle cx="12" cy="8" r="7" />
                        <polyline
                          points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
                        />
                      </svg>
                    </div>
                    <h3 class="text-sm font-medium text-center">
                      Vétéran des sauvetages
                    </h3>
                    <div
                      class="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 mb-2 w-48 text-center"
                    >
                      Obtenu en participant à plusieurs sauvetages réussis
                    </div>
                  </div>

                  <!-- Badge: Éclaireur nocturne -->
                  <div
                    v-if="userBadges.includes('night')"
                    class="flex flex-col items-center p-3 rounded-lg bg-gray-800 hover:shadow-md transition-shadow group relative"
                  >
                    <div
                      class="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-yellow-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                        />
                      </svg>
                    </div>
                    <h3 class="text-sm font-medium text-center text-white">
                      Éclaireur nocturne
                    </h3>
                    <div
                      class="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 mb-2 w-48 text-center"
                    >
                      Obtenu en repérant un animal errant tard dans la nuit
                    </div>
                  </div>
                </div>

                <div
                  class="mt-6 bg-gray-50 p-4 rounded-lg relative group"
                  @mouseenter="clearBadgeInfoTimeout"
                  @mouseleave="startBadgeInfoTimeout"
                >
                  <div class="flex justify-between items-center">
                    <h3 class="text-sm font-medium text-gray-700">
                      À propos des badges
                    </h3>
                    <button @click="toggleBadgeInfo" class="focus:outline-none">
                      <svg
                        :class="[
                          'w-5 h-5 text-gray-500 transition-transform duration-300',
                          badgeInfoVisible ? 'transform rotate-180' : '',
                        ]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  <transition
                    name="badge-info"
                    @enter="startBadgeInfoEnterAnimation"
                    @leave="startBadgeInfoLeaveAnimation"
                  >
                    <p
                      v-if="badgeInfoVisible"
                      class="text-xs text-gray-600 mt-2 overflow-hidden"
                    >
                      Les badges sont attribués automatiquement en fonction de
                      vos actions sur la plateforme. Passez votre souris sur un
                      badge pour découvrir comment l'obtenir. Continuez à
                      participer activement pour débloquer de nouveaux badges !
                    </p>
                  </transition>
                </div>
              </div>

              <div class="mt-8 border-t border-gray-200 pt-8">
                <div class="flex justify-between items-center mb-4">
                  <h2 class="text-xl font-semibold text-primary font-serif">
                    {{
                      isCurrentUser
                        ? "Mes signalements"
                        : "Signalements de " + userData.displayName
                    }}
                  </h2>
                  <button
                    v-if="isCurrentUser"
                    @click="router.push('/signalement')"
                    class="px-4 py-2 bg-white text-secondary border border-secondary rounded-full hover:bg-secondary hover:text-white transition-colors text-sm flex items-center shadow-sm"
                  >
                    <span class="mr-1">+</span> Signaler
                  </button>
                </div>

                <div v-if="userPets.length === 0" class="text-center py-8">
                  <p class="text-gray-500 font-sans">
                    {{
                      isCurrentUser
                        ? "Vous n'avez pas encore créé de signalements."
                        : "Cet utilisateur n'a pas encore créé de signalements."
                    }}
                  </p>
                </div>

                <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div
                    v-for="pet in userPets"
                    :key="pet.id"
                    class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <router-link
                      :to="{ name: 'PetDetailsPage', params: { id: pet.id } }"
                      class="block"
                    >
                      <div class="flex items-start gap-4">
                        <img
                          :src="
                            pet.images && pet.images.length > 0
                              ? pet.images[0]
                              : '/logo-nb-transparent.png'
                          "
                          alt="Photo de l'animal"
                          class="w-20 h-20 object-cover rounded-lg"
                        />
                        <div>
                          <h3 class="font-medium text-primary font-serif">
                            {{ pet.name || "Sans nom" }}
                          </h3>
                          <p class="text-sm text-gray-600 font-sans">
                            {{ pet.breed }}
                          </p>
                          <span
                            :class="[
                              'inline-block px-2 py-1 text-xs rounded-full mt-2',
                              pet.status === 'lost'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-green-100 text-green-800',
                            ]"
                          >
                            {{ pet.status === "lost" ? "Perdu" : "Trouvé" }}
                          </span>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>

              <!-- Calendrier de santé des animaux -->
              <div
                v-if="userPets.length > 0"
                class="mt-8 border-t border-gray-200 pt-8"
              >
                <PetHealthCalendar
                  :userId="userData.id"
                  :userPets="userPets"
                  :isCurrentUser="isCurrentUser"
                />
              </div>

              <div v-if="isCurrentUser" class="mt-8 flex justify-center">
                <button
                  @click="logout"
                  class="px-6 py-3 bg-secondary text-white rounded-full hover:bg-secondary-dark transition-colors shadow-md flex items-center gap-2"
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
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Se déconnecter
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Modal pour modifier la bannière -->
    <div
      v-if="showBannerModal"
      class="fixed inset-0 z-50 overflow-y-auto"
      aria-modal="true"
    >
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          @click="showBannerModal = false"
        ></div>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg font-medium text-gray-900 font-serif mb-4">
              Personnaliser la bannière
            </h3>

            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Couleur de fond</label
                >
                <input
                  type="color"
                  v-model="bannerForm.backgroundColor"
                  class="w-full h-10 rounded-md cursor-pointer"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Image de bannière (URL)</label
                >
                <input
                  type="text"
                  v-model="bannerForm.backgroundImage"
                  placeholder="https://exemple.com/image.jpg"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
                <p class="mt-1 text-xs text-gray-500">
                  Laissez vide pour utiliser uniquement la couleur
                </p>
              </div>

              <div class="mt-4">
                <h4 class="text-sm font-medium text-gray-700 mb-2">Aperçu</h4>
                <div
                  class="h-24 rounded-md w-full"
                  :style="previewBannerStyle"
                ></div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              @click="saveBanner"
              class="w-full inline-flex justify-center rounded-md border border-primary shadow-sm px-4 py-2 bg-white text-primary font-medium hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors sm:ml-3 sm:w-auto sm:text-sm"
            >
              Enregistrer
            </button>
            <button
              @click="showBannerModal = false"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal pour modifier le profil -->
    <div
      v-if="showProfileModal"
      class="fixed inset-0 z-50 overflow-y-auto"
      aria-modal="true"
    >
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          @click="showProfileModal = false"
        ></div>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg font-medium text-gray-900 font-serif mb-4">
              Modifier mon profil
            </h3>

            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Nom d'affichage</label
                >
                <input
                  type="text"
                  v-model="profileForm.displayName"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Téléphone</label
                >
                <input
                  type="tel"
                  v-model="profileForm.phone"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Adresse</label
                >
                <input
                  type="text"
                  v-model="profileForm.address"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Ville</label
                >
                <input
                  type="text"
                  v-model="profileForm.city"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Pays</label
                >
                <input
                  type="text"
                  v-model="profileForm.country"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <!-- Carte pour sélectionner la localisation -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Sélectionner sur la carte
                  <span class="text-xs text-gray-500 ml-1"
                    >(cliquez pour placer le marqueur)</span
                  >
                </label>
                <div
                  class="mt-1 rounded-lg overflow-hidden border border-gray-300"
                >
                  <UserLocationMap
                    :userData="profileForm"
                    :isEditable="true"
                    height="250px"
                    @update:coordinates="updateCoordinates"
                  />
                </div>
                <p class="mt-1 text-xs text-gray-500">
                  Utilisez la barre de recherche ou cliquez directement sur la
                  carte pour définir votre localisation.
                </p>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Site web</label
                >
                <input
                  type="url"
                  v-model="profileForm.website"
                  placeholder="https://exemple.com"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Email de contact</label
                >
                <input
                  type="email"
                  v-model="profileForm.contactEmail"
                  placeholder="contact@exemple.com"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
                <p class="mt-1 text-xs text-gray-500">
                  Cet email sera utilisé pour les boutons de contact. Si vide,
                  votre email de connexion sera utilisé.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              @click="saveProfile"
              class="w-full inline-flex justify-center rounded-md border border-primary shadow-sm px-4 py-2 bg-white text-primary font-medium hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors sm:ml-3 sm:w-auto sm:text-sm"
            >
              Enregistrer
            </button>
            <button
              @click="showProfileModal = false"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { userService } from "../services/userService";
import { petService } from "../services/petService";
import MainLayout from "../layouts/MainLayout.vue";
import PetHealthCalendar from "../components/PetHealthCalendar.vue";
import UserLocationMap from "../components/UserLocationMap.vue";

const router = useRouter();
const userData = ref(null);
const userPets = ref([]);
const loading = ref(true);
const isCurrentUser = ref(true);

// Badges de l'utilisateur (données en dur pour démonstration)
const userBadges = ref([
  "explorer", // Explorateur urbain
  "guardian", // Gardien des animaux
  "detective", // Détective des poils
  "friend", // Ami des animaux
  "contributor", // Contributeur assidu
  "samaritan", // Samaritain communautaire
  "night", // Éclaireur nocturne
  "treasure", // Chasseur de trésors
  "veteran", // Vétéran des sauvetages
]);

// Modals
const showBannerModal = ref(false);
const showProfileModal = ref(false);

// Formulaires
const bannerForm = ref({
  backgroundColor: "#E9EDF2", // Couleur par défaut (primary-light)
  backgroundImage: "",
});

const profileForm = ref({
  displayName: "",
  phone: "",
  address: "",
  city: "",
  country: "",
  website: "",
  coordinates: null,
  contactEmail: "", // Ajout d'un champ pour l'email de contact
});

// Style calculé pour la bannière
const bannerStyle = computed(() => {
  const style = {
    backgroundColor: userData.value?.bannerColor || "#E9EDF2",
  };

  if (userData.value?.bannerImage) {
    style.backgroundImage = `url(${userData.value.bannerImage})`;
    style.backgroundSize = "cover";
    style.backgroundPosition = "center";
  }

  return style;
});

// Style d'aperçu pour la bannière
const previewBannerStyle = computed(() => {
  const style = {
    backgroundColor: bannerForm.value.backgroundColor,
  };

  if (bannerForm.value.backgroundImage) {
    style.backgroundImage = `url(${bannerForm.value.backgroundImage})`;
    style.backgroundSize = "cover";
    style.backgroundPosition = "center";
  }

  return style;
});

const props = defineProps({
  userId: {
    type: String,
    default: null,
  },
});

onMounted(async () => {
  try {
    // Déterminer quel utilisateur afficher
    const currentUser = auth.currentUser;

    if (props.userId && props.userId !== currentUser.uid) {
      // Afficher le profil d'un autre utilisateur
      isCurrentUser.value = false;
      userData.value = await userService.getUserData(props.userId);

      // Récupérer les signalements de cet utilisateur
      const allPets = await petService.getAllPets();
      userPets.value = allPets.filter((pet) => pet.userId === props.userId);
    } else if (currentUser) {
      // Afficher le profil de l'utilisateur connecté
      isCurrentUser.value = true;
      userData.value = await userService.getUserData(currentUser.uid);

      // Récupérer les signalements de l'utilisateur connecté
      const allPets = await petService.getAllPets();
      userPets.value = allPets.filter((pet) => pet.userId === currentUser.uid);

      // Initialiser les formulaires avec les données existantes
      initForms();

      // Forcer le rechargement de l'image de profil si nécessaire
      if (userData.value && userData.value.photoURL) {
        console.log("URL de l'image de profil:", userData.value.photoURL);
        // Ne pas ajouter de timestamp qui peut causer des problèmes
        // Laisser le service userService gérer correctement l'URL
      }
    }
  } catch (error) {
    console.error("Erreur lors du chargement des données utilisateur:", error);
  } finally {
    loading.value = false;
  }
});

// Initialiser les formulaires avec les données existantes
const initForms = () => {
  if (userData.value) {
    // Bannière
    bannerForm.value.backgroundColor = userData.value.bannerColor || "#E9EDF2";
    bannerForm.value.backgroundImage = userData.value.bannerImage || "";

    // Profil
    profileForm.value.displayName = userData.value.displayName || "";
    profileForm.value.phone = userData.value.phone || "";
    profileForm.value.address = userData.value.address || "";
    profileForm.value.city = userData.value.city || "";
    profileForm.value.country = userData.value.country || "";
    profileForm.value.website = userData.value.website || "";
  }
};

// Initialiser le formulaire avec les données de l'utilisateur
const initProfileForm = () => {
  profileForm.value = {
    displayName: userData.value.displayName || "",
    phone: userData.value.phone || "",
    address: userData.value.address || "",
    city: userData.value.city || "",
    country: userData.value.country || "",
    website: userData.value.website || "",
    coordinates: userData.value.coordinates || null,
    contactEmail: userData.value.contactEmail || userData.value.email || "", // Utiliser l'email de contact s'il existe, sinon l'email de connexion
  };
};

// Enregistrer les modifications de la bannière
const saveBanner = async () => {
  try {
    if (!auth.currentUser) return;

    const bannerData = {
      bannerColor: bannerForm.value.backgroundColor,
      bannerImage: bannerForm.value.backgroundImage,
    };

    await userService.updateUserProfile(auth.currentUser.uid, bannerData);

    // Mettre à jour les données locales
    userData.value = {
      ...userData.value,
      ...bannerData,
    };

    showBannerModal.value = false;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la bannière:", error);
    alert("Une erreur est survenue lors de la mise à jour de la bannière.");
  }
};

// Enregistrer les modifications du profil
const saveProfile = async () => {
  try {
    await userService.updateUserProfile(auth.currentUser.uid, {
      displayName: profileForm.value.displayName,
      phone: profileForm.value.phone,
      address: profileForm.value.address,
      city: profileForm.value.city,
      country: profileForm.value.country,
      website: profileForm.value.website,
      coordinates: profileForm.value.coordinates,
      contactEmail: profileForm.value.contactEmail, // Ajout de l'email de contact
    });

    // Mettre à jour les données locales
    userData.value = {
      ...userData.value,
      displayName: profileForm.value.displayName,
      phone: profileForm.value.phone,
      address: profileForm.value.address,
      city: profileForm.value.city,
      country: profileForm.value.country,
      website: profileForm.value.website,
      coordinates: profileForm.value.coordinates,
      contactEmail: profileForm.value.contactEmail, // Ajout de l'email de contact
    };

    showProfileModal.value = false;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du profil:", error);
    alert("Une erreur est survenue lors de la mise à jour du profil.");
  }
};

const formatDate = (timestamp) => {
  if (!timestamp) return "Date inconnue";

  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const logout = async () => {
  try {
    await signOut(auth);
    router.push("/");
  } catch (error) {
    console.error("Erreur lors de la déconnexion:", error);
  }
};

const handleProfileImageError = (event) => {
  console.error(
    "Erreur lors du chargement de l'image de profil:",
    event.target.src
  );

  // Vérifier si l'URL est une URL Google
  const src = event.target.src;
  if (src && src.includes("googleusercontent.com")) {
    // Essayer une approche simple sans paramètres de temps ni de taille
    const baseUrl = src.split("=")[0];
    const newUrl = baseUrl + "=s96-c"; // Taille standard qui fonctionne bien

    console.log("Tentative avec URL simplifiée:", newUrl);
    event.target.src = newUrl;

    // Ajouter un gestionnaire pour cette nouvelle tentative
    event.target.onerror = () => {
      console.error(
        "Échec avec l'URL simplifiée, utilisation de l'image par défaut"
      );
      event.target.src = "/logo-nb-transparent.png";
      // Supprimer le gestionnaire pour éviter les boucles
      event.target.onerror = null;
    };
  } else {
    // Pour les autres types d'URL ou si la tentative alternative a échoué
    event.target.src = "/logo-nb-transparent.png";
  }
};

// Mettre à jour les coordonnées depuis la carte
const updateCoordinates = (data) => {
  // Mettre à jour les coordonnées
  profileForm.value.coordinates = {
    lng: data.lng,
    lat: data.lat,
  };

  // Si l'adresse complète est fournie, l'utiliser directement
  if (data.fullAddress) {
    // Mettre à jour les champs d'adresse si disponibles
    if (data.address) profileForm.value.address = data.address;
    if (data.city) profileForm.value.city = data.city;
    if (data.country) profileForm.value.country = data.country;
  }
  // Sinon, utiliser le service de géocodage inverse comme avant
  else if (data.lng && data.lat) {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${data.lng},${data.lat}.json?access_token=pk.eyJ1IjoidGliYWxpbyIsImEiOiJjbG82M2Z0OWcwaG1xMmttdjI1YmNudWUyIn0.BnGzE7APfkeVsCrtjWTQLw&types=address,place,country`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.features && data.features.length > 0) {
          // Extraire les informations d'adresse des résultats
          let address = "";
          let city = "";
          let country = "";

          data.features.forEach((feature) => {
            if (feature.place_type.includes("address") && !address) {
              address = feature.text;
            }
            if (feature.place_type.includes("place") && !city) {
              city = feature.text;
            }
            if (feature.place_type.includes("country") && !country) {
              country = feature.text;
            }
          });

          // Mettre à jour le formulaire avec les nouvelles informations
          if (address) profileForm.value.address = address;
          if (city) profileForm.value.city = city;
          if (country) profileForm.value.country = country;
          if (email) profileForm.value.email = email;
        }
      })
      .catch((error) => {
        console.error("Erreur lors du géocodage inverse:", error);
      });
  }
};

// Ouvrir le modal de modification du profil
const showEditProfileModal = () => {
  initProfileForm();
  showProfileModal.value = true;
};

const badgeInfoVisible = ref(false);
let badgeInfoTimeout = null;

const clearBadgeInfoTimeout = () => {
  if (badgeInfoTimeout) {
    clearTimeout(badgeInfoTimeout);
    badgeInfoTimeout = null;
  }
};

const startBadgeInfoTimeout = () => {
  clearBadgeInfoTimeout();
  if (badgeInfoVisible.value) {
    badgeInfoTimeout = setTimeout(() => {
      badgeInfoVisible.value = false;
    }, 2000);
  }
};

const toggleBadgeInfo = () => {
  badgeInfoVisible.value = !badgeInfoVisible.value;
  clearBadgeInfoTimeout();
  if (badgeInfoVisible.value) {
    startBadgeInfoTimeout();
  }
};

const startBadgeInfoEnterAnimation = (el, done) => {
  const height = el.scrollHeight;
  el.style.height = "0px";
  el.style.opacity = "0";

  // Force a reflow
  el.offsetHeight;

  el.style.transition = "height 0.3s ease-out, opacity 0.3s ease-out";
  el.style.height = height + "px";
  el.style.opacity = "1";

  el.addEventListener("transitionend", function handler() {
    el.removeEventListener("transitionend", handler);
    el.style.height = "auto";
    done();
  });
};

const startBadgeInfoLeaveAnimation = (el, done) => {
  const height = el.scrollHeight;
  el.style.height = height + "px";
  el.style.opacity = "1";

  // Force a reflow
  el.offsetHeight;

  el.style.transition = "height 0.3s ease-in, opacity 0.3s ease-in";
  el.style.height = "0px";
  el.style.opacity = "0";

  el.addEventListener("transitionend", function handler() {
    el.removeEventListener("transitionend", handler);
    done();
  });
};
</script>

<style scoped>
/* Styles existants */

/* Styles pour l'animation des badges */
.badge-info-enter-active,
.badge-info-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.badge-info-enter-from,
.badge-info-leave-to {
  opacity: 0;
  max-height: 0;
}

.badge-info-enter-to,
.badge-info-leave-from {
  opacity: 1;
  max-height: 100px;
}
</style>
