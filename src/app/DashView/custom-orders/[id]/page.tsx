"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  ArrowLeft,
  Calendar,
  User,
  Phone,
  Mail,
  Tag,
  Building,
  Clock,
  CheckCircle,
  AlertCircle,
  Truck,
  X,
  Printer,
  Download
} from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import LKRIcon from '@/components/LKRIcon';

// Define types
interface CustomOrderDetail {
  order_id: number;
  order_reference: string;
  customer_name: string;
  customer_phone: string | null;
  customer_email: string | null;
  order_date: string;
  estimated_completion_date: string | null;
  estimated_amount: number;
  advance_amount: number;
  balance_amount: number;
  order_status: 'Pending' | 'In Progress' | 'Completed' | 'Delivered' | 'Cancelled';
  payment_status: 'Not Paid' | 'Partially Paid' | 'Fully Paid';
  category_name: string | null;
  category_id: number | null;
  supplier_id: number | null;
  supplier_name: string | null;
  description: string | null;
  special_requirements: string | null;
  created_by_first_name: string;
  created_by_last_name: string;
  created_by: number;
  branch_name: string;
  branch_id: number;
  images: string | null;
  payment_count: number;
  materials: OrderMaterial[];
  payments: OrderPayment[];
  imageDetails: OrderImage[];
}

interface OrderMaterial {
  material_entry_id: number;
  order_id: number;
  material_name: string;
  quantity: number;
  unit: string;
  cost_per_unit: number | null;
  total_cost: number | null;
  supplier_id: number | null;
}

interface OrderPayment {
  payment_id: number;
  order_id: number;
  payment_date: string;
  payment_amount: number;
  payment_method: string;
  payment_reference: string | null;
  notes: string | null;
}

interface OrderImage {
  image_id: number;
  order_id: number;
  image_path: string;
  image_type: 'Reference' | 'Design' | 'Progress' | 'Final';
  upload_date: string;
}

const CustomOrderDetailPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const orderId = params.id;

  // State
  const [order, setOrder] = useState<CustomOrderDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Fetch order details
  useEffect(() => {
    const fetchOrderDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3002/custom-orders/${orderId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch order details: ${response.status}`);
        }

        const data = await response.json();
        console.log('Raw order data received:', data);

        // Check for images in the response
        console.log('Images in response:', data.images);
        console.log('ImageDetails in response:', data.imageDetails);

        // If we have images as a string but no imageDetails array, create one
        if (data.images && (!data.imageDetails || data.imageDetails.length === 0)) {
          const imagesList = data.images.split(',').filter((img: string) => img.trim());
          console.log('Creating imageDetails from images string:', imagesList);

          if (imagesList.length > 0) {
            // Create imageDetails array from images string
            data.imageDetails = imagesList.map((imagePath: string, index: number) => ({
              image_id: index + 1,
              order_id: data.order_id,
              image_path: imagePath,
              image_type: 'Reference',
              upload_date: data.order_date
            }));
            console.log('Created imageDetails:', data.imageDetails);
          }
        }

        setOrder(data);

        // Set the first image as selected if available
        if (data.imageDetails && data.imageDetails.length > 0) {
          setSelectedImage(data.imageDetails[0].image_path);
          console.log('Selected image:', data.imageDetails[0].image_path);
        } else if (data.images) {
          const imagesList = data.images.split(',').filter((img: string) => img.trim());
          if (imagesList.length > 0) {
            setSelectedImage(imagesList[0]);
            console.log('Selected image from string:', imagesList[0]);
          }
        }
      } catch (err) {
        console.error('Error fetching order details:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while fetching order details');
      } finally {
        setLoading(false);
      }
    };

    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);

  // Format date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Not set';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Format date with time
  const formatDateTime = (dateString: string | null) => {
    if (!dateString) return 'Not set';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get status badge color
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Delivered':
        return 'bg-purple-100 text-purple-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      case 'Pending':
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  // Get payment status badge color
  const getPaymentStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Fully Paid':
        return 'bg-green-100 text-green-800';
      case 'Partially Paid':
        return 'bg-yellow-100 text-yellow-800';
      case 'Not Paid':
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle size={16} className="mr-1" />;
      case 'In Progress':
        return <Clock size={16} className="mr-1" />;
      case 'Delivered':
        return <Truck size={16} className="mr-1" />;
      case 'Cancelled':
        return <X size={16} className="mr-1" />;
      case 'Pending':
      default:
        return <AlertCircle size={16} className="mr-1" />;
    }
  };

  // Handle back button
  const handleBack = () => {
    router.push('/DashView/custom-orders');
  };

  // Handle print
  const handlePrint = () => {
    window.print();
  };

  // Handle image selection
  const handleImageSelect = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <span className="block sm:inline">{error}</span>
        </div>
        <button
          onClick={handleBack}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft size={18} className="mr-1" />
          Back to Custom Orders
        </button>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="p-6">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4">
          <span className="block sm:inline">Order not found</span>
        </div>
        <button
          onClick={handleBack}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft size={18} className="mr-1" />
          Back to Custom Orders
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleBack}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft size={18} className="mr-1" />
            Back to Custom Orders
          </button>

          <div className="flex gap-2">
            <button
              className="bg-white p-2 rounded-md border border-gray-300"
              onClick={handlePrint}
            >
              <Printer size={20} className="text-gray-700" />
            </button>
            <button className="bg-white p-2 rounded-md border border-gray-300">
              <Download size={20} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Order Reference and Status */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{order.order_reference}</h1>
            <p className="text-gray-500">Created on {formatDateTime(order.order_date)}</p>
          </div>
          <div className="flex space-x-2 mt-2 md:mt-0">
            <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${getStatusBadgeColor(order.order_status)}`}>
              <div className="flex items-center">
                {getStatusIcon(order.order_status)}
                {order.order_status}
              </div>
            </span>
            <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${getPaymentStatusBadgeColor(order.payment_status)}`}>
              {order.payment_status}
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Customer and Order Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Customer Information */}
            <div className="bg-gray-50 p-4 rounded-md">
              <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <User className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p className="text-sm text-gray-900">{order.customer_name}</p>
                  </div>
                </div>
                {order.customer_phone && (
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Phone</p>
                      <p className="text-sm text-gray-900">{order.customer_phone}</p>
                    </div>
                  </div>
                )}
                {order.customer_email && (
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="text-sm text-gray-900">{order.customer_email}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Information */}
            <div className="bg-gray-50 p-4 rounded-md">
              <h2 className="text-lg font-semibold mb-4">Order Information</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Due Date</p>
                    <p className="text-sm text-gray-900">{formatDate(order.estimated_completion_date)}</p>
                  </div>
                </div>
                {order.category_name && (
                  <div className="flex items-start">
                    <Tag className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Category</p>
                      <p className="text-sm text-gray-900">{order.category_name}</p>
                    </div>
                  </div>
                )}
                {order.supplier_name && (
                  <div className="flex items-start">
                    <Building className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Supplier</p>
                      <p className="text-sm text-gray-900">{order.supplier_name}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-start">
                  <Building className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Branch</p>
                    <p className="text-sm text-gray-900">{order.branch_name}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Created By</p>
                    <p className="text-sm text-gray-900">{`${order.created_by_first_name} ${order.created_by_last_name}`}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-gray-50 p-4 rounded-md">
              <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <LKRIcon className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Amount</p>
                    <p className="text-sm font-semibold text-gray-900">{formatCurrency(order.estimated_amount)}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <LKRIcon className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Advance Payment</p>
                    <p className="text-sm font-semibold text-green-600">{formatCurrency(order.advance_amount)}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <LKRIcon className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Balance</p>
                    <p className="text-sm font-semibold text-red-600">{formatCurrency(order.balance_amount)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle and Right columns - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Images Gallery */}
            {order.imageDetails && order.imageDetails.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-md">
                <h2 className="text-lg font-semibold mb-4">Design Images</h2>

                {/* Main selected image */}
                <div className="mb-4 relative h-80 w-full rounded-md overflow-hidden bg-white">
                  {selectedImage && (
                    <Image
                      src={`http://localhost:3002/${selectedImage}`}
                      alt="Selected design"
                      fill
                      style={{ objectFit: 'contain' }}
                      unoptimized={true}
                      width={800}
                      height={600}
                    />
                  )}
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-2">
                  {order.imageDetails.map((image: any) => (
                    <div
                      key={image.image_id}
                      className={`relative h-20 rounded-md overflow-hidden cursor-pointer border-2 ${selectedImage === image.image_path ? 'border-yellow-500' : 'border-transparent'}`}
                      onClick={() => handleImageSelect(image.image_path)}
                    >
                      <Image
                        src={`http://localhost:3002/${image.image_path}`}
                        alt={`Image ${image.image_id}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        unoptimized={true}
                        width={100}
                        height={100}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 text-center">
                        {image.image_type || 'Reference'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            {order.description && (
              <div className="bg-gray-50 p-4 rounded-md">
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{order.description}</p>
              </div>
            )}

            {/* Special Requirements */}
            {order.special_requirements && (
              <div className="bg-gray-50 p-4 rounded-md">
                <h2 className="text-lg font-semibold mb-2">Special Requirements</h2>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{order.special_requirements}</p>
              </div>
            )}

            {/* Materials */}
            {order.materials && order.materials.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-md">
                <h2 className="text-lg font-semibold mb-4">Materials</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material</th>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {order.materials.map((material) => (
                        <tr key={material.material_entry_id}>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{material.material_name}</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{material.quantity}</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{material.unit}</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                            {material.total_cost ? formatCurrency(material.total_cost) : 'N/A'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Payment History */}
            {order.payments && order.payments.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-md">
                <h2 className="text-lg font-semibold mb-4">Payment History</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {order.payments.map((payment) => (
                        <tr key={payment.payment_id}>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{formatDateTime(payment.payment_date)}</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{formatCurrency(payment.payment_amount)}</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{payment.payment_method}</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{payment.payment_reference || 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOrderDetailPage;
