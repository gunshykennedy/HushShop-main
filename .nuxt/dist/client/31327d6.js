(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{265:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("9a75ef46",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";n(265)},268:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.twitter{\n  color:#1da1f2\n}\n.enroll{\n  display:flex;\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  align-items:center;\n  justify-content:center;\n  border-radius:0.375rem\n}\n.enroll:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(129, 140, 248, var(--tw-bg-opacity))\n}\n.enroll{\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  text-transform:uppercase;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)\n}\n.enroll:focus{\n  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-offset-width:1px\n}\n.enroll{\n  transition-duration:200ms;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)\n}\n.pricing{\n  margin-left:0.5rem;\n  display:flex;\n  align-items:center;\n  font-weight:700\n}\n.nuxt-content h2{\n  padding-top:1rem;\n  padding-bottom:1rem;\n  font-size:1.5rem;\n  line-height:2rem\n}\n.nuxt-conent h{\n  font-size:1.25rem;\n  line-height:1.75rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},285:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(46),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("products",r.slug).where({published:!0}).fetch();case 3:return o=e.sent,e.abrupt("return",{product:o});case 5:case"end":return e.stop()}}),e)})))()}}),l=(n(267),n(32)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"bg-gray-50"},[n("section",{staticClass:"h-screen flex justify-center items-center bg-cover bg-center",style:{backgroundImage:"url("+t.product.image+")"}},[n("h1",{staticClass:"text-white text-center text-4xl w-3/4 sm:text-6xl font-light"},[t._v("\n      "+t._s(t.product.title)+"\n    ")])]),t._v(" "),n("section",{staticClass:"grid md:grid-cols-3 gap-4 md:w-3/4 mx-auto p-8",class:t.product.video?"md:grid-cols-3 gap-4":"md:grid-cols-2 gap-4"},[t.product.video?n("div",{staticClass:"w-full col-span-3 lg:col-span-1 h-96 relative"},[n("video",{staticClass:"absolute rounded-md w-full h-full object-cover",attrs:{playsinline:"",autoplay:"",muted:"",loop:"",id:"bgvid"},domProps:{muted:!0}},[n("source",{attrs:{src:t.product.video,type:"video/mp4"}})])]):t._e(),t._v(" "),t._l(t.product.gallery,(function(img){return n("img",{key:img.id,staticClass:"col-span-3 lg:col-span-1 h-96 w-full object-cover rounded-md",attrs:{src:img.src,alt:img.alt}})})),t._v(" "),n("div",{staticClass:"flex text-justify flex-col col-span-3 lg:col-span-2"},[n("h2",{staticClass:"text-3xl font-semibold py-4"},[t._v(t._s(t.product.description))]),t._v(" "),n("nuxt-content",{staticClass:"text-gray-800",attrs:{document:t.product}})],1)],2),t._v(" "),t.product.socialProof?n("section",{staticClass:"p-4 mx-auto w-full h-48 grid grid-cols-1 md:grid-cols-3 gap-4"},t._l(t.product.socialProof,(function(e){return n("a",{key:e.id,staticClass:"flex flex-col justify-evenly shadow rounded-md p-4 bg-white transform duration-150 ease-in-out hover:-translate-y-2",attrs:{href:e.link}},[n("svg",{staticClass:"twitter fill-current mx-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}})]),t._v(" "),n("p",{staticClass:"text-center w-full"},[t._v("\n        "+t._s(e.text)+"\n        - \n        "),n("span",{staticClass:"font-bold twitter"},[t._v(t._s(e.author))])])])})),0):t._e(),t._v(" "),n("div",{staticClass:"sticky bottom-4 flex justify-center mx-auto"},[n("a",{staticClass:"bg-blue-300 flex flex-col sm:flex-row items-center px-8 py-6 text-2xl text-justify justify-center shadow m-4 rounded-lg text-white bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-purple-600 to:indigo-500 transform duration-200 ease-out",attrs:{href:t.product.buy}},[n("h3",{},[t._v("Buy "+t._s(t.product.title)+" today for")]),t._v(" "),n("div",{staticClass:"pricing"},[n("span",{staticClass:"text-base justify-start"},[t._v("$")]),t._v(" "+t._s(t.product.price)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);