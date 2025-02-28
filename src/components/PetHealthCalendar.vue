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
          class="px-4 py-2 bg-white text-secondary border border-secondary rounded-full hover:bg-secondary hover:text-white transition-colors text-sm flex items-center gap-1 shadow-sm"
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
              class="border-l-4 pl-3 py-2 mb-3 hover:bg-gray-50 rounded-r transition-colors relative"
              :class="{
                'border-blue-500': event.type === 'vet_visit',
                'border-green-500': event.type === 'vaccination',
                'border-yellow-500': event.type === 'medication',
                'border-purple-500': event.type === 'grooming',
                'border-red-500': event.type === 'surgery',
                'border-gray-500': !event.type || event.type === 'other',
              }"
            >
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="font-medium text-gray-900">{{ event.title }}</h4>
                  <p class="text-sm text-gray-600">
                    {{ formatDate(event.date) }}
                    <span
                      v-if="event.isRecurring"
                      class="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                    >
                      Récurrent
                    </span>
                  </p>
                  <p class="text-sm text-gray-500 mt-1">
                    {{ event.petName }}
                  </p>
                  <p
                    v-if="event.description"
                    class="text-sm text-gray-600 mt-1"
                  >
                    {{ event.description }}
                  </p>
                </div>

                <div v-if="isCurrentUser" class="flex space-x-1">
                  <button
                    @click="editEvent(event)"
                    class="p-1 text-gray-500 hover:text-primary transition-colors"
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
                    @click="confirmDeleteEvent(event)"
                    class="p-1 text-gray-500 hover:text-red-500 transition-colors"
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

              <!-- Ajout des options de récurrence -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Récurrence
                </label>
                <select
                  v-model="eventForm.recurrence"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="none">Pas de récurrence</option>
                  <option value="daily">Tous les jours</option>
                  <option value="weekly">Toutes les semaines</option>
                  <option value="monthly">Tous les mois</option>
                  <option value="yearly">Tous les ans</option>
                </select>
              </div>

              <div v-if="eventForm.recurrence !== 'none'">
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Fin de récurrence
                </label>
                <div class="flex items-center space-x-2">
                  <select
                    v-model="eventForm.recurrenceEnd"
                    class="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="never">Jamais</option>
                    <option value="after">Après</option>
                    <option value="on">Le</option>
                  </select>

                  <input
                    v-if="eventForm.recurrenceEnd === 'after'"
                    type="number"
                    v-model="eventForm.recurrenceCount"
                    min="1"
                    class="w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="10"
                  />
                  <span v-if="eventForm.recurrenceEnd === 'after'"
                    >occurrences</span
                  >

                  <input
                    v-if="eventForm.recurrenceEnd === 'on'"
                    type="date"
                    v-model="eventForm.recurrenceUntil"
                    class="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
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
              class="w-full inline-flex justify-center rounded-md border border-primary shadow-sm px-4 py-2 bg-white text-primary font-medium hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors sm:ml-3 sm:w-auto sm:text-sm"
            >
              {{ editingEvent ? "Mettre à jour" : "Ajouter" }}
            </button>
            <button
              type="button"
              @click="showAddEventModal = false"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
  recurrence: "none",
  recurrenceEnd: "never",
  recurrenceCount: 1,
  recurrenceUntil: "",
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
    recurrence: event.recurrence || "none",
    recurrenceEnd: event.recurrenceEnd || "never",
    recurrenceCount: event.recurrenceCount || 1,
    recurrenceUntil: event.recurrenceUntil || "",
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
    recurrence: "none",
    recurrenceEnd: "never",
    recurrenceCount: 1,
    recurrenceUntil: "",
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
      if (eventForm.value.recurrence === "none") {
        // Événement unique
        await petHealthService.addHealthEvent({
          ...eventForm.value,
          userId: props.userId,
        });
        toast.success("Événement ajouté avec succès");
      } else {
        // Événement récurrent
        await createRecurringEvents();
        toast.success("Événements récurrents ajoutés avec succès");
      }
    }

    showAddEventModal.value = false;
    resetForm();
    loadHealthEvents();
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de l'événement:", error);
    toast.error("Erreur lors de l'enregistrement de l'événement");
  }
};

// Fonction pour créer des événements récurrents
const createRecurringEvents = async () => {
  const startDate = new Date(eventForm.value.date);
  let endDate = null;
  let occurrences = 0;

  // Déterminer la date de fin ou le nombre d'occurrences
  if (
    eventForm.value.recurrenceEnd === "on" &&
    eventForm.value.recurrenceUntil
  ) {
    endDate = new Date(eventForm.value.recurrenceUntil);
  } else if (eventForm.value.recurrenceEnd === "after") {
    occurrences = parseInt(eventForm.value.recurrenceCount) || 1;
  } else {
    // Si "jamais", on limite à 5 ans pour éviter de créer trop d'événements
    endDate = new Date(startDate);
    endDate.setFullYear(endDate.getFullYear() + 5);
  }

  // Créer les événements récurrents
  const events = [];
  let currentDate = new Date(startDate);
  let count = 0;

  while (
    (!endDate || currentDate <= endDate) &&
    (eventForm.value.recurrenceEnd !== "after" || count < occurrences)
  ) {
    // Créer l'événement pour cette date
    const eventData = {
      ...eventForm.value,
      date: new Date(currentDate).toISOString().split("T")[0],
      userId: props.userId,
      isRecurring: true,
      recurrenceGroup: startDate.toISOString(), // Identifiant du groupe de récurrence
    };

    // Ajouter l'événement à la liste
    events.push(eventData);
    count++;

    // Calculer la prochaine date selon le type de récurrence
    currentDate = getNextRecurrenceDate(
      currentDate,
      eventForm.value.recurrence
    );
  }

  // Enregistrer tous les événements
  for (const event of events) {
    await petHealthService.addHealthEvent(event);
  }
};

// Fonction pour calculer la prochaine date selon le type de récurrence
const getNextRecurrenceDate = (date, recurrenceType) => {
  const nextDate = new Date(date);

  switch (recurrenceType) {
    case "daily":
      nextDate.setDate(nextDate.getDate() + 1);
      break;
    case "weekly":
      nextDate.setDate(nextDate.getDate() + 7);
      break;
    case "monthly":
      nextDate.setMonth(nextDate.getMonth() + 1);
      break;
    case "yearly":
      nextDate.setFullYear(nextDate.getFullYear() + 1);
      break;
  }

  return nextDate;
};

const confirmDeleteEvent = (event) => {
  if (event.isRecurring) {
    if (
      confirm(
        "Cet événement fait partie d'une série récurrente. Voulez-vous supprimer uniquement cet événement ou toute la série ?"
      )
    ) {
      deleteRecurringSeries(event);
    } else {
      deleteEvent(event.id);
    }
  } else {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet événement ?")) {
      deleteEvent(event.id);
    }
  }
};

const deleteEvent = async (eventId) => {
  try {
    await petHealthService.deleteHealthEvent(eventId);
    toast.success("Événement supprimé avec succès");
    loadHealthEvents();
  } catch (error) {
    console.error("Erreur lors de la suppression de l'événement:", error);
    toast.error("Impossible de supprimer l'événement");
  }
};

const deleteRecurringSeries = async (event) => {
  try {
    // Récupérer tous les événements de la série
    const allEvents = healthEvents.value.filter(
      (e) => e.recurrenceGroup === event.recurrenceGroup
    );

    // Supprimer chaque événement de la série
    for (const evt of allEvents) {
      await petHealthService.deleteHealthEvent(evt.id);
    }

    toast.success("Série d'événements supprimée avec succès");
    loadHealthEvents();
  } catch (error) {
    console.error(
      "Erreur lors de la suppression de la série d'événements:",
      error
    );
    toast.error("Impossible de supprimer la série d'événements");
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
