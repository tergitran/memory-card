(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],[,,,function(e,r,a){e.exports={AppBar:"AppBar_AppBar__2JJG5",Title:"AppBar_Title__3ElaJ",Score:"AppBar_Score__s3IU0"}},,function(e,r,a){e.exports={Card:"Card_Card__395SW",Image:"Card_Image__MteQ_"}},,,function(e,r,a){e.exports={Cards:"Cards_Cards__1qvHb"}},,function(e,r,a){e.exports=a(20)},,,,,function(e,r,a){},function(e,r,a){},,,,function(e,r,a){"use strict";a.r(r);var t=a(0),n=a.n(t),o=a(7),c=a.n(o),l=(a(15),a(16),a(9)),i=a(4),d=a(5),s=a.n(d),u=function(e){var r=e.infor,a=e.clicked,t=r.id,o=r.url,c=r.breed;return n.a.createElement("div",{className:s.a.Card,onClick:function(){return a(t)}},n.a.createElement("img",{className:s.a.Image,src:"/memory-card"+o}),n.a.createElement("h3",null,c))},m=a(8),p=a.n(m),g=a(3),b=a.n(g),h=function(e){var r=e.currentScore,a=e.bestScore;return n.a.createElement("div",{className:b.a.AppBar},n.a.createElement("h1",{className:b.a.Title},"Memory Card"),n.a.createElement("div",{className:b.a.Score},n.a.createElement("h3",null,"Score: ",r),n.a.createElement("h3",null,"Best Score: ",a)))};var f=function(e){var r=Object(t.useState)([{id:0,url:"/beagles.jpg",breed:"Beagle"},{id:1,url:"/Brittany.jpg",breed:"Brittany"},{id:2,url:"/Dachshund.jpg",breed:"Dachshund"},{id:3,url:"/french-bulldog.jpg",breed:"French Bulldog"},{id:4,url:"/German-Shepherd-dog.jpg",breed:"German Shepherd"},{id:5,url:"/golden-retriever.jpg",breed:"Golden Retriever"},{id:6,url:"/Pembroke-Welsh-Corgi.jpg",breed:"Pembroke Welsh Corgi"},{id:7,url:"/Pomeranian.jpg",breed:"Pomeranian"},{id:8,url:"/poodles.jpg",breed:"Poodles"},{id:9,url:"/Rottweiler.jpg",breed:"Rottweiler"},{id:10,url:"/Siberian-Husky.jpg",breed:"Siberian Husky"},{id:11,url:"/yorkshire-terrier.jpg",breed:"Yorkshire Terrier"}]),o=Object(i.a)(r,2),c=o[0],d=o[1],s=Object(t.useState)([]),m=Object(i.a)(s,2),g=m[0],b=m[1],f=Object(t.useState)(0),v=Object(i.a)(f,2),j=v[0],E=v[1];function _(e){if(function(e,r){return-1===e.indexOf(r)}(g,e)){var r=[].concat(Object(l.a)(g),[e]);b(r),S(c),console.log(r)}else console.log("Game Over!"),g.length>j&&E(g.length),S(c),b([])}function S(e){var r=a(17).shuffle(e);console.log(r),d(r)}return Object(t.useEffect)((function(){S(c)}),[]),n.a.createElement(t.Fragment,null,n.a.createElement(h,{bestScore:j,currentScore:g.length}),n.a.createElement("div",{className:p.a.Cards},c.map((function(e){return n.a.createElement(u,{clicked:_,key:e.id,infor:e})}))))};var v=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.d66f1ec3.chunk.js.map