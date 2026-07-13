self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("classjump-cache").then((cache) => {
      return cache.addAll([
        "./index.html",
        "./manifest.json",
        "./icon_base.svg",
        "./icon_360.png",
        "./icon_640.png"
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
