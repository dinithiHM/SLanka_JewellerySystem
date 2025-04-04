"use client";

import React, { useState, useEffect } from 'react';
import { Pencil, Trash2, Search, Filter, Plus } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

interface JewelleryItem {
  item_id: number;
  product_title: string;
  category: string;
  in_stock: number;
  buying_price: number;
  selling_price: number;
  product_added: string;
}

const JewelleryStockPage = () => {
  const [jewelleryItems, setJewelleryItems] = useState<JewelleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>(['all']);
  
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

  // Fetch jewellery items
  useEffect(() => {
    const fetchJewelleryItems = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3002/jewellery-items');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch jewellery items: ${response.status}`);
        }
        
        const data = await response.json();
        setJewelleryItems(data);
        
        // Extract unique categories
        const uniqueCategories = new Set<string>();
        uniqueCategories.add('all');
        
        data.forEach((item: JewelleryItem) => {
          if (item.category) {
            uniqueCategories.add(item.category);
          }
        });
        
        setCategories(Array.from(uniqueCategories));
      } catch (err) {
        console.error('Error fetching jewellery items:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        
        // Use sample data for development
        setJewelleryItems([
          {
            item_id: 1,
            product_title: 'Cluster Earrings',
            category: 'Earrings',
            in_stock: 48,
            buying_price: 9000,
            selling_price: 11000,
            product_added: '2024-11-01 17:41:09'
          },
          {
            item_id: 2,
            product_title: 'Indian Type Necklace',
            category: 'Necklace',
            in_stock: 35,
            buying_price: 11000,
            selling_price: 12800,
            product_added: '2024-10-29 07:04:08'
          },
          {
            item_id: 3,
            product_title: 'Starakodi Chains',
            category: 'Chains',
            in_stock: 45,
            buying_price: 7400,
            selling_price: 9000,
            product_added: '2024-10-28 14:30:00'
          },
          {
            item_id: 4,
            product_title: 'Gents Ring',
            category: 'Rings',
            in_stock: 80,
            buying_price: 3000,
            selling_price: 4700,
            product_added: '2024-10-27 09:15:00'
          }
        ]);
        
        // Extract unique categories from sample data
        const uniqueCategories = new Set<string>(['all', 'Earrings', 'Necklace', 'Chains', 'Rings']);
        setCategories(Array.from(uniqueCategories));
      } finally {
        setLoading(false);
      }
    };
    
    fetchJewelleryItems();
  }, []);
  
  // Filter jewellery items based on search term and category
  const filteredItems = jewelleryItems.filter(item => {
    // Apply category filter
    if (categoryFilter !== 'all' && item.category !== categoryFilter) {
      return false;
    }
    
    // Apply search term
    const searchLower = searchTerm.toLowerCase();
    return (
      item.product_title.toLowerCase().includes(searchLower) ||
      item.category.toLowerCase().includes(searchLower)
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
    setCategory(item.category);
    setInStock(item.in_stock);
    setBuyingPrice(item.buying_price);
    setSellingPrice(item.selling_price);
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
      
      // Remove the deleted item from the state
      setJewelleryItems(jewelleryItems.filter(item => item.item_id !== itemId));
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
      selling_price: sellingPrice
    };
    
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
      
      // Refresh the list
      const refreshResponse = await fetch('http://localhost:3002/jewellery-items');
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
          <button 
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full font-medium flex items-center"
            onClick={handleAddNewItem}
          >
            <Plus size={18} className="mr-1" />
            Add new Item
          </button>
        </div>
        
        {/* Search and Filter */}
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
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
            
            <button className="p-2 border border-gray-300 rounded-md">
              <Filter size={20} className="text-gray-500" />
            </button>
          </div>
        </div>
        
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
                  <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
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
                      {item.category}
                    </td>
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
                    .filter(cat => cat !== 'all')
                    .map(cat => (
                      <option key={cat} value={cat} />
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
