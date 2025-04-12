"use client";

import React, { useState, useEffect } from 'react';
import { BarChart, Users, ShoppingCart, Tag, Coins, Store, Package, TrendingUp, AlertTriangle } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";
import TranslatedText from "@/components/TranslatedText";

const StoreManagerDashboard = () => {
  // Use language context to trigger re-renders when language changes
  useLanguage();
  const [userName, setUserName] = useState<string>('');
  const [branchName, setBranchName] = useState<string>('');
  const [branchId, setBranchId] = useState<string>('');

  // Branch mapping function
  const getBranchNameById = (id: string | null): string => {
    if (!id) return "";

    const branchMap: {[key: string]: string} = {
      "1": "Mahiyanganaya Branch",
      "2": "Mahaoya Branch"
    };

    return branchMap[id] || `Branch ${id}`;
  };

  useEffect(() => {
    // Get user info from localStorage if available
    const storedName = localStorage.getItem('userName');
    const storedBranch = localStorage.getItem('branchName');
    const storedBranchId = localStorage.getItem('branchId');

    console.log("StoreManager Dashboard - localStorage values:");
    console.log("userName:", storedName);
    console.log("branchName:", storedBranch);
    console.log("branchId:", storedBranchId);

    if (storedName) {
      setUserName(storedName);
    }

    // Use stored branch name if available, otherwise use the branch ID mapping
    if (storedBranch) {
      setBranchName(storedBranch);
      console.log("Using stored branch name:", storedBranch);
    } else if (storedBranchId) {
      const mappedBranchName = getBranchNameById(storedBranchId);
      setBranchName(mappedBranchName);
      console.log("Using mapped branch name:", mappedBranchName);

      // Also store it in localStorage for consistency
      if (typeof window !== 'undefined') {
        localStorage.setItem('branchName', mappedBranchName);
      }
    }

    // Set branch ID state
    if (storedBranchId) {
      setBranchId(storedBranchId);
    }
  }, []);

  // Dashboard card component
  const DashboardCard = ({ icon: Icon, title, value, color }: { icon: any, title: string, value: string, color: string }) => (
    <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${color}`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-500 text-sm font-medium">
            <TranslatedText textKey={`dashboard.${title.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')}`} fallback={title} />
          </h3>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${color.replace('border-l-4', 'bg').replace('-500', '-100')}`}>
          <Icon className={color.replace('border-l-4 border', 'text')} size={24} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Store Manager Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Welcome back{userName ? `, ${userName}` : ''}!
        </p>

        {/* Branch information - more prominent display */}
        <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200 flex items-center">
          <Store className="text-blue-500 mr-2" size={20} />
          <div>
            <p className="font-medium text-blue-800">
              {branchName ? `Managing: ${branchName}` : "No branch assigned"}
            </p>
            <p className="text-xs text-blue-600">
              Branch ID: {branchId || "Not assigned"}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          icon={ShoppingCart}
          title="Today's Sales"
          value="LKR 124,500"
          color="border-l-4 border-blue-500"
        />

        <DashboardCard
          icon={Package}
          title="Inventory Items"
          value="1,245"
          color="border-l-4 border-purple-500"
        />
        <DashboardCard
          icon={AlertTriangle}
          title="Low Stock Items"
          value="12"
          color="border-l-4 border-red-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Branch Performance</h2>
            <button className="text-blue-500 hover:text-blue-700">View Report</button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Sales Target</span>
              <span className="text-sm font-medium">LKR 500,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Current: LKR 375,000</span>
              <span>75% of monthly target</span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Customer Satisfaction</span>
              <span className="text-sm font-medium">4.8/5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '96%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Staff Overview</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">Amal Perera</td>
                  <td className="px-4 py-3 whitespace-nowrap">Sales Associate</td>
                  <td className="px-4 py-3 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Present</span></td>
                  <td className="px-4 py-3 whitespace-nowrap">LKR 42,500</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">Nimal Silva</td>
                  <td className="px-4 py-3 whitespace-nowrap">Sales Associate</td>
                  <td className="px-4 py-3 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Present</span></td>
                  <td className="px-4 py-3 whitespace-nowrap">LKR 38,750</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">Kamala Jayawardene</td>
                  <td className="px-4 py-3 whitespace-nowrap">Cashier</td>
                  <td className="px-4 py-3 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Absent</span></td>
                  <td className="px-4 py-3 whitespace-nowrap">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Inventory Alerts</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Stock</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">Gold Chain - 22K</td>
                  <td className="px-4 py-3 whitespace-nowrap">Necklaces</td>
                  <td className="px-4 py-3 whitespace-nowrap">3</td>
                  <td className="px-4 py-3 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Low Stock</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">Diamond Earrings</td>
                  <td className="px-4 py-3 whitespace-nowrap">Earrings</td>
                  <td className="px-4 py-3 whitespace-nowrap">5</td>
                  <td className="px-4 py-3 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Reorder</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap">Silver Anklets</td>
                  <td className="px-4 py-3 whitespace-nowrap">Anklets</td>
                  <td className="px-4 py-3 whitespace-nowrap">2</td>
                  <td className="px-4 py-3 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Low Stock</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-blue-50 rounded-lg flex flex-col items-center justify-center hover:bg-blue-100 transition duration-200">
              <Store className="text-blue-500 mb-2" size={24} />
              <span className="text-sm font-medium">Inventory</span>
            </button>
            <button className="p-4 bg-green-50 rounded-lg flex flex-col items-center justify-center hover:bg-green-100 transition duration-200">
              <Users className="text-green-500 mb-2" size={24} />
              <span className="text-sm font-medium">Staff</span>
            </button>
            <button className="p-4 bg-purple-50 rounded-lg flex flex-col items-center justify-center hover:bg-purple-100 transition duration-200">
              <ShoppingCart className="text-purple-500 mb-2" size={24} />
              <span className="text-sm font-medium">Sales</span>
            </button>
            <button className="p-4 bg-yellow-50 rounded-lg flex flex-col items-center justify-center hover:bg-yellow-100 transition duration-200">
              <TrendingUp className="text-yellow-500 mb-2" size={24} />
              <span className="text-sm font-medium">Reports</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreManagerDashboard;
