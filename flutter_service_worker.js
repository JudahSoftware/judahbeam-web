// Until 2026-10-20 the Judah Beam web app was served at the root of www.judahbeam.com,
// and its flutter_bootstrap.js registered /flutter_service_worker.js for the whole site.
// The web app now lives at /app/ (with its own worker there), and the root is the
// website. A browser that still holds the old root registration checks this file for
// updates; this version removes itself and reloads the open pages, so they get the
// website from the network. It caches nothing and serves nothing.
'use strict';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        await self.registration.unregister();
      } catch (e) {
        console.warn('Could not remove the old service worker:', e);
      }
      try {
        const pages = await self.clients.matchAll({ type: 'window' });
        pages.forEach((page) => {
          if (page.url && 'navigate' in page) page.navigate(page.url);
        });
      } catch (e) {
        console.warn('Could not reload the open pages:', e);
      }
    })()
  );
});
