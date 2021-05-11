/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "610f9865cc70982aef4825ead9ecfef6"
  },
  {
    "url": "accumulate/index.html",
    "revision": "bc6febb53fd15bda1a07fbf48601506b"
  },
  {
    "url": "algorithm/index.html",
    "revision": "528783079b693c8805f619a725b1d899"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/3.85049446.js",
    "revision": "0b4912d66732d55e3d5450889bef7d47"
  },
  {
    "url": "assets/js/4.bf984c04.js",
    "revision": "7303bb6c8e9bf3325795b9b9132a121d"
  },
  {
    "url": "assets/js/5.421abe45.js",
    "revision": "58bcabc909625e158bf1aecbf72abd8a"
  },
  {
    "url": "assets/js/6.1ebc0ca8.js",
    "revision": "13edb4286a68a885785d2a560a9bc3bf"
  },
  {
    "url": "assets/js/7.1180ccc3.js",
    "revision": "88bdf9974790814db583e9304a50f330"
  },
  {
    "url": "assets/js/app.fca2263f.js",
    "revision": "4680bc8b25058938ff702cc1ceea4fbf"
  },
  {
    "url": "guide.html",
    "revision": "d9dac40a474649e684b06a3eb0e78b27"
  },
  {
    "url": "images/photo.jpg",
    "revision": "b55f7340f961d402e1246ebe29f80e37"
  },
  {
    "url": "others/index.html",
    "revision": "c4bfec32b0d38367df7977f347f1637f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
