if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let b={};const d=e=>c(e,a),n={module:{uri:a},exports:b,require:d};i[a]=Promise.all(s.map((e=>n[e]||d(e)))).then((e=>(r(...e),b)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/11/24/test/index.html",revision:"887754a6a1bbe5ca787d61bc8333bdb1"},{url:"404.html",revision:"32f36c1e22cb436a5ecf7b87b008093b"},{url:"about/index.html",revision:"11e62c1ed39aed54b0dc650ba827a783"},{url:"archives/2023/11/index.html",revision:"5158603ec7e0430a0b466effda78aaf6"},{url:"archives/2023/index.html",revision:"d9dc150b2030600d46d3c7b8e9bced03"},{url:"archives/index.html",revision:"1fca94d597b4743d7b2c4b8da1c3d8b2"},{url:"backup/BOT使用说明.html",revision:"5f24b2884c0ef35ebe585d3e775bc939"},{url:"backup/BOT使用说明/pic1.png",revision:"12db428ffb1aa1e2a1644e951e467635"},{url:"categories/index.html",revision:"af5526689483cc574102955bc969fb3b"},{url:"css/custom.css",revision:"c6505b4764906739db18aa8628245fcc"},{url:"css/index.css",revision:"f6782ef1844bde9ab0ca44d7afee246c"},{url:"css/progress_bar.css",revision:"75ee841f50186cf741ee00392ef3d9a5"},{url:"css/runtime.css",revision:"bc1cdcbd0dfb2152d5e4b4af6bb20185"},{url:"css/universe.css",revision:"634bbccd301760e7e1d016c7a5512783"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"17b37f109d6ee6aa240e13b67896171d"},{url:"js/light.js",revision:"957b028a255768a1078eeaf3e1f25706"},{url:"js/main.js",revision:"83ea4e2ab7b0c8206a90aa557cd491c3"},{url:"js/runtime.js",revision:"76f595aece15c75fb51949ba19ab80b2"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/universe.js",revision:"0263d98c82b1f3b5b152202c8caf331f"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"link/index.html",revision:"caac955af6c24dca6a0189c063e30f0f"},{url:"movies/index.html",revision:"c2efdf4df939171e721b1c90162cf32b"},{url:"music/index.html",revision:"b6324e3a156d6654b3c6a4879e650273"},{url:"tags/index.html",revision:"562fad0ba4cbc9899c8c849fbb2bd189"},{url:"tags/test/index.html",revision:"0242355e37b4e4a38f38411312e25f62"},{url:"壁纸/index.html",revision:"6e7f560b746b9146fc1753fbe01ab57e"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
