(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_87e222ca._.js", {

"[project]/src/components/CountDown.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// WITH A LIBRARY
// "use client"
// import React from 'react'
// import Countdown from 'react-countdown'
// const endingDate = new Date("2023-07-25")
// const CountDown = () => {
//   return (
//     <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate}/>
//   )
// }
// export default CountDown
// WITHOUT A LIBRARY
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const CountDown = ()=>{
    _s();
    let difference = +new Date(`10/10/2023`) - +new Date();
    const [delay, setDelay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(difference);
    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor(difference / (1000 * 60 * 60) % 24);
    const m = Math.floor(difference / 1000 / 60 % 60);
    const s = Math.floor(difference / 1000 % 60);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountDown.useEffect": ()=>{
            const timer = setInterval({
                "CountDown.useEffect.timer": ()=>{
                    setDelay(delay - 1);
                }
            }["CountDown.useEffect.timer"], 1000);
            if (delay === 0) {
                clearInterval(timer);
            }
            return ({
                "CountDown.useEffect": ()=>{
                    clearInterval(timer);
                }
            })["CountDown.useEffect"];
        }
    }["CountDown.useEffect"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "font-bold text-5xl text-yellow-300",
        children: [
            d,
            ":",
            h,
            ":",
            m,
            ":",
            s
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CountDown.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
};
_s(CountDown, "tq1Tpw7G6hPiCCqMiL3n1Fv1elQ=");
_c = CountDown;
const __TURBOPACK__default__export__ = CountDown;
var _c;
__turbopack_context__.k.register(_c, "CountDown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Slider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const data = [
    {
        id: 1,
        title: "JOURNEY TO GOLDEN ELEGANCE",
        subtitle: "Where gold meets grace, every piece tells a story of elegance and heritage",
        image: "/slide1.png"
    },
    {
        id: 2,
        title: " EXPLORE BEAUTY IN GOLD",
        subtitle: "Discover the timeless beauty of gold—where every piece tells a story of luxury and adventure",
        image: "/slide2.png"
    },
    {
        id: 3,
        title: "FROM DREAMS TO GOLDEN BRILLIANCE",
        subtitle: "Gold, the language of luxury, speaking through the artistry of every design",
        image: "/slide3.jpg"
    }
];
const Slider = ()=>{
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Slider.useEffect": ()=>{
            const interval = setInterval({
                "Slider.useEffect.interval": ()=>{
                    setCurrentSlide({
                        "Slider.useEffect.interval": (prev)=>prev === data.length - 1 ? 0 : prev + 1
                    }["Slider.useEffect.interval"]);
                }
            }["Slider.useEffect.interval"], 4000);
            return ({
                "Slider.useEffect": ()=>clearInterval(interval)
            })["Slider.useEffect"];
        }
    }["Slider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]",
        children: data.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: slide.image,
                        alt: "slide image",
                        fill: true,
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw",
                        className: "object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Slider.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-70 left-1/2 transform -translate-x-1/2 text-white text-4xl font- italic text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: slide.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slider.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl mt-2",
                                children: slide.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slider.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Slider.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                ]
            }, slide.id, true, {
                fileName: "[project]/src/components/Slider.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Slider.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
_s(Slider, "/jm+XmndjAYlDCFyCnfFEXJOloU=");
_c = Slider;
const __TURBOPACK__default__export__ = Slider;
var _c;
__turbopack_context__.k.register(_c, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_87e222ca._.js.map