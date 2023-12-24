import { skipWaiting, clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { NetworkFirst, StaleWhileRevalidate } from "workbox-strategies";
import {
  registerRoute,
  setDefaultHandler,
  setCatchHandler,
} from "workbox-routing";
import { precacheAndRoute } from "workbox-precaching";

skipWaiting();
clientsClaim();

const WB_MANIFEST = self.__WB_MANIFEST;
WB_MANIFEST.push({ url: "/fallback", revision: "1234567890" });
precacheAndRoute(WB_MANIFEST);

// Cache static assets
registerRoute(
  /\.(?:css|js|woff|woff2|eot|ttf|otf)$/i,
  new StaleWhileRevalidate({ cacheName: "static-resources" })
);
registerRoute(
  /\/api\/.*/,
  new NetworkFirst({
    cacheName: "api-cache",
    plugins: [
      new ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 24 * 60 * 60 }),
    ],
  })
);

// Offline Fallback
setDefaultHandler(new StaleWhileRevalidate());
setCatchHandler(({ event }) => {
  switch (event.request.destination) {
    case "document":
      return matchPrecache("/fallback");
    case "image":
      return matchPrecache("/static/images/fallback.png");
    default:
      return Response.error();
  }
});
