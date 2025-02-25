<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl">
        <p class="text-base/7 font-semibold text-primary font-serif">
          À propos de nous
        </p>
        <h1
          class="mt-2 text-pretty text-4xl font-bold tracking-tight text-primary font-serif sm:text-6xl"
        >
          En mission pour réunir les animaux perdus avec leurs familles
        </h1>
        <p class="mt-6 text-balance text-xl/8 text-primary-dark font-sans">
          Notre plateforme innovante combine technologie et compassion pour
          créer un réseau efficace de recherche d'animaux perdus, connectant
          propriétaires, refuges et communautés locales.
        </p>
      </div>
      <section
        class="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16"
      >
        <div class="lg:pr-8">
          <h2
            class="text-pretty text-2xl font-bold tracking-tight text-primary font-serif"
          >
            Notre mission
          </h2>
          <p class="mt-6 text-base/7 text-gray-600 font-sans">
            Chaque année, des milliers d'animaux de compagnie se perdent en
            Belgique. Notre mission est de faciliter et d'accélérer les
            retrouvailles entre ces animaux et leurs familles. Grâce à notre
            application mobile et notre réseau de partenaires, nous avons créé
            un système efficace de signalement et de suivi des animaux perdus.
          </p>
          <p class="mt-8 text-base/7 text-gray-600 font-sans">
            Notre équipe passionnée travaille sans relâche pour améliorer nos
            outils et étendre notre réseau. Nous collaborons étroitement avec
            les refuges, les cliniques vétérinaires et les services communaux
            pour assurer une prise en charge rapide et efficace de chaque
            signalement.
          </p>
        </div>
        <div class="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div
            class="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8"
          >
            <div
              class="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10"
            >
              <img
                alt="Chat retrouvé"
                src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=560&auto=format&fit=crop"
                class="block size-full object-cover"
              />
            </div>
            <div
              class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40"
            >
              <img
                alt="Équipe en action"
                src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=560&auto=format&fit=crop"
                class="block size-full object-cover"
              />
            </div>
            <div
              class="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10"
            >
              <img
                alt="Refuge partenaire"
                src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=560&auto=format&fit=crop"
                class="block size-full object-cover"
              />
            </div>
            <div
              class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40"
            >
              <img
                alt="Retrouvailles heureuses"
                src="https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=560&auto=format&fit=crop"
                class="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div class="max-lg:mt-16 lg:col-span-1">
          <p class="text-base/7 font-semibold text-gray-500 font-serif">
            Nos chiffres
          </p>
          <hr class="mt-6 border-t border-gray-200" />
          <dl class="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div
              class="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4"
            >
              <dt class="text-sm/6 text-gray-600 font-sans">
                Animaux retrouvés
              </dt>
              <dd
                class="order-first text-6xl font-semibold tracking-tight text-primary font-serif"
              >
                <span>5.2</span>K
              </dd>
            </div>
            <div
              class="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4"
            >
              <dt class="text-sm/6 text-gray-600 font-sans">Partenaires</dt>
              <dd
                class="order-first text-6xl font-semibold tracking-tight text-primary font-serif"
              >
                <span>150</span>+
              </dd>
            </div>
            <div
              class="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4"
            >
              <dt class="text-sm/6 text-gray-600 font-sans">
                Utilisateurs actifs
              </dt>
              <dd
                class="order-first text-6xl font-semibold tracking-tight text-primary font-serif"
              >
                <span>25</span>K
              </dd>
            </div>
            <div class="flex flex-col gap-y-2">
              <dt class="text-sm/6 text-gray-600 font-sans">
                Temps moyen de retrouvailles
              </dt>
              <dd
                class="order-first text-6xl font-semibold tracking-tight text-primary font-serif"
              >
                <span>48</span>h
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  </div>
</template>
