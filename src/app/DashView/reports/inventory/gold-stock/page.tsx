"use client";

import React, { useState, useEffect } from 'react';
import { BarChart, Download, Printer, ArrowLeft, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { getGoldStockReport } from '@/services/reportService';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface GoldStockItem {
  purity: string;
  weight: number;
  price_per_gram: number;
  value: number;
  description?: string;
  status?: string;
}

interface Transaction {
  stock_id: number;
  purity: string;
  quantity_in_grams: number;
  price_per_gram: number;
  last_updated: string;
  description?: string;
}

interface GoldStockData {
  goldStock: GoldStockItem[];
  summary: {
    totalWeight: number;
    totalValue: number;
    averagePrice: number;
  };
  recentTransactions: Transaction[];
}

export default function GoldStockReportPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [goldStockData, setGoldStockData] = useState<GoldStockData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Format currency
  const formatCurrency = (amount: number) => {
    return `LKR ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Format weight
  const formatWeight = (weight: number) => {
    return `${weight.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} g`;
  };

  // Fetch gold stock data
  const fetchGoldStockData = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await getGoldStockReport();
      setGoldStockData(data);
    } catch (err) {
      console.error('Error fetching gold stock data:', err);
      setError('Failed to load gold stock data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on initial load
  useEffect(() => {
    fetchGoldStockData();
  }, []);

  const handleRefresh = () => {
    fetchGoldStockData();
  };

  // Prepare chart data
  const prepareChartData = () => {
    if (!goldStockData?.goldStock) return [];
    
    return goldStockData.goldStock.map(item => ({
      purity: `${item.purity}K`,
      weight: item.weight,
      value: item.value
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header with back button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center">
          <Link href="/DashView/reports/inventory" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500 hover:text-gray-700" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Gold Stock Report</h1>
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

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      ) : goldStockData ? (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
                  <BarChart className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Total Gold Weight</h3>
                  <p className="text-2xl font-semibold text-gray-900">{formatWeight(goldStockData.summary.totalWeight)}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
                  <BarChart className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Total Value</h3>
                  <p className="text-2xl font-semibold text-gray-900">{formatCurrency(goldStockData.summary.totalValue)}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
                  <BarChart className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Average Price</h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {formatCurrency(goldStockData.summary.averagePrice)} / g
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gold Stock Chart */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Gold Stock by Purity</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={prepareChartData()}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="purity" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" label={{ value: 'Weight (g)', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" label={{ value: 'Value (LKR)', angle: 90, position: 'insideRight' }} />
                  <Tooltip formatter={(value, name) => {
                    if (name === 'weight') return [`${value.toFixed(2)} g`, 'Weight'];
                    if (name === 'value') return [`LKR ${value.toLocaleString()}`, 'Value'];
                    return [value, name];
                  }} />
                  <Legend />
                  <Bar yAxisId="left" dataKey="weight" name="Weight (g)" fill="#8884d8" />
                  <Bar yAxisId="right" dataKey="value" name="Value (LKR)" fill="#82ca9d" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Gold Stock Table */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Gold Stock Details</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Gold Purity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Weight
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price per Gram
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Value
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {goldStockData.goldStock.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.purity}K
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatWeight(item.weight)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatCurrency(item.price_per_gram)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatCurrency(item.value)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.description || '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Gold Transactions</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Purity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price per Gram
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {goldStockData.recentTransactions.map((transaction) => (
                    <tr key={transaction.stock_id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(transaction.last_updated).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {transaction.purity}K
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatWeight(transaction.quantity_in_grams)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatCurrency(transaction.price_per_gram)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.description || '-'}
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
              <p className="text-sm text-yellow-700">No gold stock data available. Please try refreshing.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
