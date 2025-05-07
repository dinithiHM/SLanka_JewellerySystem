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
  gold_carat?: number;
  weight?: number;
  is_solid_gold?: boolean;
  assay_certificate?: string;
  assay_status?: string;
}

interface SaleItem {
  item_id: number | string;
  product_title: string;
  quantity: number;
  unit_price: number;
  original_price?: number;
  discount_amount?: number;
  discount_type?: 'percentage' | 'fixed';
  subtotal: number;
  // Gold-related properties
  gold_carat?: number;
  gold_weight?: number;
  gold_price_per_gram?: number;
  is_gold_price_based?: boolean;
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
  const [customPrice, setCustomPrice] = useState<number | null>(null);
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [discountType, setDiscountType] = useState<'percentage' | 'fixed'>('fixed');
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [saleItems, setSaleItems] = useState<SaleItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [branchId, setBranchId] = useState<string | null>(null);

  // UI states
  const [showItemDropdown, setShowItemDropdown] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  // Gold price states
  const [baseGoldPrice, setBaseGoldPrice] = useState<number>(0);
  const [isLoadingGoldPrice, setIsLoadingGoldPrice] = useState<boolean>(false);
  const [goldPriceLastUpdated, setGoldPriceLastUpdated] = useState<string>('');
  const [useGoldPriceCalculation, setUseGoldPriceCalculation] = useState<boolean>(false);
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const [baseGoldPricePerUnit, setBaseGoldPricePerUnit] = useState<number>(0);

  // Karat purity mapping
  const karatPurityMap: Record<string, { purity: number; label: string }> = {
    '24KT': { purity: 1.0000, label: '24-Karat Gold (99.99% Pure)' },
    '22KT': { purity: 0.9167, label: '22-Karat Gold (92% Pure)' },
    '21KT': { purity: 0.8750, label: '21-Karat Gold (88% Pure)' },
    '18KT': { purity: 0.7500, label: '18-Karat Gold (75% Pure)' },
    '16KT': { purity: 0.6667, label: '16-Karat Gold (67% Pure)' },
  };

  // Get user info from localStorage and fetch initial gold price
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

    // Fetch initial gold price
    fetchGoldPrice();
  }, []);

  // Function to fetch current gold price (24K)
  const fetchGoldPrice = async () => {
    try {
      setIsLoadingGoldPrice(true);
      const response = await fetch('http://localhost:3002/gold-prices/current-price');
      const data = await response.json();

      if (data.success) {
        // Store the 24K base price
        setBaseGoldPrice(data.price);

        // Format the timestamp
        const date = new Date(data.timestamp);
        setGoldPriceLastUpdated(date.toLocaleString());

        return data.price;
      } else {
        console.error('Failed to fetch gold price:', data.message);
        return 0;
      }
    } catch (error) {
      console.error('Error fetching gold price:', error);
      return 0;
    } finally {
      setIsLoadingGoldPrice(false);
    }
  };

  // Function to fetch gold price for a specific karat
  const fetchKaratPrice = async (karat: number) => {
    try {
      setIsLoadingGoldPrice(true);
      const response = await fetch(`http://localhost:3002/gold-prices/karat-price/${karat}KT`);
      const data = await response.json();

      if (data.success) {
        // Format the timestamp
        const date = new Date(data.timestamp);
        setGoldPriceLastUpdated(date.toLocaleString());

        return data.price;
      } else {
        console.error(`Failed to fetch ${karat}KT gold price:`, data.message);
        return 0;
      }
    } catch (error) {
      console.error(`Error fetching ${karat}KT gold price:`, error);
      return 0;
    } finally {
      setIsLoadingGoldPrice(false);
    }
  };

  // Function to fetch gold stock data
  const fetchGoldStock = async () => {
    try {
      const response = await fetch('http://localhost:3002/gold-stock');
      const data = await response.json();

      if (data.success) {
        return data.data;
      } else {
        console.error('Failed to fetch gold stock:', data.message);
        return [];
      }
    } catch (error) {
      console.error('Error fetching gold stock:', error);
      return [];
    }
  };

  // Helper function to get purity for a karat
  const getPurity = (karat: string): number => {
    return karatPurityMap[karat]?.purity || 0;
  };

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

        // If test route works, try the actual endpoint with branch filtering
        console.log('Fetching available items for branch:', branchId);

        // Construct URL with branch_id parameter if available
        let url = `http://localhost:3002/sale-items/available?t=${new Date().getTime()}`;
        if (branchId) {
          url += `&branch_id=${branchId}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errorMessage = errorData.message || `Failed to fetch available items: ${response.status}`;
          throw new Error(errorMessage);
        }

        let data = await response.json();
        console.log('Initial fetch - available items:', data); // Debug log

        // Add test gold items for demonstration
        const hasGoldItems = data.some((item: JewelleryItem) => item.is_solid_gold && item.gold_carat && item.weight);

        if (!hasGoldItems) {
          console.log('Adding test gold items for demonstration');

          // Add test gold items
          const testGoldItems = [
            {
              item_id: 'gold-1',
              product_title: 'Gold Necklace 22KT',
              category: 'Necklace',
              in_stock: 5,
              selling_price: 150000,
              is_solid_gold: true,
              gold_carat: 22,
              weight: 15.5,
              assay_certificate: 'CERT-001'
            },
            {
              item_id: 'gold-2',
              product_title: 'Gold Ring 18KT',
              category: 'Rings',
              in_stock: 10,
              selling_price: 55000,
              is_solid_gold: true,
              gold_carat: 18,
              weight: 5.2
            },
            {
              item_id: 'gold-3',
              product_title: 'Pure Gold Bangle 24KT',
              category: 'Bangles',
              in_stock: 3,
              selling_price: 200000,
              is_solid_gold: true,
              gold_carat: 24,
              weight: 12.8,
              assay_certificate: 'CERT-002'
            }
          ];

          data = [...data, ...testGoldItems];
        }

        setAvailableItems(data);
        setFilteredItems(data);

        // Fetch gold price to have it ready
        fetchGoldPrice();
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
  }, [branchId]);

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

  // Calculate price after discount
  const calculatePriceAfterDiscount = (originalPrice: number, discountAmount: number, discountType: 'percentage' | 'fixed'): number => {
    if (discountAmount <= 0) return originalPrice;

    if (discountType === 'percentage') {
      // Limit percentage discount to 75%
      const limitedPercentage = Math.min(discountAmount, 75);
      return originalPrice * (1 - limitedPercentage / 100);
    } else {
      // For fixed discount, ensure it doesn't exceed 75% of the original price
      const maxDiscount = originalPrice * 0.75;
      const limitedDiscount = Math.min(discountAmount, maxDiscount);
      return originalPrice - limitedDiscount;
    }
  };

  // Calculate final price for the current item
  const getFinalUnitPrice = () => {
    if (!selectedItem) return 0;

    // Start with either custom price, calculated gold price, or original selling price
    let basePrice = selectedItem.selling_price;

    if (customPrice !== null) {
      basePrice = customPrice;
    } else if (useGoldPriceCalculation && calculatedPrice && calculatedPrice > 0) {
      basePrice = calculatedPrice;
    }

    // For gold items, prioritize using the baseGoldPricePerUnit for discount calculation
    let priceForDiscount;

    if (selectedItem.gold_carat && selectedItem.weight) {
      // For gold items, always try to use the gold price calculation
      if (baseGoldPricePerUnit > 0) {
        // Use the calculated base gold price if available
        priceForDiscount = baseGoldPricePerUnit;
      } else if (calculatedPrice && calculatedPrice > 0) {
        // Fall back to calculated price if baseGoldPricePerUnit isn't set yet
        priceForDiscount = calculatedPrice;
      } else if (baseGoldPrice && selectedItem.weight) {
        // Calculate directly if we have the base gold price and weight
        priceForDiscount = baseGoldPrice * selectedItem.weight;
      } else {
        // Last resort, use the base price
        priceForDiscount = basePrice;
      }
    } else {
      // For non-gold items, use the base price
      priceForDiscount = basePrice;
    }

    // Apply discount
    return calculatePriceAfterDiscount(priceForDiscount, discountAmount, discountType);
  };

  // Calculate total
  const totalAmount = saleItems.reduce((sum, item) => sum + item.subtotal, 0);

  // Handle item selection
  const handleSelectItem = async (item: JewelleryItem) => {
    console.log('handleSelectItem called with item:', item);
    if (item.in_stock <= 0) {
      setError(`${item.product_title} is out of stock`);
      return;
    }

    setSelectedItem(item);
    setQuantity(1);
    setCustomPrice(null); // Reset custom price
    setDiscountAmount(0); // Reset discount
    setDiscountType('fixed'); // Reset discount type
    setShowItemDropdown(false);

    // Reset gold price related values
    setBaseGoldPricePerUnit(0);
    setError(null);

    // Check if it's a gold item with carat and weight
    // Note: We check for weight and gold_carat directly since is_solid_gold might not be properly set
    if ((item.is_solid_gold ||
         (item.gold_carat !== undefined && item.gold_carat > 0) ||
         (item.weight !== undefined && item.weight > 0)) &&
        item.gold_carat &&
        item.weight) {
      console.log('Gold item detected:', item);
      setUseGoldPriceCalculation(true);

      try {
        // Fetch gold stock data to get the price for the specific karat
        const goldStockData = await fetchGoldStock();

        // Find the matching karat in gold stock
        const karat = `${item.gold_carat}KT`;
        const goldStockItem = goldStockData.find((stock: any) => stock.purity === karat);

        let goldPrice;

        if (goldStockItem && goldStockItem.price_per_gram > 0) {
          // Use the price from gold stock if available
          goldPrice = goldStockItem.price_per_gram;
          console.log(`Using gold price from stock for ${karat}: ${goldPrice}`);

          // Update the base gold price for display
          setBaseGoldPrice(goldPrice);
        } else {
          // Try to fetch the specific karat price directly
          const karatNumber = parseInt(karat.replace('KT', ''));
          const directKaratPrice = await fetchKaratPrice(karatNumber);

          if (directKaratPrice > 0) {
            // Use the directly fetched karat price
            goldPrice = directKaratPrice;
            console.log(`Using directly fetched price for ${karat}: ${goldPrice}`);

            // Also update the base gold price for display
            setBaseGoldPrice(directKaratPrice);
          } else {
            // Fallback to fetching 24K price and calculating based on purity
            const baseGoldPrice = await fetchGoldPrice();
            const purity = getPurity(karat);
            goldPrice = baseGoldPrice * purity;
            console.log(`Calculated gold price for ${karat}: ${goldPrice} (base: ${baseGoldPrice}, purity: ${purity})`);

            // Update the base gold price for display
            setBaseGoldPrice(goldPrice);
          }
        }

        // Calculate price based on gold price and weight
        const calculatedGoldPrice = goldPrice * item.weight;

        if (calculatedGoldPrice > 0) {
          // Update all the state variables in one go to ensure consistency
          setCalculatedPrice(calculatedGoldPrice);
          setBaseGoldPricePerUnit(calculatedGoldPrice);
          setUseGoldPriceCalculation(true);

          // Force a re-render by updating a non-critical state
          setGoldPriceLastUpdated(new Date().toLocaleString());

          console.log('Setting baseGoldPricePerUnit to:', calculatedGoldPrice, 'and useGoldPriceCalculation to true');
          // We don't automatically set custom price to allow user to see both prices
        } else {
          // If we couldn't calculate the gold price, calculate it directly
          if (baseGoldPrice > 0 && item.weight) {
            const directCalculation = baseGoldPrice * item.weight;
            setCalculatedPrice(directCalculation);
            setBaseGoldPricePerUnit(directCalculation);
            setUseGoldPriceCalculation(true);
            setGoldPriceLastUpdated(new Date().toLocaleString());
            console.log('Direct calculation of baseGoldPricePerUnit:', directCalculation);
          }
        }
      } catch (error) {
        console.error('Error calculating gold price:', error);

        // Fallback to original calculation method
        // Try to fetch the specific karat price first
        const karatNumber = item.gold_carat || 0;
        let goldPrice;

        if (karatNumber > 0) {
          goldPrice = await fetchKaratPrice(karatNumber);
          if (goldPrice <= 0) {
            // If that fails, fall back to 24K price and calculate
            const basePrice = await fetchGoldPrice();
            const karat = `${item.gold_carat}KT`;
            const purity = getPurity(karat);
            goldPrice = basePrice * purity;
          }

          // Update the base gold price for display
          setBaseGoldPrice(goldPrice);
        } else {
          goldPrice = await fetchGoldPrice();
          // Update the base gold price for display
          setBaseGoldPrice(goldPrice);
        }

        const calculatedGoldPrice = goldPrice * item.weight;

        if (calculatedGoldPrice > 0) {
          // Update all the state variables in one go to ensure consistency
          setCalculatedPrice(calculatedGoldPrice);
          setBaseGoldPricePerUnit(calculatedGoldPrice);
          setUseGoldPriceCalculation(true);

          // Force a re-render by updating a non-critical state
          setGoldPriceLastUpdated(new Date().toLocaleString());

          console.log('Setting baseGoldPricePerUnit (fallback) to:', calculatedGoldPrice, 'and useGoldPriceCalculation to true');
        } else {
          // If we still couldn't calculate, try direct calculation
          if (baseGoldPrice > 0 && item.weight) {
            const directCalculation = baseGoldPrice * item.weight;
            setCalculatedPrice(directCalculation);
            setBaseGoldPricePerUnit(directCalculation);
            setUseGoldPriceCalculation(true);
            setGoldPriceLastUpdated(new Date().toLocaleString());
            console.log('Direct calculation of baseGoldPricePerUnit (fallback):', directCalculation);
          }
        }
      }
    } else {
      setUseGoldPriceCalculation(false);
      setCalculatedPrice(null);
      setBaseGoldPricePerUnit(0);
    }
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

      // Get the original price (either custom, calculated gold price, or from the item)
      let originalPrice = selectedItem.selling_price;

      if (customPrice !== null) {
        originalPrice = customPrice;
      } else if (useGoldPriceCalculation && calculatedPrice && calculatedPrice > 0) {
        originalPrice = calculatedPrice;
      }

      // Calculate the final unit price after discount
      const finalPrice = getFinalUnitPrice();

      // Calculate subtotal based on the final price
      const subtotal = quantity * finalPrice;

      // For gold items, determine the original price based on gold calculation
      let itemOriginalPrice;
      let isGoldPriceBased = false;

      if (selectedItem.gold_carat && selectedItem.weight) {
        // For gold items, prioritize using the gold price calculation
        if (baseGoldPricePerUnit > 0) {
          // Use the calculated base gold price if available
          itemOriginalPrice = baseGoldPricePerUnit;
          isGoldPriceBased = true;
        } else if (calculatedPrice && calculatedPrice > 0) {
          // Fall back to calculated price if baseGoldPricePerUnit isn't set yet
          itemOriginalPrice = calculatedPrice;
          isGoldPriceBased = true;
        } else if (baseGoldPrice && selectedItem.weight) {
          // Calculate directly if we have the base gold price and weight
          itemOriginalPrice = baseGoldPrice * selectedItem.weight;
          isGoldPriceBased = true;
        } else {
          // Last resort, use the original price
          itemOriginalPrice = originalPrice;
        }
      } else {
        // For non-gold items, use the original price
        itemOriginalPrice = originalPrice;
      }

      // Create the new item with gold information if applicable
      const newItem: SaleItem = {
        item_id: selectedItem.item_id,
        product_title: selectedItem.product_title,
        quantity,
        original_price: itemOriginalPrice,
        unit_price: finalPrice,
        discount_amount: discountAmount > 0 ? discountAmount : undefined,
        discount_type: discountAmount > 0 ? discountType : undefined,
        subtotal,
        // Add gold-related information if this is a gold item
        gold_carat: (selectedItem.is_solid_gold || (selectedItem.gold_carat !== undefined && selectedItem.gold_carat > 0)) ? selectedItem.gold_carat : undefined,
        gold_weight: (selectedItem.is_solid_gold || (selectedItem.weight !== undefined && selectedItem.weight > 0)) ? selectedItem.weight : undefined,
        gold_price_per_gram: (useGoldPriceCalculation && baseGoldPrice > 0) ? baseGoldPrice : undefined,
        is_gold_price_based: isGoldPriceBased
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
        total_amount: totalAmount, // Add the total amount field
        payment_method: paymentMethod,
        items: saleItems.map(item => ({
          item_id: item.item_id,
          quantity: item.quantity,
          unit_price: item.unit_price,
          original_price: item.original_price,
          discount_amount: item.discount_amount,
          discount_type: item.discount_type,
          // Include gold-related information if available
          gold_carat: item.gold_carat,
          gold_weight: item.gold_weight,
          gold_price_per_gram: item.gold_price_per_gram,
          is_gold_price_based: item.is_gold_price_based
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
                    // If test route works, try the actual endpoint with branch filtering
                    let url = `http://localhost:3002/sale-items/available?t=${new Date().getTime()}`;
                    if (branchId) {
                      url += `&branch_id=${branchId}`;
                    }
                    console.log('Fetching available items for branch:', branchId);
                    return fetch(url)
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
                    className={`p-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center ${
                      (item.is_solid_gold || (item.gold_carat !== undefined && item.gold_carat > 0) || (item.weight !== undefined && item.weight > 0)) ? 'border-l-4 border-yellow-400' : ''
                    }`}
                    onClick={() => handleSelectItem(item)}
                  >
                    <div className="flex-1">
                      <div className="font-medium">{item.product_title}</div>
                      <div className="text-sm text-gray-500">{item.category}</div>
                      {((item.is_solid_gold || (item.gold_carat !== undefined && item.gold_carat > 0) || (item.weight !== undefined && item.weight > 0)) && item.gold_carat && item.weight) && (
                        <div className="flex items-center mt-1">
                          <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mr-1"></span>
                          <span className="text-xs font-medium text-yellow-700">
                            {item.gold_carat}KT Gold • {item.weight}g
                            {item.assay_certificate && (
                              <span className="ml-1 text-green-600">• Certified</span>
                            )}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="text-right ml-4">
                      <div className="font-medium">{formatCurrency(item.selling_price)}</div>
                      <div className={`text-sm ${item.in_stock > 0 ? 'text-gray-500' : 'text-red-500 font-bold'}`}>
                        In stock: {item.in_stock}
                      </div>
                      {(item.is_solid_gold || (item.gold_carat !== undefined && item.gold_carat > 0) || (item.weight !== undefined && item.weight > 0)) && (
                        <div className="text-xs text-yellow-600 mt-1">
                          Gold Item
                        </div>
                      )}
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

          {/* Gold Item Details (if applicable) */}
          {selectedItem && (selectedItem.is_solid_gold || (selectedItem.gold_carat !== undefined && selectedItem.gold_carat > 0) || (selectedItem.weight !== undefined && selectedItem.weight > 0)) && selectedItem.gold_carat && selectedItem.weight && (
            <div className="flex items-center mb-4">
              <div className="w-32 font-medium">Gold Details</div>
              <div className="flex-1">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Karat:</span>
                    <span className="text-sm font-bold">{selectedItem.gold_carat}KT</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm font-medium">Weight:</span>
                    <span className="text-sm font-bold">{selectedItem.weight} grams</span>
                  </div>

                  {/* Gold Price Information */}
                  <div className="mt-3 pt-2 border-t border-yellow-200">
                    <div className="text-sm font-medium mb-1">Gold Price Information:</div>

                    {isLoadingGoldPrice ? (
                      <div className="flex items-center justify-center py-2">
                        <span className="inline-block w-4 h-4 mr-1 border-2 border-t-transparent border-yellow-400 rounded-full animate-spin"></span>
                        <span className="text-sm">Loading gold price...</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex justify-between mt-1">
                          <span className="text-sm">{selectedItem.gold_carat}KT Base Price:</span>
                          <div className="flex items-center">
                            <span className="text-sm mr-2">{formatCurrency(baseGoldPrice)}/gram</span>
                            <button
                              type="button"
                              className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded"
                              onClick={(e) => {
                                e.stopPropagation();
                                // Fetch the specific karat price
                                const karatNumber = selectedItem?.gold_carat || 0;
                                if (karatNumber > 0) {
                                  fetchKaratPrice(karatNumber).then(price => {
                                    if (price > 0 && selectedItem?.gold_carat && selectedItem?.weight) {
                                      // Calculate the base gold price directly
                                      const calculatedGoldPrice = price * selectedItem.weight;
                                      console.log('Refresh button: Setting baseGoldPricePerUnit to:', calculatedGoldPrice);

                                      // Update all the state variables in one go to ensure consistency
                                      setBaseGoldPricePerUnit(calculatedGoldPrice);
                                      setCalculatedPrice(calculatedGoldPrice);
                                      setUseGoldPriceCalculation(true);

                                      // Force a re-render by updating a non-critical state
                                      setGoldPriceLastUpdated(new Date().toLocaleString());

                                      // Re-trigger the item selection to recalculate everything
                                      // handleSelectItem(selectedItem);
                                    }
                                  });
                                }
                              }}
                            >
                              Refresh
                            </button>
                          </div>
                        </div>

                        {goldPriceLastUpdated && (
                          <div className="text-xs text-gray-500 mt-1 text-right">
                            Last updated: {goldPriceLastUpdated}
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Calculation */}
                  {calculatedPrice && calculatedPrice > 0 && (
                    <div className="mt-3 pt-2 border-t border-yellow-200">
                      <div className="text-sm font-medium mb-1">Price Calculation:</div>
                      <div className="grid grid-cols-2 gap-1 text-sm">
                        <span>Gold Price:</span>
                        <span className="text-right">
                          {formatCurrency(baseGoldPrice)}/gram
                        </span>
                        <span>Weight:</span>
                        <span className="text-right">{selectedItem.weight} grams</span>
                        <span className="font-medium">Total Gold Value:</span>
                        <span className="text-right font-bold">{formatCurrency(calculatedPrice)}</span>
                      </div>

                      <div className="mt-2 flex justify-end">
                        <button
                          type="button"
                          className="bg-yellow-400 text-black px-2 py-1 rounded text-xs"
                          onClick={() => setCustomPrice(calculatedPrice)}
                        >
                          Use Gold Price
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Unit Price */}
          <div className="flex items-center">
            <div className="w-32 font-medium">Unit price</div>
            <div className="flex-1">
              {selectedItem ? (
                <div className="relative">
                  <input
                    type="number"
                    className={`w-full p-3 border ${
                      calculatedPrice && calculatedPrice > 0
                        ? 'border-yellow-400'
                        : 'border-gray-300'
                    } rounded-md`}
                    value={customPrice !== null ? customPrice : selectedItem.selling_price}
                    onChange={(e) => {
                      const value = parseFloat(e.target.value);
                      if (!isNaN(value) && value > 0) {
                        setCustomPrice(value);
                      } else if (e.target.value === '') {
                        setCustomPrice(null); // Reset to original price
                      }
                    }}
                    placeholder="Enter custom price"
                    min="0"
                    step="0.01"
                  />

                  {/* Price selection buttons */}
                  <div className="absolute right-2 top-2 flex space-x-1">
                    {calculatedPrice && calculatedPrice > 0 && (
                      <button
                        type="button"
                        className={`px-2 py-1 rounded text-xs ${
                          customPrice === calculatedPrice
                            ? 'bg-yellow-500 text-white'
                            : 'bg-yellow-400 text-black'
                        }`}
                        onClick={() => setCustomPrice(calculatedPrice)}
                      >
                        Use Gold Price
                      </button>
                    )}

                    {customPrice !== null && (
                      <button
                        type="button"
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
                        onClick={() => setCustomPrice(null)}
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-gray-100 rounded-md">0.00</div>
              )}

              {/* Price comparison information */}
              <div className="mt-2 grid grid-cols-2 gap-2">
                {selectedItem && (
                  <div className={`text-xs ${customPrice !== null ? 'text-gray-500' : 'text-black font-medium'}`}>
                    <span className="mr-1">Catalog price:</span>
                    <span>{formatCurrency(selectedItem.selling_price)}</span>
                  </div>
                )}

                {calculatedPrice && calculatedPrice > 0 && (
                  <div className={`text-xs ${customPrice === calculatedPrice ? 'text-yellow-600 font-medium' : 'text-yellow-600'}`}>
                    <span className="mr-1">Gold value price:</span>
                    <span>{formatCurrency(calculatedPrice)}</span>
                  </div>
                )}

                {customPrice !== null && customPrice !== calculatedPrice && selectedItem && customPrice !== selectedItem.selling_price && (
                  <div className="text-xs text-blue-600 font-medium">
                    <span className="mr-1">Custom price:</span>
                    <span>{formatCurrency(customPrice)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Base Gold Price (per unit) */}
          {/* Debug info */}
          {(() => {
            console.log('Rendering Base Gold Price section, conditions:', {
              selectedItem: !!selectedItem,
              baseGoldPricePerUnit,
              useGoldPriceCalculation,
              shouldShow: selectedItem && baseGoldPricePerUnit > 0
            });
            return null;
          })()}

          {/* Show Base Gold Price for gold items */}
          {selectedItem && selectedItem.gold_carat && selectedItem.weight && (
            <div className="flex items-center">
              <div className="w-32 font-medium">Base Gold Price (per unit)</div>
              <div className="flex-1">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      {baseGoldPricePerUnit > 0
                        ? formatCurrency(baseGoldPricePerUnit)
                        : calculatedPrice
                          ? formatCurrency(calculatedPrice)
                          : baseGoldPrice && selectedItem.weight
                            ? formatCurrency(baseGoldPrice * selectedItem.weight)
                            : 'Calculating...'}
                    </span>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-500 mr-2">Gold price × weight</span>
                      <button
                        type="button"
                        className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded"
                        onClick={() => {
                          // Calculate directly based on current values
                          if (baseGoldPrice > 0 && selectedItem?.weight) {
                            const directCalculation = baseGoldPrice * selectedItem.weight;
                            console.log('Direct calculation of baseGoldPricePerUnit:', directCalculation);

                            // Update all relevant state variables
                            setBaseGoldPricePerUnit(directCalculation);
                            setCalculatedPrice(directCalculation);
                            setUseGoldPriceCalculation(true);

                            // Force a re-render
                            setGoldPriceLastUpdated(new Date().toLocaleString());
                          } else {
                            // If we don't have the base price yet, fetch it first
                            const karatNumber = selectedItem?.gold_carat || 0;
                            if (karatNumber > 0) {
                              fetchKaratPrice(karatNumber).then(price => {
                                if (price > 0 && selectedItem?.weight) {
                                  const calculatedGoldPrice = price * selectedItem.weight;
                                  console.log('Fetched and calculated baseGoldPricePerUnit:', calculatedGoldPrice);

                                  // Update all relevant state variables
                                  setBaseGoldPricePerUnit(calculatedGoldPrice);
                                  setCalculatedPrice(calculatedGoldPrice);
                                  setUseGoldPriceCalculation(true);
                                  setBaseGoldPrice(price);

                                  // Force a re-render
                                  setGoldPriceLastUpdated(new Date().toLocaleString());
                                }
                              });
                            }
                          }
                        }}
                      >
                        Refresh
                      </button>
                    </div>
                  </div>
                  {/* Show the calculation details */}
                  <div className="mt-2 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Gold Price per gram:</span>
                      <span>{formatCurrency(baseGoldPrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weight:</span>
                      <span>{selectedItem.weight} grams</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Total Gold Value:</span>
                      <span>
                        {baseGoldPricePerUnit > 0
                          ? formatCurrency(baseGoldPricePerUnit)
                          : calculatedPrice
                            ? formatCurrency(calculatedPrice)
                            : baseGoldPrice && selectedItem.weight
                              ? formatCurrency(baseGoldPrice * selectedItem.weight)
                              : 'Calculating...'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Discount */}
          <div className="flex items-center">
            <div className="w-32 font-medium">Discount</div>
            <div className="flex-1 flex space-x-2">
              <input
                type="number"
                className="flex-1 p-3 border border-gray-300 rounded-md"
                value={discountAmount}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value) && value >= 0) {
                    // For percentage, limit to 75%
                    if (discountType === 'percentage' && value > 75) {
                      setError('Maximum discount allowed is 75%');
                      setDiscountAmount(75);
                    } else if (discountType === 'fixed' && selectedItem) {
                      // For fixed amount, limit to 75% of the price
                      // Use baseGoldPricePerUnit if available, otherwise use custom price or selling price
                      let basePrice;

                      if (selectedItem.gold_carat && selectedItem.weight) {
                        // For gold items, prioritize using the gold price calculation
                        if (baseGoldPricePerUnit > 0) {
                          // Use the calculated base gold price if available
                          basePrice = baseGoldPricePerUnit;
                        } else if (calculatedPrice && calculatedPrice > 0) {
                          // Fall back to calculated price if baseGoldPricePerUnit isn't set yet
                          basePrice = calculatedPrice;
                        } else if (baseGoldPrice && selectedItem.weight) {
                          // Calculate directly if we have the base gold price and weight
                          basePrice = baseGoldPrice * selectedItem.weight;
                        } else if (customPrice !== null) {
                          basePrice = customPrice;
                        } else {
                          basePrice = selectedItem.selling_price;
                        }
                      } else if (customPrice !== null) {
                        basePrice = customPrice;
                      } else {
                        basePrice = selectedItem.selling_price;
                      }

                      const maxDiscount = basePrice * 0.75;
                      if (value > maxDiscount) {
                        setError(`Maximum discount allowed is ${formatCurrency(maxDiscount)}`);
                        setDiscountAmount(maxDiscount);
                      } else {
                        setDiscountAmount(value);
                        setError(null);
                      }
                    } else {
                      setDiscountAmount(value);
                      setError(null);
                    }
                  } else {
                    setDiscountAmount(0);
                  }
                }}
                min="0"
                step={discountType === 'percentage' ? '1' : '0.01'}
                disabled={!selectedItem}
              />
              <select
                className="p-3 border border-gray-300 rounded-md"
                value={discountType}
                onChange={(e) => setDiscountType(e.target.value as 'percentage' | 'fixed')}
                disabled={!selectedItem}
              >
                <option value="fixed">₹</option>
                <option value="percentage">%</option>
              </select>
            </div>
          </div>

          {/* Final Price After Discount */}
          <div className="flex items-center">
            <div className="w-32 font-medium">Final price</div>
            <div className="flex-1">
              <div className="p-3 bg-gray-100 rounded-md font-bold">
                {selectedItem ? formatCurrency(getFinalUnitPrice()) : '0.00'}
              </div>
              {discountAmount > 0 && selectedItem && (
                <div className="text-xs text-green-600 mt-1">
                  {discountType === 'percentage'
                    ? `${discountAmount}% discount applied`
                    : `${formatCurrency(discountAmount)} discount applied`}
                </div>
              )}
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
                {selectedItem ? formatCurrency(getFinalUnitPrice() * quantity) : '0.00'}
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
              {saleItems.length === 0 ? 'ADD ITEM ' : 'ADD MORE'}
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
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Original Price</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Discount</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Final Price</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Subtotal</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {saleItems.map((item, index) => (
                      <tr key={index} className={item.is_gold_price_based ? 'bg-yellow-50' : ''}>
                        <td className="px-4 py-2">
                          <div>{item.product_title}</div>
                          {item.gold_carat && item.gold_weight && (
                            <div className="text-xs text-yellow-600">
                              {item.gold_carat}KT Gold • {item.gold_weight}g
                              {item.gold_price_per_gram && (
                                <span className="ml-1">• {formatCurrency(item.gold_price_per_gram)}/g</span>
                              )}
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-2">{item.quantity}</td>
                        <td className="px-4 py-2">{formatCurrency(item.original_price || item.unit_price)}</td>
                        <td className="px-4 py-2">
                          {item.discount_amount ? (
                            item.discount_type === 'percentage'
                              ? `${item.discount_amount}%`
                              : formatCurrency(item.discount_amount)
                          ) : '-'}
                        </td>
                        <td className="px-4 py-2">
                          <div className="font-medium">{formatCurrency(item.unit_price)}</div>
                          {item.is_gold_price_based && (
                            <div className="text-xs text-yellow-600">Gold price based</div>
                          )}
                        </td>
                        <td className="px-4 py-2">{formatCurrency(item.subtotal)}</td>
                        <td className="px-4 py-2">
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleRemoveItem(index)}
                            title="Remove item"
                          >
                            <X size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50 font-bold">
                      <td className="px-4 py-2" colSpan={5}>Total</td>
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

              {/* <button
                type="button"
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium"
                onClick={() => alert('Invoice generation will be implemented')}
                disabled={isSubmitting || saleItems.length === 0}
              >
                Generate Invoice
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSalePage;
