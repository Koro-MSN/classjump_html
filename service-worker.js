self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("classjump-cache").then((cache) => {
      return cache.addAll([
        "./index.html",
        "./manifest.json",
        "./icon_360.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
