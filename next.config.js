module.exports = {
  poweredByHeader: false,
};

// Old config with PWA - removed.

// const withPWA = require("next-pwa")({
//   dest: "public",
//   disable: process.env.NODE_ENV === "development",
//   register: true,
//   skipWaiting: true,
//   runtimeCaching: [
//     {
//       urlPattern: /\.(?:css|js|woff|woff2|eot|ttf|otf)$/,
//       handler: "StaleWhileRevalidate",
//       options: {
//         cacheName: "static-resources",
//       },
//     },
//     {
//       urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
//       handler: "CacheFirst",
//       options: {
//         cacheName: "images",
//         expiration: {
//           maxEntries: 50,
//           maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//         },
//       },
//     },
//     {
//       urlPattern: /\/api\/.*/,
//       handler: "NetworkFirst",
//       options: {
//         cacheName: "api",
//         networkTimeoutSeconds: 10,
//         expiration: {
//           maxEntries: 50,
//           maxAgeSeconds: 1 * 24 * 60 * 60, // 1 Day
//         },
//       },
//     },
//   ],
// });

// module.exports = withPWA({
//   poweredByHeader: false,
// });
