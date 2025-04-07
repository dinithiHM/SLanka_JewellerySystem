"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  DollarSign, 
  Calendar, 
  User,
  Package,
  ShoppingBag,
  CreditCard,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

// Define types
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
  order_reference: string | null;
  item_name: string | null;
  item_category: string | null;
  item_quantity: number | null;
  branch_name: string;
  created_by_first_name: string;
  created_by_last_name: string;
}

const ViewAdvancePaymentsPage = () => {
  const router = useRouter();
  
  // State for data
  const [payments, setPayments] = useState<AdvancePayment[]>([]);
  const [filteredPayments, setFilteredPayments] = useState<AdvancePayment[]>([]);
  
  // State for UI
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [sortField, setSortField] = useState<string>('payment_date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [selectedPayment, setSelectedPayment] = useState<AdvancePayment | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  
  // Fetch advance payments on component mount
  useEffect(() => {
    const fetchPayments = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3002/advance-payments');
        if (!response.ok) {
          throw new Error(`Failed to fetch payments: ${response.status}`);
        }
        
        const data = await response.json();
        setPayments(data);
        setFilteredPayments(data);
      } catch (err) {
        console.error('Error fetching advance payments:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while fetching payments');
      } finally {
        setLoading(false);
      }
    };
    
    fetchPayments();
  }, []);
  
  // Apply filters and search
  useEffect(() => {
    let result = [...payments];
    
    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(payment => 
        payment.payment_reference.toLowerCase().includes(term) ||
        payment.customer_name.toLowerCase().includes(term) ||
        (payment.order_reference && payment.order_reference.toLowerCase().includes(term)) ||
        (payment.item_name && payment.item_name.toLowerCase().includes(term))
      );
    }
    
    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter(payment => payment.payment_status === statusFilter);
    }
    
    // Apply type filter
    if (typeFilter !== 'all') {
      if (typeFilter === 'custom') {
        result = result.filter(payment => payment.is_custom_order);
      } else if (typeFilter === 'inventory') {
        result = result.filter(payment => !payment.is_custom_order);
      }
    }
    
    // Apply sorting
    result.sort((a, b) => {
      let comparison = 0;
      
      if (sortField === 'payment_date') {
        comparison = new Date(a.payment_date).getTime() - new Date(b.payment_date).getTime();
      } else if (sortField === 'total_amount') {
        comparison = a.total_amount - b.total_amount;
      } else if (sortField === 'balance_amount') {
        comparison = a.balance_amount - b.balance_amount;
      } else if (sortField === 'customer_name') {
        comparison = a.customer_name.localeCompare(b.customer_name);
      }
      
      return sortDirection === 'asc' ? comparison : -comparison;
    });
    
    setFilteredPayments(result);
  }, [payments, searchTerm, statusFilter, typeFilter, sortField, sortDirection]);
  
  // Handle sort change
  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  // Get status badge color
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Partially Paid':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pending':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
  
  // Handle view details
  const handleViewDetails = (payment: AdvancePayment) => {
    setSelectedPayment(payment);
    setShowDetailsModal(true);
  };
  
  // Handle make additional payment
  const handleMakeAdditionalPayment = (payment: AdvancePayment) => {
    // Implement additional payment functionality
    // This could navigate to a new page or open a modal
    console.log('Make additional payment for:', payment);
  };
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Advance Payments</h1>
      
      {/* Error message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search payments..."
                className="pl-10 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="Completed">Completed</option>
                <option value="Partially Paid">Partially Paid</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="custom">Custom Orders</option>
                <option value="inventory">Inventory Items</option>
              </select>
            </div>
          </div>
          
          <button
            onClick={() => router.push('/DashView/advance-payment')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            New Advance Payment
          </button>
        </div>
      </div>
      
      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredPayments.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No advance payments found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('payment_date')}
                  >
                    <div className="flex items-center">
                      <span>Date</span>
                      {sortField === 'payment_date' && (
                        sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('customer_name')}
                  >
                    <div className="flex items-center">
                      <span>Customer</span>
                      {sortField === 'customer_name' && (
                        sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reference
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('total_amount')}
                  >
                    <div className="flex items-center">
                      <span>Total</span>
                      {sortField === 'total_amount' && (
                        sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Advance
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('balance_amount')}
                  >
                    <div className="flex items-center">
                      <span>Balance</span>
                      {sortField === 'balance_amount' && (
                        sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPayments.map((payment) => (
                  <tr key={payment.payment_id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                        <span>{formatDate(payment.payment_date)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-gray-400 mr-2" />
                        <span>{payment.customer_name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {payment.payment_reference}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {payment.is_custom_order ? (
                          <>
                            <Package className="h-5 w-5 text-purple-500 mr-2" />
                            <span>Custom Order</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="h-5 w-5 text-blue-500 mr-2" />
                            <span>Inventory Item</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-gray-400 mr-1" />
                        <span>{formatCurrency(payment.total_amount)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-green-500 mr-1" />
                        <span>{formatCurrency(payment.advance_amount)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-red-500 mr-1" />
                        <span>{formatCurrency(payment.balance_amount)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(payment.payment_status)}`}>
                        <div className="flex items-center">
                          {getStatusIcon(payment.payment_status)}
                          {payment.payment_status}
                        </div>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleViewDetails(payment)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View
                        </button>
                        {payment.payment_status !== 'Completed' && (
                          <button
                            onClick={() => handleMakeAdditionalPayment(payment)}
                            className="text-green-600 hover:text-green-900"
                          >
                            Pay
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      {/* Payment Details Modal */}
      {showDetailsModal && selectedPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Payment Details</h2>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Reference</h3>
                <p className="mt-1 text-sm text-gray-900">{selectedPayment.payment_reference}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Date</h3>
                <p className="mt-1 text-sm text-gray-900">{formatDate(selectedPayment.payment_date)}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Customer</h3>
                <p className="mt-1 text-sm text-gray-900">{selectedPayment.customer_name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Branch</h3>
                <p className="mt-1 text-sm text-gray-900">{selectedPayment.branch_name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Created By</h3>
                <p className="mt-1 text-sm text-gray-900">{`${selectedPayment.created_by_first_name} ${selectedPayment.created_by_last_name}`}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Payment Method</h3>
                <p className="mt-1 text-sm text-gray-900 flex items-center">
                  <CreditCard className="h-4 w-4 mr-1 text-gray-500" />
                  {selectedPayment.payment_method}
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Item Details</h3>
              {selectedPayment.is_custom_order ? (
                <div className="bg-purple-50 p-3 rounded-md">
                  <div className="flex items-center mb-2">
                    <Package className="h-5 w-5 text-purple-500 mr-2" />
                    <span className="font-medium">Custom Order</span>
                  </div>
                  {selectedPayment.order_reference && (
                    <p className="text-sm text-gray-700">Order Reference: {selectedPayment.order_reference}</p>
                  )}
                </div>
              ) : (
                <div className="bg-blue-50 p-3 rounded-md">
                  <div className="flex items-center mb-2">
                    <ShoppingBag className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="font-medium">Inventory Item</span>
                  </div>
                  {selectedPayment.item_name && (
                    <>
                      <p className="text-sm text-gray-700">Item: {selectedPayment.item_name}</p>
                      <p className="text-sm text-gray-700">Category: {selectedPayment.item_category}</p>
                      <p className="text-sm text-gray-700">Quantity: {selectedPayment.item_quantity}</p>
                    </>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Total Amount</h3>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{formatCurrency(selectedPayment.total_amount)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Advance Paid</h3>
                  <p className="mt-1 text-lg font-semibold text-green-600">{formatCurrency(selectedPayment.advance_amount)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Balance</h3>
                  <p className="mt-1 text-lg font-semibold text-red-600">{formatCurrency(selectedPayment.balance_amount)}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${getStatusBadgeColor(selectedPayment.payment_status)}`}>
                <div className="flex items-center">
                  {getStatusIcon(selectedPayment.payment_status)}
                  {selectedPayment.payment_status}
                </div>
              </span>
              
              {selectedPayment.payment_status !== 'Completed' && (
                <button
                  onClick={() => {
                    setShowDetailsModal(false);
                    handleMakeAdditionalPayment(selectedPayment);
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Make Additional Payment
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewAdvancePaymentsPage;
