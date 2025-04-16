"use client";

import React, { useState, useEffect } from 'react';
import { Pencil, Trash2, Search, Filter, Plus, Download, RefreshCw, Calendar } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { exportJewelleryItemsToPDF } from '@/utils/pdfExport';
import { exportJewelleryItemsToCSV } from '@/utils/csvExport';



interface JewelleryItem {
  item_id: number;
  product_title: string;
  category: string;
  category_name?: string; // From the categories table
  in_stock: number;
  buying_price: number;
  selling_price: number;
  product_added: string;
  branch_id?: number;
  branch_name?: string;
}

interface Category {
  category_id: number;
  category_name: string;
  description?: string;
}

interface Branch {
  branch_id: number;
  branch_name: string;
}

const JewelleryStockPage = () => {
  const [jewelleryItems, setJewelleryItems] = useState<JewelleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All Categories');
  const [categories, setCategories] = useState<Category[]>([]);
  const [userBranchId, setUserBranchId] = useState<number | null>(null);
  const [userRole, setUserRole] = useState<string>('');

  // Advanced filtering
  const [branches, setBranches] = useState<Branch[]>([]);
  const [branchFilter, setBranchFilter] = useState<string>('All Branches');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // For the add/edit form
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [currentItem, setCurrentItem] = useState<JewelleryItem | null>(null);

  // Form fields
  const [productTitle, setProductTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [inStock, setInStock] = useState<number>(0);
  const [buyingPrice, setBuyingPrice] = useState<number>(0);
  const [sellingPrice, setSellingPrice] = useState<number>(0);

  // Get user info from localStorage and fetch items immediately
  useEffect(() => {
    // Get individual items from localStorage
    const role = localStorage.getItem('role');
    const branchId = localStorage.getItem('branchId');

    console.log('Retrieved from localStorage - Role:', role, 'Branch ID:', branchId);

    // Set user role (convert to lowercase for consistency)
    const normalizedRole = role === 'Admin' ? 'admin' : (role?.toLowerCase() || '');
    setUserRole(normalizedRole);

    // Set branch ID
    const numericBranchId = branchId ? Number(branchId) : null;
    setUserBranchId(numericBranchId);

    // Immediately fetch items with proper filtering
    const fetchJewelleryItems = async () => {
      try {
        setLoading(true);

        // Construct URL with query parameters for branch filtering
        let url = 'http://localhost:3002/jewellery-items';
        const params = new URLSearchParams();

        if (numericBranchId && normalizedRole !== 'admin') {
          params.append('branch_id', numericBranchId.toString());
          params.append('role', normalizedRole);
        }

        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        console.log('Initial fetch of jewellery items from:', url);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch jewellery items: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched jewellery items:', data.length);
        setJewelleryItems(data);
      } catch (err) {
        console.error('Error fetching jewellery items:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchJewelleryItems();
  }, []);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3002/categories');
        if (!response.ok) {
          throw new Error(`Failed to fetch categories: ${response.status}`);
        }

        const data = await response.json();
        // Add 'all' category at the beginning
        setCategories([{ category_id: 0, category_name: 'All Categories' }, ...data]);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');

        // Fallback categories
        setCategories([
          { category_id: 0, category_name: 'All Categories' },
          { category_id: 1, category_name: 'Rings' },
          { category_id: 2, category_name: 'Necklaces' },
          { category_id: 3, category_name: 'Earrings' },
          { category_id: 4, category_name: 'Bracelets' }
        ]);
      }
    };

    fetchCategories();
  }, []);

  // Fetch jewellery items when userRole or userBranchId changes after initial load
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  useEffect(() => {
    // Skip the first render since we already fetched in the first useEffect
    if (!initialLoadComplete) {
      setInitialLoadComplete(true);
      return;
    }

    const fetchJewelleryItems = async () => {
      try {
        setLoading(true);

        // Construct URL with query parameters for branch filtering
        let url = 'http://localhost:3002/jewellery-items';
        const params = new URLSearchParams();

        if (userBranchId && userRole !== 'admin') {
          params.append('branch_id', userBranchId.toString());
          params.append('role', userRole);
        }

        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        console.log('Fetching jewellery items after update from:', url);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch jewellery items: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched jewellery items:', data.length);
        setJewelleryItems(data);
      } catch (err) {
        console.error('Error fetching jewellery items:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchJewelleryItems();
  }, [userBranchId, userRole, initialLoadComplete]);

  // Filter jewellery items based on search term, category, branch, and date range
  const filteredItems = jewelleryItems.filter(item => {
    // Apply category filter - only filter if not "All Categories"
    if (categoryFilter !== 'All Categories' && categoryFilter !== '0' &&
        item.category_name !== categoryFilter && item.category !== categoryFilter) {
      return false;
    }

    // Apply branch filter (admin only)
    if (userRole === 'admin' && branchFilter !== 'All Branches' &&
        item.branch_name !== branchFilter &&
        (item.branch_id !== 1 || branchFilter !== 'Mahiyangana Branch') &&
        (item.branch_id !== 2 || branchFilter !== 'Mahaoya Branch')) {
      return false;
    }

    // Apply date range filter
    if (startDate && item.product_added) {
      const itemDate = new Date(item.product_added);
      const filterStartDate = new Date(startDate);
      if (itemDate < filterStartDate) {
        return false;
      }
    }

    if (endDate && item.product_added) {
      const itemDate = new Date(item.product_added);
      const filterEndDate = new Date(endDate);
      // Set end date to end of day
      filterEndDate.setHours(23, 59, 59, 999);
      if (itemDate > filterEndDate) {
        return false;
      }
    }

    // Apply search term
    const searchLower = searchTerm.toLowerCase();
    return (
      item.product_title.toLowerCase().includes(searchLower) ||
      (item.category_name || item.category).toLowerCase().includes(searchLower) ||
      (item.branch_name || '').toLowerCase().includes(searchLower)
    );
  });

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  };

  // Handle edit item
  const handleEditItem = (item: JewelleryItem) => {
    setCurrentItem(item);
    setProductTitle(item.product_title);
    setCategory(item.category_name || item.category);
    setInStock(item.in_stock);
    setBuyingPrice(item.buying_price);
    setSellingPrice(item.selling_price);
    if (item.branch_id) {
      setUserBranchId(item.branch_id);
    }
    setFormMode('edit');
    setShowForm(true);
  };

  // Handle delete item
  const handleDeleteItem = async (itemId: number) => {
    if (!window.confirm('Are you sure you want to delete this item?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3002/jewellery-items/delete/${itemId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      // Refresh the list with branch filtering
      let fetchUrl = 'http://localhost:3002/jewellery-items';
      const params = new URLSearchParams();

      if (userBranchId && userRole !== 'admin') {
        params.append('branch_id', userBranchId.toString());
        params.append('role', userRole);
      }

      if (params.toString()) {
        fetchUrl += `?${params.toString()}`;
      }

      console.log('Refreshing jewellery items after delete from:', fetchUrl);
      const refreshResponse = await fetch(fetchUrl);
      if (refreshResponse.ok) {
        const data = await refreshResponse.json();
        setJewelleryItems(data);
      } else {
        // Fallback to client-side filtering if refresh fails
        setJewelleryItems(jewelleryItems.filter(item => item.item_id !== itemId));
      }

      alert('Item deleted successfully');
    } catch (err) {
      console.error('Error deleting item:', err);
      alert('Failed to delete item');
    }
  };

  // Handle add new item
  const handleAddNewItem = () => {
    setCurrentItem(null);
    setProductTitle('');
    setCategory('');
    setInStock(0);
    setBuyingPrice(0);
    setSellingPrice(0);
    setFormMode('add');
    setShowForm(true);
  };

  // Handle form submission
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!productTitle || !category || inStock < 0 || buyingPrice <= 0 || sellingPrice <= 0) {
      alert('Please fill all fields with valid values');
      return;
    }

    const itemData = {
      product_title: productTitle,
      category,
      in_stock: inStock,
      buying_price: buyingPrice,
      selling_price: sellingPrice,
      branch_id: userBranchId // Include branch_id from user info
    };

    console.log('Submitting jewellery item data:', itemData);

    try {
      let response;

      if (formMode === 'add') {
        // Create new item
        response = await fetch('http://localhost:3002/jewellery-items/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(itemData)
        });
      } else {
        // Update existing item
        response = await fetch(`http://localhost:3002/jewellery-items/update/${currentItem?.item_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(itemData)
        });
      }

      if (!response.ok) {
        throw new Error(`Failed to ${formMode} item`);
      }

      // Refresh the list with branch filtering
      let fetchUrl = 'http://localhost:3002/jewellery-items';
      const params = new URLSearchParams();

      if (userBranchId && userRole !== 'admin') {
        params.append('branch_id', userBranchId.toString());
        params.append('role', userRole);
      }

      if (params.toString()) {
        fetchUrl += `?${params.toString()}`;
      }

      console.log('Refreshing jewellery items from:', fetchUrl);
      const refreshResponse = await fetch(fetchUrl);
      if (refreshResponse.ok) {
        const data = await refreshResponse.json();
        setJewelleryItems(data);
      }

      alert(`Item ${formMode === 'add' ? 'added' : 'updated'} successfully`);
      setShowForm(false);
    } catch (err) {
      console.error(`Error ${formMode === 'add' ? 'adding' : 'updating'} item:`, err);
      alert(`Failed to ${formMode} item`);
    }
  };

  // Cancel form
  const handleCancelForm = () => {
    setShowForm(false);
  };

  // Fetch branches
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await fetch('http://localhost:3002/branches');
        if (!response.ok) {
          throw new Error(`Failed to fetch branches: ${response.status}`);
        }

        const data = await response.json();
        // Add 'all' branch at the beginning
        setBranches([{ branch_id: 0, branch_name: 'All Branches' }, ...data]);
      } catch (err) {
        console.error('Error fetching branches:', err);
        // Fallback branches
        setBranches([
          { branch_id: 0, branch_name: 'All Branches' },
          { branch_id: 1, branch_name: 'Mahiyangana Branch' },
          { branch_id: 2, branch_name: 'Mahaoya Branch' }
        ]);
      }
    };

    if (userRole === 'admin') {
      fetchBranches();
    }
  }, [userRole]);

  // Toggle filters
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Reset filters
  const resetFilters = () => {
    setBranchFilter('All Branches');
    setCategoryFilter('All Categories');
    setStartDate('');
    setEndDate('');
    setSearchTerm('');
  };

  // Export to PDF
  const exportToPDF = async () => {
    try {
      // Prepare filters object
      const filters = {
        branch: branchFilter,
        category: categoryFilter,
        startDate: startDate,
        endDate: endDate
      };

      // Call the utility function (it's async now)
      const success = await exportJewelleryItemsToPDF(filteredItems, filters, userRole);

      if (!success) {
        alert('Failed to generate PDF. Please try again.');
      }
    } catch (err) {
      console.error('Error exporting to PDF:', err);
      alert('An error occurred while generating the PDF.');
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    try {
      // Call the utility function
      const success = exportJewelleryItemsToCSV(filteredItems, userRole);

      if (!success) {
        alert('Failed to generate CSV. Please try again.');
      }
    } catch (err) {
      console.error('Error exporting to CSV:', err);
      alert('An error occurred while generating the CSV.');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">

      {/* Jewellery Items Table */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Jewellery Item</h2>
          <div className="flex gap-2">
            {userRole === 'admin' && (
              <>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium flex items-center"
                  onClick={exportToPDF}
                >
                  <Download size={18} className="mr-1" />
                  PDF
                </button>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium flex items-center"
                  onClick={exportToCSV}
                >
                  <Download size={18} className="mr-1" />
                  CSV
                </button>
              </>
            )}
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md font-medium flex items-center"
              onClick={handleAddNewItem}
            >
              <Plus size={18} className="mr-1" />
              Add new Item
            </button>
          </div>
        </div>

        {/* Search and Basic Filter */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search items..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>

          <div className="flex gap-2">
            <select
              className="px-4 py-2 border border-gray-300 rounded-md"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat.category_id} value={cat.category_id === 0 ? 'All Categories' : cat.category_name}>
                  {cat.category_name}
                </option>
              ))}
            </select>

            <button
              className="p-2 border border-gray-300 rounded-md"
              onClick={toggleFilters}
              title="Advanced Filters"
            >
              <Filter size={20} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && userRole === 'admin' && (
          <div className="bg-gray-50 p-4 rounded-md mb-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Advanced Filters</h3>
              <button
                className="text-sm text-blue-500 hover:text-blue-700"
                onClick={resetFilters}
              >
                Reset
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Branch</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={branchFilter}
                  onChange={(e) => setBranchFilter(e.target.value)}
                >
                  {branches.map((branch) => (
                    <option key={branch.branch_id} value={branch.branch_id === 0 ? 'All Branches' : branch.branch_name}>
                      {branch.branch_name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Start Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">End Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>

              <div className="flex items-end">
                <button
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded-md font-medium flex items-center justify-center"
                  onClick={() => {
                    // Apply filters logic here
                    // This would typically involve fetching data with the filters
                    console.log('Applying filters:', { branchFilter, categoryFilter, startDate, endDate });
                  }}
                >
                  <RefreshCw size={18} className="mr-1" />
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Items Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                {userRole === 'admin' && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Branch
                  </th>
                )}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  In-Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Buying Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Selling Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Added
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={userRole === 'admin' ? 8 : 7} className="px-6 py-4 text-center text-gray-500">
                    No jewellery items found
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <tr key={item.item_id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.product_title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.category_name || item.category}
                    </td>
                    {userRole === 'admin' && (
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.branch_name ||
                         (item.branch_id === 1 ? 'Mahiyangana Branch' :
                          item.branch_id === 2 ? 'Mahaoya Branch' :
                          `Branch ${item.branch_id || 'Unknown'}`)}
                      </td>
                    )}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.in_stock}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatCurrency(item.buying_price)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatCurrency(item.selling_price)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(item.product_added)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          className="text-yellow-600 hover:text-yellow-900"
                          title="Edit Item"
                          onClick={() => handleEditItem(item)}
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900"
                          title="Delete Item"
                          onClick={() => handleDeleteItem(item.item_id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {formMode === 'add' ? 'Add New Jewellery Item' : 'Edit Jewellery Item'}
            </h2>

            <form onSubmit={handleSubmitForm}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Product Title</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Category</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  list="categories"
                />
                <datalist id="categories">
                  {categories
                    .filter(cat => cat.category_id !== 0) // Skip 'All Categories'
                    .map(cat => (
                      <option key={cat.category_id} value={cat.category_name} />
                    ))
                  }
                </datalist>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">In Stock</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={inStock}
                  onChange={(e) => setInStock(Number(e.target.value))}
                  min="0"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Buying Price</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={buyingPrice}
                  onChange={(e) => setBuyingPrice(Number(e.target.value))}
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Selling Price</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(Number(e.target.value))}
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              {userRole === 'admin' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Branch</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={userBranchId || ''}
                    onChange={(e) => setUserBranchId(Number(e.target.value) || null)}
                    required
                  >
                    <option value="">Select Branch</option>
                    <option value="1">Mahiyangana Branch</option>
                    <option value="2">Mahaoya Branch</option>
                  </select>
                </div>
              )}

              <div className="flex justify-end space-x-2 mt-6">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
                  onClick={handleCancelForm}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-400 text-black rounded-md"
                >
                  {formMode === 'add' ? 'Add Item' : 'Update Item'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JewelleryStockPage;
