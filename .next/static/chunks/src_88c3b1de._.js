(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_88c3b1de._.js", {

"[project]/src/utils/imageCompression.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Compresses an image file to reduce its size
 * @param file The image file to compress
 * @param maxSizeMB Maximum size in MB
 * @param maxWidthOrHeight Maximum width or height in pixels
 * @returns A promise that resolves to a base64 string of the compressed image
 */ __turbopack_context__.s({
    "compressImage": (()=>compressImage)
});
const compressImage = async (file, maxSizeMB = 1, maxWidthOrHeight = 1024)=>{
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event)=>{
            const img = new Image();
            img.src = event.target?.result;
            img.onload = ()=>{
                // Create a canvas to resize the image
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                // Calculate new dimensions while maintaining aspect ratio
                if (width > height) {
                    if (width > maxWidthOrHeight) {
                        height = Math.round(height * maxWidthOrHeight / width);
                        width = maxWidthOrHeight;
                    }
                } else {
                    if (height > maxWidthOrHeight) {
                        width = Math.round(width * maxWidthOrHeight / height);
                        height = maxWidthOrHeight;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                // Draw the resized image on the canvas
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    reject(new Error('Could not get canvas context'));
                    return;
                }
                ctx.drawImage(img, 0, 0, width, height);
                // Convert to base64 with reduced quality
                const quality = 0.7; // 70% quality
                const compressedBase64 = canvas.toDataURL(file.type, quality);
                // Check if the compressed image is still too large
                const base64Size = compressedBase64.length * 3 / 4 / 1024 / 1024; // Size in MB
                if (base64Size > maxSizeMB) {
                    // If still too large, compress more aggressively
                    const furtherQuality = Math.min(maxSizeMB / base64Size * quality, 0.5);
                    const furtherCompressed = canvas.toDataURL(file.type, furtherQuality);
                    resolve(furtherCompressed);
                } else {
                    resolve(compressedBase64);
                }
            };
            img.onerror = ()=>{
                reject(new Error('Error loading image'));
            };
        };
        reader.onerror = ()=>{
            reject(new Error('Error reading file'));
        };
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/SupplierCategoryChart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SupplierCategoryChart = ({ selectedCategory })=>{
    _s();
    const [chartData, setChartData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SupplierCategoryChart.useEffect": ()=>{
            const fetchData = {
                "SupplierCategoryChart.useEffect.fetchData": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        // Skip if no category is selected
                        if (!selectedCategory) {
                            setChartData([]);
                            setLoading(false);
                            return;
                        }
                        console.log(`Fetching suppliers for category: ${selectedCategory}`);
                        // Add a timestamp to prevent caching and ensure fresh data
                        const timestamp = new Date().getTime();
                        // First, fetch all suppliers from the database
                        const suppliersResponse = await fetch(`http://localhost:3002/suppliers?t=${timestamp}`);
                        if (!suppliersResponse.ok) {
                            throw new Error(`Failed to fetch suppliers: ${suppliersResponse.status}`);
                        }
                        let suppliers = await suppliersResponse.json();
                        console.log('Fetched suppliers:', suppliers);
                        // Log each supplier's name and ID for debugging
                        suppliers.forEach({
                            "SupplierCategoryChart.useEffect.fetchData": (supplier)=>{
                                console.log(`Supplier ID: ${supplier.supplier_id}, Name: ${supplier.supplier_name || supplier.name || 'No name'}, Category: ${supplier.category || 'No category'}`);
                            }
                        }["SupplierCategoryChart.useEffect.fetchData"]);
                        // Filter suppliers by category if a specific category is selected
                        if (selectedCategory !== 'All') {
                            suppliers = suppliers.filter({
                                "SupplierCategoryChart.useEffect.fetchData": (supplier)=>supplier.category === selectedCategory || supplier.manufacturing_items && supplier.manufacturing_items.includes(selectedCategory)
                            }["SupplierCategoryChart.useEffect.fetchData"]);
                            console.log(`Filtered suppliers for category ${selectedCategory}:`, suppliers);
                        }
                        // Then, fetch all orders to count them manually (with timestamp to prevent caching)
                        const ordersResponse = await fetch(`http://localhost:3002/suppliers/check-orders-data?t=${timestamp}`);
                        let orders = [];
                        if (ordersResponse.ok) {
                            orders = await ordersResponse.json();
                            console.log('Fetched orders:', orders);
                        } else {
                            console.warn('Could not fetch orders, will show suppliers with zero orders');
                        }
                        // Count orders for each supplier
                        const orderCountMap = {};
                        if (orders && orders.length > 0) {
                            orders.forEach({
                                "SupplierCategoryChart.useEffect.fetchData": (order)=>{
                                    if (order.supplier_id) {
                                        orderCountMap[order.supplier_id] = (orderCountMap[order.supplier_id] || 0) + 1;
                                    }
                                }
                            }["SupplierCategoryChart.useEffect.fetchData"]);
                        }
                        console.log('Order counts by supplier:', orderCountMap);
                        // Create chart data with real suppliers and their order counts
                        const realData = suppliers.map({
                            "SupplierCategoryChart.useEffect.fetchData.realData": (supplier)=>{
                                // Get the actual name from the supplier data
                                // Check all possible name fields and use the first one that exists
                                let supplierName = '';
                                if (supplier.name && supplier.name !== '') {
                                    supplierName = supplier.name;
                                } else if (supplier.supplier_name && supplier.supplier_name !== '') {
                                    supplierName = supplier.supplier_name;
                                } else {
                                    // If no name is found, use a generic name but log this issue
                                    supplierName = `Unknown Supplier ${supplier.supplier_id}`;
                                    console.warn(`No name found for supplier with ID ${supplier.supplier_id}`);
                                }
                                // Log the name we're using
                                console.log(`Using name "${supplierName}" for supplier ID ${supplier.supplier_id}`);
                                return {
                                    supplier_id: supplier.supplier_id || 'unknown',
                                    name: supplierName,
                                    orderCount: supplier.supplier_id ? orderCountMap[supplier.supplier_id] || 0 : 0
                                };
                            }
                        }["SupplierCategoryChart.useEffect.fetchData.realData"]);
                        // Sort by order count (highest first)
                        realData.sort({
                            "SupplierCategoryChart.useEffect.fetchData": (a, b)=>b.orderCount - a.orderCount
                        }["SupplierCategoryChart.useEffect.fetchData"]);
                        // For a specific category, show ALL suppliers in that category
                        // For 'All' categories, show suppliers with orders or top suppliers
                        let finalData = [];
                        if (selectedCategory !== 'All') {
                            // For a specific category, show ALL suppliers regardless of order count
                            // This ensures new suppliers are always displayed
                            finalData = [
                                ...realData
                            ];
                            console.log(`Showing all ${finalData.length} suppliers in the ${selectedCategory} category`);
                        } else {
                            // For 'All' categories, show suppliers with orders
                            const suppliersWithOrders = realData.filter({
                                "SupplierCategoryChart.useEffect.fetchData.suppliersWithOrders": (item)=>item.orderCount > 0
                            }["SupplierCategoryChart.useEffect.fetchData.suppliersWithOrders"]);
                            if (suppliersWithOrders.length > 0) {
                                // We have suppliers with orders, show them
                                finalData = suppliersWithOrders;
                            } else {
                                // No suppliers with orders, show top suppliers
                                finalData = realData.slice(0, 5);
                            }
                        }
                        console.log('Final chart data:', finalData);
                        // Log each item in the final chart data for debugging
                        finalData.forEach({
                            "SupplierCategoryChart.useEffect.fetchData": (item)=>{
                                console.log(`Chart item - ID: ${item.supplier_id}, Name: ${item.name}, Orders: ${item.orderCount}`);
                            }
                        }["SupplierCategoryChart.useEffect.fetchData"]);
                        setChartData(finalData);
                    } catch (err) {
                        console.error('Error fetching chart data:', err);
                        setError(err instanceof Error ? err.message : 'Failed to fetch chart data');
                        // Fallback to empty data
                        setChartData([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["SupplierCategoryChart.useEffect.fetchData"];
            fetchData();
        }
    }["SupplierCategoryChart.useEffect"], [
        selectedCategory
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SupplierCategoryChart.tsx",
            lineNumber: 180,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-red-500",
            children: [
                "Error loading chart: ",
                error
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SupplierCategoryChart.tsx",
            lineNumber: 186,
            columnNumber: 12
        }, this);
    }
    if (chartData.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold mb-6 text-center",
                    children: "Leading Supplier Experts by Order Count"
                }, void 0, false, {
                    fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                    lineNumber: 191,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-right mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block bg-yellow-400 w-4 h-4 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                            lineNumber: 193,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: selectedCategory === 'All' ? 'All Categories' : selectedCategory
                        }, void 0, false, {
                            fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                            lineNumber: 194,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                    lineNumber: 192,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-10 text-gray-500",
                    children: selectedCategory ? `No suppliers found for ${selectedCategory === 'All' ? 'any category' : `the ${selectedCategory} category`}. Please select a different category or add suppliers for this category.` : 'Please select a category to see supplier performance'
                }, void 0, false, {
                    fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                    lineNumber: 196,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SupplierCategoryChart.tsx",
            lineNumber: 190,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-6 text-center",
                children: "Leading Supplier Experts by Order Count"
            }, void 0, false, {
                fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-right mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block bg-yellow-400 w-4 h-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: selectedCategory === 'All' ? 'All Categories' : selectedCategory
                    }, void 0, false, {
                        fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-sm text-gray-500 mb-2",
                children: [
                    "Showing suppliers ranked by number of orders in ",
                    selectedCategory === 'All' ? 'all categories' : `the ${selectedCategory} category`
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                        layout: "vertical",
                        data: chartData,
                        margin: {
                            top: 5,
                            right: 30,
                            left: 50,
                            bottom: 5
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: "3 3",
                                horizontal: true,
                                vertical: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                type: "number",
                                domain: [
                                    0,
                                    'dataMax + 5'
                                ],
                                label: {
                                    value: 'Order Times',
                                    position: 'bottom',
                                    offset: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                type: "category",
                                dataKey: "name",
                                width: 120,
                                label: {
                                    value: 'Supplier Name',
                                    angle: -90,
                                    position: 'left'
                                },
                                tick: {
                                    fontSize: 12
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                formatter: (value)=>[
                                        `${value} orders`,
                                        'Orders'
                                    ],
                                labelFormatter: (label)=>{
                                    // Find the supplier by name
                                    const supplier = chartData.find((item)=>item.name === label);
                                    if (!supplier) return label;
                                    // Just return the supplier name as is
                                    return label;
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "orderCount",
                                fill: "#FFDD00",
                                barSize: 30
                            }, void 0, false, {
                                fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SupplierCategoryChart.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SupplierCategoryChart.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
};
_s(SupplierCategoryChart, "UhoX46EvB9/nbJ7sTO7dmaxl6VI=");
_c = SupplierCategoryChart;
const __TURBOPACK__default__export__ = SupplierCategoryChart;
var _c;
__turbopack_context__.k.register(_c, "SupplierCategoryChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/DashView/orders/add/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$imageCompression$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/imageCompression.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SupplierCategoryChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SupplierCategoryChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const AddOrderPage = ()=>{
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // Get query parameters
    const orderIdFromQuery = searchParams.get('order_id');
    const categoryFromQuery = searchParams.get('category');
    const supplierIdFromQuery = searchParams.get('supplier_id');
    const quantityFromQuery = searchParams.get('quantity');
    const offerGoldFromQuery = searchParams.get('offer_gold');
    const selectedKaratsFromQuery = searchParams.get('selected_karats');
    const karatValuesFromQuery = searchParams.get('karat_values');
    // Gold and pricing details
    const goldPricePerGramFromQuery = searchParams.get('gold_price_per_gram');
    const selectedKaratFromQuery = searchParams.get('selected_karat');
    const goldPurityFromQuery = searchParams.get('gold_purity');
    const weightInGramsFromQuery = searchParams.get('weight_in_grams');
    const makingChargesFromQuery = searchParams.get('making_charges');
    const additionalMaterialsChargesFromQuery = searchParams.get('additional_materials_charges');
    const baseEstimatedPriceFromQuery = searchParams.get('base_estimated_price');
    const estimatedPriceFromQuery = searchParams.get('estimated_price');
    const totalAmountFromQuery = searchParams.get('total_amount');
    // Payment information
    const advancePaymentFromQuery = searchParams.get('advance_payment');
    const remainingBalanceFromQuery = searchParams.get('remaining_balance');
    const paymentStatusFromQuery = searchParams.get('payment_status');
    // State for form fields
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(categoryFromQuery || '');
    const [supplier, setSupplier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(supplierIdFromQuery || '');
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(quantityFromQuery ? parseInt(quantityFromQuery, 10) : 20);
    const [offerGold, setOfferGold] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('yes');
    const [selectedKarats, setSelectedKarats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [karatValues, setKaratValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [suppliers, setSuppliers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Gold stock state
    const [goldStock, setGoldStock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingGoldStock, setIsLoadingGoldStock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [goldStockError, setGoldStockError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const karatPurityMap = {
        '24K': {
            purity: 1.0000,
            label: '24-Karat Gold (99.99% Pure)'
        },
        '23K': {
            purity: 0.9583,
            label: '23-Karat Gold (96% Pure)'
        },
        '22K': {
            purity: 0.9167,
            label: '22-Karat Gold (92% Pure)'
        },
        '21K': {
            purity: 0.8750,
            label: '21-Karat Gold (88% Pure)'
        },
        '20K': {
            purity: 0.8333,
            label: '20-Karat Gold (83% Pure)'
        },
        '19K': {
            purity: 0.7917,
            label: '19-Karat Gold (79% Pure)'
        },
        '18K': {
            purity: 0.7500,
            label: '18-Karat Gold (75% Pure)'
        },
        '16K': {
            purity: 0.6667,
            label: '16-Karat Gold (67% Pure)'
        },
        '14K': {
            purity: 0.5833,
            label: '14-Karat Gold (58% Pure)'
        },
        '10K': {
            purity: 0.4167,
            label: '10-Karat Gold (42% Pure)'
        }
    };
    // Price calculation states
    const [showPriceCalculation, setShowPriceCalculation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [goldPricePerGram, setGoldPricePerGram] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [baseGoldPrice, setBaseGoldPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // 24K price from API
    const [selectedKarat, setSelectedKarat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('24K');
    const [weightInGrams, setWeightInGrams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [makingCharges, setMakingCharges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [additionalMaterialsCharges, setAdditionalMaterialsCharges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // For copper and other metals
    const [useCustomPrice, setUseCustomPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customPrice, setCustomPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [estimatedPrice, setEstimatedPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // Base estimate (gold + weight)
    const [totalEstimatedPrice, setTotalEstimatedPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // Total estimate including all charges
    const [totalAmount, setTotalAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoadingGoldPrice, setIsLoadingGoldPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [goldPriceLastUpdated, setGoldPriceLastUpdated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Supplier payment states
    const [advancePaymentAmount, setAdvancePaymentAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(advancePaymentFromQuery ? parseFloat(advancePaymentFromQuery) : 0);
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Cash');
    const [paymentNotes, setPaymentNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [minAdvancePayment, setMinAdvancePayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // 25% of total
    // Set initial total amount if provided in query
    const [initialTotalAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(totalAmountFromQuery ? parseFloat(totalAmountFromQuery) : 0);
    // User info state
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [userBranchId, setUserBranchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // State for categories
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Get user info from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddOrderPage.useEffect": ()=>{
            // Get user info from localStorage
            const role = localStorage.getItem('role');
            const branchId = localStorage.getItem('branchId');
            console.log('Retrieved from localStorage - Role:', role, 'Branch ID:', branchId);
            // Set user role (convert to lowercase for consistency)
            const normalizedRole = role === 'Admin' ? 'admin' : role?.toLowerCase() || '';
            setUserRole(normalizedRole);
            // Set branch ID
            const numericBranchId = branchId ? Number(branchId) : null;
            setUserBranchId(numericBranchId);
        }
    }["AddOrderPage.useEffect"], []);
    // Fetch categories from the database
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddOrderPage.useEffect": ()=>{
            const fetchCategories = {
                "AddOrderPage.useEffect.fetchCategories": async ()=>{
                    try {
                        const response = await fetch('http://localhost:3002/categories');
                        if (response.ok) {
                            const data = await response.json();
                            setCategories(data);
                        } else {
                            console.error('Failed to fetch categories');
                            // Fallback to default categories if fetch fails
                            setCategories([
                                {
                                    category_id: 1,
                                    category_name: "Necklace"
                                },
                                {
                                    category_id: 2,
                                    category_name: "Ring"
                                },
                                {
                                    category_id: 3,
                                    category_name: "Earrings"
                                },
                                {
                                    category_id: 4,
                                    category_name: "Bracelet"
                                },
                                {
                                    category_id: 5,
                                    category_name: "Other"
                                }
                            ]);
                        }
                    } catch (error) {
                        console.error('Error fetching categories:', error);
                        // Fallback to default categories if fetch fails
                        setCategories([
                            {
                                category_id: 1,
                                category_name: "Necklace"
                            },
                            {
                                category_id: 2,
                                category_name: "Ring"
                            },
                            {
                                category_id: 3,
                                category_name: "Earrings"
                            },
                            {
                                category_id: 4,
                                category_name: "Bracelet"
                            },
                            {
                                category_id: 5,
                                category_name: "Other"
                            }
                        ]);
                    }
                }
            }["AddOrderPage.useEffect.fetchCategories"];
            fetchCategories();
        }
    }["AddOrderPage.useEffect"], []);
    // Fetch suppliers from the database
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddOrderPage.useEffect": ()=>{
            const fetchSuppliers = {
                "AddOrderPage.useEffect.fetchSuppliers": async ()=>{
                    try {
                        const response = await fetch('http://localhost:3002/suppliers');
                        if (response.ok) {
                            const data = await response.json();
                            setSuppliers(data);
                        } else {
                            console.error('Failed to fetch suppliers');
                        }
                    } catch (error) {
                        console.error('Error fetching suppliers:', error);
                        // Use dummy data if fetch fails
                        setSuppliers([
                            {
                                supplier_id: '001',
                                name: 'Mohamad Nazeem',
                                category: 'Wedding Sets'
                            },
                            {
                                supplier_id: '002',
                                name: 'Abdulla Nazeem',
                                category: 'Rings'
                            },
                            {
                                supplier_id: '003',
                                name: 'Vaseem Akram',
                                category: 'Bracelets'
                            },
                            {
                                supplier_id: '004',
                                name: 'Mohamad Sami',
                                category: 'Pendants'
                            }
                        ]);
                    }
                }
            }["AddOrderPage.useEffect.fetchSuppliers"];
            fetchSuppliers();
        }
    }["AddOrderPage.useEffect"], []);
    // Handle karat checkbox change
    const handleKaratChange = (karat)=>{
        setSelectedKarats({
            ...selectedKarats,
            [karat]: !selectedKarats[karat]
        });
    };
    // Handle karat value change
    const handleKaratValueChange = (karat, value)=>{
        // Find the stock item for this karat
        const stockItem = goldStock.find((item)=>item.purity === karat);
        const availableQuantity = stockItem ? stockItem.quantity_in_grams : 0;
        // Ensure value is not negative
        const validValue = Math.max(0, value);
        // Update the karat value
        setKaratValues({
            ...karatValues,
            [karat]: validValue
        });
        // Show warning if value exceeds available quantity
        if (validValue > availableQuantity) {
            console.warn(`Warning: Requested ${validValue}g of ${karat} exceeds available quantity of ${availableQuantity}g`);
        }
    };
    // Function to fetch current gold price
    const fetchGoldPrice = async ()=>{
        try {
            setIsLoadingGoldPrice(true);
            const response = await fetch('http://localhost:3002/gold-prices/current-price');
            const data = await response.json();
            if (data.success) {
                // Store the 24K base price
                setBaseGoldPrice(data.price);
                // Calculate the price based on selected karat purity
                const purity = karatPurityMap[selectedKarat].purity;
                const adjustedPrice = data.price * purity;
                setGoldPricePerGram(adjustedPrice);
                // Format the timestamp
                const date = new Date(data.timestamp);
                setGoldPriceLastUpdated(date.toLocaleString());
            } else {
                console.error('Failed to fetch gold price:', data.message);
            }
        } catch (error) {
            console.error('Error fetching gold price:', error);
        } finally{
            setIsLoadingGoldPrice(false);
        }
    };
    // Function to fetch gold stock data
    const fetchGoldStock = async ()=>{
        try {
            setIsLoadingGoldStock(true);
            setGoldStockError(null);
            const response = await fetch('http://localhost:3002/gold-stock', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch gold stock: ${response.status}`);
            }
            const result = await response.json();
            if (result.success) {
                console.log('Gold stock data:', result.data);
                // Initialize selectedKarats and karatValues based on available stock
                const newSelectedKarats = {};
                const newKaratValues = {};
                result.data.forEach((item)=>{
                    // Only add karats that have stock available
                    if (item.quantity_in_grams > 0) {
                        newSelectedKarats[item.purity] = false;
                        newKaratValues[item.purity] = 0; // Initialize with 0
                    }
                });
                setGoldStock(result.data);
                setSelectedKarats(newSelectedKarats);
                setKaratValues(newKaratValues);
            } else {
                setGoldStockError('Failed to fetch gold stock data');
            }
        } catch (error) {
            console.error('Error fetching gold stock:', error);
            setGoldStockError(error instanceof Error ? error.message : 'Unknown error');
        } finally{
            setIsLoadingGoldStock(false);
        }
    };
    // Function to update gold price when karat changes
    const updateGoldPriceForKarat = (karat)=>{
        setSelectedKarat(karat);
        if (baseGoldPrice > 0) {
            const purity = karatPurityMap[karat].purity;
            const adjustedPrice = baseGoldPrice * purity;
            setGoldPricePerGram(adjustedPrice);
        }
    };
    // Fetch gold price when price calculator is shown
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddOrderPage.useEffect": ()=>{
            if (showPriceCalculation) {
                fetchGoldPrice();
            }
        }
    }["AddOrderPage.useEffect"], [
        showPriceCalculation
    ]);
    // Fetch gold stock data when component mounts or when offerGold changes to 'yes'
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddOrderPage.useEffect": ()=>{
            if (offerGold === 'yes') {
                fetchGoldStock();
            }
        }
    }["AddOrderPage.useEffect"], [
        offerGold
    ]);
    // Set total amount and show price calculation if we have query parameters
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddOrderPage.useEffect": ()=>{
            if (totalAmountFromQuery) {
                setShowPriceCalculation(true);
                setTotalAmount(parseFloat(totalAmountFromQuery));
                // If we have a total amount but no advance payment, set a default advance payment
                if (!advancePaymentFromQuery) {
                    const minPayment = parseFloat(totalAmountFromQuery) * 0.25;
                    setAdvancePaymentAmount(minPayment);
                }
                // Set gold karat if provided
                if (selectedKaratFromQuery) {
                    // Convert from "24KT" format to "24K" format if needed
                    const formattedKarat = selectedKaratFromQuery.endsWith('KT') ? selectedKaratFromQuery.replace('KT', 'K') : selectedKaratFromQuery;
                    // Make sure it's a valid karat key
                    if (Object.keys(karatPurityMap).includes(formattedKarat)) {
                        setSelectedKarat(formattedKarat);
                    }
                }
                // Set weight if provided
                if (weightInGramsFromQuery) {
                    setWeightInGrams(parseFloat(weightInGramsFromQuery));
                }
                // Set making charges if provided
                if (makingChargesFromQuery) {
                    setMakingCharges(parseFloat(makingChargesFromQuery));
                }
                // Set additional materials charges if provided
                if (additionalMaterialsChargesFromQuery) {
                    setAdditionalMaterialsCharges(parseFloat(additionalMaterialsChargesFromQuery));
                }
                // Set gold price per gram if provided
                if (goldPricePerGramFromQuery) {
                    setGoldPricePerGram(parseFloat(goldPricePerGramFromQuery));
                }
            }
        }
    }["AddOrderPage.useEffect"], [
        totalAmountFromQuery,
        advancePaymentFromQuery,
        selectedKaratFromQuery,
        weightInGramsFromQuery,
        makingChargesFromQuery,
        additionalMaterialsChargesFromQuery,
        goldPricePerGramFromQuery
    ]);
    // Calculate estimated price
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddOrderPage.useEffect": ()=>{
            if (!useCustomPrice) {
                // Calculate base estimate (gold price * weight)
                const baseEstimate = goldPricePerGram * weightInGrams;
                setEstimatedPrice(baseEstimate);
                // Calculate total estimate including all charges
                const totalEstimate = baseEstimate + makingCharges + additionalMaterialsCharges;
                setTotalEstimatedPrice(totalEstimate);
                // Keep custom price in sync with total estimate
                setCustomPrice(totalEstimate);
            }
            // Calculate total amount
            const pricePerUnit = useCustomPrice ? customPrice : totalEstimatedPrice;
            const total = pricePerUnit * quantity;
            setTotalAmount(total);
            // Calculate minimum advance payment (25% of total)
            const minPayment = total * 0.25;
            setMinAdvancePayment(minPayment);
            // Only set default advance payment if it's the first calculation or currently zero
            if (advancePaymentAmount === 0) {
                setAdvancePaymentAmount(minPayment);
            }
        }
    }["AddOrderPage.useEffect"], [
        goldPricePerGram,
        weightInGrams,
        makingCharges,
        additionalMaterialsCharges,
        useCustomPrice,
        customPrice,
        quantity,
        estimatedPrice,
        totalEstimatedPrice,
        advancePaymentAmount
    ]);
    // Handle image upload with compression
    const handleImageUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            try {
                // Show loading state
                setImagePreview('loading');
                // Check file type
                if (!file.type.startsWith('image/')) {
                    alert('Please upload an image file');
                    setImagePreview(null);
                    return;
                }
                // Check initial file size (limit to 10MB for raw upload)
                if (file.size > 10 * 1024 * 1024) {
                    alert('Image size should be less than 10MB');
                    setImagePreview(null);
                    return;
                }
                // Compress the image if larger than 1MB
                let imageData;
                if (file.size > 1 * 1024 * 1024) {
                    console.log(`Compressing image: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
                    imageData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$imageCompression$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compressImage"])(file, 1, 1200); // Max 1MB, max 1200px width/height
                    console.log(`Compressed to approximately: ${(imageData.length / 1024 / 1024 * 0.75).toFixed(2)}MB`);
                } else {
                    // For small images, just read as data URL without compression
                    imageData = await new Promise((resolve, reject)=>{
                        const reader = new FileReader();
                        reader.onloadend = ()=>resolve(reader.result);
                        reader.onerror = reject;
                        reader.readAsDataURL(file);
                    });
                }
                // Set the preview
                setImagePreview(imageData);
            } catch (error) {
                console.error('Error processing image:', error);
                alert('Error processing image. Please try again with a different image.');
                setImagePreview(null);
            }
        }
    };
    // Check gold stock availability
    const checkGoldStockAvailability = ()=>{
        if (offerGold !== 'yes' || !Object.values(selectedKarats).some((value)=>value)) {
            return {
                available: true
            }; // No gold selected, so no need to check
        }
        // Check availability against local goldStock data
        const unavailableItems = [];
        Object.keys(selectedKarats).forEach((karat)=>{
            if (selectedKarats[karat]) {
                // Ensure karatValues is a number and not negative
                const requestedQuantity = parseFloat(karatValues[karat].toString());
                if (requestedQuantity > 0) {
                    // Find the stock item for this karat
                    const stockItem = goldStock.find((item)=>item.purity === karat);
                    const availableQuantity = stockItem ? parseFloat(stockItem.quantity_in_grams.toString()) : 0;
                    console.log(`Checking ${karat}: Requested ${requestedQuantity}g, Available ${availableQuantity}g`);
                    if (availableQuantity < requestedQuantity) {
                        unavailableItems.push({
                            purity: karat,
                            requested: requestedQuantity,
                            available: availableQuantity
                        });
                    }
                }
            }
        });
        if (unavailableItems.length > 0) {
            console.warn('Unavailable items:', unavailableItems);
            return {
                available: false,
                unavailableItems,
                message: 'Some requested gold is not available in sufficient quantity'
            };
        }
        return {
            available: true,
            message: 'All requested gold is available'
        };
    };
    // Handle form submission
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Prevent multiple submissions
        if (isSubmitting) {
            return;
        }
        setIsSubmitting(true);
        try {
            // Validate advance payment
            if (totalAmount > 0 && advancePaymentAmount < minAdvancePayment) {
                // Scroll to the payment section
                const paymentSection = document.getElementById('supplier-payment-section');
                if (paymentSection) {
                    paymentSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                // Show alert with formatted amount
                alert(`Advance payment must be at least ${minAdvancePayment.toFixed(2).toLocaleString()} Rs. (25% of total amount)`);
                return;
            }
            // Check gold stock availability if offering gold
            if (offerGold === 'yes') {
                const stockAvailability = checkGoldStockAvailability();
                if (!stockAvailability.available && stockAvailability.unavailableItems) {
                    // Format the unavailable items for display
                    const unavailableItemsText = stockAvailability.unavailableItems.map((item)=>`${item.purity}: Requested ${item.requested}g, Available ${item.available}g`).join('\n');
                    // Don't allow proceeding if not enough gold is available
                    alert(`Cannot proceed with order. Not enough gold available:\n\n${unavailableItemsText}\n\nPlease adjust the requested quantities.`);
                    setIsSubmitting(false);
                    return;
                }
                // Double-check that we're not trying to deduct more gold than available
                // This is a safety check to prevent database constraint violations
                const invalidDeductions = Object.keys(selectedKarats).filter((k)=>selectedKarats[k]).map((k)=>{
                    const requestedQuantity = parseFloat(karatValues[k].toString());
                    const stockItem = goldStock.find((item)=>item.purity === k);
                    const availableQuantity = stockItem ? parseFloat(stockItem.quantity_in_grams.toString()) : 0;
                    return {
                        purity: k,
                        requested: requestedQuantity,
                        available: availableQuantity,
                        isValid: requestedQuantity <= availableQuantity
                    };
                }).filter((item)=>!item.isValid);
                if (invalidDeductions.length > 0) {
                    const errorText = invalidDeductions.map((item)=>`${item.purity}: Requested ${item.requested}g, Available ${item.available}g`).join('\n');
                    alert(`Cannot proceed with order. Gold stock validation failed:\n\n${errorText}\n\nPlease refresh the page and try again with valid quantities.`);
                    setIsSubmitting(false);
                    return;
                }
            }
            // Prepare the data to be sent
            const orderData = {
                category,
                supplier,
                quantity,
                offerGold,
                selectedKarats: Object.keys(selectedKarats).filter((k)=>selectedKarats[k]),
                karatValues: Object.fromEntries(Object.entries(karatValues).filter(([k])=>selectedKarats[k])),
                image: imagePreview,
                branch_id: userBranchId,
                goldPricePerGram,
                selectedKarat,
                goldPurity: karatPurityMap[selectedKarat].purity,
                weightInGrams,
                makingCharges,
                additionalMaterialsCharges,
                baseEstimatedPrice: estimatedPrice,
                estimatedPrice: useCustomPrice ? customPrice : totalEstimatedPrice,
                totalAmount,
                // Payment information
                advance_payment_amount: advancePaymentAmount,
                total_payment_amount: totalAmount,
                payment_status: 'Partial',
                payment_info: {
                    amount_paid: advancePaymentAmount,
                    payment_method: paymentMethod,
                    notes: paymentNotes
                },
                // Additional fields for database storage
                selectedKarat_db: selectedKarat,
                goldPurity_db: karatPurityMap[selectedKarat].purity,
                // Include gold stock information for deduction
                gold_stock_deduction: offerGold === 'yes' ? Object.keys(selectedKarats).filter((k)=>selectedKarats[k]).map((k)=>{
                    // Ensure it's a valid number
                    const quantity = parseFloat(karatValues[k].toString());
                    console.log(`Sending gold deduction for ${k}: ${quantity}g`);
                    return {
                        purity: k,
                        quantity: quantity
                    };
                }) : []
            };
            console.log('Including branch_id:', userBranchId);
            console.log('Order data:', orderData);
            // Send the data to the backend
            const response = await fetch('http://localhost:3002/orders/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || 'Failed to create order');
            }
            // If order was created successfully, create the supplier payment record
            if (result.success && result.orderId) {
                try {
                    const paymentData = {
                        order_id: result.orderId,
                        amount_paid: advancePaymentAmount,
                        payment_method: paymentMethod,
                        notes: paymentNotes,
                        created_by: localStorage.getItem('userId') || null
                    };
                    const paymentResponse = await fetch('http://localhost:3002/supplier-payments/create', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(paymentData)
                    });
                    const paymentResult = await paymentResponse.json();
                    if (!paymentResponse.ok) {
                        console.error('Payment record creation failed:', paymentResult.message);
                    // We don't throw an error here since the order was already created
                    }
                } catch (paymentError) {
                    console.error('Error creating payment record:', paymentError);
                // We don't throw an error here since the order was already created
                }
            }
            // Create a notification for the inventory order
            try {
                // Get the supplier name - log for debugging
                console.log('Suppliers list:', suppliers);
                console.log('Selected supplier ID:', supplier);
                // Try to find the supplier by ID
                let supplierObj = suppliers.find((s)=>s.supplier_id.toString() === supplier.toString());
                // If not found, try to find by other means
                if (!supplierObj) {
                    console.log('Supplier not found by ID, trying alternative methods');
                    // Try to find by ID as a substring (in case format is different)
                    supplierObj = suppliers.find((s)=>s.supplier_id.toString().includes(supplier.toString()) || supplier.toString().includes(s.supplier_id.toString()));
                }
                const supplierName = supplierObj ? supplierObj.name : 'Unknown Supplier';
                console.log('Resolved supplier name:', supplierName);
                // Create the notification
                const notificationResponse = await fetch('http://localhost:3002/notifications/inventory-order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify({
                        order_id: result.orderId,
                        supplier_name: supplierName,
                        category: category,
                        branch_id: userBranchId
                    })
                });
                if (notificationResponse.ok) {
                    console.log('Inventory order notification created successfully');
                } else {
                    console.error('Failed to create inventory order notification');
                }
            } catch (notificationError) {
                console.error('Error creating inventory order notification:', notificationError);
            }
            alert('Order submitted successfully!');
            // Reset form fields
            setCategory('');
            setSupplier('');
            setQuantity(20);
            setOfferGold('yes');
            // Reset karat selections based on available stock
            const newSelectedKarats = {};
            const newKaratValues = {};
            goldStock.forEach((item)=>{
                if (item.quantity_in_grams > 0) {
                    newSelectedKarats[item.purity] = false;
                    newKaratValues[item.purity] = 0;
                }
            });
            setSelectedKarats(newSelectedKarats);
            setKaratValues(newKaratValues);
            setImagePreview(null);
            // Reset price calculation fields
            setShowPriceCalculation(false);
            setGoldPricePerGram(0);
            setWeightInGrams(0);
            setMakingCharges(0);
            setAdditionalMaterialsCharges(0);
            setUseCustomPrice(false);
            setCustomPrice(0);
            setEstimatedPrice(0);
            setTotalEstimatedPrice(0);
            setTotalAmount(0);
        } catch (error) {
            console.error('Error submitting order:', error);
            alert(`Failed to submit order: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-md p-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-center mb-6",
                        children: "Add New Order"
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                        lineNumber: 748,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1",
                                        children: "Item Category"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 753,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-full p-2 border border-gray-300 rounded-md",
                                        value: category,
                                        onChange: (e)=>{
                                            const newCategory = e.target.value;
                                            setCategory(newCategory);
                                            // Reset supplier selection when category changes
                                            setSupplier('');
                                            console.log('Category changed to:', newCategory);
                                        },
                                        required: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select Category"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 766,
                                                columnNumber: 15
                                            }, this),
                                            categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: cat.category_name,
                                                    children: cat.category_name
                                                }, cat.category_id, false, {
                                                    fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                    lineNumber: 768,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 754,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                lineNumber: 752,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1",
                                        children: "Select Supplier"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 775,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-full p-2 border border-gray-300 rounded-md",
                                        value: supplier,
                                        onChange: (e)=>setSupplier(e.target.value),
                                        required: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select Supplier"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 782,
                                                columnNumber: 15
                                            }, this),
                                            suppliers.filter((sup)=>!category || sup.category === category).map((sup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: sup.supplier_id,
                                                    children: [
                                                        sup.supplier_id,
                                                        " - ",
                                                        sup.name,
                                                        " ",
                                                        sup.category ? `(${sup.category})` : ''
                                                    ]
                                                }, sup.supplier_id, true, {
                                                    fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 776,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                lineNumber: 774,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1",
                                        children: "Quantity"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 795,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        className: "w-full p-2 border border-gray-300 rounded-md",
                                        value: quantity,
                                        onChange: (e)=>{
                                            // Parse as integer to avoid floating point issues
                                            const newValue = e.target.value === '' ? 1 : parseInt(e.target.value, 10);
                                            // Ensure it's a valid number
                                            if (!isNaN(newValue)) {
                                                setQuantity(newValue);
                                            }
                                        },
                                        onBlur: (e)=>{
                                            // Ensure minimum value of 1 on blur
                                            const currentValue = parseInt(e.target.value, 10);
                                            if (isNaN(currentValue) || currentValue < 1) {
                                                setQuantity(1);
                                            }
                                        },
                                        min: "1",
                                        step: "1" // Ensure only whole numbers
                                        ,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 796,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                lineNumber: 794,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1",
                                        children: "Do You Offer Gold Material?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 823,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "radio",
                                                        name: "offerGold",
                                                        value: "yes",
                                                        checked: offerGold === 'yes',
                                                        onChange: ()=>setOfferGold('yes'),
                                                        className: "mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 826,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Yes"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 825,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "radio",
                                                        name: "offerGold",
                                                        value: "no",
                                                        checked: offerGold === 'no',
                                                        onChange: ()=>setOfferGold('no'),
                                                        className: "mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 837,
                                                        columnNumber: 17
                                                    }, this),
                                                    "No"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 836,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 824,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                lineNumber: 822,
                                columnNumber: 11
                            }, this),
                            offerGold === 'yes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: isLoadingGoldStock ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                    lineNumber: 857,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Loading gold stock data..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                    lineNumber: 858,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                            lineNumber: 856,
                                            columnNumber: 21
                                        }, this) : goldStockError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-red-500 p-2",
                                            children: [
                                                "Error loading gold stock: ",
                                                goldStockError
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                            lineNumber: 861,
                                            columnNumber: 21
                                        }, this) : Object.keys(selectedKarats).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-amber-600 p-2",
                                            children: "No gold stock available. Please add gold to inventory first."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                            lineNumber: 865,
                                            columnNumber: 21
                                        }, this) : Object.keys(selectedKarats).map((karat)=>{
                                            // Find the stock item for this karat
                                            const stockItem = goldStock.find((item)=>item.purity === karat);
                                            const availableQuantity = stockItem ? stockItem.quantity_in_grams : 0;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        id: karat,
                                                        checked: selectedKarats[karat],
                                                        onChange: ()=>handleKaratChange(karat),
                                                        className: "mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 876,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: karat,
                                                        className: "mr-4 w-12",
                                                        children: karat
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 883,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: karatValues[karat],
                                                                onChange: (e)=>{
                                                                    const value = Number(e.target.value);
                                                                    handleKaratValueChange(karat, value);
                                                                },
                                                                className: `w-16 p-1 border ${selectedKarats[karat] && karatValues[karat] > availableQuantity ? 'border-red-500' : 'border-gray-300'} rounded-md`,
                                                                disabled: !selectedKarats[karat],
                                                                min: "0",
                                                                step: "any"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 885,
                                                                columnNumber: 29
                                                            }, this),
                                                            selectedKarats[karat] && karatValues[karat] > availableQuantity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-20 top-1 text-xs text-red-500",
                                                                children: [
                                                                    "Max: ",
                                                                    availableQuantity.toFixed(2),
                                                                    "g"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 902,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 884,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, karat, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 875,
                                                columnNumber: 25
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 854,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                    lineNumber: 853,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                lineNumber: 852,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors",
                                    onClick: ()=>setShowPriceCalculation(!showPriceCalculation),
                                    children: showPriceCalculation ? 'Hide Price Calculator' : 'Show Price Calculator'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                    lineNumber: 918,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                lineNumber: 917,
                                columnNumber: 11
                            }, this),
                            showPriceCalculation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-4",
                                        children: "Price Calculation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 930,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Gold Karat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 935,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "w-full p-2 border border-gray-300 rounded-md",
                                                        value: selectedKarat,
                                                        onChange: (e)=>updateGoldPriceForKarat(e.target.value),
                                                        disabled: useCustomPrice,
                                                        children: Object.entries(karatPurityMap).map(([karat, { label }])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: karat,
                                                                children: label
                                                            }, karat, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 943,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 936,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 934,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium",
                                                                children: "Gold Price (Rs./g)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 953,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "text-xs text-blue-500 hover:text-blue-700",
                                                                onClick: fetchGoldPrice,
                                                                disabled: isLoadingGoldPrice,
                                                                children: isLoadingGoldPrice ? 'Loading...' : 'Refresh'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 954,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 952,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                className: `w-full p-2 border border-gray-300 rounded-md ${isLoadingGoldPrice ? 'bg-gray-100' : ''}`,
                                                                value: goldPricePerGram.toFixed(2),
                                                                onChange: (e)=>setGoldPricePerGram(Number(e.target.value)),
                                                                disabled: useCustomPrice || isLoadingGoldPrice,
                                                                min: "0",
                                                                placeholder: "Enter gold price per gram"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 964,
                                                                columnNumber: 21
                                                            }, this),
                                                            isLoadingGoldPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute right-2 top-1/2 transform -translate-y-1/2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                    lineNumber: 975,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 974,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 963,
                                                        columnNumber: 19
                                                    }, this),
                                                    goldPriceLastUpdated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mt-1",
                                                        children: [
                                                            "Last updated: ",
                                                            goldPriceLastUpdated
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 980,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 951,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Weight (g)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 986,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        className: "w-full p-2 border border-gray-300 rounded-md",
                                                        value: weightInGrams,
                                                        onChange: (e)=>{
                                                            const newValue = e.target.value === '' ? 0 : parseFloat(parseFloat(e.target.value).toFixed(3));
                                                            if (!isNaN(newValue)) {
                                                                setWeightInGrams(newValue);
                                                            }
                                                        },
                                                        disabled: useCustomPrice,
                                                        min: "0",
                                                        step: "any" // Allow any decimal input
                                                        ,
                                                        placeholder: "Enter weight in grams"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 987,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 985,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Making Charges (Rs.)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1006,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        className: "w-full p-2 border border-gray-300 rounded-md",
                                                        value: makingCharges,
                                                        onChange: (e)=>{
                                                            const newValue = e.target.value === '' ? 0 : parseFloat(parseFloat(e.target.value).toFixed(2));
                                                            if (!isNaN(newValue)) {
                                                                setMakingCharges(newValue);
                                                            }
                                                        },
                                                        disabled: useCustomPrice,
                                                        min: "0",
                                                        step: "any" // Allow any decimal input
                                                        ,
                                                        placeholder: "Enter making charges"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1007,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1005,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Additional Materials Charges (Rs.)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1026,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                className: "w-full p-2 border border-gray-300 rounded-md",
                                                                value: additionalMaterialsCharges,
                                                                onChange: (e)=>{
                                                                    const newValue = e.target.value === '' ? 0 : parseFloat(parseFloat(e.target.value).toFixed(2));
                                                                    if (!isNaN(newValue)) {
                                                                        setAdditionalMaterialsCharges(newValue);
                                                                    }
                                                                },
                                                                disabled: useCustomPrice,
                                                                min: "0",
                                                                step: "any" // Allow any decimal input
                                                                ,
                                                                placeholder: "Enter charges for copper, other metals, etc."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1028,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute right-2 top-1/2 transform -translate-y-1/2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: "For Cu, other metals"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                    lineNumber: 1044,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1043,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1027,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1025,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        id: "useCustomPrice",
                                                        checked: useCustomPrice,
                                                        onChange: ()=>setUseCustomPrice(!useCustomPrice),
                                                        className: "mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1051,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "useCustomPrice",
                                                        className: "text-sm font-medium",
                                                        children: "Use custom estimate price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1058,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1050,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 932,
                                        columnNumber: 15
                                    }, this),
                                    useCustomPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium",
                                                        children: "Custom Estimate Price (per unit)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1066,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "text-xs text-blue-500 hover:text-blue-700",
                                                        onClick: ()=>setCustomPrice(totalEstimatedPrice),
                                                        title: "Reset to calculated estimate",
                                                        children: "Reset to calculated price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1067,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1065,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                className: "w-full p-2 border border-gray-300 rounded-md",
                                                value: customPrice,
                                                onChange: (e)=>{
                                                    const newValue = e.target.value === '' ? 0 : parseFloat(parseFloat(e.target.value).toFixed(2));
                                                    if (!isNaN(newValue)) {
                                                        setCustomPrice(newValue);
                                                    }
                                                },
                                                min: "0",
                                                step: "any" // Allow any decimal input
                                                ,
                                                placeholder: "Enter custom price"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1076,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600 mt-1",
                                                children: [
                                                    "Enter the final price including all charges, profit margin, and any negotiated adjustments.",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1092,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Calculated estimate: Rs. ",
                                                    totalEstimatedPrice.toFixed(2).toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1090,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 1064,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Base Gold Price (per unit)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1102,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-white border border-gray-300 rounded-md",
                                                        children: [
                                                            "Rs. ",
                                                            estimatedPrice.toFixed(2).toLocaleString(),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500 block",
                                                                children: "Gold price × weight"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1105,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1103,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: useCustomPrice ? "Custom Estimate Price (per unit)" : "Total Estimate Price (per unit)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1111,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-white border border-gray-300 rounded-md",
                                                        children: [
                                                            "Rs. ",
                                                            useCustomPrice ? customPrice.toFixed(2).toLocaleString() : totalEstimatedPrice.toFixed(2).toLocaleString(),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500 block",
                                                                children: useCustomPrice ? "Custom price" : "Gold + making + additional materials"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1116,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1114,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1110,
                                                columnNumber: 17
                                            }, this),
                                            !useCustomPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 bg-gray-50 border border-gray-200 rounded-md text-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    "Gold Cost: Rs. ",
                                                                    estimatedPrice.toFixed(2).toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1127,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    "Making Charges: Rs. ",
                                                                    makingCharges.toFixed(2).toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1128,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    "Additional Materials: Rs. ",
                                                                    additionalMaterialsCharges.toFixed(2).toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1129,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold",
                                                                children: [
                                                                    "Total: Rs. ",
                                                                    totalEstimatedPrice.toFixed(2).toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1130,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1126,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                    lineNumber: 1125,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1124,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Total Order Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1138,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-white border border-gray-300 rounded-md font-semibold text-yellow-700",
                                                        children: [
                                                            "Rs. ",
                                                            totalAmount.toFixed(2).toLocaleString(),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500 block",
                                                                children: [
                                                                    quantity,
                                                                    " ",
                                                                    quantity === 1 ? 'unit' : 'units',
                                                                    " × Rs. ",
                                                                    (useCustomPrice ? customPrice : totalEstimatedPrice).toFixed(2).toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1141,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1139,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1137,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 1099,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                lineNumber: 929,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-2 text-center",
                                            children: "Add a image of Design"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                            lineNumber: 1153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-gray-300 rounded-md p-2 w-full h-32 flex items-center justify-center",
                                            children: imagePreview === 'loading' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1159,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-500",
                                                        children: "Compressing image..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1160,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1158,
                                                columnNumber: 19
                                            }, this) : imagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full h-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: imagePreview,
                                                        alt: "Design Preview",
                                                        fill: true,
                                                        style: {
                                                            objectFit: 'contain'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1164,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setImagePreview(null),
                                                        className: "absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs",
                                                        title: "Remove image",
                                                        children: "×"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1170,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1163,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "cursor-pointer text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-500",
                                                        children: "Click to upload"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1181,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: "image/*",
                                                        className: "hidden",
                                                        onChange: handleImageUpload
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1182,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1180,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                            lineNumber: 1156,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                    lineNumber: 1152,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                lineNumber: 1151,
                                columnNumber: 11
                            }, this),
                            totalAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "supplier-payment-section",
                                className: "mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-4",
                                        children: "Supplier Payment"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 1197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: [
                                                            "Advance Payment Amount (Rs.)",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500 ml-1",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1204,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500 ml-2",
                                                                children: [
                                                                    "(Min: ",
                                                                    minAdvancePayment.toFixed(2).toLocaleString(),
                                                                    " Rs.)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1205,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1202,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "advance-payment-input",
                                                                type: "text",
                                                                className: `w-full p-2 border ${advancePaymentAmount < minAdvancePayment ? 'border-red-300' : 'border-gray-300'} rounded-md`,
                                                                defaultValue: advancePaymentAmount.toString(),
                                                                onInput: (e)=>{
                                                                    const target = e.target;
                                                                    // Allow direct typing of any value
                                                                    let inputValue = target.value.replace(/[^\d.]/g, ''); // Remove non-numeric characters except decimal
                                                                    // Ensure only one decimal point
                                                                    const decimalCount = (inputValue.match(/\./g) || []).length;
                                                                    if (decimalCount > 1) {
                                                                        const parts = inputValue.split('.');
                                                                        inputValue = parts[0] + '.' + parts.slice(1).join('');
                                                                    }
                                                                    // Update the input value directly
                                                                    target.value = inputValue;
                                                                    // Update React state
                                                                    const newValue = inputValue === '' ? 0 : parseFloat(inputValue);
                                                                    if (!isNaN(newValue)) {
                                                                        setAdvancePaymentAmount(newValue);
                                                                    }
                                                                },
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1208,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "absolute right-2 top-1/2 transform -translate-y-1/2 text-xs bg-blue-500 text-white px-2 py-1 rounded",
                                                                onClick: ()=>{
                                                                    setAdvancePaymentAmount(minAdvancePayment);
                                                                    // Also update the input field directly
                                                                    const inputElement = document.querySelector('#advance-payment-input');
                                                                    if (inputElement) {
                                                                        inputElement.value = minAdvancePayment.toString();
                                                                    }
                                                                },
                                                                title: "Set to minimum required amount",
                                                                children: "Set Min"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1236,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1207,
                                                        columnNumber: 19
                                                    }, this),
                                                    advancePaymentAmount < minAdvancePayment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-500 text-xs mt-1",
                                                        children: [
                                                            "Advance payment must be at least ",
                                                            minAdvancePayment.toFixed(2).toLocaleString(),
                                                            " Rs. (25% of total)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1253,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1201,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Payment Method"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1261,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "w-full p-2 border border-gray-300 rounded-md",
                                                        value: paymentMethod,
                                                        onChange: (e)=>setPaymentMethod(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Cash",
                                                                children: "Cash"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1267,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Bank Transfer",
                                                                children: "Bank Transfer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1268,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Check",
                                                                children: "Check"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1269,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Credit Card",
                                                                children: "Credit Card"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1270,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Other",
                                                                children: "Other"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                                lineNumber: 1271,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1262,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1260,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Payment Notes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1277,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        className: "w-full p-2 border border-gray-300 rounded-md",
                                                        value: paymentNotes,
                                                        onChange: (e)=>setPaymentNotes(e.target.value),
                                                        rows: 2,
                                                        placeholder: "Add any notes about the payment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1278,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1276,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 1199,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Total Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1291,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-white border border-gray-300 rounded-md",
                                                        children: [
                                                            "Rs. ",
                                                            totalAmount.toFixed(2).toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1292,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1290,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Advance Payment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1298,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-white border border-gray-300 rounded-md",
                                                        children: [
                                                            "Rs. ",
                                                            advancePaymentAmount.toFixed(2).toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1299,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1297,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Remaining Balance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1305,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-white border border-gray-300 rounded-md font-semibold text-red-600",
                                                        children: [
                                                            "Rs. ",
                                                            (totalAmount - advancePaymentAmount).toFixed(2).toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                        lineNumber: 1306,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                                lineNumber: 1304,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 1289,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                lineNumber: 1196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "bg-yellow-400 text-black px-8 py-2 rounded-full font-medium",
                                        children: "Submit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 1318,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "bg-gray-200 text-black px-8 py-2 rounded-full font-medium",
                                        onClick: ()=>window.history.back(),
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                        lineNumber: 1324,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                lineNumber: 1317,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                        lineNumber: 750,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                lineNumber: 747,
                columnNumber: 7
            }, this),
            category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-md p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-center mb-6",
                        children: "Leading Supplier Expert in the Field"
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                        lineNumber: 1338,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm text-gray-500 mb-4",
                        children: [
                            "This chart shows the performance of suppliers in the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: category
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                                lineNumber: 1340,
                                columnNumber: 66
                            }, this),
                            " category"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                        lineNumber: 1339,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SupplierCategoryChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        selectedCategory: category
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                        lineNumber: 1342,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/orders/add/page.tsx",
                lineNumber: 1337,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/DashView/orders/add/page.tsx",
        lineNumber: 746,
        columnNumber: 5
    }, this);
};
_s(AddOrderPage, "wab73fm9Q0K70IzE2V5h1CDgRVM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = AddOrderPage;
const __TURBOPACK__default__export__ = AddOrderPage;
var _c;
__turbopack_context__.k.register(_c, "AddOrderPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_88c3b1de._.js.map