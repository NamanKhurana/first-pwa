self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app')
      .then(function(cache) {
        cache.addAll([
          '/',
          '/public/index.html',
          '/public/src/css/app.css',
          '/public/src/js/app.js'
        ]).then(()=>console.log("HELLO"))
      })
  );
  return self.clients.claim();
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        return res;
      })
  );
});