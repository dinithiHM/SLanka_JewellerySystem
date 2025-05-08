"use client";

import React, { useState, useEffect } from 'react';
import { AlertTriangle, Filter, Download, Printer, ArrowLeft, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { getLowStockReport } from '@/services/reportService';

interface Branch {
  branch_id: number;
  branch_name: string;
}

interface LowStockItem {
  item_id: number;
  item_name: string;
  category: string;
  quantity: number;
  unit_price: number;
  branch_id: number;
  branch_name: string;
}

interface CategorySummary {
  category: string;
  itemCount: number;
}

interface LowStockData {
  branches: Branch[];
  selectedBranch: number | null;
  summary: {
    totalLowStockItems: number;
    totalQuantity: number;
    totalValue: number;
  };
  items: LowStockItem[];
  categories: CategorySummary[];
}

export default function LowStockReportPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [lowStockData, setLowStockData] = useState<LowStockData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  // Format currency
  const formatCurrency = (amount: number) => {
    return `LKR ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Fetch low stock data
  const fetchLowStockData = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Build query parameters
      const params: any = {};
      if (selectedBranch) {
        params.branchId = selectedBranch;
      }

      const data = await getLowStockReport(params);
      setLowStockData(data);
    } catch (err) {
      console.error('Error fetching low stock data:', err);
      setError('Failed to load low stock data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on initial load and when branch filter changes
  useEffect(() => {
    fetchLowStockData();
  }, [selectedBranch]);

  const handleRefresh = () => {
    fetchLowStockData();
  };

  // Get unique categories for filtering
  const getUniqueCategories = () => {
    if (!lowStockData?.items) return [];
    const categories = new Set(lowStockData.items.map(item => item.category));
    return Array.from(categories);
  };

  // Filter items based on search term and category
  const getFilteredItems = () => {
    if (!lowStockData?.items) return [];
    
    return lowStockData.items.filter(item => {
      const matchesSearch = searchTerm === '' || 
        item.item_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = categoryFilter === null || item.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    });
  };

  return (
    <div className="space-y-6">
      {/* Header with back button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center">
          <Link href="/DashView/reports/inventory" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500 hover:text-gray-700" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Low Stock Report</h1>
        </div>

        <div className="mt-3 sm:mt-0 flex items-center space-x-3">
          <button
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            onClick={handleRefresh}
          >
            {isLoading ? (
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4 mr-2" />
            )}
            Refresh
          </button>
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            <Printer className="h-4 w-4 mr-2" />
            Print
          </button>
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Branch Filter */}
          <div>
            <label htmlFor="branch-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Branch
            </label>
            <select
              id="branch-filter"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
              value={selectedBranch || ''}
              onChange={(e) => setSelectedBranch(e.target.value ? Number(e.target.value) : null)}
            >
              <option value="">All Branches</option>
              {lowStockData?.branches.map((branch) => (
                <option key={branch.branch_id} value={branch.branch_id}>
                  {branch.branch_name}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category-filter"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
              value={categoryFilter || ''}
              onChange={(e) => setCategoryFilter(e.target.value || null)}
            >
              <option value="">All Categories</option>
              {getUniqueCategories().map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Search */}
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                id="search"
                className="focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-3 pr-10 py-2 sm:text-sm border-gray-300 rounded-md"
                placeholder="Search by name or category"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      ) : lowStockData ? (
        <>
          {/* Alert Banner */}
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  There are {lowStockData.summary.totalLowStockItems} items with low stock (less than 10 units). 
                  Consider restocking these items soon.
                </p>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-red-100 rounded-md p-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Low Stock Items</h3>
                  <p className="text-2xl font-semibold text-gray-900">{lowStockData.summary.totalLowStockItems}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-red-100 rounded-md p-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Total Quantity</h3>
                  <p className="text-2xl font-semibold text-gray-900">{lowStockData.summary.totalQuantity}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-red-100 rounded-md p-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Total Value</h3>
                  <p className="text-2xl font-semibold text-gray-900">{formatCurrency(lowStockData.summary.totalValue)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Low Stock Items Table */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Low Stock Items</h3>
              <span className="text-sm text-gray-500">
                {getFilteredItems().length} items
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Item Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Unit Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Branch
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {getFilteredItems().map((item) => (
                    <tr key={item.item_id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.item_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item.quantity <= 3 ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.quantity}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatCurrency(item.unit_price)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.branch_name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Low Stock by Category</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Number of Items
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Percentage
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {lowStockData.categories.map((category, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {category.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {category.itemCount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {((category.itemCount / lowStockData.summary.totalLowStockItems) * 100).toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">No low stock data available. Please try refreshing.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
