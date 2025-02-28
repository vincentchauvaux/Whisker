<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold text-primary font-serif">
          Calendrier de santé
        </h2>
        <button
          v-if="isCurrentUser"
          @click="showAddEventModal = true"
          class="px-3 py-1.5 bg-secondary text-white rounded-full hover:bg-secondary-dark transition-colors text-sm flex items-center gap-1"
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          Ajouter
        </button>
      </div>

      <div v-if="loading" class="flex justify-center py-8">
        <div
          class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"
        ></div>
      </div>

      <div v-else-if="healthEvents.length === 0" class="text-center py-8">
        <p class="text-gray-500 font-sans">
          Aucun événement de santé n'a été enregistré.
        </p>
        <p v-if="isCurrentUser" class="text-sm text-gray-400 mt-2 font-sans">
          Cliquez sur "Ajouter" pour créer votre premier événement.
        </p>
      </div>

      <div v-else>
        <!-- Calendrier mensuel simplifié -->
        <div class="mb-6">
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
          <div class="grid grid-cols-7 gap-1">
            <div
              v-for="(day, index) in calendarDays"
              :key="index"
              :class="[
                'relative h-10 flex items-center justify-center rounded-full',
                day.isCurrentMonth
                  ? 'text-gray-800'
                  : 'text-gray-400 bg-gray-50',
                day.isToday ? 'bg-primary-light' : '',
                day.hasEvent ? 'font-bold' : '',
              ]"
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
        </div>

        <!-- Liste des événements à venir -->
        <div>
          <h3 class="text-lg font-medium text-gray-800 mb-4">
            Événements à venir
          </h3>
          <div class="space-y-4">
            <div
              v-for="event in upcomingEvents"
              :key="event.id"
              class="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
            >
              <div class="flex items-start gap-3">
                <div
                  :class="[
                    'p-2 rounded-full',
                    event.type === 'vet_visit' ? 'bg-red-100' : 'bg-blue-100',
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
                    <h4 class="font-medium text-gray-800">{{ event.title }}</h4>
                    <span class="text-sm text-gray-500">{{
                      formatDate(event.date)
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
                    <span
                      v-if="event.petName"
                      class="text-xs text-gray-500 ml-2"
                    >
                      {{ event.petName }}
                    </span>
                  </div>
                </div>
                <div v-if="isCurrentUser" class="flex space-x-1">
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
        </div>
      </div>
    </div>

    <!-- Modal pour ajouter/modifier un événement -->
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

              <div v-if="userPets.length > 0">
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Animal concerné
                </label>
                <select
                  v-model="eventForm.petId"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  required
                >
                  <option v-for="pet in userPets" :key="pet.id" :value="pet.id">
                    {{ pet.name || "Sans nom" }} ({{ pet.breed }})
                  </option>
                </select>
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { petHealthService } from "../services/petHealthService";
import { useToast } from "vue-toastification";

const props = defineProps({
  userId: {
    type: String,
    required: true,
  },
  userPets: {
    type: Array,
    default: () => [],
  },
  isCurrentUser: {
    type: Boolean,
    default: false,
  },
});

const toast = useToast();
const loading = ref(true);
const healthEvents = ref([]);
const showAddEventModal = ref(false);
const editingEvent = ref(null);

const eventForm = ref({
  type: "vet_visit",
  title: "",
  date: "",
  description: "",
  petId: "",
});

// Calendrier
const currentDate = ref(new Date());
const weekDays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

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
    });
  }

  // Jours du mois actuel
  const today = new Date();
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(year, month, i);
    const dateString = date.toISOString().split("T")[0];

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
    });
  }

  return days;
});

const upcomingEvents = computed(() => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return healthEvents.value
    .filter((event) => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
});

// Méthodes
const loadHealthEvents = async () => {
  try {
    loading.value = true;
    healthEvents.value = await petHealthService.getUserPetHealthEvents(
      props.userId
    );

    // Ajouter le nom de l'animal à chaque événement
    healthEvents.value = healthEvents.value.map((event) => {
      const pet = props.userPets.find((p) => p.id === event.petId);
      return {
        ...event,
        petName: pet ? pet.name || "Sans nom" : "",
      };
    });
  } catch (error) {
    console.error("Erreur lors du chargement des événements:", error);
    toast.error("Impossible de charger les événements de santé");
  } finally {
    loading.value = false;
  }
};

const previousMonth = () => {
  const date = new Date(currentDate.value);
  date.setMonth(date.getMonth() - 1);
  currentDate.value = date;
};

const nextMonth = () => {
  const date = new Date(currentDate.value);
  date.setMonth(date.getMonth() + 1);
  currentDate.value = date;
};

const formatDate = (date) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(date).toLocaleDateString("fr-FR", options);
};

const editEvent = (event) => {
  editingEvent.value = event;
  eventForm.value = {
    type: event.type,
    title: event.title,
    date: new Date(event.date).toISOString().split("T")[0],
    description: event.description || "",
    petId: event.petId,
  };
  showAddEventModal.value = true;
};

const resetForm = () => {
  editingEvent.value = null;
  eventForm.value = {
    type: "vet_visit",
    title: "",
    date: "",
    description: "",
    petId: props.userPets.length > 0 ? props.userPets[0].id : "",
  };
};

const saveEvent = async () => {
  try {
    if (editingEvent.value) {
      // Mise à jour d'un événement existant
      await petHealthService.updateHealthEvent(editingEvent.value.id, {
        ...eventForm.value,
        userId: props.userId,
      });
      toast.success("Événement mis à jour avec succès");
    } else {
      // Création d'un nouvel événement
      await petHealthService.addHealthEvent({
        ...eventForm.value,
        userId: props.userId,
      });
      toast.success("Événement ajouté avec succès");
    }

    showAddEventModal.value = false;
    resetForm();
    loadHealthEvents();
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de l'événement:", error);
    toast.error("Impossible d'enregistrer l'événement");
  }
};

const deleteEvent = async (eventId) => {
  if (confirm("Êtes-vous sûr de vouloir supprimer cet événement ?")) {
    try {
      await petHealthService.deleteHealthEvent(eventId);
      toast.success("Événement supprimé avec succès");
      loadHealthEvents();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'événement:", error);
      toast.error("Impossible de supprimer l'événement");
    }
  }
};

// Initialisation
onMounted(() => {
  loadHealthEvents();

  // Initialiser le formulaire avec le premier animal si disponible
  if (props.userPets.length > 0) {
    eventForm.value.petId = props.userPets[0].id;
  }
});

// Surveiller les changements dans les animaux de l'utilisateur
watch(
  () => props.userPets,
  () => {
    loadHealthEvents();

    // Mettre à jour le petId dans le formulaire si nécessaire
    if (props.userPets.length > 0 && !eventForm.value.petId) {
      eventForm.value.petId = props.userPets[0].id;
    }
  },
  { deep: true }
);
</script>
