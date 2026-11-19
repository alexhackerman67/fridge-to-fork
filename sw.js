const prefix = 'fridge-to-fork:' + self.registration.scope + ':';
const cacheName = prefix + 'household-servings-v17';
const files = [
  './', 'index.html', 'style.css', 'app.js', 'recipes.js', 'scanner.js',
  'assets/napkin-maskable-512.png', 'cloud-scan.js', 'events.js', 'discovery.js', 'install.js', 'app.webmanifest',
  ...[180, 192, 512].map(size => 'assets/napkin-boy-' + size + '.png'),
  'substitutions.js', 'photos.js', 'dietary.js',
  'assets/sample.jpg', 'assets/scanner/tf.js', 'assets/scanner/mobilenet.js',
  'assets/scanner/model.json',
  ...[1, 2, 3, 4].map(i => 'assets/scanner/group1-shard' + i + 'of4.bin')
];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(files.map(path => new Request(new URL(path, self.registration.scope), {cache: 'reload'})));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (name.startsWith(prefix) && name !== cacheName) await caches.delete(name);
    }
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.registration.scope)) return;
  event.respondWith((async () => {
    const cache = await caches.open(cacheName);
    const hit = await cache.match(event.request, {ignoreSearch: true});
    return hit || fetch(event.request);
  })());
});
