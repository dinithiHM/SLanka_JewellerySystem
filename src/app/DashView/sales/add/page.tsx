"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Plus, X, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { formatCurrency } from '@/utils/formatters';

interface JewelleryItem {
  item_id: number | string;
  product_title: string;
  category: string;
  in_stock: number;
  selling_price: number;
}

interface SaleItem {
  item_id: number | string;
  product_title: string;
  quantity: number;
  unit_price: number;
  subtotal: number;
}

const AddSalePage = () => {
  const router = useRouter();

  // Available items from inventory
  const [availableItems, setAvailableItems] = useState<JewelleryItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<JewelleryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  // Current sale
  const [selectedItem, setSelectedItem] = useState<JewelleryItem | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [saleItems, setSaleItems] = useState<SaleItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [branchId, setBranchId] = useState<string | null>(null);

  // UI states
  const [showItemDropdown, setShowItemDropdown] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  // Get user info from localStorage
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedBranchId = localStorage.getItem('branchId');

    if (storedUserId) {
      setUserId(storedUserId);
      console.log('User ID set from localStorage:', storedUserId);
    }

    if (storedBranchId) {
      setBranchId(storedBranchId);
      console.log('Branch ID set from localStorage:', storedBranchId);
    }
  }, []);

  // Fetch available items
  useEffect(() => {
    const fetchAvailableItems = async () => {
      try {
        setLoading(true);
        setError(null);

        // First test if the sale items router is working
        console.log('Testing sale items router...');
        const testResponse = await fetch(`http://localhost:3002/sale-items/test?t=${new Date().getTime()}`);

        if (!testResponse.ok) {
          console.error('Test route failed:', testResponse.status);
          throw new Error(`Sale items API test failed: ${testResponse.status}`);
        }

        const testData = await testResponse.json();
        console.log('Test route response:', testData);

        // If test route works, try the actual endpoint
        console.log('Fetching available items...');
        const response = await fetch(`http://localhost:3002/sale-items/available?t=${new Date().getTime()}`);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errorMessage = errorData.message || `Failed to fetch available items: ${response.status}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log('Initial fetch - available items:', data); // Debug log
        setAvailableItems(data);
        setFilteredItems(data);
      } catch (err) {
        console.error('Error fetching available items:', err);
        setError('Failed to fetch items. Please try again.');

        // Initialize with empty arrays instead of sample data
        setAvailableItems([]);
        setFilteredItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailableItems();
  }, []);

  // Filter items based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredItems(availableItems);
    } else {
      const term = searchTerm.toLowerCase();
      const filtered = availableItems.filter(item =>
        item.product_title.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
      );
      setFilteredItems(filtered);
    }
  }, [searchTerm, availableItems]);

  // Calculate total
  const totalAmount = saleItems.reduce((sum, item) => sum + item.subtotal, 0);

  // Handle item selection
  const handleSelectItem = (item: JewelleryItem) => {
    if (item.in_stock <= 0) {
      setError(`${item.product_title} is out of stock`);
      return;
    }
    setSelectedItem(item);
    setQuantity(1);
    setShowItemDropdown(false);
    setError(null);
  };

  // Handle adding item to sale
  const handleAddItem = () => {
    return new Promise<boolean>((resolve) => {
      if (!selectedItem) {
        setError('Please select an item');
        resolve(false);
        return;
      }

      if (quantity <= 0) {
        setError('Quantity must be greater than 0');
        resolve(false);
        return;
      }

      if (quantity > selectedItem.in_stock) {
        setError(`Only ${selectedItem.in_stock} items available in stock`);
        resolve(false);
        return;
      }

      const subtotal = quantity * selectedItem.selling_price;

      const newItem: SaleItem = {
        item_id: selectedItem.item_id,
        product_title: selectedItem.product_title,
        quantity,
        unit_price: selectedItem.selling_price,
        subtotal
      };

      // Check if item already exists in sale
      const existingItemIndex = saleItems.findIndex(item => item.item_id === selectedItem.item_id);

      if (existingItemIndex >= 0) {
        // Update existing item
        const updatedItems = [...saleItems];
        const existingItem = updatedItems[existingItemIndex];

        // Check if new total quantity exceeds stock
        const newTotalQuantity = existingItem.quantity + quantity;

        if (newTotalQuantity > selectedItem.in_stock) {
          setError(`Cannot add more than ${selectedItem.in_stock} items (${existingItem.quantity} already in cart)`);
          resolve(false);
          return;
        }

        updatedItems[existingItemIndex] = {
          ...existingItem,
          quantity: newTotalQuantity,
          subtotal: newTotalQuantity * existingItem.unit_price
        };

        setSaleItems(updatedItems);
      } else {
        // Add new item
        setSaleItems(prevItems => [...prevItems, newItem]);
      }

      // Reset selection
      setSelectedItem(null);
      setQuantity(1);
      setError(null);
      resolve(true);
    });
  };

  // Handle removing item from sale
  const handleRemoveItem = (index: number) => {
    const updatedItems = [...saleItems];
    updatedItems.splice(index, 1);
    setSaleItems(updatedItems);
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Validate form
    if (!customerName.trim()) {
      setError('Please enter customer name');
      return;
    }

    // Check if there are items in the cart
    if (saleItems.length === 0) {
      // If no items in cart, check if an item is selected
      if (selectedItem) {
        // Try to add the selected item
        const added = await handleAddItem();
        if (!added) {
          return; // If adding the item failed, stop the submission
        }

        // Wait a moment for state to update
        await new Promise(resolve => setTimeout(resolve, 100));
      } else {
        // No items in cart and no item selected
        setError('Please select and add at least one item');
        return;
      }

      // Double-check that we now have items in the cart
      if (saleItems.length === 0) {
        setError('Please add at least one item using the ADD MORE button');
        return;
      }
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const saleData = {
        customer_name: customerName,
        payment_method: paymentMethod,
        items: saleItems.map(item => ({
          item_id: item.item_id,
          quantity: item.quantity,
          unit_price: item.unit_price
        })),
        user_id: userId,
        branch_id: branchId
      };

      console.log('Submitting sale with user_id:', userId, 'and branch_id:', branchId);

      const response = await fetch('http://localhost:3002/sales/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(saleData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        let errorMessage = errorData.message || `Failed to create sale: ${response.status}`;

        // Check for specific error messages
        if (errorData.error && errorData.error.includes('foreign key constraint fails')) {
          errorMessage = 'One or more items do not exist in the inventory. Please refresh the page and try again.';
        }

        throw new Error(errorMessage);
      }

      const result = await response.json();

      alert(`Sale created successfully! Invoice #: ${result.invoice_number}`);

      // Redirect to view sales page
      router.push('/DashView/sales/view');
    } catch (err) {
      console.error('Error creating sale:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle view sales
  const handleViewSales = () => {
    router.push('/DashView/sales/view');
  };

  // Payment method options
  const paymentMethods = ['Cash', 'Credit Card', 'Debit Card', 'Bank Transfer', 'Check'];

  if (loading) {
    return (
      <div className="p-6 max-w-4xl mx-auto flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Add Sale</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by item name"
              className="w-full p-3 pl-10 pr-4 border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowItemDropdown(true)}
            />
            <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <button
              className="absolute right-3 top-2.5 bg-yellow-400 text-black px-4 py-1 rounded-full"
              onClick={() => {
                setShowItemDropdown(true);
                setIsFetching(true);
                setError(null); // Clear any previous errors

                // First test if the sale items router is working
                fetch(`http://localhost:3002/sale-items/test?t=${new Date().getTime()}`)
                  .then(response => {
                    if (!response.ok) {
                      throw new Error(`Test route failed: ${response.status}`);
                    }
                    return response.json();
                  })
                  .then(data => {
                    console.log('Test route response:', data);
                    // If test route works, try the actual endpoint
                    return fetch(`http://localhost:3002/sale-items/available?t=${new Date().getTime()}`)
                  })
                  .then(response => {
                    if (!response.ok) {
                      throw new Error(`Failed to fetch: ${response.status}`);
                    }
                    return response.json();
                  })
                  .then(data => {
                    console.log('Fetched items:', data); // Debug log
                    setAvailableItems(data);

                    // Filter based on search term if provided
                    const filtered = searchTerm.trim() ?
                      data.filter((item: JewelleryItem) =>
                        item.product_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.category.toLowerCase().includes(searchTerm.toLowerCase())
                      ) : data;

                    setFilteredItems(filtered);
                    setIsFetching(false);
                  })
                  .catch(err => {
                    console.error('Error fetching items:', err);
                    setError('Failed to fetch items. Please try again.');
                    setIsFetching(false);
                  });
              }}
            >
              {isFetching ? (
                <span className="flex items-center">
                  <span className="w-3 h-3 mr-1 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                  Loading...
                </span>
              ) : 'Find'}
            </button>
          </div>

          {/* Item Dropdown */}
          {showItemDropdown && (
            <div className="absolute z-10 mt-1 w-full max-w-3xl bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {filteredItems.length === 0 ? (
                <div className="p-3 text-gray-500">
                  {availableItems.length === 0 ?
                    'No items available in stock. Please add inventory first.' :
                    'No items found matching your search. Try a different search term.'}
                </div>
              ) : (
                filteredItems.map(item => (
                  <div
                    key={item.item_id}
                    className="p-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                    onClick={() => handleSelectItem(item)}
                  >
                    <div>
                      <div className="font-medium">{item.product_title}</div>
                      <div className="text-sm text-gray-500">{item.category}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{formatCurrency(item.selling_price)}</div>
                      <div className={`text-sm ${item.in_stock > 0 ? 'text-gray-500' : 'text-red-500 font-bold'}`}>
                        In stock: {item.in_stock}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Sale Form */}
        <div className="space-y-4">
          {/* Selected Item */}
          <div className="flex items-center">
            <div className="w-32 font-medium">Item</div>
            <div className="flex-1">
              <div className="p-3 bg-gray-100 rounded-md">
                {selectedItem ? selectedItem.product_title : 'No item selected'}
              </div>
            </div>
          </div>

          {/* Customer Name */}
          <div className="flex items-center">
            <div className="w-32 font-medium">Customer Name</div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter customer name"
              />
            </div>
          </div>

          {/* Unit Price */}
          <div className="flex items-center">
            <div className="w-32 font-medium">Unit price</div>
            <div className="flex-1">
              <div className="p-3 bg-gray-100 rounded-md">
                {selectedItem ? formatCurrency(selectedItem.selling_price) : '0.00'}
              </div>
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center">
            <div className="w-32 font-medium">Quantity</div>
            <div className="flex-1 relative">
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-md pr-10"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max={selectedItem?.in_stock || 1}
              />
              <div className="absolute right-3 top-3">
                <ChevronDown size={18} className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Total for current item */}
          <div className="flex items-center">
            <div className="w-32 font-medium">Total</div>
            <div className="flex-1">
              <div className="p-3 bg-gray-100 rounded-md">
                {selectedItem ? formatCurrency(selectedItem.selling_price * quantity) : '0.00'}
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="flex items-center">
            <div className="w-32 font-medium">Payment Method</div>
            <div className="flex-1 relative">
              <select
                className="w-full p-3 border border-gray-300 rounded-md appearance-none"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                {paymentMethods.map(method => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
              <div className="absolute right-3 top-3 pointer-events-none">
                <ChevronDown size={18} className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {/* Add More Button */}
          <div className="flex justify-center">
            <button
              type="button"
              className={`${saleItems.length === 0 ? 'bg-yellow-400 animate-pulse' : 'bg-yellow-400'} text-black px-6 py-2 rounded-full font-medium flex items-center`}
              onClick={handleAddItem}
              disabled={!selectedItem || isSubmitting}
              title="Add this item to the sale"
            >
              <Plus size={18} className="mr-1" />
              {saleItems.length === 0 ? 'ADD ITEM TO CART' : 'ADD MORE'}
            </button>
          </div>
          {saleItems.length === 0 && selectedItem && (
            <div className="text-center text-sm text-yellow-600 mt-2">
              ⚠️ You must click the button above to add the item to your cart first
            </div>
          )}

          {/* Sale Items List */}
          {saleItems.length > 0 && (
            <div className="mt-6">
              <h3 className="font-bold mb-2">Items in this sale:</h3>
              <div className="border rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Unit Price</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Subtotal</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {saleItems.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2">{item.product_title}</td>
                        <td className="px-4 py-2">{item.quantity}</td>
                        <td className="px-4 py-2">{formatCurrency(item.unit_price)}</td>
                        <td className="px-4 py-2">{formatCurrency(item.subtotal)}</td>
                        <td className="px-4 py-2">
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleRemoveItem(index)}
                          >
                            <X size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50 font-bold">
                      <td className="px-4 py-2" colSpan={3}>Total</td>
                      <td className="px-4 py-2">{formatCurrency(totalAmount)}</td>
                      <td className="px-4 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium"
              onClick={handleSubmit}
              disabled={isSubmitting}
              title="Confirm this sale"
            >
              {isSubmitting ? 'Processing...' : 'Confirm'}
            </button>
            <div className="text-xs text-gray-500 mt-1">
              {saleItems.length === 0 && 'First select an item, then click ADD MORE'}
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium"
                onClick={handleViewSales}
              >
                View Sale
              </button>

              <button
                type="button"
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium"
                onClick={() => alert('Invoice generation will be implemented')}
                disabled={isSubmitting || saleItems.length === 0}
              >
                Generate Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSalePage;
