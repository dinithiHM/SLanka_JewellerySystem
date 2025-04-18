'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Use dynamic import to avoid SSR issues with Image component
const DynamicImage = dynamic(() => Promise.resolve(Image), { ssr: false });

interface OrderDetailsModalProps {
  order: any;
  supplierName: string;
  supplierPhone?: string;
  createdByName?: string;
  onClose: () => void;
}

const OrderDetailsModal = ({ order, supplierName, supplierPhone = 'Not available', createdByName = 'Not available', onClose }: OrderDetailsModalProps) => {
  // Parse JSON strings if needed
  const selectedKarats = order.selected_karats ? 
    (typeof order.selected_karats === 'string' ? 
      JSON.parse(order.selected_karats) : 
      order.selected_karats) : 
    [];
  
  const karatValues = order.karat_values ? 
    (typeof order.karat_values === 'string' ? 
      JSON.parse(order.karat_values) : 
      order.karat_values) : 
    {};

  // Format date
  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Order Details #{order.order_id}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Order Information</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Order ID</p>
                  <p className="font-medium">#{order.order_id}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-medium">{order.category}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Quantity</p>
                  <p className="font-medium">{order.quantity}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                      order.status === 'completed' ? 'bg-green-100 text-green-800' : 
                      order.status === 'cancelled' ? 'bg-red-100 text-red-800' : 
                      'bg-blue-100 text-blue-800'}`}
                  >
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Created At</p>
                  <p className="font-medium">{formatDate(order.created_at)}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Last Updated</p>
                  <p className="font-medium">{order.updated_at ? formatDate(order.updated_at) : 'Not updated'}</p>
                </div>
              </div>
            </div>
            
            {/* Right column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Additional Details</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Supplier</p>
                  <p className="font-medium">{supplierName}</p>
                  <p className="text-xs text-gray-500 mt-1">ID: {order.supplier_id}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Supplier Phone</p>
                  <p className="font-medium">{supplierPhone}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Branch</p>
                  <p className="font-medium">
                    {order.branch_name || 
                     (order.branch_id === 1 ? 'Mahiyangana Branch' : 
                      order.branch_id === 2 ? 'Mahaoya Branch' : 
                      'Not assigned')}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Gold Provided</p>
                  <p className="font-medium">{order.offer_gold ? 'Yes' : 'No'}</p>
                </div>
                
                {order.offer_gold === 1 && selectedKarats.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-500">Selected Karats</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedKarats.map((karat: string, index: number) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 rounded text-sm">
                          {karat} ({karatValues[karat] || 0}g)
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div>
                  <p className="text-sm text-gray-500">Created By</p>
                  <p className="font-medium">{createdByName}</p>
                </div>
                
                {order.store_manager_name && (
                  <div>
                    <p className="text-sm text-gray-500">Store Manager</p>
                    <p className="font-medium">{order.store_manager_name}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Design Image */}
          {order.design_image_url && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Design Image</h3>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 border border-gray-200 rounded-lg overflow-hidden">
                  <DynamicImage 
                    src={order.design_image_url}
                    alt={`Design for order #${order.order_id}`}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-2"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="flex justify-end p-6 border-t">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
