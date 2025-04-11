(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_a2e7bcc9._.js", {

"[project]/src/components/icons/LKRIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const LKRIcon = ({ className = "", size = 24 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: `lucide lucide-currency-rupee ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 3h12"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/LKRIcon.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 8h12"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/LKRIcon.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m6 13 8.5 8"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/LKRIcon.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 13h3"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/LKRIcon.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 13c6.667 0 6.667-10 0-10"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/LKRIcon.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/LKRIcon.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_c = LKRIcon;
const __TURBOPACK__default__export__ = LKRIcon;
var _c;
__turbopack_context__.k.register(_c, "LKRIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/formatters.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Format a number as currency
 * @param value The number to format
 * @param locale The locale to use for formatting (default: 'en-US')
 * @param currency The currency code (default: 'LKR')
 * @returns Formatted currency string
 */ __turbopack_context__.s({
    "formatCurrency": (()=>formatCurrency),
    "formatDate": (()=>formatDate)
});
const formatCurrency = (value, locale = 'en-US', currency = 'LKR')=>{
    // Convert to number if it's a string
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;
    // Handle NaN values
    if (isNaN(numericValue)) {
        console.warn('Invalid value for currency formatting:', value);
        return 'Rs. 0.00';
    }
    // Use the Sri Lankan Rupee symbol (Rs) instead of LKR text
    return 'Rs. ' + new Intl.NumberFormat(locale, {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(numericValue);
};
const formatDate = (dateString, locale = 'en-US')=>{
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    }).format(date);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/DashView/advance-payment/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$LKRIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/LKRIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/formatters.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Payment type enum
var PaymentType = /*#__PURE__*/ function(PaymentType) {
    PaymentType["INVENTORY_ITEM"] = "inventory_item";
    PaymentType["CUSTOM_ORDER"] = "custom_order";
    return PaymentType;
}(PaymentType || {});
const AdvancePaymentPage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // State for form fields
    const [paymentType, setPaymentType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("inventory_item");
    const [customerName, setCustomerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [totalAmount, setTotalAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [advanceAmount, setAdvanceAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [balanceAmount, setBalanceAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Cash');
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // State for selected items
    const [selectedItemId, setSelectedItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedOrderId, setSelectedOrderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // State for data
    const [availableItems, setAvailableItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customOrders, setCustomOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedOrder, setSelectedOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filteredItems, setFilteredItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // State for UI
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showSuccessModal, setShowSuccessModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [paymentReference, setPaymentReference] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // State for existing payments
    const [existingPayments, setExistingPayments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingPayments, setLoadingPayments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fetch existing payments
    const fetchExistingPayments = async ()=>{
        setLoadingPayments(true);
        try {
            const response = await fetch('http://localhost:3002/advance-payments');
            if (response.ok) {
                const data = await response.json();
                console.log('Fetched existing payments:', data);
                setExistingPayments(data);
            } else {
                console.error('Failed to fetch existing payments');
            }
        } catch (err) {
            console.error('Error fetching existing payments:', err);
        } finally{
            setLoadingPayments(false);
        }
    };
    // Check for order ID in URL query parameters
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdvancePaymentPage.useEffect": ()=>{
            // Get the URL search params
            const searchParams = new URLSearchParams(window.location.search);
            const orderIdParam = searchParams.get('order');
            if (orderIdParam) {
                // If order ID is in URL, set payment type to custom order
                setPaymentType("custom_order");
                console.log(`Order ID found in URL: ${orderIdParam}`);
                // Wait for custom orders to load before selecting
                const checkAndSelectOrder = {
                    "AdvancePaymentPage.useEffect.checkAndSelectOrder": ()=>{
                        if (customOrders.length > 0) {
                            const orderId = parseInt(orderIdParam);
                            setSelectedOrderId(orderId);
                            // Scroll to the payment form
                            const paymentForm = document.getElementById('payment-form');
                            if (paymentForm) {
                                paymentForm.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }
                        } else {
                            // If custom orders not loaded yet, try again in 500ms
                            setTimeout(checkAndSelectOrder, 500);
                        }
                    }
                }["AdvancePaymentPage.useEffect.checkAndSelectOrder"];
                checkAndSelectOrder();
            }
        }
    }["AdvancePaymentPage.useEffect"], [
        customOrders
    ]);
    // Fetch all data on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdvancePaymentPage.useEffect": ()=>{
            fetchExistingPayments();
        }
    }["AdvancePaymentPage.useEffect"], []);
    // Fetch available items and custom orders on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdvancePaymentPage.useEffect": ()=>{
            const fetchData = {
                "AdvancePaymentPage.useEffect.fetchData": async ()=>{
                    setLoading(true);
                    try {
                        // Fetch available items
                        const itemsResponse = await fetch('http://localhost:3002/advance-payments/items/available');
                        if (itemsResponse.ok) {
                            const itemsData = await itemsResponse.json();
                            setAvailableItems(itemsData);
                            // Fetch categories from the database instead of extracting from items
                            try {
                                const categoriesResponse = await fetch('http://localhost:3002/categories');
                                if (categoriesResponse.ok) {
                                    const categoriesData = await categoriesResponse.json();
                                    // Extract category names from the response
                                    const categoryNames = categoriesData.map({
                                        "AdvancePaymentPage.useEffect.fetchData.categoryNames": (cat)=>cat.category_name
                                    }["AdvancePaymentPage.useEffect.fetchData.categoryNames"]);
                                    console.log('Fetched categories from database:', categoryNames);
                                    setCategories(categoryNames);
                                    if (categoryNames.length > 0) {
                                        setSelectedCategory(categoryNames[0]);
                                    }
                                } else {
                                    // Fallback to extracting from items if API fails
                                    console.warn('Failed to fetch categories, falling back to item categories');
                                    const uniqueCategories = Array.from(new Set(itemsData.map({
                                        "AdvancePaymentPage.useEffect.fetchData.uniqueCategories": (item)=>item.category
                                    }["AdvancePaymentPage.useEffect.fetchData.uniqueCategories"])));
                                    setCategories(uniqueCategories);
                                    if (uniqueCategories.length > 0) {
                                        setSelectedCategory(uniqueCategories[0]);
                                    }
                                }
                            } catch (catErr) {
                                console.error('Error fetching categories:', catErr);
                                // Fallback to extracting from items
                                const uniqueCategories = Array.from(new Set(itemsData.map({
                                    "AdvancePaymentPage.useEffect.fetchData.uniqueCategories": (item)=>item.category
                                }["AdvancePaymentPage.useEffect.fetchData.uniqueCategories"])));
                                setCategories(uniqueCategories);
                                if (uniqueCategories.length > 0) {
                                    setSelectedCategory(uniqueCategories[0]);
                                }
                            }
                        }
                        // Fetch custom orders
                        const ordersResponse = await fetch('http://localhost:3002/advance-payments/orders/custom');
                        if (ordersResponse.ok) {
                            const ordersData = await ordersResponse.json();
                            // The backend now filters out completed orders
                            setCustomOrders(ordersData);
                        }
                    } catch (err) {
                        console.error('Error fetching data:', err);
                        setError('Failed to load data. Please try again.');
                    } finally{
                        setLoading(false);
                    }
                }
            }["AdvancePaymentPage.useEffect.fetchData"];
            fetchData();
        }
    }["AdvancePaymentPage.useEffect"], []);
    // Filter items by selected category
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdvancePaymentPage.useEffect": ()=>{
            if (selectedCategory) {
                const filtered = availableItems.filter({
                    "AdvancePaymentPage.useEffect.filtered": (item)=>item.category === selectedCategory
                }["AdvancePaymentPage.useEffect.filtered"]);
                setFilteredItems(filtered);
            } else {
                setFilteredItems(availableItems);
            }
        }
    }["AdvancePaymentPage.useEffect"], [
        selectedCategory,
        availableItems
    ]);
    // Update selected item when item ID changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdvancePaymentPage.useEffect": ()=>{
            if (selectedItemId) {
                const item = availableItems.find({
                    "AdvancePaymentPage.useEffect.item": (item)=>item.item_id === selectedItemId
                }["AdvancePaymentPage.useEffect.item"]);
                setSelectedItem(item || null);
                if (item) {
                    // Calculate total amount based on item price and quantity
                    const total = item.selling_price * quantity;
                    setTotalAmount(total);
                }
            } else {
                setSelectedItem(null);
            }
        }
    }["AdvancePaymentPage.useEffect"], [
        selectedItemId,
        availableItems,
        quantity
    ]);
    // Update selected order when order ID changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdvancePaymentPage.useEffect": ()=>{
            if (selectedOrderId) {
                const order = customOrders.find({
                    "AdvancePaymentPage.useEffect.order": (order)=>order.order_id === selectedOrderId
                }["AdvancePaymentPage.useEffect.order"]);
                setSelectedOrder(order || null);
                if (order) {
                    // Set all available fields from the order
                    setCustomerName(order.customer_name);
                    // Set total amount from the estimated amount
                    if (order.estimated_amount) {
                        setTotalAmount(typeof order.estimated_amount === 'string' ? parseFloat(order.estimated_amount) : order.estimated_amount);
                    }
                    // If there's already an advance amount, calculate the remaining balance
                    if (order.advance_amount && order.advance_amount > 0) {
                        const advanceAmount = typeof order.advance_amount === 'string' ? parseFloat(order.advance_amount) : order.advance_amount;
                        console.log(`This order already has an advance payment of ${advanceAmount}`);
                        // Calculate the remaining balance (total - advance)
                        const totalAmt = typeof order.estimated_amount === 'string' ? parseFloat(order.estimated_amount) : order.estimated_amount || 0;
                        const remainingBalance = totalAmt - advanceAmount;
                        console.log(`Total amount: ${totalAmt}, Advance: ${advanceAmount}, Remaining: ${remainingBalance}`);
                        // Update the balance amount field
                        setBalanceAmount(remainingBalance);
                    }
                    // Fetch additional order details if needed
                    fetchOrderDetails(selectedOrderId);
                }
            } else {
                setSelectedOrder(null);
            }
        }
    }["AdvancePaymentPage.useEffect"], [
        selectedOrderId,
        customOrders
    ]);
    // Function to fetch more details about a custom order
    const fetchOrderDetails = async (orderId)=>{
        try {
            const response = await fetch(`http://localhost:3002/custom-orders/${orderId}`);
            if (response.ok) {
                const orderDetails = await response.json();
                console.log('Fetched order details:', orderDetails);
                // Update form with additional details
                if (orderDetails.customer_phone) {
                    // We don't have a phone field in the advance payment form,
                    // but we can log it for reference
                    console.log(`Customer phone: ${orderDetails.customer_phone}`);
                }
                if (orderDetails.customer_email) {
                    // We don't have an email field in the advance payment form,
                    // but we can log it for reference
                    console.log(`Customer email: ${orderDetails.customer_email}`);
                }
                // Add any notes about the order
                let orderNotes = '';
                if (orderDetails.description) {
                    orderNotes += `Description: ${orderDetails.description}\n`;
                }
                if (orderDetails.special_requirements) {
                    orderNotes += `Special Requirements: ${orderDetails.special_requirements}\n`;
                }
                if (orderNotes) {
                    setNotes(orderNotes);
                }
            }
        } catch (err) {
            console.error('Error fetching order details:', err);
        }
    };
    // Calculate balance amount when total or advance amount changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdvancePaymentPage.useEffect": ()=>{
            // If this is a custom order with existing advance payment, account for it
            if (selectedOrder && selectedOrder.advance_amount && selectedOrder.advance_amount > 0) {
                const existingAdvance = typeof selectedOrder.advance_amount === 'string' ? parseFloat(selectedOrder.advance_amount) : selectedOrder.advance_amount;
                // The balance is: total - (existing advance + new advance)
                setBalanceAmount(totalAmount - (existingAdvance + advanceAmount));
                console.log(`Balance calculation: ${totalAmount} - (${existingAdvance} + ${advanceAmount}) = ${totalAmount - (existingAdvance + advanceAmount)}`);
            } else {
                // Normal calculation for new payments
                setBalanceAmount(totalAmount - advanceAmount);
                console.log(`Standard balance calculation: ${totalAmount} - ${advanceAmount} = ${totalAmount - advanceAmount}`);
            }
        }
    }["AdvancePaymentPage.useEffect"], [
        totalAmount,
        advanceAmount,
        selectedOrder
    ]);
    // Handle payment type change
    const handlePaymentTypeChange = (type)=>{
        setPaymentType(type);
        // Reset selections
        setSelectedItemId(null);
        setSelectedOrderId(null);
        setCustomerName('');
        setTotalAmount(0);
        setAdvanceAmount(0);
        setQuantity(1);
    };
    // Handle category change
    const handleCategoryChange = (e)=>{
        setSelectedCategory(e.target.value);
        setSelectedItemId(null);
    };
    // Handle item selection
    const handleItemChange = (e)=>{
        const itemId = parseInt(e.target.value);
        setSelectedItemId(itemId);
    };
    // Handle order selection
    const handleOrderChange = (e)=>{
        const orderId = parseInt(e.target.value);
        setSelectedOrderId(orderId);
    };
    // Handle quantity change
    const handleQuantityChange = (e)=>{
        const qty = parseInt(e.target.value);
        if (qty > 0) {
            setQuantity(qty);
            // Update total amount if item is selected
            if (selectedItem) {
                setTotalAmount(selectedItem.selling_price * qty);
            }
        }
    };
    // Handle form submission
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Validate form
        if (!customerName.trim()) {
            setError('Please enter customer name');
            return;
        }
        if (totalAmount <= 0) {
            setError('Total amount must be greater than zero');
            return;
        }
        if (advanceAmount <= 0) {
            setError('Advance amount must be greater than zero');
            return;
        }
        if (advanceAmount > totalAmount) {
            setError('Advance amount cannot be greater than total amount');
            return;
        }
        if (paymentType === "inventory_item" && !selectedItemId) {
            setError('Please select an item');
            return;
        }
        if (paymentType === "custom_order" && !selectedOrderId) {
            setError('Please select a custom order');
            return;
        }
        // Get user info from localStorage
        const userId = localStorage.getItem('userId');
        const branchId = localStorage.getItem('branchId');
        // Prepare data for submission
        const paymentData = {
            customer_name: customerName,
            total_amount: totalAmount,
            advance_amount: advanceAmount,
            payment_method: paymentMethod,
            notes,
            created_by: userId ? parseInt(userId) : null,
            branch_id: branchId ? parseInt(branchId) : null,
            is_custom_order: paymentType === "custom_order",
            order_id: paymentType === "custom_order" ? parseInt(selectedOrderId) : null,
            item_id: paymentType === "inventory_item" ? selectedItemId : null,
            item_quantity: paymentType === "inventory_item" ? quantity : null
        };
        // If this is a custom order with existing advance payment, include it
        if (paymentType === "custom_order" && selectedOrder?.advance_amount) {
            const existingAdvance = typeof selectedOrder.advance_amount === 'string' ? parseFloat(selectedOrder.advance_amount) : selectedOrder.advance_amount;
            paymentData.existing_advance_amount = existingAdvance;
            console.log(`Including existing advance amount: ${existingAdvance}`);
            // Also include the calculated balance amount
            paymentData.balance_amount = totalAmount - (existingAdvance + advanceAmount);
        } else {
            // Standard balance calculation
            paymentData.balance_amount = totalAmount - advanceAmount;
        }
        // Log the data being sent
        console.log('Sending payment data:', paymentData);
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:3002/advance-payments/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(paymentData)
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to create advance payment');
            }
            const result = await response.json();
            // Show success message
            setSuccess('Advance payment created successfully!');
            setPaymentReference(result.payment_reference);
            setShowSuccessModal(true);
            // Refresh the payments list
            fetchExistingPayments();
            // Reset form after successful submission
            if (paymentType === "inventory_item") {
                setSelectedItemId(null);
                setQuantity(1);
            } else {
                setSelectedOrderId(null);
            }
            setCustomerName('');
            setTotalAmount(0);
            setAdvanceAmount(0);
            setNotes('');
        } catch (err) {
            console.error('Error creating advance payment:', err);
            setError(err instanceof Error ? err.message : 'An error occurred while creating the advance payment');
        } finally{
            setLoading(false);
        }
    };
    // Handle cancel button
    const handleCancel = ()=>{
        router.back();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-6xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold text-gray-800 mb-6",
                children: "Advance Payment"
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                lineNumber: 496,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10 bg-white p-6 rounded-lg shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: "Existing Advance Payments"
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 501,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: fetchExistingPayments,
                                className: "px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md flex items-center text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-4 w-4 mr-1",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                            lineNumber: 507,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 506,
                                        columnNumber: 13
                                    }, this),
                                    "Refresh"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 502,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 500,
                        columnNumber: 9
                    }, this),
                    loadingPayments ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center h-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                            lineNumber: 515,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 514,
                        columnNumber: 11
                    }, this) : existingPayments.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "min-w-full bg-white border border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-4 border-b text-left",
                                                children: "ID"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 522,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-4 border-b text-left",
                                                children: "Reference"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 523,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-4 border-b text-left",
                                                children: "Customer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 524,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-4 border-b text-left",
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 525,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-4 border-b text-right",
                                                children: "Total Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 526,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-4 border-b text-right",
                                                children: "Advance Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 527,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-4 border-b text-right",
                                                children: "Balance"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 528,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 px-4 border-b text-center",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 529,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 521,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                    lineNumber: 520,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: existingPayments.map((payment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-4 border-b",
                                                    children: payment.payment_id
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-4 border-b",
                                                    children: payment.payment_reference
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-4 border-b",
                                                    children: payment.customer_name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-4 border-b",
                                                    children: new Date(payment.payment_date).toLocaleDateString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-4 border-b text-right",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(payment.total_amount)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-4 border-b text-right",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(payment.advance_amount)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-4 border-b text-right",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(payment.balance_amount)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-4 border-b text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-block px-2 py-1 text-xs rounded-full ${payment.payment_status === 'Completed' ? 'bg-green-100 text-green-800' : payment.payment_status === 'Partially Paid' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`,
                                                        children: payment.payment_status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, payment.payment_id, true, {
                                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                            lineNumber: 534,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                    lineNumber: 532,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                            lineNumber: 519,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 518,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-4 text-gray-500",
                        children: "No advance payments found"
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 561,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                lineNumber: 499,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block sm:inline",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 568,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute top-0 bottom-0 right-0 px-4 py-3",
                        onClick: ()=>setError(null),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                            lineNumber: 573,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 569,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                lineNumber: 567,
                columnNumber: 9
            }, this),
            success && !showSuccessModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block sm:inline",
                        children: success
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 581,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute top-0 bottom-0 right-0 px-4 py-3",
                        onClick: ()=>setSuccess(null),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                            lineNumber: 586,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 582,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                lineNumber: 580,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg shadow-md mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold mb-4",
                        children: "Payment Type"
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 593,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `flex items-center px-4 py-2 rounded-md ${paymentType === "inventory_item" ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                                onClick: ()=>handlePaymentTypeChange("inventory_item"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                        className: "mr-2",
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 604,
                                        columnNumber: 13
                                    }, this),
                                    "Inventory Item"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 595,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `flex items-center px-4 py-2 rounded-md ${paymentType === "custom_order" ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                                onClick: ()=>handlePaymentTypeChange("custom_order"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                        className: "mr-2",
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 616,
                                        columnNumber: 13
                                    }, this),
                                    "Custom Order"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 607,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 594,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                lineNumber: 592,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                id: "payment-form",
                onSubmit: handleSubmit,
                className: "bg-white p-6 rounded-lg shadow-md",
                children: [
                    paymentType === "inventory_item" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "category",
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 627,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            id: "category",
                                            className: "block w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500",
                                            value: selectedCategory,
                                            onChange: handleCategoryChange,
                                            children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: category,
                                                    children: category
                                                }, category, false, {
                                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                    lineNumber: 638,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                            lineNumber: 631,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 630,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 626,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "item",
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Item"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 647,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            id: "item",
                                            className: "block w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500",
                                            value: selectedItemId || '',
                                            onChange: handleItemChange,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select an item"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 19
                                                }, this),
                                                filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: item.item_id,
                                                        children: [
                                                            item.product_title,
                                                            " - ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.selling_price),
                                                            " (",
                                                            item.in_stock,
                                                            " in stock)"
                                                        ]
                                                    }, item.item_id, true, {
                                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                        lineNumber: 659,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                            lineNumber: 651,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 650,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 646,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "quantity",
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Quantity"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 668,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        id: "quantity",
                                        min: "1",
                                        className: "block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",
                                        value: quantity,
                                        onChange: handleQuantityChange,
                                        disabled: !selectedItem,
                                        max: selectedItem?.in_stock || 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 671,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 667,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 625,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "order",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: [
                                    "Custom Order ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: "(Only showing orders that need payment)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 686,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 685,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "order",
                                    className: "block w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500",
                                    value: selectedOrderId || '',
                                    onChange: handleOrderChange,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select a custom order"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                            lineNumber: 695,
                                            columnNumber: 17
                                        }, this),
                                        customOrders.length > 0 ? customOrders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: order.order_id,
                                                children: [
                                                    order.order_reference,
                                                    " - ",
                                                    order.customer_name,
                                                    " - ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(order.estimated_amount || order.total_amount),
                                                    order.advance_amount && order.advance_amount > 0 ? ` (Advance: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(order.advance_amount)})` : ''
                                                ]
                                            }, order.order_id, true, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 698,
                                                columnNumber: 21
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            disabled: true,
                                            children: "No orders requiring payment found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                            lineNumber: 704,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                    lineNumber: 689,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 688,
                                columnNumber: 13
                            }, this),
                            selectedOrder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 p-2 bg-blue-50 text-blue-800 rounded-md text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Order Status:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 711,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    selectedOrder.payment_status || 'Not Paid',
                                    selectedOrder.advance_amount && selectedOrder.advance_amount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 714,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Current advance payment:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 715,
                                                columnNumber: 21
                                            }, this),
                                            " ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(selectedOrder.advance_amount || 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 716,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Remaining balance:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 717,
                                                columnNumber: 21
                                            }, this),
                                            " ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])((selectedOrder.estimated_amount || 0) - (selectedOrder.advance_amount || 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 718,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-700",
                                                children: "Any amount entered below will be an additional payment."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 719,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 723,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Total amount:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 724,
                                                columnNumber: 21
                                            }, this),
                                            " ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(selectedOrder.estimated_amount || 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 725,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-700",
                                                children: "No payments have been made yet."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 726,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 710,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 684,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "customerName",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Customer Name"
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 736,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "h-5 w-5 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                            lineNumber: 741,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 740,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "customerName",
                                        className: "block w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500",
                                        placeholder: "Enter customer name",
                                        value: customerName,
                                        onChange: (e)=>setCustomerName(e.target.value),
                                        readOnly: paymentType === "custom_order" && !!selectedOrder
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 743,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 739,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 735,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "totalAmount",
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Total Amount"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 758,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$LKRIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "h-5 w-5 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                    lineNumber: 763,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 762,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                id: "totalAmount",
                                                className: "block w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500",
                                                placeholder: "0.00",
                                                value: totalAmount || '',
                                                onChange: (e)=>setTotalAmount(parseFloat(e.target.value) || 0),
                                                readOnly: paymentType === "inventory_item" && !!selectedItem || paymentType === "custom_order" && !!selectedOrder,
                                                min: "0",
                                                step: "0.01"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 765,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 761,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 757,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "advanceAmount",
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Advance Amount"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 783,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$LKRIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "h-5 w-5 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                    lineNumber: 788,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 787,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                id: "advanceAmount",
                                                className: "block w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500",
                                                placeholder: "0.00",
                                                value: advanceAmount || '',
                                                onChange: (e)=>setAdvanceAmount(parseFloat(e.target.value) || 0),
                                                min: "0",
                                                max: totalAmount,
                                                step: "0.01"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 790,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 786,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 782,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "balanceAmount",
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Balance Amount"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 805,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$LKRIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "h-5 w-5 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                    lineNumber: 810,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 809,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                id: "balanceAmount",
                                                className: "block w-full pl-10 p-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500",
                                                value: balanceAmount || '',
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 812,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 808,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 804,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "paymentMethod",
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Payment Method"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 823,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                    className: "h-5 w-5 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                    lineNumber: 828,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 827,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "paymentMethod",
                                                className: "block w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500",
                                                value: paymentMethod,
                                                onChange: (e)=>setPaymentMethod(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Cash",
                                                        children: "Cash"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                        lineNumber: 836,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Credit Card",
                                                        children: "Credit Card"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                        lineNumber: 837,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Debit Card",
                                                        children: "Debit Card"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                        lineNumber: 838,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Bank Transfer",
                                                        children: "Bank Transfer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                        lineNumber: 839,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Cheque",
                                                        children: "Cheque"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                        lineNumber: 840,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 830,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 826,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 822,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 756,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "notes",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Notes (Optional)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 848,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "h-5 w-5 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                            lineNumber: 853,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 852,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "notes",
                                        className: "block w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500",
                                        placeholder: "Add any additional notes here",
                                        value: notes,
                                        onChange: (e)=>setNotes(e.target.value),
                                        rows: 3
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 855,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 851,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 847,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleCancel,
                                className: "px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 868,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",
                                disabled: loading,
                                children: loading ? 'Processing...' : 'Confirm Payment'
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 875,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 867,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                lineNumber: 622,
                columnNumber: 7
            }, this),
            showSuccessModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-8 rounded-lg shadow-lg max-w-md w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center mb-4 text-green-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                size: 48
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 890,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                            lineNumber: 889,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-center mb-4",
                            children: "Payment Successful!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                            lineNumber: 892,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center mb-2",
                            children: "Your advance payment has been processed successfully."
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                            lineNumber: 893,
                            columnNumber: 13
                        }, this),
                        paymentReference && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center font-semibold mb-6",
                            children: [
                                "Reference: ",
                                paymentReference
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                            lineNumber: 895,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowSuccessModal(false),
                                    className: "px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                    lineNumber: 898,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        // Implement print functionality here
                                        window.print();
                                    },
                                    className: "px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300",
                                    children: "Print Receipt"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                    lineNumber: 904,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                            lineNumber: 897,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                    lineNumber: 888,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                lineNumber: 887,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
        lineNumber: 495,
        columnNumber: 5
    }, this);
};
_s(AdvancePaymentPage, "BqFy9dpUTZMwK6bdMPMetY5KCBA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdvancePaymentPage;
const __TURBOPACK__default__export__ = AdvancePaymentPage;
var _c;
__turbopack_context__.k.register(_c, "AdvancePaymentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_a2e7bcc9._.js.map