(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_9916501b._.js", {

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
"[project]/src/app/DashView/sales/add/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/formatters.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const AddSalePage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Available items from inventory
    const [availableItems, setAvailableItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredItems, setFilteredItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Current sale
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customerName, setCustomerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [customPrice, setCustomPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [discountAmount, setDiscountAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [discountType, setDiscountType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('fixed');
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Cash');
    const [saleItems, setSaleItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [branchId, setBranchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // UI states
    const [showItemDropdown, setShowItemDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFetching, setIsFetching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Gold price states
    const [baseGoldPrice, setBaseGoldPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoadingGoldPrice, setIsLoadingGoldPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [goldPriceLastUpdated, setGoldPriceLastUpdated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [useGoldPriceCalculation, setUseGoldPriceCalculation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [calculatedPrice, setCalculatedPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [baseGoldPricePerUnit, setBaseGoldPricePerUnit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Karat purity mapping
    const karatPurityMap = {
        '24KT': {
            purity: 1.0000,
            label: '24-Karat Gold (99.99% Pure)'
        },
        '22KT': {
            purity: 0.9167,
            label: '22-Karat Gold (92% Pure)'
        },
        '21KT': {
            purity: 0.8750,
            label: '21-Karat Gold (88% Pure)'
        },
        '18KT': {
            purity: 0.7500,
            label: '18-Karat Gold (75% Pure)'
        },
        '16KT': {
            purity: 0.6667,
            label: '16-Karat Gold (67% Pure)'
        }
    };
    // Get user info from localStorage and fetch initial gold price
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddSalePage.useEffect": ()=>{
            const storedUserId = localStorage.getItem('userId');
            const storedBranchId = localStorage.getItem('branchId');
            if (storedUserId) {
                setUserId(storedUserId);
                console.log('User ID set from localStorage:', storedUserId);
            }
            if (storedBranchId) {
                setBranchId(storedBranchId);
                console.log('Branch ID set from localStorage:', storedBranchId);
            }
            // Fetch initial gold price
            fetchGoldPrice();
        }
    }["AddSalePage.useEffect"], []);
    // Function to fetch current gold price (24K)
    const fetchGoldPrice = async ()=>{
        try {
            setIsLoadingGoldPrice(true);
            const response = await fetch('http://localhost:3002/gold-prices/current-price');
            const data = await response.json();
            if (data.success) {
                // Store the 24K base price
                setBaseGoldPrice(data.price);
                // Format the timestamp
                const date = new Date(data.timestamp);
                setGoldPriceLastUpdated(date.toLocaleString());
                return data.price;
            } else {
                console.error('Failed to fetch gold price:', data.message);
                return 0;
            }
        } catch (error) {
            console.error('Error fetching gold price:', error);
            return 0;
        } finally{
            setIsLoadingGoldPrice(false);
        }
    };
    // Function to fetch gold price for a specific karat
    const fetchKaratPrice = async (karat)=>{
        try {
            setIsLoadingGoldPrice(true);
            const response = await fetch(`http://localhost:3002/gold-prices/karat-price/${karat}KT`);
            const data = await response.json();
            if (data.success) {
                // Format the timestamp
                const date = new Date(data.timestamp);
                setGoldPriceLastUpdated(date.toLocaleString());
                return data.price;
            } else {
                console.error(`Failed to fetch ${karat}KT gold price:`, data.message);
                return 0;
            }
        } catch (error) {
            console.error(`Error fetching ${karat}KT gold price:`, error);
            return 0;
        } finally{
            setIsLoadingGoldPrice(false);
        }
    };
    // Function to fetch gold stock data
    const fetchGoldStock = async ()=>{
        try {
            const response = await fetch('http://localhost:3002/gold-stock');
            const data = await response.json();
            if (data.success) {
                return data.data;
            } else {
                console.error('Failed to fetch gold stock:', data.message);
                return [];
            }
        } catch (error) {
            console.error('Error fetching gold stock:', error);
            return [];
        }
    };
    // Helper function to get purity for a karat
    const getPurity = (karat)=>{
        return karatPurityMap[karat]?.purity || 0;
    };
    // Fetch available items
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddSalePage.useEffect": ()=>{
            const fetchAvailableItems = {
                "AddSalePage.useEffect.fetchAvailableItems": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        // First test if the sale items router is working
                        console.log('Testing sale items router...');
                        const testResponse = await fetch(`http://localhost:3002/sale-items/test?t=${new Date().getTime()}`);
                        if (!testResponse.ok) {
                            console.error('Test route failed:', testResponse.status);
                            throw new Error(`Sale items API test failed: ${testResponse.status}`);
                        }
                        const testData = await testResponse.json();
                        console.log('Test route response:', testData);
                        // If test route works, try the actual endpoint with branch filtering
                        console.log('Fetching available items for branch:', branchId);
                        // Construct URL with branch_id parameter if available
                        let url = `http://localhost:3002/sale-items/available?t=${new Date().getTime()}`;
                        if (branchId) {
                            url += `&branch_id=${branchId}`;
                        }
                        const response = await fetch(url);
                        if (!response.ok) {
                            const errorData = await response.json().catch({
                                "AddSalePage.useEffect.fetchAvailableItems": ()=>({})
                            }["AddSalePage.useEffect.fetchAvailableItems"]);
                            const errorMessage = errorData.message || `Failed to fetch available items: ${response.status}`;
                            throw new Error(errorMessage);
                        }
                        let data = await response.json();
                        console.log('Initial fetch - available items:', data); // Debug log
                        // Add test gold items for demonstration
                        const hasGoldItems = data.some({
                            "AddSalePage.useEffect.fetchAvailableItems.hasGoldItems": (item)=>item.is_solid_gold && item.gold_carat && item.weight
                        }["AddSalePage.useEffect.fetchAvailableItems.hasGoldItems"]);
                        if (!hasGoldItems) {
                            console.log('Adding test gold items for demonstration');
                            // Add test gold items
                            const testGoldItems = [
                                {
                                    item_id: 'gold-1',
                                    product_title: 'Gold Necklace 22KT',
                                    category: 'Necklace',
                                    in_stock: 5,
                                    selling_price: 150000,
                                    is_solid_gold: true,
                                    gold_carat: 22,
                                    weight: 15.5,
                                    assay_certificate: 'CERT-001'
                                },
                                {
                                    item_id: 'gold-2',
                                    product_title: 'Gold Ring 18KT',
                                    category: 'Rings',
                                    in_stock: 10,
                                    selling_price: 55000,
                                    is_solid_gold: true,
                                    gold_carat: 18,
                                    weight: 5.2
                                },
                                {
                                    item_id: 'gold-3',
                                    product_title: 'Pure Gold Bangle 24KT',
                                    category: 'Bangles',
                                    in_stock: 3,
                                    selling_price: 200000,
                                    is_solid_gold: true,
                                    gold_carat: 24,
                                    weight: 12.8,
                                    assay_certificate: 'CERT-002'
                                }
                            ];
                            data = [
                                ...data,
                                ...testGoldItems
                            ];
                        }
                        setAvailableItems(data);
                        setFilteredItems(data);
                        // Fetch gold price to have it ready
                        fetchGoldPrice();
                    } catch (err) {
                        console.error('Error fetching available items:', err);
                        setError('Failed to fetch items. Please try again.');
                        // Initialize with empty arrays instead of sample data
                        setAvailableItems([]);
                        setFilteredItems([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["AddSalePage.useEffect.fetchAvailableItems"];
            fetchAvailableItems();
        }
    }["AddSalePage.useEffect"], [
        branchId
    ]);
    // Filter items based on search term
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddSalePage.useEffect": ()=>{
            if (searchTerm.trim() === '') {
                setFilteredItems(availableItems);
            } else {
                const term = searchTerm.toLowerCase();
                const filtered = availableItems.filter({
                    "AddSalePage.useEffect.filtered": (item)=>item.product_title.toLowerCase().includes(term) || item.category.toLowerCase().includes(term)
                }["AddSalePage.useEffect.filtered"]);
                setFilteredItems(filtered);
            }
        }
    }["AddSalePage.useEffect"], [
        searchTerm,
        availableItems
    ]);
    // Calculate price after discount
    const calculatePriceAfterDiscount = (originalPrice, discountAmount, discountType)=>{
        console.log('calculatePriceAfterDiscount - Inputs:', {
            originalPrice,
            discountAmount,
            discountType
        });
        if (discountAmount <= 0) {
            console.log('calculatePriceAfterDiscount - No discount applied, returning original price:', originalPrice);
            return originalPrice;
        }
        let finalPrice;
        if (discountType === 'percentage') {
            // Limit percentage discount to 75%
            const limitedPercentage = Math.min(discountAmount, 75);
            finalPrice = originalPrice * (1 - limitedPercentage / 100);
            console.log('calculatePriceAfterDiscount - Percentage discount:', {
                originalPrice,
                discountPercentage: limitedPercentage,
                finalPrice
            });
        } else {
            // For fixed discount, ensure it doesn't exceed 75% of the original price
            const maxDiscount = originalPrice * 0.75;
            const limitedDiscount = Math.min(discountAmount, maxDiscount);
            finalPrice = originalPrice - limitedDiscount;
            console.log('calculatePriceAfterDiscount - Fixed discount:', {
                originalPrice,
                requestedDiscount: discountAmount,
                limitedDiscount,
                maxDiscount,
                finalPrice
            });
        }
        return finalPrice;
    };
    // Calculate final price for the current item
    const getFinalUnitPrice = ()=>{
        if (!selectedItem) return 0;
        // Start with either custom price, calculated gold price, or original selling price
        let basePrice = selectedItem.selling_price;
        // Log the initial state for debugging
        console.log('getFinalUnitPrice - Initial state:', {
            selectedItem: {
                selling_price: selectedItem.selling_price,
                making_charges: selectedItem.making_charges,
                additional_materials_charges: selectedItem.additional_materials_charges
            },
            customPrice,
            calculatedPrice,
            useGoldPriceCalculation,
            discountAmount,
            discountType
        });
        if (customPrice !== null) {
            // If custom price is set, use it directly (it already includes charges if "Use Total Price with Charges" was clicked)
            basePrice = customPrice;
            console.log('getFinalUnitPrice - Using custom price:', basePrice);
            // Apply discount directly to the custom price
            const finalPrice = calculatePriceAfterDiscount(basePrice, discountAmount, discountType);
            console.log('getFinalUnitPrice - Final price with custom price:', finalPrice);
            return finalPrice;
        } else if (useGoldPriceCalculation && calculatedPrice && calculatedPrice > 0) {
            // Using gold price calculation
            basePrice = calculatedPrice;
            console.log('getFinalUnitPrice - Using calculated gold price:', basePrice);
        } else {
            // Using catalog price (selling_price)
            console.log('getFinalUnitPrice - Using catalog price:', basePrice);
            // When explicitly using catalog price, apply discount directly to the catalog price
            // without adding any charges
            const finalPrice = calculatePriceAfterDiscount(basePrice, discountAmount, discountType);
            console.log('getFinalUnitPrice - Final price with catalog price:', finalPrice);
            return finalPrice;
        }
        // For gold items, prioritize using the baseGoldPricePerUnit for discount calculation
        let priceForDiscount;
        if (selectedItem.gold_carat && selectedItem.weight) {
            // For gold items, always try to use the gold price calculation
            if (baseGoldPricePerUnit > 0) {
                // Use the calculated base gold price if available
                priceForDiscount = baseGoldPricePerUnit;
            } else if (calculatedPrice && calculatedPrice > 0) {
                // Fall back to calculated price if baseGoldPricePerUnit isn't set yet
                priceForDiscount = calculatedPrice;
            } else if (baseGoldPrice && selectedItem.weight) {
                // Calculate directly if we have the base gold price and weight
                priceForDiscount = baseGoldPrice * selectedItem.weight;
            } else {
                // Last resort, use the base price
                priceForDiscount = basePrice;
            }
        } else {
            // For non-gold items, use the base price
            priceForDiscount = basePrice;
        }
        // Add making charges and additional materials charges if they exist
        const makingCharges = selectedItem.making_charges || 0;
        if (makingCharges > 0) {
            priceForDiscount += makingCharges;
            console.log('getFinalUnitPrice - Added making charges:', makingCharges, 'New total:', priceForDiscount);
        }
        const additionalMaterialsCharges = selectedItem.additional_materials_charges || 0;
        if (additionalMaterialsCharges > 0) {
            priceForDiscount += additionalMaterialsCharges;
            console.log('getFinalUnitPrice - Added additional materials charges:', additionalMaterialsCharges, 'New total:', priceForDiscount);
        }
        // Apply discount
        const finalPrice = calculatePriceAfterDiscount(priceForDiscount, discountAmount, discountType);
        console.log('getFinalUnitPrice - Final price after discount:', finalPrice, 'Original price:', priceForDiscount);
        return finalPrice;
    };
    // Calculate total
    const totalAmount = saleItems.reduce((sum, item)=>sum + item.subtotal, 0);
    // Handle item selection
    const handleSelectItem = async (item)=>{
        console.log('handleSelectItem called with item:', item);
        if (item.in_stock <= 0) {
            setError(`${item.product_title} is out of stock`);
            return;
        }
        setSelectedItem(item);
        setQuantity(1);
        setCustomPrice(null); // Reset custom price
        setDiscountAmount(0); // Reset discount
        setDiscountType('fixed'); // Reset discount type
        setShowItemDropdown(false);
        // Reset gold price related values
        setBaseGoldPricePerUnit(0);
        setError(null);
        // Check if it's a gold item with carat and weight
        // Note: We check for weight and gold_carat directly since is_solid_gold might not be properly set
        if ((item.is_solid_gold || item.gold_carat !== undefined && item.gold_carat > 0 || item.weight !== undefined && item.weight > 0) && item.gold_carat && item.weight) {
            console.log('Gold item detected:', item);
            setUseGoldPriceCalculation(true);
            try {
                // Fetch gold stock data to get the price for the specific karat
                const goldStockData = await fetchGoldStock();
                // Find the matching karat in gold stock
                const karat = `${item.gold_carat}KT`;
                const goldStockItem = goldStockData.find((stock)=>stock.purity === karat);
                let goldPrice;
                if (goldStockItem && goldStockItem.price_per_gram > 0) {
                    // Use the price from gold stock if available
                    goldPrice = goldStockItem.price_per_gram;
                    console.log(`Using gold price from stock for ${karat}: ${goldPrice}`);
                    // Update the base gold price for display
                    setBaseGoldPrice(goldPrice);
                } else {
                    // Try to fetch the specific karat price directly
                    const karatNumber = parseInt(karat.replace('KT', ''));
                    const directKaratPrice = await fetchKaratPrice(karatNumber);
                    if (directKaratPrice > 0) {
                        // Use the directly fetched karat price
                        goldPrice = directKaratPrice;
                        console.log(`Using directly fetched price for ${karat}: ${goldPrice}`);
                        // Also update the base gold price for display
                        setBaseGoldPrice(directKaratPrice);
                    } else {
                        // Fallback to fetching 24K price and calculating based on purity
                        const baseGoldPrice = await fetchGoldPrice();
                        const purity = getPurity(karat);
                        goldPrice = baseGoldPrice * purity;
                        console.log(`Calculated gold price for ${karat}: ${goldPrice} (base: ${baseGoldPrice}, purity: ${purity})`);
                        // Update the base gold price for display
                        setBaseGoldPrice(goldPrice);
                    }
                }
                // Calculate price based on gold price and weight
                const calculatedGoldPrice = goldPrice * item.weight;
                if (calculatedGoldPrice > 0) {
                    // Update all the state variables in one go to ensure consistency
                    setCalculatedPrice(calculatedGoldPrice);
                    setBaseGoldPricePerUnit(calculatedGoldPrice);
                    setUseGoldPriceCalculation(true);
                    // Force a re-render by updating a non-critical state
                    setGoldPriceLastUpdated(new Date().toLocaleString());
                    console.log('Setting baseGoldPricePerUnit to:', calculatedGoldPrice, 'and useGoldPriceCalculation to true');
                // We don't automatically set custom price to allow user to see both prices
                } else {
                    // If we couldn't calculate the gold price, calculate it directly
                    if (baseGoldPrice > 0 && item.weight) {
                        const directCalculation = baseGoldPrice * item.weight;
                        setCalculatedPrice(directCalculation);
                        setBaseGoldPricePerUnit(directCalculation);
                        setUseGoldPriceCalculation(true);
                        setGoldPriceLastUpdated(new Date().toLocaleString());
                        console.log('Direct calculation of baseGoldPricePerUnit:', directCalculation);
                    }
                }
            } catch (error) {
                console.error('Error calculating gold price:', error);
                // Fallback to original calculation method
                // Try to fetch the specific karat price first
                const karatNumber = item.gold_carat || 0;
                let goldPrice;
                if (karatNumber > 0) {
                    goldPrice = await fetchKaratPrice(karatNumber);
                    if (goldPrice <= 0) {
                        // If that fails, fall back to 24K price and calculate
                        const basePrice = await fetchGoldPrice();
                        const karat = `${item.gold_carat}KT`;
                        const purity = getPurity(karat);
                        goldPrice = basePrice * purity;
                    }
                    // Update the base gold price for display
                    setBaseGoldPrice(goldPrice);
                } else {
                    goldPrice = await fetchGoldPrice();
                    // Update the base gold price for display
                    setBaseGoldPrice(goldPrice);
                }
                const calculatedGoldPrice = goldPrice * item.weight;
                if (calculatedGoldPrice > 0) {
                    // Update all the state variables in one go to ensure consistency
                    setCalculatedPrice(calculatedGoldPrice);
                    setBaseGoldPricePerUnit(calculatedGoldPrice);
                    setUseGoldPriceCalculation(true);
                    // Force a re-render by updating a non-critical state
                    setGoldPriceLastUpdated(new Date().toLocaleString());
                    console.log('Setting baseGoldPricePerUnit (fallback) to:', calculatedGoldPrice, 'and useGoldPriceCalculation to true');
                } else {
                    // If we still couldn't calculate, try direct calculation
                    if (baseGoldPrice > 0 && item.weight) {
                        const directCalculation = baseGoldPrice * item.weight;
                        setCalculatedPrice(directCalculation);
                        setBaseGoldPricePerUnit(directCalculation);
                        setUseGoldPriceCalculation(true);
                        setGoldPriceLastUpdated(new Date().toLocaleString());
                        console.log('Direct calculation of baseGoldPricePerUnit (fallback):', directCalculation);
                    }
                }
            }
        } else {
            setUseGoldPriceCalculation(false);
            setCalculatedPrice(null);
            setBaseGoldPricePerUnit(0);
        }
    };
    // Handle adding item to sale
    const handleAddItem = ()=>{
        return new Promise((resolve)=>{
            if (!selectedItem) {
                setError('Please select an item');
                resolve(false);
                return;
            }
            if (quantity <= 0) {
                setError('Quantity must be greater than 0');
                resolve(false);
                return;
            }
            if (quantity > selectedItem.in_stock) {
                setError(`Only ${selectedItem.in_stock} items available in stock`);
                resolve(false);
                return;
            }
            // Get the original price (either custom, calculated gold price, or from the item)
            let originalPrice = selectedItem.selling_price;
            if (customPrice !== null) {
                originalPrice = customPrice;
            } else if (useGoldPriceCalculation && calculatedPrice && calculatedPrice > 0) {
                originalPrice = calculatedPrice;
            }
            // Calculate the final unit price after discount
            const finalPrice = getFinalUnitPrice();
            // Calculate subtotal based on the final price
            // Ensure it's a proper number by using parseFloat and rounding to 2 decimal places
            const subtotal = Math.round(quantity * finalPrice * 100) / 100;
            // For gold items, determine the original price based on gold calculation
            let itemOriginalPrice;
            let isGoldPriceBased = false;
            if (selectedItem.gold_carat && selectedItem.weight) {
                // For gold items, prioritize using the gold price calculation
                if (baseGoldPricePerUnit > 0) {
                    // Use the calculated base gold price if available
                    itemOriginalPrice = baseGoldPricePerUnit;
                    isGoldPriceBased = true;
                } else if (calculatedPrice && calculatedPrice > 0) {
                    // Fall back to calculated price if baseGoldPricePerUnit isn't set yet
                    itemOriginalPrice = calculatedPrice;
                    isGoldPriceBased = true;
                } else if (baseGoldPrice && selectedItem.weight) {
                    // Calculate directly if we have the base gold price and weight
                    itemOriginalPrice = baseGoldPrice * selectedItem.weight;
                    isGoldPriceBased = true;
                } else {
                    // Last resort, use the original price
                    itemOriginalPrice = originalPrice;
                }
            } else {
                // For non-gold items, use the original price
                itemOriginalPrice = originalPrice;
            }
            // Create the new item with gold information if applicable
            const newItem = {
                item_id: selectedItem.item_id,
                product_title: selectedItem.product_title,
                quantity,
                original_price: itemOriginalPrice,
                unit_price: finalPrice,
                discount_amount: discountAmount > 0 ? discountAmount : undefined,
                discount_type: discountAmount > 0 ? discountType : undefined,
                subtotal,
                // Add gold-related information if this is a gold item
                gold_carat: selectedItem.is_solid_gold || selectedItem.gold_carat !== undefined && selectedItem.gold_carat > 0 ? selectedItem.gold_carat : undefined,
                gold_weight: selectedItem.is_solid_gold || selectedItem.weight !== undefined && selectedItem.weight > 0 ? selectedItem.weight : undefined,
                gold_price_per_gram: useGoldPriceCalculation && baseGoldPrice > 0 ? baseGoldPrice : undefined,
                is_gold_price_based: isGoldPriceBased,
                // Add making charges and additional materials charges if they exist
                making_charges: selectedItem.making_charges,
                additional_materials_charges: selectedItem.additional_materials_charges
            };
            // Check if item already exists in sale
            const existingItemIndex = saleItems.findIndex((item)=>item.item_id === selectedItem.item_id);
            if (existingItemIndex >= 0) {
                // Update existing item
                const updatedItems = [
                    ...saleItems
                ];
                const existingItem = updatedItems[existingItemIndex];
                // Check if new total quantity exceeds stock
                const newTotalQuantity = existingItem.quantity + quantity;
                if (newTotalQuantity > selectedItem.in_stock) {
                    setError(`Cannot add more than ${selectedItem.in_stock} items (${existingItem.quantity} already in cart)`);
                    resolve(false);
                    return;
                }
                updatedItems[existingItemIndex] = {
                    ...existingItem,
                    quantity: newTotalQuantity,
                    subtotal: Math.round(newTotalQuantity * existingItem.unit_price * 100) / 100
                };
                setSaleItems(updatedItems);
            } else {
                // Add new item
                setSaleItems((prevItems)=>[
                        ...prevItems,
                        newItem
                    ]);
            }
            // Reset selection
            setSelectedItem(null);
            setQuantity(1);
            setError(null);
            resolve(true);
        });
    };
    // Handle removing item from sale
    const handleRemoveItem = (index)=>{
        const updatedItems = [
            ...saleItems
        ];
        updatedItems.splice(index, 1);
        setSaleItems(updatedItems);
    };
    // Handle form submission
    const handleSubmit = async ()=>{
        // Validate form
        if (!customerName.trim()) {
            setError('Please enter customer name');
            return;
        }
        // Check if there are items in the cart
        if (saleItems.length === 0) {
            // If no items in cart, check if an item is selected
            if (selectedItem) {
                // Try to add the selected item
                const added = await handleAddItem();
                if (!added) {
                    return; // If adding the item failed, stop the submission
                }
                // Wait a moment for state to update
                await new Promise((resolve)=>setTimeout(resolve, 100));
            } else {
                // No items in cart and no item selected
                setError('Please select and add at least one item');
                return;
            }
            // Double-check that we now have items in the cart
            if (saleItems.length === 0) {
                setError('Please add at least one item using the ADD MORE button');
                return;
            }
        }
        setIsSubmitting(true);
        setError(null);
        try {
            // Helper function to ensure numeric values are properly formatted
            const formatNumericValue = (value)=>{
                if (value === undefined || value === null) return null;
                // Make sure we're working with a number, not a string
                const numValue = typeof value === 'string' ? parseFloat(value) : value;
                // Check if it's a valid number
                if (isNaN(numValue)) return null;
                // Round to 2 decimal places
                return Math.round(numValue * 100) / 100;
            };
            // Debug the subtotal calculation
            console.log('Sale items before formatting:', saleItems.map((item)=>({
                    item_id: item.item_id,
                    quantity: item.quantity,
                    unit_price: item.unit_price,
                    subtotal: item.subtotal,
                    calculated_subtotal: item.quantity * item.unit_price
                })));
            const saleData = {
                customer_name: customerName,
                total_amount: formatNumericValue(totalAmount),
                payment_method: paymentMethod,
                items: saleItems.map((item)=>{
                    // Recalculate subtotal to ensure it's correct
                    const recalculatedSubtotal = item.quantity * item.unit_price;
                    return {
                        item_id: item.item_id,
                        quantity: item.quantity,
                        unit_price: formatNumericValue(item.unit_price),
                        original_price: formatNumericValue(item.original_price),
                        discount_amount: item.discount_amount ? formatNumericValue(item.discount_amount) : null,
                        discount_type: item.discount_type,
                        subtotal: formatNumericValue(recalculatedSubtotal),
                        // Include gold-related information if available
                        gold_carat: item.gold_carat,
                        gold_weight: item.gold_weight ? formatNumericValue(item.gold_weight) : null,
                        gold_price_per_gram: item.gold_price_per_gram ? formatNumericValue(item.gold_price_per_gram) : null,
                        is_gold_price_based: item.is_gold_price_based,
                        // Include making charges and additional materials charges
                        making_charges: item.making_charges ? formatNumericValue(item.making_charges) : null,
                        additional_materials_charges: item.additional_materials_charges ? formatNumericValue(item.additional_materials_charges) : null
                    };
                }),
                user_id: userId,
                branch_id: branchId
            };
            // Log the formatted data for debugging
            console.log('Formatted sale data:', JSON.stringify(saleData, null, 2));
            console.log('Submitting sale with user_id:', userId, 'and branch_id:', branchId);
            const response = await fetch('http://localhost:3002/sales/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(saleData)
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({}));
                let errorMessage = errorData.message || `Failed to create sale: ${response.status}`;
                // Check for specific error messages
                if (errorData.error && errorData.error.includes('foreign key constraint fails')) {
                    errorMessage = 'One or more items do not exist in the inventory. Please refresh the page and try again.';
                }
                throw new Error(errorMessage);
            }
            const result = await response.json();
            alert(`Sale created successfully! Invoice #: ${result.invoice_number}`);
            // Redirect to view sales page
            router.push('/DashView/sales/view');
        } catch (err) {
            console.error('Error creating sale:', err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally{
            setIsSubmitting(false);
        }
    };
    // Handle view sales
    const handleViewSales = ()=>{
        router.push('/DashView/sales/view');
    };
    // Payment method options
    const paymentMethods = [
        'Cash',
        'Credit Card',
        'Debit Card',
        'Bank Transfer',
        'Check'
    ];
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 max-w-4xl mx-auto flex justify-center items-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                lineNumber: 844,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
            lineNumber: 843,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-4xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-md p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-6",
                    children: "Add Sale"
                }, void 0, false, {
                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                    lineNumber: 852,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search by item name",
                                    className: "w-full p-3 pl-10 pr-4 border border-gray-300 rounded-md",
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value),
                                    onFocus: ()=>setShowItemDropdown(true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 857,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-3.5 text-gray-400",
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 865,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "absolute right-3 top-2.5 bg-yellow-400 text-black px-4 py-1 rounded-full",
                                    onClick: ()=>{
                                        setShowItemDropdown(true);
                                        setIsFetching(true);
                                        setError(null); // Clear any previous errors
                                        // First test if the sale items router is working
                                        fetch(`http://localhost:3002/sale-items/test?t=${new Date().getTime()}`).then((response)=>{
                                            if (!response.ok) {
                                                throw new Error(`Test route failed: ${response.status}`);
                                            }
                                            return response.json();
                                        }).then((data)=>{
                                            console.log('Test route response:', data);
                                            // If test route works, try the actual endpoint with branch filtering
                                            let url = `http://localhost:3002/sale-items/available?t=${new Date().getTime()}`;
                                            if (branchId) {
                                                url += `&branch_id=${branchId}`;
                                            }
                                            console.log('Fetching available items for branch:', branchId);
                                            return fetch(url);
                                        }).then((response)=>{
                                            if (!response.ok) {
                                                throw new Error(`Failed to fetch: ${response.status}`);
                                            }
                                            return response.json();
                                        }).then((data)=>{
                                            console.log('Fetched items:', data); // Debug log
                                            setAvailableItems(data);
                                            // Filter based on search term if provided
                                            const filtered = searchTerm.trim() ? data.filter((item)=>item.product_title.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase())) : data;
                                            setFilteredItems(filtered);
                                            setIsFetching(false);
                                        }).catch((err)=>{
                                            console.error('Error fetching items:', err);
                                            setError('Failed to fetch items. Please try again.');
                                            setIsFetching(false);
                                        });
                                    },
                                    children: isFetching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-3 h-3 mr-1 border-2 border-t-transparent border-white rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 920,
                                                columnNumber: 19
                                            }, this),
                                            "Loading..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 919,
                                        columnNumber: 17
                                    }, this) : 'Find'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 866,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 856,
                            columnNumber: 11
                        }, this),
                        showItemDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute z-10 mt-1 w-full max-w-3xl bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                            children: filteredItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-gray-500",
                                children: availableItems.length === 0 ? 'No items available in stock. Please add inventory first.' : 'No items found matching your search. Try a different search term.'
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                lineNumber: 931,
                                columnNumber: 17
                            }, this) : filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center ${item.is_solid_gold || item.gold_carat !== undefined && item.gold_carat > 0 || item.weight !== undefined && item.weight > 0 ? 'border-l-4 border-yellow-400' : ''}`,
                                    onClick: ()=>handleSelectItem(item),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium",
                                                    children: item.product_title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 946,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-500",
                                                    children: item.category
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 947,
                                                    columnNumber: 23
                                                }, this),
                                                (item.is_solid_gold || item.gold_carat !== undefined && item.gold_carat > 0 || item.weight !== undefined && item.weight > 0) && item.gold_carat && item.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block w-3 h-3 bg-yellow-400 rounded-full mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 950,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-medium text-yellow-700",
                                                            children: [
                                                                item.gold_carat,
                                                                "KT Gold • ",
                                                                item.weight,
                                                                "g",
                                                                item.assay_certificate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "ml-1 text-green-600",
                                                                    children: "• Certified"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                    lineNumber: 954,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 951,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 949,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 945,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right ml-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.selling_price)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 961,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-sm ${item.in_stock > 0 ? 'text-gray-500' : 'text-red-500 font-bold'}`,
                                                    children: [
                                                        "In stock: ",
                                                        item.in_stock
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 962,
                                                    columnNumber: 23
                                                }, this),
                                                (item.is_solid_gold || item.gold_carat !== undefined && item.gold_carat > 0 || item.weight !== undefined && item.weight > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-yellow-600 mt-1",
                                                    children: "Gold Item"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 966,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 960,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, item.item_id, true, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 938,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 929,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                    lineNumber: 855,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Item"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 982,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-100 rounded-md",
                                        children: selectedItem ? selectedItem.product_title : 'No item selected'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 984,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 983,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 981,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Customer Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 992,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "w-full p-3 border border-gray-300 rounded-md",
                                        value: customerName,
                                        onChange: (e)=>setCustomerName(e.target.value),
                                        placeholder: "Enter customer name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 994,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 993,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 991,
                            columnNumber: 11
                        }, this),
                        selectedItem && (selectedItem.is_solid_gold || selectedItem.gold_carat !== undefined && selectedItem.gold_carat > 0 || selectedItem.weight !== undefined && selectedItem.weight > 0) && selectedItem.gold_carat && selectedItem.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Gold Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1007,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-yellow-50 border border-yellow-200 rounded-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium",
                                                        children: "Karat:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 1011,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold",
                                                        children: [
                                                            selectedItem.gold_carat,
                                                            "KT"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 1012,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 1010,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium",
                                                        children: "Weight:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 1015,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold",
                                                        children: [
                                                            selectedItem.weight,
                                                            " grams"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 1016,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 1014,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 pt-2 border-t border-yellow-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium mb-1",
                                                        children: "Gold Price Information:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 1021,
                                                        columnNumber: 21
                                                    }, this),
                                                    isLoadingGoldPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-block w-4 h-4 mr-1 border-2 border-t-transparent border-yellow-400 rounded-full animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1025,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm",
                                                                children: "Loading gold price..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1026,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 1024,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        children: [
                                                                            selectedItem.gold_carat,
                                                                            "KT Base Price:"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                        lineNumber: 1031,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm mr-2",
                                                                                children: [
                                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(baseGoldPrice),
                                                                                    "/gram"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                                lineNumber: 1033,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                className: "text-xs bg-yellow-400 text-black px-2 py-0.5 rounded",
                                                                                onClick: (e)=>{
                                                                                    e.stopPropagation();
                                                                                    // Fetch the specific karat price
                                                                                    const karatNumber = selectedItem?.gold_carat || 0;
                                                                                    if (karatNumber > 0) {
                                                                                        fetchKaratPrice(karatNumber).then((price)=>{
                                                                                            if (price > 0 && selectedItem?.gold_carat && selectedItem?.weight) {
                                                                                                // Calculate the base gold price directly
                                                                                                const calculatedGoldPrice = price * selectedItem.weight;
                                                                                                console.log('Refresh button: Setting baseGoldPricePerUnit to:', calculatedGoldPrice);
                                                                                                // Update all the state variables in one go to ensure consistency
                                                                                                setBaseGoldPricePerUnit(calculatedGoldPrice);
                                                                                                setCalculatedPrice(calculatedGoldPrice);
                                                                                                setUseGoldPriceCalculation(true);
                                                                                                // Force a re-render by updating a non-critical state
                                                                                                setGoldPriceLastUpdated(new Date().toLocaleString());
                                                                                            // Re-trigger the item selection to recalculate everything
                                                                                            // handleSelectItem(selectedItem);
                                                                                            }
                                                                                        });
                                                                                    }
                                                                                },
                                                                                children: "Refresh"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                                lineNumber: 1034,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                        lineNumber: 1032,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1030,
                                                                columnNumber: 25
                                                            }, this),
                                                            goldPriceLastUpdated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500 mt-1 text-right",
                                                                children: [
                                                                    "Last updated: ",
                                                                    goldPriceLastUpdated
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1069,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 1020,
                                                columnNumber: 19
                                            }, this),
                                            calculatedPrice && calculatedPrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 pt-2 border-t border-yellow-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium mb-1",
                                                        children: "Price Calculation:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 1080,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-1 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Gold Price:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1082,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-right",
                                                                children: [
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(baseGoldPrice),
                                                                    "/gram"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1083,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Weight:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1086,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-right",
                                                                children: [
                                                                    selectedItem.weight,
                                                                    " grams"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1087,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: "Total Gold Value:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1088,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-right font-bold",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(calculatedPrice)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1089,
                                                                columnNumber: 25
                                                            }, this),
                                                            selectedItem.making_charges && selectedItem.making_charges > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Making Charges:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                        lineNumber: 1094,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-right",
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(selectedItem.making_charges)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                        lineNumber: 1095,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true),
                                                            selectedItem.additional_materials_charges && selectedItem.additional_materials_charges > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Additional Materials:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                        lineNumber: 1102,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-right",
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(selectedItem.additional_materials_charges)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                        lineNumber: 1103,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true),
                                                            (selectedItem.making_charges || selectedItem.additional_materials_charges) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: "Total with Charges:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                        lineNumber: 1110,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-right font-bold",
                                                                        children: (()=>{
                                                                            // Calculate the total with charges correctly
                                                                            const makingCharges = selectedItem.making_charges ? parseFloat(String(selectedItem.making_charges)) : 0;
                                                                            const additionalMaterialsCharges = selectedItem.additional_materials_charges ? parseFloat(String(selectedItem.additional_materials_charges)) : 0;
                                                                            const totalWithCharges = calculatedPrice + makingCharges + additionalMaterialsCharges;
                                                                            // Force to 2 decimal places for display
                                                                            const roundedTotal = Math.round(totalWithCharges * 100) / 100;
                                                                            // Log for debugging
                                                                            console.log('Total with Charges calculation:', {
                                                                                calculatedPrice,
                                                                                makingCharges,
                                                                                additionalMaterialsCharges,
                                                                                totalWithCharges,
                                                                                roundedTotal
                                                                            });
                                                                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(roundedTotal);
                                                                        })()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                        lineNumber: 1111,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 1081,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex justify-end",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "bg-yellow-400 text-black px-2 py-1 rounded text-xs",
                                                            onClick: ()=>{
                                                                // Calculate total price including making charges and additional materials charges
                                                                const makingCharges = selectedItem.making_charges ? parseFloat(String(selectedItem.making_charges)) : 0;
                                                                const additionalMaterialsCharges = selectedItem.additional_materials_charges ? parseFloat(String(selectedItem.additional_materials_charges)) : 0;
                                                                const totalWithCharges = calculatedPrice + makingCharges + additionalMaterialsCharges;
                                                                // Force to 2 decimal places for consistency
                                                                const roundedTotal = Math.round(totalWithCharges * 100) / 100;
                                                                console.log('Setting custom price to total with charges:', {
                                                                    calculatedPrice,
                                                                    makingCharges,
                                                                    additionalMaterialsCharges,
                                                                    totalWithCharges,
                                                                    roundedTotal
                                                                });
                                                                // Set the custom price to the rounded total with charges
                                                                setCustomPrice(roundedTotal);
                                                            },
                                                            children: "Use Total Price with Charges"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1138,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 1137,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 1079,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 1009,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1008,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1006,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Unit price"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1174,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        selectedItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    className: `w-full p-3 border ${calculatedPrice && calculatedPrice > 0 ? 'border-yellow-400' : 'border-gray-300'} rounded-md`,
                                                    value: customPrice !== null ? customPrice : selectedItem.selling_price,
                                                    onChange: (e)=>{
                                                        const value = parseFloat(e.target.value);
                                                        if (!isNaN(value) && value > 0) {
                                                            setCustomPrice(value);
                                                        } else if (e.target.value === '') {
                                                            setCustomPrice(null); // Reset to original price
                                                        }
                                                    },
                                                    placeholder: "Enter custom price",
                                                    min: "0",
                                                    step: "0.01"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 1178,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute right-2 top-2 flex space-x-1",
                                                    children: [
                                                        calculatedPrice && calculatedPrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: `px-2 py-1 rounded text-xs ${customPrice === calculatedPrice ? 'bg-yellow-500 text-white' : 'bg-yellow-400 text-black'}`,
                                                            onClick: ()=>setCustomPrice(calculatedPrice),
                                                            children: "Use Gold Price"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1202,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: `px-2 py-1 rounded text-xs ${customPrice === null ? 'bg-blue-500 text-white' : 'bg-blue-400 text-black'}`,
                                                            onClick: ()=>{
                                                                setCustomPrice(null);
                                                                setUseGoldPriceCalculation(false);
                                                                console.log('Using catalog price, setting useGoldPriceCalculation to false');
                                                            },
                                                            children: "Use Catalog Price"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1216,
                                                            columnNumber: 21
                                                        }, this),
                                                        customPrice !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs",
                                                            onClick: ()=>{
                                                                setCustomPrice(null);
                                                                setUseGoldPriceCalculation(false);
                                                                console.log('Reset button clicked, setting useGoldPriceCalculation to false');
                                                            },
                                                            children: "Reset"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1233,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 1200,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1177,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-gray-100 rounded-md",
                                            children: "0.00"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1248,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 grid grid-cols-2 gap-2",
                                            children: [
                                                selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-xs ${customPrice !== null ? 'text-gray-500' : 'text-blue-600 font-medium'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-1",
                                                            children: "Catalog price:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1255,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(selectedItem.selling_price)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1256,
                                                            columnNumber: 21
                                                        }, this),
                                                        customPrice === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-1 text-blue-600 font-medium",
                                                            children: "(Selected)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1258,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 1254,
                                                    columnNumber: 19
                                                }, this),
                                                calculatedPrice && calculatedPrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-xs ${customPrice === calculatedPrice ? 'text-yellow-600 font-medium' : 'text-yellow-600'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-1",
                                                            children: "Gold value price:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1265,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(calculatedPrice)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1266,
                                                            columnNumber: 21
                                                        }, this),
                                                        customPrice === calculatedPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-1 text-yellow-600 font-medium",
                                                            children: "(Selected)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1268,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 1264,
                                                    columnNumber: 19
                                                }, this),
                                                selectedItem && (selectedItem.making_charges || selectedItem.additional_materials_charges) && calculatedPrice && calculatedPrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-green-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-1",
                                                            children: "Gold value with charges:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1276,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: (()=>{
                                                                const makingCharges = selectedItem.making_charges ? parseFloat(String(selectedItem.making_charges)) : 0;
                                                                const additionalMaterialsCharges = selectedItem.additional_materials_charges ? parseFloat(String(selectedItem.additional_materials_charges)) : 0;
                                                                const totalWithCharges = calculatedPrice + makingCharges + additionalMaterialsCharges;
                                                                // Force to 2 decimal places for consistency
                                                                const roundedTotal = Math.round(totalWithCharges * 100) / 100;
                                                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(roundedTotal);
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1277,
                                                            columnNumber: 21
                                                        }, this),
                                                        (()=>{
                                                            const makingCharges = selectedItem.making_charges ? parseFloat(String(selectedItem.making_charges)) : 0;
                                                            const additionalMaterialsCharges = selectedItem.additional_materials_charges ? parseFloat(String(selectedItem.additional_materials_charges)) : 0;
                                                            const totalWithCharges = calculatedPrice + makingCharges + additionalMaterialsCharges;
                                                            const roundedTotal = Math.round(totalWithCharges * 100) / 100;
                                                            // Check if this is the selected price
                                                            const isSelected = customPrice !== null && Math.abs(customPrice - roundedTotal) < 0.01;
                                                            return isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-1 text-green-600 font-medium",
                                                                children: "(Selected)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1295,
                                                                columnNumber: 43
                                                            }, this) : null;
                                                        })()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 1275,
                                                    columnNumber: 19
                                                }, this),
                                                customPrice !== null && customPrice !== calculatedPrice && selectedItem && customPrice !== selectedItem.selling_price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-blue-600 font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-1",
                                                            children: "Custom price:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1302,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(customPrice)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1303,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 1301,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1252,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1175,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1173,
                            columnNumber: 11
                        }, this),
                        (()=>{
                            console.log('Rendering Base Gold Price section, conditions:', {
                                selectedItem: !!selectedItem,
                                baseGoldPricePerUnit,
                                useGoldPriceCalculation,
                                shouldShow: selectedItem && baseGoldPricePerUnit > 0
                            });
                            return null;
                        })(),
                        selectedItem && selectedItem.gold_carat && selectedItem.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Base Gold Price (per unit)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1325,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-yellow-50 border border-yellow-200 rounded-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: baseGoldPricePerUnit > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(baseGoldPricePerUnit) : calculatedPrice ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(calculatedPrice) : baseGoldPrice && selectedItem.weight ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(baseGoldPrice * selectedItem.weight) : 'Calculating...'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 1329,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500 mr-2",
                                                                children: "Gold price × weight"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1339,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "text-xs bg-yellow-400 text-black px-2 py-0.5 rounded",
                                                                onClick: ()=>{
                                                                    // Calculate directly based on current values
                                                                    if (baseGoldPrice > 0 && selectedItem?.weight) {
                                                                        const directCalculation = baseGoldPrice * selectedItem.weight;
                                                                        console.log('Direct calculation of baseGoldPricePerUnit:', directCalculation);
                                                                        // Update all relevant state variables
                                                                        setBaseGoldPricePerUnit(directCalculation);
                                                                        setCalculatedPrice(directCalculation);
                                                                        setUseGoldPriceCalculation(true);
                                                                        // Force a re-render
                                                                        setGoldPriceLastUpdated(new Date().toLocaleString());
                                                                    } else {
                                                                        // If we don't have the base price yet, fetch it first
                                                                        const karatNumber = selectedItem?.gold_carat || 0;
                                                                        if (karatNumber > 0) {
                                                                            fetchKaratPrice(karatNumber).then((price)=>{
                                                                                if (price > 0 && selectedItem?.weight) {
                                                                                    const calculatedGoldPrice = price * selectedItem.weight;
                                                                                    console.log('Fetched and calculated baseGoldPricePerUnit:', calculatedGoldPrice);
                                                                                    // Update all relevant state variables
                                                                                    setBaseGoldPricePerUnit(calculatedGoldPrice);
                                                                                    setCalculatedPrice(calculatedGoldPrice);
                                                                                    setUseGoldPriceCalculation(true);
                                                                                    setBaseGoldPrice(price);
                                                                                    // Force a re-render
                                                                                    setGoldPriceLastUpdated(new Date().toLocaleString());
                                                                                }
                                                                            });
                                                                        }
                                                                    }
                                                                },
                                                                children: "Refresh"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1340,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 1338,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 1328,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 text-xs text-gray-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Gold Price per gram:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1386,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(baseGoldPrice)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1387,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 1385,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Weight:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1390,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    selectedItem.weight,
                                                                    " grams"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1391,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 1389,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between font-medium",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Total Gold Value:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1394,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: baseGoldPricePerUnit > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(baseGoldPricePerUnit) : calculatedPrice ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(calculatedPrice) : baseGoldPrice && selectedItem.weight ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(baseGoldPrice * selectedItem.weight) : 'Calculating...'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1395,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 1393,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 1384,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 1327,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1326,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1324,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Discount"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1413,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            className: "flex-1 p-3 border border-gray-300 rounded-md",
                                            value: discountAmount,
                                            onChange: (e)=>{
                                                const value = parseFloat(e.target.value);
                                                if (!isNaN(value) && value >= 0) {
                                                    // For percentage, limit to 75%
                                                    if (discountType === 'percentage' && value > 75) {
                                                        setError('Maximum discount allowed is 75%');
                                                        setDiscountAmount(75);
                                                    } else if (discountType === 'fixed' && selectedItem) {
                                                        // For fixed amount, limit to 75% of the price
                                                        // Use baseGoldPricePerUnit if available, otherwise use custom price or selling price
                                                        let basePrice;
                                                        if (selectedItem.gold_carat && selectedItem.weight) {
                                                            // For gold items, prioritize using the gold price calculation
                                                            if (baseGoldPricePerUnit > 0) {
                                                                // Use the calculated base gold price if available
                                                                basePrice = baseGoldPricePerUnit;
                                                            } else if (calculatedPrice && calculatedPrice > 0) {
                                                                // Fall back to calculated price if baseGoldPricePerUnit isn't set yet
                                                                basePrice = calculatedPrice;
                                                            } else if (baseGoldPrice && selectedItem.weight) {
                                                                // Calculate directly if we have the base gold price and weight
                                                                basePrice = baseGoldPrice * selectedItem.weight;
                                                            } else if (customPrice !== null) {
                                                                basePrice = customPrice;
                                                            } else {
                                                                basePrice = selectedItem.selling_price;
                                                            }
                                                        } else if (customPrice !== null) {
                                                            basePrice = customPrice;
                                                        } else {
                                                            basePrice = selectedItem.selling_price;
                                                        }
                                                        const maxDiscount = basePrice * 0.75;
                                                        if (value > maxDiscount) {
                                                            setError(`Maximum discount allowed is ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(maxDiscount)}`);
                                                            setDiscountAmount(maxDiscount);
                                                        } else {
                                                            setDiscountAmount(value);
                                                            setError(null);
                                                        }
                                                    } else {
                                                        setDiscountAmount(value);
                                                        setError(null);
                                                    }
                                                } else {
                                                    setDiscountAmount(0);
                                                }
                                            },
                                            min: "0",
                                            step: discountType === 'percentage' ? '1' : '0.01',
                                            disabled: !selectedItem
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1415,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "p-3 border border-gray-300 rounded-md",
                                            value: discountType,
                                            onChange: (e)=>setDiscountType(e.target.value),
                                            disabled: !selectedItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "fixed",
                                                    children: "₹"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 1479,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "percentage",
                                                    children: "%"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 1480,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1473,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1414,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1412,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Final price"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1487,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-gray-100 rounded-md font-bold",
                                            children: selectedItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(getFinalUnitPrice()) : '0.00'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1489,
                                            columnNumber: 15
                                        }, this),
                                        discountAmount > 0 && selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-green-600 mt-1",
                                            children: discountType === 'percentage' ? `${discountAmount}% discount applied` : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(discountAmount)} discount applied`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1493,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1488,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1486,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Quantity"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1504,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            className: "w-full p-3 border border-gray-300 rounded-md pr-10",
                                            value: quantity,
                                            onChange: (e)=>setQuantity(Math.max(1, parseInt(e.target.value) || 1)),
                                            min: "1",
                                            max: selectedItem?.in_stock || 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1506,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-3 top-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 18,
                                                className: "text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 1515,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1514,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1505,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1503,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Total"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1522,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-100 rounded-md",
                                        children: selectedItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(getFinalUnitPrice() * quantity) : '0.00'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 1524,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1523,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1521,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Payment Method"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1532,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full p-3 border border-gray-300 rounded-md appearance-none",
                                            value: paymentMethod,
                                            onChange: (e)=>setPaymentMethod(e.target.value),
                                            children: paymentMethods.map((method)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: method,
                                                    children: method
                                                }, method, false, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 1540,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1534,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-3 top-3 pointer-events-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 18,
                                                className: "text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 1544,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1543,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1533,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1531,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1551,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `${saleItems.length === 0 ? 'bg-yellow-400 animate-pulse' : 'bg-yellow-400'} text-black px-6 py-2 rounded-full font-medium flex items-center`,
                                onClick: handleAddItem,
                                disabled: !selectedItem || isSubmitting,
                                title: "Add this item to the sale",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 18,
                                        className: "mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 1565,
                                        columnNumber: 15
                                    }, this),
                                    saleItems.length === 0 ? 'ADD ITEM ' : 'ADD MORE'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                lineNumber: 1558,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1557,
                            columnNumber: 11
                        }, this),
                        saleItems.length === 0 && selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-sm text-yellow-600 mt-2",
                            children: "⚠️ You must click the button above to add the item to your cart first"
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1570,
                            columnNumber: 13
                        }, this),
                        saleItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold mb-2",
                                    children: "Items in this sale:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1578,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border rounded-md overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "min-w-full divide-y divide-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-gray-50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                                            children: "Item"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1583,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                                            children: "Quantity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1584,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                                            children: "Original Price"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1585,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                                            children: "Discount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1586,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                                            children: "Final Price"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1587,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                                            children: "Subtotal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1588,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                                            children: "Action"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1589,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 1582,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 1581,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "bg-white divide-y divide-gray-200",
                                                children: [
                                                    saleItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: item.is_gold_price_based ? 'bg-yellow-50' : '',
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: item.product_title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                            lineNumber: 1596,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        item.gold_carat && item.gold_weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-yellow-600",
                                                                            children: [
                                                                                item.gold_carat,
                                                                                "KT Gold • ",
                                                                                item.gold_weight,
                                                                                "g",
                                                                                item.gold_price_per_gram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "ml-1",
                                                                                    children: [
                                                                                        "• ",
                                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.gold_price_per_gram),
                                                                                        "/g"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                                    lineNumber: 1601,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                            lineNumber: 1598,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                    lineNumber: 1595,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2",
                                                                    children: item.quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                    lineNumber: 1606,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.original_price || item.unit_price)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                    lineNumber: 1607,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2",
                                                                    children: item.discount_amount ? item.discount_type === 'percentage' ? `${item.discount_amount}%` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.discount_amount) : '-'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                    lineNumber: 1608,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium",
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.unit_price)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                            lineNumber: 1616,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        item.is_gold_price_based && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-yellow-600",
                                                                            children: "Gold price based"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                            lineNumber: 1618,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                    lineNumber: 1615,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.subtotal)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                    lineNumber: 1621,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "text-red-500 hover:text-red-700",
                                                                        onClick: ()=>handleRemoveItem(index),
                                                                        title: "Remove item",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                            lineNumber: 1628,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                        lineNumber: 1623,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                    lineNumber: 1622,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1594,
                                                            columnNumber: 23
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "bg-gray-50 font-bold",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2",
                                                                colSpan: 5,
                                                                children: "Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1634,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(totalAmount)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1635,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1636,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 1633,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 1592,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 1580,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1579,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1577,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "bg-yellow-400 text-black px-6 py-2 rounded-full font-medium",
                                    onClick: handleSubmit,
                                    disabled: isSubmitting,
                                    title: "Confirm this sale",
                                    children: isSubmitting ? 'Processing...' : 'Confirm'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1646,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500 mt-1",
                                    children: saleItems.length === 0 && 'First select an item, then click ADD MORE'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1655,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium",
                                        onClick: handleViewSales,
                                        children: "View Sale"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 1660,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1659,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1645,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                    lineNumber: 979,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
            lineNumber: 851,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
        lineNumber: 850,
        columnNumber: 5
    }, this);
};
_s(AddSalePage, "J209t4C/2uv4LNp/NMGn2sT0jVw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AddSalePage;
const __TURBOPACK__default__export__ = AddSalePage;
var _c;
__turbopack_context__.k.register(_c, "AddSalePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_9916501b._.js.map