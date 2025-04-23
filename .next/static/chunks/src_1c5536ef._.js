(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_1c5536ef._.js", {

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
"[project]/src/app/DashView/assay-reports/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html2canvas/dist/html2canvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/formatters.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const AssayReportsPage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [assayReports, setAssayReports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [branches, setBranches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [branchFilter, setBranchFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All Branches');
    const [userBranchId, setUserBranchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formMode, setFormMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('add');
    const [currentReport, setCurrentReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [jewelleryItems, setJewelleryItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedItemId, setSelectedItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingItems, setLoadingItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form state
    const [certificateNo, setCertificateNo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [reportDate, setReportDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [customerName, setCustomerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [weight, setWeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [goldPercentage, setGoldPercentage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [goldConcentration, setGoldConcentration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [goldCarat, setGoldCarat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [sampleType, setSampleType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [remarks, setRemarks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [branchId, setBranchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [compositions, setCompositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Metadata for linking to jewellery item
    const [isHomogeneous, setIsHomogeneous] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hasSolder, setHasSolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [solderQuality, setSolderQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Check authentication and get user info from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssayReportsPage.useEffect": ()=>{
            const token = localStorage.getItem('token');
            if (!token) {
                console.log('No authentication token found, redirecting to login');
                router.push('/login');
                return;
            }
            // Verify token with the server
            const verifyToken = {
                "AssayReportsPage.useEffect.verifyToken": async ()=>{
                    try {
                        const response = await fetch('http://localhost:3002/auth/verifyToken', {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        if (!response.ok) {
                            throw new Error('Invalid token');
                        }
                        setIsAuthenticated(true);
                        // Get user info
                        const userInfo = localStorage.getItem('userInfo');
                        if (userInfo) {
                            try {
                                const parsedUserInfo = JSON.parse(userInfo);
                                setUserBranchId(parsedUserInfo.branch_id || null);
                                setUserRole(parsedUserInfo.role || '');
                            } catch (err) {
                                console.error('Error parsing user info:', err);
                            }
                        } else {
                            // Fallback to individual items if userInfo is not available
                            setUserRole(localStorage.getItem('role') || '');
                            const branchId = localStorage.getItem('branchId');
                            setUserBranchId(branchId ? parseInt(branchId) : null);
                        }
                    } catch (err) {
                        console.error('Authentication error:', err);
                        localStorage.removeItem('token');
                        router.push('/login');
                    }
                }
            }["AssayReportsPage.useEffect.verifyToken"];
            verifyToken();
        }
    }["AssayReportsPage.useEffect"], [
        router
    ]);
    // Fetch branches
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssayReportsPage.useEffect": ()=>{
            console.log('Branch fetch effect running, isAuthenticated:', isAuthenticated);
            if (!isAuthenticated) return;
            const fetchBranches = {
                "AssayReportsPage.useEffect.fetchBranches": async ()=>{
                    try {
                        const token = localStorage.getItem('token');
                        if (!token) {
                            throw new Error('No authentication token found');
                        }
                        // Set default branches in case the API call fails
                        const defaultBranches = [
                            {
                                branch_id: 1,
                                branch_name: 'Mahiyanganaya Branch'
                            },
                            {
                                branch_id: 2,
                                branch_name: 'Mahaoya Branch'
                            }
                        ];
                        try {
                            const response = await fetch('http://localhost:3002/branches', {
                                headers: {
                                    'Authorization': `Bearer ${token}`
                                }
                            });
                            if (response.ok) {
                                const data = await response.json();
                                console.log('Fetched branches:', data);
                                setBranches(data);
                            } else {
                                console.warn(`Failed to fetch branches: ${response.status}, using default branches`);
                                setBranches(defaultBranches);
                            }
                        } catch (fetchErr) {
                            console.warn('Error fetching branches, using default branches:', fetchErr);
                            setBranches(defaultBranches);
                        }
                        // Log the branches state after setting
                        setTimeout({
                            "AssayReportsPage.useEffect.fetchBranches": ()=>{
                                console.log('Branches state:', branches);
                            }
                        }["AssayReportsPage.useEffect.fetchBranches"], 100);
                    } catch (err) {
                        console.error('Error in branch fetch effect:', err);
                        setError(err instanceof Error ? err.message : 'An unknown error occurred');
                    }
                }
            }["AssayReportsPage.useEffect.fetchBranches"];
            fetchBranches();
        }
    }["AssayReportsPage.useEffect"], [
        isAuthenticated
    ]);
    // Fetch jewellery items
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssayReportsPage.useEffect": ()=>{
            if (!isAuthenticated) return;
            const fetchJewelleryItems = {
                "AssayReportsPage.useEffect.fetchJewelleryItems": async ()=>{
                    try {
                        setLoadingItems(true);
                        const token = localStorage.getItem('token');
                        if (!token) {
                            throw new Error('No authentication token found');
                        }
                        // Try fetching from the jewellery-items endpoint first
                        try {
                            // Construct URL with query parameters for branch filtering
                            let url = 'http://localhost:3002/jewellery-items';
                            const params = new URLSearchParams();
                            if (userBranchId && (!userRole || userRole.toLowerCase() !== 'admin')) {
                                params.append('branch_id', userBranchId.toString());
                            }
                            if (params.toString()) {
                                url += `?${params.toString()}`;
                            }
                            console.log('Fetching jewellery items from:', url);
                            const response = await fetch(url, {
                                headers: {
                                    'Authorization': `Bearer ${token}`
                                }
                            });
                            if (response.ok) {
                                const data = await response.json();
                                console.log('Fetched jewellery items:', data.length);
                                // Ensure numeric fields are properly parsed
                                const parsedData = data.map({
                                    "AssayReportsPage.useEffect.fetchJewelleryItems.parsedData": (item)=>({
                                            ...item,
                                            weight: parseFloat(item.weight) || 0,
                                            gold_carat: parseFloat(item.gold_carat) || 0
                                        })
                                }["AssayReportsPage.useEffect.fetchJewelleryItems.parsedData"]);
                                setJewelleryItems(parsedData);
                                return; // Exit if successful
                            }
                            console.warn(`Failed to fetch from jewellery-items endpoint: ${response.status}, trying available-items endpoint`);
                        } catch (err) {
                            console.warn('Error fetching from jewellery-items endpoint, trying available-items endpoint:', err);
                        }
                        // Fallback to the assay-reports/available-items endpoint
                        try {
                            let url = 'http://localhost:3002/assay-reports/available-items';
                            const params = new URLSearchParams();
                            if (userBranchId && userRole !== 'admin') {
                                params.append('branch_id', userBranchId.toString());
                            }
                            // Include all items, even those with assay reports
                            params.append('includeAll', 'true');
                            if (params.toString()) {
                                url += `?${params.toString()}`;
                            }
                            console.log('Fetching jewellery items from fallback URL:', url);
                            const response = await fetch(url, {
                                headers: {
                                    'Authorization': `Bearer ${token}`
                                }
                            });
                            if (response.ok) {
                                const data = await response.json();
                                console.log('Fetched jewellery items from fallback:', data.length);
                                // Ensure numeric fields are properly parsed
                                const parsedData = data.map({
                                    "AssayReportsPage.useEffect.fetchJewelleryItems.parsedData": (item)=>({
                                            ...item,
                                            weight: parseFloat(item.weight) || 0,
                                            gold_carat: parseFloat(item.gold_carat) || 0
                                        })
                                }["AssayReportsPage.useEffect.fetchJewelleryItems.parsedData"]);
                                setJewelleryItems(parsedData);
                            } else {
                                console.warn(`Failed to fetch from fallback endpoint: ${response.status}`);
                                // Set empty array as fallback
                                setJewelleryItems([]);
                            }
                        } catch (fallbackErr) {
                            console.error('Error fetching jewellery items from fallback endpoint:', fallbackErr);
                            // Set empty array as fallback
                            setJewelleryItems([]);
                        }
                    } catch (err) {
                        console.error('Error in jewellery items fetch effect:', err);
                    } finally{
                        setLoadingItems(false);
                    }
                }
            }["AssayReportsPage.useEffect.fetchJewelleryItems"];
            fetchJewelleryItems();
        }
    }["AssayReportsPage.useEffect"], [
        isAuthenticated,
        userBranchId,
        userRole
    ]);
    // Fetch assay reports
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssayReportsPage.useEffect": ()=>{
            if (!isAuthenticated) return;
            const fetchAssayReports = {
                "AssayReportsPage.useEffect.fetchAssayReports": async ()=>{
                    try {
                        setLoading(true);
                        const token = localStorage.getItem('token');
                        if (!token) {
                            throw new Error('No authentication token found');
                        }
                        // Construct URL with query parameters for branch filtering
                        let url = 'http://localhost:3002/assay-reports';
                        const params = new URLSearchParams();
                        if (userBranchId && userRole !== 'admin') {
                            params.append('branch_id', userBranchId.toString());
                        }
                        if (params.toString()) {
                            url += `?${params.toString()}`;
                        }
                        console.log('Fetching assay reports from:', url);
                        const response = await fetch(url, {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        if (response.ok) {
                            const data = await response.json();
                            console.log('Fetched assay reports:', data.length);
                            // Ensure numeric fields are properly parsed
                            const parsedData = data.map({
                                "AssayReportsPage.useEffect.fetchAssayReports.parsedData": (report)=>({
                                        ...report,
                                        weight: parseFloat(report.weight) || 0,
                                        gold_percentage: parseFloat(report.gold_percentage) || 0,
                                        gold_concentration: parseFloat(report.gold_concentration) || 0,
                                        gold_carat: parseFloat(report.gold_carat) || 0
                                    })
                            }["AssayReportsPage.useEffect.fetchAssayReports.parsedData"]);
                            setAssayReports(parsedData);
                        } else {
                            console.warn(`Failed to fetch assay reports: ${response.status}, setting empty array`);
                            setAssayReports([]);
                            if (response.status === 403) {
                                setError('You do not have permission to view assay reports. Please contact your administrator.');
                            } else {
                                setError(`Failed to fetch assay reports: ${response.status}`);
                            }
                        }
                    } catch (err) {
                        console.error('Error fetching assay reports:', err);
                        setError(err instanceof Error ? err.message : 'An unknown error occurred');
                        setAssayReports([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["AssayReportsPage.useEffect.fetchAssayReports"];
            fetchAssayReports();
        }
    }["AssayReportsPage.useEffect"], [
        isAuthenticated,
        userBranchId,
        userRole
    ]);
    // Filter assay reports based on search term and branch filter
    const filteredReports = assayReports.filter((report)=>{
        const matchesSearch = report.certificate_no.toLowerCase().includes(searchTerm.toLowerCase()) || report.customer_name && report.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) || report.sample_type && report.sample_type.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesBranch = branchFilter === 'All Branches' || report.branch_name && report.branch_name === branchFilter;
        return matchesSearch && matchesBranch;
    });
    // Handle item selection
    const handleItemSelection = (itemId)=>{
        setSelectedItemId(itemId);
        if (!itemId) {
            // If no item selected, don't auto-populate fields
            return;
        }
        // Find the selected item
        const selectedItem = jewelleryItems.find((item)=>item.item_id === itemId);
        if (!selectedItem) return;
        // Auto-populate fields from the selected item
        if (selectedItem.weight) {
            setWeight(selectedItem.weight);
        }
        if (selectedItem.gold_carat) {
            setGoldCarat(selectedItem.gold_carat);
            // Approximate gold percentage based on carat (24K = 99.9%)
            const approximatePercentage = selectedItem.gold_carat / 24 * 99.9;
            setGoldPercentage(parseFloat(approximatePercentage.toFixed(2)));
            setGoldConcentration(parseFloat(approximatePercentage.toFixed(2)));
        }
        // Set sample type based on category
        setSampleType(selectedItem.category);
        // Set branch ID
        if (selectedItem.branch_id) {
            setBranchId(selectedItem.branch_id);
        }
    };
    // Handle add new report
    const handleAddNewReport = ()=>{
        setCurrentReport(null);
        setCertificateNo('');
        setReportDate(new Date().toISOString().split('T')[0]);
        setCustomerName('');
        setWeight(0);
        setGoldPercentage(0);
        setGoldConcentration(0);
        setGoldCarat(0);
        setSampleType('');
        setRemarks('');
        setSelectedItemId(null);
        setIsHomogeneous(true);
        setHasSolder(false);
        setSolderQuality('');
        // Set branch ID based on user role and branch
        if (userRole !== 'admin') {
            // For non-admin users, set to their branch
            setBranchId(userBranchId);
            console.log('Setting branch ID to user branch:', userBranchId);
        } else {
            // For admin, default to branch 2 (Mahaoya Branch)
            setBranchId(2); // Default to Mahaoya Branch
            console.log('Admin user - setting default branch ID to 2 (Mahaoya Branch)');
        }
        setCompositions([
            {
                composition_id: 0,
                report_id: 0,
                element_name: 'SILVER',
                element_symbol: 'Ag',
                concentration: 0
            },
            {
                composition_id: 0,
                report_id: 0,
                element_name: 'COPPER',
                element_symbol: 'Cu',
                concentration: 0
            },
            {
                composition_id: 0,
                report_id: 0,
                element_name: 'ZINC',
                element_symbol: 'Zn',
                concentration: 0
            },
            {
                composition_id: 0,
                report_id: 0,
                element_name: 'NICKEL',
                element_symbol: 'Ni',
                concentration: 0
            },
            {
                composition_id: 0,
                report_id: 0,
                element_name: 'PALLADIUM',
                element_symbol: 'Pd',
                concentration: 0
            },
            {
                composition_id: 0,
                report_id: 0,
                element_name: 'CADMIUM',
                element_symbol: 'Cd',
                concentration: 0
            },
            {
                composition_id: 0,
                report_id: 0,
                element_name: 'IRIDIUM',
                element_symbol: 'Ir',
                concentration: 0
            },
            {
                composition_id: 0,
                report_id: 0,
                element_name: 'INDIUM',
                element_symbol: 'In',
                concentration: 0
            },
            {
                composition_id: 0,
                report_id: 0,
                element_name: 'RUTHENIUM',
                element_symbol: 'Ru',
                concentration: 0
            },
            {
                composition_id: 0,
                report_id: 0,
                element_name: 'RHODIUM',
                element_symbol: 'Rh',
                concentration: 0
            },
            {
                composition_id: 0,
                report_id: 0,
                element_name: 'TUNGSTEN',
                element_symbol: 'W',
                concentration: 0
            },
            {
                composition_id: 0,
                report_id: 0,
                element_name: 'TIN',
                element_symbol: 'Sn',
                concentration: 0
            },
            {
                composition_id: 0,
                report_id: 0,
                element_name: 'LEAD',
                element_symbol: 'Pb',
                concentration: 0
            },
            {
                composition_id: 0,
                report_id: 0,
                element_name: 'PLATINUM',
                element_symbol: 'Pt',
                concentration: 0
            }
        ]);
        setFormMode('add');
        setShowForm(true);
    };
    // Handle view report
    const handleViewReport = async (reportId)=>{
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No authentication token found');
            }
            const response = await fetch(`http://localhost:3002/assay-reports/${reportId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch report details: ${response.status}`);
            }
            const data = await response.json();
            // Ensure numeric fields are properly parsed
            const parsedData = {
                ...data,
                weight: parseFloat(data.weight) || 0,
                gold_percentage: parseFloat(data.gold_percentage) || 0,
                gold_concentration: parseFloat(data.gold_concentration) || 0,
                gold_carat: parseFloat(data.gold_carat) || 0
            };
            setCurrentReport(parsedData);
            setCertificateNo(parsedData.certificate_no);
            setReportDate(parsedData.report_date.split('T')[0]);
            setCustomerName(parsedData.customer_name || '');
            setWeight(parsedData.weight);
            setGoldPercentage(parsedData.gold_percentage);
            setGoldConcentration(parsedData.gold_concentration);
            setGoldCarat(parsedData.gold_carat);
            setSampleType(data.sample_type || '');
            setRemarks(data.remarks || '');
            setBranchId(data.branch_id);
            // If compositions are available, use them
            if (data.compositions && data.compositions.length > 0) {
                // Ensure concentration is properly parsed as a number
                const parsedCompositions = data.compositions.map((comp)=>({
                        ...comp,
                        concentration: typeof comp.concentration === 'number' ? comp.concentration : parseFloat(comp.concentration) || 0
                    }));
                setCompositions(parsedCompositions);
            } else {
                // Fetch compositions separately
                try {
                    const compResponse = await fetch(`http://localhost:3002/assay-reports/${reportId}/compositions`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    if (compResponse.ok) {
                        const compData = await compResponse.json();
                        // Ensure concentration is properly parsed as a number
                        const parsedCompData = compData.map((comp)=>({
                                ...comp,
                                concentration: typeof comp.concentration === 'number' ? comp.concentration : parseFloat(comp.concentration) || 0
                            }));
                        setCompositions(parsedCompData);
                    } else {
                        // If no compositions found, set default empty compositions
                        setCompositions([
                            {
                                composition_id: 0,
                                report_id: reportId,
                                element_name: 'SILVER',
                                element_symbol: 'Ag',
                                concentration: 0
                            },
                            {
                                composition_id: 0,
                                report_id: reportId,
                                element_name: 'COPPER',
                                element_symbol: 'Cu',
                                concentration: 0
                            },
                            {
                                composition_id: 0,
                                report_id: reportId,
                                element_name: 'ZINC',
                                element_symbol: 'Zn',
                                concentration: 0
                            },
                            {
                                composition_id: 0,
                                report_id: reportId,
                                element_name: 'NICKEL',
                                element_symbol: 'Ni',
                                concentration: 0
                            },
                            {
                                composition_id: 0,
                                report_id: reportId,
                                element_name: 'PALLADIUM',
                                element_symbol: 'Pd',
                                concentration: 0
                            },
                            {
                                composition_id: 0,
                                report_id: reportId,
                                element_name: 'CADMIUM',
                                element_symbol: 'Cd',
                                concentration: 0
                            },
                            {
                                composition_id: 0,
                                report_id: reportId,
                                element_name: 'IRIDIUM',
                                element_symbol: 'Ir',
                                concentration: 0
                            },
                            {
                                composition_id: 0,
                                report_id: reportId,
                                element_name: 'INDIUM',
                                element_symbol: 'In',
                                concentration: 0
                            },
                            {
                                composition_id: 0,
                                report_id: reportId,
                                element_name: 'RUTHENIUM',
                                element_symbol: 'Ru',
                                concentration: 0
                            },
                            {
                                composition_id: 0,
                                report_id: reportId,
                                element_name: 'RHODIUM',
                                element_symbol: 'Rh',
                                concentration: 0
                            },
                            {
                                composition_id: 0,
                                report_id: reportId,
                                element_name: 'TUNGSTEN',
                                element_symbol: 'W',
                                concentration: 0
                            },
                            {
                                composition_id: 0,
                                report_id: reportId,
                                element_name: 'TIN',
                                element_symbol: 'Sn',
                                concentration: 0
                            },
                            {
                                composition_id: 0,
                                report_id: reportId,
                                element_name: 'LEAD',
                                element_symbol: 'Pb',
                                concentration: 0
                            },
                            {
                                composition_id: 0,
                                report_id: reportId,
                                element_name: 'PLATINUM',
                                element_symbol: 'Pt',
                                concentration: 0
                            }
                        ]);
                    }
                } catch (err) {
                    console.error('Error fetching compositions:', err);
                    // If error, set default empty compositions
                    setCompositions([
                        {
                            composition_id: 0,
                            report_id: reportId,
                            element_name: 'SILVER',
                            element_symbol: 'Ag',
                            concentration: 0
                        },
                        {
                            composition_id: 0,
                            report_id: reportId,
                            element_name: 'COPPER',
                            element_symbol: 'Cu',
                            concentration: 0
                        },
                        {
                            composition_id: 0,
                            report_id: reportId,
                            element_name: 'ZINC',
                            element_symbol: 'Zn',
                            concentration: 0
                        },
                        {
                            composition_id: 0,
                            report_id: reportId,
                            element_name: 'NICKEL',
                            element_symbol: 'Ni',
                            concentration: 0
                        },
                        {
                            composition_id: 0,
                            report_id: reportId,
                            element_name: 'PALLADIUM',
                            element_symbol: 'Pd',
                            concentration: 0
                        },
                        {
                            composition_id: 0,
                            report_id: reportId,
                            element_name: 'CADMIUM',
                            element_symbol: 'Cd',
                            concentration: 0
                        },
                        {
                            composition_id: 0,
                            report_id: reportId,
                            element_name: 'IRIDIUM',
                            element_symbol: 'Ir',
                            concentration: 0
                        },
                        {
                            composition_id: 0,
                            report_id: reportId,
                            element_name: 'INDIUM',
                            element_symbol: 'In',
                            concentration: 0
                        },
                        {
                            composition_id: 0,
                            report_id: reportId,
                            element_name: 'RUTHENIUM',
                            element_symbol: 'Ru',
                            concentration: 0
                        },
                        {
                            composition_id: 0,
                            report_id: reportId,
                            element_name: 'RHODIUM',
                            element_symbol: 'Rh',
                            concentration: 0
                        },
                        {
                            composition_id: 0,
                            report_id: reportId,
                            element_name: 'TUNGSTEN',
                            element_symbol: 'W',
                            concentration: 0
                        },
                        {
                            composition_id: 0,
                            report_id: reportId,
                            element_name: 'TIN',
                            element_symbol: 'Sn',
                            concentration: 0
                        },
                        {
                            composition_id: 0,
                            report_id: reportId,
                            element_name: 'LEAD',
                            element_symbol: 'Pb',
                            concentration: 0
                        },
                        {
                            composition_id: 0,
                            report_id: reportId,
                            element_name: 'PLATINUM',
                            element_symbol: 'Pt',
                            concentration: 0
                        }
                    ]);
                }
            }
            // Set form mode to view (read-only)
            setFormMode('view');
            setShowForm(true);
        } catch (err) {
            console.error('Error fetching report details:', err);
            alert('Failed to load report details');
        } finally{
            setLoading(false);
        }
    };
    // Handle edit report
    const handleEditReport = async (reportId)=>{
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No authentication token found');
            }
            const response = await fetch(`http://localhost:3002/assay-reports/${reportId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch report details: ${response.status}`);
            }
            const data = await response.json();
            // Ensure numeric fields are properly parsed
            const parsedData = {
                ...data,
                weight: parseFloat(data.weight) || 0,
                gold_percentage: parseFloat(data.gold_percentage) || 0,
                gold_concentration: parseFloat(data.gold_concentration) || 0,
                gold_carat: parseFloat(data.gold_carat) || 0
            };
            setCurrentReport(parsedData);
            setCertificateNo(parsedData.certificate_no);
            setReportDate(parsedData.report_date.split('T')[0]);
            setCustomerName(parsedData.customer_name || '');
            setWeight(parsedData.weight);
            setGoldPercentage(parsedData.gold_percentage);
            setGoldConcentration(parsedData.gold_concentration);
            setGoldCarat(parsedData.gold_carat);
            setSampleType(data.sample_type || '');
            setRemarks(data.remarks || '');
            setBranchId(data.branch_id);
            // If compositions are available, use them
            if (data.compositions && data.compositions.length > 0) {
                setCompositions(data.compositions);
            } else {
                // Fetch compositions separately
                const compResponse = await fetch(`http://localhost:3002/assay-reports/${reportId}/compositions`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (compResponse.ok) {
                    const compData = await compResponse.json();
                    // Ensure concentration is properly parsed as a number
                    const parsedCompData = compData.map((comp)=>({
                            ...comp,
                            concentration: parseFloat(comp.concentration) || 0
                        }));
                    setCompositions(parsedCompData);
                }
            }
            setFormMode('edit');
            setShowForm(true);
        } catch (err) {
            console.error('Error fetching report details:', err);
            alert('Failed to load report details');
        } finally{
            setLoading(false);
        }
    };
    // Handle delete report
    const handleDeleteReport = async (reportId)=>{
        if (!window.confirm('Are you sure you want to delete this assay report?')) {
            return;
        }
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No authentication token found');
            }
            const response = await fetch(`http://localhost:3002/assay-reports/delete/${reportId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to delete report');
            }
            // Refresh the list
            let url = 'http://localhost:3002/assay-reports';
            if (userRole !== 'admin' && userBranchId) {
                url += `?branch_id=${userBranchId}`;
            }
            console.log('Refreshing assay reports from:', url);
            const refreshResponse = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (refreshResponse.ok) {
                const data = await refreshResponse.json();
                // Ensure numeric fields are properly parsed
                const parsedData = data.map((report)=>({
                        ...report,
                        weight: parseFloat(report.weight) || 0,
                        gold_percentage: parseFloat(report.gold_percentage) || 0,
                        gold_concentration: parseFloat(report.gold_concentration) || 0,
                        gold_carat: parseFloat(report.gold_carat) || 0
                    }));
                setAssayReports(parsedData);
            } else {
                // Fallback to client-side filtering if refresh fails
                setAssayReports(assayReports.filter((report)=>report.report_id !== reportId));
            }
            alert('Assay report deleted successfully');
        } catch (err) {
            console.error('Error deleting report:', err);
            alert('Failed to delete report');
        }
    };
    // Handle form submission
    const handleSubmitForm = async (e)=>{
        e.preventDefault();
        // Don't submit if in view mode
        if (formMode === 'view') {
            return;
        }
        // Validate form
        if (formMode === 'edit' && !certificateNo || !reportDate || weight <= 0 || goldPercentage <= 0 || goldCarat <= 0) {
            alert('Please fill all required fields with valid values');
            return;
        }
        const token = localStorage.getItem('token');
        if (!token) {
            alert('No authentication token found. Please log in again.');
            return;
        }
        // Ensure branch_id is properly set
        console.log('Submitting with branch_id:', branchId);
        // Make sure branch_id is set to a valid value
        let finalBranchId = branchId;
        if (!finalBranchId) {
            if (userRole !== 'admin') {
                finalBranchId = userBranchId;
            } else {
                finalBranchId = 2; // Default to Mahaoya Branch
            }
        }
        console.log('Final branch_id:', finalBranchId);
        const reportData = {
            ...formMode === 'edit' && {
                certificate_no: certificateNo
            },
            report_date: reportDate,
            customer_name: customerName,
            weight,
            gold_percentage: goldPercentage,
            gold_concentration: goldConcentration || goldPercentage,
            gold_carat: goldCarat,
            sample_type: sampleType,
            remarks,
            branch_id: finalBranchId,
            compositions: compositions.filter((comp)=>comp.concentration > 0),
            // Include jewellery item ID if selected
            item_id: selectedItemId,
            // Include metadata for linking
            is_homogeneous: isHomogeneous,
            has_solder: hasSolder,
            solder_quality: hasSolder ? solderQuality : null
        };
        console.log('Final report data:', reportData);
        console.log('Submitting assay report data:', reportData);
        try {
            let response;
            if (formMode === 'add') {
                // Create new report
                response = await fetch('http://localhost:3002/assay-reports/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(reportData)
                });
            } else {
                // Update existing report
                response = await fetch(`http://localhost:3002/assay-reports/update/${currentReport?.report_id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(reportData)
                });
            }
            if (!response.ok) {
                throw new Error(`Failed to ${formMode} report`);
            }
            // Refresh the list
            let url = 'http://localhost:3002/assay-reports';
            if (userRole !== 'admin' && userBranchId) {
                url += `?branch_id=${userBranchId}`;
            }
            console.log('Refreshing assay reports from:', url);
            const refreshResponse = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (refreshResponse.ok) {
                const data = await refreshResponse.json();
                // Ensure numeric fields are properly parsed
                const parsedData = data.map((report)=>({
                        ...report,
                        weight: parseFloat(report.weight) || 0,
                        gold_percentage: parseFloat(report.gold_percentage) || 0,
                        gold_concentration: parseFloat(report.gold_concentration) || 0,
                        gold_carat: parseFloat(report.gold_carat) || 0
                    }));
                setAssayReports(parsedData);
            }
            alert(`Assay report ${formMode === 'add' ? 'added' : 'updated'} successfully`);
            setShowForm(false);
        } catch (err) {
            console.error(`Error ${formMode === 'add' ? 'adding' : 'updating'} report:`, err);
            alert(`Failed to ${formMode} report`);
        }
    };
    // Handle composition change
    const handleCompositionChange = (index, value)=>{
        const updatedCompositions = [
            ...compositions
        ];
        updatedCompositions[index].concentration = value;
        setCompositions(updatedCompositions);
    };
    // Calculate total composition percentage
    const totalComposition = compositions && compositions.length > 0 ? compositions.reduce((sum, comp)=>{
        // Ensure concentration is a valid number
        const concentration = typeof comp.concentration === 'number' ? comp.concentration : parseFloat(comp.concentration) || 0;
        return sum + concentration;
    }, 0) : 0;
    // Handle PDF download
    const handleDownloadPDF = ()=>{
        // Create a simpler version of the report for PDF generation
        const pdfContent = `
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @page {
            size: A4;
            margin: 0;
          }
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            width: 210mm; /* A4 width */
            height: 297mm; /* A4 height */
            margin: 0 auto;
            line-height: 1.3;
            font-size: 12px;
            box-sizing: border-box;
          }
          h3 {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 15px;
          }
          .report-container {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
          }
          .header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            align-items: center;
          }
          .title {
            color: #D4AF37; /* Golden yellow color */
            padding: 10px 20px;
            font-size: 20px;
            font-weight: bold;
            text-align: left;
          }
          .subtitle {
            text-align: right;
          }
          .subtitle-main {
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 3px;
          }
          .subtitle-sub {
            font-size: 11px;
          }
          .info-section {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
          }
          .info-left, .info-right {
            width: 48%;
          }
          .info-right {
            text-align: right;
          }
          .info-item {
            margin-bottom: 8px;
          }
          .info-label {
            font-weight: bold;
          }
          .box {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 15px;
            margin-bottom: 15px;
          }
          .box-title {
            font-weight: bold;
            margin-bottom: 10px;
          }
          .composition-grid {
            width: 100%;
            margin-bottom: 15px;
            display: flex;
            justify-content: space-around;
            text-align: center;
          }
          .composition-column {
            flex: 1;
            padding: 5px;
          }
          .element-name {
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 3px;
          }
          .element-symbol {
            color: #555;
            display: block;
            margin-bottom: 3px;
          }
          .element-value {
            font-size: 14px;
          }
          .gold-summary {
            margin-top: 15px;
            border-top: 1px solid #ddd;
            padding-top: 10px;
            text-align: left;
          }
          .gold-value {
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 5px;
          }
        </style>
      </head>
      <body>
        <h3>ASSAY REPORT</h3>

        <div class="report-container">
          <div class="header">
            <div class="title">SLanka Jewellery</div>
            <div class="subtitle">
              <div class="subtitle-main">GOLD TESTING REPORT</div>
              <div class="subtitle-sub">Instant Gold Testing By Assay</div>
            </div>
          </div>

          <div class="info-section">
            <div class="info-left">
              <div class="info-item"><span class="info-label">Name:</span> ${customerName}</div>
              <div class="info-item"><span class="info-label">Weight:</span> ${weight.toFixed(3)}g</div>
              <div class="info-item"><span class="info-label">Gold %:</span> ${goldPercentage.toFixed(2)}</div>
            </div>
            <div class="info-right">
              <div class="info-item"><span class="info-label">Date:</span> ${reportDate}</div>
              <div class="info-item"><span class="info-label">Certificate No:</span> ${certificateNo}</div>
              <div class="info-item"><span class="info-label">Sample:</span> ${sampleType}</div>
            </div>
          </div>

          <div class="box">
            <div class="composition-grid">
              ${compositions.filter((comp)=>comp.concentration > 0).map((comp)=>`
                  <div class="composition-column">
                    <div class="element-name">${comp.element_name}</div>
                    <div class="element-symbol">${comp.element_symbol}</div>
                    <div class="element-value">${comp.concentration.toFixed(2)}</div>
                  </div>
                `).join('')}
            </div>

            <div class="gold-summary">
              <div class="gold-value">GOLD (Au): ${goldPercentage.toFixed(2)}%</div>
              <div class="gold-value">CARAT: ${goldCarat.toFixed(2)}K</div>
            </div>
          </div>

          <div class="box">
            <div class="box-title">DETAILS OF THE ARTICLE:</div>
            <div>${sampleType} - ${weight.toFixed(3)}g</div>
          </div>

          ${remarks ? `
            <div class="box">
              <div class="box-title">Remarks:</div>
              <div>${remarks}</div>
            </div>
          ` : ''}
        </div>
      </body>
      </html>
    `;
        // Create a temporary iframe to render the content
        const iframe = document.createElement('iframe');
        iframe.style.visibility = 'hidden';
        document.body.appendChild(iframe);
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
            iframeDoc.open();
            iframeDoc.write(pdfContent);
            iframeDoc.close();
            // Wait for content to load
            setTimeout(()=>{
                // @ts-ignore - TypeScript doesn't recognize the constructor parameters
                const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('p', 'mm', 'a4');
                // Use html2canvas on the iframe's body
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(iframeDoc.body).then((canvas)=>{
                    const imgData = canvas.toDataURL('image/png');
                    const imgWidth = 210; // A4 width in mm
                    const imgHeight = canvas.height * imgWidth / canvas.width;
                    // @ts-ignore - TypeScript doesn't recognize these parameters
                    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                    pdf.save(`Assay_Report_${certificateNo}.pdf`);
                    // Clean up
                    document.body.removeChild(iframe);
                });
            }, 500);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Assay Reports"
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                lineNumber: 1074,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                    lineNumber: 1078,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                lineNumber: 1077,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between mb-4 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search reports...",
                                        className: "pl-8 pr-4 py-2 border rounded-md",
                                        value: searchTerm,
                                        onChange: (e)=>setSearchTerm(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                        lineNumber: 1085,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-2 top-2.5 h-4 w-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                        lineNumber: 1092,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                lineNumber: 1084,
                                columnNumber: 11
                            }, this),
                            userRole && userRole.toLowerCase() === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "pl-8 pr-4 py-2 border rounded-md appearance-none",
                                        value: branchFilter,
                                        onChange: async (e)=>{
                                            const selectedBranchName = e.target.value;
                                            setBranchFilter(selectedBranchName);
                                            // If admin user, fetch data with branch filter
                                            if (userRole && userRole.toLowerCase() === 'admin' && isAuthenticated) {
                                                try {
                                                    setLoading(true);
                                                    const token = localStorage.getItem('token');
                                                    if (!token) {
                                                        throw new Error('No authentication token found');
                                                    }
                                                    // Construct URL with query parameters for branch filtering
                                                    let url = 'http://localhost:3002/assay-reports';
                                                    const params = new URLSearchParams();
                                                    // Only add branch filter if not 'All Branches'
                                                    if (selectedBranchName !== 'All Branches') {
                                                        // Find the branch_id for the selected branch name
                                                        const selectedBranch = branches.find((branch)=>branch.branch_name === selectedBranchName);
                                                        if (selectedBranch) {
                                                            params.append('branch_id', selectedBranch.branch_id.toString());
                                                            console.log('Setting branch ID from filter:', selectedBranch.branch_id);
                                                            setUserBranchId(selectedBranch.branch_id);
                                                        }
                                                    } else {
                                                        // Reset to user's original branch ID if selecting All Branches
                                                        const originalBranchId = localStorage.getItem('branchId');
                                                        setUserBranchId(originalBranchId ? parseInt(originalBranchId) : null);
                                                    }
                                                    if (params.toString()) {
                                                        url += `?${params.toString()}`;
                                                    }
                                                    console.log('Fetching assay reports with branch filter from:', url);
                                                    const response = await fetch(url, {
                                                        headers: {
                                                            'Authorization': `Bearer ${token}`
                                                        }
                                                    });
                                                    if (response.ok) {
                                                        const data = await response.json();
                                                        console.log('Fetched assay reports with branch filter:', data.length);
                                                        // Ensure numeric fields are properly parsed
                                                        const parsedData = data.map((report)=>({
                                                                ...report,
                                                                weight: parseFloat(report.weight) || 0,
                                                                gold_percentage: parseFloat(report.gold_percentage) || 0,
                                                                gold_concentration: parseFloat(report.gold_concentration) || 0,
                                                                gold_carat: parseFloat(report.gold_carat) || 0
                                                            }));
                                                        setAssayReports(parsedData);
                                                    }
                                                } catch (err) {
                                                    console.error('Error fetching assay reports with branch filter:', err);
                                                } finally{
                                                    setLoading(false);
                                                }
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "All Branches",
                                                children: "All Branches"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                lineNumber: 1168,
                                                columnNumber: 17
                                            }, this),
                                            branches.map((branch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: branch.branch_name,
                                                    children: branch.branch_name
                                                }, branch.branch_id, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1170,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                        lineNumber: 1098,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "absolute left-2 top-2.5 h-4 w-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                        lineNumber: 1175,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                lineNumber: 1097,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                        lineNumber: 1083,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex items-center gap-1 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600",
                            onClick: handleAddNewReport,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                    lineNumber: 1185,
                                    columnNumber: 13
                                }, this),
                                "Add New Report"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                            lineNumber: 1181,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                        lineNumber: 1180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                lineNumber: 1082,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                    lineNumber: 1193,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                lineNumber: 1192,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: filteredReports.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-100 p-4 rounded-md text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No assay reports found."
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                        lineNumber: 1199,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                    lineNumber: 1198,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "min-w-full bg-white border border-gray-200 rounded-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "bg-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 px-4 border-b text-left",
                                            children: "Certificate No"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1206,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 px-4 border-b text-left",
                                            children: "Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1207,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 px-4 border-b text-left",
                                            children: "Customer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1208,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 px-4 border-b text-left",
                                            children: "Sample Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1209,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 px-4 border-b text-left",
                                            children: "Weight (g)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1210,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 px-4 border-b text-left",
                                            children: "Gold %"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1211,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 px-4 border-b text-left",
                                            children: "Carat"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1212,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 px-4 border-b text-left",
                                            children: "Branch"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1213,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 px-4 border-b text-left",
                                            children: "Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1214,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                    lineNumber: 1205,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                lineNumber: 1204,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: filteredReports.map((report)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-gray-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2 px-4 border-b",
                                                children: report.certificate_no
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                lineNumber: 1220,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2 px-4 border-b",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(report.report_date)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                lineNumber: 1221,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2 px-4 border-b",
                                                children: report.customer_name || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                lineNumber: 1222,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2 px-4 border-b",
                                                children: report.sample_type || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                lineNumber: 1223,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2 px-4 border-b",
                                                children: typeof report.weight === 'number' ? report.weight.toFixed(3) : (parseFloat(report.weight) || 0).toFixed(3)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                lineNumber: 1224,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2 px-4 border-b",
                                                children: [
                                                    typeof report.gold_percentage === 'number' ? report.gold_percentage.toFixed(2) : (parseFloat(report.gold_percentage) || 0).toFixed(2),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                lineNumber: 1225,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2 px-4 border-b",
                                                children: [
                                                    typeof report.gold_carat === 'number' ? report.gold_carat.toFixed(2) : (parseFloat(report.gold_carat) || 0).toFixed(2),
                                                    "K"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                lineNumber: 1226,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2 px-4 border-b",
                                                children: report.branch_name || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                lineNumber: 1227,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2 px-4 border-b",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "text-green-500 hover:text-green-700",
                                                            onClick: ()=>handleViewReport(report.report_id),
                                                            title: "View Details",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                                lineNumber: 1235,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1230,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "text-blue-500 hover:text-blue-700",
                                                            onClick: ()=>handleEditReport(report.report_id),
                                                            title: "Edit",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                                lineNumber: 1242,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1237,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "text-red-500 hover:text-red-700",
                                                            onClick: ()=>handleDeleteReport(report.report_id),
                                                            title: "Delete",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                                lineNumber: 1249,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1244,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1229,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                lineNumber: 1228,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, report.report_id, true, {
                                        fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                        lineNumber: 1219,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                lineNumber: 1217,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                        lineNumber: 1203,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                    lineNumber: 1202,
                    columnNumber: 13
                }, this)
            }, void 0, false),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-4",
                            children: formMode === 'add' ? 'Add New Assay Report' : formMode === 'edit' ? 'Edit Assay Report' : 'ASSAY REPORT'
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                            lineNumber: 1266,
                            columnNumber: 13
                        }, this),
                        formMode === 'view' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "assay-report-view",
                            className: "bg-white p-6 rounded-lg border border-gray-300 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold mb-4",
                                    children: "ASSAY REPORT"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                    lineNumber: 1272,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-gray-200 rounded-lg p-6 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[#D4AF37] py-3 px-6 text-2xl font-bold",
                                                    children: "SLanka Jewellery"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1276,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-lg",
                                                            children: "GOLD TESTING REPORT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1280,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm",
                                                            children: "Instant Gold Testing By Assay"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1281,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1279,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1275,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-6 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: "Name:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                                    lineNumber: 1287,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " ",
                                                                customerName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1287,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: "Weight:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                                    lineNumber: 1288,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " ",
                                                                weight.toFixed(3),
                                                                "g"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1288,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: "Gold %:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                                    lineNumber: 1289,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " ",
                                                                goldPercentage.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1289,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1286,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: "Date:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                                    lineNumber: 1292,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " ",
                                                                reportDate
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1292,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: "Certificate No:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                                    lineNumber: 1293,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " ",
                                                                certificateNo
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1293,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: "Sample:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                                    lineNumber: 1294,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " ",
                                                                sampleType
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1294,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1291,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1285,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-gray-200 rounded-md p-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-around text-center",
                                                    children: compositions.filter((comp)=>comp.concentration > 0).map((comp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-bold text-base",
                                                                    children: comp.element_name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                                    lineNumber: 1302,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-600",
                                                                    children: comp.element_symbol
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                                    lineNumber: 1303,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-base",
                                                                    children: comp.concentration.toFixed(2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                                    lineNumber: 1304,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1301,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1299,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 pt-4 border-t border-gray-200 text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-lg",
                                                            children: [
                                                                "GOLD (Au): ",
                                                                goldPercentage.toFixed(2),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1310,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-lg",
                                                            children: [
                                                                "CARAT: ",
                                                                goldCarat.toFixed(2),
                                                                "K"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1311,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1309,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1298,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-gray-200 rounded-md p-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold mb-2",
                                                    children: "DETAILS OF THE ARTICLE:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1316,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        sampleType,
                                                        " - ",
                                                        weight.toFixed(3),
                                                        "g"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1317,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1315,
                                            columnNumber: 19
                                        }, this),
                                        remarks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-gray-200 rounded-md p-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold mb-2",
                                                    children: "Remarks:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1322,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: remarks
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1323,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1321,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                    lineNumber: 1274,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "px-4 py-2 bg-[#3b82f6] text-white rounded-md hover:bg-[#2563eb]",
                                            onClick: ()=>handleDownloadPDF(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "h-4 w-4 inline mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1334,
                                                    columnNumber: 21
                                                }, this),
                                                " Download PDF"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1329,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "px-4 py-2 border rounded-md hover:bg-gray-100",
                                            onClick: ()=>setShowForm(false),
                                            children: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1336,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                    lineNumber: 1328,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                            lineNumber: 1271,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmitForm,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
                                    children: [
                                        formMode === 'add' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: "Select Jewellery Item"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1351,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "w-full p-2 border rounded-md",
                                                            value: selectedItemId || '',
                                                            onChange: (e)=>handleItemSelection(e.target.value ? parseInt(e.target.value) : null),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "-- Select an item --"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                                    lineNumber: 1360,
                                                                    columnNumber: 25
                                                                }, this),
                                                                jewelleryItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: item.item_id,
                                                                        children: [
                                                                            item.product_title,
                                                                            " - ",
                                                                            item.category,
                                                                            " ",
                                                                            item.weight ? `(${item.weight}g)` : ''
                                                                        ]
                                                                    }, item.item_id, true, {
                                                                        fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                                        lineNumber: 1362,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1355,
                                                            columnNumber: 23
                                                        }, this),
                                                        loadingItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                                lineNumber: 1369,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1368,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1354,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Selecting an item will auto-populate weight, carat, and other details"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1373,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1350,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: [
                                                        "Certificate No ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1381,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1380,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    className: "w-full p-2 border rounded-md bg-gray-100",
                                                    value: formMode === 'add' ? 'Will be generated automatically (AC-X)' : certificateNo,
                                                    onChange: (e)=>setCertificateNo(e.target.value),
                                                    disabled: formMode === 'add' || formMode === 'view',
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1383,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1379,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: [
                                                        "Report Date ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1395,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1394,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    className: "w-full p-2 border rounded-md",
                                                    value: reportDate,
                                                    onChange: (e)=>setReportDate(e.target.value),
                                                    disabled: formMode === 'view',
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1397,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1393,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: "Customer Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1408,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    className: "w-full p-2 border rounded-md",
                                                    value: customerName,
                                                    onChange: (e)=>setCustomerName(e.target.value),
                                                    disabled: formMode === 'view'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1411,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1407,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: "Sample Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1421,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    className: "w-full p-2 border rounded-md",
                                                    value: sampleType,
                                                    onChange: (e)=>setSampleType(e.target.value),
                                                    disabled: formMode === 'view',
                                                    placeholder: "e.g., BRACELET, NECKLACE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1424,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1420,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: [
                                                        "Weight (g) ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1436,
                                                            columnNumber: 32
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1435,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "0.001",
                                                    className: "w-full p-2 border rounded-md",
                                                    value: weight,
                                                    onChange: (e)=>setWeight(parseFloat(e.target.value)),
                                                    disabled: formMode === 'view',
                                                    required: true,
                                                    min: "0.001"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1438,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1434,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: [
                                                        "Gold Percentage (%) ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1452,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1451,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "0.01",
                                                    className: "w-full p-2 border rounded-md",
                                                    value: goldPercentage,
                                                    onChange: (e)=>setGoldPercentage(parseFloat(e.target.value)),
                                                    disabled: formMode === 'view',
                                                    required: true,
                                                    min: "0.01",
                                                    max: "100"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1454,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1450,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: "Gold Concentration (%)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1468,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "0.01",
                                                    className: "w-full p-2 border rounded-md",
                                                    value: goldConcentration,
                                                    onChange: (e)=>setGoldConcentration(parseFloat(e.target.value)),
                                                    disabled: formMode === 'view',
                                                    min: "0",
                                                    max: "100",
                                                    placeholder: "Same as Gold Percentage if not specified"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1471,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1467,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: [
                                                        "Gold Carat (K) ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1486,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1485,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "0.01",
                                                    className: "w-full p-2 border rounded-md",
                                                    value: goldCarat,
                                                    onChange: (e)=>setGoldCarat(parseFloat(e.target.value)),
                                                    disabled: formMode === 'view',
                                                    required: true,
                                                    min: "0.01",
                                                    max: "24"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1488,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1484,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: "Branch"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1502,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "w-full p-2 border rounded-md",
                                                    value: branchId || '',
                                                    onChange: (e)=>setBranchId(e.target.value ? parseInt(e.target.value) : null),
                                                    disabled: userRole !== 'admin' || formMode === 'view',
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select Branch"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1511,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "1",
                                                            children: "Mahiyanganaya Branch"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1512,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "2",
                                                            children: "Mahaoya Branch"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1513,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1505,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1501,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: "Remarks"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1518,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    className: "w-full p-2 border rounded-md",
                                                    value: remarks,
                                                    onChange: (e)=>setRemarks(e.target.value),
                                                    disabled: formMode === 'view',
                                                    rows: 3
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1521,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1517,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                    lineNumber: 1348,
                                    columnNumber: 15
                                }, this),
                                selectedItemId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2 border-t pt-4 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-medium mb-2",
                                            children: "Item Metadata"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1534,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            id: "is_homogeneous",
                                                            className: "mr-2 h-4 w-4",
                                                            checked: isHomogeneous,
                                                            onChange: (e)=>setIsHomogeneous(e.target.checked),
                                                            disabled: formMode === 'view'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1537,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "is_homogeneous",
                                                            className: "text-sm font-medium",
                                                            children: "Is Homogeneous"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1545,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1536,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            id: "has_solder",
                                                            className: "mr-2 h-4 w-4",
                                                            checked: hasSolder,
                                                            onChange: (e)=>setHasSolder(e.target.checked),
                                                            disabled: formMode === 'view'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1551,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "has_solder",
                                                            className: "text-sm font-medium",
                                                            children: "Has Solder"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1559,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1550,
                                                    columnNumber: 21
                                                }, this),
                                                hasSolder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-1",
                                                            children: "Solder Quality"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1566,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: "w-full p-2 border rounded-md",
                                                            value: solderQuality,
                                                            onChange: (e)=>setSolderQuality(e.target.value),
                                                            disabled: formMode === 'view',
                                                            placeholder: "e.g., Good, Fair, Poor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1569,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1565,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1535,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                    lineNumber: 1533,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 md:col-span-2 border-t pt-4 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-medium mb-2",
                                            children: "Metal Composition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1584,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mb-2",
                                            children: [
                                                "Enter the percentage concentration of each metal element. Total: ",
                                                typeof totalComposition === 'number' ? totalComposition.toFixed(2) : '0.00',
                                                "%",
                                                typeof totalComposition === 'number' && totalComposition > 100 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500 ml-2",
                                                    children: "Total exceeds 100%!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1588,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1585,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                            children: compositions.map((comp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-1",
                                                            children: [
                                                                comp.element_name,
                                                                " (",
                                                                comp.element_symbol,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1595,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            step: "0.01",
                                                            className: "w-full p-2 border rounded-md",
                                                            value: comp.concentration,
                                                            onChange: (e)=>handleCompositionChange(index, parseFloat(e.target.value) || 0),
                                                            disabled: formMode === 'view',
                                                            min: "0",
                                                            max: "100"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                            lineNumber: 1598,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                    lineNumber: 1594,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                            lineNumber: 1592,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                    lineNumber: 1583,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2",
                                    children: formMode === 'view' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "px-4 py-2 border rounded-md hover:bg-gray-100",
                                        onClick: ()=>setShowForm(false),
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                        lineNumber: 1615,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "px-4 py-2 border rounded-md hover:bg-gray-100",
                                                onClick: ()=>setShowForm(false),
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                lineNumber: 1624,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600",
                                                children: formMode === 'add' ? 'Add Report' : 'Update Report'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                                lineNumber: 1631,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                                    lineNumber: 1613,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                            lineNumber: 1346,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                    lineNumber: 1265,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
                lineNumber: 1264,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/DashView/assay-reports/page.tsx",
        lineNumber: 1073,
        columnNumber: 5
    }, this);
};
_s(AssayReportsPage, "ImVOsed1WPwcH1Lxj4l5J9v563I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AssayReportsPage;
const __TURBOPACK__default__export__ = AssayReportsPage;
var _c;
__turbopack_context__.k.register(_c, "AssayReportsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_1c5536ef._.js.map