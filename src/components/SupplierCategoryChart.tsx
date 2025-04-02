"use client";

import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label
} from 'recharts';

interface SupplierData {
  supplier_id: string;
  name: string;
  category: string;
  order_count: number;
}

interface ChartProps {
  selectedCategory: string;
}

const SupplierCategoryChart: React.FC<ChartProps> = ({ selectedCategory }) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Skip API call if no category is selected
        if (!selectedCategory) {
          setChartData([]);
          setLoading(false);
          return;
        }

        // Fetch supplier order statistics from the dedicated API endpoint
        const response = await fetch(`http://localhost:3002/suppliers/order-stats/${selectedCategory}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch supplier statistics: ${response.status}`);
        }

        const data = await response.json();

        // Process data for the chart
        const processedData = data.map((item: any) => ({
          supplier_id: item.supplier_id,
          name: item.name,
          orderCount: item.order_count
        }));

        setChartData(processedData);
      } catch (err) {
        console.error('Error fetching chart data:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch chart data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  if (loading) {
    return <div className="flex justify-center items-center h-64">
      <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
    </div>;
  }

  if (error) {
    return <div className="text-red-500">Error loading chart: {error}</div>;
  }

  if (chartData.length === 0) {
    return <div className="text-center py-10">
      {selectedCategory ?
        `No data available for ${selectedCategory === 'All' ? 'any category' : `the ${selectedCategory} category`}` :
        'Please select a category to see supplier performance'}
    </div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6 text-center">Leading Supplier Expert in the Field</h2>
      <div className="text-right mb-2">
        <span className="inline-block bg-yellow-400 w-4 h-4 mr-2"></span>
        <span className="text-sm">{selectedCategory === 'All' ? 'All Categories' : selectedCategory}</span>
      </div>
      <div className="text-center text-sm text-gray-500 mb-2">
        Showing supplier performance by order count
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis type="number" domain={[0, 'dataMax + 5']} label={{ value: 'Order Times', position: 'bottom', offset: 0 }} />
            <YAxis
              type="category"
              dataKey="supplier_id"
              width={50}
              label={{ value: 'Supplier ID', angle: -90, position: 'left' }}
            />
            <Tooltip
              formatter={(value, name) => [`${value} orders`, 'Orders']}
              labelFormatter={(label) => {
                const supplier = chartData.find(item => item.supplier_id === label);
                return supplier ? `${supplier.name} (${label})` : label;
              }}
            />
            <Bar dataKey="orderCount" fill="#FFDD00" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SupplierCategoryChart;
