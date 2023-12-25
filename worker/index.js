import { skipWaiting, clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import {
  NetworkOnly,
  NetworkFirst,
  CacheFirst,
  StaleWhileRevalidate,
} from "workbox-strategies";
import { registerRoute, Route } from "workbox-routing";
import {
  precacheAndRoute,
  PrecacheFallbackPlugin,
  cleanupOutdatedCaches,
} from "workbox-precaching";

const currentCacheVersion = "v1";

const installEvent = () => {
  self.addEventListener("install", () => {
    console.log("service worker installed");
  });
};

installEvent();

const activateEvent = () => {
  self.addEventListener("activate", () => {
    console.log("service worker activated");
  });
};

activateEvent();

const cacheName = "test-cache-v1";

const cacheClone = async (e) => {
  const res = await fetch(e.request);
  const resClone = res.clone();

  const cache = await caches.open(cacheName);
  await cache.put(e.request, resClone);
  return res;
};

const fetchEvent = () => {
  self.addEventListener("fetch", (e) => {
    e.respondWith(
      cacheClone(e)
        .catch(() => caches.match(e.request))
        .then((res) => res)
    );
  });
};
fetchEvent();

// Offline Fallback for navigation requests
navigationPreload.enable();
const networkOnlyNavigationRoute = new Route(
  ({ request }) => request.mode === "navigate",
  new NetworkOnly({
    plugins: [
      new PrecacheFallbackPlugin({
        fallbackURL: "/_offline",
      }),
    ],
  })
);

registerRoute(networkOnlyNavigationRoute);

precacheAndRoute(
  self.__WB_MANIFEST.concat([{ url: "/_offline", revision: null }])
);

cleanupOutdatedCaches();
skipWaiting();
clientsClaim();

// Cache static assets
registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  new CacheFirst({ cacheName: `image-cache-${currentCacheVersion}` }),
  "GET"
);
registerRoute(
  /\.(?:css|js|woff|woff2|eot|ttf|otf)$/i,
  new StaleWhileRevalidate({
    cacheName: `static-resources-${currentCacheVersion}`,
  })
);
registerRoute(
  /\/api\/.*/,
  new NetworkFirst({
    cacheName: `api-cache-${currentCacheVersion}`,
    plugins: [
      new ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 24 * 60 * 60 }),
    ],
  })
);
