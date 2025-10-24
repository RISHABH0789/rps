const cacheName = "rps-game-cache-v1";
const assetsToCache = [
  "/index.html",
  "/pvc.html",
  "/pvp.html",
  "/names.html",
  "/logo.png",
  "/styles/index.css",
  "/styles/pvc.css",
  "/styles/pvp.css",
  "/styles/names.css",
  "/scripts/pvc.js",
  "/scripts/pvp.js",
  "/scripts/names.js"
];

// Install service worker and cache assets
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Fetch assets from cache first, fallback to network
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
