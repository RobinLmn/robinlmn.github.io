(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],m=0,p=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,s=1;s<i.length;s++){var l=i[s];0!==r[l]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},r={achilles:0},a=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([2,"chunk-vendors"]),i()})({"0b4b":function(e,t,i){"use strict";i("f5f5")},1231:function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("header",[i("Menu")],1),i("Title"),i("videogames",[i("div",{staticClass:"name"},[e._v(" Achilles - A 3D Physics Engine ")])]),i("introtext",[i("div",{staticClass:"intro"},[e._v(" In September 2020, "),i("a",{attrs:{href:"https://www.gamedevmcgill.ca",target:"_blank"}},[e._v("GameDev McGill")]),e._v(" started one of its biggest project; creating a free and open source 3D game engine based on the Entity Component System (ECS) architecture. The Scarlet Engine was still missing one key feature: movement. "),i("br"),i("br"),e._v(" I created Achilles as a Physics Engine for Scarlet, and all of the demos shown below were made on this engine. It is however versatile enough to be applied to any other render engine. Since Scarlet is made in ECS, Achilles follows the same architecture. "),i("br"),i("br"),e._v(" You can find the source code of the engine "),i("a",{attrs:{href:"https://github.com/Scarlet-Engine-Team-GameDev-McGill/Scarlet-Engine",target:"_blank"}},[e._v("here")]),e._v(". ")])]),i("br"),i("br"),i("videogames",[i("div",{staticClass:"name"},[e._v(" Dynamics ")])]),i("introtext",[i("div",{staticClass:"intro"},[e._v(" The first step of the engine is to create physically based movement. This was done using the Euler Integration, aka high-school level physics with Newton's Second Law. The movement is based on the forces that you apply: you add a force to your objects to make them move accordingly. "),i("br"),i("br"),e._v(" This is enough to simulate basic solar systems such as below. "),i("br"),i("br"),i("center",[i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/VLL_EYNJ-B8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)]),i("br"),i("br"),i("videogames",[i("div",{staticClass:"name"},[e._v(" Collision Detection and Collision Response ")])]),i("introtext",[i("div",{staticClass:"intro"},[e._v(" Once you have dynamics, an important feature of a physics engine is collisions. I implemented discrete collision detection for basic shapes such as spheres, planes and AABBs. Once a collision is detected, collision response is used to reflect the velocitiies of the objects along the collision normal. A way of improving this type of collision is to make them continuous. This interpolates the collision in case it happens in between two frames. Custom shapes collisions can be implemented with raycasts. "),i("br"),i("br"),i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/4atD1sCYKqM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/K5Abe1FOYZs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]),i("br"),i("br"),i("videogames",[i("div",{staticClass:"name"},[e._v(" Softbodies ")])]),i("introtext",[i("div",{staticClass:"intro"},[e._v(" For now, we only saw the implementation of rigidbodies. Such bodies actually never exist in real life, even if they are a good approximation for video games. Actually, every object is deformable. Springs are the fundation of softbodies; they simulate the liasions between the molecules of an object. "),i("br"),i("br"),e._v(" Shown below is a simple spring linking a ball and an anchor (the anchor was not rendered, but you can see its transform on the video). "),i("br"),i("br"),i("center",[i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/TN5KFZ5XHmM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),i("br"),i("br"),e._v(" From springs, you can implement more complicated structures like a rope. Every node is linked to a spring. The top node is linked to an anchor. You can also smash the rope with a ball, which is pretty cool. "),i("br"),i("br"),i("center",[i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/ko-kMHMAwtY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),i("br"),i("br"),e._v(" A 2-dimensional spring structure will simulate a cloth. Below is an example of a flag, the left nodes are connected to anchors, and the nodes are connected vertically, horizontally and diagonally by springs to each other. "),i("br"),i("br"),i("center",[i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/OkWwOq8uyxg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),i("br"),i("br"),e._v(" Finally, a 3-dimensional spring will create a generalized softbody. This can be used to simulate jelly or slimes for example. This uses a microstate implementation of softbodies; simulating the link between every molecule. A way of optimizing the simulation would be to interpret the softbody at a macrostate level, simulating internal pressure abstractly with the ideal gas law. "),i("br"),i("br"),i("center",[i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/4SG7SscPM70",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)])],1)},a=[],o=i("fb62"),s=i("68ff"),l=i("43b3"),c={name:"App",components:{Title:l["a"],LazyYoutubeVideo:s["a"],Menu:o["a"]}},u=c,m=(i("cbce"),i("2877")),p=Object(m["a"])(u,r,a,!1,null,null,null),d=p.exports;new n["a"]({render:function(e){return e(d)}}).$mount("#app")},2:function(e,t,i){e.exports=i("1231")},"3ba0":function(e,t,i){"use strict";i("e3b3")},"43b3":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("name",[i("div",{staticClass:"name"},[e._v(" ROBIN LEMAN ")]),i("div",{staticClass:"allicons"},e._l(e.icons,(function(e,t){return i("div",{key:t,staticClass:"icons"},[i("a",{attrs:{href:e.link,target:"_blank"}},[i("i",{class:e.ic})])])})),0),i("hr")])},r=[],a={name:"Title",components:{},data:function(){return{icons:[{ic:"fas fa-envelope",link:"mailto:robin.leman@mail.mcgill.ca"},{ic:"fab fa-github",link:"https://github.com/RobinLmn"},{ic:"fab fa-linkedin",link:"https://www.linkedin.com/in/robin-leman-a5043816b/"},{ic:"fab fa-dev",link:"https://devpost.com/RobinLmn"}]}}},o=a,s=(i("0b4b"),i("2877")),l=Object(s["a"])(o,n,r,!1,null,null,null);t["a"]=l.exports},5275:function(e,t,i){},"8d50":function(e,t,i){},cbce:function(e,t,i){"use strict";i("5275")},e3b3:function(e,t,i){},efa6:function(e,t,i){"use strict";i("8d50")},f5f5:function(e,t,i){},fb62:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("menu",[e._m(0),i("Dropdown",{attrs:{title:"Projects",items:e.projects}}),e._m(1)],1)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"menu-item"},[i("a",{attrs:{href:"https://robinlmn.github.io",target:"_blank"}},[e._v("Home")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"menu-item"},[i("a",{attrs:{href:"https://robinlmn.github.io/pdf/robin-leman-resume.pdf",target:"_blank"}},[e._v("Resume")])])}],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"menu-item",on:{click:function(t){e.isOpen=!e.isOpen}}},[i("a",{attrs:{href:"#"}},[e._v(" "+e._s(e.title)+" "),i("i",{staticClass:"fas fa-caret-down"}),i("transition",{attrs:{name:"fade",appear:""}},[e.isOpen?i("div",{staticClass:"sub-menu"},e._l(e.items,(function(t,n){return i("div",{key:n,staticClass:"sub-menu-item"},[i("a",{attrs:{href:t.link}},[e._v(e._s(t.title))])])})),0):e._e()])],1)])},o=[],s={name:"dropdown",props:["title","items"],data:function(){return{isOpen:!1}}},l=s,c=(i("3ba0"),i("2877")),u=Object(c["a"])(l,a,o,!1,null,null,null),m=u.exports,p={name:"Menu",components:{Dropdown:m},data:function(){return{projects:[{title:"Achilles - Physics Engine",link:"achilles.html"},{title:"Video Games",link:"videogames.html"},{title:"Cybersecurity",link:"https://github.com/RobinLmn/md5-decryption-crackingchallenge"},{title:"Re<ycle",link:"https://github.com/RobinLmn/McHacks7_re-ycle"},{title:"Cryptocurrencies Calculator",link:"https://github.com/RobinLmn/catallaxy_challenge"}]}}},d=p,b=(i("efa6"),Object(c["a"])(d,n,r,!1,null,null,null));t["a"]=b.exports}});
//# sourceMappingURL=achilles.ba68f3d0.js.map