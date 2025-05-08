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
 * @returns {Promise} - Promise with export result
 */
export const exportReportPDF = async (reportType, params = {}) => {
  try {
    // First get the data in JSON format
    const response = await axiosInstance.get('/export', {
      params: { reportType, format: 'json', ...params }
    });

    // Import jsPDF and autoTable dynamically
    const { jsPDF } = await import('jspdf');
    const { default: autoTable } = await import('jspdf-autotable');

    // Create a new PDF document
    const doc = new jsPDF();

    // Add title
    let title = 'Report';
    switch (reportType) {
      case 'current-stock':
        title = 'Current Stock Report';
        break;
      case 'gold-stock':
        title = 'Gold Stock Report';
        break;
      case 'low-stock':
        title = 'Low Stock Report';
        break;
      case 'valuation':
        title = 'Inventory Valuation Report';
        break;
      case 'sales':
        title = 'Sales Report';
        break;
    }

    // Add report title
    doc.setFontSize(18);
    doc.text(title, 14, 22);

    // Add date
    doc.setFontSize(11);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 30);

    // Format data for autoTable
    const tableData = response.data.data.map(item => {
      return Object.values(item);
    });

    // Get column headers
    const headers = Object.keys(response.data.data[0]);

    // Create table
    autoTable(doc, {
      head: [headers],
      body: tableData,
      startY: 35,
      styles: { fontSize: 8, cellPadding: 2 },
      headStyles: { fillColor: [60, 60, 60] }
    });

    // Save the PDF
    doc.save(`${response.data.filename}.pdf`);

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
