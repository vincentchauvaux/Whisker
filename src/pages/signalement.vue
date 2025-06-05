<template>
  <MainLayout>
    <div class="py-16">
      <div class="container mx-auto px-4 max-w-4xl mt-16">
        <h1 class="text-4xl font-bold text-center text-primary font-serif mb-8">
          Signaler un chat
        </h1>

        <div class="bg-white rounded-xl shadow-xl p-6 md:p-8">
          <!-- Étape 1: Type de signalement -->
          <div v-if="currentStep === 1" class="space-y-8">
            <h2 class="text-2xl font-serif text-primary text-center mb-8">
              Que souhaitez-vous signaler?
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                class="relative cursor-pointer transition-all duration-300 transform hover:scale-105"
                :class="{
                  'ring-4 ring-secondary scale-105 rounded-lg':
                    formData.status === 'lost',
                }"
                @click="selectStatus('lost')"
              >
                <div
                  class="bg-red-50 rounded-xl p-6 h-full flex flex-col items-center justify-center"
                  :class="STATUS_COLORS.LOST.bgLight"
                >
                  <div
                    class="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4"
                    :class="STATUS_COLORS.LOST.bg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-medium text-red-700 mb-2">
                    J'ai perdu mon chat
                  </h3>
                  <p class="text-center text-red-600">
                    Signalez la disparition de votre chat pour augmenter vos
                    chances de le retrouver
                  </p>
                </div>
                <div
                  v-if="formData.status === 'lost'"
                  class="absolute -top-2 -right-2 bg-secondary text-white rounded-full p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <div
                class="relative cursor-pointer transition-all duration-300 transform hover:scale-105"
                :class="{
                  'ring-4 ring-green-500 scale-105 rounded-lg':
                    formData.status === 'found',
                }"
                @click="selectStatus('found')"
              >
                <div
                  class="bg-green-50 rounded-xl p-6 h-full flex flex-col items-center justify-center"
                  :class="STATUS_COLORS.FOUND.bgLight"
                >
                  <div
                    class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4"
                    :class="STATUS_COLORS.FOUND.bg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-medium text-green-700 mb-2">
                    J'ai trouvé un chat
                  </h3>
                  <p class="text-center text-green-600">
                    Signalez un chat trouvé pour aider son propriétaire à le
                    retrouver
                  </p>
                </div>
                <div
                  v-if="formData.status === 'found'"
                  class="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Étape 2: Informations sur le chat -->
          <div v-if="currentStep === 2" class="space-y-6">
            <h2 class="text-2xl font-serif text-primary text-center mb-8">
              {{
                formData.status === "lost"
                  ? "Informations sur votre chat"
                  : "Informations sur le chat trouvé"
              }}
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Nom du chat</label
                >
                <input
                  type="text"
                  v-model="formData.name"
                  class="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-secondary focus:border-secondary"
                  :placeholder="
                    formData.status === 'found' ? 'Inconnu' : 'Nom du chat'
                  "
                />
                <p
                  class="text-xs text-gray-500 mt-1"
                  v-if="formData.status === 'found'"
                >
                  Laissez vide si vous ne connaissez pas le nom du chat
                </p>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Sexe</label
                >
                <div class="grid grid-cols-3 gap-3">
                  <div
                    class="cursor-pointer border rounded-full px-3 py-2 flex items-center justify-center transition-colors"
                    :class="
                      formData.gender === 'male'
                        ? 'bg-blue-50 border-blue-300'
                        : 'border-gray-300 hover:bg-gray-50'
                    "
                    @click="formData.gender = 'male'"
                  >
                    <div
                      class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"
                    >
                      <font-awesome-icon
                        :icon="['fas', 'mars']"
                        class="text-blue-500 text-xl"
                      />
                    </div>
                    <span class="ml-2 text-sm">Mâle</span>
                  </div>

                  <div
                    class="cursor-pointer border rounded-full px-3 py-2 flex items-center justify-center transition-colors"
                    :class="
                      formData.gender === 'female'
                        ? 'bg-pink-50 border-pink-300'
                        : 'border-gray-300 hover:bg-gray-50'
                    "
                    @click="formData.gender = 'female'"
                  >
                    <div
                      class="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center"
                    >
                      <font-awesome-icon
                        :icon="['fas', 'venus']"
                        class="text-pink-500 text-xl"
                      />
                    </div>
                    <span class="ml-2 text-sm">Femelle</span>
                  </div>

                  <div
                    class="cursor-pointer border rounded-full px-3 py-2 flex items-center justify-center transition-colors"
                    :class="
                      formData.gender === 'unknown'
                        ? 'bg-gray-50 border-gray-400'
                        : 'border-gray-300 hover:bg-gray-50'
                    "
                    @click="formData.gender = 'unknown'"
                  >
                    <div
                      class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                    >
                      <font-awesome-icon
                        :icon="['fas', 'question']"
                        class="text-gray-500 text-xl"
                      />
                    </div>
                    <span class="ml-2 text-sm">Inconnu</span>
                  </div>
                </div>
                <p
                  class="text-xs text-gray-500 mt-1"
                  v-if="formData.status === 'found'"
                >
                  Sélectionnez "Inconnu" si vous n'êtes pas sûr
                </p>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Âge approximatif</label
              >
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div
                  class="cursor-pointer border rounded-lg p-3 flex flex-col items-center justify-center transition-colors"
                  :class="
                    formData.age_estimate === 'Chaton'
                      ? 'bg-orange-50 border-orange-300'
                      : 'border-gray-300 hover:bg-gray-50'
                  "
                  @click="formData.age_estimate = 'Chaton'"
                >
                  <div class="w-10 h-10 flex items-center justify-center mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 text-orange-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M5 10 Q6 6 9 4 Q10 2 12 3 Q14 2 15 4 Q18 6 19 10 Q17 14 12 14 Q7 14 5 10Z"
                        stroke-width="2"
                      />
                      <circle cx="9" cy="9" r="1.5" fill="currentColor" />
                      <circle cx="15" cy="9" r="1.5" fill="currentColor" />
                      <rect
                        x="11"
                        y="14"
                        width="2"
                        height="3"
                        rx="0.5"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <span class="text-sm">Chaton</span>
                  <span class="text-xs text-gray-500">0-6 mois</span>
                </div>
                <div
                  class="cursor-pointer border rounded-lg p-3 flex flex-col items-center justify-center transition-colors"
                  :class="
                    formData.age_estimate === 'Jeune'
                      ? 'bg-green-50 border-green-300'
                      : 'border-gray-300 hover:bg-gray-50'
                  "
                  @click="formData.age_estimate = 'Jeune'"
                >
                  <div class="w-10 h-10 flex items-center justify-center mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M5 10 Q6 6 9 4 Q10 2 12 3 Q14 2 15 4 Q18 6 19 10 Q17 14 12 14 Q7 14 5 10Z"
                        stroke-width="2"
                      />
                      <circle cx="9" cy="9" r="1.5" fill="currentColor" />
                      <circle cx="15" cy="9" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <span class="text-sm">Jeune</span>
                  <span class="text-xs text-gray-500">6m-2 ans</span>
                </div>
                <div
                  class="cursor-pointer border rounded-lg p-3 flex flex-col items-center justify-center transition-colors"
                  :class="
                    formData.age_estimate === 'Adulte'
                      ? 'bg-blue-50 border-blue-300'
                      : 'border-gray-300 hover:bg-gray-50'
                  "
                  @click="formData.age_estimate = 'Adulte'"
                >
                  <div class="w-10 h-10 flex items-center justify-center mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M5 10 Q6 6 9 4 Q10 2 12 3 Q14 2 15 4 Q18 6 19 10 Q17 14 12 14 Q7 14 5 10Z"
                        stroke-width="2"
                      />
                      <circle cx="9" cy="9" r="1.5" fill="currentColor" />
                      <circle cx="15" cy="9" r="1.5" fill="currentColor" />
                      <path d="M5 14 L8 12 M19 14 L16 12" stroke-width="2" />
                    </svg>
                  </div>
                  <span class="text-sm">Adulte</span>
                  <span class="text-xs text-gray-500">2-10 ans</span>
                </div>
                <div
                  class="cursor-pointer border rounded-lg p-3 flex flex-col items-center justify-center transition-colors"
                  :class="
                    formData.age_estimate === 'Senior'
                      ? 'bg-purple-50 border-purple-300'
                      : 'border-gray-300 hover:bg-gray-50'
                  "
                  @click="formData.age_estimate = 'Senior'"
                >
                  <div class="w-10 h-10 flex items-center justify-center mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 text-purple-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M5 10 Q6 6 9 4 Q10 2 12 3 Q14 2 15 4 Q18 6 19 10 Q17 14 12 14 Q7 14 5 10Z"
                        stroke-width="2"
                      />
                      <circle cx="9" cy="9" r="1.5" fill="currentColor" />
                      <circle cx="15" cy="9" r="1.5" fill="currentColor" />
                      <line x1="8" y1="9" x2="16" y2="9" stroke-width="2" />
                      <path d="M5 14 L8 12 M19 14 L16 12" stroke-width="2" />
                      <path d="M7 17 Q12 19 17 17" stroke-width="2" />
                    </svg>
                  </div>
                  <span class="text-sm">Senior</span>
                  <span class="text-xs text-gray-500">10+ ans</span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Race</label
                >
                <div class="relative">
                  <input
                    type="text"
                    v-model="formData.breed"
                    @input="filterBreeds"
                    @focus="showBreedSuggestions = true"
                    class="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-secondary focus:border-secondary"
                    placeholder="Ex: Européen, Siamois..."
                  />
                  <div
                    v-if="showBreedSuggestions && filteredBreeds.length > 0"
                    class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                  >
                    <div
                      v-for="(breed, index) in filteredBreeds"
                      :key="breed"
                      @click="selectBreed(breed)"
                      class="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      :class="{
                        'bg-primary-light': index === selectedSuggestionIndex,
                      }"
                    >
                      {{ breed }}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">{{
                  formData.status === "found"
                    ? "Endroit trouvé"
                    : "Adresse personnelle"
                }}</label>
                <div class="relative flex">
                  <input
                    type="text"
                    v-model="formData.userAddress"
                    class="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:ring-2 focus:ring-secondary focus:border-secondary"
                    :placeholder="
                      formData.status === 'found'
                        ? 'Où avez-vous trouvé ce chat?'
                        : 'Votre adresse (pour faciliter les signalements)'
                    "
                  />
                  <button
                    @click="getCurrentLocation"
                    class="px-3 py-2 bg-white text-primary border border-l-0 border-gray-300 rounded-r-full hover:bg-primary-dark hover:text-white transition-colors"
                    title="Utiliser ma position actuelle"
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Longueur des poils</label
              >
              <div class="grid grid-cols-4 gap-2">
                <div
                  class="cursor-pointer border rounded-lg p-2 flex flex-col items-center justify-center transition-colors"
                  :class="
                    formData.fur_length === 'Court'
                      ? 'bg-amber-50 border-amber-300'
                      : 'border-gray-300 hover:bg-gray-50'
                  "
                  @click="formData.fur_length = 'Court'"
                >
                  <div
                    class="w-6 h-6 rounded-full flex items-center justify-center mb-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-amber-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M12 4 L12 20"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <span class="text-xs text-center">Court</span>
                </div>

                <div
                  class="cursor-pointer border rounded-lg p-2 flex flex-col items-center justify-center transition-colors"
                  :class="
                    formData.fur_length === 'Mi-long'
                      ? 'bg-amber-50 border-amber-300'
                      : 'border-gray-300 hover:bg-gray-50'
                  "
                  @click="formData.fur_length = 'Mi-long'"
                >
                  <div
                    class="w-6 h-6 rounded-full flex items-center justify-center mb-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-amber-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M12 4 L12 20 M10 6 L10 18 M14 6 L14 18"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <span class="text-xs text-center">Mi-long</span>
                </div>

                <div
                  class="cursor-pointer border rounded-lg p-2 flex flex-col items-center justify-center transition-colors"
                  :class="
                    formData.fur_length === 'Long'
                      ? 'bg-amber-50 border-amber-300'
                      : 'border-gray-300 hover:bg-gray-50'
                  "
                  @click="formData.fur_length = 'Long'"
                >
                  <div
                    class="w-6 h-6 rounded-full flex items-center justify-center mb-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-amber-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M12 4 L12 20 M9 7 L9 17 M15 7 L15 17 M6 10 L6 14 M18 10 L18 14"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <span class="text-xs text-center">Long</span>
                </div>

                <div
                  class="cursor-pointer border rounded-lg p-2 flex flex-col items-center justify-center transition-colors"
                  :class="
                    formData.fur_length === 'Sans poils'
                      ? 'bg-amber-50 border-amber-300'
                      : 'border-gray-300 hover:bg-gray-50'
                  "
                  @click="formData.fur_length = 'Sans poils'"
                >
                  <div
                    class="w-6 h-6 rounded-full flex items-center justify-center mb-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-amber-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="8" stroke-width="2" />
                    </svg>
                  </div>
                  <span class="text-xs text-center">Sans poils</span>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Couleur principale</label
                >
                <div class="grid grid-cols-4 gap-2">
                  <div
                    class="cursor-pointer border rounded-lg p-2 flex flex-col items-center justify-center transition-colors"
                    :class="
                      formData.color === 'Noir'
                        ? 'bg-gray-100 border-gray-500'
                        : 'border-gray-300 hover:bg-gray-50'
                    "
                    @click="formData.color = 'Noir'"
                  >
                    <div class="w-6 h-6 rounded-full bg-black mb-1"></div>
                    <span class="text-xs text-center">Noir</span>
                  </div>

                  <div
                    class="cursor-pointer border rounded-lg p-2 flex flex-col items-center justify-center transition-colors"
                    :class="
                      formData.color === 'Blanc'
                        ? 'bg-gray-50 border-gray-300'
                        : 'border-gray-300 hover:bg-gray-50'
                    "
                    @click="formData.color = 'Blanc'"
                  >
                    <div
                      class="w-6 h-6 rounded-full bg-white border border-gray-300 mb-1"
                    ></div>
                    <span class="text-xs text-center">Blanc</span>
                  </div>

                  <div
                    class="cursor-pointer border rounded-lg p-2 flex flex-col items-center justify-center transition-colors"
                    :class="
                      formData.color === 'Roux'
                        ? 'bg-orange-50 border-orange-300'
                        : 'border-gray-300 hover:bg-gray-50'
                    "
                    @click="formData.color = 'Roux'"
                  >
                    <div class="w-6 h-6 rounded-full bg-orange-600 mb-1"></div>
                    <span class="text-xs text-center">Roux</span>
                  </div>

                  <div
                    class="cursor-pointer border rounded-lg p-2 flex flex-col items-center justify-center transition-colors"
                    :class="
                      formData.color === 'Gris'
                        ? 'bg-gray-100 border-gray-400'
                        : 'border-gray-300 hover:bg-gray-50'
                    "
                    @click="formData.color = 'Gris'"
                  >
                    <div class="w-6 h-6 rounded-full bg-gray-500 mb-1"></div>
                    <span class="text-xs text-center">Gris</span>
                  </div>

                  <div
                    class="cursor-pointer border rounded-lg p-2 flex flex-col items-center justify-center transition-colors"
                    :class="
                      formData.color === 'Tigré'
                        ? 'bg-amber-50 border-amber-300'
                        : 'border-gray-300 hover:bg-gray-50'
                    "
                    @click="formData.color = 'Tigré'"
                  >
                    <div
                      class="w-6 h-6 rounded-full mb-1 relative overflow-hidden"
                      :style="{ background: getColorBackground('tigré') }"
                    ></div>
                    <span class="text-xs text-center">Tigré</span>
                  </div>

                  <div
                    class="cursor-pointer border rounded-lg p-2 flex flex-col items-center justify-center transition-colors"
                    :class="
                      formData.color === 'Bicolore'
                        ? 'bg-gray-100 border-gray-400'
                        : 'border-gray-300 hover:bg-gray-50'
                    "
                    @click="formData.color = 'Bicolore'"
                  >
                    <div
                      class="w-6 h-6 rounded-full mb-1 relative overflow-hidden"
                      :style="{ background: getColorBackground('bicolore') }"
                    ></div>
                    <span class="text-xs text-center">Bicolore</span>
                  </div>

                  <div
                    class="cursor-pointer border rounded-lg p-2 flex flex-col items-center justify-center transition-colors"
                    :class="
                      formData.color === 'Tricolore'
                        ? 'bg-orange-50 border-orange-300'
                        : 'border-gray-300 hover:bg-gray-50'
                    "
                    @click="formData.color = 'Tricolore'"
                  >
                    <div
                      class="w-6 h-6 rounded-full mb-1 relative overflow-hidden"
                      :style="{ background: getColorBackground('tricolore') }"
                    ></div>
                    <span class="text-xs text-center">Tricolore</span>
                  </div>

                  <div
                    class="cursor-pointer border rounded-lg p-2 flex flex-col items-center justify-center transition-colors"
                    :class="
                      formData.color === 'Autre'
                        ? 'bg-amber-50 border-amber-300'
                        : 'border-gray-300 hover:bg-gray-50'
                    "
                    @click="formData.color = 'Autre'"
                  >
                    <div
                      class="w-6 h-6 rounded-full mb-1 relative overflow-hidden"
                      :style="{ background: getColorBackground('spotted') }"
                    ></div>
                    <span class="text-xs text-center">Autre</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Signes distinctifs</label
              >
              <div class="relative">
                <div
                  class="w-full px-4 py-2 border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-secondary focus-within:border-secondary flex flex-wrap gap-2 items-center"
                >
                  <div
                    v-for="feature in selectedFeatures"
                    :key="feature"
                    :class="[
                      'px-3 py-1 rounded-full text-sm flex items-center cursor-pointer transition-colors',
                      getTagColorClass(feature),
                    ]"
                  >
                    {{ feature }}
                    <span
                      @click="toggleFeature(feature)"
                      class="ml-2 hover:text-primary-dark"
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </div>
                  <input
                    type="text"
                    v-model="formData.distinctive_features"
                    @input="filterFeatures"
                    @focus="
                      showFeatureSuggestions = true;
                      filterFeatures();
                    "
                    @blur="hideFeatureSuggestions"
                    @keydown.enter.prevent="addCustomFeature"
                    class="flex-grow min-w-[120px] outline-none border-none focus:ring-0"
                    placeholder="Rechercher un signe distinctif..."
                  />
                </div>
                <div
                  v-if="showFeatureSuggestions"
                  class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-3"
                >
                  <div class="flex flex-wrap gap-2">
                    <div
                      v-for="feature in filteredFeatures"
                      :key="feature"
                      @click="toggleFeature(feature)"
                      :class="[
                        'px-3 py-1 rounded-full text-sm flex items-center cursor-pointer transition-colors',
                        selectedFeatures.includes(feature)
                          ? getTagColorClass(feature)
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                      ]"
                    >
                      {{ feature }}
                      <span
                        v-if="selectedFeatures.includes(feature)"
                        class="ml-2 hover:text-primary-dark"
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                    </div>
                    <div
                      v-if="filteredFeatures.length > visibleFeatureCount"
                      class="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 cursor-pointer hover:bg-gray-200"
                      @click="toggleMoreFeatures"
                    >
                      {{ showAllFeatures ? "Voir moins" : "+" }}
                    </div>
                    <div
                      v-if="filteredFeatures.length === 0"
                      class="text-sm text-gray-500 p-2 w-full"
                    >
                      Aucun signe distinctif correspondant
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-between mt-8">
              <button
                @click="currentStep = 1"
                class="px-6 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors"
              >
                Retour
              </button>

              <button
                @click="nextStep"
                class="px-8 py-3 bg-secondary text-white rounded-full font-medium hover:bg-secondary-dark transition-colors"
              >
                Continuer
              </button>
            </div>
          </div>

          <!-- Étape 3: Localisation et contact -->
          <div v-if="currentStep === 3" class="space-y-6">
            <h2 class="text-2xl font-serif text-primary text-center mb-8">
              {{
                formData.status === "lost"
                  ? "Où avez-vous perdu votre chat?"
                  : "Où avez-vous trouvé ce chat?"
              }}
            </h2>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Adresse</label
              >
              <div class="relative flex">
                <input
                  type="text"
                  v-model="formData.last_seen_location.address"
                  @input="filterAddresses"
                  @focus="showAddressSuggestions = true"
                  class="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                  :placeholder="formData.userAddress || 'Rue, numéro...'"
                />
                <button
                  @click="useUserAddress"
                  class="px-3 py-2 bg-secondary text-white rounded-r-lg hover:bg-secondary-dark transition-colors"
                  title="Utiliser mon adresse personnelle"
                >
                  +
                </button>
                <div
                  v-if="showAddressSuggestions && filteredAddresses.length > 0"
                  class="absolute z-10 w-full mt-1 top-full left-0 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                >
                  <div
                    v-for="(address, index) in filteredAddresses"
                    :key="address"
                    @click="selectAddress(address)"
                    class="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    :class="{
                      'bg-primary-light': index === selectedSuggestionIndex,
                    }"
                  >
                    {{ address }}
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Ville</label
                >
                <div class="relative">
                  <input
                    type="text"
                    v-model="formData.last_seen_location.city"
                    @input="filterCities"
                    @focus="showCitySuggestions = true"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                    placeholder="Ville"
                  />
                  <div
                    v-if="showCitySuggestions && filteredCities.length > 0"
                    class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                  >
                    <div
                      v-for="(city, index) in filteredCities"
                      :key="city"
                      @click="selectCity(city)"
                      class="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      :class="{
                        'bg-primary-light': index === selectedSuggestionIndex,
                      }"
                    >
                      {{ city }}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Région</label
                >
                <input
                  type="text"
                  v-model="formData.last_seen_location.region"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                  placeholder="Région"
                  value="Bruxelles"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Date</label
              >
              <input
                type="date"
                v-model="formData.last_seen_date"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
              />
            </div>

            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
              <h3 class="text-lg font-medium text-gray-900 mb-3">
                Informations de contact
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1"
                    >Votre nom</label
                  >
                  <input
                    type="text"
                    v-model="formData.contact.name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                    placeholder="Nom complet"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1"
                    >Téléphone</label
                  >
                  <input
                    type="tel"
                    v-model="formData.contact.phone"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                    placeholder="+32 XX XXX XX XX"
                  />
                </div>
              </div>

              <div class="mt-3">
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Email</label
                >
                <input
                  type="email"
                  v-model="formData.contact.email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                  placeholder="votre@email.com"
                />
                <p class="text-xs text-gray-500 mt-1">
                  Ces informations permettront aux personnes intéressées de vous
                  contacter.
                </p>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Photo</label
              >
              <div
                class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                @click="triggerFileInput"
              >
                <input
                  type="file"
                  ref="fileInput"
                  @change="handleImageUpload"
                  accept="image/*"
                  class="hidden"
                />
                <div v-if="!formData.images.length && !isUploadingImage">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12 text-gray-400 mx-auto mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p class="text-gray-500">Cliquez pour ajouter une photo</p>
                  <p class="text-xs text-gray-400 mt-1">
                    Format JPG, PNG - Max 5MB
                  </p>
                  <button
                    @click.stop="useDefaultImage"
                    class="mt-3 text-sm text-primary hover:text-primary-dark underline"
                  >
                    Utiliser l'image par défaut
                  </button>
                </div>
                <div v-else-if="isUploadingImage" class="py-4">
                  <div
                    class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-2"
                  ></div>
                  <p class="text-gray-500">Téléchargement en cours...</p>
                  <p class="text-xs text-gray-400 mt-1">
                    Veuillez patienter, cela peut prendre quelques instants
                  </p>
                </div>
                <div v-else class="relative">
                  <img
                    :src="formData.images[0]"
                    alt="Preview"
                    class="max-h-48 mx-auto rounded-lg"
                    @error="$event.target.src = '/Logo-graphique-2-big.png'"
                  />
                  <button
                    @click.stop="formData.images = []"
                    class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex mt-2 justify-between text-xs text-gray-400">
                <p>Formats acceptés : JPG, PNG, GIF</p>
                <p>Taille maximale : 5 MB par image</p>
              </div>
            </div>

            <div v-if="formData.status === 'lost'">
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Récompense</label
              >
              <div class="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="reward_offered"
                  v-model="formData.reward_offered"
                  class="h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded"
                />
                <label
                  for="reward_offered"
                  class="ml-2 block text-sm text-gray-700"
                >
                  Je propose une récompense
                </label>
              </div>
              <div v-if="formData.reward_offered" class="mt-2">
                <div class="flex items-center">
                  <span class="text-gray-500 mr-2">€</span>
                  <input
                    type="number"
                    v-model="formData.reward_amount"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                    placeholder="Montant"
                    min="1"
                  />
                </div>
              </div>
            </div>

            <div class="flex justify-between mt-8">
              <button
                @click="currentStep = 2"
                class="px-6 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors"
              >
                Retour
              </button>

              <button
                @click="submitForm"
                class="px-8 py-3 bg-secondary text-white rounded-full font-medium hover:bg-secondary-dark transition-colors"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="flex items-center">
                  <svg
                    class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Envoi en cours...
                </span>
                <span v-else>Publier le signalement</span>
              </button>
            </div>
          </div>

          <!-- Étape 4: Confirmation -->
          <div v-if="currentStep === 4" class="text-center py-8">
            <div
              class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 class="text-2xl font-serif text-primary mb-4">
              Signalement publié avec succès!
            </h2>
            <p class="text-gray-600 mb-8">
              {{
                formData.status === "lost"
                  ? "Votre signalement a été publié. Nous espérons que vous retrouverez bientôt votre chat."
                  : "Merci d'avoir signalé ce chat trouvé. Vous contribuez à aider un propriétaire à retrouver son animal."
              }}
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <router-link
                :to="{ name: 'PetDetailsPage', params: { id: submittedPetId } }"
                class="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                Voir mon signalement
              </router-link>
              <router-link
                to="/"
                class="px-6 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors"
              >
                Retour à l'accueil
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase/config";
import { storage } from "../firebase/config";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { petService } from "../services/petService";
import MainLayout from "../layouts/MainLayout.vue";
import {
  STATUS_COLORS,
  getTagColorClass,
  getColorBackground,
  TAG_COLORS,
} from "../constants/colors.js";

const router = useRouter();
const currentStep = ref(1);
const isSubmitting = ref(false);
const isUploadingImage = ref(false);
const fileInput = ref(null);
const submittedPetId = ref(null);

// Variables pour l'autocomplétion
const showBreedSuggestions = ref(false);
const showFeatureSuggestions = ref(false);
const showAddressSuggestions = ref(false);
const showCitySuggestions = ref(false);
const filteredBreeds = ref([]);
const filteredFeatures = ref([]);
const filteredAddresses = ref([]);
const filteredCities = ref([]);
const selectedFeatures = ref([]);
const selectedSuggestionIndex = ref(0);
const showAllFeatures = ref(false);
const visibleFeatureCount = ref(15); // Nombre de caractéristiques visibles par défaut

// Liste des races de chats courantes
const catBreeds = [
  "Européen",
  "Siamois",
  "Persan",
  "Maine Coon",
  "Bengal",
  "Ragdoll",
  "Abyssin",
  "Birman",
  "British Shorthair",
  "Sphynx",
  "Sacré de Birmanie",
  "Norvégien",
  "Chartreux",
  "Exotic Shorthair",
  "Angora Turc",
  "Sibérien",
  "Somali",
  "Bleu Russe",
  "Scottish Fold",
  "Munchkin",
];

// Liste des signes distinctifs courants
const commonFeatures = [
  "Collier rouge",
  "Collier bleu",
  "Collier avec médaille",
  "Collier avec clochette",
  "Collier anti-puces",
  "Puce électronique",
  "Tatouage à l'oreille",
  "Queue coupée",
  "Oreille coupée/entaillée",
  "Cicatrice sur le flanc",
  "Cicatrice sur la tête",
  "Cicatrice sur la patte",
  "Boiterie",
  "Tache blanche sur le poitrail",
  "Tache noire sur le museau",
  "Yeux vairons (de couleurs différentes)",
  "Œil manquant",
  "Poil long",
  "Poil court",
  "Pelage tacheté",
  "Pelage rayé",
  "Pelage uni",
  "Museau blanc",
  "Pattes blanches",
  "Queue touffue",
  "Bout de la queue blanc",
  "Bout des oreilles noir",
  "Ventre blanc",
  "Dos noir",
  "Castré/stérilisé",
];

// Liste des villes belges courantes
const belgianCities = [
  "Bruxelles",
  "Anvers",
  "Gand",
  "Charleroi",
  "Liège",
  "Bruges",
  "Namur",
  "Louvain",
  "Mons",
  "Wavre",
  "Ostende",
  "Tournai",
  "Hasselt",
  "Arlon",
  "Malines",
  "Courtrai",
  "Verviers",
  "Mouscron",
  "Genk",
  "Seraing",
];

// Liste des adresses communes (exemples)
const commonAddresses = [
  "Rue de la Loi",
  "Avenue Louise",
  "Boulevard Anspach",
  "Rue Royale",
  "Place du Grand Sablon",
  "Rue Neuve",
  "Avenue de Tervuren",
  "Chaussée de Waterloo",
  "Boulevard du Souverain",
  "Rue du Marché aux Herbes",
  "Avenue Franklin Roosevelt",
  "Rue de la Régence",
  "Boulevard de Waterloo",
  "Rue des Bouchers",
  "Avenue de la Toison d'Or",
];

// Initialiser le formulaire avec des valeurs par défaut
const formData = ref({
  status: "",
  name: "", // Nom du chat
  species: "chat", // Espèce (toujours "chat" dans ce cas)
  breed: "",
  color: "",
  fur_length: "",
  gender: "",
  age: "", // Âge numérique au lieu de age_estimate
  description: "", // Description générale du chat
  distinctive_features: "", // Champ temporaire pour la saisie
  last_seen_location: {
    // Remplace location
    address: "",
    city: "",
    region: "Bruxelles",
    coordinates: {
      lat: null,
      lng: null,
    },
  },
  last_seen_date: new Date().toISOString().substr(0, 10), // Remplace date
  images: [],
  tags: [],
  contact: {
    // Informations de contact
    name: "", // Nom du propriétaire/découvreur
    email: "", // Email de contact
    phone: "", // Téléphone de contact
  },
  reward_offered: false,
  reward_amount: 0,
  userAddress: "", // Adresse personnelle de l'utilisateur (champ temporaire)
});

// Propriété calculée pour les caractéristiques visibles
const visibleFeatures = computed(() => {
  if (showAllFeatures.value) {
    return commonFeatures;
  } else {
    return commonFeatures.slice(0, visibleFeatureCount.value);
  }
});

// Vérifier si l'utilisateur est connecté
onMounted(() => {
  if (!auth.currentUser) {
    alert("Vous devez être connecté pour créer un signalement.");
    router.push("/");
  }

  // Initialiser les listes filtrées
  filteredBreeds.value = [...catBreeds];
  filteredFeatures.value = [...commonFeatures];
  filteredAddresses.value = [...commonAddresses];
  filteredCities.value = [...belgianCities];

  // Ajouter un gestionnaire pour fermer les suggestions lors d'un clic à l'extérieur
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".relative")) {
      showBreedSuggestions.value = false;
      showFeatureSuggestions.value = false;
      showAddressSuggestions.value = false;
      showCitySuggestions.value = false;
    }
  });

  // Ajouter un gestionnaire pour les touches Tab et Enter
  document.addEventListener("keydown", handleKeyDown);
});

// Gérer les touches Tab et Enter pour la sélection des suggestions
const handleKeyDown = (e) => {
  // Si aucune suggestion n'est affichée, ne rien faire
  if (
    !showBreedSuggestions.value &&
    !showFeatureSuggestions.value &&
    !showAddressSuggestions.value &&
    !showCitySuggestions.value
  ) {
    return;
  }

  // Empêcher le comportement par défaut pour Tab dans les champs avec suggestions
  if (e.key === "Tab" || e.key === "Enter") {
    if (showBreedSuggestions.value && filteredBreeds.value.length > 0) {
      e.preventDefault();
      selectBreed(filteredBreeds.value[selectedSuggestionIndex.value]);
    } else if (
      showFeatureSuggestions.value &&
      filteredFeatures.value.length > 0
    ) {
      e.preventDefault();
      toggleFeature(filteredFeatures.value[selectedSuggestionIndex.value]);
    } else if (
      showAddressSuggestions.value &&
      filteredAddresses.value.length > 0
    ) {
      e.preventDefault();
      selectAddress(filteredAddresses.value[selectedSuggestionIndex.value]);
    } else if (showCitySuggestions.value && filteredCities.value.length > 0) {
      e.preventDefault();
      selectCity(filteredCities.value[selectedSuggestionIndex.value]);
    }
  }

  // Navigation dans les suggestions avec les flèches
  else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (showBreedSuggestions.value && filteredBreeds.value.length > 0) {
      selectedSuggestionIndex.value =
        (selectedSuggestionIndex.value + 1) % filteredBreeds.value.length;
    } else if (
      showFeatureSuggestions.value &&
      filteredFeatures.value.length > 0
    ) {
      selectedSuggestionIndex.value =
        (selectedSuggestionIndex.value + 1) % filteredFeatures.value.length;
    } else if (
      showAddressSuggestions.value &&
      filteredAddresses.value.length > 0
    ) {
      selectedSuggestionIndex.value =
        (selectedSuggestionIndex.value + 1) % filteredAddresses.value.length;
    } else if (showCitySuggestions.value && filteredCities.value.length > 0) {
      selectedSuggestionIndex.value =
        (selectedSuggestionIndex.value + 1) % filteredCities.value.length;
    }
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (showBreedSuggestions.value && filteredBreeds.value.length > 0) {
      selectedSuggestionIndex.value =
        (selectedSuggestionIndex.value - 1 + filteredBreeds.value.length) %
        filteredBreeds.value.length;
    } else if (
      showFeatureSuggestions.value &&
      filteredFeatures.value.length > 0
    ) {
      selectedSuggestionIndex.value =
        (selectedSuggestionIndex.value - 1 + filteredFeatures.value.length) %
        filteredFeatures.value.length;
    } else if (
      showAddressSuggestions.value &&
      filteredAddresses.value.length > 0
    ) {
      selectedSuggestionIndex.value =
        (selectedSuggestionIndex.value - 1 + filteredAddresses.value.length) %
        filteredAddresses.value.length;
    } else if (showCitySuggestions.value && filteredCities.value.length > 0) {
      selectedSuggestionIndex.value =
        (selectedSuggestionIndex.value - 1 + filteredCities.value.length) %
        filteredCities.value.length;
    }
  }
  // Fermer les suggestions avec Escape
  else if (e.key === "Escape") {
    showBreedSuggestions.value = false;
    showFeatureSuggestions.value = false;
    showAddressSuggestions.value = false;
    showCitySuggestions.value = false;
  }
};

// Filtrer les races en fonction de la saisie
const filterBreeds = () => {
  selectedSuggestionIndex.value = 0;
  if (!formData.value.breed) {
    filteredBreeds.value = [...catBreeds];
    return;
  }

  const query = formData.value.breed.toLowerCase();
  filteredBreeds.value = catBreeds.filter((breed) =>
    breed.toLowerCase().includes(query)
  );
};

// Sélectionner une race dans la liste
const selectBreed = (breed) => {
  formData.value.breed = breed;
  showBreedSuggestions.value = false;
};

// Filtrer les signes distinctifs en fonction de la saisie
const filterFeatures = () => {
  selectedSuggestionIndex.value = 0;

  // Si le champ est vide, afficher tous les signes distinctifs
  if (!formData.value.distinctive_features) {
    filteredFeatures.value = commonFeatures;
    return;
  }

  // Sinon, filtrer selon la saisie
  const query = formData.value.distinctive_features.toLowerCase();
  filteredFeatures.value = commonFeatures.filter((feature) =>
    feature.toLowerCase().includes(query)
  );

  // Afficher les suggestions si des résultats sont trouvés
  showFeatureSuggestions.value = true;
};

// Filtrer les adresses en fonction de la saisie
const filterAddresses = () => {
  selectedSuggestionIndex.value = 0;
  if (!formData.value.last_seen_location.address) {
    filteredAddresses.value = [...commonAddresses];
    return;
  }

  const query = formData.value.last_seen_location.address.toLowerCase();
  filteredAddresses.value = commonAddresses.filter((address) =>
    address.toLowerCase().includes(query)
  );
};

// Sélectionner une adresse dans la liste
const selectAddress = (address) => {
  formData.value.last_seen_location.address = address;
  showAddressSuggestions.value = false;
};

// Filtrer les villes en fonction de la saisie
const filterCities = () => {
  selectedSuggestionIndex.value = 0;
  if (!formData.value.last_seen_location.city) {
    filteredCities.value = [...belgianCities];
    return;
  }

  const query = formData.value.last_seen_location.city.toLowerCase();
  filteredCities.value = belgianCities.filter((city) =>
    city.toLowerCase().includes(query)
  );
};

// Sélectionner une ville dans la liste
const selectCity = (city) => {
  formData.value.last_seen_location.city = city;
  showCitySuggestions.value = false;
};

// Utiliser l'adresse personnelle de l'utilisateur pour l'adresse du signalement
const useUserAddress = () => {
  if (formData.value.userAddress) {
    formData.value.last_seen_location.address = formData.value.userAddress;
  }
};

// Récupérer la position actuelle de l'utilisateur
const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          // Stocker les coordonnées
          formData.value.last_seen_location.coordinates.lat = latitude;
          formData.value.last_seen_location.coordinates.lng = longitude;

          // Utiliser l'API de géocodage inverse pour obtenir l'adresse
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=fr`
          );

          if (response.ok) {
            const data = await response.json();

            // Extraire les informations d'adresse
            const address = data.address;
            let formattedAddress = "";

            if (address.road) {
              formattedAddress += address.road;
              if (address.house_number) {
                formattedAddress += " " + address.house_number;
              }
            }

            // Mettre à jour l'adresse personnelle
            formData.value.userAddress = formattedAddress;

            // Mettre à jour la ville si disponible
            if (address.city || address.town || address.village) {
              formData.value.last_seen_location.city =
                address.city || address.town || address.village;
            }

            // Mettre à jour la région si disponible
            if (address.state) {
              formData.value.last_seen_location.region = address.state;
            }
          } else {
            alert(
              "Impossible de récupérer l'adresse à partir de vos coordonnées."
            );
          }
        } catch (error) {
          console.error("Erreur lors de la récupération de l'adresse:", error);
          alert(
            "Une erreur est survenue lors de la récupération de votre position."
          );
        }
      },
      (error) => {
        console.error("Erreur de géolocalisation:", error);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("Vous avez refusé l'accès à votre position.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Les informations de position ne sont pas disponibles.");
            break;
          case error.TIMEOUT:
            alert("La demande de position a expiré.");
            break;
          default:
            alert(
              "Une erreur inconnue est survenue lors de la géolocalisation."
            );
            break;
        }
      }
    );
  } else {
    alert("La géolocalisation n'est pas prise en charge par votre navigateur.");
  }
};

// Utiliser une image par défaut pour le signalement
const useDefaultImage = () => {
  // Utiliser le logo local comme image par défaut
  const defaultImageUrl = "/Logo-graphique-2-big.png";
  formData.value.images = [defaultImageUrl];
};

// Ajouter ou supprimer un signe distinctif de la liste
const toggleFeature = (feature) => {
  const index = selectedFeatures.value.indexOf(feature);
  if (index === -1) {
    // Ajouter le feature
    selectedFeatures.value.push(feature);

    // Ajouter le feature comme tag
    if (!formData.value.tags.includes(feature)) {
      formData.value.tags.push(feature);
    }
  } else {
    // Supprimer le feature
    selectedFeatures.value.splice(index, 1);

    // Supprimer le tag correspondant
    const tagIndex = formData.value.tags.indexOf(feature);
    if (tagIndex !== -1) {
      formData.value.tags.splice(tagIndex, 1);
    }
  }

  // Mettre à jour le champ de texte pour la recherche
  formData.value.distinctive_features = "";

  // Mettre à jour les suggestions
  filterFeatures();

  // Fermer les suggestions
  showFeatureSuggestions.value = false;
};

// Cacher les suggestions de signes distinctifs avec un délai
const hideFeatureSuggestions = () => {
  setTimeout(() => {
    showFeatureSuggestions.value = false;
  }, 200);
};

// Afficher plus ou moins de caractéristiques
const toggleMoreFeatures = () => {
  showAllFeatures.value = !showAllFeatures.value;
};

// Supprimer un tag de la liste des tags
const removeTag = (tag, index) => {
  formData.value.tags.splice(index, 1);

  // Si le tag est aussi dans les caractéristiques sélectionnées, le supprimer
  const featureIndex = selectedFeatures.value.indexOf(tag);
  if (featureIndex !== -1) {
    selectedFeatures.value.splice(featureIndex, 1);

    // Mettre à jour le champ de texte
    formData.value.distinctive_features = formData.value.distinctive_features
      .replace(`, ${tag}`, "")
      .replace(`${tag}, `, "");
  }

  // Mettre à jour les suggestions
  filterFeatures();

  // Fermer les suggestions
  showFeatureSuggestions.value = false;
};

// Fonction pour sélectionner le statut du signalement (perdu ou trouvé)
const selectStatus = (status) => {
  formData.value.status = status;
  currentStep.value = 2;
};

// Ajouter un signe distinctif personnalisé
const addCustomFeature = () => {
  if (!formData.value.distinctive_features.trim()) return;

  const customFeature = formData.value.distinctive_features.trim();

  // Vérifier si le feature existe déjà
  if (!selectedFeatures.value.includes(customFeature)) {
    // Ajouter le feature personnalisé
    selectedFeatures.value.push(customFeature);

    // Ajouter le feature comme tag
    if (!formData.value.tags.includes(customFeature)) {
      formData.value.tags.push(customFeature);
    }
  }

  // Réinitialiser le champ
  formData.value.distinctive_features = "";

  // Mettre à jour les suggestions
  filterFeatures();

  // Fermer les suggestions
  showFeatureSuggestions.value = false;
};

// Fonction pour passer à l'étape suivante
const nextStep = () => {
  // Validation de base pour l'étape 2
  if (currentStep.value === 2) {
    if (!formData.value.color) {
      alert("Veuillez sélectionner une couleur pour le chat.");
      return;
    }

    if (!formData.value.age_estimate) {
      alert("Veuillez sélectionner une estimation d'âge pour le chat.");
      return;
    }
  }

  // Passer à l'étape suivante
  currentStep.value += 1;
};

// Soumettre le formulaire
const submitForm = async () => {
  try {
    isSubmitting.value = true;

    // Vérifier les champs obligatoires
    if (!formData.value.status) {
      alert("Veuillez indiquer si le chat est perdu ou trouvé.");
      isSubmitting.value = false;
      return;
    }

    if (!formData.value.last_seen_location.city) {
      alert("Veuillez indiquer la ville où le chat a été perdu/trouvé.");
      isSubmitting.value = false;
      return;
    }

    // Convertir l'âge en nombre si possible
    if (formData.value.age_estimate) {
      // Convertir l'estimation d'âge en valeur numérique approximative
      switch (formData.value.age_estimate) {
        case "Chaton":
          formData.value.age = 0.5; // 6 mois
          break;
        case "Jeune":
          formData.value.age = 1.5; // 1.5 ans
          break;
        case "Adulte":
          formData.value.age = 5; // 5 ans
          break;
        case "Senior":
          formData.value.age = 12; // 12 ans
          break;
        default:
          formData.value.age = null;
      }
    }

    // Générer une description automatique si elle n'est pas fournie
    if (!formData.value.description) {
      let description = `Chat ${formData.value.color.toLowerCase()} `;
      if (formData.value.breed) {
        description += `de race ${formData.value.breed} `;
      }
      if (formData.value.fur_length) {
        description += `avec des poils ${formData.value.fur_length.toLowerCase()}. `;
      }
      if (formData.value.age) {
        description += `Il a ${formData.value.age} ans `;
      }
      if (formData.value.tags.length > 0) {
        description += `et est ${formData.value.tags.join(", ")}.`;
      }
      formData.value.description = description;
    }

    // Récupérer les informations de l'utilisateur connecté pour le contact
    if (auth.currentUser) {
      if (!formData.value.contact.email) {
        formData.value.contact.email = auth.currentUser.email || "";
      }
      if (!formData.value.contact.name && auth.currentUser.displayName) {
        formData.value.contact.name = auth.currentUser.displayName;
      }
    }

    // Préparer les données pour la soumission
    const petData = {
      ...formData.value,
      userId: auth.currentUser.uid,
      createdAt: new Date(),
      updatedAt: new Date(),
      last_seen_date: new Date(formData.value.last_seen_date),
    };

    // Supprimer les champs temporaires qui ne doivent pas être stockés
    delete petData.distinctive_features;
    delete petData.userAddress;
    delete petData.age_estimate;

    // Créer le signalement
    const petId = await petService.addPet(petData);
    submittedPetId.value = petId;

    // Rediriger vers la page de détails du signalement
    router.push({ name: "PetDetailsPage", params: { id: petId } });
  } catch (error) {
    console.error("Erreur lors de la création du signalement:", error);
    alert(
      "Une erreur est survenue lors de la création du signalement. Veuillez réessayer."
    );
  } finally {
    isSubmitting.value = false;
  }
};
</script>
