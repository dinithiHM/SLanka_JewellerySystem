import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';

// Create axios instance with auth header
const axiosInstance = axios.create({
  baseURL: `${API_URL}/api/reports`,
});

// Add request interceptor to include auth token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Get sales report data
 * @param {Object} params - Query parameters for the report
 * @returns {Promise} - Promise with report data
 */
export const getSalesReport = async (params = {}) => {
  try {
    const response = await axiosInstance.get('/sales', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching sales report:', error);
    throw error;
  }
};

/**
 * Get inventory report data
 * @param {Object} params - Query parameters for the report
 * @returns {Promise} - Promise with report data
 */
export const getInventoryReport = async (params = {}) => {
  try {
    const response = await axiosInstance.get('/inventory', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching inventory report:', error);
    throw error;
  }
};

/**
 * Get current stock report data
 * @param {Object} params - Query parameters for the report (branchId for filtering)
 * @returns {Promise} - Promise with report data
 */
export const getCurrentStockReport = async (params = {}) => {
  try {
    const response = await axiosInstance.get('/inventory/current-stock', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching current stock report:', error);
    throw error;
  }
};

/**
 * Get gold stock report data
 * @param {Object} params - Query parameters for the report
 * @returns {Promise} - Promise with report data
 */
export const getGoldStockReport = async (params = {}) => {
  try {
    const response = await axiosInstance.get('/inventory/gold-stock', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching gold stock report:', error);
    throw error;
  }
};

/**
 * Get low stock report data
 * @param {Object} params - Query parameters for the report (branchId for filtering)
 * @returns {Promise} - Promise with report data
 */
export const getLowStockReport = async (params = {}) => {
  try {
    const response = await axiosInstance.get('/inventory/low-stock', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching low stock report:', error);
    throw error;
  }
};

/**
 * Get inventory valuation report data
 * @param {Object} params - Query parameters for the report (branchId for filtering)
 * @returns {Promise} - Promise with report data
 */
export const getInventoryValuationReport = async (params = {}) => {
  try {
    const response = await axiosInstance.get('/inventory/valuation', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching inventory valuation report:', error);
    throw error;
  }
};

/**
 * Get customer report data
 * @param {Object} params - Query parameters for the report
 * @returns {Promise} - Promise with report data
 */
export const getCustomerReport = async (params = {}) => {
  try {
    const response = await axiosInstance.get('/customers', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching customer report:', error);
    throw error;
  }
};

/**
 * Get financial report data
 * @param {Object} params - Query parameters for the report
 * @returns {Promise} - Promise with report data
 */
export const getFinancialReport = async (params = {}) => {
  try {
    const response = await axiosInstance.get('/financial', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching financial report:', error);
    throw error;
  }
};

/**
 * Export report as CSV
 * @param {String} reportType - Type of report to export
 * @param {Object} params - Query parameters for the report
 * @returns {Promise} - Promise with export result
 */
export const exportReportCSV = async (reportType, params = {}) => {
  try {
    const response = await axiosInstance.get('/export', {
      params: { reportType, format: 'csv', ...params },
      responseType: 'blob'
    });

    // Create a download link and trigger download
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;

    // Generate filename
    const date = new Date().toISOString().split('T')[0];
    link.setAttribute('download', `${reportType}_report_${date}.csv`);

    document.body.appendChild(link);
    link.click();
    link.remove();

    return { success: true };
  } catch (error) {
    console.error('Error exporting report:', error);
    throw error;
  }
};

/**
 * Export report as PDF
 * @param {String} reportType - Type of report to export
 * @param {Object} params - Query parameters for the report
 * @param {Object} chartRef - Optional reference to chart component for including in PDF
 * @returns {Promise} - Promise with export result
 */
export const exportReportPDF = async (reportType, params = {}, chartRef = null) => {
  try {
    // Always get data from the API first
    let data = [];
    let filename = `${reportType}_report_${new Date().toISOString().split('T')[0]}`;

    // Get data from the API
    console.log('Fetching report data from API for', reportType);
    const response = await axiosInstance.get('/export', {
      params: { reportType, format: 'json', ...params }
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
      const userInfo = JSON.parse(localStorage.getItem('userInfo')) || { name: 'System User' };
      console.log('Using localStorage user name:', userInfo.name);
      userName = userInfo.name;
    }

    // Import jsPDF and autoTable dynamically
    const { jsPDF } = await import('jspdf');
    const { default: autoTable } = await import('jspdf-autotable');

    // Create a new PDF document
    const doc = new jsPDF();

    // Add company header
    doc.setFontSize(22);
    doc.setTextColor(184, 134, 11); // Gold color
    doc.text("S Lanaka Jewellery", 105, 15, { align: 'center' });

    // Add title
    let title = 'Report';
    let titleColor = [184, 134, 11]; // Default gold color

    switch (reportType) {
      case 'current-stock':
        title = 'Current Stock Report';
        titleColor = [0, 128, 0]; // Green
        break;
      case 'gold-stock':
        title = 'Gold Stock Report';
        titleColor = [184, 134, 11]; // Gold
        break;
      case 'low-stock':
        title = 'Low Stock Report';
        titleColor = [255, 0, 0]; // Red
        break;
      case 'valuation':
        title = 'Inventory Valuation Report';
        titleColor = [0, 0, 128]; // Navy
        break;
      case 'sales-daily':
        title = 'Daily Sales Report';
        titleColor = [75, 0, 130]; // Indigo
        break;
      case 'sales-monthly':
        title = 'Monthly Sales Report';
        titleColor = [75, 0, 130]; // Indigo
        break;
      case 'sales-category':
        title = 'Sales by Category Report';
        titleColor = [75, 0, 130]; // Indigo
        break;
      case 'sales-branch':
        title = 'Sales by Branch Report';
        titleColor = [75, 0, 130]; // Indigo
        break;
    }

    // Add report title
    doc.setFontSize(18);
    doc.setTextColor(titleColor[0], titleColor[1], titleColor[2]);
    doc.text(title, 105, 25, { align: 'center' });

    // Add date and user info
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Generated on: ${new Date().toLocaleDateString()} by ${userName}`, 105, 32, { align: 'center' });

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
        'sale_id', 'sale_date', 'total_amount', 'discount',
        'payment_method', 'customer_name', 'branch_name', 'employee_name'
      ];

      // Format the headers
      headers = [
        'Sale ID', 'Sale Date', 'Total Amount', 'Discount',
        'Payment Method', 'Customer Name', 'Branch Name', 'Employee Name'
      ];

      // Ensure data has all expected columns in the right order
      formattedData = data.map(item => {
        const formattedItem = {};
        expectedColumns.forEach(col => {
          formattedItem[col] = item[col] !== undefined ? item[col] : 'N/A';
        });
        return formattedItem;
      });
    } else {
      // For other reports, use the default approach
      headers = Object.keys(data[0] || {}).map(header => {
        // Convert camelCase or snake_case to Title Case with spaces
        return header
          .replace(/_/g, ' ')
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, str => str.toUpperCase())
          .trim();
      });
    }

    // Format data for autoTable
    const tableData = formattedData.map(item => {
      return Object.values(item);
    });

    // Define gold-themed colors for different report types
    let headColor, alternateColor;

    switch (true) {
      case reportType.startsWith('sales-'):
        headColor = [75, 0, 130]; // Deep purple for sales
        alternateColor = [245, 245, 255]; // Light purple-ish
        break;
      case reportType === 'gold-stock':
        headColor = [184, 134, 11]; // Gold
        alternateColor = [255, 248, 220]; // Cornsilk
        break;
      case reportType === 'current-stock':
        headColor = [0, 128, 0]; // Green
        alternateColor = [240, 255, 240]; // Honeydew
        break;
      case reportType === 'low-stock':
        headColor = [178, 34, 34]; // Firebrick
        alternateColor = [255, 240, 240]; // Light red
        break;
      case reportType === 'valuation':
        headColor = [0, 0, 128]; // Navy
        alternateColor = [240, 248, 255]; // Alice blue
        break;
      default:
        headColor = [218, 165, 32]; // Goldenrod (default)
        alternateColor = [253, 245, 230]; // Light gold
        break;
    }

    // Check if we have data to display in the table
    if (tableData.length > 0) {
      console.log('Creating table with data:', tableData.length, 'rows');

      // Create table with gold-themed styling
      autoTable(doc, {
        head: [headers],
        body: tableData,
        startY: yPos,
        styles: {
          fontSize: 8,
          cellPadding: 3,
          lineColor: [200, 200, 200]
        },
        headStyles: {
          fillColor: headColor,
          textColor: [255, 255, 255],
          fontStyle: 'bold',
          halign: 'center'
        },
        alternateRowStyles: {
          fillColor: alternateColor
        },
        columnStyles: {
          // Apply specific formatting based on report type
          ...(reportType.startsWith('sales-') ? {
            0: { halign: 'center' },  // Sale ID
            1: { halign: 'center' },  // Sale Date
            2: { halign: 'right' },   // Total Amount
            3: { halign: 'right' },   // Discount
            4: { halign: 'center' },  // Payment Method
            5: { halign: 'left' },    // Customer Name
            6: { halign: 'left' },    // Branch Name
            7: { halign: 'left' }     // Employee Name
          } : {
            // Default formatting for other reports
            2: { halign: 'right' },
            3: { halign: 'right' },
            4: { halign: 'right' }
          })
        },
        didDrawPage: () => {
          // Add footer with page numbers
          doc.setFontSize(8);
          doc.setTextColor(100, 100, 100);
          doc.text(
            `S Lanaka Jewellery - Page ${doc.internal.getNumberOfPages()}`,
            105,
            doc.internal.pageSize.height - 10,
            { align: 'center' }
          );
        }
      });
    } else {
      console.log('No data for table, skipping table creation');
      // Add a message indicating no data
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text("No data available for the selected filters", 105, yPos + 20, { align: 'center' });

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
    if (reportType.startsWith('sales-') && chartRef && chartRef.current) {
      try {
        console.log('Adding chart to PDF on new page');

        // Add a title for the chart section
        doc.setFontSize(16);
        doc.setTextColor(titleColor[0], titleColor[1], titleColor[2]);
        doc.text("Sales Trend Chart", 105, 20, { align: 'center' });

        // Get chart canvas and convert to image
        const canvas = chartRef.current.querySelector('canvas');
        console.log('Chart canvas found:', !!canvas);

        if (canvas) {
          // Convert canvas to image
          const chartImg = canvas.toDataURL('image/png');
          console.log('Chart image created successfully');

          // Add chart image to PDF on new page
          doc.addImage(chartImg, 'PNG', 14, 30, 182, 80);

          // Add a note about the chart
          doc.setFontSize(8);
          doc.setTextColor(100, 100, 100);
          doc.text(
            "Chart shows sales amount and transaction count trends over the selected period",
            105,
            120,
            { align: 'center' }
          );
        } else {
          console.log('No canvas element found in chart reference');
        }
      } catch (chartErr) {
        console.error('Error adding chart to PDF:', chartErr);
      }
    } else {
      console.log('Chart not added to PDF:', {
        isSalesReport: reportType.startsWith('sales-'),
        hasChartRef: !!chartRef,
        hasCurrentProperty: chartRef && !!chartRef.current
      });
    }

    // Save the PDF
    doc.save(`${filename}.pdf`);

    return { success: true };
  } catch (error) {
    console.error('Error exporting report as PDF:', error);
    throw error;
  }
};

/**
 * Get custom report data
 * @param {Object} config - Custom report configuration
 * @returns {Promise} - Promise with report data
 */
export const getCustomReport = async (config) => {
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
