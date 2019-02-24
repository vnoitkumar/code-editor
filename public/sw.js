importScripts('/js/cache-polyfill.js');
const version = '0.0.1';
const cacheName = `js-vnoit-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache
        .addAll([
          '/',
          '/favicon.ico',
          '/css/normalize.css',
          '/css/custom-codemirror.css',
          '/css/main.css',
          '/js/jshint.js',
          '/bower_components/codemirror/addon/lint/lint.css',
          '/bower_components/codemirror/addon/fold/foldgutter.css',
          '/images/play-button.svg',
          '/bower_components/codemirror/lib/codemirror.js',
          '/bower_components/codemirror/mode/javascript/javascript.js',
          '/bower_components/codemirror/addon/selection/active-line.js',
          '/bower_components/codemirror/addon/edit/matchbrackets.js',
          '/bower_components/codemirror/addon/lint/lint.js',
          '/bower_components/codemirror/addon/lint/javascript-lint.js',
          '/bower_components/codemirror/addon/fold/foldcode.js',
          '/bower_components/codemirror/addon/fold/foldgutter.js',
          '/bower_components/codemirror/addon/fold/brace-fold.js',
          '/js/script.js'
        ])
        .then(() => self.skipWaiting());
    })
  );
});
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .open(cacheName)
      .then(cache =>
        cache.match(event.request, {
          ignoreSearch: true
        })
      )
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
