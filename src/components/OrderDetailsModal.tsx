'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

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

  // Handle proceed to payment
  const handleProceedToPayment = () => {
    // Parse selected karats if needed
    const selectedKaratsArray = selectedKarats.length > 0 ? selectedKarats : [];

    // Create query parameters with order details
    const queryParams = new URLSearchParams({
      order_id: order.order_id.toString(),
      category: order.category,
      supplier_id: order.supplier_id,
      quantity: order.quantity.toString(),
      offer_gold: order.offer_gold ? '1' : '0',
      selected_karats: JSON.stringify(selectedKaratsArray),
      karat_values: JSON.stringify(karatValues),

      // Gold and pricing details
      gold_price_per_gram: order.gold_price_per_gram ? order.gold_price_per_gram.toString() : '0',
      selected_karat: order.selectedKarat || '24K',
      gold_purity: order.goldPurity ? order.goldPurity.toString() : '0.999',
      weight_in_grams: order.weight_in_grams ? order.weight_in_grams.toString() : '0',
      making_charges: order.making_charges ? order.making_charges.toString() : '0',
      additional_materials_charges: order.additional_materials_charges ? order.additional_materials_charges.toString() : '0',
      base_estimated_price: order.base_estimated_price ? order.base_estimated_price.toString() : '0',
      estimated_price: order.estimated_price ? order.estimated_price.toString() : '0',
      total_amount: order.total_amount ? order.total_amount.toString() : '0',

      // Payment information
      advance_payment: order.advance_payment_amount ? order.advance_payment_amount.toString() : '0',
      remaining_balance: order.total_amount && order.advance_payment_amount
        ? (Number(order.total_amount) - Number(order.advance_payment_amount)).toString()
        : '0',
      payment_status: order.payment_status || 'Partial',

      // Design image URL if available
      design_image_url: order.design_image_url || ''
    }).toString();

    // Navigate to the dedicated payment page with query parameters
    router.push(`/DashView/orders/pay?${queryParams}`);
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
          {/* Basic Order Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
              <h3 className="text-lg font-semibold mb-4">Supplier Details</h3>

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

          {/* Gold and Pricing Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Gold & Pricing Details</h3>

            <div className="bg-gray-50 rounded-lg p-4">
              {/* Gold Karat Information */}
              <div className="mb-4">
                <h4 className="text-md font-medium mb-2">Gold Specifications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Gold Karat</p>
                    <p className="font-medium">
                      {order.selectedKarat || (order.selected_karats && typeof order.selected_karats === 'string' &&
                        JSON.parse(order.selected_karats).length > 0 ?
                        JSON.parse(order.selected_karats)[0].replace('KT', 'K') : 'N/A')}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Gold Purity</p>
                    <p className="font-medium">
                      {order.goldPurity ?
                        `${(order.goldPurity * 100).toFixed(2)}%` :
                        (order.selectedKarat ?
                          `${(parseInt(order.selectedKarat.replace(/[^\d]/g, ''), 10) / 24 * 100).toFixed(2)}%` :
                          'N/A')}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Gold Price (per gram)</p>
                    <p className="font-medium">
                      {order.gold_price_per_gram ? `Rs. ${Number(order.gold_price_per_gram).toLocaleString()}` : 'N/A'}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Weight (g)</p>
                    <p className="font-medium">
                      {order.weight_in_grams ? `${Number(order.weight_in_grams).toLocaleString()} g` : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Selected Karats (if gold is provided) */}
              {order.offer_gold === 1 && selectedKarats.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-md font-medium mb-2">Selected Karats</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedKarats.map((karat: string, index: number) => (
                      <span key={index} className="px-2 py-1 bg-white border border-gray-200 rounded text-sm">
                        {karat} ({karatValues[karat] || 0}g)
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing Breakdown */}
              <div>
                <h4 className="text-md font-medium mb-2">Price Breakdown</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Base Gold Price</p>
                    <p className="font-medium">
                      {order.base_estimated_price ? `Rs. ${Number(order.base_estimated_price).toLocaleString()}` : 'N/A'}
                    </p>
                    <p className="text-xs text-gray-500">Gold price × weight</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Making Charges</p>
                    <p className="font-medium">
                      {order.making_charges ? `Rs. ${Number(order.making_charges).toLocaleString()}` : 'N/A'}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Additional Materials Charges</p>
                    <p className="font-medium">
                      {order.additional_materials_charges ? `Rs. ${Number(order.additional_materials_charges).toLocaleString()}` : 'N/A'}
                    </p>
                    <p className="text-xs text-gray-500">For copper, other metals</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      {order.use_custom_estimate ? 'Custom Estimate Price' : 'Total Estimate Price'}
                    </p>
                    <p className="font-medium">
                      {order.estimated_price ? `Rs. ${Number(order.estimated_price).toLocaleString()}` : 'N/A'}
                    </p>
                    {order.use_custom_estimate && (
                      <p className="text-xs text-green-600">(Custom price set by staff)</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500">Total Order Amount</p>
                    <p className="font-medium text-yellow-700">
                      {order.total_amount ? `Rs. ${Number(order.total_amount).toLocaleString()}` : 'N/A'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {order.quantity} {order.quantity === 1 ? 'unit' : 'units'} ×
                      {order.estimated_price ? ` Rs. ${Number(order.estimated_price).toLocaleString()}` : ''}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Supplier Payment Details</h3>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Advance Payment Amount</p>
                  <p className="font-medium">
                    {order.advance_payment_amount ? `Rs. ${Number(order.advance_payment_amount).toLocaleString()}` : 'N/A'}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Payment Method</p>
                  <p className="font-medium">{order.payment_method || 'Cash'}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Payment Status</p>
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${order.payment_status === 'Paid' ? 'bg-green-100 text-green-800' :
                      order.payment_status === 'Partial' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'}`}
                  >
                    {order.payment_status || 'Pending'}
                  </span>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Remaining Balance</p>
                  <p className="font-medium text-red-600">
                    {order.total_amount && order.advance_payment_amount ?
                      `Rs. ${(Number(order.total_amount) - Number(order.advance_payment_amount)).toLocaleString()}` :
                      'N/A'}
                  </p>
                </div>

                {order.payment_notes && (
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500">Payment Notes</p>
                    <p className="font-medium">{order.payment_notes}</p>
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
        <div className="flex justify-between p-6 border-t">
          <button
            onClick={handleProceedToPayment}
            className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 font-medium"
          >
            Proceed to Payment
          </button>
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
