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
      params: { reportType, ...params },
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
