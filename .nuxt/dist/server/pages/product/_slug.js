exports.ids = [3];
exports.modules = {

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("9a75ef46", content, true, context)
};

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.twitter{\n  color:#1da1f2\n}\n.enroll{\n  display:flex;\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  align-items:center;\n  justify-content:center;\n  border-radius:0.375rem\n}\n.enroll:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(129, 140, 248, var(--tw-bg-opacity))\n}\n.enroll{\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  text-transform:uppercase;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)\n}\n.enroll:focus{\n  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-offset-width:1px\n}\n.enroll{\n  transition-duration:200ms;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)\n}\n.pricing{\n  margin-left:0.5rem;\n  display:flex;\n  align-items:center;\n  font-weight:700\n}\n.nuxt-content h2{\n  padding-top:1rem;\n  padding-bottom:1rem;\n  font-size:1.5rem;\n  line-height:2rem\n}\n.nuxt-conent h{\n  font-size:1.25rem;\n  line-height:1.75rem\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/_slug.vue?vue&type=template&id=146b59a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"bg-gray-50"},[_vm._ssrNode("<section class=\"h-screen flex justify-center items-center bg-cover bg-center\""+(_vm._ssrStyle(null,{ backgroundImage: 'url(' + _vm.product.image +')' }, null))+"><h1 class=\"text-white text-center text-4xl w-3/4 sm:text-6xl font-light\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.product.title)+"\n    ")+"</h1></section> "),_vm._ssrNode("<section"+(_vm._ssrClass("grid md:grid-cols-3 gap-4 md:w-3/4 mx-auto p-8",_vm.product.video ? 'md:grid-cols-3 gap-4' : 'md:grid-cols-2 gap-4'))+">","</section>",[_vm._ssrNode(((_vm.product.video)?("<div class=\"w-full col-span-3 lg:col-span-1 h-96 relative\"><video playsinline autoplay=\"autoplay\" muted=\"muted\" loop=\"loop\" id=\"bgvid\" class=\"absolute rounded-md w-full h-full object-cover\"><source"+(_vm._ssrAttr("src",_vm.product.video))+" type=\"video/mp4\"></video></div>"):"<!---->")+" "+(_vm._ssrList((_vm.product.gallery),function(img){return ("<img"+(_vm._ssrAttr("src",img.src))+(_vm._ssrAttr("alt",img.alt))+" class=\"col-span-3 lg:col-span-1 h-96 w-full object-cover rounded-md\">")}))+" "),_vm._ssrNode("<div class=\"flex text-justify flex-col col-span-3 lg:col-span-2\">","</div>",[_vm._ssrNode("<h2 class=\"text-3xl font-semibold py-4\">"+_vm._ssrEscape(_vm._s(_vm.product.description))+"</h2> "),_c('nuxt-content',{staticClass:"text-gray-800",attrs:{"document":_vm.product}})],2)],2),_vm._ssrNode(" "+((_vm.product.socialProof)?("<section class=\"p-4 mx-auto w-full h-48 grid grid-cols-1 md:grid-cols-3 gap-4\">"+(_vm._ssrList((_vm.product.socialProof),function(item){return ("<a"+(_vm._ssrAttr("href",item.link))+" class=\"flex flex-col justify-evenly shadow rounded-md p-4 bg-white transform duration-150 ease-in-out hover:-translate-y-2\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" class=\"twitter fill-current mx-auto\"><path d=\"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z\"></path></svg> <p class=\"text-center w-full\">"+_vm._ssrEscape("\n        "+_vm._s(item.text)+"\n        - \n        ")+"<span class=\"font-bold twitter\">"+_vm._ssrEscape(_vm._s(item.author))+"</span></p></a>")}))+"</section>"):"<!---->")+" <div class=\"sticky bottom-4 flex justify-center mx-auto\"><a"+(_vm._ssrAttr("href",_vm.product.buy))+" class=\"bg-blue-300 flex flex-col sm:flex-row items-center px-8 py-6 text-2xl text-justify justify-center shadow m-4 rounded-lg text-white bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-purple-600 to:indigo-500 transform duration-200 ease-out\"><h3>"+_vm._ssrEscape("Buy "+_vm._s(_vm.product.title)+" today for")+"</h3> <div class=\"pricing\"><span class=\"text-base justify-start\">$</span>"+_vm._ssrEscape(" "+_vm._s(_vm.product.price)+"\n      ")+"</div></a></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/product/_slug.vue?vue&type=template&id=146b59a2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const product = await $content('products', params.slug).where({
      published: true
    }).fetch();
    return {
      product
    };
  }

});
// CONCATENATED MODULE: ./pages/product/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/product/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5441a0f8"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map