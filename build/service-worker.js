"use strict";var precacheConfig=[["/gallery-by-react/index.html","2b38b24a862752aa57be4de0c07a57c7"],["/gallery-by-react/static/css/main.3dc7d8b5.css","2ea78e496bb05d544ac86707e1520a41"],["/gallery-by-react/static/js/main.ebd6619e.js","e7a807aa88172d576ebc85e56984d2c2"],["/gallery-by-react/static/media/1.22f5a6fb.jpg","22f5a6fbb74d2717c3423c7fd80a0b9f"],["/gallery-by-react/static/media/10.03d94e47.jpg","03d94e47e05f1470bcbb2e65e978b42e"],["/gallery-by-react/static/media/11.65600000.jpg","656000002168ed129f43ab266fb8f2f7"],["/gallery-by-react/static/media/12.0ef224a7.jpg","0ef224a7000c1d52e06acefd339cbab6"],["/gallery-by-react/static/media/13.c9deec21.jpg","c9deec21e8b765c99c0c08392e9ab2ef"],["/gallery-by-react/static/media/14.3fff2294.jpg","3fff2294c5b40c16966c4ca14e41afb4"],["/gallery-by-react/static/media/15.e7762d1f.jpg","e7762d1fbb1e7705b51182a3b7bbe2b5"],["/gallery-by-react/static/media/16.744930fe.jpg","744930fec74201d09d6d476a7a1700c1"],["/gallery-by-react/static/media/2.6fe9b12e.jpg","6fe9b12e7de80bddeea1c1cf6f34ae54"],["/gallery-by-react/static/media/3.71bec9df.jpg","71bec9df2709c66040c32a8f8cdfed5c"],["/gallery-by-react/static/media/4.6ff93004.jpg","6ff930048fb5cde8037b92306898aaed"],["/gallery-by-react/static/media/5.4f786900.jpg","4f78690024510901409a758e298de321"],["/gallery-by-react/static/media/6.ce9412ee.jpg","ce9412ee0ca74008a09bf5336bede94f"],["/gallery-by-react/static/media/7.474a487d.jpg","474a487de36082a83ca829b1ff6f9d1c"],["/gallery-by-react/static/media/8.ccec5eaf.jpg","ccec5eaf77f2d2535b230edf2907da73"],["/gallery-by-react/static/media/9.2722cdc9.jpg","2722cdc9bfc47922cca16bd093e5e81a"],["/gallery-by-react/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/gallery-by-react/static/media/turn-arrow.583ca888.eot","583ca888b447d46759b91bbc312c8337"],["/gallery-by-react/static/media/turn-arrow.860e608e.woff","860e608ed28f527db5860195ed618985"],["/gallery-by-react/static/media/turn-arrow.bad2eaf2.ttf","bad2eaf2d783e1bb2ef78f6b7ac05e88"],["/gallery-by-react/static/media/turn-arrow.e33d265f.svg","e33d265f5a523a9d3598b9f685319c26"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),c=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),a=urlsToCacheKeys.has(t));var c="/gallery-by-react/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});