const prefix = 'fridge-to-fork:' + self.registration.scope + ':';
const cacheName = prefix + 'mobile-v1';
const files = [
  './', 'index.html', 'style.css', 'app.js', 'recipes.js', 'scanner.js',
  'events.js', 'install.js', 'app.webmanifest', 'assets/leaf.svg',
  ...[180, 192, 512].map(size => 'assets/icon-' + size + '.png'),
  ...Array.from({length: 6}, (_, i) => 'assets/meal-' + i + '.jpg'),
  'assets/sample.jpg', 'assets/scanner/tf.js', 'assets/scanner/mobilenet.js',
  'assets/scanner/model.json',
  ...[1, 2, 3, 4].map(i => 'assets/scanner/group1-shard' + i + 'of4.bin')
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(files)));
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
