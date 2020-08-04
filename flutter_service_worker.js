'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "dca4560ca5b24455f20cb2d684e139f4",
"/": "dca4560ca5b24455f20cb2d684e139f4",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "adeda826a02ec22b23ca5d52371c0642",
"deploygit": "e4cc63ad211c421c5c23da0553aa33e0",
"main.dart.js": "485c9e69993f661aafab82d8622bdcb9",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
".git/logs/refs/heads/master": "5b05c64bf25ee531a11611825007dcdd",
".git/logs/refs/remotes/origin/master": "3f8db1da0aa8bc53dc272316532f7289",
".git/logs/HEAD": "302a550a14020dbd13766bbd01bdbe0f",
".git/index": "d80255093fd967acb2a0dd0ca1b57ec7",
".git/config": "5b603c2c0801a9ded3b79159fc38b404",
".git/ORIG_HEAD": "c05ba644f37b57914b8c4ea762bd5ebe",
".git/objects/21/462e21d8fa40d9e1c73adec4c617b16be048b9": "dbaa7df4703a20841b722d3b0a3c67d4",
".git/objects/pack/pack-d6cc458ee03c6edfc04bcca17ee676dd385f4fd4.pack": "36b077c2f9e4ee0a09f7c0b633723a0c",
".git/objects/pack/pack-d6cc458ee03c6edfc04bcca17ee676dd385f4fd4.idx": "be04fd3252135544bf13ecfc4c8b73cc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/34/4a23cf48ff0be50206f27dc836b83244d44792": "d81b7af94b2eb98e9f98802e20c89d6a",
".git/objects/11/1066897c24c347270f082f557b7d4f3dfb5221": "73bc104da460c670d6b4b4fcbf6484e4",
".git/objects/61/e743b535fcc103291fecd7c554f4bb71bafaea": "449fab7afaff3ebf315f22b1be9a50f9",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/6c/e149aae808a6b72473ad33951f10d622080e64": "5d1feb595d92ae9de929fbbd1453612d",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/a3/f3c66c962df2428fd4f083d7f5c5fa0f4dabcb": "21a9e261bb9838ca59092d37bef913b1",
".git/objects/53/8f6343b59d5a0b35f17470a1eefa6aad50a53e": "8ba31faabf1152e78b65b9af01404cc4",
".git/objects/2e/d55d92ffaf1c010f3a6e44ed1528a6963b85cd": "48a6a45110157c8c9f6d117993dc2513",
".git/objects/2e/e6730314b3fb48e6a816de1c39d4f6a428f252": "7eac3c3dc836a66f2a3491738c898e46",
".git/objects/cf/4e5b3286f5e75d69e0e74ab8d9c7ce55f9ad0f": "ff6aa739a7c72991d30b4eb0407e0409",
".git/objects/99/b9999c75949f8640d6a16c3242af5828b02bb7": "06b02d9a77d724f652c623ec6740e37b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/33/e3dd29557494c8d395686ce02d9950f859668b": "5bcf81991427ff35dce5bf915f8cfb37",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/ed/b1584ef0c34d56104e5c2c78987e6089ddd2e0": "639d63654f9ea3b358d39c9810ae2a69",
".git/objects/ab/ec8f732939324f3e50c1168f1e2f2af4f4e227": "0e505cb548b787e18d24ccedfcddb8c8",
".git/objects/29/a317cd962dd2361aee4f595dc4321175d0fab6": "de70a036e84391ba095220d38b409930",
".git/objects/86/9b2f112a963e65c6829e3c715088b3c12a1a34": "ee3845fe5a346f3e40ac5cd064ac4d3e",
".git/objects/1e/ad0bfbb74ee0951573e544773bff90b626ef8a": "5f8a4eb126a05340fcbecae35c819b74",
".git/objects/d3/85b1b14eceaab6ce69e3f6fa757f763b12ba18": "6df065a022298508b2bbf9b563329815",
".git/objects/54/228e468441a29045180188269ccca08f8cc61d": "3a23ccc8dca8b4adc29ef03935f2ab1b",
".git/objects/8c/d2282b0ad373782d2bfa4e4be93f834b402b9a": "402f18563ccfefa02e82237badb526c7",
".git/objects/ba/01c41d845a44d8377c1022085284e88ed34ec7": "9fc830dacedbe4b890aeda585af362a6",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/a5/d250a377c60e2504ac3ca81bcfe50d6acaa799": "ca8a4c63642f7eb52f95118f5dfacbca",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/8f7f70ef83d1ddcacb3c318218e0c0fecb56cf": "14564d21f8df605385273e7fb0656624",
".git/objects/73/2a795e9719b9ca654c22ddea7ffeb937141f8c": "074c7f90fb970d5452032e7f22b862a2",
".git/objects/73/d7bb3ce518aca5bcbf9169c94399790c7d1ddb": "3b64fbc20573ada01c2621b1d248b8f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/FETCH_HEAD": "a41b87c2b7c77855428fe45aaa3f4c15",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/refs/heads/master": "9d415ee8a7391f74c53de480a9f34528",
".git/refs/remotes/origin/master": "9d415ee8a7391f74c53de480a9f34528",
".git/COMMIT_EDITMSG": "e47c3fe7033fddc67dcadde9a10539ff",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/AssetManifest.json": "97acd4569f1db5ec179a9340a5c25ba8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/jsons/Place.json": "b4fff5443f987512d023d4d7069599aa",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "cf476f9892f1ab414846221d0a0247aa"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
