(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_d3ed40c9._.js", {

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
        // Define gold-themed colors for charts
        const COLORS = [
            '#D4AF37',
            '#CFB53B',
            '#B8860B',
            '#DAA520',
            '#FFD700',
            '#FFC125',
            '#FFBF00',
            '#F0E68C'
        ];
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
        // Special handling for category report
        if (reportType === 'sales-category' && window.chartData && window.chartData.length > 0) {
            console.log('Using chart data for category report PDF');
            // Use the category data from the chart
            const categoryData = window.chartData;
            // Define the expected columns for category report
            headers = [
                'Category',
                'Quantity Sold',
                'Sales Amount',
                '% of Total Sales'
            ];
            // Calculate total sales for percentage
            const totalSales = categoryData.reduce((sum, item)=>sum + item.value, 0);
            // Format the data
            formattedData = categoryData.map((item)=>{
                const percentage = (item.value / totalSales * 100).toFixed(2) + '%';
                return {
                    category: item.name,
                    quantity: '0',
                    amount: item.value.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }),
                    percentage: percentage
                };
            });
            // Try to get quantity data from the page if available
            if ("object" !== 'undefined' && window.categoryQuantities) {
                formattedData.forEach((item)=>{
                    if (window.categoryQuantities[item.category]) {
                        item.quantity = window.categoryQuantities[item.category];
                    }
                });
            }
        } else if (reportType.startsWith('sales-') && data.length > 0) {
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
                // Use different title based on report type
                const chartTitle = reportType === 'sales-category' ? "Sales Distribution by Category" : "Sales Trend Chart";
                doc.text(chartTitle, 105, 20, {
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
                    if (reportType === 'sales-category') {
                        // Draw pie chart for category data
                        const centerX = chartX + chartWidth / 2;
                        const centerY = chartY + chartHeight / 2;
                        const radius = Math.min(chartWidth, chartHeight) / 2.5;
                        // Calculate total for percentages
                        const total = chartData.reduce((sum, item)=>sum + (typeof item.value === 'number' ? item.value : 0), 0);
                        // Draw pie slices
                        let startAngle = 0;
                        let endAngle = 0;
                        // Draw legend
                        doc.setFontSize(10);
                        const legendX = chartX + 10;
                        let legendY = chartY + 10;
                        const legendSpacing = 15;
                        chartData.forEach((item, index)=>{
                            const value = typeof item.value === 'number' ? item.value : 0;
                            const percentage = total > 0 ? value / total : 0;
                            endAngle = startAngle + percentage * 2 * Math.PI;
                            // Set slice color
                            const colorIndex = index % COLORS.length;
                            const r = parseInt(COLORS[colorIndex].substring(1, 3), 16);
                            const g = parseInt(COLORS[colorIndex].substring(3, 5), 16);
                            const b = parseInt(COLORS[colorIndex].substring(5, 7), 16);
                            // Draw pie slice
                            doc.setFillColor(r, g, b);
                            doc.setDrawColor(255, 255, 255);
                            doc.setLineWidth(1);
                            // Draw the slice
                            doc.circle(centerX, centerY, radius, 'S');
                            doc.setLineWidth(0.5);
                            // Calculate angles for the slice
                            // Draw slice
                            if (percentage > 0) {
                                doc.moveTo(centerX, centerY);
                                doc.lineTo(centerX + Math.cos(startAngle) * radius, centerY + Math.sin(startAngle) * radius);
                                // Draw arc (approximated with lines)
                                const steps = Math.max(10, Math.floor(percentage * 60));
                                for(let i = 1; i <= steps; i++){
                                    const angle = startAngle + i / steps * (endAngle - startAngle);
                                    doc.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius);
                                }
                                doc.lineTo(centerX, centerY);
                                doc.fill();
                            }
                            // Add to legend
                            doc.setFillColor(r, g, b);
                            doc.rect(legendX, legendY - 6, 10, 10, 'F');
                            doc.setTextColor(0, 0, 0);
                            doc.text(`${item.name}: ${(percentage * 100).toFixed(1)}%`, legendX + 15, legendY);
                            legendY += legendSpacing;
                            // Update start angle for next slice
                            startAngle = endAngle;
                        });
                    } else if (reportType === 'sales-monthly') {
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
"[project]/src/app/DashView/reports/sales/daily/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DailySalesReportPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reportService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/reportService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DailySalesReportPage() {
    _s();
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('last7');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedBranch, setSelectedBranch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [salesData, setSalesData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Format currency
    const formatCurrency = (amount)=>{
        return `LKR ${amount.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`;
    };
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
        "DailySalesReportPage.useEffect": ()=>{
            fetchSalesData();
        }
    }["DailySalesReportPage.useEffect"], [
        dateRange,
        selectedBranch
    ]);
    const handleRefresh = ()=>{
        fetchSalesData();
    };
    // Handle export to CSV
    const handleExportCSV = async ()=>{
        try {
            setIsExporting(true);
            const params = {
                period: dateRange,
                ...selectedBranch ? {
                    branchId: selectedBranch
                } : {}
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reportService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportReportCSV"])('sales-daily', params);
        } catch (err) {
            console.error('Error exporting CSV:', err);
            setError('Failed to export CSV. Please try again.');
        } finally{
            setIsExporting(false);
        }
    };
    // Handle export to PDF
    const handleExportPDF = async ()=>{
        try {
            setIsExporting(true);
            // Prepare chart data and ensure it's stored in window object
            const chartData = prepareChartData();
            console.log('Chart data for PDF export:', chartData);
            // Make sure the chart data is stored in the window object
            if ("TURBOPACK compile-time truthy", 1) {
                window.chartData = chartData;
            }
            // Set a small delay to ensure data is ready
            setTimeout(async ()=>{
                try {
                    const params = {
                        period: dateRange,
                        ...selectedBranch ? {
                            branchId: selectedBranch
                        } : {}
                    };
                    // Export the PDF with chart data
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reportService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportReportPDF"])('sales-daily', params, chartRef);
                    console.log('PDF export completed');
                } catch (exportErr) {
                    console.error('Error in export after timeout:', exportErr);
                    setError('Failed to export PDF. Please try again.');
                } finally{
                    setIsExporting(false);
                }
            }, 100);
        } catch (err) {
            console.error('Error exporting PDF:', err);
            setError('Failed to export PDF. Please try again.');
            setIsExporting(false);
        }
    };
    // Handle print
    const handlePrint = ()=>{
        window.print();
    };
    // Prepare chart data
    const prepareChartData = ()=>{
        if (!salesData?.salesByDay) return [];
        // Sort data by date to ensure chronological order
        const sortedData = [
            ...salesData.salesByDay
        ].sort((a, b)=>new Date(a.date).getTime() - new Date(b.date).getTime());
        const chartData = sortedData.map((day)=>({
                date: new Date(day.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                }),
                amount: day.amount,
                transactions: day.transactions
            }));
        console.log('Chart data prepared:', chartData);
        // Store chart data in window object for PDF export
        if ("TURBOPACK compile-time truthy", 1) {
            window.chartData = chartData;
            console.log('Chart data stored in window object for PDF export');
        }
        // Force chart to render completely
        if (chartRef && chartRef.current) {
            const canvas = chartRef.current.querySelector('canvas');
            if (canvas) {
                // This forces the canvas to be fully rendered
                console.log('Forcing chart render, canvas dimensions:', canvas.width, canvas.height);
            }
        }
        return chartData;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/DashView/reports/sales",
                        className: "mr-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-5 w-5 text-gray-500 hover:text-gray-700"
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Daily Sales Report"
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
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
                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "yesterday",
                                                children: "Yesterday"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "last7",
                                                children: "Last 7 Days"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "last30",
                                                children: "Last 30 Days"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "thisMonth",
                                                children: "This Month"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "lastMonth",
                                                children: "Last Month"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "absolute right-3 top-2.5 h-4 w-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
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
                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, this),
                                            salesData?.branches?.map((branch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: branch.branch_id,
                                                    children: branch.branch_name
                                                }, branch.branch_id, false, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "absolute right-3 top-2.5 h-4 w-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleRefresh,
                                className: "inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "h-4 w-4 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    "Refresh"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",
                                onClick: handlePrint,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                        className: "h-4 w-4 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    "Print"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative inline-block text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",
                                            id: "export-menu-button",
                                            "aria-expanded": "true",
                                            "aria-haspopup": "true",
                                            onClick: ()=>document.getElementById('export-dropdown')?.classList.toggle('hidden'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "h-4 w-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 17
                                                }, this),
                                                isExporting ? 'Exporting...' : 'Export'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                            lineNumber: 275,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        id: "export-dropdown",
                                        className: "hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10",
                                        role: "menu",
                                        "aria-orientation": "vertical",
                                        "aria-labelledby": "export-menu-button",
                                        tabIndex: -1,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-1",
                                            role: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100",
                                                    role: "menuitem",
                                                    tabIndex: -1,
                                                    id: "export-menu-item-0",
                                                    onClick: handleExportCSV,
                                                    disabled: isExporting,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                                lineNumber: 305,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Export as CSV"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100",
                                                    role: "menuitem",
                                                    tabIndex: -1,
                                                    id: "export-menu-item-1",
                                                    onClick: handleExportPDF,
                                                    disabled: isExporting,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Export as PDF"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-50 border-l-4 border-red-400 p-4 mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-red-700",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                            lineNumber: 333,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                        lineNumber: 332,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                    lineNumber: 331,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                lineNumber: 330,
                columnNumber: 9
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                    lineNumber: 341,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                lineNumber: 340,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-gray-500 text-sm font-medium",
                                        children: "Total Sales"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold mt-1",
                                        children: formatCurrency(salesData?.summary?.totalSales || 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: [
                                            salesData?.dateRange?.startDate,
                                            " to ",
                                            salesData?.dateRange?.endDate
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-gray-500 text-sm font-medium",
                                        children: "Transactions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold mt-1",
                                        children: salesData?.summary?.totalTransactions || 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 357,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: "Total number of sales"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-gray-500 text-sm font-medium",
                                        children: "Average Order Value"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 362,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold mt-1",
                                        children: formatCurrency(salesData?.summary?.averageOrderValue || 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: "Per transaction"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                lineNumber: 361,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-lg shadow-md mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-medium text-gray-900 mb-4",
                                children: "Daily Sales Trend"
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                lineNumber: 370,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-80",
                                ref: chartRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                        data: prepareChartData(),
                                        margin: {
                                            top: 20,
                                            right: 30,
                                            left: 20,
                                            bottom: 5
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                strokeDasharray: "3 3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                lineNumber: 377,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                yAxisId: "left",
                                                orientation: "left",
                                                stroke: "#B8860B" // DarkGoldenRod
                                                ,
                                                label: {
                                                    value: 'Sales Amount (LKR)',
                                                    angle: -90,
                                                    position: 'insideLeft',
                                                    style: {
                                                        fill: '#B8860B'
                                                    }
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                lineNumber: 379,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                yAxisId: "right",
                                                orientation: "right",
                                                stroke: "#DAA520" // GoldenRod
                                                ,
                                                label: {
                                                    value: 'Transactions',
                                                    angle: 90,
                                                    position: 'insideRight',
                                                    style: {
                                                        fill: '#DAA520'
                                                    }
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                lineNumber: 390,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                formatter: (value, name)=>{
                                                    if (name === 'amount') return [
                                                        formatCurrency(Number(value)),
                                                        'Sales Amount'
                                                    ];
                                                    if (name === 'transactions') return [
                                                        value,
                                                        'Transactions'
                                                    ];
                                                    return [
                                                        value,
                                                        name
                                                    ];
                                                },
                                                contentStyle: {
                                                    backgroundColor: '#FFF8DC',
                                                    borderColor: '#B8860B',
                                                    border: '1px solid #B8860B'
                                                },
                                                labelStyle: {
                                                    color: '#B8860B'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                lineNumber: 401,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                lineNumber: 414,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                yAxisId: "left",
                                                dataKey: "amount",
                                                name: "Sales Amount",
                                                fill: "#B8860B" // DarkGoldenRod
                                                ,
                                                radius: [
                                                    4,
                                                    4,
                                                    0,
                                                    0
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                lineNumber: 415,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                yAxisId: "right",
                                                dataKey: "transactions",
                                                name: "Transactions",
                                                fill: "#DAA520" // GoldenRod
                                                ,
                                                radius: [
                                                    4,
                                                    4,
                                                    0,
                                                    0
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                lineNumber: 422,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 373,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                    lineNumber: 372,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                        lineNumber: 369,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow rounded-lg mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-5 sm:px-6 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg leading-6 font-medium text-gray-900",
                                        children: "Daily Sales Details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 437,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-500",
                                        children: [
                                            salesData?.salesByDay?.length || 0,
                                            " days"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                        lineNumber: 438,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                lineNumber: 436,
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
                                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                        children: "Sales Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                        children: "Transactions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                        children: "Average"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                lineNumber: 445,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                            lineNumber: 444,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "bg-white divide-y divide-gray-200",
                                            children: salesData?.salesByDay?.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                            children: new Date(day.date).toLocaleDateString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                            children: formatCurrency(day.amount)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                            lineNumber: 466,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                            children: day.transactions
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                            children: formatCurrency(day.amount / day.transactions)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, day.date, true, {
                                                    fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                            lineNumber: 460,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                    lineNumber: 443,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                                lineNumber: 442,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
                        lineNumber: 435,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/DashView/reports/sales/daily/page.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_s(DailySalesReportPage, "gHMjx3VJ7Kj6fTLxE1hsi8M1Hqg=");
_c = DailySalesReportPage;
var _c;
__turbopack_context__.k.register(_c, "DailySalesReportPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_d3ed40c9._.js.map