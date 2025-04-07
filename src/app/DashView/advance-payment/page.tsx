"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  CreditCard,
  DollarSign,
  Package,
  ShoppingBag,
  User,
  Calendar,
  FileText,
  CheckCircle,
  X
} from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

// Define types
interface JewelleryItem {
  item_id: number;
  product_title: string;
  category: string;
  selling_price: number;
  in_stock: number;
}

interface CustomOrder {
  order_id: number;
  order_reference: string;
  customer_name: string;
  total_amount: number;
  status: string;
}

// Payment type enum
enum PaymentType {
  INVENTORY_ITEM = 'inventory_item',
  CUSTOM_ORDER = 'custom_order'
}

const AdvancePaymentPage = () => {
  const router = useRouter();

  // State for form fields
  const [paymentType, setPaymentType] = useState<PaymentType>(PaymentType.INVENTORY_ITEM);
  const [customerName, setCustomerName] = useState('');
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [advanceAmount, setAdvanceAmount] = useState<number>(0);
  const [balanceAmount, setBalanceAmount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState<number>(1);

  // State for selected items
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);

  // State for data
  const [availableItems, setAvailableItems] = useState<JewelleryItem[]>([]);
  const [customOrders, setCustomOrders] = useState<CustomOrder[]>([]);
  const [selectedItem, setSelectedItem] = useState<JewelleryItem | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<CustomOrder | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<JewelleryItem[]>([]);

  // State for UI
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [paymentReference, setPaymentReference] = useState<string | null>(null);

  // Fetch available items and custom orders on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch available items
        const itemsResponse = await fetch('http://localhost:3002/advance-payments/items/available');
        if (itemsResponse.ok) {
          const itemsData = await itemsResponse.json();
          setAvailableItems(itemsData);

          // Extract unique categories
          const uniqueCategories = Array.from(new Set(itemsData.map((item: JewelleryItem) => item.category)));
          setCategories(uniqueCategories);
          if (uniqueCategories.length > 0) {
            setSelectedCategory(uniqueCategories[0]);
          }
        }

        // Fetch custom orders
        const ordersResponse = await fetch('http://localhost:3002/advance-payments/orders/custom');
        if (ordersResponse.ok) {
          const ordersData = await ordersResponse.json();
          setCustomOrders(ordersData);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter items by selected category
  useEffect(() => {
    if (selectedCategory) {
      const filtered = availableItems.filter(item => item.category === selectedCategory);
      setFilteredItems(filtered);
    } else {
      setFilteredItems(availableItems);
    }
  }, [selectedCategory, availableItems]);

  // Update selected item when item ID changes
  useEffect(() => {
    if (selectedItemId) {
      const item = availableItems.find(item => item.item_id === selectedItemId);
      setSelectedItem(item || null);

      if (item) {
        // Calculate total amount based on item price and quantity
        const total = item.selling_price * quantity;
        setTotalAmount(total);
      }
    } else {
      setSelectedItem(null);
    }
  }, [selectedItemId, availableItems, quantity]);

  // Update selected order when order ID changes
  useEffect(() => {
    if (selectedOrderId) {
      const order = customOrders.find(order => order.order_id === selectedOrderId);
      setSelectedOrder(order || null);

      if (order) {
        // Set customer name and total amount from the order
        setCustomerName(order.customer_name);
        setTotalAmount(order.total_amount);
      }
    } else {
      setSelectedOrder(null);
    }
  }, [selectedOrderId, customOrders]);

  // Calculate balance amount when total or advance amount changes
  useEffect(() => {
    setBalanceAmount(totalAmount - advanceAmount);
  }, [totalAmount, advanceAmount]);

  // Handle payment type change
  const handlePaymentTypeChange = (type: PaymentType) => {
    setPaymentType(type);
    // Reset selections
    setSelectedItemId(null);
    setSelectedOrderId(null);
    setCustomerName('');
    setTotalAmount(0);
    setAdvanceAmount(0);
    setQuantity(1);
  };

  // Handle category change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setSelectedItemId(null);
  };

  // Handle item selection
  const handleItemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const itemId = parseInt(e.target.value);
    setSelectedItemId(itemId);
  };

  // Handle order selection
  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const orderId = parseInt(e.target.value);
    setSelectedOrderId(orderId);
  };

  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const qty = parseInt(e.target.value);
    if (qty > 0) {
      setQuantity(qty);

      // Update total amount if item is selected
      if (selectedItem) {
        setTotalAmount(selectedItem.selling_price * qty);
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!customerName.trim()) {
      setError('Please enter customer name');
      return;
    }

    if (totalAmount <= 0) {
      setError('Total amount must be greater than zero');
      return;
    }

    if (advanceAmount <= 0) {
      setError('Advance amount must be greater than zero');
      return;
    }

    if (advanceAmount > totalAmount) {
      setError('Advance amount cannot be greater than total amount');
      return;
    }

    if (paymentType === PaymentType.INVENTORY_ITEM && !selectedItemId) {
      setError('Please select an item');
      return;
    }

    if (paymentType === PaymentType.CUSTOM_ORDER && !selectedOrderId) {
      setError('Please select a custom order');
      return;
    }

    // Get user info from localStorage
    const userId = localStorage.getItem('userId');
    const branchId = localStorage.getItem('branchId');

    // Prepare data for submission
    const paymentData = {
      customer_name: customerName,
      total_amount: totalAmount,
      advance_amount: advanceAmount,
      payment_method: paymentMethod,
      notes,
      created_by: userId ? parseInt(userId) : null,
      branch_id: branchId ? parseInt(branchId) : null,
      is_custom_order: paymentType === PaymentType.CUSTOM_ORDER,
      order_id: paymentType === PaymentType.CUSTOM_ORDER ? parseInt(selectedOrderId as unknown as string) : null,
      item_id: paymentType === PaymentType.INVENTORY_ITEM ? selectedItemId : null,
      item_quantity: paymentType === PaymentType.INVENTORY_ITEM ? quantity : null
    };

    // Log the data being sent
    console.log('Sending payment data:', paymentData);

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3002/advance-payments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create advance payment');
      }

      const result = await response.json();

      // Show success message
      setSuccess('Advance payment created successfully!');
      setPaymentReference(result.payment_reference);
      setShowSuccessModal(true);

      // Reset form after successful submission
      if (paymentType === PaymentType.INVENTORY_ITEM) {
        setSelectedItemId(null);
        setQuantity(1);
      } else {
        setSelectedOrderId(null);
      }

      setCustomerName('');
      setTotalAmount(0);
      setAdvanceAmount(0);
      setNotes('');

    } catch (err) {
      console.error('Error creating advance payment:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while creating the advance payment');
    } finally {
      setLoading(false);
    }
  };

  // Handle cancel button
  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Advance Payment</h1>

      {/* Error message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <span className="block sm:inline">{error}</span>
          <button
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => setError(null)}
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* Success message */}
      {success && !showSuccessModal && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          <span className="block sm:inline">{success}</span>
          <button
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => setSuccess(null)}
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* Payment type selection */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Payment Type</h2>
        <div className="flex space-x-4">
          <button
            type="button"
            className={`flex items-center px-4 py-2 rounded-md ${
              paymentType === PaymentType.INVENTORY_ITEM
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => handlePaymentTypeChange(PaymentType.INVENTORY_ITEM)}
          >
            <ShoppingBag className="mr-2" size={18} />
            Inventory Item
          </button>
          <button
            type="button"
            className={`flex items-center px-4 py-2 rounded-md ${
              paymentType === PaymentType.CUSTOM_ORDER
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => handlePaymentTypeChange(PaymentType.CUSTOM_ORDER)}
          >
            <Package className="mr-2" size={18} />
            Custom Order
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        {/* Item or Order Selection */}
        {paymentType === PaymentType.INVENTORY_ITEM ? (
          <div className="mb-6 space-y-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <div className="relative">
                <select
                  id="category"
                  className="block w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="item" className="block text-sm font-medium text-gray-700 mb-1">
                Item
              </label>
              <div className="relative">
                <select
                  id="item"
                  className="block w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  value={selectedItemId || ''}
                  onChange={handleItemChange}
                >
                  <option value="">Select an item</option>
                  {filteredItems.map(item => (
                    <option key={item.item_id} value={item.item_id}>
                      {item.product_title} - {formatCurrency(item.selling_price)} ({item.in_stock} in stock)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={quantity}
                onChange={handleQuantityChange}
                disabled={!selectedItem}
                max={selectedItem?.in_stock || 1}
              />
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <label htmlFor="order" className="block text-sm font-medium text-gray-700 mb-1">
              Custom Order
            </label>
            <div className="relative">
              <select
                id="order"
                className="block w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                value={selectedOrderId || ''}
                onChange={handleOrderChange}
              >
                <option value="">Select a custom order</option>
                {customOrders.map(order => (
                  <option key={order.order_id} value={order.order_id}>
                    {order.order_reference} - {order.customer_name} - {formatCurrency(order.total_amount)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Customer Information */}
        <div className="mb-6">
          <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">
            Customer Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="customerName"
              className="block w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter customer name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              readOnly={paymentType === PaymentType.CUSTOM_ORDER && !!selectedOrder}
            />
          </div>
        </div>

        {/* Payment Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="totalAmount" className="block text-sm font-medium text-gray-700 mb-1">
              Total Amount
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                id="totalAmount"
                className="block w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="0.00"
                value={totalAmount || ''}
                onChange={(e) => setTotalAmount(parseFloat(e.target.value) || 0)}
                readOnly={
                  (paymentType === PaymentType.INVENTORY_ITEM && !!selectedItem) ||
                  (paymentType === PaymentType.CUSTOM_ORDER && !!selectedOrder)
                }
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div>
            <label htmlFor="advanceAmount" className="block text-sm font-medium text-gray-700 mb-1">
              Advance Amount
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                id="advanceAmount"
                className="block w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="0.00"
                value={advanceAmount || ''}
                onChange={(e) => setAdvanceAmount(parseFloat(e.target.value) || 0)}
                min="0"
                max={totalAmount}
                step="0.01"
              />
            </div>
          </div>

          <div>
            <label htmlFor="balanceAmount" className="block text-sm font-medium text-gray-700 mb-1">
              Balance Amount
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                id="balanceAmount"
                className="block w-full pl-10 p-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500"
                value={balanceAmount || ''}
                readOnly
              />
            </div>
          </div>

          <div>
            <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CreditCard className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="paymentMethod"
                className="block w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="Cash">Cash</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Cheque">Cheque</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="mb-6">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Notes (Optional)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FileText className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              id="notes"
              className="block w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Add any additional notes here"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Confirm Payment'}
          </button>
        </div>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex items-center justify-center mb-4 text-green-500">
              <CheckCircle size={48} />
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">Payment Successful!</h2>
            <p className="text-center mb-2">Your advance payment has been processed successfully.</p>
            {paymentReference && (
              <p className="text-center font-semibold mb-6">Reference: {paymentReference}</p>
            )}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                Close
              </button>
              <button
                onClick={() => {
                  // Implement print functionality here
                  window.print();
                }}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Print Receipt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancePaymentPage;
