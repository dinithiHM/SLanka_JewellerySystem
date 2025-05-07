module.exports = {

"[project]/src/utils/formatters.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
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
}}),
"[project]/src/app/DashView/sales/add/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/formatters.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const AddSalePage = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Available items from inventory
    const [availableItems, setAvailableItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredItems, setFilteredItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Current sale
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customerName, setCustomerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [customPrice, setCustomPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [discountAmount, setDiscountAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [discountType, setDiscountType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('fixed');
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Cash');
    const [saleItems, setSaleItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [branchId, setBranchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // UI states
    const [showItemDropdown, setShowItemDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFetching, setIsFetching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Gold price states
    const [baseGoldPrice, setBaseGoldPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoadingGoldPrice, setIsLoadingGoldPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [goldPriceLastUpdated, setGoldPriceLastUpdated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [useGoldPriceCalculation, setUseGoldPriceCalculation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [calculatedPrice, setCalculatedPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, []);
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
    // Calculate gold price based on karat and weight
    const calculateGoldPrice = (basePrice, karat, weight)=>{
        if (!karat || !weight || weight <= 0 || basePrice <= 0) return 0;
        // Get purity for the karat
        const purity = karatPurityMap[karat]?.purity || 0;
        if (purity <= 0) return 0;
        // Calculate price based on purity and weight
        return basePrice * purity * weight;
    };
    // Fetch available items
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchAvailableItems = async ()=>{
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
                    const errorData = await response.json().catch(()=>({}));
                    const errorMessage = errorData.message || `Failed to fetch available items: ${response.status}`;
                    throw new Error(errorMessage);
                }
                let data = await response.json();
                console.log('Initial fetch - available items:', data); // Debug log
                // Add test gold items for demonstration
                const hasGoldItems = data.some((item)=>item.is_solid_gold && item.gold_carat && item.weight);
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
        };
        fetchAvailableItems();
    }, [
        branchId
    ]);
    // Filter items based on search term
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (searchTerm.trim() === '') {
            setFilteredItems(availableItems);
        } else {
            const term = searchTerm.toLowerCase();
            const filtered = availableItems.filter((item)=>item.product_title.toLowerCase().includes(term) || item.category.toLowerCase().includes(term));
            setFilteredItems(filtered);
        }
    }, [
        searchTerm,
        availableItems
    ]);
    // Calculate price after discount
    const calculatePriceAfterDiscount = (originalPrice, discountAmount, discountType)=>{
        if (discountAmount <= 0) return originalPrice;
        if (discountType === 'percentage') {
            // Limit percentage discount to 75%
            const limitedPercentage = Math.min(discountAmount, 75);
            return originalPrice * (1 - limitedPercentage / 100);
        } else {
            // For fixed discount, ensure it doesn't exceed 75% of the original price
            const maxDiscount = originalPrice * 0.75;
            const limitedDiscount = Math.min(discountAmount, maxDiscount);
            return originalPrice - limitedDiscount;
        }
    };
    // Calculate final price for the current item
    const getFinalUnitPrice = ()=>{
        if (!selectedItem) return 0;
        // Start with either custom price, calculated gold price, or original selling price
        let basePrice = selectedItem.selling_price;
        if (customPrice !== null) {
            basePrice = customPrice;
        } else if (useGoldPriceCalculation && calculatedPrice && calculatedPrice > 0) {
            basePrice = calculatedPrice;
        }
        // Apply discount
        return calculatePriceAfterDiscount(basePrice, discountAmount, discountType);
    };
    // Calculate total
    const totalAmount = saleItems.reduce((sum, item)=>sum + item.subtotal, 0);
    // Handle item selection
    const handleSelectItem = async (item)=>{
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
                } else {
                    // Fallback to fetching current gold price and calculating based on purity
                    const baseGoldPrice = await fetchGoldPrice();
                    const purity = karatPurityMap[karat]?.purity || 0;
                    goldPrice = baseGoldPrice * purity;
                    console.log(`Calculated gold price for ${karat}: ${goldPrice} (base: ${baseGoldPrice}, purity: ${purity})`);
                }
                // Calculate price based on gold price and weight
                const calculatedGoldPrice = goldPrice * item.weight;
                if (calculatedGoldPrice > 0) {
                    setCalculatedPrice(calculatedGoldPrice);
                // We don't automatically set custom price to allow user to see both prices
                }
            } catch (error) {
                console.error('Error calculating gold price:', error);
                // Fallback to original calculation method
                const goldPrice = await fetchGoldPrice();
                const karat = `${item.gold_carat}KT`;
                const calculatedGoldPrice = calculateGoldPrice(goldPrice, karat, item.weight);
                if (calculatedGoldPrice > 0) {
                    setCalculatedPrice(calculatedGoldPrice);
                }
            }
        } else {
            setUseGoldPriceCalculation(false);
            setCalculatedPrice(null);
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
            const subtotal = quantity * finalPrice;
            // Create the new item with gold information if applicable
            const newItem = {
                item_id: selectedItem.item_id,
                product_title: selectedItem.product_title,
                quantity,
                original_price: originalPrice,
                unit_price: finalPrice,
                discount_amount: discountAmount > 0 ? discountAmount : undefined,
                discount_type: discountAmount > 0 ? discountType : undefined,
                subtotal,
                // Add gold-related information if this is a gold item
                gold_carat: selectedItem.is_solid_gold || selectedItem.gold_carat !== undefined && selectedItem.gold_carat > 0 ? selectedItem.gold_carat : undefined,
                gold_weight: selectedItem.is_solid_gold || selectedItem.weight !== undefined && selectedItem.weight > 0 ? selectedItem.weight : undefined,
                gold_price_per_gram: useGoldPriceCalculation && baseGoldPrice > 0 ? baseGoldPrice : undefined,
                is_gold_price_based: useGoldPriceCalculation && calculatedPrice !== null && calculatedPrice > 0 && customPrice === calculatedPrice
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
                    subtotal: newTotalQuantity * existingItem.unit_price
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
            const saleData = {
                customer_name: customerName,
                total_amount: totalAmount,
                payment_method: paymentMethod,
                items: saleItems.map((item)=>({
                        item_id: item.item_id,
                        quantity: item.quantity,
                        unit_price: item.unit_price,
                        original_price: item.original_price,
                        discount_amount: item.discount_amount,
                        discount_type: item.discount_type,
                        // Include gold-related information if available
                        gold_carat: item.gold_carat,
                        gold_weight: item.gold_weight,
                        gold_price_per_gram: item.gold_price_per_gram,
                        is_gold_price_based: item.is_gold_price_based
                    })),
                user_id: userId,
                branch_id: branchId
            };
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 max-w-4xl mx-auto flex justify-center items-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                lineNumber: 610,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
            lineNumber: 609,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-4xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-md p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-6",
                    children: "Add Sale"
                }, void 0, false, {
                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                    lineNumber: 618,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search by item name",
                                    className: "w-full p-3 pl-10 pr-4 border border-gray-300 rounded-md",
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value),
                                    onFocus: ()=>setShowItemDropdown(true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 623,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-3.5 text-gray-400",
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 631,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    children: isFetching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-3 h-3 mr-1 border-2 border-t-transparent border-white rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 686,
                                                columnNumber: 19
                                            }, this),
                                            "Loading..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 685,
                                        columnNumber: 17
                                    }, this) : 'Find'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 632,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 622,
                            columnNumber: 11
                        }, this),
                        showItemDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute z-10 mt-1 w-full max-w-3xl bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                            children: filteredItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-gray-500",
                                children: availableItems.length === 0 ? 'No items available in stock. Please add inventory first.' : 'No items found matching your search. Try a different search term.'
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                lineNumber: 697,
                                columnNumber: 17
                            }, this) : filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center ${item.is_solid_gold || item.gold_carat !== undefined && item.gold_carat > 0 || item.weight !== undefined && item.weight > 0 ? 'border-l-4 border-yellow-400' : ''}`,
                                    onClick: ()=>handleSelectItem(item),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium",
                                                    children: item.product_title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 712,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-500",
                                                    children: item.category
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 713,
                                                    columnNumber: 23
                                                }, this),
                                                (item.is_solid_gold || item.gold_carat !== undefined && item.gold_carat > 0 || item.weight !== undefined && item.weight > 0) && item.gold_carat && item.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block w-3 h-3 bg-yellow-400 rounded-full mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 716,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-medium text-yellow-700",
                                                            children: [
                                                                item.gold_carat,
                                                                "KT Gold • ",
                                                                item.weight,
                                                                "g",
                                                                item.assay_certificate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "ml-1 text-green-600",
                                                                    children: "• Certified"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                    lineNumber: 720,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 717,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 715,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 711,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right ml-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(item.selling_price)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 727,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-sm ${item.in_stock > 0 ? 'text-gray-500' : 'text-red-500 font-bold'}`,
                                                    children: [
                                                        "In stock: ",
                                                        item.in_stock
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 728,
                                                    columnNumber: 23
                                                }, this),
                                                (item.is_solid_gold || item.gold_carat !== undefined && item.gold_carat > 0 || item.weight !== undefined && item.weight > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-yellow-600 mt-1",
                                                    children: "Gold Item"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 732,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 726,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, item.item_id, true, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 704,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 695,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                    lineNumber: 621,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Item"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 748,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-100 rounded-md",
                                        children: selectedItem ? selectedItem.product_title : 'No item selected'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 750,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 749,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 747,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Customer Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 758,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "w-full p-3 border border-gray-300 rounded-md",
                                        value: customerName,
                                        onChange: (e)=>setCustomerName(e.target.value),
                                        placeholder: "Enter customer name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 760,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 759,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 757,
                            columnNumber: 11
                        }, this),
                        selectedItem && (selectedItem.is_solid_gold || selectedItem.gold_carat !== undefined && selectedItem.gold_carat > 0 || selectedItem.weight !== undefined && selectedItem.weight > 0) && selectedItem.gold_carat && selectedItem.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Gold Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 773,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-yellow-50 border border-yellow-200 rounded-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium",
                                                        children: "Karat:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 777,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold",
                                                        children: [
                                                            selectedItem.gold_carat,
                                                            "KT"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 778,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 776,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium",
                                                        children: "Weight:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 781,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold",
                                                        children: [
                                                            selectedItem.weight,
                                                            " grams"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 782,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 780,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 pt-2 border-t border-yellow-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium mb-1",
                                                        children: "Gold Price Information:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 787,
                                                        columnNumber: 21
                                                    }, this),
                                                    isLoadingGoldPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-block w-4 h-4 mr-1 border-2 border-t-transparent border-yellow-400 rounded-full animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 791,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm",
                                                                children: "Loading gold price..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 792,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 790,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        children: "24KT Base Price:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                        lineNumber: 797,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm mr-2",
                                                                                children: [
                                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(baseGoldPrice),
                                                                                    "/gram"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                                lineNumber: 799,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                className: "text-xs bg-yellow-400 text-black px-2 py-0.5 rounded",
                                                                                onClick: (e)=>{
                                                                                    e.stopPropagation();
                                                                                    fetchGoldPrice().then((price)=>{
                                                                                        if (price > 0 && selectedItem?.gold_carat && selectedItem?.weight) {
                                                                                            // Re-trigger the item selection to recalculate everything
                                                                                            handleSelectItem(selectedItem);
                                                                                        }
                                                                                    });
                                                                                },
                                                                                children: "Refresh"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                                lineNumber: 800,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                        lineNumber: 798,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 796,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        children: [
                                                                            selectedItem.gold_carat,
                                                                            "KT Price:"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                        lineNumber: 819,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        children: [
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(baseGoldPrice * karatPurityMap[`${selectedItem.gold_carat}KT`]?.purity || 0),
                                                                            "/gram"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                        lineNumber: 820,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 818,
                                                                columnNumber: 25
                                                            }, this),
                                                            goldPriceLastUpdated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500 mt-1 text-right",
                                                                children: [
                                                                    "Last updated: ",
                                                                    goldPriceLastUpdated
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 826,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 786,
                                                columnNumber: 19
                                            }, this),
                                            calculatedPrice && calculatedPrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 pt-2 border-t border-yellow-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium mb-1",
                                                        children: "Price Calculation:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 837,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-1 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Gold Price:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 839,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-right",
                                                                children: [
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(baseGoldPrice * karatPurityMap[`${selectedItem.gold_carat}KT`]?.purity || 0),
                                                                    "/gram"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 840,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Weight:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 843,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-right",
                                                                children: [
                                                                    selectedItem.weight,
                                                                    " grams"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 844,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: "Total Gold Value:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 845,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-right font-bold",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(calculatedPrice)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 846,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 838,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex justify-end",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "bg-yellow-400 text-black px-2 py-1 rounded text-xs",
                                                            onClick: ()=>setCustomPrice(calculatedPrice),
                                                            children: "Use Gold Price"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 850,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 849,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 836,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 775,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 774,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 772,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Unit price"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 867,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        selectedItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                    lineNumber: 871,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute right-2 top-2 flex space-x-1",
                                                    children: [
                                                        calculatedPrice && calculatedPrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: `px-2 py-1 rounded text-xs ${customPrice === calculatedPrice ? 'bg-yellow-500 text-white' : 'bg-yellow-400 text-black'}`,
                                                            onClick: ()=>setCustomPrice(calculatedPrice),
                                                            children: "Use Gold Price"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 895,
                                                            columnNumber: 23
                                                        }, this),
                                                        customPrice !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs",
                                                            onClick: ()=>setCustomPrice(null),
                                                            children: "Reset"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 909,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 893,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 870,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-gray-100 rounded-md",
                                            children: "0.00"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 920,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 grid grid-cols-2 gap-2",
                                            children: [
                                                selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-xs ${customPrice !== null ? 'text-gray-500' : 'text-black font-medium'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-1",
                                                            children: "Catalog price:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 927,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(selectedItem.selling_price)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 928,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 926,
                                                    columnNumber: 19
                                                }, this),
                                                calculatedPrice && calculatedPrice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-xs ${customPrice === calculatedPrice ? 'text-yellow-600 font-medium' : 'text-yellow-600'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-1",
                                                            children: "Gold value price:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 934,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(calculatedPrice)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 935,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 933,
                                                    columnNumber: 19
                                                }, this),
                                                customPrice !== null && customPrice !== calculatedPrice && selectedItem && customPrice !== selectedItem.selling_price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-blue-600 font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-1",
                                                            children: "Custom price:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 941,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(customPrice)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 942,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 940,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 924,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 868,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 866,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Discount"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 951,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        const basePrice = customPrice !== null ? customPrice : selectedItem.selling_price;
                                                        const maxDiscount = basePrice * 0.75;
                                                        if (value > maxDiscount) {
                                                            setError(`Maximum discount allowed is ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(maxDiscount)}`);
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
                                            lineNumber: 953,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "p-3 border border-gray-300 rounded-md",
                                            value: discountType,
                                            onChange: (e)=>setDiscountType(e.target.value),
                                            disabled: !selectedItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "fixed",
                                                    children: "₹"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 993,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "percentage",
                                                    children: "%"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 994,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 987,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 952,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 950,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Final price"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1001,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-gray-100 rounded-md font-bold",
                                            children: selectedItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(getFinalUnitPrice()) : '0.00'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1003,
                                            columnNumber: 15
                                        }, this),
                                        discountAmount > 0 && selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-green-600 mt-1",
                                            children: discountType === 'percentage' ? `${discountAmount}% discount applied` : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(discountAmount)} discount applied`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1007,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1002,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1000,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Quantity"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1018,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            className: "w-full p-3 border border-gray-300 rounded-md pr-10",
                                            value: quantity,
                                            onChange: (e)=>setQuantity(Math.max(1, parseInt(e.target.value) || 1)),
                                            min: "1",
                                            max: selectedItem?.in_stock || 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1020,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-3 top-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 18,
                                                className: "text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 1029,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1028,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1019,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1017,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Total"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1036,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-100 rounded-md",
                                        children: selectedItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(getFinalUnitPrice() * quantity) : '0.00'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 1038,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1037,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1035,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 font-medium",
                                    children: "Payment Method"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1046,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full p-3 border border-gray-300 rounded-md appearance-none",
                                            value: paymentMethod,
                                            onChange: (e)=>setPaymentMethod(e.target.value),
                                            children: paymentMethods.map((method)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: method,
                                                    children: method
                                                }, method, false, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 1054,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1048,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-3 top-3 pointer-events-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 18,
                                                className: "text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 1058,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                            lineNumber: 1057,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1047,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1045,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1065,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `${saleItems.length === 0 ? 'bg-yellow-400 animate-pulse' : 'bg-yellow-400'} text-black px-6 py-2 rounded-full font-medium flex items-center`,
                                onClick: handleAddItem,
                                disabled: !selectedItem || isSubmitting,
                                title: "Add this item to the sale",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 18,
                                        className: "mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 1079,
                                        columnNumber: 15
                                    }, this),
                                    saleItems.length === 0 ? 'ADD ITEM ' : 'ADD MORE'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                lineNumber: 1072,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1071,
                            columnNumber: 11
                        }, this),
                        saleItems.length === 0 && selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-sm text-yellow-600 mt-2",
                            children: "⚠️ You must click the button above to add the item to your cart first"
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1084,
                            columnNumber: 13
                        }, this),
                        saleItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold mb-2",
                                    children: "Items in this sale:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1092,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border rounded-md overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "min-w-full divide-y divide-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-gray-50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                                            children: "Item"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1097,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                                            children: "Quantity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1098,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                                            children: "Original Price"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1099,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                                            children: "Discount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1100,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                                            children: "Final Price"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1101,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                                            children: "Subtotal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1102,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",
                                                            children: "Action"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1103,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                    lineNumber: 1096,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 1095,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "bg-white divide-y divide-gray-200",
                                                children: [
                                                    saleItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: item.is_gold_price_based ? 'bg-yellow-50' : '',
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: item.product_title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                            lineNumber: 1110,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        item.gold_carat && item.gold_weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-yellow-600",
                                                                            children: [
                                                                                item.gold_carat,
                                                                                "KT Gold • ",
                                                                                item.gold_weight,
                                                                                "g",
                                                                                item.gold_price_per_gram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "ml-1",
                                                                                    children: [
                                                                                        "• ",
                                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(item.gold_price_per_gram),
                                                                                        "/g"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                                    lineNumber: 1115,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                            lineNumber: 1112,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                    lineNumber: 1109,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2",
                                                                    children: item.quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                    lineNumber: 1120,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(item.original_price || item.unit_price)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                    lineNumber: 1121,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2",
                                                                    children: item.discount_amount ? item.discount_type === 'percentage' ? `${item.discount_amount}%` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(item.discount_amount) : '-'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                    lineNumber: 1122,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium",
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(item.unit_price)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                            lineNumber: 1130,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        item.is_gold_price_based && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-yellow-600",
                                                                            children: "Gold price based"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                            lineNumber: 1132,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                    lineNumber: 1129,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(item.subtotal)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                    lineNumber: 1135,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "text-red-500 hover:text-red-700",
                                                                        onClick: ()=>handleRemoveItem(index),
                                                                        title: "Remove item",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                            lineNumber: 1142,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                        lineNumber: 1137,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                    lineNumber: 1136,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                            lineNumber: 1108,
                                                            columnNumber: 23
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "bg-gray-50 font-bold",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2",
                                                                colSpan: 5,
                                                                children: "Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1148,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalAmount)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1149,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                                lineNumber: 1150,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                        lineNumber: 1147,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                                lineNumber: 1106,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 1094,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1093,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1091,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "bg-yellow-400 text-black px-6 py-2 rounded-full font-medium",
                                    onClick: handleSubmit,
                                    disabled: isSubmitting,
                                    title: "Confirm this sale",
                                    children: isSubmitting ? 'Processing...' : 'Confirm'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500 mt-1",
                                    children: saleItems.length === 0 && 'First select an item, then click ADD MORE'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium",
                                        onClick: handleViewSales,
                                        children: "View Sale"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                        lineNumber: 1174,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                                    lineNumber: 1173,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                            lineNumber: 1159,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/DashView/sales/add/page.tsx",
                    lineNumber: 745,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/DashView/sales/add/page.tsx",
            lineNumber: 617,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/DashView/sales/add/page.tsx",
        lineNumber: 616,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AddSalePage;
}}),

};

//# sourceMappingURL=src_0cc44c52._.js.map