const CACHE_NAME = 'airplanes-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://unpkg.com/three@0.117.1/build/three.min.js',
  'https://unpkg.com/three@0.117.1/examples/js/loaders/OBJLoader.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.1/gsap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.1/ScrollTrigger.min.js',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/DrawSVGPlugin3.min.js',
  'https://assets.codepen.io/557388/clouds.png',
  'https://assets.codepen.io/557388/sunset-reduced.jpg',
  'https://assets.codepen.io/557388/1405+Plane_1.obj',
  './aeropl.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
