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
"deploygit": "f7fc869407bb5e2ffdbbc345dd585d3e",
"main.dart.js": "6234644b47ef0c9838a8840df2349f7b",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
".git/logs/refs/heads/master": "f63fa07b37aacaecb5678e1f55b40b01",
".git/logs/refs/remotes/origin/master": "4783a2e5155531535758254826808caa",
".git/logs/HEAD": "f63fa07b37aacaecb5678e1f55b40b01",
".git/index": "616f16a393ff083f3dae849469934c9f",
".git/config": "5b603c2c0801a9ded3b79159fc38b404",
".git/objects/50/c95a72ddde705441f351d355043738a8a815b9": "e7405a33f6aa8ef152e1fdb33b381e36",
".git/objects/50/147ccf60e7aa3571758e75c3ac93a64c55c2f7": "74ebbfc3278a243006998e4dcb3e500c",
".git/objects/da/680212b292de5577f15bd54a04d3f2ee1ad59c": "3b5210e0f46cf0238efd269c1315279f",
".git/objects/d6/0c4d267ba3fd6570b6fc43422d8e1934d959b6": "aa69aa072bd4c7c97d23ec81b6b1fa00",
".git/objects/4c/395276076a93b80caf00f70f95af50ca6f850b": "9ee93444ddc304aea701e3a29e1974e5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a9/6f7d93f50624c1fcb797781808d6c6101b4f61": "96385b75a6a6ffee0b436faffbc492b3",
".git/objects/e2/4d89b3ebadb864b312c75c9dbede9887e144e3": "1338fe3b97e2c0a4cf640318ca49f446",
".git/objects/f8/d756d28ef9f904a3676a21ad77ab5289d0e272": "81368515e27bf15d9865be079a1f50a8",
".git/objects/db/72706c3d123936333a847408d8bd24bca34f5e": "8a33359443be24b9dbc41a0a6d6cd67f",
".git/objects/7c/c3f3821ff8b77235ad04ea9025dbc5dda4d202": "6e9af7c9d5c79d4b514720b95454cd8c",
".git/objects/4e/b84631c1dcf71c9692a04ed720204193206300": "d2a8f72784566599ce782e7d052cdbfe",
".git/objects/38/490d6564ad07591f3e092c8a8193efbdbd27fb": "2c1749707b6a696dbcf7966e1957aeec",
".git/objects/c3/0f9fa2f2780724afca50bfe192c5a08b2c08ba": "3c1f2308ef9365ad7b04f18c6c2b8826",
".git/objects/bf/e1851233f40da13d012b5d3a77424da08e4408": "4399be408288e73f9fd85a287a0af391",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/5a/08eb25eab0a4329aa71c411acdf71df502f5e7": "ce67b6218b1dd2968262a83dc429f32c",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/a3/699c770a952051fafe2c846127c92d970d081d": "907f8fedce84c03ca59a54cdac4ecfaa",
".git/objects/a8/9dfa470747acb83c228e12afdf4949f8b4bb58": "3c7c93f74e1d933633c391efd8ab4edf",
".git/objects/b9/ac300ab05f93df734199bf4cf2b24d6417a053": "988762441e964b9628ee66a63bd659f9",
".git/objects/4a/6da214c8b02615d674fa636043a981f12b7fe4": "72db830919de07eb0254407cbd3a89d4",
".git/objects/07/7eb39c1cbd92a81cd7ada223f061f04d131f7e": "fc20726e4793052cc5fbfad3fbbd0037",
".git/objects/40/e29646949462f4ca7f368ceff57ded5b6d1b12": "e9a6acccf4b73bda3d4f4bf81bb08a70",
".git/objects/c6/e8f15599f0d58595b376fe307ce1dc39e28708": "c91b0d3c3018edc07be8c9c0655ece1a",
".git/objects/ef/c867e0e98067c553873957a6cedf5c90cd0cef": "5c5338f1916161a5824246e963ffa5d1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b79dd344ba82e47ac3343b5bfd617a21d3add3": "408767f09c387bf7578b3a986195155b",
".git/objects/36/6e13afb447c72a33f23301d828449200b57c1a": "92bc5699de6e7b8412b243dead5df4eb",
".git/objects/00/46676bc699b7f0f0740ad837669124b93c6d27": "32a996a54233f737e36783f3a055318c",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/ab/36aa06d630124c684cd63cc226bfd09404472a": "3258df19d8136eb585849cb39a2fbac9",
".git/objects/a4/4316cab5f7405fe47ddfb8e89b993a8568241a": "c9fcc1aa2649ae52a71229d272bf688d",
".git/objects/d0/05b44e8ac9cee41b7eeeaaf82a3fcd0cc04433": "a6eee9e6c9bbe34d60800cca37a7064f",
".git/objects/d0/2c44bd3564d0736087ef63cc4020bf30e054e3": "8e6a93b2c772e1cfc10cd40e401e281e",
".git/objects/57/d5203453baeb7f23144502b7ade3f117d35eaa": "937f2693c2c59b3918e8ae21edcb853f",
".git/objects/86/9b2f112a963e65c6829e3c715088b3c12a1a34": "ee3845fe5a346f3e40ac5cd064ac4d3e",
".git/objects/92/169944072a8349741e987564f5749d349ecc4f": "b51798112774aa03b22815730e160da2",
".git/objects/d3/cca351b09bd0c5e8dca16a4699d5215510193f": "ef815eb3a5156999e49f5a4ea3fff108",
".git/objects/d1/15ea7ac7e4a9bb7d2837aac4a82d83d057dcbf": "40285a2f9136d90b523b1b614fd282ff",
".git/objects/80/4c823e7873d9004abac781be616d6801902d26": "bc9e26569c4a56768f98cfc6540b95be",
".git/objects/f1/a27bfbc87eaa950e9b809502a2be3423464210": "b532b7d9af75e696fa8c2b7dee0c5f1e",
".git/objects/69/75ed7ccc4c7ddef4bf65bcabc7cf9ac44a74af": "5b27dbcd681b31ffbcb78af48b337dea",
".git/objects/0b/796e6d8bb78997d801e85789cbc9c2f4ce2623": "cbddcb2a168adc99203d443b311f975a",
".git/objects/0b/a7d630af68bd483bf81790daacfcb386f376ee": "c988cd8bf4ced3264e56d094046b63c5",
".git/objects/0b/aae44b8356ecf25467559bc5a56bb811b8bc7a": "40e3c8cf5b49e52e93cac991db263de1",
".git/objects/79/664929fc447902b9ac02a5ddf4e55285e39d57": "758c1e5f33ea98503db1342e4a4f16b7",
".git/objects/ba/95bbdc744ba73ca4e2f8c48a027ed0ac3e6e36": "30c5cfcc170303eda91f75eb4b0c8e4e",
".git/objects/ba/316347dc1ef9b68437ff74ba9a2a151cdfd7fc": "98f750c9f94fa6113c9cb42f440bc207",
".git/objects/0c/2d09f4a2ec79b7c8798c4c86297b9f61691c7f": "f104bc8f6d538b1ebb36ac1fb972adfc",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/a5/cbf7baa400f4bd1a95e04bfa439121233ecf94": "62c09eefbd9f4430f027995e26440c5c",
".git/objects/39/a01715e9f7396389d84a0529f24d85455e4517": "4b05c01ffeaea2effb3cc837cf992348",
".git/objects/f2/ca589ad18d13f12ce64f1c463ce73ca95f9898": "91c2ee73801f11c9cd94ff7f8af69f07",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/e6d1aecb19a606988882c8c0725b0c19723abf": "0e3ec52915d3455a8a2fede3d313f8e6",
".git/objects/7a/efc3243eda0d5b1e90de1e540fe5d3e26e5615": "567f961e882d38c48813a97d4bd4b7d8",
".git/objects/83/821e9ffcfb7dd57bb9d2a5310746cf82f524cc": "5bf44d70a5fbb2dc23248db50cc8ed9e",
".git/objects/83/96091ee99010327ce038ec95587b1c0c2c00be": "06463206842b104564f51c3fa31b2c46",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/3f/8725facbcebff3e1988d562ebe523931740992": "e76ea987c852de787af1643367f63655",
".git/objects/e8/b162c68c632c00fd941470bd26f245d22f7471": "116c6c29a155a90451d47e20114d6503",
".git/objects/28/044c4e473a86c250bc59b8884f9ce6cacbfd87": "c66a29ec1d49ad8701a895443a90d43e",
".git/objects/3b/3632e4459350d7a5483d8f40eba0fc5d4bce28": "d9b9ce690b5bf2550bca4805af0ea7d5",
".git/objects/b7/e7a24b7385e7542858845a92580ef62b96a57d": "c667a9afffdbf7fa9ae5f23991e4a242",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/875943bb2393264ad0b4c57959426f981d1fc3": "452551c2b139921dea00f702b4bc0709",
".git/objects/71/df6c875f2bec651790bda391b7e3720622f9b7": "a7c11dc295b6b269147e6a77aff9b277",
".git/objects/71/18f2d06b96848b47b861c017b9353bef4acf32": "d015dbb796ab7011826f67d0a95e113b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/c0/507d795e925c3245bb31b060fcd8d39362d61f": "0db4089efeb9523a0912c6f3a3be7112",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/c9/2a8f7935baf31b5b3c7e945fbe5b1f3dfc358b": "474b8bd5a38881c2c922d1812b82f993",
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
".git/refs/heads/master": "fea86776098383fec8f075f11a1e9736",
".git/refs/remotes/origin/master": "fea86776098383fec8f075f11a1e9736",
".git/COMMIT_EDITMSG": "52e05f8d24a4847b788d132870560dc6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/AssetManifest.json": "97acd4569f1db5ec179a9340a5c25ba8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/jsons/Place.json": "c6ce76453c8ee95c357d6527580d0089",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "3dc5e94fd880e82d79cc75fdb3bc2b0b"
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
