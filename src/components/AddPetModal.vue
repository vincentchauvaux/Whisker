<template>
  <div
    class="fixed inset-0 z-50 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3
                class="text-lg leading-6 font-medium text-gray-900 font-serif"
                id="modal-title"
              >
                {{ pet ? "Modifier le signalement" : "Nouveau signalement" }}
              </h3>
              <div class="mt-6 space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Type de signalement</label
                  >
                  <select
                    v-model="formData.status"
                    class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-secondary focus:border-secondary rounded-md"
                  >
                    <option value="lost">Chat perdu</option>
                    <option value="found">Chat trouvé</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Nom du chat</label
                  >
                  <input
                    type="text"
                    v-model="formData.name"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                    :placeholder="
                      formData.status === 'found' ? 'Inconnu' : 'Nom du chat'
                    "
                  />
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Race</label
                    >
                    <input
                      type="text"
                      v-model="formData.breed"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Couleur</label
                    >
                    <input
                      type="text"
                      v-model="formData.color"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Description</label
                  >
                  <textarea
                    v-model="formData.description"
                    rows="3"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                  ></textarea>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Adresse</label
                  >
                  <input
                    type="text"
                    v-model="formData.location.address"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Photo</label
                  >
                  <input
                    type="file"
                    @change="handleImageUpload"
                    accept="image/*"
                    class="mt-1 block w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-white hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary sm:ml-3 sm:w-auto sm:text-sm"
            @click="save"
          >
            {{ pet ? "Modifier" : "Ajouter" }}
          </button>
          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            @click="$emit('close')"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storage } from "../firebase/config";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const props = defineProps({
  pet: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["close", "save"]);

const formData = ref({
  status: "lost",
  name: "",
  breed: "",
  color: "",
  description: "",
  location: {
    address: "",
    city: "",
    region: "Bruxelles",
  },
  images: [],
  tags: [],
});

onMounted(() => {
  if (props.pet) {
    formData.value = { ...props.pet };
  }
});

const handleImageUpload = async (event) => {
  const file = event.target.files[0];
  if (file) {
    try {
      const imageRef = storageRef(storage, `pets/${Date.now()}_${file.name}`);
      const snapshot = await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      formData.value.images = [downloadURL];
    } catch (error) {
      console.error("Erreur lors du téléchargement de l'image:", error);
    }
  }
};

const save = () => {
  emit("save", formData.value);
};
</script>
