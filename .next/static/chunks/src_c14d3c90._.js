(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_c14d3c90._.js", {

"[project]/src/services/reportService.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "exportReportCSV": (()=>exportReportCSV),
    "exportReportPDF": (()=>exportReportPDF),
    "getCurrentStockReport": (()=>getCurrentStockReport),
    "getCustomReport": (()=>getCustomReport),
    "getCustomerReport": (()=>getCustomerReport),
    "getFinancialReport": (()=>getFinancialReport),
    "getGoldStockReport": (()=>getGoldStockReport),
    "getInventoryReport": (()=>getInventoryReport),
    "getInventoryValuationReport": (()=>getInventoryValuationReport),
    "getLowStockReport": (()=>getLowStockReport),
    "getSalesReport": (()=>getSalesReport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';
// Create axios instance with auth header
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: `${API_URL}/api/reports`
});
// Add request interceptor to include auth token
axiosInstance.interceptors.request.use((config)=>{
    // Try to get token from localStorage
    let token = localStorage.getItem('token');
    // If token not found in localStorage, try to get it from userInfo
    if (!token) {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            try {
                const parsedUserInfo = JSON.parse(userInfo);
                token = parsedUserInfo.token;
            } catch (e) {
                console.error('Error parsing userInfo:', e);
            }
        }
    }
    // If token found, add it to headers
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    } else {
        console.warn('No authentication token found for API request');
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
const getSalesReport = async (params = {})=>{
    try {
        const response = await axiosInstance.get('/sales', {
            params
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching sales report:', error);
        throw error;
    }
};
const getInventoryReport = async (params = {})=>{
    try {
        const response = await axiosInstance.get('/inventory', {
            params
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching inventory report:', error);
        throw error;
    }
};
const getCurrentStockReport = async (params = {})=>{
    try {
        const response = await axiosInstance.get('/inventory/current-stock', {
            params
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching current stock report:', error);
        throw error;
    }
};
const getGoldStockReport = async (params = {})=>{
    try {
        const response = await axiosInstance.get('/inventory/gold-stock', {
            params
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching gold stock report:', error);
        throw error;
    }
};
const getLowStockReport = async (params = {})=>{
    try {
        const response = await axiosInstance.get('/inventory/low-stock', {
            params
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching low stock report:', error);
        throw error;
    }
};
const getInventoryValuationReport = async (params = {})=>{
    try {
        const response = await axiosInstance.get('/inventory/valuation', {
            params
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching inventory valuation report:', error);
        throw error;
    }
};
const getCustomerReport = async (params = {})=>{
    try {
        const response = await axiosInstance.get('/customers', {
            params
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching customer report:', error);
        throw error;
    }
};
const getFinancialReport = async (params = {})=>{
    try {
        const response = await axiosInstance.get('/financial', {
            params
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching financial report:', error);
        throw error;
    }
};
const exportReportCSV = async (reportType, params = {})=>{
    try {
        const response = await axiosInstance.get('/export', {
            params: {
                reportType,
                format: 'csv',
                ...params
            },
            responseType: 'blob'
        });
        // Create a download link and trigger download
        const url = window.URL.createObjectURL(new Blob([
            response.data
        ]));
        const link = document.createElement('a');
        link.href = url;
        // Generate filename
        const date = new Date().toISOString().split('T')[0];
        link.setAttribute('download', `${reportType}_report_${date}.csv`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        return {
            success: true
        };
    } catch (error) {
        console.error('Error exporting report:', error);
        throw error;
    }
};
const exportReportPDF = async (reportType, params = {}, chartRef = null)=>{
    try {
        // Always get data from the API first
        let data = [];
        let filename = `${reportType}_report_${new Date().toISOString().split('T')[0]}`;
        // Get data from the API
        console.log('Fetching report data from API for', reportType);
        const response = await axiosInstance.get('/export', {
            params: {
                reportType,
                format: 'json',
                ...params
            }
        });
        // Log the response for debugging
        console.log('API response:', response.data);
        // Check if we have data from the API
        if (response.data && response.data.data && response.data.data.length > 0) {
            console.log('Using API data for report');
            data = response.data.data;
            filename = response.data.filename || filename;
        } else {
            console.log('No data from API, checking for chart data');
            // If no data from API, try to use chart data as fallback
            if (chartRef && chartRef.current) {
                try {
                    // Create data from the chart for PDF
                    const chartData = window.chartData || [];
                    if (chartData && chartData.length > 0) {
                        console.log('Using chart data for report');
                        data = chartData;
                    } else {
                        console.log('No chart data available');
                    }
                } catch (chartError) {
                    console.error('Error getting chart data:', chartError);
                }
            }
        }
        // Get user info from server response or fallback to localStorage
        let userName = 'System User';
        // Check if the server provided a user name in the response
        if (response.data && response.data.generatedBy) {
            console.log('Using server-provided user name:', response.data.generatedBy);
            userName = response.data.generatedBy;
        } else {
            // Fallback to localStorage if server didn't provide a name
            const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {
                name: 'System User'
            };
            console.log('Using localStorage user name:', userInfo.name);
            userName = userInfo.name;
        }
        // Import jsPDF and autoTable dynamically
        const { jsPDF } = await __turbopack_context__.r("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
        const { default: autoTable } = await __turbopack_context__.r("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
        // Create a new PDF document
        const doc = new jsPDF();
        // Add company header
        doc.setFontSize(22);
        doc.setTextColor(184, 134, 11); // Gold color
        doc.text("S Lanaka Jewellery", 105, 15, {
            align: 'center'
        });
        // Add title
        let title = 'Report';
        let titleColor = [
            184,
            134,
            11
        ]; // Default gold color
        switch(reportType){
            case 'current-stock':
                title = 'Current Stock Report';
                titleColor = [
                    0,
                    128,
                    0
                ]; // Green
                break;
            case 'gold-stock':
                title = 'Gold Stock Report';
                titleColor = [
                    184,
                    134,
                    11
                ]; // Gold
                break;
            case 'low-stock':
                title = 'Low Stock Report';
                titleColor = [
                    255,
                    0,
                    0
                ]; // Red
                break;
            case 'valuation':
                title = 'Inventory Valuation Report';
                titleColor = [
                    0,
                    0,
                    128
                ]; // Navy
                break;
            case 'sales-daily':
                title = 'Daily Sales Report';
                titleColor = [
                    75,
                    0,
                    130
                ]; // Indigo
                break;
            case 'sales-monthly':
                title = 'Monthly Sales Report';
                titleColor = [
                    75,
                    0,
                    130
                ]; // Indigo
                break;
            case 'sales-category':
                title = 'Sales by Category Report';
                titleColor = [
                    75,
                    0,
                    130
                ]; // Indigo
                break;
            case 'sales-branch':
                title = 'Sales by Branch Report';
                titleColor = [
                    75,
                    0,
                    130
                ]; // Indigo
                break;
        }
        // Add report title
        doc.setFontSize(18);
        doc.setTextColor(titleColor[0], titleColor[1], titleColor[2]);
        doc.text(title, 105, 25, {
            align: 'center'
        });
        // Add date and user info
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(`Generated on: ${new Date().toLocaleDateString()} by ${userName}`, 105, 32, {
            align: 'center'
        });
        // Add decorative line
        doc.setDrawColor(titleColor[0], titleColor[1], titleColor[2]);
        doc.setLineWidth(0.5);
        doc.line(14, 35, 196, 35);
        // Set starting Y position for the table
        let yPos = 40;
        // For sales reports, ensure we have the correct columns in the right order
        let formattedData = data;
        let headers = [];
        if (reportType.startsWith('sales-') && data.length > 0) {
            // Define the expected columns for sales reports
            const expectedColumns = [
                'sale_id',
                'sale_date',
                'total_amount',
                'discount',
                'payment_method',
                'customer_name',
                'branch_name',
                'employee_name'
            ];
            // Format the headers
            headers = [
                'Sale ID',
                'Sale Date',
                'Total Amount',
                'Discount',
                'Payment Method',
                'Customer Name',
                'Branch Name',
                'Employee Name'
            ];
            // Ensure data has all expected columns in the right order
            formattedData = data.map((item)=>{
                const formattedItem = {};
                expectedColumns.forEach((col)=>{
                    formattedItem[col] = item[col] !== undefined ? item[col] : 'N/A';
                });
                return formattedItem;
            });
        } else {
            // For other reports, use the default approach
            headers = Object.keys(data[0] || {}).map((header)=>{
                // Convert camelCase or snake_case to Title Case with spaces
                return header.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').replace(/^./, (str)=>str.toUpperCase()).trim();
            });
        }
        // Format data for autoTable
        const tableData = formattedData.map((item)=>{
            return Object.values(item);
        });
        // Define gold-themed colors for different report types
        let headColor, alternateColor;
        switch(true){
            case reportType.startsWith('sales-'):
                headColor = [
                    75,
                    0,
                    130
                ]; // Deep purple for sales
                alternateColor = [
                    245,
                    245,
                    255
                ]; // Light purple-ish
                break;
            case reportType === 'gold-stock':
                headColor = [
                    184,
                    134,
                    11
                ]; // Gold
                alternateColor = [
                    255,
                    248,
                    220
                ]; // Cornsilk
                break;
            case reportType === 'current-stock':
                headColor = [
                    0,
                    128,
                    0
                ]; // Green
                alternateColor = [
                    240,
                    255,
                    240
                ]; // Honeydew
                break;
            case reportType === 'low-stock':
                headColor = [
                    178,
                    34,
                    34
                ]; // Firebrick
                alternateColor = [
                    255,
                    240,
                    240
                ]; // Light red
                break;
            case reportType === 'valuation':
                headColor = [
                    0,
                    0,
                    128
                ]; // Navy
                alternateColor = [
                    240,
                    248,
                    255
                ]; // Alice blue
                break;
            default:
                headColor = [
                    218,
                    165,
                    32
                ]; // Goldenrod (default)
                alternateColor = [
                    253,
                    245,
                    230
                ]; // Light gold
                break;
        }
        // Check if we have data to display in the table
        if (tableData.length > 0) {
            console.log('Creating table with data:', tableData.length, 'rows');
            // Create table with gold-themed styling
            autoTable(doc, {
                head: [
                    headers
                ],
                body: tableData,
                startY: yPos,
                styles: {
                    fontSize: 8,
                    cellPadding: 3,
                    lineColor: [
                        200,
                        200,
                        200
                    ]
                },
                headStyles: {
                    fillColor: headColor,
                    textColor: [
                        255,
                        255,
                        255
                    ],
                    fontStyle: 'bold',
                    halign: 'center'
                },
                alternateRowStyles: {
                    fillColor: alternateColor
                },
                columnStyles: {
                    // Apply specific formatting based on report type
                    ...reportType === 'sales-daily' ? {
                        0: {
                            halign: 'center'
                        },
                        1: {
                            halign: 'center'
                        },
                        2: {
                            halign: 'right'
                        },
                        3: {
                            halign: 'right'
                        },
                        4: {
                            halign: 'center'
                        },
                        5: {
                            halign: 'left'
                        },
                        6: {
                            halign: 'left'
                        },
                        7: {
                            halign: 'left'
                        } // Employee Name
                    } : reportType === 'sales-monthly' ? {
                        0: {
                            halign: 'center'
                        },
                        1: {
                            halign: 'right'
                        },
                        2: {
                            halign: 'center'
                        },
                        3: {
                            halign: 'right'
                        } // Average
                    } : {
                        // Default formatting for other reports
                        2: {
                            halign: 'right'
                        },
                        3: {
                            halign: 'right'
                        },
                        4: {
                            halign: 'right'
                        }
                    }
                },
                didDrawPage: ()=>{
                    // Add footer with page numbers
                    doc.setFontSize(8);
                    doc.setTextColor(100, 100, 100);
                    doc.text(`S Lanaka Jewellery - Page ${doc.internal.getNumberOfPages()}`, 105, doc.internal.pageSize.height - 10, {
                        align: 'center'
                    });
                }
            });
        } else {
            console.log('No data for table, skipping table creation');
            // Add a message indicating no data
            doc.setFontSize(12);
            doc.setTextColor(100, 100, 100);
            doc.text("No data available for the selected filters", 105, yPos + 20, {
                align: 'center'
            });
            // Update yPos for chart placement
            yPos += 30;
        }
        // Get the final Y position after the table
        // Use the current yPos if no table was created or autoTable is not available
        let finalY = yPos;
        if (doc.autoTable && doc.autoTable.previous) {
            finalY = doc.autoTable.previous.finalY;
            console.log('Final Y position from autoTable:', finalY);
        } else {
            console.log('Using default Y position:', finalY);
        }
        // Always add a page break for the chart
        doc.addPage();
        // Add chart after the table if available (for sales reports)
        if (reportType.startsWith('sales-')) {
            try {
                console.log('Adding chart to PDF on new page');
                // Add a title for the chart section
                doc.setFontSize(16);
                doc.setTextColor(titleColor[0], titleColor[1], titleColor[2]);
                doc.text("Sales Trend Chart", 105, 20, {
                    align: 'center'
                });
                // Create a simple chart directly in the PDF
                if ("object" !== 'undefined' && window.chartData) {
                    // Validate chart data
                    if (!Array.isArray(window.chartData)) {
                        console.error('Chart data is not an array:', window.chartData);
                        throw new Error('Invalid chart data format');
                    }
                    if (window.chartData.length === 0) {
                        console.warn('Chart data array is empty');
                        doc.setFontSize(12);
                        doc.setTextColor(100, 100, 100);
                        doc.text("No data available for chart visualization", 105, 60, {
                            align: 'center'
                        });
                        return;
                    }
                    const chartData = window.chartData;
                    console.log('Using chart data from window object:', chartData.length, 'data points');
                    // Set up chart dimensions for A4 page (210 x 297 mm)
                    const pageWidth = doc.internal.pageSize.width;
                    // Center the chart on the page with proper margins
                    const chartX = 25;
                    const chartY = 40;
                    const chartWidth = pageWidth - 50; // 25mm margins on each side
                    const chartHeight = 120; // Taller chart
                    // Calculate bar spacing and width based on data points
                    // Adjust based on number of data points to prevent overcrowding
                    const maxBars = Math.min(chartData.length, 15); // Limit to 15 data points max
                    const barSpacing = chartWidth / (maxBars * 2);
                    const barWidth = Math.min(barSpacing * 0.8, 12); // Limit max width
                    // Find max values for scaling
                    let maxAmount = 0;
                    let maxTransactions = 0;
                    // Validate and find max values
                    chartData.forEach((item)=>{
                        // Ensure values are numbers and valid
                        if (item && typeof item.amount !== 'undefined') {
                            const amount = typeof item.amount === 'number' ? item.amount : parseFloat(item.amount) || 0;
                            maxAmount = Math.max(maxAmount, amount);
                        }
                        if (item && typeof item.transactions !== 'undefined') {
                            const transactions = typeof item.transactions === 'number' ? item.transactions : parseFloat(item.transactions) || 0;
                            maxTransactions = Math.max(maxTransactions, transactions);
                        }
                    });
                    console.log('Chart max values:', {
                        maxAmount,
                        maxTransactions
                    });
                    // Ensure we have non-zero max values
                    if (maxAmount <= 0) maxAmount = 1000;
                    if (maxTransactions <= 0) maxTransactions = 10;
                    // Add some padding to max values
                    maxAmount = maxAmount * 1.1;
                    maxTransactions = maxTransactions * 1.1;
                    // Draw chart axes
                    doc.setDrawColor(200, 200, 200);
                    doc.setLineWidth(0.5);
                    // Y-axis
                    doc.line(chartX, chartY, chartX, chartY + chartHeight);
                    // X-axis
                    doc.line(chartX, chartY + chartHeight, chartX + chartWidth, chartY + chartHeight);
                    // Determine which data points to show if we have too many
                    let dataToShow = chartData;
                    if (chartData.length > maxBars) {
                        // If we have too many data points, sample them evenly
                        const step = Math.ceil(chartData.length / maxBars);
                        dataToShow = [];
                        for(let i = 0; i < chartData.length; i += step){
                            dataToShow.push(chartData[i]);
                        }
                        // Always include the last data point
                        if (dataToShow[dataToShow.length - 1] !== chartData[chartData.length - 1]) {
                            dataToShow.push(chartData[chartData.length - 1]);
                        }
                    }
                    // Draw chart based on report type
                    if (reportType === 'sales-monthly') {
                        // Check if we have enough data points for a line chart
                        if (dataToShow.length <= 1) {
                            // Not enough data for a line chart
                            doc.setFontSize(12);
                            doc.setTextColor(100, 100, 100);
                            doc.text("Not enough data points for chart visualization", chartX + chartWidth / 2, chartY + chartHeight / 2, {
                                align: 'center'
                            });
                            return; // Exit early
                        }
                        // Draw line chart for monthly data
                        const pointSpacing = chartWidth / Math.max(dataToShow.length - 1, 1);
                        // Draw lines
                        // Amount line (dark gold)
                        doc.setDrawColor(184, 134, 11); // DarkGoldenRod
                        doc.setLineWidth(2);
                        // Draw amount line
                        let prevX, prevY;
                        dataToShow.forEach((item, index)=>{
                            // Skip items with invalid data
                            if (typeof item.amount !== 'number' || isNaN(item.amount)) {
                                console.warn('Invalid amount value in chart data:', item);
                                return;
                            }
                            const x = chartX + index * pointSpacing;
                            const y = chartY + chartHeight - item.amount / maxAmount * chartHeight;
                            // Draw point
                            doc.setFillColor(184, 134, 11); // DarkGoldenRod
                            doc.circle(x, y, 3, 'F');
                            // Draw line segment
                            if (index > 0 && prevX !== undefined && prevY !== undefined) {
                                doc.line(prevX, prevY, x, y);
                            }
                            prevX = x;
                            prevY = y;
                        });
                        // Transactions line (gold)
                        doc.setDrawColor(218, 165, 32); // GoldenRod
                        doc.setLineWidth(2);
                        // Draw transactions line
                        prevX = undefined;
                        prevY = undefined;
                        dataToShow.forEach((item, index)=>{
                            // Skip items with invalid data
                            if (typeof item.transactions !== 'number' || isNaN(item.transactions)) {
                                console.warn('Invalid transactions value in chart data:', item);
                                return;
                            }
                            const x = chartX + index * pointSpacing;
                            const y = chartY + chartHeight - item.transactions / maxTransactions * chartHeight;
                            // Draw point
                            doc.setFillColor(218, 165, 32); // GoldenRod
                            doc.circle(x, y, 3, 'F');
                            // Draw line segment
                            if (index > 0 && prevX !== undefined && prevY !== undefined) {
                                doc.line(prevX, prevY, x, y);
                            }
                            prevX = x;
                            prevY = y;
                            // Add month label
                            doc.setFontSize(7);
                            doc.setTextColor(100, 100, 100);
                            // Rotate labels if we have many data points
                            if (dataToShow.length > 7) {
                                doc.text(item.month || item.date, x, chartY + chartHeight + 10, {
                                    align: 'right',
                                    angle: 45
                                });
                            } else {
                                doc.text(item.month || item.date, x, chartY + chartHeight + 8, {
                                    align: 'center'
                                });
                            }
                        });
                    } else {
                        // Draw bar chart for daily data
                        dataToShow.forEach((item, index)=>{
                            const x = chartX + index * barSpacing * 2 + barSpacing;
                            // Amount bar (dark gold)
                            const amountHeight = item.amount / maxAmount * chartHeight;
                            doc.setFillColor(184, 134, 11); // DarkGoldenRod
                            doc.rect(x, chartY + chartHeight - amountHeight, barWidth, amountHeight, 'F');
                            // Transactions bar (gold)
                            const transactionsHeight = item.transactions / maxTransactions * chartHeight;
                            doc.setFillColor(218, 165, 32); // GoldenRod
                            doc.rect(x + barWidth, chartY + chartHeight - transactionsHeight, barWidth, transactionsHeight, 'F');
                            // Add date label
                            doc.setFontSize(7);
                            doc.setTextColor(100, 100, 100);
                            // Rotate labels if we have many data points
                            if (dataToShow.length > 7) {
                                doc.text(item.date, x + barWidth / 2, chartY + chartHeight + 10, {
                                    align: 'right',
                                    angle: 45
                                });
                            } else {
                                doc.text(item.date, x + barWidth / 2, chartY + chartHeight + 8, {
                                    align: 'center'
                                });
                            }
                        });
                    }
                    // Calculate legend position based on chart dimensions
                    const legendY = chartY + chartHeight + (dataToShow.length > 7 ? 25 : 15);
                    // Add legend with better spacing
                    doc.setFillColor(184, 134, 11); // DarkGoldenRod
                    doc.rect(chartX, legendY, 10, 5, 'F');
                    doc.setFontSize(9);
                    doc.setTextColor(50, 50, 50);
                    doc.text('Sales Amount', chartX + 15, legendY + 4);
                    doc.setFillColor(218, 165, 32); // GoldenRod
                    doc.rect(chartX + 80, legendY, 10, 5, 'F');
                    doc.text('Transactions', chartX + 95, legendY + 4);
                    // Add grid lines for better readability
                    doc.setDrawColor(220, 220, 220);
                    doc.setLineWidth(0.2);
                    // Horizontal grid lines
                    for(let i = 1; i < 4; i++){
                        const y = chartY + chartHeight / 4 * i;
                        doc.line(chartX, y, chartX + chartWidth, y);
                    }
                    // Add Y-axis labels with better formatting
                    doc.setFontSize(8);
                    doc.setTextColor(80, 80, 80);
                    // Format large numbers with K/M suffix
                    const formatLargeNumber = (num)=>{
                        if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
                        if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
                        return num.toString();
                    };
                    // Amount labels (left)
                    doc.text(formatLargeNumber(maxAmount), chartX - 3, chartY + 5, {
                        align: 'right'
                    });
                    doc.text(formatLargeNumber(maxAmount * 0.75), chartX - 3, chartY + chartHeight * 0.25, {
                        align: 'right'
                    });
                    doc.text(formatLargeNumber(maxAmount * 0.5), chartX - 3, chartY + chartHeight * 0.5, {
                        align: 'right'
                    });
                    doc.text(formatLargeNumber(maxAmount * 0.25), chartX - 3, chartY + chartHeight * 0.75, {
                        align: 'right'
                    });
                    doc.text('0', chartX - 3, chartY + chartHeight, {
                        align: 'right'
                    });
                    // Transactions labels (right)
                    doc.text(formatLargeNumber(maxTransactions), chartX + chartWidth + 3, chartY + 5, {
                        align: 'left'
                    });
                    doc.text(formatLargeNumber(maxTransactions * 0.75), chartX + chartWidth + 3, chartY + chartHeight * 0.25, {
                        align: 'left'
                    });
                    doc.text(formatLargeNumber(maxTransactions * 0.5), chartX + chartWidth + 3, chartY + chartHeight * 0.5, {
                        align: 'left'
                    });
                    doc.text(formatLargeNumber(maxTransactions * 0.25), chartX + chartWidth + 3, chartY + chartHeight * 0.75, {
                        align: 'left'
                    });
                    doc.text('0', chartX + chartWidth + 3, chartY + chartHeight, {
                        align: 'left'
                    });
                    // Add axis titles
                    doc.setFontSize(8);
                    doc.setTextColor(184, 134, 11); // DarkGoldenRod
                    doc.text("Sales Amount (LKR)", chartX - 15, chartY - 10, {
                        angle: 90
                    });
                    doc.setTextColor(218, 165, 32); // GoldenRod
                    doc.text("Transactions", chartX + chartWidth + 15, chartY - 10, {
                        angle: 270
                    });
                    // Add a note about the chart
                    doc.setFontSize(8);
                    doc.setTextColor(100, 100, 100);
                    doc.text("Chart shows sales amount and transaction count trends over the selected period", 105, legendY + 20, {
                        align: 'center'
                    });
                } else {
                    // If no chart data is available, add a message
                    doc.setFontSize(12);
                    doc.setTextColor(100, 100, 100);
                    doc.text("Chart visualization not available - no data", 105, 60, {
                        align: 'center'
                    });
                    console.log('No chart data available in window.chartData');
                }
            } catch (chartErr) {
                console.error('Error adding chart to PDF:', chartErr);
                // If there's an error, add a message
                doc.setFontSize(12);
                doc.setTextColor(100, 100, 100);
                doc.text("Chart visualization not available - error occurred", 105, 60, {
                    align: 'center'
                });
            }
        } else {
            console.log('Chart not added to PDF - not a sales report');
        }
        // Save the PDF
        doc.save(`${filename}.pdf`);
        return {
            success: true
        };
    } catch (error) {
        console.error('Error exporting report as PDF:', error);
        throw error;
    }
};
const getCustomReport = async (config)=>{
    try {
        // This would be implemented to handle custom report requests
        // For now, we'll just return a mock response
        return {
            success: true,
            message: 'Custom report functionality will be implemented here',
            config
        };
    } catch (error) {
        console.error('Error generating custom report:', error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/DashView/reports/sales/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SalesReportsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js [app-client] (ecmascript) <export default as BarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript) <export default as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reportService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/reportService.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SalesReportsPage() {
    _s();
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('last30');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedBranch, setSelectedBranch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [salesData, setSalesData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Report types
    const reportTypes = [
        {
            name: 'Daily Sales',
            path: '/DashView/reports/sales/daily',
            description: 'View sales data for each day with detailed breakdowns',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__["BarChart"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this)
        },
        {
            name: 'Monthly Sales',
            path: '/DashView/reports/sales/monthly',
            description: 'Monthly sales trends and comparisons',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this)
        },
        {
            name: 'Sales by Category',
            path: '/DashView/reports/sales/by-category',
            description: 'Sales distribution across different product categories',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this)
        },
        {
            name: 'Sales by Branch',
            path: '/DashView/reports/sales/by-branch',
            description: 'Compare performance across different store locations',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__["BarChart"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, this)
        }
    ];
    // Fetch sales data
    const fetchSalesData = async ()=>{
        try {
            setIsLoading(true);
            setError(null);
            // Build query parameters
            const params = {
                period: dateRange
            };
            if (selectedBranch) {
                params.branchId = selectedBranch;
            }
            // Use the reportService to fetch data with authentication
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reportService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSalesReport"])(params);
            setSalesData(data);
        } catch (err) {
            console.error('Error fetching sales data:', err);
            setError('Failed to load sales data. Please try again.');
        } finally{
            setIsLoading(false);
        }
    };
    // Fetch data on initial load and when filters change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalesReportsPage.useEffect": ()=>{
            fetchSalesData();
        }
    }["SalesReportsPage.useEffect"], [
        dateRange,
        selectedBranch
    ]);
    const handleRefresh = ()=>{
        fetchSalesData();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Sales Reports"
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 sm:mt-0 flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "appearance-none pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm",
                                        value: selectedBranch,
                                        onChange: (e)=>setSelectedBranch(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "All Branches"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this),
                                            salesData?.branches?.map((branch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: branch.branch_id,
                                                    children: branch.branch_name
                                                }, branch.branch_id, false, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "absolute right-3 top-2.5 h-4 w-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "appearance-none pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm",
                                        value: dateRange,
                                        onChange: (e)=>setDateRange(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "today",
                                                children: "Today"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "yesterday",
                                                children: "Yesterday"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "last7",
                                                children: "Last 7 Days"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "last30",
                                                children: "Last 30 Days"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "thisMonth",
                                                children: "This Month"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "lastMonth",
                                                children: "Last Month"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "absolute right-3 top-2.5 h-4 w-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",
                                onClick: handleRefresh,
                                disabled: isLoading,
                                children: [
                                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "h-4 w-4 mr-2 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this),
                                    "Refresh"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, this),
            isLoading && !salesData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                    lineNumber: 174,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                lineNumber: 173,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                        children: reportTypes.map((report)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: report.path,
                                className: "bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-5 sm:p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 bg-yellow-100 rounded-md p-3",
                                                children: report.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-medium text-gray-900",
                                                        children: report.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: report.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this)
                            }, report.name, false, {
                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                lineNumber: 181,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-5 sm:px-6 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg leading-6 font-medium text-gray-900",
                                        children: "Sales Overview"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "inline-flex items-center p-1.5 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "inline-flex items-center p-1.5 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-200 px-4 py-5 sm:p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-yellow-50 px-4 py-5 sm:p-6 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-sm font-medium text-yellow-800 truncate",
                                                    children: "Total Sales"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "mt-1 text-3xl font-semibold text-yellow-900",
                                                    children: [
                                                        "LKR ",
                                                        salesData?.summary?.totalSales?.toLocaleString() || '0.00'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "mt-3 text-sm text-yellow-700",
                                                    children: [
                                                        salesData?.summary?.totalTransactions || 0,
                                                        " transactions"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-blue-50 px-4 py-5 sm:p-6 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-sm font-medium text-blue-800 truncate",
                                                    children: "Average Order Value"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "mt-1 text-3xl font-semibold text-blue-900",
                                                    children: [
                                                        "LKR ",
                                                        salesData?.summary?.averageOrderValue?.toLocaleString() || '0.00'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "mt-3 text-sm text-blue-700",
                                                    children: "Per transaction"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-green-50 px-4 py-5 sm:p-6 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-sm font-medium text-green-800 truncate",
                                                    children: "Top Selling Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "mt-1 text-2xl font-semibold text-green-900",
                                                    children: salesData?.topCategories?.[0]?.category_name || 'No data'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "mt-3 text-sm text-green-700",
                                                    children: [
                                                        "Best product: ",
                                                        salesData?.topProducts?.[0]?.item_name || 'No data'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-5 sm:px-6 flex justify-between items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg leading-6 font-medium text-gray-900",
                                    children: "Recent Sales"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "min-w-full divide-y divide-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-gray-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                        children: "Sale ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                        children: "Customer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                        children: "Payment Method"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                        children: "Branch"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "bg-white divide-y divide-gray-200",
                                            children: [
                                                salesData?.recentSales?.map((sale)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-gray-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                                children: sale.sale_id
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                                children: sale.customer_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                                children: [
                                                                    "LKR ",
                                                                    sale.total_amount.toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                                children: sale.payment_method
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                                children: new Date(sale.sale_date).toLocaleDateString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                                children: sale.branch_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, sale.sale_id, true, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 21
                                                    }, this)),
                                                (!salesData?.recentSales || salesData.recentSales.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 6,
                                                        className: "px-6 py-4 text-center text-gray-500",
                                                        children: "No sales data available."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-5 sm:px-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg leading-6 font-medium text-gray-900",
                                    children: "Sales by Day"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "min-w-full divide-y divide-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-gray-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                        children: "Sales Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                        children: "Transactions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                        children: "Average"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "bg-white divide-y divide-gray-200",
                                            children: [
                                                salesData?.salesByDay?.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-gray-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                                children: new Date(day.date).toLocaleDateString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                                children: [
                                                                    "LKR ",
                                                                    day.amount.toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                                children: day.transactions
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                                children: [
                                                                    "LKR ",
                                                                    (day.amount / day.transactions).toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, day.date, true, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 21
                                                    }, this)),
                                                (!salesData?.salesByDay || salesData.salesByDay.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 4,
                                                        className: "px-6 py-4 text-center text-gray-500",
                                                        children: "No daily sales data available."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/DashView/reports/sales/page.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(SalesReportsPage, "GijRx2mtIk+C8B/Gtc/pkOY5hnI=");
_c = SalesReportsPage;
var _c;
__turbopack_context__.k.register(_c, "SalesReportsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_c14d3c90._.js.map