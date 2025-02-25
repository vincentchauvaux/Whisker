<template>
  <section class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
    <div class="container mx-auto px-4">
      <h2
        class="text-center text-4xl font-bold tracking-tight text-primary sm:text-6xl"
      >
        Ils nous font confiance
      </h2>
      <div
        class="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none"
      >
        <!-- SPA -->
        <div
          class="group relative flex flex-col items-center transition duration-300 hover:scale-110"
        >
          <div
            class="h-24 w-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 group-hover:bg-primary-light transition duration-300"
          >
            <svg
              class="w-12 h-12 text-primary group-hover:text-primary-dark"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z"
              />
            </svg>
          </div>
          <span
            class="text-lg font-medium text-primary group-hover:text-primary-dark transition duration-300"
            >SRPA Belgique</span
          >
        </div>

        <!-- Clinique Vétérinaire -->
        <div
          class="group relative flex flex-col items-center transition duration-300 hover:scale-110"
        >
          <div
            class="h-24 w-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 group-hover:bg-primary-light transition duration-300"
          >
            <svg
              class="w-12 h-12 text-primary group-hover:text-primary-dark"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4M13 7H11V11H7V13H11V17H13V13H17V11H13V7Z"
              />
            </svg>
          </div>
          <span
            class="text-lg font-medium text-primary group-hover:text-primary-dark transition duration-300"
            >Ordre des Vétérinaires</span
          >
        </div>

        <!-- Refuges -->
        <div
          class="group relative flex flex-col items-center transition duration-300 hover:scale-110"
        >
          <div
            class="h-24 w-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 group-hover:bg-primary-light transition duration-300"
          >
            <svg
              class="w-12 h-12 text-primary group-hover:text-primary-dark"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M10,2V4.26L12,5.59V4H22V19H17V21H24V2H10M7.5,5L0,10V21H15V10L7.5,5M14,6V6.93L15.61,8H16V6H14M18,6V8H20V6H18M7.5,7.5L13,11V19H10V13H5V19H2V11L7.5,7.5M18,10V12H20V10H18M18,14V16H20V14H18Z"
              />
            </svg>
          </div>
          <span
            class="text-lg font-medium text-primary group-hover:text-primary-dark transition duration-300"
            >Refuges Agréés</span
          >
        </div>

        <!-- Communes -->
        <div
          class="group relative flex flex-col items-center transition duration-300 hover:scale-110"
        >
          <div
            class="h-24 w-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 group-hover:bg-primary-light transition duration-300"
          >
            <svg
              class="w-12 h-12 text-primary group-hover:text-primary-dark"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z"
              />
            </svg>
          </div>
          <span
            class="text-lg font-medium text-primary group-hover:text-primary-dark transition duration-300"
            >Communes Belges</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
