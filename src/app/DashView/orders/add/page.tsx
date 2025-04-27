"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { compressImage } from '@/utils/imageCompression';
import SupplierCategoryChart from '@/components/SupplierCategoryChart';

const AddOrderPage = () => {
  // State for form fields
  const [category, setCategory] = useState('');
  const [supplier, setSupplier] = useState('');
  const [quantity, setQuantity] = useState(20);
  const [offerGold, setOfferGold] = useState('yes');
  const [selectedKarats, setSelectedKarats] = useState({
    '24KT': false,
    '22KT': false,
    '21KT': false,
    '18KT': false,
    '16KT': false,
  });
  const [karatValues, setKaratValues] = useState({
    '24KT': 50,
    '22KT': 50,
    '21KT': 50,
    '18KT': 50,
    '16KT': 50,
  });
  const [imagePreview, setImagePreview] = useState<string | 'loading' | null>(null);
  const [suppliers, setSuppliers] = useState<any[]>([]);

  // Gold karat purity mapping
  type KaratKey = '24K' | '23K' | '22K' | '21K' | '20K' | '19K' | '18K' | '16K' | '14K' | '10K';

  const karatPurityMap: Record<KaratKey, { purity: number; label: string }> = {
    '24K': { purity: 1.0000, label: '24-Karat Gold (99.99% Pure)' },
    '23K': { purity: 0.9583, label: '23-Karat Gold (96% Pure)' },
    '22K': { purity: 0.9167, label: '22-Karat Gold (92% Pure)' },
    '21K': { purity: 0.8750, label: '21-Karat Gold (88% Pure)' },
    '20K': { purity: 0.8333, label: '20-Karat Gold (83% Pure)' },
    '19K': { purity: 0.7917, label: '19-Karat Gold (79% Pure)' },
    '18K': { purity: 0.7500, label: '18-Karat Gold (75% Pure)' },
    '16K': { purity: 0.6667, label: '16-Karat Gold (67% Pure)' },
    '14K': { purity: 0.5833, label: '14-Karat Gold (58% Pure)' },
    '10K': { purity: 0.4167, label: '10-Karat Gold (42% Pure)' },
  };

  // Price calculation states
  const [showPriceCalculation, setShowPriceCalculation] = useState(false);
  const [goldPricePerGram, setGoldPricePerGram] = useState(0);
  const [baseGoldPrice, setBaseGoldPrice] = useState(0); // 24K price from API
  const [selectedKarat, setSelectedKarat] = useState<KaratKey>('24K');
  const [weightInGrams, setWeightInGrams] = useState(0);
  const [makingCharges, setMakingCharges] = useState(0);
  const [useCustomPrice, setUseCustomPrice] = useState(false);
  const [customPrice, setCustomPrice] = useState(0);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoadingGoldPrice, setIsLoadingGoldPrice] = useState(false);
  const [goldPriceLastUpdated, setGoldPriceLastUpdated] = useState<string | null>(null);

  // User info state
  const [userRole, setUserRole] = useState<string>('');
  const [userBranchId, setUserBranchId] = useState<number | null>(null);

  // State for categories
  const [categories, setCategories] = useState<{category_id: number, category_name: string}[]>([]);

  // Get user info from localStorage
  useEffect(() => {
    // Get user info from localStorage
    const role = localStorage.getItem('role');
    const branchId = localStorage.getItem('branchId');

    console.log('Retrieved from localStorage - Role:', role, 'Branch ID:', branchId);

    // Set user role (convert to lowercase for consistency)
    const normalizedRole = role === 'Admin' ? 'admin' : (role?.toLowerCase() || '');
    setUserRole(normalizedRole);

    // Set branch ID
    const numericBranchId = branchId ? Number(branchId) : null;
    setUserBranchId(numericBranchId);
  }, []);

  // Fetch categories from the database
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3002/categories');
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          console.error('Failed to fetch categories');
          // Fallback to default categories if fetch fails
          setCategories([
            { category_id: 1, category_name: "Necklace" },
            { category_id: 2, category_name: "Ring" },
            { category_id: 3, category_name: "Earrings" },
            { category_id: 4, category_name: "Bracelet" },
            { category_id: 5, category_name: "Other" }
          ]);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Fallback to default categories if fetch fails
        setCategories([
          { category_id: 1, category_name: "Necklace" },
          { category_id: 2, category_name: "Ring" },
          { category_id: 3, category_name: "Earrings" },
          { category_id: 4, category_name: "Bracelet" },
          { category_id: 5, category_name: "Other" }
        ]);
      }
    };

    fetchCategories();
  }, []);

  // Fetch suppliers from the database
  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await fetch('http://localhost:3002/suppliers');
        if (response.ok) {
          const data = await response.json();
          setSuppliers(data);
        } else {
          console.error('Failed to fetch suppliers');
        }
      } catch (error) {
        console.error('Error fetching suppliers:', error);
        // Use dummy data if fetch fails
        setSuppliers([
          { supplier_id: '001', name: 'Mohamad Nazeem', category: 'Wedding Sets' },
          { supplier_id: '002', name: 'Abdulla Nazeem', category: 'Rings' },
          { supplier_id: '003', name: 'Vaseem Akram', category: 'Bracelets' },
          { supplier_id: '004', name: 'Mohamad Sami', category: 'Pendants' },
        ]);
      }
    };

    fetchSuppliers();
  }, []);

  // Handle karat checkbox change
  const handleKaratChange = (karat: string) => {
    setSelectedKarats({
      ...selectedKarats,
      [karat]: !selectedKarats[karat as keyof typeof selectedKarats]
    });
  };

  // Handle karat value change
  const handleKaratValueChange = (karat: string, value: number) => {
    setKaratValues({
      ...karatValues,
      [karat]: value
    });
  };

  // Function to fetch current gold price
  const fetchGoldPrice = async () => {
    try {
      setIsLoadingGoldPrice(true);
      const response = await fetch('http://localhost:3002/gold-prices/current-price');
      const data = await response.json();

      if (data.success) {
        // Store the 24K base price
        setBaseGoldPrice(data.price);

        // Calculate the price based on selected karat purity
        const purity = karatPurityMap[selectedKarat].purity;
        const adjustedPrice = data.price * purity;
        setGoldPricePerGram(adjustedPrice);

        // Format the timestamp
        const date = new Date(data.timestamp);
        setGoldPriceLastUpdated(date.toLocaleString());
      } else {
        console.error('Failed to fetch gold price:', data.message);
      }
    } catch (error) {
      console.error('Error fetching gold price:', error);
    } finally {
      setIsLoadingGoldPrice(false);
    }
  };

  // Function to update gold price when karat changes
  const updateGoldPriceForKarat = (karat: KaratKey) => {
    setSelectedKarat(karat);
    if (baseGoldPrice > 0) {
      const purity = karatPurityMap[karat].purity;
      const adjustedPrice = baseGoldPrice * purity;
      setGoldPricePerGram(adjustedPrice);
    }
  };

  // Fetch gold price when price calculator is shown
  useEffect(() => {
    if (showPriceCalculation) {
      fetchGoldPrice();
    }
  }, [showPriceCalculation]);

  // Calculate estimated price
  useEffect(() => {
    if (!useCustomPrice) {
      // Calculate based on gold price, weight, and making charges
      const calculatedPrice = (goldPricePerGram * weightInGrams) + makingCharges;
      setEstimatedPrice(calculatedPrice);
      setCustomPrice(calculatedPrice); // Keep custom price in sync
    }

    // Calculate total amount
    const pricePerUnit = useCustomPrice ? customPrice : estimatedPrice;
    setTotalAmount(pricePerUnit * quantity);
  }, [goldPricePerGram, weightInGrams, makingCharges, useCustomPrice, customPrice, quantity, estimatedPrice]);

  // Handle image upload with compression
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        // Show loading state
        setImagePreview('loading');

        // Check file type
        if (!file.type.startsWith('image/')) {
          alert('Please upload an image file');
          setImagePreview(null);
          return;
        }

        // Check initial file size (limit to 10MB for raw upload)
        if (file.size > 10 * 1024 * 1024) {
          alert('Image size should be less than 10MB');
          setImagePreview(null);
          return;
        }

        // Compress the image if larger than 1MB
        let imageData: string;
        if (file.size > 1 * 1024 * 1024) {
          console.log(`Compressing image: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
          imageData = await compressImage(file, 1, 1200); // Max 1MB, max 1200px width/height
          console.log(`Compressed to approximately: ${(imageData.length / 1024 / 1024 * 0.75).toFixed(2)}MB`);
        } else {
          // For small images, just read as data URL without compression
          imageData = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        }

        // Set the preview
        setImagePreview(imageData);
      } catch (error) {
        console.error('Error processing image:', error);
        alert('Error processing image. Please try again with a different image.');
        setImagePreview(null);
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Prepare the data to be sent
      const orderData = {
        category,
        supplier,
        quantity,
        offerGold,
        selectedKarats: Object.keys(selectedKarats).filter(k => selectedKarats[k as keyof typeof selectedKarats]),
        karatValues: Object.fromEntries(
          Object.entries(karatValues).filter(([k]) => selectedKarats[k as keyof typeof selectedKarats])
        ),
        image: imagePreview,
        branch_id: userBranchId, // Include branch_id from user info
        goldPricePerGram,
        selectedKarat, // Include the selected karat from price calculator
        goldPurity: karatPurityMap[selectedKarat].purity, // Include the purity percentage
        weightInGrams,
        makingCharges,
        estimatedPrice: useCustomPrice ? customPrice : estimatedPrice,
        totalAmount
      };

      console.log('Including branch_id:', userBranchId);

      console.log('Order data:', orderData);

      // Send the data to the backend
      const response = await fetch('http://localhost:3002/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to create order');
      }

      alert('Order submitted successfully!');

      // Reset form fields
      setCategory('');
      setSupplier('');
      setQuantity(20);
      setOfferGold('yes');
      setSelectedKarats({
        '24KT': false,
        '22KT': false,
        '21KT': false,
        '18KT': false,
        '16KT': false,
      });
      setKaratValues({
        '24KT': 50,
        '22KT': 50,
        '21KT': 50,
        '18KT': 50,
        '16KT': 50,
      });
      setImagePreview(null);

      // Reset price calculation fields
      setShowPriceCalculation(false);
      setGoldPricePerGram(0);
      setWeightInGrams(0);
      setMakingCharges(0);
      setUseCustomPrice(false);
      setCustomPrice(0);
      setEstimatedPrice(0);
      setTotalAmount(0);

    } catch (error) {
      console.error('Error submitting order:', error);
      alert(`Failed to submit order: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Order</h2>

        <form onSubmit={handleSubmit}>
          {/* Item Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Item Category</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={category}
              onChange={(e) => {
                const newCategory = e.target.value;
                setCategory(newCategory);
                // Reset supplier selection when category changes
                setSupplier('');
                console.log('Category changed to:', newCategory);
              }}
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.category_id} value={cat.category_name}>{cat.category_name}</option>
              ))}
            </select>
          </div>

          {/* Select Supplier */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Select Supplier</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              required
            >
              <option value="">Select Supplier</option>
              {suppliers
                .filter(sup => !category || sup.category === category)
                .map((sup) => (
                  <option key={sup.supplier_id} value={sup.supplier_id}>
                    {sup.supplier_id} - {sup.name} {sup.category ? `(${sup.category})` : ''}
                  </option>
                ))}
            </select>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              required
            />
          </div>

          {/* Gold Material Option */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Do You Offer Gold Material?</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="offerGold"
                  value="yes"
                  checked={offerGold === 'yes'}
                  onChange={() => setOfferGold('yes')}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="offerGold"
                  value="no"
                  checked={offerGold === 'no'}
                  onChange={() => setOfferGold('no')}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          {/* Gold Karat Options - Only show if offerGold is 'yes' */}
          {offerGold === 'yes' && (
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  {Object.keys(selectedKarats).map((karat) => (
                    <div key={karat} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={karat}
                        checked={selectedKarats[karat as keyof typeof selectedKarats]}
                        onChange={() => handleKaratChange(karat)}
                        className="mr-2"
                      />
                      <label htmlFor={karat} className="mr-4 w-12">{karat}</label>
                      <input
                        type="number"
                        value={karatValues[karat as keyof typeof karatValues]}
                        onChange={(e) => handleKaratValueChange(karat, Number(e.target.value))}
                        className="w-16 p-1 border border-gray-300 rounded-md"
                        disabled={!selectedKarats[karat as keyof typeof selectedKarats]}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Price Calculation Button */}
          <div className="mb-4">
            <button
              type="button"
              className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors"
              onClick={() => setShowPriceCalculation(!showPriceCalculation)}
            >
              {showPriceCalculation ? 'Hide Price Calculator' : 'Show Price Calculator'}
            </button>
          </div>

          {/* Price Calculation Section - Only show when button is clicked */}
          {showPriceCalculation && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Price Calculation</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Gold Karat Selection */}
                <div>
                  <label className="block text-sm font-medium mb-1">Gold Karat</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedKarat}
                    onChange={(e) => updateGoldPriceForKarat(e.target.value as KaratKey)}
                    disabled={useCustomPrice}
                  >
                    {Object.entries(karatPurityMap).map(([karat, { label }]) => (
                      <option key={karat} value={karat}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Gold Price Per Gram */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-sm font-medium">Gold Price (Rs./g)</label>
                    <button
                      type="button"
                      className="text-xs text-blue-500 hover:text-blue-700"
                      onClick={fetchGoldPrice}
                      disabled={isLoadingGoldPrice}
                    >
                      {isLoadingGoldPrice ? 'Loading...' : 'Refresh'}
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      className={`w-full p-2 border border-gray-300 rounded-md ${isLoadingGoldPrice ? 'bg-gray-100' : ''}`}
                      value={goldPricePerGram.toFixed(2)}
                      onChange={(e) => setGoldPricePerGram(Number(e.target.value))}
                      disabled={useCustomPrice || isLoadingGoldPrice}
                      min="0"
                      placeholder="Enter gold price per gram"
                    />
                    {isLoadingGoldPrice && (
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                        <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                  {goldPriceLastUpdated && (
                    <p className="text-xs text-gray-500 mt-1">Last updated: {goldPriceLastUpdated}</p>
                  )}
                </div>

                {/* Weight in Grams */}
                <div>
                  <label className="block text-sm font-medium mb-1">Weight (g)</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={weightInGrams}
                    onChange={(e) => setWeightInGrams(Number(e.target.value))}
                    disabled={useCustomPrice}
                    min="0"
                    step="0.1"
                    placeholder="Enter weight in grams"
                  />
                </div>

                {/* Making Charges */}
                <div>
                  <label className="block text-sm font-medium mb-1">Making Charges (Rs.)</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={makingCharges}
                    onChange={(e) => setMakingCharges(Number(e.target.value))}
                    disabled={useCustomPrice}
                    min="0"
                    placeholder="Enter making charges"
                  />
                </div>

                {/* Custom Price Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="useCustomPrice"
                    checked={useCustomPrice}
                    onChange={() => setUseCustomPrice(!useCustomPrice)}
                    className="mr-2"
                  />
                  <label htmlFor="useCustomPrice" className="text-sm font-medium">Use custom estimate price</label>
                </div>
              </div>

              {/* Custom Price Input - Only show if useCustomPrice is true */}
              {useCustomPrice && (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Custom Estimate Price (per unit)</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={customPrice}
                    onChange={(e) => setCustomPrice(Number(e.target.value))}
                    min="0"
                    placeholder="Enter custom price"
                  />
                </div>
              )}

              {/* Calculated Prices */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200">
                <div>
                  <label className="block text-sm font-medium mb-1">Estimate Price (per unit)</label>
                  <div className="p-2 bg-white border border-gray-300 rounded-md">
                    Rs. {useCustomPrice ? customPrice.toFixed(2).toLocaleString() : estimatedPrice.toFixed(2).toLocaleString()}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Total Amount</label>
                  <div className="p-2 bg-white border border-gray-300 rounded-md font-semibold text-yellow-700">
                    Rs. {totalAmount.toFixed(2).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Image Upload - Always visible regardless of gold material option */}
          <div className="mb-4">
            <div className="flex flex-col items-center">
              <label className="block text-sm font-medium mb-2 text-center">
                Add a image of Design
              </label>
              <div className="border border-gray-300 rounded-md p-2 w-full h-32 flex items-center justify-center">
                {imagePreview === 'loading' ? (
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-2"></div>
                    <span className="text-sm text-gray-500">Compressing image...</span>
                  </div>
                ) : imagePreview ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={imagePreview}
                      alt="Design Preview"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                    <button
                      type="button"
                      onClick={() => setImagePreview(null)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                      title="Remove image"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer text-center">
                    <span className="text-blue-500">Click to upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* Add More Button */}
          <div className="flex justify-center mb-4">
            <button
              type="button"
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium"
              onClick={() => alert('Add more functionality will be implemented later')}
            >
              ADD MORE
            </button>
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-yellow-400 text-black px-8 py-2 rounded-full font-medium"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-gray-200 text-black px-8 py-2 rounded-full font-medium"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {/* Supplier Category Chart - Only show if category is selected */}
      {category && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-center mb-6">Leading Supplier Expert in the Field</h2>
          <p className="text-center text-sm text-gray-500 mb-4">
            This chart shows the performance of suppliers in the <span className="font-semibold">{category}</span> category
          </p>
          <SupplierCategoryChart selectedCategory={category} />
        </div>
      )}
    </div>
  );
};

export default AddOrderPage;
