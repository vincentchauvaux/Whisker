<template>
  <MainLayout>
    <div class="bg-white py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <!-- Logo -->
          <div class="flex justify-center items-center mb-8">
            <div class="flex items-baseline gap-1 ml-2">
              <span class="font-sans font-bold text-primary text-3xl"
                >Whisker</span
              >
              <span class="font-serif text-secondary text-3xl">Quest</span>
            </div>
          </div>

          <h1
            class="text-4xl font-bold tracking-tight text-primary font-serif sm:text-5xl mt-4"
          >
            Charte Graphique
          </h1>
          <p class="mt-6 text-lg leading-8 text-primary-dark font-sans">
            Guide complet des éléments de design, des principes et des
            composants qui constituent l'identité visuelle de notre plateforme.
          </p>
        </div>

        <!-- Table des matières -->
        <div class="mt-16 rounded-xl bg-gray-50 p-8">
          <h2 class="text-xl font-bold text-primary font-serif mb-6">
            Sommaire
          </h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li>
              <a
                href="#intro"
                class="block rounded-lg hover:bg-gray-100 p-3 transition"
                @click.prevent="scrollToSectionWithOffset('intro')"
              >
                <span class="font-medium text-primary">1. Introduction</span>
              </a>
            </li>
            <li>
              <a
                href="#identite"
                class="block rounded-lg hover:bg-gray-100 p-3 transition"
                @click.prevent="scrollToSectionWithOffset('identite')"
              >
                <span class="font-medium text-primary"
                  >2. Identité de marque</span
                >
              </a>
            </li>
            <li>
              <a
                href="#couleurs"
                class="block rounded-lg hover:bg-gray-100 p-3 transition"
                @click.prevent="scrollToSectionWithOffset('couleurs')"
              >
                <span class="font-medium text-primary"
                  >3. Palette de couleurs</span
                >
              </a>
            </li>
            <li>
              <a
                href="#typographie"
                class="block rounded-lg hover:bg-gray-100 p-3 transition"
                @click.prevent="scrollToSectionWithOffset('typographie')"
              >
                <span class="font-medium text-primary">4. Typographie</span>
              </a>
            </li>
            <li>
              <a
                href="#composants"
                class="block rounded-lg hover:bg-gray-100 p-3 transition"
                @click.prevent="scrollToSectionWithOffset('composants')"
              >
                <span class="font-medium text-primary">5. Composants UI</span>
              </a>
            </li>
            <li>
              <a
                href="#iconographie"
                class="block rounded-lg hover:bg-gray-100 p-3 transition"
                @click.prevent="scrollToSectionWithOffset('iconographie')"
              >
                <span class="font-medium text-primary">6. Iconographie</span>
              </a>
            </li>
            <li>
              <a
                href="#images"
                class="block rounded-lg hover:bg-gray-100 p-3 transition" 
                @click.prevent="scrollToSectionWithOffset('images')"
              >
                <span class="font-medium text-primary">7. Photographie</span>
              </a>
            </li>
            <li>
              <a
                href="#interface"
                class="block rounded-lg hover:bg-gray-100 p-3 transition"
                @click.prevent="scrollToSectionWithOffset('interface')"
              >
                <span class="font-medium text-primary"
                  >8. Interface utilisateur</span
                >
              </a>
            </li>
            <li>
              <a
                href="#cartes"
                class="block rounded-lg hover:bg-gray-100 p-3 transition"
                @click.prevent="scrollToSectionWithOffset('cartes')"
              >
                <span class="font-medium text-primary"
                  >9. Cartes et géolocalisation</span
                >
              </a>
            </li>
          </ul>
        </div>

        <!-- 1. Introduction -->
        <section id="intro" class="mt-20">
          <h2
            class="text-3xl font-bold tracking-tight text-primary font-serif mb-6"
          >
            1. Introduction
          </h2>
          <div class="prose prose-primary max-w-none">
            <p class="mb-4">
              Bienvenue dans la charte graphique de
              <span class="font-bold">Whisker Quest</span>, notre guide de
              référence pour assurer la cohérence visuelle et éditoriale de la
              plateforme.
            </p>
            <p class="mb-4">
              <span class="font-bold">Whisker Quest</span> est une application
              dédiée à la recherche et au signalement de chats perdus. Notre
              identité visuelle incarne des valeurs essentielles :
            </p>
            <ul class="list-disc list-inside mb-4">
              <li>empathie</li>
              <li>accessibilité</li>
              <li>efficacité</li>
            </ul>
            <p class="mb-4">
              Chaque élément graphique a été pensé pour inspirer confiance,
              faciliter la navigation et renforcer notre mission : aider les
              utilisateurs à retrouver leurs compagnons à quatre pattes.
            </p>
            <p>
              Ce guide s'adresse à tous ceux qui participent à la création de
              contenus pour la marque : designers, développeurs, partenaires. Il
              établit des règles claires pour garantir une esthétique cohérente,
              porteuse de sens, et fidèle à l'univers
              <span class="font-bold">Whisker Quest</span>.
            </p>
          </div>
        </section>

        <!-- 2. Identité de marque -->
        <section id="identite" class="mt-20">
          <h2
            class="text-3xl font-bold tracking-tight text-primary font-serif mb-6"
          >
            2. Logo
          </h2>
          <div class="prose prose-primary max-w-none">
            <div
              class="bg-white p-8 rounded-xl border border-gray-200 flex flex-col items-center mb-8"
            >
              <img
                src="/Logo graphique-model-6-big.svg"
                alt="Whisker Quest Logo"
                class="h-24 w-auto mb-4"
                style="
                  filter: invert(18%) sepia(17%) saturate(1162%)
                    hue-rotate(153deg) brightness(95%) contrast(90%);
                "
              />
              <div class="flex items-baseline gap-1 text-2xl mt-4">
                <span class="font-sans font-bold text-primary">Whisker</span>
                <span class="font-serif text-secondary">Quest</span>
              </div>
            </div>

            <h3
              class="mt-2 text-xl font-bold tracking-tight text-primary font-serif mb-6"
            >
              Personnalité de marque
            </h3>
            <p>
              Le logo de Whisker Quest est bien plus qu'une simple signature 
              graphique : il raconte une histoire.
              
              <p class="mb-4">
                Le Q de Quest, en Libre Baskerville, a été choisi pour ses courbes évocatrices :
              </p>

              <ul class="list-disc pl-6 mb-4">
                <li class="mb-2">
                  Il évoque la queue du félin, clin d'œil discret au monde des chats.
                </li>
                <li class="mb-2">
                  Il peut aussi être perçu comme une loupe, symbole classique de la recherche — 
                  un hommage au côté Sherlock Holmes de notre mission.
                </li>
                <li>
                  En son centre, on retrouve la tête du chat stylisée, intégrée comme 
                  l'objectif de la quête.
                </li>
              </ul>
            </p>
            <h3 class="mt-8 text-xl font-bold tracking-tight text-primary font-serif mb-6">Utilisation correcte et incorrecte du logo</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <!-- À FAIRE -->
              <div>
                <h4 class="text-lg font-bold text-green-700 mb-4">À faire</h4>
                <div class="flex flex-col gap-6">
                  <div class="flex flex-col items-center">
                    <div class="bg-[#1B3B44] rounded-xl flex items-center justify-center p-6 mb-2">
                      <img src="/logo/Logo-graphique-model-6-big-w.png" alt="Logo blanc" class="h-20 w-auto">
                    </div>
                    <span class="text-sm text-green-500">Logo blanc (officiel)</span>
                  </div>
                  <div class="flex flex-col items-center">
                    <div class="rounded-xl flex items-center justify-center p-6 mb-2 bg-[#f3f3f3]">
                      <img src="/logo/Logo-graphique-model-6-big.png" alt="Logo noir" class="h-20 w-auto">
                    </div>
                    <span class="text-sm text-green-500">Logo noir (officiel)</span>
                  </div>
                  <div class="flex flex-col items-center">
                    <div class="bg-[#1B3B44] rounded-xl flex items-center justify-center p-6 mb-2">
                      <img src="/logo/Logo-graphique-model-7-big-o.png" alt="Logo orange" class="h-20 w-auto">
                    </div>
                    <span class="text-sm text-green-500">Logo orange (officiel)</span>
                  </div>
                  <div class="flex flex-col items-center">
                    <div class="rounded-xl flex items-center justify-center p-6 mb-2 bg-[#f3f3f3]">
                      <img src="/logo/Logo-graphique-model-7-big-v.png" alt="Logo vert" class="h-20 w-auto">
                    </div>
                    <span class="text-sm text-green-500">Logo vert (officiel)</span>
                  </div>
                </div>
              </div>
              <!-- À NE PAS FAIRE -->
              <div>
                <h4 class="text-lg font-bold text-red-700 mb-4">À ne pas faire</h4>
                <div class="flex flex-col gap-6">
                  <div class="flex flex-col items-center">
                    <div class="rounded-xl flex items-center justify-center p-6 mb-2 bg-[#f3f3f3]">
                      <img src="/logo/Logo-graphique-model-6-big.png" alt="Logo squeezé" class="h-20 w-auto" style="transform: scaleX(0.7);">
                    </div>
                    <span class="text-sm text-red-500">Ne pas aplatir/squeezer</span>
                  </div>
                  <div class="flex flex-col items-center">
                    <div class="rounded-xl flex items-center justify-center p-6 mb-2 bg-[#f3f3f3]">
                      <img src="/logo/Logo-graphique-model-6-big.png" alt="Logo déformé" class="h-20 w-auto" style="transform: skewX(20deg);">
                    </div>
                    <span class="text-sm text-red-500">Ne pas déformer (skew)</span>
                  </div>
                  <div class="flex flex-col items-center">
                    <div class="rounded-xl flex items-center justify-center mt-14 p-6 mb-2 bg-[#f3f3f3] overflow-hidden" style=" height: 72px;">
                      <img src="/logo/Logo-graphique-model-6-big.png" alt="Logo cropé" class="h-20 w-auto" style="margin-top: -16px; margin-left: -8px;">
                    </div>
                    <span class="text-sm text-red-500">Ne pas recadrer/couper</span>
                  </div>
                  <div class="flex flex-col items-center">
                    <div class="rounded-xl flex items-center justify-center p-6 mb-2 bg-[#f3f3f3]">
                      <img src="/logo/Logo-graphique-model-7-big-o.png" alt="Logo recoloré" class="h-20 w-auto" style="filter: hue-rotate(300deg);">
                    </div>
                    <span class="text-sm text-red-500">Ne pas modifier les couleurs</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <div>
                  <h4 class="mt-8 text-xl font-bold tracking-tight text-primary font-serif mb-6 ">accompagnement</h4>
                  <p>
                    Il pourra être accompagné du nom de la marque
                    <div
              class="bg-white p-8 rounded-xl border border-gray-200 flex flex-raw items-center mt-8"
            >
              <img
                src="/Logo graphique-model-6-big.svg"
                alt="Whisker Quest Logo"
                class="h-24 w-auto mb-4"
                style="
                  filter: invert(18%) sepia(17%) saturate(1162%)
                    hue-rotate(153deg) brightness(95%) contrast(90%);
                "
              />
              <div class="flex items-baseline gap-1 text-2xl mt-4">
                <span class="font-sans font-bold text-primary">Whisker</span>
                <span class="font-serif text-secondary">Quest</span>
              </div>
            </div>
                  </p>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <div>
                  <h4 class="mt-8 text-xl font-bold tracking-tight text-primary font-serif mb-6">Incrustation</h4>
                  <p>
                    Il pourra être incrusté dans le titre même pour une meilleure lisibilité.
                    <div class="bg-white p-8 rounded-xl border border-gray-200 flex flex-col items-center mt-8">
             
              <div class="flex items-baseline gap-1 text-2xl mt-4 flex-wrap-1 relative h-24">
                
                <span class="font-sans font-bold text-primary absolute top-8 -left-[90px]">Whisker</span>
                <img src="/logo/Logo-graphique-model-7-big-o.png" alt="Logo recoloré" class="h-20 w-auto  top-0 left-0" >
                <span class="font-serif text-secondary absolute top-8 left-[70px]">uest</span>
              </div>
            </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 3. Palette de couleurs -->
        <section id="couleurs" class="mt-20">
          <h2
            class="text-3xl font-bold tracking-tight text-primary font-serif mb-6"
          >
            3. Palette de couleurs
          </h2>
          <div class="prose prose-primary max-w-none">
            <p>
              Notre palette de couleurs a été soigneusement sélectionnée pour
              transmettre chaleur, confiance et professionnalisme, tout en
              assurant l'accessibilité et la lisibilité.
            </p>

            <h3 class="mt-8 text-xl font-bold tracking-tight text-primary font-serif mb-6">Couleurs principales</h3>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6"
            >
              <div
                class="rounded-xl overflow-hidden border border-gray-200 cursor-pointer relative group transition-transform duration-300 hover:rotate-2 hover:scale-105"
              >
              <!-- CMJN : C:88,59% M:57,97% J:50,89% N:53,41% -->
                <div class="h-24 bg-primary"></div>
                <div class="p-4">
                  <h4 class="font-medium">Primaire</h4>
                  <p class="text-sm text-gray-500">
                    Utilisé pour les titres et éléments principaux
                  </p>
                  <div class="flex mt-3">
                    <div 
                      @click="copyColor('#1B3B44')"
                      class="flex-1 text-left p-2 rounded-l-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <p class="text-sm text-gray-600 font-mono">#1B3B44</p>
                      <p class="text-xs text-gray-400">HEX</p>
                    </div>
                    <div 
                      @click="copyColor('C:88,59% M:57,97% J:50,89% N:53,41%')"
                      class="flex-1 text-right p-2 rounded-r-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <p class="text-sm text-gray-600 font-mono text-xs">C:89% M:58% J:51% N:53%</p>
                      <p class="text-xs text-gray-400">CMJN</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="rounded-xl overflow-hidden border border-gray-200 cursor-pointer relative group transition-transform duration-300 hover:-rotate-2 hover:scale-105"
              >
              <!-- CMJN : C:0% M:74,22% J:63,38% N:0% -->
                <div class="h-24 bg-secondary"></div>
                <div class="p-4">
                  <h4 class="font-medium">Secondaire</h4>
                  <p class="text-sm text-gray-500">
                    Utilisé pour les accents et les appels à l'action
                  </p>
                  <div class="flex mt-3">
                    <div 
                      @click="copyColor('#F26052')"
                      class="flex-1 text-left p-2 rounded-l-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <p class="text-sm text-gray-600 font-mono">#F26052</p>
                      <p class="text-xs text-gray-400">HEX</p>
                    </div>
                    <div 
                      @click="copyColor('C:0% M:74,22% J:63,38% N:0%')"
                      class="flex-1 text-right p-2 rounded-r-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <p class="text-sm text-gray-600 font-mono text-xs">C:0% M:74% J:63% N:0%</p>
                      <p class="text-xs text-gray-400">CMJN</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="rounded-xl overflow-hidden border border-gray-200 cursor-pointer relative group transition-transform duration-300 hover:rotate-1 hover:scale-105"
              >
              <!-- CMJN : C:29,85% M:12,44% J:16,14% N:0,15% -->
                <div class="h-24 bg-primary-light"></div>
                <div class="p-4">
                  <h4 class="font-medium">Primaire clair</h4>
                  <p class="text-sm text-gray-500">
                    Utilisé pour les fonds et les nuances plus légères
                  </p>
                  <div class="flex mt-3">
                    <div 
                      @click="copyColor('#BFCFD3')"
                      class="flex-1 text-left p-2 rounded-l-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <p class="text-sm text-gray-600 font-mono">#BFCFD3</p>
                      <p class="text-xs text-gray-400">HEX</p>
                    </div>
                    <div 
                      @click="copyColor('C:29,85% M:12,44% J:16,14% N:0,15%')"
                      class="flex-1 text-right p-2 rounded-r-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <p class="text-sm text-gray-600 font-mono text-xs">C:30% M:12% J:16% N:0%</p>
                      <p class="text-xs text-gray-400">CMJN</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="rounded-xl overflow-hidden border border-gray-200 cursor-pointer relative group transition-transform duration-300 hover:-rotate-1 hover:scale-105"
              >
              <!-- CMJN : C:0% M:0% J:0% N:0% -->
                <div class="h-24 bg-white border-b border-gray-200"></div>
                <div class="p-4">
                  <h4 class="font-medium">Blanc</h4>
                  <p class="text-sm text-gray-500">
                    Utilisé pour les fonds et le texte sur fond sombre
                  </p>
                  <div class="flex mt-3">
                    <div 
                      @click="copyColor('#FFFFFF')"
                      class="flex-1 text-left p-2 rounded-l-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <p class="text-sm text-gray-600 font-mono">#FFFFFF</p>
                      <p class="text-xs text-gray-400">HEX</p>
                    </div>
                    <div 
                      @click="copyColor('C:0% M:0% J:0% N:0%')"
                      class="flex-1 text-right p-2 rounded-r-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <p class="text-sm text-gray-600 font-mono text-xs">C:0% M:0% J:0% N:0%</p>
                      <p class="text-xs text-gray-400">CMJN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 class="mt-8 text-xl font-bold tracking-tight text-primary font-serif mb-6">Couleurs secondaires et fonctionnelles</h3>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 my-6"
            >
              <div
                class="rounded-xl overflow-hidden border border-gray-200 cursor-pointer relative group transition-transform duration-300 hover:rotate-2 hover:scale-105"
              >
              <!-- CMJN : C:70,55% M:0% J:78,9% N:0% -->
                <div class="h-24 bg-green-500"></div>
                <div class="p-4">
                  <h4 class="font-medium">Succès</h4>
                  <p class="text-sm text-gray-500">
                    Pour les actions réussies, chats trouvés et confirmations
                  </p>
                  <div class="flex mt-3">
                    <div 
                      @click="copyColor('#22C55E')"
                      class="flex-1 text-left p-2 rounded-l-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <p class="text-sm text-gray-600 font-mono">#22C55E</p>
                      <p class="text-xs text-gray-400">HEX</p>
                    </div>
                    <div 
                      @click="copyColor('C:70,55% M:0% J:78,9% N:0%')"
                      class="flex-1 text-right p-2 rounded-r-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <p class="text-sm text-gray-600 font-mono text-xs">C:71% M:0% J:79% N:0%</p>
                      <p class="text-xs text-gray-400">CMJN</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="rounded-xl overflow-hidden border border-gray-200 cursor-pointer relative group transition-transform duration-300 hover:-rotate-2 hover:scale-105"
              >
              <!-- CMJN : C:0% M:84,08% J:67,79% N:0% -->
                <div class="h-24 bg-red-500"></div>
                <div class="p-4">
                  <h4 class="font-medium">Erreur</h4>
                  <p class="text-sm text-gray-500">
                    Pour les erreurs, alertes et chats non trouvés
                  </p>
                  <div class="flex mt-3">
                    <div 
                      @click="copyColor('#EF4444')"
                      class="flex-1 text-left p-2 rounded-l-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <p class="text-sm text-gray-600 font-mono">#EF4444</p>
                      <p class="text-xs text-gray-400">HEX</p>
                    </div>
                    <div 
                      @click="copyColor('C:0% M:84,08% J:67,79% N:0%')"
                      class="flex-1 text-right p-2 rounded-r-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <p class="text-sm text-gray-600 font-mono text-xs">C:0% M:84% J:68% N:0%</p>
                      <p class="text-xs text-gray-400">CMJN</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div
                class="rounded-xl overflow-hidden border border-gray-200 cursor-pointer relative group transition-transform duration-300 hover:rotate-1 hover:scale-105"
                @click="copyColor('#F59E0B')"
              >
                <div class="h-24 bg-amber-500"></div>
                <div class="p-4">
                  <h4 class="font-medium">Avertissement</h4>
                  <p class="text-sm text-gray-600">#F59E0B</p>
                  <p class="text-sm text-gray-500">Pour les avertissements</p>
                </div>
              </div>
              <div
                class="rounded-xl overflow-hidden border border-gray-200 cursor-pointer relative group transition-transform duration-300 hover:-rotate-1 hover:scale-105"
                @click="copyColor('#3B82F6')"
              >
                <div class="h-24 bg-blue-500"></div>
                <div class="p-4">
                  <h4 class="font-medium">Information</h4>
                  <p class="text-sm text-gray-600">#3B82F6</p>
                  <p class="text-sm text-gray-500">
                    Pour les messages d'information
                  </p>
                </div>
              </div> -->
            </div>

            <h4 class="mt-8 text-xl font-bold tracking-tight text-primary font-serif mb-6">Utilisation des couleurs</h4>
            <p>
              Nos couleurs sont appliquées selon des principes cohérents afin de guider les utilisateurs à travers l'interface :
            </p>
            <ul class="list-disc pl-6 space-y-2 mt-2">
              <li>
                Le Vert Profond primaire est utilisé pour les éléments principaux, l'en-tête et pied de page, les titres et la plupart des backgrounds.
              </li>
              <li>
                L'orange secondaire est utilisé pour contraster avec le vert profond et les boutons d'action et points d'accent
              </li>
              <li>
                Des teintes primaires plus claires sont utilisées pour les arrière-plans et les éléments secondaires
              </li>
              <li>
                Les couleurs fonctionnelles communiquent clairement les situations des chats.
              </li>
            </ul>
          </div>

          <section id="nuances" class="mt-20">
            <h2 class="mt-8 text-xl font-bold tracking-tight text-primary font-serif mb-6">Nuances de couleur</h2>
            <div class="prose prose-primary max-w-none">
              <p>
                Nous utilisons des nuances de couleur pour les badges et les éléments secondaires.
              </p>
              <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 my-6"
            >
              <div
                class="rounded-xl overflow-hidden border border-gray-200 cursor-pointer relative group transition-transform duration-300 hover:rotate-2 hover:scale-105"
                @click="copyColor('#0C1B1E')"
              >
              <!-- CMJN : C:91,08% M:67,89% J:60,05% N:72,82% -->
                <div class="h-24 bg-[#0C1B1E]"></div>
                <div class="p-4">
                  <h4 class="font-medium">Vert foncé</h4>
                  <div class="flex mt-3">
                    <div 
                      @click="copyColor('#0C1B1E')"
                      class="flex-1 text-left p-2 rounded-l-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <p class="text-sm text-gray-600 font-mono">#0C1B1E</p>
                      <p class="text-xs text-gray-400">HEX</p>
                    </div>
                    <div 
                      @click="copyColor('C:91,08% M:67,89% J:60,05% N:72,82%')"
                      class="flex-1 text-right p-2 rounded-r-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <p class="text-sm text-gray-600 font-mono text-xs">C:91% M:68% J:60% N:73%</p>
                      <p class="text-xs text-gray-400">CMJN</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="rounded-xl overflow-hidden border border-gray-200 cursor-pointer relative group transition-transform duration-300 hover:-rotate-2 hover:scale-105"
              >
              <!-- CMJN : C:14,92% M:79,49% J:67,64% N:3,94% -->
                <div class="h-24 bg-[#CC4E48]"></div>
                <div class="p-4">
                  <h4 class="font-medium">Orange foncé</h4>
                  <div class="flex mt-3">
                    <div 
                      @click="copyColor('#CC4E48')"
                      class="flex-1 text-left p-2 rounded-l-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <p class="text-sm text-gray-600 font-mono">#CC4E48</p>
                      <p class="text-xs text-gray-400">HEX</p>
                    </div>
                    <div 
                      @click="copyColor('C:14,92% M:79,49% J:67,64% N:3,94%')"
                      class="flex-1 text-right p-2 rounded-r-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <p class="text-sm text-gray-600 font-mono text-xs">C:15% M:79% J:68% N:4%</p>
                      <p class="text-xs text-gray-400">CMJN</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </section>
          </section>

        <!-- 4. Typographie -->
        <section id="typographie" class="mt-20">
          <h2
            class="text-3xl font-bold tracking-tight text-primary font-serif mb-6"
          >
            4. Typographie
          </h2>
          <div class="prose prose-primary max-w-none">
            <p class="text-lg">
              Le système typographique repose sur deux polices aux fonctions distinctes mais complémentaires. Libre Baskerville, serif traditionnelle, évoque l'univers des petites annonces et des journaux imprimés, renforçant la lisibilité et la crédibilité des titres. Elle structure visuellement les contenus à forte valeur narrative. Inter, sans-serif contemporaine, est optimisée pour les interfaces numériques : excellente lisibilité à l'écran, large gamme de graisses, et rendu clair même à petite taille. Ce duo permet une hiérarchie typographique cohérente et adaptée aux usages print comme web.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div
                class="rounded-xl overflow-hidden border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all"
              >
                <h3 class="text-xl font-serif text-primary border-b pb-4 mb-4">
                  Serif — Libre Baskerville
                </h3>
                <div class="space-y-6">
                  <div>
                    <h4 class="text-sm text-gray-500 mb-2 flex justify-between">
                      <span>Titre principal (H1)</span>
                      <span class="text-primary-light">42px / 700</span>
                    </h4>
                    <p class="text-3xl font-serif font-bold">Whisker Quest</p>
                    <p class="text-sm text-gray-500 mt-2 italic">
                      Utilisé pour les titres principaux, les sections
                      importantes et les éléments qui nécessitent une présence
                      plus affirmée.
                    </p>
                  </div>
                  <div>
                    <h4 class="text-sm text-gray-500 mb-2 flex justify-between">
                      <span>Titre secondaire (H2)</span>
                      <span class="text-primary-light">32px / 700</span>
                    </h4>
                    <p class="text-2xl font-serif font-bold">
                      Signalement d'animaux
                    </p>
                    <p class="text-sm text-gray-500 mt-2 italic">
                      Pour les titres de section, apportant une structure claire
                      à l'information.
                    </p>
                  </div>
                  <div>
                    <h4 class="text-sm text-gray-500 mb-2 flex justify-between">
                      <span>Titre tertiaire (H3)</span>
                      <span class="text-primary-light">24px / 600</span>
                    </h4>
                    <p class="text-xl font-serif font-semibold">
                      Recherche par localisation
                    </p>
                    <p class="text-sm text-gray-500 mt-2 italic">
                      Pour les sous-sections et les éléments de hiérarchie
                      intermédiaire.
                    </p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-gray-100">
                  <h4 class="text-sm text-gray-600 font-medium mb-2">
                    Caractéristiques
                  </h4>
                  <ul class="text-sm space-y-1 text-gray-500">
                    <li>
                      • Empattement classique apportant stabilité et confiance
                    </li>
                    <li>
                      • Excellente lisibilité pour les titres et contenus
                      importants
                    </li>
                    <li>• Évoque tradition, fiabilité et autorité</li>
                  </ul>
                </div>
              </div>

              <div
                class="rounded-xl overflow-hidden border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all"
              >
                <h3 class="text-xl font-sans text-primary border-b pb-4 mb-4">
                  Sans-Serif — Inter
                </h3>
                <div class="space-y-6">
                  <div>
                    <h4 class="text-sm text-gray-500 mb-2 flex justify-between">
                      <span>Corps de texte</span>
                      <span class="text-primary-light">16px / 400</span>
                    </h4>
                    <p class="font-sans">
                      Notre plateforme innovante combine technologie et
                      compassion pour créer un réseau efficace de recherche
                      d'animaux perdus.
                    </p>
                    <p class="text-sm text-gray-500 mt-2 italic">
                      Utilisé pour le contenu principal, garantissant une
                      lecture confortable sur tous les appareils.
                    </p>
                  </div>
                  <div>
                    <h4 class="text-sm text-gray-500 mb-2 flex justify-between">
                      <span>Interface utilisateur</span>
                      <span class="text-primary-light">16px / 500</span>
                    </h4>
                    <p class="font-sans font-medium">
                      Découvrir notre application mobile
                    </p>
                    <p class="text-sm text-gray-500 mt-2 italic">
                      Pour les boutons, menus, et éléments d'interface
                      nécessitant une meilleure visibilité.
                    </p>
                  </div>
                  <div>
                    <h4 class="text-sm text-gray-500 mb-2 flex justify-between">
                      <span>Labels et petits textes</span>
                      <span class="text-primary-light">14px / 400</span>
                    </h4>
                    <p class="font-sans text-sm">
                      Dernière mise à jour : 15 juin 2023
                    </p>
                    <p class="text-sm text-gray-500 mt-2 italic">
                      Pour les informations secondaires, métadonnées et
                      indications contextuelles.
                    </p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-gray-100">
                  <h4 class="text-sm text-gray-600 font-medium mb-2">
                    Caractéristiques
                  </h4>
                  <ul class="text-sm space-y-1 text-gray-500">
                    <li>
                      • Design moderne et hautement lisible même en petite
                      taille
                    </li>
                    <li>
                      • Optimisé pour les écrans avec excellente lisibilité
                    </li>
                    <li>
                      • Variantes de graisse permettant une hiérarchisation
                      flexible
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 class="mt-8 text-xl font-bold tracking-tight text-primary font-serif mb-6">Règles typographiques et utilisation</h3>

            <div class="bg-gray-50 rounded-xl p-6 mb-8">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-medium text-primary mb-3">
                    Principes fondamentaux
                  </h4>
                  <ul class="space-y-2 text-primary-dark">
                    <li class="flex gap-2 items-start">
                      <svg
                        class="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        >Utiliser la hiérarchie typographique de façon cohérente
                        pour guider l'œil naturellement</span
                      >
                    </li>
                    <li class="flex gap-2 items-start">
                      <svg
                        class="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        >Maintenir un contraste adéquat pour garantir
                        l'accessibilité (WCAG AA minimum)</span
                      >
                    </li>
                    <li class="flex gap-2 items-start">
                      <svg
                        class="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        >Limiter à 45-75 caractères par ligne pour une lecture
                        optimale</span
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium text-primary mb-3">
                    Applications spécifiques
                  </h4>
                  <ul class="space-y-2 text-primary-dark">
                    <li class="flex gap-2 items-start">
                      <svg
                        class="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"
                        />
                        <path
                          d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"
                        />
                      </svg>
                      <span
                        >Utiliser la serif pour les titres de section, bannières
                        et points narratifs importants</span
                      >
                    </li>
                    <li class="flex gap-2 items-start">
                      <svg
                        class="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"
                        />
                        <path
                          d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"
                        />
                      </svg>
                      <span
                        >Réserver la sans-serif pour le texte courant, les
                        interfaces et la navigation</span
                      >
                    </li>
                    <li class="flex gap-2 items-start">
                      <svg
                        class="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"
                        />
                        <path
                          d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"
                        />
                      </svg>
                      <span
                        >Utiliser la graisse et non l'italique pour mettre en
                        évidence dans les interfaces</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 class="mt-8 text-xl font-bold tracking-tight text-primary font-serif mb-6">Exemples d'application</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                class="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm"
              >
                <div class="p-5 bg-primary text-white">
                  <h4 class="font-serif font-bold text-xl mb-2">
                    Fiche d'information
                  </h4>
                  <p class="font-sans text-sm text-primary-light">
                    Structure textuelle pour fiches détaillées
                  </p>
                </div>
                <div class="p-5">
                  <h5
                    class="font-serif font-semibold text-primary text-lg mb-3"
                  >
                    Titre de section
                  </h5>
                  <p class="font-sans text-primary-dark mb-3">
                    Corps de texte principal en Inter Regular, optimisé pour une
                    lecture confortable même sur de longues périodes.
                  </p>
                  <div
                    class="flex justify-between text-sm text-gray-500 font-sans mt-4"
                  >
                    <span>Indication</span>
                    <span>Métadonnée</span>
                  </div>
                </div>
              </div>
              <div
                class="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm"
              >
                <div class="p-5 border-b">
                  <h4 class="font-serif font-bold text-xl text-primary mb-2">
                    Élément d'interface
                  </h4>
                  <p class="font-sans text-sm text-gray-500">
                    Combinaison typographique pour composants UI
                  </p>
                </div>
                <div class="p-5">
                  <div class="space-y-3">
                    <button
                      class="inline-flex w-full justify-center items-center rounded-full bg-secondary px-4 py-2 text-white font-sans font-medium shadow-sm"
                    >
                      Action principale
                    </button>
                    <p class="font-sans text-sm text-center text-gray-500 mt-2">
                      Label explicatif sous bouton
                    </p>
                  </div>
                  <div class="mt-4 pt-4 border-t">
                    <p class="font-sans text-primary-dark">
                      Information secondaire avec
                      <span class="font-medium">élément mis en évidence</span>
                      par la graisse.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm"
              >
                <div class="p-5">
                  <h4 class="font-serif font-bold text-xl text-primary mb-2">
                    Hierarchie visuelle
                  </h4>
                  <p class="font-sans text-sm text-gray-500">
                    Organisation de l'information
                  </p>
                </div>
                <div class="divide-y">
                  <div class="p-5">
                    <h5 class="font-serif text-lg text-primary">
                      Titre principal
                    </h5>
                    <p class="font-sans text-sm mt-1 text-gray-600">
                      Description du contenu principal avec les informations
                      essentielles.
                    </p>
                  </div>
                  <div class="p-5">
                    <h5 class="font-sans font-medium text-primary-dark">
                      Sous-section
                    </h5>
                    <p class="font-sans text-sm mt-1 text-gray-600">
                      Information complémentaire de niveau secondaire.
                    </p>
                  </div>
                  <div class="p-5">
                    <p class="font-sans text-xs text-gray-500">
                      Note légale ou information tertiaire en petit corps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 5. Composants UI -->
        <section id="composants" class="mt-20">
          <h2
            class="text-3xl font-bold tracking-tight text-primary font-serif mb-6"
          >
            5. Composants UI
          </h2>
          <div class="prose prose-primary max-w-none">
            <p>
              Nos composants d'interface sont clairs, accessibles et cohérents. Chacun s'intègre naturellement dans notre design system, pour une expérience fluide et unifiée.
            </p>

            <h3 class="mt-8 text-xl font-bold tracking-tight text-primary font-serif mb-6">Boutons</h3>
            <div
              class="bg-gray-50 p-6 rounded-xl my-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div>
                <h4 class="text-sm text-gray-500 mb-3">Boutons primaires</h4>
                <div class="flex flex-col gap-4">
                  <button
                    class="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-white shadow-sm hover:bg-primary-dark"
                  >
                    Bouton primaire
                  </button>
                  <button
                    class="inline-flex items-center justify-center rounded-full bg-secondary px-5 py-3 text-white shadow-sm hover:bg-secondary-dark"
                  >
                    Bouton secondaire
                  </button>
                  <button
                    disabled
                    class="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-white shadow-sm opacity-70 cursor-not-allowed"
                  >
                    Bouton désactivé
                  </button>
                </div>
              </div>
              <div>
                <h4 class="text-sm text-gray-500 mb-3">
                  Boutons secondaires et tertiaires
                </h4>
                <div class="flex flex-col gap-4">
                  <button
                    class="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-primary shadow-sm ring-1 ring-inset ring-primary hover:bg-gray-50"
                  >
                    Bouton contour
                  </button>
                  <button
                    class="inline-flex items-center justify-center text-secondary font-medium"
                  >
                    Lien texte
                    <svg
                      class="ml-1 h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- <h3 class="mt-8 text-xl font-bold tracking-tight text-primary font-serif mb-6">Formulaires</h3>
            <div class="bg-gray-50 p-6 rounded-xl my-6">
              <div class="max-w-md space-y-6">
                <div>
                  <label
                    for="demo-email"
                    class="block text-sm font-medium text-gray-700"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="demo-email"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    for="demo-select"
                    class="block text-sm font-medium text-gray-700"
                    >Type d'animal</label
                  >
                  <select
                    id="demo-select"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  >
                    <option>Chat</option>
                    <option>Chien</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <div class="flex items-center">
                    <input
                      id="demo-checkbox"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label
                      for="demo-checkbox"
                      class="ml-2 block text-sm text-gray-700"
                      >J'accepte les conditions d'utilisation</label
                    >
                  </div>
                </div>
              </div>
            </div> -->

            <h3 class="mt-8 text-xl font-bold tracking-tight text-primary font-serif mb-6">Cartes et conteneurs</h3>
            <div class="bg-gray-50 p-6 rounded-xl my-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="bg-white rounded-xl shadow overflow-hidden">
                  <div class="p-6">
                    <h4 class="font-serif font-bold text-primary text-lg mb-2">
                      Carte standard
                    </h4>
                    <p class="text-primary-dark text-sm mb-4">
                      Les cartes sont utilisées pour présenter des informations
                      groupées
                    </p>
                    <!-- <button
                      class="text-secondary font-medium text-sm hover:text-secondary-dark"
                    >
                      En savoir plus
                      <span aria-hidden="true"> →</span>
                    </button> -->
                    <!-- Carte de signalement d'animal trouvé -->
                    <div>
                      <button
                        @click="activeCard = 'resume'"
                        class="text-left w-full cursor-pointer transition-colors hover:bg-gray-50 p-2 rounded-lg"
                        :class="{ 'bg-gray-100': activeCard === 'resume' }"
                      >
                        <h4
                          class="font-serif font-bold text-primary text-xl mb-4 mt-6"
                        >
                          Carte résumé d'animal trouvé
                        </h4>
                        <p class="text-primary-dark text-sm mb-6">
                          Un design intuitif et efficace pour retrouver
                          rapidement nos amis à quatre pattes.
                        </p>
                      </button>
                    </div>
                    <!-- Carte de signalement d'animal trouvé -->
                    <div>
                      <button
                        @click="activeCard = 'signalement'"
                        class="text-left w-full cursor-pointer transition-colors hover:bg-gray-50 p-2 rounded-lg"
                        :class="{ 'bg-gray-100': activeCard === 'signalement' }"
                      >
                        <h4
                          class="font-serif font-bold text-primary text-xl mb-4 mt-6"
                        >
                          Carte de signalement d'animal
                        </h4>
                        <p class="text-primary-dark text-sm mb-6">
                          Composant principal pour l'affichage des signalements
                          d'animaux perdus ou trouvés. Ce design met en avant
                          les informations essentielles tout en restant lisible
                          et efficace.
                        </p>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Carte de résumé animal trouvé -->
                <div
                  v-if="activeCard === 'resume'"
                  class="bg-white rounded-xl shadow overflow-hidden max-w-md mx-auto"
                >
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2576&auto=format&fit=crop"
                      alt="Chat blanc"
                      class="w-full h-64 object-cover"
                    />
                    <div
                      class="absolute top-4 left-4 right-4 flex justify-between items-center"
                    >
                      <span
                        class="bg-green-100 text-green-800 text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        Trouvé depuis 40 jours
                      </span>
                    </div>
                    <div class="absolute bottom-4 right-4">
                      <span
                        class="bg-gray-700/80 text-white text-sm font-medium px-3 py-1.5 rounded-lg"
                      >
                        ID: found5
                      </span>
                    </div>
                  </div>

                  <div class="p-5">
                    <h3 class="text-2xl font-bold text-gray-800 mb-3">Milo</h3>

                    <div class="space-y-3">
                      <div class="flex items-start gap-2">
                        <svg
                          class="h-5 w-5 text-gray-700 flex-shrink-0 mt-0.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span class="text-gray-700">
                          Rue des Charmes, Waterloo
                        </span>
                      </div>

                      <div class="flex items-center gap-1.5">
                        <svg
                          class="h-5 w-5 text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span>3 janvier 2025 à 01:45</span>
                      </div>

                      <div class="flex flex-wrap gap-2 pt-2">
                        <span
                          class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                          >indemne</span
                        >
                        <span
                          class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                          >maigre</span
                        >
                        <span
                          class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                          >blessé</span
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Carte de signalement d'animal -->
                <div
                  v-if="activeCard === 'signalement'"
                  class="bg-white rounded-xl shadow overflow-hidden max-w-md mx-auto"
                >
                  <div class="relative">
                    <img
                      src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=2576&auto=format&fit=crop"
                      alt="Chat"
                      class="w-full h-64 object-cover"
                    />
                    <div
                      class="absolute top-4 left-4 right-4 flex justify-between items-center"
                    >
                      <span
                        class="bg-green-100 text-green-800 text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        Trouvé
                      </span>
                      <span
                        class="bg-white/90 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        Il y a 38 jours
                      </span>
                    </div>
                    <div class="absolute bottom-4 right-4">
                      <span
                        class="bg-gray-700/80 text-white text-sm font-medium px-3 py-1.5 rounded-lg"
                      >
                        Nala
                      </span>
                    </div>
                  </div>

                  <div class="p-5">
                    <div class="space-y-3">
                      <div class="flex items-center gap-2">
                        <span class="text-primary font-medium">Race :</span>
                        <span>Sacré de Birmanie</span>
                      </div>

                      <div class="bg-green-50 p-3 rounded-lg">
                        <div class="flex items-start gap-2">
                          <svg
                            class="h-5 w-5 text-green-700 flex-shrink-0 mt-0.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="text-green-800"
                            >Lieu: Rue de la Croix, Braine-l'Alleud</span
                          >
                        </div>
                      </div>

                      <div class="flex flex-wrap gap-3">
                        <div class="flex items-center gap-1.5">
                          <svg
                            class="h-5 w-5 text-gray-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span>7 ans</span>
                        </div>

                        <div class="flex items-center gap-1.5">
                          <svg
                            class="h-5 w-5 text-blue-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span>Mâle</span>
                        </div>

                        <div class="flex items-center gap-1.5">
                          <svg
                            class="h-5 w-5 text-gray-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                            />
                          </svg>
                          <span>noir</span>
                        </div>
                      </div>

                      <p class="text-gray-600 text-sm">
                        Chat noir avec des poils court trouvé près de Rue de la
                        Croix, Braine-l'Alleud. Il semble être...
                      </p>

                      <div class="flex flex-wrap gap-2 pt-2">
                        <span
                          class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                          >sociable</span
                        >
                        <span
                          class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                          >stérilisée</span
                        >
                        <span
                          class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                          >sans collier</span
                        >
                      </div>
                    </div>

                    <div class="border-t mt-4 pt-3">
                      <p class="text-xs text-gray-500">
                        Publié le 2 mars 2025 à 08:36
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 6. Iconographie -->
        <section id="iconographie" class="mt-20">
          <h2
            class="text-3xl font-bold tracking-tight text-primary font-serif mb-6"
          >
            6. Iconographie
          </h2>
          <div class="prose prose-primary max-w-none">
            <p class="text-lg">
              Nos icônes sont immédiatement reconnaissables et
              cohérentes dans l'ensemble de notre plateforme. Elles améliorent l'expérience utilisateur en
              fournissant des repères visuels clairs.
            </p>

            <h3 class="mt-8 text-xl font-bold tracking-tight text-primary font-serif mb-6">Icônes d'interface</h3>
            <div class="bg-gray-50 p-6 rounded-xl my-6">
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                <!-- Exemples d'icônes -->
                <div
                  class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <svg
                    class="h-8 w-8 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <p class="text-sm text-primary font-medium mt-3">Adresse</p>
                  <p class="text-xs text-gray-500 mt-1">Represente le l'habitat</p>
                </div>
                <div
                  class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"
                >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <p class="text-sm text-primary font-medium mt-3">
                    Chat perdu
                  </p>
                  <p class="text-xs text-gray-500 mt-1">Smiley triste</p>
                </div>
                <div
                  class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"
                >
                <svg data-v-0d565b4a="" class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-v-0d565b4a="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  <p class="text-sm text-primary font-medium mt-3">
                    Modifier
                  </p>
                  <p class="text-xs text-gray-500 mt-1">Réécrire les informations</p>
                </div>
                <div
                  class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"
                >
                <svg data-v-0d565b4a="" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-v-0d565b4a="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                  <p class="text-sm text-primary font-medium mt-3">Déconnexion</p>
                  <p class="text-xs text-gray-500 mt-1">Quitter la session</p>
                </div>
              </div>

              <div class="mt-8 p-4 bg-white rounded-lg border border-gray-200">
                <h4 class="text-primary font-medium mb-3">
                  Principes de conception
                </h4>
                <ul
                  class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-primary-dark"
                >
                  <li class="flex items-start gap-2">
                    <span class="text-secondary">•</span>
                    <span>Style de ligne cohérent avec épaisseur de 2px</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-secondary">•</span>
                    <span
                      >Extrémités arrondies pour une apparence
                      accueillante</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-secondary">•</span>
                    <span>Formes simples et reconnaissables</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-secondary">•</span>
                    <span>Espacement interne cohérent</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 class="mt-10 text-xl font-bold tracking-tight text-primary font-serif mb-6">Badges et accomplissements</h3>
            <p>
              Les badges sont des éléments visuels qui
              valorisent les contributions des utilisateurs et stimulent
              l'engagement sur notre plateforme. Ils récompensent les
              différentes actions et jalons atteints.
            </p>

            <div class="bg-gray-50 p-6 rounded-xl my-6">
              <h4 class="font-medium text-primary mb-4">Exemples de badges</h4>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                <!-- Badge Héros -->
                <div class="flex flex-col items-center">
                  <div class="relative">
                   
                    
                    <img src="/icon/badge/main chat.svg" alt="Héros local" class="h-20 w-20">
                      
                    
                  </div>
                  <p class="text-sm font-medium text-primary mt-3">
                    Compagnon des sauvetages

                  </p>
                  <p class="text-xs text-gray-500 text-center mt-1">
                    Accompagne un autre membre pour capturer un animal blessé.
                  </p>
                </div>

                <!-- Badge Expert -->
                <div class="flex flex-col items-center">
                  <div class="relative">

                    <img src="/icon/badge/boussole.svg" alt="Héros local" class="h-20 w-20 ">
                    
                  </div>
                  <p class="text-sm font-medium text-primary mt-3">Explorateur urbain</p>
                  <p class="text-xs text-gray-500 text-center mt-1">
                    Signale un chat errant aperçu dans son quartier
                  </p>
                </div>

                <!-- Badge Contributeur -->
                <div class="flex flex-col items-center">
                  <div class="relative">
                    <img src="/icon/badge/loupe patte.svg" alt="Héros local" class="h-20 w-20">
                  </div>
                  <p class="text-sm font-medium text-primary mt-3">
                    Détective des poils
                  </p>
                  <p class="text-xs text-gray-500 text-center mt-1">
                    Compare les particularités d'un animal trouvé.
                  </p>
                </div>

                <!-- Badge Premier pas -->
                <div class="flex flex-col items-center">
                  <div class="relative">
                    <img src="/icon/badge/poigné de main.svg" alt="Héros local" class="h-20 w-20">
                  </div>
                  <p class="text-sm font-medium text-primary mt-3">
                    Samaritain communautaire
                  </p>
                  <p class="text-xs text-gray-500 text-center mt-1">
                     Aide un voisin à signaler un chat trouvé.
                  </p>
                </div>
              </div>

              <div class="mt-8 grid gap-6 md:grid-cols-2">
                <div class="bg-white rounded-lg border border-gray-200 p-4">
                  <h4 class="font-medium text-primary mb-3">
                    Principes des badges
                  </h4>
                  <ul class="space-y-2 text-sm text-primary-dark">
                    <li class="flex items-start gap-2">
                      <svg
                        class="h-5 w-5 text-secondary flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        >Visuellement distinctifs pour une reconnaissance
                        immédiate</span
                      >
                    </li>
                    <li class="flex items-start gap-2">
                      <svg
                        class="h-5 w-5 text-secondary flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        >Palette de couleurs évoquant whisker quest</span
                      >
                    </li>
                    <li class="flex items-start gap-2">
                      <svg
                        class="h-5 w-5 text-secondary flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        >Des couleurs secondaires sont autorisées dans certaines situations</span
                      >
                    </li>
                  </ul>
                </div>

                <div class="bg-white rounded-lg border border-gray-200 p-4">
                  <h4 class="font-medium text-primary mb-3">Utilisations</h4>
                  <ul class="space-y-2 text-sm text-primary-dark">
                    <li class="flex items-start gap-2">
                      <svg
                        class="h-5 w-5 text-secondary flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                        />
                      </svg>
                      <span
                        >Affichés sur les profils utilisateurs pour montrer
                        l'expertise</span
                      >
                    </li>
                    <li class="flex items-start gap-2">
                      <svg
                        class="h-5 w-5 text-secondary flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                        />
                      </svg>
                      <span
                        >Défini une action en un idéogramme</span
                      >
                    </li>
                    <li class="flex items-start gap-2">
                      <svg
                        class="h-5 w-5 text-secondary flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                        />
                      </svg>
                      <span
                        >Permet de rendre l'application plus interactive et ludique</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 7. Photographie -->
        <section id="images" class="mt-20">
          <h2
            class="text-3xl font-bold tracking-tight text-primary font-serif mb-6"
          >
            7. Photographie
          </h2>
          <div class="prose prose-primary max-w-none">
            <p>
              Les images jouent un rôle crucial dans notre plateforme, notamment
              pour les signalements d'animaux.<br>Nous distinguons deux types d'images.
            </p>

            <h3 class="mt-10 text-xl font-bold tracking-tight text-primary font-serif mb-6">Les cards de signalement</h3>
            <p>Les cards de signalement sont des images qui permettent d'identifier facilement l'animal. </p>
            <h4 class="font-medium text-primary my-3">Elles doivent etre de préférence :</h4>
            <ul class="list-disc list-inside">
              <li>Des images claires, bien éclairées et nettes</li>
              <li>Des photos authentiques montrant clairement les animaux</li>
              <li>Un cadrage permettant d'identifier facilement l'animal</li>
            </ul>

            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6"
            >
              <div class="rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Chat tigré"
                  class="w-full h-48 object-cover"
                />
              </div>
              <div class="rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Chat roux"
                  class="w-full h-48 object-cover"
                />
              </div>
              <div class="rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Chat noir"
                  class="w-full h-48 object-cover"
                />
              </div>
            </div>

            <h3 class="mt-10 text-xl font-bold tracking-tight text-primary font-serif mb-6">Les photos de communication</h3>
            <p>Les photos de communication sont des images qui sont utiliser sur le site et suport de communication. </p>
            <h4 class="font-medium text-primary my-3">Elles doivent etre de préférence :</h4>
            <ul class="list-disc list-inside">
              <li>Net et clair</li>
              <li>
               Le sujet est  un chat, un humain ou un reference a la marque
              </li>
              <li>L'utilisation de filtre de couleurs ou de paterne est autorisée </li>
              <li>Des effets viusel tel que bokeh peuvent etre apliqué</li>
            </ul>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6"
            >
              <div class="rounded-lg overflow-hidden">
                <img
                  src="/affiches/Affiche_9.4.jpg"
                  alt="Chat tigré"
                  class="w-full  object-cover"
                />
              </div>
              <div class="rounded-lg overflow-hidden">
                <img
                  src="/affiches/Affiche_10.2.jpg"
                  alt="Chat roux"
                  class="w-full object-cover"
                />
              </div>
              <div class="rounded-lg overflow-hidden">
                <img
                  src="/affiches/Affiche_11.5.jpg"
                  alt="Chat noir"
                  class="w-full  object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <!-- 8. Interface utilisateur -->
        <section id="interface" class="mt-20">
          <h2
            class="text-3xl font-bold tracking-tight text-primary font-serif mb-6 animate-fade-in"
          >
            8. Interface utilisateur
          </h2>

          <!-- Introduction avec design moderne -->
          <div
            class="bg-gray-50 rounded-2xl p-8 mb-12 hover:shadow-lg transition-all duration-300 animate-slide-up"
          >
            <div class="max-w-3xl">
              <p class="text-lg text-primary-dark leading-relaxed">
                L'interface utilisateur de Whisker Quest est conçue pour être
                intuitive, accessible et efficace, permettant aux utilisateurs
                de signaler ou rechercher des animaux rapidement dans un environnement ludique et interactif.
              </p>
            </div>
          </div>

          <!-- Principes de conception avec illustrations -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            <!-- Accessibilité -->
            <div
              class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px] animate-fade-in"
              style="animation-delay: 100ms"
            >
              <div
                class="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="h-6 w-6 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-primary mb-2">Accessibilité</h3>
              <p class="text-primary-dark text-sm">
                Conformité aux normes WCAG pour une expérience inclusive
              </p>
              <div class="mt-4 space-y-2">
                <div
                  class="flex items-center gap-2 text-sm text-gray-600 hover:translate-x-1 transition-transform"
                >
                  <svg
                    class="h-4 w-4 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Contraste optimal</span>
                </div>
                <div
                  class="flex items-center gap-2 text-sm text-gray-600 hover:translate-x-1 transition-transform"
                  style="transition-delay: 50ms"
                >
                  <svg
                    class="h-4 w-4 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Navigation au clavier</span>
                </div>
                <div
                  class="flex items-center gap-2 text-sm text-gray-600 hover:translate-x-1 transition-transform"
                  style="transition-delay: 100ms"
                >
                  <svg
                    class="h-4 w-4 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Lecteurs d'écran</span>
                </div>
              </div>
            </div>

            <!-- Responsive design -->
            <div
              class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px] animate-fade-in"
              style="animation-delay: 200ms"
            >
              <div
                class="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="h-6 w-6 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-primary mb-2">
                Responsive design
              </h3>
              <p class="text-primary-dark text-sm">
                Adaptation fluide à tous les appareils
              </p>
              <div class="mt-4 flex gap-4">
                <div class="device-container flex-1 relative h-56">
                  <div
                    class="responsive-device absolute inset-0 bg-gray-100 rounded-lg overflow-hidden transition-all duration-700"
                  >
                    <div
                      class="absolute inset-x-2 top-2 h-4 bg-primary/10 rounded"
                    ></div>
                    <div
                      class="absolute inset-x-2 top-8 bottom-2 bg-primary/5 rounded"
                    >
                      <!-- Contenu simulé -->
                      <div
                        class="absolute inset-x-4 top-4 h-2 bg-primary/10 rounded w-2/4"
                      ></div>
                      <div
                        class="absolute inset-x-4 top-10 h-2 bg-primary/10 rounded w-1/2"
                      ></div>
                      <div
                        class="absolute inset-x-4 top-16 h-2 bg-primary/10 rounded w-31"
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex-1 h-50 bg-gray-100 rounded-lg relative overflow-hidden"
                >
                  <div
                    class="absolute inset-x-2 top-2 h-4 bg-primary/10 rounded"
                  ></div>
                  <div
                    class="absolute inset-x-2 top-8 bottom-2 bg-primary/5 rounded"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Navigation intuitive -->
            <div
              class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px] animate-fade-in"
              style="animation-delay: 300ms"
            >
              <div
                class="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="h-6 w-6 text-amber-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <h3 class="text-lg font-bold text-primary mb-2">
                Navigation intuitive
              </h3>
              <p class="text-primary-dark text-sm">
                Architecture d'information claire
              </p>
              <div class="mt-4 space-y-2">
                <div
                  class="h-8 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                ></div>
                <div
                  class="h-24 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                ></div>
                <div
                  class="h-8 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                ></div>
              </div>
            </div>
          </div>

          <!-- Grille et espacement avec exemple visuel -->
          <div class="bg-white rounded-xl p-8 shadow-sm mb-12">
            <h3 class="text-xl font-bold text-primary mb-6">
              Grille et espacement
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p class="text-primary-dark mb-4">
                  Notre système utilise une grille flexible basée sur des
                  multiples de 4px pour assurer la cohérence visuelle. Les
                  marges, paddings et espacements suivent cette logique pour
                  créer une hiérarchie spatiale claire.
                </p>
                <div class="space-y-4">
                  <div class="flex items-center gap-2">
                    <div class="w-4 h-4 bg-secondary"></div>
                    <span class="text-sm text-gray-600"
                      >4px - Espacement minimal</span
                    >
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-secondary"></div>
                    <span class="text-sm text-gray-600"
                      >8px - Espacement standard</span
                    >
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-16 h-16 bg-secondary"></div>
                    <span class="text-sm text-gray-600"
                      >16px - Espacement large</span
                    >
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 p-6 rounded-xl">
                <div class="grid grid-cols-4 gap-4 h-full">
                  <div class="bg-primary/10 rounded"></div>
                  <div class="bg-primary/20 rounded"></div>
                  <div class="bg-primary/30 rounded"></div>
                  <div class="bg-primary/40 rounded"></div>
                  <div class="bg-primary/20 rounded col-span-2"></div>
                  <div class="bg-primary/30 rounded col-span-2"></div>
                  <div class="bg-primary/30 rounded col-span-3"></div>
                  <div class="bg-primary/40 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- États d'interface avec exemples interactifs -->
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-bold text-primary mb-6">
              États d'interface
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <!-- État par défaut -->
              <div class="space-y-4">
                <h4 class="font-medium text-primary">État par défaut</h4>
                <button
                  class="w-full px-4 py-2 bg-primary text-white rounded-lg"
                >
                  Bouton normal
                </button>
                <div class="w-full px-4 py-2 border border-gray-300 rounded-lg">
                  Champ de texte
                </div>
              </div>

              <!-- État de survol -->
              <div class="space-y-4">
                <h4 class="font-medium text-primary">État de survol</h4>
                <button
                  class="w-full px-4 py-2 bg-primary-dark text-white rounded-lg"
                >
                  Bouton survolé
                </button>
                <div
                  class="w-full px-4 py-2 border-2 border-primary rounded-lg"
                >
                  Champ de texte actif
                </div>
              </div>

              <!-- État actif/focus -->
              <div class="space-y-4">
                <h4 class="font-medium text-primary">État actif/focus</h4>
                <button
                  class="w-full px-4 py-2 bg-primary-dark text-white rounded-lg ring-2 ring-offset-2 ring-primary"
                >
                  Bouton focus
                </button>
                <div
                  class="w-full px-4 py-2 border-2 border-primary rounded-lg bg-primary/5"
                >
                  Champ de texte focus
                </div>
              </div>

              <!-- État désactivé -->
              <div class="space-y-4">
                <h4 class="font-medium text-primary">État désactivé</h4>
                <button
                  class="w-full px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
                >
                  Bouton désactivé
                </button>
                <div
                  class="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-400"
                >
                  Champ désactivé
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 9. Cartes et géolocalisation -->
        <section id="cartes" class="mt-20">
          <h2
            class="text-3xl font-bold tracking-tight text-primary font-serif mb-6"
          >
            9. Cartes et géolocalisation
          </h2>
          <div class="prose prose-primary max-w-none">
            <p class="text-lg">
              Les cartes interactives sont au cœur de notre plateforme,
              permettant aux utilisateurs de visualiser, rechercher et signaler
              des animaux perdus selon leur localisation. Notre implémentation
              utilise MapBox pour offrir une expérience cartographique optimale et treeJS pour la carte animé.
            </p>

            <h3 class="mt-10 text-xl font-bold tracking-tight text-primary font-serif mb-6">Styles et thèmes de carte</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div
                class="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div class="h-48 bg-primary-light relative overflow-hidden">
                  <img
                    src="/map-cats.png"
                    alt="Style de carte clair"
                    class="object-cover h-full w-full"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"
                  ></div>
                </div>
                <div class="p-6">
                  <h4 class="text-lg font-serif font-bold text-primary mb-2">
                    Mapbox
                  </h4>
                  <p class="text-sm text-primary-dark">
                    Utilisé comme style principal de notre application. Ce style
                    offre une grande lisibilité pour l'interface principale et
                    les recherches quotidiennes.
                  </p>
                  <ul class="mt-4 text-sm space-y-1 text-gray-600">
                    <li class="flex items-start gap-2">
                      <span class="text-secondary">•</span>
                      <span>Haute lisibilité des rues et points d'intérêt</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-secondary">•</span>
                      <span
                        >jeu de couleur pour distinguer perdu et trouvé</span
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div
                class="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div class="h-48 bg-slate-800 relative overflow-hidden">
                  <img
                    src="/public/printscreen/treejs.png"
                    alt="Style de carte sombre"
                    class="object-cover h-full w-full"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  ></div>
                </div>
                <div class="p-6">
                  <h4 class="text-lg font-serif font-bold text-primary mb-2">
                    TreeJS
                  </h4>
                  <p class="text-sm text-primary-dark">
                   Disponible sur la page explicative "comment ça marche ?". utiliser pour visualiser la communauté.
                  </p>
                  <ul class="mt-4 text-sm space-y-1 text-gray-600">
                    <li class="flex items-start gap-2">
                      <span class="text-secondary">•</span>
                      <span>Un code couleur pour chaque type de signalement</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-secondary">•</span>
                      <span
                        >Une carte interactive avec des animations</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- <h3 class="mt-10 text-xl font-bold tracking-tight text-primary font-serif mb-6">Marqueurs et visualisation des données</h3>
            <div class="bg-gray-50 p-6 rounded-xl my-6">
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <h4 class="font-medium text-primary mb-4">
                    Types de marqueurs
                  </h4>
                  <div class="space-y-4">
                    <div
                      class="flex gap-3 items-center p-3 bg-white rounded-lg"
                    >
                      <div
                        class="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white drop-shadow-md"
                      >
                        <svg
                          class="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.5 2a7.5 7.5 0 00-7.5 7.5c0 5.625 7.5 10.5 7.5 10.5s7.5-4.875 7.5-10.5a7.5 7.5 0 00-7.5-7.5zm0 10.5a3 3 0 110-6 3 3 0 010 6z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h5 class="text-sm font-medium">Animal perdu</h5>
                        <p class="text-xs text-gray-500">
                          Signalements actifs d'animaux disparus
                        </p>
                      </div>
                    </div>

                    <div
                      class="flex gap-3 items-center p-3 bg-white rounded-lg"
                    >
                      <div
                        class="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white drop-shadow-md"
                      >
                        <svg
                          class="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.5 2a7.5 7.5 0 00-7.5 7.5c0 5.625 7.5 10.5 7.5 10.5s7.5-4.875 7.5-10.5a7.5 7.5 0 00-7.5-7.5zm0 10.5a3 3 0 110-6 3 3 0 010 6z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h5 class="text-sm font-medium">Animal trouvé</h5>
                        <p class="text-xs text-gray-500">
                          Signalements d'animaux trouvés
                        </p>
                      </div>
                    </div>

                    <div
                      class="flex gap-3 items-center p-3 bg-white rounded-lg"
                    >
                      <div
                        class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white drop-shadow-md"
                      >
                        <svg
                          class="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.5 2a7.5 7.5 0 00-7.5 7.5c0 5.625 7.5 10.5 7.5 10.5s7.5-4.875 7.5-10.5a7.5 7.5 0 00-7.5-7.5zm0 10.5a3 3 0 110-6 3 3 0 010 6z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h5 class="text-sm font-medium">Service animalier</h5>
                        <p class="text-xs text-gray-500">
                          Vétérinaires, refuges, associations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="lg:col-span-2">
                  <h4 class="font-medium text-primary mb-4">
                    Interaction avec la carte
                  </h4>
                  <div class="bg-white p-4 rounded-lg">
                    <p class="text-sm text-primary-dark mb-4">
                      Notre implémentation cartographique offre une expérience
                      interactive complète avec les fonctionnalités suivantes:
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div class="flex gap-2 items-start">
                        <svg
                          class="h-5 w-5 text-secondary flex-shrink-0 mt-0.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span>Recherche par adresse ou code postal</span>
                      </div>
                      <div class="flex gap-2 items-start">
                        <svg
                          class="h-5 w-5 text-secondary flex-shrink-0 mt-0.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span>Géolocalisation de l'utilisateur</span>
                      </div>
                      <div class="flex gap-2 items-start">
                        <svg
                          class="h-5 w-5 text-secondary flex-shrink-0 mt-0.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                        <span>Filtres par type et date</span>
                      </div>
                      <div class="flex gap-2 items-start">
                        <svg
                          class="h-5 w-5 text-secondary flex-shrink-0 mt-0.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span>Liste des résultats synchronisée</span>
                      </div>
                      <div class="flex gap-2 items-start">
                        <svg
                          class="h-5 w-5 text-secondary flex-shrink-0 mt-0.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path
                            fill-rule="evenodd"
                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span>Détails des signalements au clic</span>
                      </div>
                      <div class="flex gap-2 items-start">
                        <svg
                          class="h-5 w-5 text-secondary flex-shrink-0 mt-0.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"
                          />
                        </svg>
                        <span>Définition de zones de recherche</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-8 p-5 bg-white rounded-lg border border-gray-200">
                <h4 class="font-medium text-primary mb-3">
                  Intégration avec l'application
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 class="text-sm font-medium text-primary mb-2">
                      Signalement d'un animal
                    </h5>
                    <ol
                      class="text-sm text-primary-dark space-y-1 list-decimal list-inside"
                    >
                      <li>L'utilisateur clique sur "Signaler" sur la carte</li>
                      <li>Sélection précise de la localisation</li>
                      <li>Ajout des informations et photos de l'animal</li>
                      <li>Confirmation et publication du signalement</li>
                    </ol>
                  </div>
                  <div>
                    <h5 class="text-sm font-medium text-primary mb-2">
                      Recherche d'un animal
                    </h5>
                    <ol
                      class="text-sm text-primary-dark space-y-1 list-decimal list-inside"
                    >
                      <li>Définition d'une zone de recherche (rayon)</li>
                      <li>Application des filtres par caractéristiques</li>
                      <li>Visualisation des résultats sur la carte</li>
                      <li>Exploration des détails de chaque signalement</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div> -->
 
            <!-- <h3 class="mt-10 text-xl font-bold tracking-tight text-primary font-serif mb-6">Performances et accessibilité</h3>
            <div class="bg-white p-6 rounded-xl border border-gray-200 my-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-medium text-primary mb-3">Optimisations</h4>
                  <ul class="space-y-2 text-sm text-primary-dark">
                    <li class="flex gap-2 items-start">
                      <svg
                        class="h-5 w-5 text-green-500 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        >Chargement progressif des marqueurs selon le zoom</span
                      >
                    </li>
                    <li class="flex gap-2 items-start">
                      <svg
                        class="h-5 w-5 text-green-500 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        >Mise en cache des tuiles pour utilisation
                        hors-ligne</span
                      >
                    </li>
                    <li class="flex gap-2 items-start">
                      <svg
                        class="h-5 w-5 text-green-500 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        >Regroupement des marqueurs à faible zoom
                        (clustering)</span
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium text-primary mb-3">Accessibilité</h4>
                  <ul class="space-y-2 text-sm text-primary-dark">
                    <li class="flex gap-2 items-start">
                      <svg
                        class="h-5 w-5 text-green-500 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>Contrôles adaptés pour navigation clavier</span>
                    </li>
                    <li class="flex gap-2 items-start">
                      <svg
                        class="h-5 w-5 text-green-500 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        >Descriptions textuelles des marqueurs pour lecteurs
                        d'écran</span
                      >
                    </li>
                    <li class="flex gap-2 items-start">
                      <svg
                        class="h-5 w-5 text-green-500 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span
                        >Vue alternative en liste pour accès sans carte</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div> -->
          </div>
        </section>

        <!-- Conclusion -->
        <section class="mt-20 mb-10">
          <div class="rounded-xl bg-primary p-8 text-white">
            <h2 class="text-2xl font-bold font-serif mb-4">
              Application et évolution
            </h2>
            <p class="text-primary-light mb-6">
              Cette charte graphique est un document vivant qui évoluera avec la
              plateforme. Les principes définis ici doivent être appliqués
              systématiquement pour maintenir la cohérence et renforcer
              l'identité de Whisker Quest.
            </p>
            <p class="text-primary-light">
              Pour toute question ou clarification concernant l'application de
              ces directives, veuillez contacter l'équipe design à
              design@whiskerquest.com
            </p>
          </div>
        </section>
      </div>
      <!-- Bouton retour -->
      <div class="mb-12 flex justify-center">
        <a
          href="/"
          class="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-white shadow-sm hover:bg-primary-dark transition-colors"
        >
          <svg class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clip-rule="evenodd"
            />
          </svg>
          Retour au site
        </a>
      </div>
    </div>
  </MainLayout>

  <!-- Message global de copie en bas à droite -->
  <teleport to="body">
    <transition name="fade">
      <div
        v-if="globalCopiedHex"
        class="fixed bottom-6 right-6 z-50 bg-primary text-white px-4 py-2 rounded-lg shadow-lg text-sm opacity-90"
        style="pointer-events: none"
      >
        Couleur {{ globalCopiedHex }} copiée !
      </div>
    </transition>
  </teleport>

  <!-- Bouton "Back to top" -->
  <teleport to="body">
    <transition name="fade">
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-50 bg-primary text-white px-3 py-2 rounded-full shadow-lg text-sm hover:bg-primary-dark transition"
        aria-label="Remonter en haut"
      >
        ↑
      </button>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import MainLayout from "../layouts/MainLayout.vue";

// Pour gérer l'affichage des cartes dans la section "Cartes et conteneurs"
const activeCard = ref("signalement");

// Message global pour la copie
const globalCopiedHex = ref("");
let globalCopiedTimeout = null;
function copyColor(hex) {
  navigator.clipboard.writeText(hex);
  globalCopiedHex.value = hex;
  if (globalCopiedTimeout) clearTimeout(globalCopiedTimeout);
  globalCopiedTimeout = setTimeout(() => {
    globalCopiedHex.value = "";
  }, 1500);
}

function scrollToSectionWithOffset(id, offset = 82) { // 64px = 4rem
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

const showBackToTop = ref(false);

function handleScroll() {
  const sommaire = document.querySelector('.mt-16.rounded-xl.bg-gray-50.p-8');
  if (sommaire) {
    const bottomSommaire = sommaire.offsetTop + sommaire.offsetHeight;
    showBackToTop.value = window.scrollY > bottomSommaire;
  } else {
    showBackToTop.value = window.scrollY > 400; // fallback
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style>
@keyframes device-cycle {
  0%,
  25% {
    aspect-ratio: 16/9;
    opacity: 1;
    transform: scale(1);
  }
  33%,
  58% {
    aspect-ratio: 3/4;
    opacity: 1;
    transform: scale(0.9);
  }
  66%,
  91% {
    aspect-ratio: 9/16;
    opacity: 1;
    transform: scale(0.8);
  }
  100% {
    aspect-ratio: 16/9;
    opacity: 1;
    transform: scale(1);
  }
}

.device-container .device {
  animation: device-cycle 6s infinite ease-in-out;
}

.device-container .device.desktop {
  animation-delay: 0s;
}

.device-container .device.tablet {
  animation-delay: -4s;
}

.device-container .device.mobile {
  animation-delay: -2s;
}

@keyframes responsive-transform {
  0%,
  30% {
    width: 45%;
    height: 50%;
    transform: translateX(60%);
  }
  40%,
  60% {
    width: 65%;
    height: 75%;
    transform: translateX(25%);
  }
  70%,
  90% {
    width: 85%;
    height: 55%;
    transform: translateX(10%);
  }
  100% {
    width: 45%;
    height: 50%;
    transform: translateX(60%);
  }
}

.responsive-device {
  animation: responsive-transform 6s infinite ease-in-out;
  transform-origin: center center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Suppression des anciennes animations */
.device-container .device,
.device-container .device.desktop,
.device-container .device.tablet,
.device-container .device.mobile {
  animation: none;
}

@keyframes float {
  0%,
  100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, -5px);
  }
}

.group:hover .absolute {
  animation: float 2s ease-in-out infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

    .usage-section {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      margin-bottom: 40px;
    }
    
    .usage-card {
      flex: 1;
      min-width: 300px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .card-header {
      padding: 15px;
      font-weight: bold;
      color: white;
      text-align: center;
    }
    
    .correct {
      background-color: #4CAF50;
    }
    
    .incorrect {
      background-color: #F44336;
    }
    
    .logo-container {
      padding: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f9f9f9;
      height: 200px;
    }
    
    .description {
      padding: 20px;
      background-color: white;
    }
    
    /* Exemple de mauvais usage - Logo cropé */
    .cropped-container {
      width: 100px;
      height: 100px;
      overflow: hidden;
      position: relative;
    }
    
    .cropped-logo {
      position: absolute;
      top: 0;
      left: 0;
      width: 180px;
      height: 180px;
    }
    
    /* Autres exemples de mauvais usages */
    .stretched-logo {
      width: 180px;
      height: 100px;
    }
    
    .compressed-logo {
      width: 100px;
      height: 180px;
    }
    
    .colored-logo {
      filter: hue-rotate(90deg);
    }
    
    .proper-logo {
      width: 150px;
      height: 150px;
    }
</style>