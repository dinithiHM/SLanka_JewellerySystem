"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Filter, Download, Printer, BarChart, RefreshCw, ArrowLeft, FileText } from 'lucide-react';
import Link from 'next/link';
import { getSalesReport, exportReportCSV, exportReportPDF } from '@/services/reportService';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Extend Window interface to include chartData and chartImageForPDF
declare global {
  interface Window {
    chartData?: any[];
    chartImageForPDF?: string | null;
  }
}

interface SalesData {
  summary: {
    totalSales: number;
    totalTransactions: number;
    averageOrderValue: number;
  };
  salesByDay: {
    date: string;
    amount: number;
    transactions: number;
  }[];
  topCategories: {
    category_name: string;
    totalQuantity: number;
    totalAmount: number;
  }[];
  topProducts: {
    item_name: string;
    totalQuantity: number;
    totalAmount: number;
  }[];
  recentSales: {
    sale_id: number;
    customer_name: string;
    total_amount: number;
    payment_method: string;
    sale_date: string;
    branch_id: number;
    branch_name: string;
  }[];
  branches: {
    branch_id: number;
    branch_name: string;
  }[];
  paymentMethods: {
    payment_method: string;
    count: number;
    total: number;
  }[];
  period: string;
  dateRange: {
    startDate: string;
    endDate: string;
  };
}

export default function DailySalesReportPage() {
  const [dateRange, setDateRange] = useState('last7');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [salesData, setSalesData] = useState<SalesData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  // Format currency
  const formatCurrency = (amount: number) => {
    return `LKR ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Fetch sales data
  const fetchSalesData = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Build query parameters
      const params: any = { period: dateRange };
      if (selectedBranch) {
        params.branchId = selectedBranch;
      }

      // Use the reportService to fetch data with authentication
      const data = await getSalesReport(params);
      setSalesData(data);
    } catch (err) {
      console.error('Error fetching sales data:', err);
      setError('Failed to load sales data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on initial load and when filters change
  useEffect(() => {
    fetchSalesData();
  }, [dateRange, selectedBranch]);

  const handleRefresh = () => {
    fetchSalesData();
  };

  // Handle export to CSV
  const handleExportCSV = async () => {
    try {
      setIsExporting(true);
      const params = {
        period: dateRange,
        ...(selectedBranch ? { branchId: selectedBranch } : {})
      };
      await exportReportCSV('sales-daily', params);
    } catch (err) {
      console.error('Error exporting CSV:', err);
      setError('Failed to export CSV. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  // Handle export to PDF
  const handleExportPDF = async () => {
    try {
      setIsExporting(true);

      // Prepare chart data and ensure it's stored in window object
      const chartData = prepareChartData();
      console.log('Chart data for PDF export:', chartData);

      // Make sure the chart data is stored in the window object
      if (typeof window !== 'undefined') {
        window.chartData = chartData;
      }

      // Set a small delay to ensure data is ready
      setTimeout(async () => {
        try {
          const params = {
            period: dateRange,
            ...(selectedBranch ? { branchId: selectedBranch } : {})
          };

          // Export the PDF with chart data
          await exportReportPDF('sales-daily', params, chartRef);
          console.log('PDF export completed');
        } catch (exportErr) {
          console.error('Error in export after timeout:', exportErr);
          setError('Failed to export PDF. Please try again.');
        } finally {
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
  const handlePrint = () => {
    window.print();
  };

  // Prepare chart data
  const prepareChartData = () => {
    if (!salesData?.salesByDay) return [];

    // Sort data by date to ensure chronological order
    const sortedData = [...salesData.salesByDay].sort((a, b) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const chartData = sortedData.map(day => ({
      date: new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      amount: day.amount,
      transactions: day.transactions,
    }));

    console.log('Chart data prepared:', chartData);

    // Store chart data in window object for PDF export
    if (typeof window !== 'undefined') {
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

  return (
    <div className="p-6">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <Link href="/DashView/reports/sales" className="mr-4">
          <ArrowLeft className="h-5 w-5 text-gray-500 hover:text-gray-700" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Daily Sales Report</h1>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Date Range Filter */}
          <div className="relative">
            <select
              className="appearance-none pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="last7">Last 7 Days</option>
              <option value="last30">Last 30 Days</option>
              <option value="thisMonth">This Month</option>
              <option value="lastMonth">Last Month</option>
            </select>
            <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>

          {/* Branch Filter */}
          <div className="relative">
            <select
              className="appearance-none pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              <option value="">All Branches</option>
              {salesData?.branches?.map((branch) => (
                <option key={branch.branch_id} value={branch.branch_id}>
                  {branch.branch_name}
                </option>
              ))}
            </select>
            <Filter className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            <RefreshCw className="h-4 w-4 mr-1" />
            Refresh
          </button>
        </div>

        <div className="flex items-center space-x-2">
          {/* Print Button */}
          <button
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            onClick={handlePrint}
          >
            <Printer className="h-4 w-4 mr-1" />
            Print
          </button>

          {/* Export Button */}
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                id="export-menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => document.getElementById('export-dropdown')?.classList.toggle('hidden')}
              >
                <Download className="h-4 w-4 mr-1" />
                {isExporting ? 'Exporting...' : 'Export'}
              </button>
            </div>
            <div
              id="export-dropdown"
              className="hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="export-menu-button"
              tabIndex={-1}
            >
              <div className="py-1" role="none">
                <button
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  tabIndex={-1}
                  id="export-menu-item-0"
                  onClick={handleExportCSV}
                  disabled={isExporting}
                >
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Export as CSV
                  </div>
                </button>
                <button
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  tabIndex={-1}
                  id="export-menu-item-1"
                  onClick={handleExportPDF}
                  disabled={isExporting}
                >
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Export as PDF
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
        </div>
      ) : (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
              <h3 className="text-gray-500 text-sm font-medium">Total Sales</h3>
              <p className="text-2xl font-bold mt-1">{formatCurrency(salesData?.summary?.totalSales || 0)}</p>
              <p className="text-sm text-gray-500 mt-1">
                {salesData?.dateRange?.startDate} to {salesData?.dateRange?.endDate}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-gray-500 text-sm font-medium">Transactions</h3>
              <p className="text-2xl font-bold mt-1">{salesData?.summary?.totalTransactions || 0}</p>
              <p className="text-sm text-gray-500 mt-1">Total number of sales</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-gray-500 text-sm font-medium">Average Order Value</h3>
              <p className="text-2xl font-bold mt-1">{formatCurrency(salesData?.summary?.averageOrderValue || 0)}</p>
              <p className="text-sm text-gray-500 mt-1">Per transaction</p>
            </div>
          </div>

          {/* Daily Sales Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Daily Sales Trend</h2>
            <div className="h-80" ref={chartRef}>
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={prepareChartData()}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis
                    yAxisId="left"
                    orientation="left"
                    stroke="#B8860B" // DarkGoldenRod
                    label={{
                      value: 'Sales Amount (LKR)',
                      angle: -90,
                      position: 'insideLeft',
                      style: { fill: '#B8860B' }
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#DAA520" // GoldenRod
                    label={{
                      value: 'Transactions',
                      angle: 90,
                      position: 'insideRight',
                      style: { fill: '#DAA520' }
                    }}
                  />
                  <Tooltip
                    formatter={(value, name) => {
                      if (name === 'amount') return [formatCurrency(Number(value)), 'Sales Amount'];
                      if (name === 'transactions') return [value, 'Transactions'];
                      return [value, name];
                    }}
                    contentStyle={{
                      backgroundColor: '#FFF8DC', // Cornsilk
                      borderColor: '#B8860B', // DarkGoldenRod
                      border: '1px solid #B8860B'
                    }}
                    labelStyle={{ color: '#B8860B' }}
                  />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="amount"
                    name="Sales Amount"
                    fill="#B8860B" // DarkGoldenRod
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="transactions"
                    name="Transactions"
                    fill="#DAA520" // GoldenRod
                    radius={[4, 4, 0, 0]}
                  />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sales by Day Table */}
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Daily Sales Details</h3>
              <span className="text-sm text-gray-500">
                {salesData?.salesByDay?.length || 0} days
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sales Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transactions
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Average
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {salesData?.salesByDay?.map((day) => (
                    <tr key={day.date} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(day.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatCurrency(day.amount)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {day.transactions}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatCurrency(day.amount / day.transactions)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
