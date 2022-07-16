'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8554a21726d9c2d959ff99481475ef0f",
"assets/assets/audio/click.wav": "2543720732be5479e849271deaeca69a",
"assets/assets/audio/invalid.wav": "56208dce643f75243fead5dc1d30672a",
"assets/assets/audio/success.wav": "2dae3ef2f408dda55765b90aaad86bac",
"assets/assets/fonts/consola.ttf": "5715d3f0bfcd28a4e008721a66118fe2",
"assets/assets/fonts/consolab.ttf": "961db2d1cdc0e620afd2b621183c0215",
"assets/assets/fonts/consolai.ttf": "ef071299b3712929d1d5346015602559",
"assets/assets/fonts/consolaz.ttf": "80d2d7331952a9dab0aa093bb0483299",
"assets/assets/images/background_home.jpg": "82b196bcd77e68e5a3a75a32cd2b4ad5",
"assets/assets/images/foods/Apple-150x150.png": "0b6f9b5d2c03d1e27c3a9c4fc9e93409",
"assets/assets/images/foods/biscuit-150x150.png": "2d098eb144c541f058ae0c24f619ded2",
"assets/assets/images/foods/Boiled-egg-150x150.png": "d5ac5b168a03c2d084468420475a637c",
"assets/assets/images/foods/Bread-150x150.png": "992dcc55e97f666b9ddaead0c5ffa90e",
"assets/assets/images/foods/Breadsticks-150x150.png": "c72507d2707e3d3ab4cef52bdaeee848",
"assets/assets/images/foods/breakfast-sandwich-150x150.png": "05cac80e2b5a2bf705939ddf1a2a06b9",
"assets/assets/images/foods/burger-150x150.png": "32265a9d36cc0e5f32fdc2e5aa9135b2",
"assets/assets/images/foods/Butter-150x150.png": "11b884c06b9cb8f113967a6c0c0a644f",
"assets/assets/images/foods/Candies-150x150.png": "c5520775529a9e5c1a8bdc85412fc66c",
"assets/assets/images/foods/Cheese-150x150.png": "6acc2ac0aa789e4739b1cf6a3ffd3add",
"assets/assets/images/foods/cheeseburger-150x150.png": "7e70f22712488a99e9496c420fa350d1",
"assets/assets/images/foods/chip-150x150.png": "eacb619232ab315c45eae984045a1dd0",
"assets/assets/images/foods/Chocolate-150x150.png": "ecb991e921a42dc168cde310db30e03e",
"assets/assets/images/foods/chocolate-milk-150x150.png": "42089894e032f31c72df75a9ea1c93ec",
"assets/assets/images/foods/coconut-milk-1-150x150.png": "d4a54d00a2e167b496780933d274c0bc",
"assets/assets/images/foods/coffee2-150x150.png": "20499a4178ddfe75949ad86d45a0ec1b",
"assets/assets/images/foods/Cookies-150x150.png": "052ec3e8afce66f1f492ea0b647d1a17",
"assets/assets/images/foods/croissant-150x150.png": "8911a6a3e4e936ba9c23d26cd81a636e",
"assets/assets/images/foods/donut-2-150x150.png": "03e0b62565b721fec55907fa330c8814",
"assets/assets/images/foods/fish-150x150.png": "d5b2919364b83a99e51b035926b60613",
"assets/assets/images/foods/French-bread-150x150.png": "36fc739f53f3d33ddfa6819a4dc8f211",
"assets/assets/images/foods/fried-chicken-150x150.png": "3ff8fa5d7c45761253d21b2854d7a2a7",
"assets/assets/images/foods/Fries-150x150.png": "66cb9c390c9ca4fadf95f66ecceea8a7",
"assets/assets/images/foods/fruit-juice-150x150.png": "afda25fab04805d3acb6114c751ad5bf",
"assets/assets/images/foods/Fruits-150x150.png": "7037dccb2ddd2cac7db58730a5b46632",
"assets/assets/images/foods/Grapes-150x150.png": "3a8adc78970eed63b339720413648457",
"assets/assets/images/foods/green-tea-150x150.png": "614d7c9014e43d3c2e33d9dca358b1dd",
"assets/assets/images/foods/Honey-150x150.png": "88618c52884835e95188377de06fbc4f",
"assets/assets/images/foods/hot-chocolate2-150x150.png": "35002133f3e02c24914406e2db852dc2",
"assets/assets/images/foods/Hot-Dog-150x150.png": "b23b9aa9a0d32c9be6c155f8d90fd301",
"assets/assets/images/foods/Ice-cream-150x150.png": "95da03f1ea05aa818096764d0459c396",
"assets/assets/images/foods/Jam-150x150.png": "1db895458c307809d51c24af9dbc295f",
"assets/assets/images/foods/kebab-150x150.png": "ac2a5116ccc53f9c2895b72bf2a054f5",
"assets/assets/images/foods/lemonade2-150x150.png": "a50ecb9d0057067b81c7f102b1b25106",
"assets/assets/images/foods/Meat-150x150.png": "93a9a26930a2d0848b600a812e1bb4ca",
"assets/assets/images/foods/Milk-150x150.png": "149866c224981255695dce18c13a7381",
"assets/assets/images/foods/milkshake1-150x150.png": "41cf643510b8c1bd86708421e78bfef7",
"assets/assets/images/foods/muffins-150x150.png": "849d86c8fc3ce74676adb979ec587682",
"assets/assets/images/foods/Noodle-150x150.webp": "f51d6b22812f0359894732e23ff05220",
"assets/assets/images/foods/omelet-150x150.png": "814096277005307948445a061d75a455",
"assets/assets/images/foods/orange-juice-1-150x150.png": "f9fe84e03c27f31a2a9c7fda5440ba11",
"assets/assets/images/foods/Pancakes-150x150.png": "ed3fae8f49f8fec83e5c530a65ee5f7b",
"assets/assets/images/foods/Pasta-150x150.webp": "184fccd2a950bd34eb836495b5ab77bc",
"assets/assets/images/foods/pizza-150x150.png": "c6558437dadecfa88592a81ce05d3134",
"assets/assets/images/foods/Rice-150x150.png": "157663b81fd8fd52831229a91ae702ec",
"assets/assets/images/foods/Roast-chicken-150x150.png": "114fe808d6d8d825c42e2cd466be14f0",
"assets/assets/images/foods/roll-150x150.png": "cf6fb439568c59f4f71808806c57c699",
"assets/assets/images/foods/Salad-150x150.png": "62596379dd6881de926c68866ef381aa",
"assets/assets/images/foods/sandwich-150x150.png": "017450368e8fe488790705dd69fa588c",
"assets/assets/images/foods/Sausages-150x150.png": "0ced3ef1541b652d0056d61dd64f3e27",
"assets/assets/images/foods/Seafood-150x150.png": "7404b923646feadbccf2adbe766e70de",
"assets/assets/images/foods/soft-drink-150x150.png": "ade6bb987c9448c7091a7c70b014969b",
"assets/assets/images/foods/Soup-150x150.png": "ca3a41e48737bc6476b3709a6c70027f",
"assets/assets/images/foods/steak-150x150.png": "909ca046a306cfcf5b432215b9242651",
"assets/assets/images/foods/taco-150x150.png": "c6028457376391cf864dc01de5416c31",
"assets/assets/images/foods/Tea-150x150.png": "d4c55aeae6ae8dd25afea4bd084fcf3c",
"assets/assets/images/foods/Vegetables-150x150.png": "b55a27cfa7af11661b16a51765c6b3c6",
"assets/assets/images/foods/water-1-150x150.png": "4f895274c3fef69fde42e6f1192ce6de",
"assets/assets/images/foods/Watermelon-150x150.png": "83643604b87d9dc2a5e19c48acc83708",
"assets/assets/images/foods/yogurt-150x150.png": "30dbd983b81c7d5e347929c3e2ae0bd3",
"assets/assets/images/launcher_icon.png": "29c7d19dc282143aad163d0cdc6e99c5",
"assets/assets/json/food_list.json": "ba111bbf9b057dbb8dd5dbeb023bacdf",
"assets/FontManifest.json": "dbd98d9d983cc902501f6939ed285356",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "4bafec5ccf130e553867307a10cccc7c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "3423f32839204e7eae8f4ff897c1dfde",
"icons/apple-touch-icon.png": "c211cfa4df339af5c155b7f08500ea37",
"icons/icon-192-maskable.png": "46030f0b12b6d5c4bcdb35e39fc200ac",
"icons/Icon-192.png": "8263e0018788e169e19930ed2f1cda6d",
"icons/icon-512-maskable.png": "f6d7e8434e1fe26950fc5b0e79e27006",
"icons/Icon-512.png": "6ce9e42b7732530496bfe32bf79da6bf",
"index.html": "2fe4e8a8edb8cee75dc69854e9afa22c",
"/": "2fe4e8a8edb8cee75dc69854e9afa22c",
"main.dart.js": "bd7f7790aedc3bf5acca07c45b2f7baa",
"manifest.json": "691ee47b71ff252e10594cde47e407a6",
"version.json": "eb0485c4a3bd669a75cf75defd0e2002"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
