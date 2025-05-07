(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_9a62da39._.js", {

"[project]/src/contexts/AuthContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
// Create the auth context
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = ({ children })=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Check if the user is authenticated
    const isAuthenticated = !!user;
    // Initialize auth state from localStorage on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const initAuth = {
                "AuthProvider.useEffect.initAuth": ()=>{
                    try {
                        const storedUser = localStorage.getItem('user');
                        const storedToken = localStorage.getItem('token');
                        if (storedUser && storedToken) {
                            setUser(JSON.parse(storedUser));
                        }
                    } catch (error) {
                        console.error('Error initializing auth:', error);
                        // Clear potentially corrupted data
                        localStorage.removeItem('user');
                        localStorage.removeItem('token');
                        localStorage.removeItem('role');
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["AuthProvider.useEffect.initAuth"];
            initAuth();
        }
    }["AuthProvider.useEffect"], []);
    // Redirect unauthenticated users away from protected routes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            // IMPORTANT: We're completely disabling any redirects for the login page
            // This ensures users can stay on the login page to enter their credentials
            // Only apply redirects for protected routes, not for the login page
            if (!isLoading && pathname !== '/login') {
                const isLandingPage = pathname === '/';
                const isPublicPage = isLandingPage || pathname === '/unauthorized';
                if (!isAuthenticated && !isPublicPage) {
                    // Redirect to login if not authenticated and not on a public page
                    router.push('/login');
                }
            // Don't redirect from landing page even if authenticated
            // This allows users to see the landing page and choose to go to login
            }
        }
    }["AuthProvider.useEffect"], [
        isAuthenticated,
        isLoading,
        pathname,
        router
    ]);
    // Redirect to the appropriate dashboard based on user role
    const redirectToDashboard = ()=>{
        if (!user) return;
        // Add a small delay to ensure the user state is properly set
        setTimeout(()=>{
            switch(user.role.toLowerCase()){
                case 'admin':
                    window.location.href = '/DashView/admin';
                    break;
                case 'store manager':
                    window.location.href = '/DashView/storeManager';
                    break;
                case 'sales associate':
                    window.location.href = '/DashView/salesAssociate';
                    break;
                case 'cashier':
                    window.location.href = '/DashView/cashier';
                    break;
                default:
                    window.location.href = '/DashView/user';
            }
        }, 100);
    };
    // Login function
    const login = async (email, password)=>{
        setIsLoading(true);
        try {
            // For testing purposes, let's add a simple mock login
            // This will allow us to test the authentication flow without a backend
            // You can remove this and use the real login endpoints when ready
            if (email === 'admin@test.com' && password === 'admin123') {
                const userData = {
                    id: 1,
                    email: email,
                    role: 'Admin',
                    name: 'Admin User'
                };
                // Store auth data
                localStorage.setItem('user', JSON.stringify(userData));
                localStorage.setItem('token', 'mock-token-admin');
                localStorage.setItem('role', userData.role);
                // Update state
                setUser(userData);
                setIsLoading(false);
                // Redirect to appropriate dashboard
                redirectToDashboard();
                return true;
            }
            if (email === 'manager@test.com' && password === 'manager123') {
                const userData = {
                    id: 2,
                    email: email,
                    role: 'Store Manager',
                    branch_id: 1,
                    branch_name: 'Mahiyanganaya Branch',
                    name: 'Store Manager'
                };
                // Store auth data
                localStorage.setItem('user', JSON.stringify(userData));
                localStorage.setItem('token', 'mock-token-manager');
                localStorage.setItem('role', userData.role);
                // Update state
                setUser(userData);
                setIsLoading(false);
                // Redirect to appropriate dashboard
                redirectToDashboard();
                return true;
            }
            // Try real login endpoints if mock login fails
            // First try admin login, then employee login
            let loginSuccess = false;
            // Try admin login first
            try {
                const adminResponse = await fetch('http://localhost:3002/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                });
                const adminData = await adminResponse.json();
                if (adminResponse.ok && adminData.loginStatus) {
                    // Extract user data from response
                    const userData = {
                        id: adminData.id || 0,
                        email: email,
                        role: 'Admin',
                        name: 'Administrator'
                    };
                    // Store auth data
                    localStorage.setItem('userInfo', JSON.stringify(userData));
                    localStorage.setItem('token', adminData.token || 'admin-token');
                    localStorage.setItem('role', userData.role);
                    // Update state
                    setUser(userData);
                    setIsLoading(false);
                    // Redirect to admin dashboard
                    window.location.href = '/DashView/admin';
                    return true;
                }
            } catch (adminError) {
                console.error('Admin login error:', adminError);
            }
            // If admin login fails, try employee login
            const loginEndpoint = 'http://localhost:3002/users/userlogin';
            const response = await fetch(loginEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await response.json();
            if (response.ok && data.loginStatus) {
                console.log("Employee login successful with role:", data.role);
                // Store individual items first for backward compatibility
                if (data.userName) {
                    localStorage.setItem("userName", data.userName);
                }
                if (data.userId) {
                    localStorage.setItem("userId", data.userId.toString());
                }
                if (data.branchName) {
                    localStorage.setItem("branchName", data.branchName);
                }
                if (data.branchId) {
                    localStorage.setItem("branchId", data.branchId.toString());
                }
                // For Store Managers, set a hardcoded branch name based on branch ID if not provided
                if (data.role === "Store Manager" && data.branchId && !data.branchName) {
                    const branchId = data.branchId;
                    let branchName = "";
                    if (branchId === 1) {
                        branchName = "Mahiyanganaya Branch";
                    } else if (branchId === 2) {
                        branchName = "Mahaoya Branch";
                    } else {
                        branchName = `Branch ${branchId}`;
                    }
                    localStorage.setItem("branchName", branchName);
                }
                // Extract user data from response
                const userData = {
                    id: data.userId || 0,
                    email: email,
                    role: data.role || 'Guest',
                    branch_id: data.branchId,
                    branch_name: data.branchName || localStorage.getItem("branchName") || '',
                    name: data.userName || email.split('@')[0]
                };
                // Store auth data
                localStorage.setItem('userInfo', JSON.stringify(userData));
                localStorage.setItem('token', data.accessToken || 'dummy-token');
                localStorage.setItem('role', userData.role);
                // Update state
                setUser(userData);
                setIsLoading(false);
                // Special handling for Admin users coming from employee login
                if (data.role.toLowerCase() === 'admin') {
                    window.location.href = '/DashView/admin';
                    return true;
                }
                // Redirect to appropriate dashboard for other roles
                redirectToDashboard();
                return true;
            } else {
                console.error('Login failed:', data.Error || 'Unknown error');
                setIsLoading(false);
                return false;
            }
        } catch (error) {
            console.error('Login error:', error);
            setIsLoading(false);
            return false;
        }
    };
    // Logout function
    const logout = ()=>{
        // Clear all auth data
        localStorage.removeItem('userInfo');
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('userName');
        localStorage.removeItem('userId');
        localStorage.removeItem('branchName');
        localStorage.removeItem('branchId');
        // For backward compatibility
        localStorage.removeItem('user');
        // Update state
        setUser(null);
        // Redirect to login
        window.location.href = '/login';
    };
    // Check if the user has access to a route based on their role
    const checkAccess = (allowedRoles)=>{
        if (!user) return false;
        return allowedRoles.some((role)=>user.role.toLowerCase() === role.toLowerCase());
    };
    // Context value
    const value = {
        user,
        isLoading,
        isAuthenticated,
        login,
        logout,
        checkAccess
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/AuthContext.tsx",
        lineNumber: 336,
        columnNumber: 5
    }, this);
};
_s(AuthProvider, "SWJuhWhWQgul5IsZEWEhril+390=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AuthProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AuthProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AuthContext.tsx [app-client] (ecmascript)");
"use client";
;
;
function AuthProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/AuthProvider.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": (()=>LanguageProvider),
    "t": (()=>t),
    "useLanguage": (()=>useLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
// Create the context with default values
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    language: 'en',
    setLanguage: ()=>{},
    translations: {}
});
// English translations
const enTranslations = {
    // Common
    'app.name': 'S Lanka Jewellery',
    'language.english': 'English',
    'language.tamil': 'Tamil',
    'language': 'Language',
    // Menu items
    'menu.menu': 'MENU',
    'menu.other': 'OTHER',
    'menu.home': 'Home',
    'menu.storeManagers': 'Store Managers',
    'menu.salesAssociates': 'Sales Associates',
    'menu.cashiers': 'Cashiers',
    'menu.suppliers': 'Suppliers',
    'menu.supplierDetails': 'Supplier Details',
    'menu.orders': 'Orders',
    'menu.customOrders': 'Custom Orders',
    'menu.jewelleryItems': 'Jewellery Items',
    'menu.jewelleryStock': 'Jewellery Stock',
    'menu.goldStock': 'Gold Stock',
    'menu.categories': 'Categories',
    'menu.sales': 'Sales',
    'menu.salesReport': 'Sales Report',
    'menu.advancePayment': 'Advance Payment',
    'menu.finance': 'Finance',
    'menu.events': 'Events',
    'menu.profile': 'Profile',
    'menu.settings': 'Settings',
    'menu.logout': 'Logout',
    'menu.reports': 'Reports',
    'menu.notifications': 'Notifications',
    // Actions
    'action.add': 'Add',
    'action.edit': 'Edit',
    'action.delete': 'Delete',
    'action.view': 'View',
    'action.save': 'Save',
    'action.cancel': 'Cancel',
    'action.confirm': 'Confirm',
    // Form labels
    'form.name': 'Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.address': 'Address',
    'form.password': 'Password',
    'form.confirmPassword': 'Confirm Password',
    // Dashboard
    'dashboard.welcome': 'Welcome',
    'dashboard.recentSales': 'Recent Sales',
    'dashboard.todayRevenue': 'Today\'s Revenue',
    'dashboard.monthlyRevenue': 'Monthly Revenue',
    'dashboard.employees': 'Employees',
    'dashboard.attendance': 'Attendance',
    'dashboard.announcements': 'Announcements',
    'dashboard.viewAll': 'View All',
    'dashboard.noSalesFound': 'No sales found for this date',
    'dashboard.sale': 'Sales',
    'dashboard.jewelleryitem': 'Jewellery Items',
    'dashboard.storemanager': 'Store Managers',
    'dashboard.cashier': 'Cashiers',
    'dashboard.salesassociate': 'Sales Associates',
    'dashboard.todaystransactions': 'Today\'s Transactions',
    'dashboard.totalsales': 'Total Sales',
    'dashboard.cashbalance': 'Cash Balance',
    'dashboard.goldprice': 'Gold Price',
    'dashboard.todayssales': 'Today\'s Sales',
    'dashboard.customersserved': 'Customers Served',
    'dashboard.topcategory': 'Top Category',
    // Calendar
    'calendar.mon': 'MON',
    'calendar.tue': 'TUE',
    'calendar.wed': 'WED',
    'calendar.thu': 'THU',
    'calendar.fri': 'FRI',
    'calendar.sat': 'SAT',
    'calendar.sun': 'SUN'
};
// Tamil translations
const taTranslations = {
    // Common
    'app.name': 'எஸ் லங்கா நகைகள்',
    'language.english': 'ஆங்கிலம்',
    'language.tamil': 'தமிழ்',
    'language': 'மொழி',
    // Menu items
    'menu.menu': 'பட்டி',
    'menu.other': 'மற்றவை',
    'menu.home': 'முகப்பு',
    'menu.storeManagers': 'கடை மேலாளர்கள்',
    'menu.salesAssociates': 'விற்பனை சகாக்கள்',
    'menu.cashiers': 'காசாளர்கள்',
    'menu.suppliers': 'விநியோகஸ்தர்கள்',
    'menu.supplierDetails': 'விநியோகஸ்தர் விவரங்கள்',
    'menu.orders': 'ஆர்டர்கள்',
    'menu.customOrders': 'தனிப்பயன் ஆர்டர்கள்',
    'menu.jewelleryItems': 'நகை பொருட்கள்',
    'menu.jewelleryStock': 'நகை இருப்பு',
    'menu.goldStock': 'தங்க இருப்பு',
    'menu.categories': 'வகைகள்',
    'menu.sales': 'விற்பனைகள்',
    'menu.salesReport': 'விற்பனை அறிக்கை',
    'menu.advancePayment': 'முன்பணம்',
    'menu.finance': 'நிதி',
    'menu.events': 'நிகழ்வுகள்',
    'menu.profile': 'சுயவிவரம்',
    'menu.settings': 'அமைப்புகள்',
    'menu.logout': 'வெளியேறு',
    'menu.reports': 'அறிக்கைகள்',
    'menu.notifications': 'அறிவிப்புகள்',
    // Actions
    'action.add': 'சேர்க்க',
    'action.edit': 'திருத்த',
    'action.delete': 'நீக்க',
    'action.view': 'பார்க்க',
    'action.save': 'சேமிக்க',
    'action.cancel': 'ரத்து செய்ய',
    'action.confirm': 'உறுதிப்படுத்த',
    // Form labels
    'form.name': 'பெயர்',
    'form.email': 'மின்னஞ்சல்',
    'form.phone': 'தொலைபேசி',
    'form.address': 'முகவரி',
    'form.password': 'கடவுச்சொல்',
    'form.confirmPassword': 'கடவுச்சொல்லை உறுதிப்படுத்துக',
    // Dashboard
    'dashboard.welcome': 'வரவேற்கிறோம்',
    'dashboard.recentSales': 'சமீபத்திய விற்பனைகள்',
    'dashboard.todayRevenue': 'இன்றைய வருவாய்',
    'dashboard.monthlyRevenue': 'மாதாந்திர வருவாய்',
    'dashboard.employees': 'ஊழியர்கள்',
    'dashboard.attendance': 'வருகைப்பதிவு',
    'dashboard.announcements': 'அறிவிப்புகள்',
    'dashboard.viewAll': 'அனைத்தையும் காண்க',
    'dashboard.noSalesFound': 'இந்த தேதிக்கு விற்பனைகள் எதுவும் இல்லை',
    'dashboard.sale': 'விற்பனைகள்',
    'dashboard.jewelleryitem': 'நகை பொருட்கள்',
    'dashboard.storemanager': 'கடை மேலாளர்கள்',
    'dashboard.cashier': 'காசாளர்கள்',
    'dashboard.salesassociate': 'விற்பனை சகாக்கள்',
    'dashboard.todaystransactions': 'இன்றைய பரிவர்த்தனைகள்',
    'dashboard.totalsales': 'மொத்த விற்பனை',
    'dashboard.cashbalance': 'பண இருப்பு',
    'dashboard.goldprice': 'தங்க விலை',
    'dashboard.todayssales': 'இன்றைய விற்பனைகள்',
    'dashboard.customersserved': 'சேவை செய்யப்பட்ட வாடிக்கையாளர்கள்',
    'dashboard.topcategory': 'சிறந்த வகை',
    // Calendar
    'calendar.mon': 'திங்',
    'calendar.tue': 'செவ்',
    'calendar.wed': 'புத',
    'calendar.thu': 'வியா',
    'calendar.fri': 'வெள்',
    'calendar.sat': 'சனி',
    'calendar.sun': 'ஞாயி'
};
// Map of languages to their translations
const translationMap = {
    en: enTranslations,
    ta: taTranslations
};
const LanguageProvider = ({ children })=>{
    _s();
    // Initialize with English or the stored preference
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const [translations, setTranslations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(enTranslations);
    // Load saved language preference on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            const savedLanguage = localStorage.getItem('language');
            if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ta')) {
                setLanguage(savedLanguage);
                setTranslations(translationMap[savedLanguage]);
            }
        }
    }["LanguageProvider.useEffect"], []);
    // Update translations when language changes
    const handleSetLanguage = (lang)=>{
        setLanguage(lang);
        setTranslations(translationMap[lang]);
        localStorage.setItem('language', lang);
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage: handleSetLanguage,
            translations
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/LanguageContext.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
};
_s(LanguageProvider, "xPh/3WCTPKY7LVqoiKMRrUL1CUs=");
_c = LanguageProvider;
const useLanguage = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
};
_s1(useLanguage, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const t = (key, context)=>{
    if (context) {
        const translation = context.translations[key];
        if (translation) {
            return translation;
        }
        return key;
    }
    // If used outside of context, try to get from the hook
    try {
        const { translations } = useLanguage();
        const translation = translations[key];
        if (translation) {
            return translation;
        }
        return key;
    } catch (error) {
        // Fallback to the key itself if context is not available
        return key;
    }
};
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/client-layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// client-layout.tsx
__turbopack_context__.s({
    "default": (()=>ClientLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
'use client'; // Ensure this is a client-side component
;
;
;
function ClientLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/client-layout.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/client-layout.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ClientLayout;
var _c;
__turbopack_context__.k.register(_c, "ClientLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray;
    new ("function" === typeof WeakMap ? WeakMap : Map)();
    var createTask = console.createTask ? console.createTask : function() {
        return null;
    }, specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, Error("react-stack-top-frame"), createTask(getTaskName(type)));
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_9a62da39._.js.map