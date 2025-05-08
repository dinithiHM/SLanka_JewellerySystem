"use client";

import React, { useState } from 'react';
import { Package, Filter, Download, Printer, BarChart, PieChart, AlertTriangle, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function InventoryReportsPage() {
  const [isLoading, setIsLoading] = useState(false);
  
  // Sample report types
  const reportTypes = [
    { 
      name: 'Current Stock', 
      path: '/DashView/reports/inventory/current-stock',
      description: 'Complete inventory with quantities and values',
      icon: <Package className="w-5 h-5" />
    },
    { 
      name: 'Gold Inventory', 
      path: '/DashView/reports/inventory/gold-stock',
      description: 'Gold stock by purity and weight',
      icon: <BarChart className="w-5 h-5" />
    },
    { 
      name: 'Low Stock Items', 
      path: '/DashView/reports/inventory/low-stock',
      description: 'Products that need to be restocked soon',
      icon: <AlertTriangle className="w-5 h-5" />
    },
    { 
      name: 'Inventory Valuation', 
      path: '/DashView/reports/inventory/valuation',
      description: 'Total value of current inventory',
      icon: <PieChart className="w-5 h-5" />
    },
  ];

  // Sample inventory data (would be fetched from API)
  const inventoryData = {
    totalItems: 342,
    totalValue: 875250.00,
    lowStockItems: 15,
    goldStock: {
      total: 1250, // in grams
      byPurity: [
        { purity: '24KT', weight: 250, value: 187500.00 },
        { purity: '22KT', weight: 450, value: 315000.00 },
        { purity: '21KT', weight: 300, value: 195000.00 },
        { purity: '18KT', weight: 250, value: 150000.00 },
      ]
    },
    topCategories: [
      { name: 'Gold Necklaces', count: 78, value: 312000.00 },
      { name: 'Gold Rings', count: 95, value: 190000.00 },
      { name: 'Gold Earrings', count: 65, value: 130000.00 },
      { name: 'Gold Bracelets', count: 45, value: 135000.00 },
      { name: 'Silver Items', count: 59, value: 108250.00 },
    ]
  };

  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Inventory Reports</h1>
        
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
        </div>
      </div>
      
      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reportTypes.map((report) => (
          <Link 
            key={report.name}
            href={report.path}
            className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                  {report.icon}
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">{report.name}</h3>
                  <p className="text-sm text-gray-500">{report.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Inventory Overview */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Inventory Overview</h3>
          <div className="flex space-x-2">
            <button className="inline-flex items-center p-1.5 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Download className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center p-1.5 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Printer className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-green-50 px-4 py-5 sm:p-6 rounded-lg">
              <dt className="text-sm font-medium text-green-800 truncate">Total Items</dt>
              <dd className="mt-1 text-3xl font-semibold text-green-900">
                {inventoryData.totalItems}
              </dd>
              <dd className="mt-3 text-sm text-green-700">
                In stock
              </dd>
            </div>
            
            <div className="bg-blue-50 px-4 py-5 sm:p-6 rounded-lg">
              <dt className="text-sm font-medium text-blue-800 truncate">Total Value</dt>
              <dd className="mt-1 text-3xl font-semibold text-blue-900">
                ${inventoryData.totalValue.toLocaleString()}
              </dd>
              <dd className="mt-3 text-sm text-blue-700">
                At current prices
              </dd>
            </div>
            
            <div className="bg-yellow-50 px-4 py-5 sm:p-6 rounded-lg">
              <dt className="text-sm font-medium text-yellow-800 truncate">Gold Stock</dt>
              <dd className="mt-1 text-3xl font-semibold text-yellow-900">
                {inventoryData.goldStock.total}g
              </dd>
              <dd className="mt-3 text-sm text-yellow-700">
                Across all purities
              </dd>
            </div>
            
            <div className="bg-red-50 px-4 py-5 sm:p-6 rounded-lg">
              <dt className="text-sm font-medium text-red-800 truncate">Low Stock Items</dt>
              <dd className="mt-1 text-3xl font-semibold text-red-900">
                {inventoryData.lowStockItems}
              </dd>
              <dd className="mt-3 text-sm text-red-700">
                Need attention
              </dd>
            </div>
          </dl>
        </div>
      </div>
      
      {/* Gold Stock Table */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Gold Stock by Purity</h3>
          <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="h-3 w-3 mr-1" />
            Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gold Purity
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Weight (g)
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  % of Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inventoryData.goldStock.byPurity.map((item) => (
                <tr key={item.purity} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.purity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.weight}g
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${item.value.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {((item.weight / inventoryData.goldStock.total) * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Top Categories */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Inventory by Category</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  % of Total Value
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inventoryData.topCategories.map((category) => (
                <tr key={category.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {category.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {category.count}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${category.value.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {((category.value / inventoryData.totalValue) * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
