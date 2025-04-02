"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Edit, Trash2, Search, Filter, ArrowUpDown, ShoppingCart } from 'lucide-react';
import OrderImageThumbnail from '@/components/OrderImageThumbnail';

interface Order {
  order_id: number;
  category: string;
  supplier_id: string;
  quantity: number;
  offer_gold: number;
  selected_karats: string;
  karat_values: string;
  design_image: string | null;
  design_image_url?: string;
  status: string;
  created_at: string;
}

const ViewOrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [supplierNames, setSupplierNames] = useState<{[key: string]: string}>({});

  // Fetch orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3002/orders');

        if (!response.ok) {
          throw new Error(`Failed to fetch orders: ${response.status}`);
        }

        const data = await response.json();

        // Process image URLs
        const processedData = data.map((order: Order) => {
          if (order.design_image) {
            // Construct the full URL for the image
            // Make sure we don't duplicate the /uploads/ part
            const imagePath = order.design_image.startsWith('uploads/')
              ? order.design_image
              : `uploads/${order.design_image}`;

            order.design_image_url = `http://localhost:3002/${imagePath}`;
          }
          return order;
        });

        setOrders(processedData);

        // Fetch supplier names for all unique supplier IDs
        const uniqueSupplierIds = [...new Set(data.map((order: Order) => order.supplier_id))];
        fetchSupplierNames(uniqueSupplierIds);

      } catch (err) {
        console.error('Error fetching orders:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');

        // Use dummy data for development
        setOrders([
          {
            order_id: 1,
            category: 'Wedding Sets',
            supplier_id: '001',
            quantity: 10,
            offer_gold: 1,
            selected_karats: JSON.stringify(['24KT', '22KT']),
            karat_values: JSON.stringify({ '24KT': 50, '22KT': 45 }),
            design_image: 'images/sample_wedding_set.jpg',
            design_image_url: 'http://localhost:3002/uploads/images/sample_wedding_set.jpg',
            status: 'pending',
            created_at: new Date().toISOString()
          },
          {
            order_id: 2,
            category: 'Rings',
            supplier_id: '002',
            quantity: 20,
            offer_gold: 1,
            selected_karats: JSON.stringify(['22KT']),
            karat_values: JSON.stringify({ '22KT': 40 }),
            design_image: 'images/sample_ring.jpg',
            design_image_url: 'http://localhost:3002/uploads/images/sample_ring.jpg',
            status: 'completed',
            created_at: new Date(Date.now() - 86400000).toISOString() // Yesterday
          },
          {
            order_id: 3,
            category: 'Necklaces',
            supplier_id: '003',
            quantity: 5,
            offer_gold: 0,
            selected_karats: JSON.stringify([]),
            karat_values: JSON.stringify({}),
            design_image: 'images/sample_necklace.jpg',
            design_image_url: 'http://localhost:3002/uploads/images/sample_necklace.jpg',
            status: 'cancelled',
            created_at: new Date(Date.now() - 172800000).toISOString() // 2 days ago
          }
        ]);

        // Set dummy supplier names
        setSupplierNames({
          '001': 'Mohamad Nazeem',
          '002': 'Abdulla Nazeem',
          '003': 'Vaseem Akram',
          '004': 'Mohamad Sami'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Fetch supplier names
  const fetchSupplierNames = async (supplierIds: string[]) => {
    try {
      const response = await fetch('http://localhost:3002/suppliers');
      if (response.ok) {
        const suppliers = await response.json();
        const namesMap: {[key: string]: string} = {};

        suppliers.forEach((supplier: any) => {
          if (supplierIds.includes(supplier.supplier_id)) {
            namesMap[supplier.supplier_id] = supplier.name;
          }
        });

        setSupplierNames(namesMap);
      }
    } catch (err) {
      console.error('Error fetching supplier names:', err);
    }
  };

  // Handle order deletion
  const handleDeleteOrder = async (orderId: number) => {
    if (!window.confirm('Are you sure you want to delete this order?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3002/orders/delete/${orderId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete order');
      }

      // Remove the deleted order from the state
      setOrders(orders.filter(order => order.order_id !== orderId));
      alert('Order deleted successfully');
    } catch (err) {
      console.error('Error deleting order:', err);
      alert('Failed to delete order');
    }
  };

  // Handle status update
  const handleStatusUpdate = async (orderId: number, newStatus: string) => {
    try {
      const response = await fetch(`http://localhost:3002/orders/update-status/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) {
        throw new Error('Failed to update order status');
      }

      // Update the order status in the state
      setOrders(orders.map(order =>
        order.order_id === orderId ? { ...order, status: newStatus } : order
      ));

      alert(`Order status updated to ${newStatus}`);
    } catch (err) {
      console.error('Error updating order status:', err);
      alert('Failed to update order status');
    }
  };

  // Filter and search orders
  const filteredOrders = orders.filter(order => {
    // Apply status filter
    if (statusFilter !== 'all' && order.status !== statusFilter) {
      return false;
    }

    // Apply search term
    const searchLower = searchTerm.toLowerCase();
    return (
      order.order_id.toString().includes(searchLower) ||
      order.category.toLowerCase().includes(searchLower) ||
      (supplierNames[order.supplier_id] || '').toLowerCase().includes(searchLower) ||
      order.supplier_id.toLowerCase().includes(searchLower)
    );
  });

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  // Get status badge color
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        <p>Error loading orders: {error}</p>
        <p>Using sample data instead.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">View Orders</h2>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search orders..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>

          <div className="flex gap-2">
            <select
              className="px-4 py-2 border border-gray-300 rounded-md"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <button className="p-2 border border-gray-300 rounded-md">
              <Filter size={20} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Supplier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created At
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-4 text-center text-gray-500">
                    No orders found
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => (
                  <tr key={order.order_id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      #{order.order_id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <OrderImageThumbnail
                        imageUrl={order.design_image_url || order.design_image}
                        orderId={order.order_id}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {order.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {supplierNames[order.supplier_id] || order.supplier_id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {order.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(order.created_at)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          className="text-blue-600 hover:text-blue-900"
                          title="View Details"
                          onClick={() => alert(`View details for order #${order.order_id}`)}
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          className="text-yellow-600 hover:text-yellow-900"
                          title="Edit Order"
                          onClick={() => alert(`Edit order #${order.order_id}`)}
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900"
                          title="Delete Order"
                          onClick={() => handleDeleteOrder(order.order_id)}
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

        {/* Pagination (simplified) */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-500">
            Showing {filteredOrders.length} of {orders.length} orders
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-yellow-400 text-black rounded-md">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrdersPage;
