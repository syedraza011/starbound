"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 5374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ users)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
;// CONCATENATED MODULE: external "Next/link"
const link_namespaceObject = require("Next/link");
var link_default = /*#__PURE__*/__webpack_require__.n(link_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/users.js


const Users = ()=>{
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h1", {
        children: "Users page"
    });
    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx((link_default()), {
        href: "/",
        children: "Home page"
    });
};
/* harmony default export */ const users = (Users);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5374));
module.exports = __webpack_exports__;

})();