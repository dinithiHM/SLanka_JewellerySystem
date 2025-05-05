"use client";

import React, { useState, useEffect } from 'react';
import { BarChart, Users, ShoppingCart, Tag, Coins, Store, Package, TrendingUp, AlertTriangle, Clock, CheckCircle, AlertCircle, Mail, Calendar } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";
import TranslatedText from "@/components/TranslatedText";

// Define types for advance payments
interface AdvancePayment {
  payment_id: number;
  payment_reference: string;
  customer_name: string;
  payment_date: string;
  total_amount: number;
  advance_amount: number;
  balance_amount: number;
  payment_status: 'Pending' | 'Partially Paid' | 'Completed';
  payment_method: string;
  is_custom_order: boolean;
  order_id: number | null;
  order_reference: string | null;
  item_id: number | null;
  item_name: string | null;
  item_category: string | null;
  item_quantity: number | null;
  branch_name: string;
  branch_id: number;
  created_by_first_name: string;
  created_by_last_name: string;
}

const StoreManagerDashboard = () => {
  // Use language context to trigger re-renders when language changes
  useLanguage();
  const [userName, setUserName] = useState<string>('');
  const [branchName, setBranchName] = useState<string>('');
  const [branchId, setBranchId] = useState<string>('');

  // State for outstanding payments
  const [outstandingPayments, setOutstandingPayments] = useState<AdvancePayment[]>([]);
  const [loadingPayments, setLoadingPayments] = useState<boolean>(true);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [sendingEmail, setSendingEmail] = useState<boolean>(false);
  const [emailSuccess, setEmailSuccess] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  // Branch mapping function
  const getBranchNameById = (id: string | null): string => {
    if (!id) return "";

    const branchMap: {[key: string]: string} = {
      "1": "Mahiyanganaya Branch",
      "2": "Mahaoya Branch"
    };

    return branchMap[id] || `Branch ${id}`;
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Check if a date is older than 10 days
  const isOlderThan10Days = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 10;
  };

  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle size={16} className="mr-1" />;
      case 'Partially Paid':
        return <Clock size={16} className="mr-1" />;
      case 'Pending':
        return <AlertCircle size={16} className="mr-1" />;
      default:
        return null;
    }
  };

  // Fetch outstanding payments
  const fetchOutstandingPayments = async (branchId: string) => {
    setLoadingPayments(true);
    setPaymentError(null);

    try {
      // Construct URL with query parameters for branch filtering
      let url = 'http://localhost:3002/advance-payments';
      const params = new URLSearchParams();

      // Set role parameter (store manager)
      params.append('role', 'store_manager');

      // Use grouped endpoint to get latest payment for each order/customer
      params.append('grouped', 'true');

      // Filter by branch
      params.append('branch_id', branchId);

      // Only get payments that are not completed
      params.append('status', 'outstanding');

      // Add the parameters to the URL
      url += `?${params.toString()}`;

      console.log('Fetching outstanding payments from:', url);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch payments: ${response.status}`);
      }

      const data = await response.json();

      // Log the data for debugging
      console.log('Received outstanding payments:', data);

      // Create a map to ensure we only have one entry per customer-order combination
      const uniquePayments = new Map();

      // Process each payment
      data.forEach(payment => {
        // Create a unique key for each customer-order combination
        const key = payment.is_custom_order
          ? `${payment.customer_name}-${payment.order_id}`
          : `${payment.customer_name}-${payment.item_id}`;

        // If we already have this combination, only keep the one with the latest payment_id
        if (!uniquePayments.has(key) || payment.payment_id > uniquePayments.get(key).payment_id) {
          uniquePayments.set(key, payment);
        }
      });

      // Convert the map values back to an array
      const uniquePaymentsArray = Array.from(uniquePayments.values());
      console.log('Filtered to unique customer-order combinations:', uniquePaymentsArray);

      setOutstandingPayments(uniquePaymentsArray);
    } catch (err) {
      console.error('Error fetching outstanding payments:', err);
      setPaymentError(err instanceof Error ? err.message : 'An error occurred while fetching payments');
    } finally {
      setLoadingPayments(false);
    }
  };

  // Send payment reminder email
  const sendPaymentReminder = async (payment: AdvancePayment) => {
    setSendingEmail(true);
    setEmailSuccess(null);
    setEmailError(null);

    try {
      let endpoint = '';

      if (payment.is_custom_order && payment.order_id) {
        // For custom orders
        endpoint = `http://localhost:3002/custom-orders/${payment.order_id}/send-reminder`;
      } else {
        // For inventory items, we'll need to create a new endpoint or use a generic one
        endpoint = `http://localhost:3002/advance-payments/${payment.payment_id}/send-reminder`;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setEmailSuccess(`Payment reminder sent to ${payment.customer_name}`);

        // Auto-hide success message after 5 seconds
        setTimeout(() => setEmailSuccess(null), 5000);
      } else {
        setEmailError(data.message || 'Failed to send payment reminder');
      }
    } catch (err) {
      console.error('Error sending payment reminder:', err);
      setEmailError(err instanceof Error ? err.message : 'An error occurred while sending the reminder');
    } finally {
      setSendingEmail(false);
    }
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

      // Fetch outstanding payments for this branch
      fetchOutstandingPayments(storedBranchId);
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
            <h2 className="text-xl font-bold">Customers with Outstanding Payments</h2>
            <button
              onClick={() => fetchOutstandingPayments(branchId)}
              className="text-blue-500 hover:text-blue-700 flex items-center"
            >
              <Clock className="mr-1" size={16} />
              Refresh
            </button>
          </div>

          {/* Email success/error messages */}
          {emailSuccess && (
            <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
              {emailSuccess}
            </div>
          )}

          {emailError && (
            <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
              {emailError}
            </div>
          )}

          {/* Loading state */}
          {loadingPayments ? (
            <div className="flex justify-center items-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : paymentError ? (
            <div className="p-4 text-center text-red-500">
              Error loading data: {paymentError}
            </div>
          ) : outstandingPayments.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              No customers with outstanding payments found.
            </div>
          ) : (
            <div className="overflow-y-auto max-h-80">
              {outstandingPayments.map((payment) => (
                <div
                  key={payment.payment_id}
                  className={`mb-3 p-3 border rounded-lg ${
                    isOlderThan10Days(payment.payment_date)
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 bg-white'
                  }`}
                  // Add a unique identifier as a data attribute for debugging
                  data-customer-order={payment.is_custom_order
                    ? `${payment.customer_name}-${payment.order_id}`
                    : `${payment.customer_name}-${payment.item_id}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">
                        {payment.customer_name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {payment.is_custom_order
                          ? `Custom Order #${payment.order_reference || payment.order_id}`
                          : `Item: ${payment.item_name}`
                        }
                      </div>
                      <div className="flex items-center text-sm mt-1">
                        <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                        <span className={isOlderThan10Days(payment.payment_date) ? 'text-red-600 font-medium' : ''}>
                          {formatDate(payment.payment_date)}
                          {isOlderThan10Days(payment.payment_date) && ' (Overdue)'}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        {getStatusIcon(payment.payment_status)}
                        <span className="text-sm font-medium">
                          {payment.payment_status}
                        </span>
                      </div>
                      <div className="text-sm font-bold mt-1">
                        Balance: LKR {payment.balance_amount.toLocaleString()}
                      </div>
                      <button
                        onClick={() => sendPaymentReminder(payment)}
                        disabled={sendingEmail}
                        className={`mt-2 px-2 py-1 text-xs rounded flex items-center ${
                          sendingEmail
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                        }`}
                      >
                        <Mail className="h-3 w-3 mr-1" />
                        Send Reminder
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
