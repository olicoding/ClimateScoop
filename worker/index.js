/* eslint-disable no-restricted-globals */

import { clientsClaim } from "workbox-core";
import { cleanupOutdatedCaches } from "workbox-precaching";

const currentCacheVersion = "cache-v2";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(currentCacheVersion)
      .then((cache) => cache.add("/_offline"))
      .catch(() => {})
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      // Clean old caches
      caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          if (cacheName !== currentCacheVersion) {
            caches.delete(cacheName);
          }
        });
      }),

      // Enable navigation preload if supported
      self.navigationPreload && self.navigationPreload.enable(),
    ])
  );

  clientsClaim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // If a cache is present, return the cached response
      if (cachedResponse) {
        return cachedResponse;
      }

      // Else, try fetching from the network
      return fetch(event.request)
        .then((response) => {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          // Cache the fetched response
          const responseToCache = response.clone();
          caches.open(currentCacheVersion).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(
          () => caches.match("/_offline") // If both cache and network are unavailable, show the offline page
        );
    })
  );
});

cleanupOutdatedCaches();
