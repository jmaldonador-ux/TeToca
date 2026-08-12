// TeToca service worker (mínimo para PWA instalable)
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  // red primero; la app maneja su propio estado con Supabase
  e.respondWith(fetch(e.request).catch(() => new Response('Sin conexión', {status: 503})));
});
