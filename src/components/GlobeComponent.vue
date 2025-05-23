<template>
  <div class="relative w-full h-full rounded-lg overflow-hidden">
    <div ref="globeContainer" class="w-full h-full"></div>

    <!-- Titre et sous-titre en haut à gauche -->
    <div class="absolute top-8 lg:top-24 left-8 lg:left-24 text-white">
      <h1 class="text-5xl font-bold font-oldtt text-orange-500">Quest</h1>
      <p class="text-xl opacity-80 mt-1 font-sans drop-shadow-lg">
        Réseau mondial de connexions
      </p>
    </div>

    <div
      class="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium text-gray-800"
    >
      Lat: {{ currentLat.toFixed(2) }}° | Long: {{ currentLong.toFixed(2) }}°
    </div>

    <!-- Statistiques en bas à droite en format vertical -->
    <div
      class="absolute sm:flex hidden bottom-8 right-8 flex-col gap-4 text-white text-center"
    >
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
        <div class="text-base font-bold">25K+</div>
        <div class="text-xs opacity-80">Utilisateurs</div>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div class="text-base font-bold">150+</div>
        <div class="text-xs opacity-80">Villes</div>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-blue-500"></div>
        <div class="text-base font-bold">10+</div>
        <div class="text-xs opacity-80">Pays</div>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-slate-400"></div>
        <div class="text-base font-bold">5.2K+</div>
        <div class="text-xs opacity-80">Succès</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const globeContainer = ref(null);
let scene, camera, renderer, globe, controls, raycaster;
let animationId = null;
const currentLat = ref(50); // Valeur par défaut (Belgique)
const currentLong = ref(4); // Valeur par défaut (Belgique)

// Données des points sur le globe (latitude, longitude)
// Concentration en Belgique et France
const points = [
  // Belgique - Concentration principale
  { lat: 50.8503, lng: 4.3517, name: "Bruxelles", size: 0.8, color: 0xffd700 }, // Bruxelles - siège principal
  { lat: 51.2213, lng: 4.4051, name: "Anvers", size: 0.7, color: 0xffd700 }, // Anvers
  { lat: 50.6326, lng: 5.5797, name: "Liège", size: 0.7, color: 0xffd700 }, // Liège
  { lat: 51.0543, lng: 3.7174, name: "Gand", size: 0.7, color: 0xffd700 }, // Gand
  { lat: 50.4673, lng: 4.8719, name: "Namur", size: 0.65, color: 0xffd700 }, // Namur
  { lat: 50.4108, lng: 4.4449, name: "Charleroi", size: 0.65, color: 0xffd700 }, // Charleroi
  { lat: 51.3109, lng: 3.2246, name: "Bruges", size: 0.65, color: 0xffd700 }, // Bruges
  { lat: 50.8223, lng: 4.3676, name: "Louvain", size: 0.6, color: 0xffd700 }, // Louvain
  { lat: 50.9361, lng: 5.3393, name: "Hasselt", size: 0.6, color: 0xffd700 }, // Hasselt
  { lat: 50.4552, lng: 3.9519, name: "Mons", size: 0.6, color: 0xffd700 }, // Mons
  { lat: 50.2639, lng: 4.9135, name: "Dinant", size: 0.55, color: 0xffd700 }, // Dinant
  {
    lat: 51.1641,
    lng: 4.1405,
    name: "Saint-Nicolas",
    size: 0.55,
    color: 0xffd700,
  }, // Saint-Nicolas

  // France - Concentration secondaire
  { lat: 48.8566, lng: 2.3522, name: "Paris", size: 0.75, color: 0xff6b6b }, // Paris
  { lat: 50.6292, lng: 3.0573, name: "Lille", size: 0.7, color: 0xff6b6b }, // Lille (proche de la Belgique)
  { lat: 49.4431, lng: 1.0993, name: "Rouen", size: 0.65, color: 0xff6b6b }, // Rouen
  {
    lat: 48.5734,
    lng: 7.7521,
    name: "Strasbourg",
    size: 0.65,
    color: 0xff6b6b,
  }, // Strasbourg
  { lat: 49.1829, lng: -0.3707, name: "Caen", size: 0.6, color: 0xff6b6b }, // Caen
  { lat: 47.2173, lng: -1.5534, name: "Nantes", size: 0.6, color: 0xff6b6b }, // Nantes
  { lat: 49.2577, lng: 4.0317, name: "Reims", size: 0.6, color: 0xff6b6b }, // Reims
  { lat: 47.322, lng: 5.0415, name: "Dijon", size: 0.6, color: 0xff6b6b }, // Dijon
  { lat: 48.6921, lng: 6.1844, name: "Nancy", size: 0.55, color: 0xff6b6b }, // Nancy
  { lat: 49.8941, lng: 2.2957, name: "Amiens", size: 0.55, color: 0xff6b6b }, // Amiens

  // Quelques points dans les pays voisins (moins nombreux et plus petits)
  { lat: 51.5074, lng: -0.1278, name: "Londres", size: 0.5, color: 0x4ecdc4 }, // Londres
  { lat: 52.3676, lng: 4.9041, name: "Amsterdam", size: 0.5, color: 0x4ecdc4 }, // Amsterdam
  { lat: 50.1109, lng: 8.6821, name: "Francfort", size: 0.45, color: 0x4ecdc4 }, // Francfort
  { lat: 52.52, lng: 13.405, name: "Berlin", size: 0.45, color: 0x4ecdc4 }, // Berlin
  { lat: 46.2044, lng: 6.1432, name: "Genève", size: 0.45, color: 0x4ecdc4 }, // Genève
];

// Convertir les coordonnées géographiques en coordonnées 3D
function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}

// Fonction pour convertir les coordonnées 3D en coordonnées géographiques
function vector3ToLatLng(position, radius) {
  const phi = Math.acos(position.y / radius);
  const theta = Math.atan2(position.z, position.x);

  const lat = 90 - (phi * 180) / Math.PI;
  const lng = (theta * 180) / Math.PI - 180;

  return { lat, lng };
}

// Initialiser la scène Three.js
function initScene() {
  // Créer la scène
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a1621);

  // Créer la caméra
  camera = new THREE.PerspectiveCamera(
    45,
    globeContainer.value.clientWidth / globeContainer.value.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 3.5, 3.0);

  // Créer le renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true, // Activer l'alpha pour la transparence
  });
  renderer.setSize(
    globeContainer.value.clientWidth,
    globeContainer.value.clientHeight
  );
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0); // Fond transparent
  globeContainer.value.appendChild(renderer.domElement);

  // Ajouter des contrôles pour la rotation
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.rotateSpeed = 0.3;
  controls.enableZoom = false;

  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.2;

  // Limiter la rotation verticale pour rester centré sur l'Europe
  controls.minPolarAngle = Math.PI / 3;
  controls.maxPolarAngle = Math.PI / 2.2;

  // Définir le rayon du globe
  const radius = 2;

  // Positionner la caméra pour voir la Belgique (Europe)
  const belgiumPosition = latLngToVector3(47.0, 0.35, radius);
  // Ajuster la position de la caméra pour être plus proche et mieux centrée
  camera.position.set(
    belgiumPosition.x * 1.5,
    belgiumPosition.y * 1.3,
    belgiumPosition.z * 1.5
  );
  // Définir le point de vue centré sur la Belgique
  controls.target.set(
    belgiumPosition.x * 0.9,
    belgiumPosition.y * 0.9,
    belgiumPosition.z * 0.9
  );

  // Désactiver la rotation automatique pour garder la vue centrée
  controls.autoRotate = false;

  controls.update();

  // Créer le globe
  const segments = 64;

  // Créer un globe de base sans texture
  const globeGeometry = new THREE.SphereGeometry(radius, segments, segments);
  const globeMaterial = new THREE.MeshPhongMaterial({
    color: 0x0a1621,
    transparent: true,
    opacity: 0.95,
    shininess: 0.1,
    emissive: 0x112244,
    emissiveIntensity: 0.1,
  });

  globe = new THREE.Mesh(globeGeometry, globeMaterial);
  scene.add(globe);

  // Ajouter une atmosphère plus subtile
  const atmosphereGeometry = new THREE.SphereGeometry(
    radius * 1.02,
    segments,
    segments
  );
  const atmosphereMaterial = new THREE.MeshPhongMaterial({
    color: 0x8899aa,
    transparent: true,
    opacity: 0.05,
    side: THREE.BackSide,
  });

  const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
  scene.add(atmosphere);

  // Ajouter une grille de latitude/longitude très subtile
  function createLatLonGrid() {
    const gridGroup = new THREE.Group();

    // Lignes de latitude (réduites et plus espacées)
    for (let lat = -60; lat <= 60; lat += 30) {
      const points = [];
      for (let lng = -180; lng <= 180; lng += 5) {
        points.push(latLngToVector3(lat, lng, radius * 1.001));
      }

      const gridGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const gridMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.05, // Très subtil
        linewidth: 1,
      });

      const latLine = new THREE.Line(gridGeometry, gridMaterial);
      gridGroup.add(latLine);
    }

    // Lignes de longitude (réduites et plus espacées)
    for (let lng = -180; lng <= 180; lng += 30) {
      const points = [];
      for (let lat = -60; lat <= 60; lat += 5) {
        points.push(latLngToVector3(lat, lng, radius * 1.001));
      }

      const gridGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const gridMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.05, // Très subtil
        linewidth: 1,
      });

      const lngLine = new THREE.Line(gridGeometry, gridMaterial);
      gridGroup.add(lngLine);
    }

    return gridGroup;
  }

  const grid = createLatLonGrid();
  globe.add(grid);

  // Ajouter des points sur le globe
  const pointGroup = new THREE.Group();
  globe.add(pointGroup);

  // Définir les nouvelles couleurs pour les 4 types de points
  const BLUE = 0x10b981; // Vert - conservé
  const GRIS_BLEU = 0x94a3b8; // Gris bleu (remplace le mauve)
  const YELLOW = 0xfacc15; // Jaune
  const GREEN = 0x3b82f6; // Bleu

  // Créer de nombreux petits points répartis sur l'Europe
  const smallPoints = [
    // Points verts (Type 1) - Capitales et grandes villes
    { lat: 50.8503, lng: 4.3517, color: GREEN, size: 0.005 }, // Bruxelles - taille uniforme
    { lat: 48.8566, lng: 2.3522, color: GREEN, size: 0.005 }, // Paris - taille uniforme
    { lat: 52.52, lng: 13.405, color: GREEN, size: 0.005 }, // Berlin - taille uniforme
    { lat: 51.5074, lng: -0.1278, color: GREEN, size: 0.005 }, // Londres - taille uniforme
    { lat: 41.9028, lng: 12.4964, color: GREEN, size: 0.005 }, // Rome - taille uniforme
    { lat: 40.4168, lng: -3.7038, color: GREEN, size: 0.005 }, // Madrid - taille uniforme

    // Points jaunes (Type 2) - Villes secondaires
    { lat: 52.3676, lng: 4.9041, color: YELLOW, size: 0.005 }, // Amsterdam - taille uniforme
    { lat: 45.4642, lng: 9.19, color: YELLOW, size: 0.005 }, // Milan - taille uniforme
    { lat: 41.3851, lng: 2.1734, color: YELLOW, size: 0.005 }, // Barcelone - taille uniforme
    { lat: 48.1351, lng: 11.582, color: YELLOW, size: 0.005 }, // Munich - taille uniforme
    { lat: 48.2082, lng: 16.3738, color: YELLOW, size: 0.005 }, // Vienne - taille uniforme
    { lat: 44.8378, lng: -0.5792, color: YELLOW, size: 0.005 }, // Bordeaux - taille uniforme
    { lat: 43.2965, lng: 5.3698, color: YELLOW, size: 0.005 }, // Marseille - taille uniforme
    { lat: 45.764, lng: 4.8357, color: YELLOW, size: 0.005 }, // Lyon - taille uniforme

    // Points gris bleu (Type 3) - Villes régionales (anciennement mauve)
    { lat: 50.6292, lng: 3.0573, color: GRIS_BLEU, size: 0.005 }, // Lille - taille uniforme
    { lat: 51.2213, lng: 4.4051, color: GRIS_BLEU, size: 0.005 }, // Anvers - taille uniforme
    { lat: 47.3769, lng: 8.5417, color: GRIS_BLEU, size: 0.005 }, // Zurich - taille uniforme
    { lat: 50.0755, lng: 14.4378, color: GRIS_BLEU, size: 0.005 }, // Prague - taille uniforme
    { lat: 52.2297, lng: 21.0122, color: GRIS_BLEU, size: 0.005 }, // Varsovie - taille uniforme
    { lat: 50.6326, lng: 5.5797, color: GRIS_BLEU, size: 0.005 }, // Liège - taille uniforme
    { lat: 51.0543, lng: 3.7174, color: GRIS_BLEU, size: 0.005 }, // Gand - taille uniforme
    { lat: 50.4673, lng: 4.8719, color: GRIS_BLEU, size: 0.005 }, // Namur - taille uniforme
    { lat: 50.4108, lng: 4.4449, color: GRIS_BLEU, size: 0.005 }, // Charleroi - taille uniforme
    { lat: 51.3109, lng: 3.2246, color: GRIS_BLEU, size: 0.005 }, // Bruges - taille uniforme
    { lat: 50.8223, lng: 4.3676, color: GRIS_BLEU, size: 0.005 }, // Louvain - taille uniforme
    { lat: 50.9361, lng: 5.3393, color: GRIS_BLEU, size: 0.005 }, // Hasselt - taille uniforme
    { lat: 50.4552, lng: 3.9519, color: GRIS_BLEU, size: 0.005 }, // Mons - taille uniforme
    { lat: 50.2639, lng: 4.9135, color: GRIS_BLEU, size: 0.005 }, // Dinant - taille uniforme
    { lat: 51.1641, lng: 4.1405, color: GRIS_BLEU, size: 0.005 }, // Saint-Nicolas - taille uniforme

    // Points bleus (Type 4) - Petites villes et points d'intérêt
    { lat: 59.3293, lng: 18.0686, color: BLUE, size: 0.005 }, // Stockholm - taille uniforme
    { lat: 55.6761, lng: 12.5683, color: BLUE, size: 0.005 }, // Copenhague - taille uniforme
    { lat: 38.7223, lng: -9.1393, color: BLUE, size: 0.005 }, // Lisbonne - taille uniforme
    { lat: 59.9139, lng: 10.7522, color: BLUE, size: 0.005 }, // Oslo - taille uniforme
    { lat: 37.9838, lng: 23.7275, color: BLUE, size: 0.005 }, // Athènes - taille uniforme
    { lat: 47.4979, lng: 19.0402, color: BLUE, size: 0.005 }, // Budapest - taille uniforme
    { lat: 49.4431, lng: 1.0993, color: BLUE, size: 0.005 }, // Rouen - taille uniforme
    { lat: 48.5734, lng: 7.7521, color: BLUE, size: 0.005 }, // Strasbourg - taille uniforme
    { lat: 49.1829, lng: -0.3707, color: BLUE, size: 0.005 }, // Caen - taille uniforme
    { lat: 47.2173, lng: -1.5534, color: BLUE, size: 0.005 }, // Nantes - taille uniforme
    { lat: 49.2577, lng: 4.0317, color: BLUE, size: 0.005 }, // Reims - taille uniforme
    { lat: 47.322, lng: 5.0415, color: BLUE, size: 0.005 }, // Dijon - taille uniforme
    { lat: 48.6921, lng: 6.1844, color: BLUE, size: 0.005 }, // Nancy - taille uniforme
    { lat: 49.8941, lng: 2.2957, color: BLUE, size: 0.005 }, // Amiens - taille uniforme
    { lat: 50.1109, lng: 8.6821, color: BLUE, size: 0.005 }, // Francfort - taille uniforme
    { lat: 46.2044, lng: 6.1432, color: BLUE, size: 0.005 }, // Genève - taille uniforme
  ];

  // Ajouter des points aléatoires supplémentaires en Europe
  for (let i = 0; i < 150; i++) {
    // Coordonnées aléatoires centrées sur l'Europe
    const lat = 45 + (Math.random() * 15 - 7.5); // Entre 37.5 et 52.5
    const lng = 10 + (Math.random() * 30 - 15); // Entre -5 et 25

    // Taille uniforme très petite pour tous les points
    let color,
      size = 0.005; // Taille uniforme très petite
    const rand = Math.random();
    if (rand < 0.1) {
      color = GREEN;
    } else if (rand < 0.25) {
      color = YELLOW;
    } else if (rand < 0.45) {
      color = GRIS_BLEU;
    } else {
      color = BLUE;
    }

    smallPoints.push({ lat, lng, color, size });
  }

  // Créer tous les petits points
  smallPoints.forEach((point) => {
    const position = latLngToVector3(point.lat, point.lng, radius);

    // Créer le point simple sans halo avec taille uniforme
    const markerGeometry = new THREE.SphereGeometry(0.005, 8, 8); // Taille uniforme très petite
    const markerMaterial = new THREE.MeshBasicMaterial({
      color: point.color,
      transparent: true,
      opacity: 0.8,
    });

    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.copy(position);
    pointGroup.add(marker);
  });

  // Ajouter des lignes de connexion très fines entre certains points
  // Créer des connexions entre les villes européennes avec les nouvelles couleurs
  // Connexions de Type 1 (capitales) - plus visibles
  const type1Material = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.6,
    linewidth: 1,
  });

  // Connexions de Type 2 (villes secondaires) - moins visibles
  const type2Material = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.4,
    linewidth: 1,
  });

  // Connexions de Type 3 (villes régionales) - encore moins visibles
  const type3Material = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.2,
    linewidth: 1,
  });

  // Connexions entre types différents
  const mixedMaterial = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.15,
    linewidth: 1,
  });

  // Modifier les couleurs des points
  const POINT_COLOR = 0xffffff; // Tous les points en blanc
  const POINT_SIZES = {
    TYPE1: 0.008, // Points principaux
    TYPE2: 0.006, // Points secondaires
    TYPE3: 0.004, // Points tertiaires
    TYPE4: 0.003, // Petits points
  };

  // Mettre à jour les couleurs des points existants
  smallPoints.forEach((point) => {
    point.color = POINT_COLOR;
    if (point.size === 0.005) {
      // Si c'est un point existant
      // Attribuer une nouvelle taille en fonction du type
      if (point.color === GREEN) point.size = POINT_SIZES.TYPE1;
      else if (point.color === YELLOW) point.size = POINT_SIZES.TYPE2;
      else if (point.color === GRIS_BLEU) point.size = POINT_SIZES.TYPE3;
      else point.size = POINT_SIZES.TYPE4;
    }
  });

  // Fonction pour créer un arc entre deux points sur le globe
  function createArcBetweenPoints(
    pointA,
    pointB,
    height,
    material,
    segments = 50
  ) {
    // Calculer le point au milieu
    const midPoint = new THREE.Vector3()
      .addVectors(pointA, pointB)
      .multiplyScalar(0.5);

    // Normaliser le point médian pour obtenir un point à la surface du globe
    const surfaceMidPoint = midPoint.clone().normalize().multiplyScalar(radius);

    // Calculer le point culminant de l'arc
    const arcHeight = radius * (1 + height); // height est un pourcentage du rayon
    const arcPeakPoint = midPoint.clone().normalize().multiplyScalar(arcHeight);

    // Créer une courbe quadratique
    const curve = new THREE.QuadraticBezierCurve3(
      pointA.clone(),
      arcPeakPoint,
      pointB.clone()
    );

    // Créer les points de la courbe
    const points = curve.getPoints(segments);

    // Créer la géométrie de la courbe
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Créer la ligne
    const line = new THREE.Line(geometry, material);

    return line;
  }

  // Quelques connexions principales avec arcs
  const mainConnections = [
    {
      start: { lat: 50.8503, lng: 4.3517 },
      end: { lat: 48.8566, lng: 2.3522 },
      height: 0.2,
    }, // Bruxelles-Paris
    {
      start: { lat: 48.8566, lng: 2.3522 },
      end: { lat: 40.4168, lng: -3.7038 },
      height: 0.3,
    }, // Paris-Madrid
    {
      start: { lat: 48.8566, lng: 2.3522 },
      end: { lat: 51.5074, lng: -0.1278 },
      height: 0.15,
    }, // Paris-Londres
    {
      start: { lat: 52.52, lng: 13.405 },
      end: { lat: 48.8566, lng: 2.3522 },
      height: 0.25,
    }, // Berlin-Paris
    {
      start: { lat: 52.52, lng: 13.405 },
      end: { lat: 41.9028, lng: 12.4964 },
      height: 0.3,
    }, // Berlin-Rome
    {
      start: { lat: 41.9028, lng: 12.4964 },
      end: { lat: 37.9838, lng: 23.7275 },
      height: 0.2,
    }, // Rome-Athènes
    {
      start: { lat: 52.3676, lng: 4.9041 },
      end: { lat: 51.5074, lng: -0.1278 },
      height: 0.1,
    }, // Amsterdam-Londres
    {
      start: { lat: 59.3293, lng: 18.0686 },
      end: { lat: 55.6761, lng: 12.5683 },
      height: 0.2,
    }, // Stockholm-Copenhague
    {
      start: { lat: 48.2082, lng: 16.3738 },
      end: { lat: 50.0755, lng: 14.4378 },
      height: 0.15,
    }, // Vienne-Prague
    {
      start: { lat: 45.4642, lng: 9.19 },
      end: { lat: 41.9028, lng: 12.4964 },
      height: 0.2,
    }, // Milan-Rome
  ];

  // Ajouter les connexions principales
  mainConnections.forEach(({ start, end, height }) => {
    const startPoint = latLngToVector3(start.lat, start.lng, radius);
    const endPoint = latLngToVector3(end.lat, end.lng, radius);
    const arc = createArcBetweenPoints(
      startPoint,
      endPoint,
      height,
      type1Material
    );
    pointGroup.add(arc);
  });

  // Générer des connexions secondaires aléatoires
  const secondaryConnections = [];
  // Créer un échantillon des villes pour les connexions secondaires
  const cityCoordinates = smallPoints
    .filter((point) => Math.random() < 0.3) // Sélectionner environ 30% des points
    .map((point) => ({ lat: point.lat, lng: point.lng }));

  // Créer un nombre limité de connexions secondaires aléatoires
  for (let i = 0; i < 25; i++) {
    if (cityCoordinates.length < 2) break;

    const city1Index = Math.floor(Math.random() * cityCoordinates.length);
    const city1 = cityCoordinates[city1Index];

    // Trouver une ville à proximité (dans un rayon de 20 degrés)
    let nearestCityIndex = -1;
    let minDistance = 100; // Une grande valeur initiale

    for (let j = 0; j < cityCoordinates.length; j++) {
      if (j === city1Index) continue;

      const city2 = cityCoordinates[j];
      const distance = Math.sqrt(
        Math.pow(city1.lat - city2.lat, 2) + Math.pow(city1.lng - city2.lng, 2)
      );

      if (distance < minDistance && distance < 20) {
        minDistance = distance;
        nearestCityIndex = j;
      }
    }

    if (nearestCityIndex !== -1) {
      const city2 = cityCoordinates[nearestCityIndex];
      const height = 0.05 + Math.random() * 0.15; // Hauteur aléatoire entre 0.05 et 0.2

      // Déterminer le matériau en fonction de la distance
      let material;
      if (minDistance < 5) {
        material = type2Material;
      } else if (minDistance < 10) {
        material = type3Material;
      } else {
        material = mixedMaterial;
      }

      secondaryConnections.push({
        start: city1,
        end: city2,
        height,
        material,
      });

      // Supprimer ces deux villes pour éviter de créer trop de connexions partant des mêmes villes
      cityCoordinates.splice(Math.max(city1Index, nearestCityIndex), 1);
      cityCoordinates.splice(Math.min(city1Index, nearestCityIndex), 1);
    }
  }

  // Ajouter les connexions secondaires
  secondaryConnections.forEach(({ start, end, height, material }) => {
    const startPoint = latLngToVector3(start.lat, start.lng, radius);
    const endPoint = latLngToVector3(end.lat, end.lng, radius);
    const arc = createArcBetweenPoints(startPoint, endPoint, height, material);
    pointGroup.add(arc);
  });

  // Animation des arcs
  const animatedArcs = [];

  // Créer quelques arcs animés (limité pour des raisons de performance)
  for (let i = 0; i < 5; i++) {
    const startIndex = Math.floor(Math.random() * smallPoints.length);
    const endIndex = Math.floor(Math.random() * smallPoints.length);

    if (startIndex !== endIndex) {
      const start = smallPoints[startIndex];
      const end = smallPoints[endIndex];

      const startPoint = latLngToVector3(start.lat, start.lng, radius);
      const endPoint = latLngToVector3(end.lat, end.lng, radius);

      // Créer un matériau animé qui pulse
      const animatedMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.1,
        linewidth: 1,
      });

      const arc = createArcBetweenPoints(
        startPoint,
        endPoint,
        0.2 + Math.random() * 0.2,
        animatedMaterial
      );
      pointGroup.add(arc);

      // Stocker l'arc et son matériau pour l'animation
      animatedArcs.push({
        arc,
        material: animatedMaterial,
        phase: Math.random() * Math.PI * 2, // Phase aléatoire pour une animation désynchronisée
      });
    }
  }

  // Mettre à jour l'animation pour inclure les arcs
  const animate = () => {
    animationId = requestAnimationFrame(animate);

    // Mouvement de balayage horizontal limité (droite-gauche)
    if (globe) {
      // Désactiver la rotation automatique standard
      controls.autoRotate = false;

      // Créer un mouvement de balayage horizontal très limité
      const time = Date.now() * 0.00005; // Ralentir le mouvement
      const amplitude = 0.2; //  l'amplitude du mouvement (en radians)
      const oscillation = Math.sin(time) * amplitude;

      // Appliquer une rotation limitée autour de l'axe Y
      globe.rotation.y = oscillation;

      // Animer les arcs
      const arcTime = Date.now() * 0.001;
      animatedArcs.forEach((item, index) => {
        // Faire pulser l'opacité de l'arc
        const opacityValue =
          0.1 + 0.4 * Math.abs(Math.sin(arcTime + item.phase));
        item.material.opacity = opacityValue;
      });
    }

    controls.update();
    renderer.render(scene, camera);
  };

  animate();

  // Ajouter des lumières
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(5, 3, 5);
  scene.add(directionalLight);

  // Ajouter une lumière d'accentuation pour les contours
  const accentLight = new THREE.DirectionalLight(0xffffff, 0.3);
  accentLight.position.set(-5, 1, -2);
  scene.add(accentLight);

  // Fond légèrement coloré
  scene.background = new THREE.Color(0x0a1621);

  // Initialiser le raycaster pour détecter les intersections
  raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  // Ajouter un écouteur d'événements pour suivre la position de la souris
  function onMouseMove(event) {
    // Calculer la position de la souris en coordonnées normalisées (-1 à +1)
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Mettre à jour le raycaster avec la position de la souris
    raycaster.setFromCamera(mouse, camera);

    // Vérifier les intersections avec le globe
    if (globe) {
      const intersects = raycaster.intersectObject(globe);
      if (intersects.length > 0) {
        // Obtenir le point d'intersection
        const point = intersects[0].point;
        // Normaliser le point pour obtenir un point sur la surface du globe
        const normalizedPoint = point.clone().normalize().multiplyScalar(2);
        // Convertir en coordonnées géographiques
        const coords = vector3ToLatLng(normalizedPoint, 2);
        // Mettre à jour les coordonnées affichées
        currentLat.value = coords.lat;
        currentLong.value = coords.lng;
      }
    }
  }

  // Ajouter l'écouteur d'événements
  renderer.domElement.addEventListener("mousemove", onMouseMove);

  // Gérer le redimensionnement de la fenêtre
  function handleResize() {
    camera.aspect =
      globeContainer.value.clientWidth / globeContainer.value.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(
      globeContainer.value.clientWidth,
      globeContainer.value.clientHeight
    );
  }

  window.addEventListener("resize", handleResize);

  // Nettoyer les événements lors du démontage
  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
    renderer.domElement.removeEventListener("mousemove", onMouseMove);
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
    }
    if (renderer && globeContainer.value.contains(renderer.domElement)) {
      globeContainer.value.removeChild(renderer.domElement);
    }

    // Libérer la mémoire
    if (scene) {
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    }

    renderer?.dispose();
    controls?.dispose();
  });
}

onMounted(() => {
  if (globeContainer.value) {
    initScene();
  }
});
</script>

<style scoped>
.globe-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
}

.font-oldtt {
  font-family: "Old Standard TT", serif;
  letter-spacing: 0.5px;
}
</style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Old+Standard+TT:wght@400;700&display=swap");
</style>
