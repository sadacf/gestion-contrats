// Service Worker - Gestion Contrats APSAD
const CACHE_NAME = 'gestion-contrats-v1';

// Installation - ne met rien en cache (Firebase gère les données)
self.addEventListener('install', e => {
  self.skipWaiting();
});

// Activation
self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

// Fetch - laisse passer toutes les requêtes normalement
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => {
    // En cas d'erreur réseau, retourne une réponse vide
    return new Response('', { status: 503 });
  }));
});
