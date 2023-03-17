(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/NavigationBar.js



function NavigationBar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "sticky bg-[#f0e7db] shadow-lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "max-w-6xl mx-auto px-4",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex space-x-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        href: "/",
                                        className: "companyLogo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "rocketlogo.png",
                                            alt: "Logo",
                                            className: "rocket"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "hidden md:flex items-center space-x-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            href: "/",
                                            className: "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300",
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            href: "/about",
                                            className: "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300",
                                            children: "About"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            href: "/flights",
                                            className: "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300",
                                            children: "Flights"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            href: "/destinations",
                                            className: "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300",
                                            children: "Destinations"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            href: "/training",
                                            className: "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300",
                                            children: "Training"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            href: "/store",
                                            className: "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300",
                                            children: "Store"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            href: "/contact",
                                            className: "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300",
                                            children: "Contact"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            href: "/checkout",
                                            className: "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300",
                                            children: "Checkout"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            href: "/user",
                                            className: "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300",
                                            children: "Users"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "hidden md:flex items-center space-x-3 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    href: "/login",
                                    className: "py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300",
                                    children: "Log In"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    href: "/register",
                                    className: "py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300",
                                    children: "Register"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "md:hidden flex items-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "outline-none mobile-menu-button",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: " w-6 h-6 text-gray-500 hover:text-green-500 ",
                                    "x-show": "!showMenu",
                                    fill: "none",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden mobile-menu",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                href: "/services",
                                className: "block text-sm px-2 py-4 hover:bg-green-500 transition duration-300",
                                children: "Servi\xe7es"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                href: "/about",
                                className: "block text-sm px-2 py-4 hover:bg-green-500 transition duration-300",
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                href: "/contacts",
                                className: "block text-sm px-2 py-4 hover:bg-green-500 transition duration-300",
                                children: "Contact"
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const components_NavigationBar = (NavigationBar);

;// CONCATENATED MODULE: ./components/Footer.js



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "footer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "top",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("footer", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about",
                                        About: true,
                                        Us: true,
                                        children: "About Us"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "both",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "left",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Social Media"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "list-unstyled",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://vanlifecustoms.com",
                                                        children: "Youtube"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.contravans.com/camper-van-repair-services",
                                                        children: "facebook"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.contravans.com/camper-van-repair-services",
                                                        children: "Twitter"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.travellers-autobarnrv.com/car-deals-and-campervan-specials",
                                                        children: "instagram"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "right",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "list-unstyled",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.google.com/maps/dir//Legacy+West,+5908+Headquarters+Dr,+Plano,+TX+75024/@33.0810585,-96.8613826,13z/data=!3m1!5s0x864c3cb9ef318e9d:0x41ee042d076131ae!4m8!4m7!1m0!1m5!1m1!1s0x864c3cb3b7db18f1:0xd61719f6b7b65199!2m2!1d-96.8263461!2d33.0810576",
                                                        children: "\uD83C\uDFE0 5908 Headquarters Dr, Plano, TX 75024"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://voice.google.com/u/0/about",
                                                        children: "\uD83D\uDCF1800-480-1111"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bottom",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "social-icons",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.linkedin.com",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-linkedin"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.facebook.com",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-facebook"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://twitter.com",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-twitter"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.instagram.com",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-instagram"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.youtube.com/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-youtube"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.pinterest.com/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-pinterest"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-md-12",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "\xa9Starbound 2023"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "All right reserved"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/pages/_app.js








// import supabase from "./supabase";
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "StarBound"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_NavigationBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,636,675], () => (__webpack_exec__(6563)));
module.exports = __webpack_exports__;

})();