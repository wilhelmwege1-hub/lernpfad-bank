/* Offline-Cache. Bei jeder inhaltlichen Änderung VERSION erhöhen. */
var VERSION = "lernpfad-v15";
var FILES = ["./", "index.html", "styles.css", "app.js", "rechner.js", "data/lernfelder.js", "data/zusammenfassungen.js", "data/pruefung.js", "data/zusammenfassungen-teil2.js", "data/beispielpruefungen.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-180.png"];
self.addEventListener("install", function (e) { e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FILES); })); self.skipWaiting(); });
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); })); }));
  self.clients.claim();
});
/* Netz zuerst, damit neue Inhalte sofort ankommen; offline aus dem Cache. */
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then(function (r) {
    var copy = r.clone(); caches.open(VERSION).then(function (c) { c.put(e.request, copy); }); return r;
  }).catch(function () { return caches.match(e.request); }));
});
