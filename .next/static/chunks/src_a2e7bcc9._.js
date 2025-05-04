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
    // Check for URL query parameters
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdvancePaymentPage.useEffect": ()=>{
            // Get the URL search params
            const searchParams = new URLSearchParams(window.location.search);
            const typeParam = searchParams.get('type');
            // Handle custom order parameters
            if (typeParam === 'custom') {
                const orderIdParam = searchParams.get('order_id');
                if (orderIdParam) {
                    // If order ID is in URL, set payment type to custom order
                    setPaymentType("custom_order");
                    console.log(`Custom order ID found in URL: ${orderIdParam}`);
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
            } else if (typeParam === 'inventory') {
                setPaymentType("inventory_item");
                const itemIdParam = searchParams.get('item_id');
                const customerNameParam = searchParams.get('customer_name');
                const totalAmountParam = searchParams.get('total_amount');
                const balanceParam = searchParams.get('balance');
                const advanceParam = searchParams.get('advance');
                const paymentIdParam = searchParams.get('payment_id');
                const quantityParam = searchParams.get('quantity');
                console.log(`Inventory item parameters found in URL: item_id=${itemIdParam}, customer=${customerNameParam}`);
                // Set customer name if provided
                if (customerNameParam) {
                    setCustomerName(customerNameParam);
                }
                // Set total amount if provided
                if (totalAmountParam) {
                    setTotalAmount(parseFloat(totalAmountParam));
                }
                // Set quantity if provided
                if (quantityParam) {
                    const qty = parseInt(quantityParam);
                    if (qty > 0) {
                        setQuantity(qty);
                    }
                }
                // Set up for additional payments
                // If we have both balance and advance, use them to calculate the correct amount
                if (balanceParam && advanceParam) {
                    // Get the remaining balance and previous advance
                    const balance = parseFloat(balanceParam);
                    const previousAdvance = parseFloat(advanceParam);
                    // For additional payments, we set advance amount to 0 (empty field for user to enter)
                    setAdvanceAmount(0);
                    // Set the balance to the remaining balance
                    setBalanceAmount(balance);
                    console.log(`Setting advance amount to 0 and balance to remaining balance: ${balance}`);
                    console.log(`Previous advance payment: ${previousAdvance}`);
                }
                // Add note about the previous payment
                if (paymentIdParam && advanceParam) {
                    const previousAdvance = parseFloat(advanceParam);
                    setNotes(`Additional payment for previous payment ID: ${paymentIdParam}. Previous advance payment: ${previousAdvance.toFixed(2)}`);
                } else if (paymentIdParam) {
                    setNotes(`Additional payment for previous payment ID: ${paymentIdParam}`);
                }
                // Wait for items to load before selecting
                if (itemIdParam) {
                    const checkAndSelectItem = {
                        "AdvancePaymentPage.useEffect.checkAndSelectItem": ()=>{
                            if (availableItems.length > 0) {
                                const itemId = parseInt(itemIdParam);
                                // Find the item to get its category
                                const item = availableItems.find({
                                    "AdvancePaymentPage.useEffect.checkAndSelectItem.item": (i)=>i.item_id === itemId
                                }["AdvancePaymentPage.useEffect.checkAndSelectItem.item"]);
                                if (item) {
                                    // Set the category first
                                    setSelectedCategory(item.category);
                                    // Then set the item ID after a short delay to ensure the filtered items are updated
                                    setTimeout({
                                        "AdvancePaymentPage.useEffect.checkAndSelectItem": ()=>{
                                            setSelectedItemId(itemId);
                                            // Scroll to the payment form
                                            const paymentForm = document.getElementById('payment-form');
                                            if (paymentForm) {
                                                paymentForm.scrollIntoView({
                                                    behavior: 'smooth'
                                                });
                                            }
                                        }
                                    }["AdvancePaymentPage.useEffect.checkAndSelectItem"], 100);
                                }
                            } else {
                                // If items not loaded yet, try again in 500ms
                                setTimeout(checkAndSelectItem, 500);
                            }
                        }
                    }["AdvancePaymentPage.useEffect.checkAndSelectItem"];
                    checkAndSelectItem();
                }
            } else {
                const orderIdParam = searchParams.get('order');
                if (orderIdParam) {
                    setPaymentType("custom_order");
                    console.log(`Legacy order ID found in URL: ${orderIdParam}`);
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
        }
    }["AdvancePaymentPage.useEffect"], [
        customOrders,
        availableItems
    ]);
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
                // First, find the order in the customOrders array
                const order = customOrders.find({
                    "AdvancePaymentPage.useEffect.order": (order)=>order.order_id === selectedOrderId
                }["AdvancePaymentPage.useEffect.order"]);
                if (order) {
                    console.log('Selected order from dropdown:', order);
                    // Set customer name from the order
                    setCustomerName(order.customer_name);
                    // Set total amount from the estimated amount
                    if (order.estimated_amount) {
                        const totalAmt = typeof order.estimated_amount === 'string' ? parseFloat(order.estimated_amount) : order.estimated_amount;
                        setTotalAmount(totalAmt);
                        console.log(`Set total amount to ${totalAmt}`);
                    }
                    // Fetch the complete order details from the server to get accurate payment information
                    fetchOrderDetails(selectedOrderId);
                } else {
                    setSelectedOrder(null);
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
            // First, fetch the basic order details
            const response = await fetch(`http://localhost:3002/custom-orders/${orderId}`);
            if (response.ok) {
                const orderDetails = await response.json();
                console.log('Fetched order details from server:', orderDetails);
                // Update the selected order with the accurate data from the server
                setSelectedOrder(orderDetails);
                // Now fetch the payment history to get the most accurate payment information
                try {
                    const historyResponse = await fetch(`http://localhost:3002/advance-payments/history/order/${orderId}`);
                    if (historyResponse.ok) {
                        const historyData = await historyResponse.json();
                        console.log('Fetched payment history from server:', historyData);
                        if (historyData && historyData.total_paid !== undefined) {
                            // Update the order details with the accurate payment information from history
                            const updatedOrderDetails = {
                                ...orderDetails,
                                actual_advance_amount: historyData.total_paid,
                                actual_balance_amount: historyData.remaining_balance
                            };
                            console.log('Updated order details with payment history:', updatedOrderDetails);
                            setSelectedOrder(updatedOrderDetails);
                            // Update the balance amount field with the correct remaining balance
                            setBalanceAmount(historyData.remaining_balance);
                            console.log(`Setting balance from payment history: ${historyData.remaining_balance}`);
                            // Add payment history information to notes
                            let paymentNotes = '';
                            if (historyData.payments && historyData.payments.length > 0) {
                                paymentNotes = `Previous Payments:\n`;
                                historyData.payments.forEach((payment, index)=>{
                                    paymentNotes += `${index + 1}. ${payment.payment_reference}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(payment.advance_amount)} (${new Date(payment.payment_date).toLocaleDateString()})\n`;
                                });
                                if (orderDetails.description) {
                                    paymentNotes += `\nDescription: ${orderDetails.description}\n`;
                                }
                                if (orderDetails.special_requirements) {
                                    paymentNotes += `Special Requirements: ${orderDetails.special_requirements}\n`;
                                }
                                setNotes(paymentNotes);
                            }
                            return; // Skip the standard calculation below since we have accurate data
                        }
                    }
                } catch (historyErr) {
                    console.error('Error fetching payment history:', historyErr);
                // Continue with standard calculation if history fetch fails
                }
                // If payment history fetch failed or didn't have the data we need,
                // fall back to the standard calculation using order details
                if (orderDetails.advance_amount && orderDetails.advance_amount > 0) {
                    const advanceAmount = typeof orderDetails.advance_amount === 'string' ? parseFloat(orderDetails.advance_amount) : orderDetails.advance_amount;
                    console.log(`Server reports this order has an advance payment of ${advanceAmount}`);
                    // Calculate the remaining balance (total - advance)
                    const totalAmt = typeof orderDetails.estimated_amount === 'string' ? parseFloat(orderDetails.estimated_amount) : orderDetails.estimated_amount || 0;
                    const remainingBalance = totalAmt - advanceAmount;
                    console.log(`Server calculation: Total: ${totalAmt}, Advance: ${advanceAmount}, Remaining: ${remainingBalance}`);
                    // Update the balance amount field with the server's calculation
                    setBalanceAmount(remainingBalance);
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
    // Add a special effect to handle the initial setup for inventory items with existing payments
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdvancePaymentPage.useEffect": ()=>{
            const paymentIdParam = new URLSearchParams(window.location.search).get('payment_id');
            const balanceParam = new URLSearchParams(window.location.search).get('balance');
            const advanceParam = new URLSearchParams(window.location.search).get('advance');
            const totalAmountParam = new URLSearchParams(window.location.search).get('total_amount');
            if (paymentIdParam && balanceParam && paymentType === "inventory_item") {
                // This is for an inventory item with an existing payment
                const remainingBalance = parseFloat(balanceParam);
                const totalAmount = totalAmountParam ? parseFloat(totalAmountParam) : 0;
                const previousAdvance = advanceParam ? parseFloat(advanceParam) : 0;
                console.log(`Initial setup for inventory item with payment ID ${paymentIdParam}:`);
                console.log(`Total amount: ${totalAmount}, Previous advance: ${previousAdvance}, Remaining balance: ${remainingBalance}`);
                // Set the advance amount to 0 (empty field for user to enter)
                setAdvanceAmount(0);
                // Set the balance to the remaining balance
                setBalanceAmount(remainingBalance);
                console.log(`Setting advance amount to 0`);
                console.log(`Setting balance amount to remaining balance: ${remainingBalance}`);
                // Force update the form fields after a short delay to ensure they're set correctly
                setTimeout({
                    "AdvancePaymentPage.useEffect": ()=>{
                        const advanceInput = document.getElementById('advanceAmount');
                        const balanceInput = document.getElementById('balanceAmount');
                        if (advanceInput && balanceInput) {
                            console.log('Directly updating form fields');
                            advanceInput.value = '0';
                            balanceInput.value = remainingBalance.toString();
                        }
                    }
                }["AdvancePaymentPage.useEffect"], 500);
            }
        }
    }["AdvancePaymentPage.useEffect"], []); // Empty dependency array means this runs once on mount
    // Calculate balance amount when total or advance amount changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdvancePaymentPage.useEffect": ()=>{
            // Check if this is an additional payment for an inventory item
            const paymentIdParam = new URLSearchParams(window.location.search).get('payment_id');
            const balanceParam = new URLSearchParams(window.location.search).get('balance');
            if (paymentType === "inventory_item" && paymentIdParam && balanceParam) {
                // This is an additional payment for an inventory item
                // For inventory items with existing payments, we don't auto-update the balance
                // This matches the custom order behavior
                const remainingBalance = parseFloat(balanceParam);
                console.log(`For inventory item with existing payment, keeping balance at: ${remainingBalance}`);
                // Only set the balance once when the component mounts
                if (advanceAmount === 0) {
                    setBalanceAmount(remainingBalance);
                }
            } else if (selectedOrder && selectedOrder.advance_amount && selectedOrder.advance_amount > 0) {
                // Get the existing advance amount from the server data
                const existingAdvance = typeof selectedOrder.advance_amount === 'string' ? parseFloat(selectedOrder.advance_amount) : selectedOrder.advance_amount;
                // Get the total amount
                const totalAmt = typeof selectedOrder.estimated_amount === 'string' ? parseFloat(selectedOrder.estimated_amount) : selectedOrder.estimated_amount || 0;
                // For custom orders, we don't auto-update the balance when the advance amount changes
                // Only set it once when the component mounts
                if (advanceAmount === 0) {
                    const remainingBalance = totalAmt - existingAdvance;
                    setBalanceAmount(remainingBalance);
                    console.log(`Setting initial balance for custom order: ${totalAmt} - ${existingAdvance} = ${remainingBalance}`);
                }
            } else {
                // Normal calculation for new payments
                setBalanceAmount(totalAmount - advanceAmount);
                console.log(`Standard balance calculation: ${totalAmount} - ${advanceAmount} = ${totalAmount - advanceAmount}`);
            }
        }
    }["AdvancePaymentPage.useEffect"], [
        totalAmount,
        advanceAmount,
        selectedOrder,
        paymentType
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
        // Check if this is an additional payment for an inventory item
        const paymentIdParam = new URLSearchParams(window.location.search).get('payment_id');
        const advanceParam = new URLSearchParams(window.location.search).get('advance');
        const balanceParam = new URLSearchParams(window.location.search).get('balance');
        if (paymentType === "inventory_item" && paymentIdParam && advanceParam && balanceParam) {
            // This is an additional payment for an inventory item
            const previousAdvance = parseFloat(advanceParam);
            const remainingBalance = parseFloat(balanceParam);
            // Include the existing payment ID and advance amount
            paymentData.previous_payment_id = parseInt(paymentIdParam);
            paymentData.existing_advance_amount = previousAdvance;
            console.log(`Including existing advance amount for inventory item: ${previousAdvance}`);
            // Calculate the new balance amount: remaining balance - new advance
            const calculatedBalance = remainingBalance - advanceAmount;
            paymentData.balance_amount = calculatedBalance;
            console.log(`Calculated balance for inventory item: ${remainingBalance} - ${advanceAmount} = ${calculatedBalance}`);
        } else if (paymentType === "custom_order" && selectedOrder?.advance_amount) {
            const existingAdvance = typeof selectedOrder.advance_amount === 'string' ? parseFloat(selectedOrder.advance_amount) : selectedOrder.advance_amount;
            // Include the existing advance amount from the server
            paymentData.existing_advance_amount = existingAdvance;
            console.log(`Including existing advance amount from server: ${existingAdvance}`);
            // Get the total amount from the server data
            const totalAmt = typeof selectedOrder.estimated_amount === 'string' ? parseFloat(selectedOrder.estimated_amount) : selectedOrder.estimated_amount || 0;
            // Calculate the balance amount: total - (existing + new)
            const calculatedBalance = totalAmt - (existingAdvance + advanceAmount);
            paymentData.balance_amount = calculatedBalance;
            console.log(`Calculated balance for submission: ${totalAmt} - (${existingAdvance} + ${advanceAmount}) = ${calculatedBalance}`);
        } else {
            // Standard calculation for new payments
            paymentData.balance_amount = totalAmount - advanceAmount;
            console.log(`Standard balance calculation for submission: ${totalAmount} - ${advanceAmount} = ${paymentData.balance_amount}`);
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-800",
                        children: "Advance Payment"
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 727,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/DashView/advance-payment/view'),
                        className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "mr-2 h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 732,
                                columnNumber: 11
                            }, this),
                            "View All Payments"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 728,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                lineNumber: 726,
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
                        lineNumber: 742,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute top-0 bottom-0 right-0 px-4 py-3",
                        onClick: ()=>setError(null),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                            lineNumber: 747,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 743,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                lineNumber: 741,
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
                        lineNumber: 755,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute top-0 bottom-0 right-0 px-4 py-3",
                        onClick: ()=>setSuccess(null),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                            lineNumber: 760,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 756,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                lineNumber: 754,
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
                        lineNumber: 767,
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
                                        lineNumber: 778,
                                        columnNumber: 13
                                    }, this),
                                    "Inventory Item"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 769,
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
                                        lineNumber: 790,
                                        columnNumber: 13
                                    }, this),
                                    "Custom Order"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 781,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 768,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                lineNumber: 766,
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
                                        lineNumber: 801,
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
                                                    lineNumber: 812,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                            lineNumber: 805,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 804,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 800,
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
                                        lineNumber: 821,
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
                                                    lineNumber: 831,
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
                                                        lineNumber: 833,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                            lineNumber: 825,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 824,
                                        columnNumber: 15
                                    }, this),
                                    selectedItem && new URLSearchParams(window.location.search).get('payment_id') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 p-2 bg-blue-50 text-blue-800 rounded-md text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Order Status: Partially Paid"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 843,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 844,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Current advance payment: ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(parseFloat(new URLSearchParams(window.location.search).get('total_amount') || '0') - parseFloat(new URLSearchParams(window.location.search).get('balance') || '0'))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 845,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 846,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Remaining balance: ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(parseFloat(new URLSearchParams(window.location.search).get('balance') || '0'))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 847,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 848,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-700",
                                                children: "Any amount entered below will be an additional payment."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 849,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 842,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 820,
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
                                        lineNumber: 855,
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
                                        lineNumber: 858,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 854,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 799,
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
                                        lineNumber: 873,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 872,
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
                                            lineNumber: 882,
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
                                                lineNumber: 885,
                                                columnNumber: 21
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            disabled: true,
                                            children: "No orders requiring payment found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                            lineNumber: 891,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                    lineNumber: 876,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 875,
                                columnNumber: 13
                            }, this),
                            selectedOrder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 p-2 bg-blue-50 text-blue-800 rounded-md text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Order Status:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 898,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    selectedOrder.payment_status || 'Not Paid',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 899,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Current advance payment:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 900,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(selectedOrder.actual_advance_amount || selectedOrder.advance_amount || 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 901,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Remaining balance:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 902,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(selectedOrder.actual_balance_amount || selectedOrder.estimated_amount - (selectedOrder.advance_amount || 0) || 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 903,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-700",
                                        children: "Any amount entered below will be an additional payment."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 904,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 897,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 871,
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
                                lineNumber: 912,
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
                                            lineNumber: 917,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 916,
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
                                        lineNumber: 919,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 915,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 911,
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
                                        lineNumber: 934,
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
                                                    lineNumber: 939,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 938,
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
                                                lineNumber: 941,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 937,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 933,
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
                                        lineNumber: 959,
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
                                                    lineNumber: 964,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 963,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                id: "advanceAmount",
                                                className: "block w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500",
                                                placeholder: "0.00",
                                                value: advanceAmount || '',
                                                onChange: (e)=>{
                                                    const newAdvance = parseFloat(e.target.value) || 0;
                                                    setAdvanceAmount(newAdvance);
                                                    // Check if this is an additional payment
                                                    const paymentIdParam = new URLSearchParams(window.location.search).get('payment_id');
                                                    const balanceParam = new URLSearchParams(window.location.search).get('balance');
                                                    if (paymentIdParam && balanceParam) {
                                                        // For additional payments, balance remains the same - we don't auto-update it
                                                        // This matches the custom order behavior
                                                        const remainingBalance = parseFloat(balanceParam);
                                                        console.log(`Keeping balance at: ${remainingBalance} (not auto-updating)`);
                                                    } else {
                                                        // Standard calculation for new payments
                                                        setBalanceAmount(totalAmount - newAdvance);
                                                    }
                                                },
                                                min: "0",
                                                max: totalAmount,
                                                step: "0.01"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 966,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 962,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 958,
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
                                        lineNumber: 998,
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
                                                    lineNumber: 1003,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 1002,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                id: "balanceAmount",
                                                className: "block w-full pl-10 p-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500",
                                                value: balanceAmount || '',
                                                readOnly: true
                                            }, `balance-${balanceAmount}-${Date.now()}`, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 1005,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 1001,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 997,
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
                                        lineNumber: 1018,
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
                                                    lineNumber: 1023,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 1022,
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
                                                        lineNumber: 1031,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Credit Card",
                                                        children: "Credit Card"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                        lineNumber: 1032,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Debit Card",
                                                        children: "Debit Card"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                        lineNumber: 1033,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Bank Transfer",
                                                        children: "Bank Transfer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                        lineNumber: 1034,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Cheque",
                                                        children: "Cheque"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                        lineNumber: 1035,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                                lineNumber: 1025,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 1021,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 1017,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 932,
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
                                lineNumber: 1043,
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
                                            lineNumber: 1048,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                        lineNumber: 1047,
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
                                        lineNumber: 1050,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 1046,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 1042,
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
                                lineNumber: 1063,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",
                                disabled: loading,
                                children: loading ? 'Processing...' : 'Confirm Payment'
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                                lineNumber: 1070,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                        lineNumber: 1062,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                lineNumber: 796,
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
                                lineNumber: 1085,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                            lineNumber: 1084,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-center mb-4",
                            children: "Payment Successful!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                            lineNumber: 1087,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center mb-2",
                            children: "Your advance payment has been processed successfully."
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                            lineNumber: 1088,
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
                            lineNumber: 1090,
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
                                    lineNumber: 1093,
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
                                    lineNumber: 1099,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                            lineNumber: 1092,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                    lineNumber: 1083,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
                lineNumber: 1082,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/DashView/advance-payment/page.tsx",
        lineNumber: 725,
        columnNumber: 5
    }, this);
};
_s(AdvancePaymentPage, "xu+ZTrbKbkOpoVAtj/Q1pjv9JHk=", false, function() {
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