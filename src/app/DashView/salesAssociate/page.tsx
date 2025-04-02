"use client";

import React, { useState, useEffect } from 'react';
import { BarChart, Users, ShoppingCart, Tag, Coins } from 'lucide-react';

const SalesAssociatePage: React.FC = () => {
    const [userName, setUserName] = useState<string>('');

    useEffect(() => {
        // Get user info from localStorage if available
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            setUserName(storedName);
        }
    }, []);

    // Dashboard card component
    const DashboardCard = ({ icon: Icon, title, value, color }: { icon: any, title: string, value: string, color: string }) => (
        <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${color}`}>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
                    <p className="text-2xl font-bold mt-1">{value}</p>
                </div>
                <div className={`p-3 rounded-full ${color.replace('border-l-4', 'bg').replace('-500', '-100')}`}>
                    <Icon className={color.replace('border-l-4 border', 'text')} size={24} />
                </div>
            </div>
        </div>
    );

    return (
        <div className="p-6">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Sales Associate Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome back{userName ? `, ${userName}` : ''}! Here's what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <DashboardCard
                    icon={ShoppingCart}
                    title="Today's Sales"
                    value="₹24,500"
                    color="border-l-4 border-blue-500"
                />
                <DashboardCard
                    icon={Users}
                    title="Customers Served"
                    value="18"
                    color="border-l-4 border-green-500"
                />
                <DashboardCard
                    icon={Tag}
                    title="Top Category"
                    value="Necklaces"
                    color="border-l-4 border-purple-500"
                />
                <DashboardCard
                    icon={Coins}
                    title="Gold Price"
                    value="₹5,842/g"
                    color="border-l-4 border-yellow-500"
                />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Recent Sales</h2>
                    <button className="text-blue-500 hover:text-blue-700">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">Amal Perera</td>
                                <td className="px-6 py-4 whitespace-nowrap">Gold Necklace</td>
                                <td className="px-6 py-4 whitespace-nowrap">₹12,500</td>
                                <td className="px-6 py-4 whitespace-nowrap">10:30 AM</td>
                                <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span></td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">Nimal Silva</td>
                                <td className="px-6 py-4 whitespace-nowrap">Diamond Ring</td>
                                <td className="px-6 py-4 whitespace-nowrap">₹8,750</td>
                                <td className="px-6 py-4 whitespace-nowrap">11:45 AM</td>
                                <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span></td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">Kamala Jayawardene</td>
                                <td className="px-6 py-4 whitespace-nowrap">Silver Bracelet</td>
                                <td className="px-6 py-4 whitespace-nowrap">₹3,250</td>
                                <td className="px-6 py-4 whitespace-nowrap">1:15 PM</td>
                                <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Top Selling Items</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                    <span className="text-blue-500 font-bold">1</span>
                                </div>
                                <div>
                                    <p className="font-medium">Gold Necklace</p>
                                    <p className="text-sm text-gray-500">22K Gold</p>
                                </div>
                            </div>
                            <p className="font-bold">₹45,000</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                    <span className="text-blue-500 font-bold">2</span>
                                </div>
                                <div>
                                    <p className="font-medium">Diamond Ring</p>
                                    <p className="text-sm text-gray-500">1.2 Carat</p>
                                </div>
                            </div>
                            <p className="font-bold">₹38,500</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                    <span className="text-blue-500 font-bold">3</span>
                                </div>
                                <div>
                                    <p className="font-medium">Gold Bangles</p>
                                    <p className="text-sm text-gray-500">Set of 4</p>
                                </div>
                            </div>
                            <p className="font-bold">₹32,000</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 bg-blue-50 rounded-lg flex flex-col items-center justify-center hover:bg-blue-100 transition duration-200">
                            <ShoppingCart className="text-blue-500 mb-2" size={24} />
                            <span className="text-sm font-medium">New Sale</span>
                        </button>
                        <button className="p-4 bg-green-50 rounded-lg flex flex-col items-center justify-center hover:bg-green-100 transition duration-200">
                            <Users className="text-green-500 mb-2" size={24} />
                            <span className="text-sm font-medium">Add Customer</span>
                        </button>
                        <button className="p-4 bg-purple-50 rounded-lg flex flex-col items-center justify-center hover:bg-purple-100 transition duration-200">
                            <Tag className="text-purple-500 mb-2" size={24} />
                            <span className="text-sm font-medium">Check Inventory</span>
                        </button>
                        <button className="p-4 bg-yellow-50 rounded-lg flex flex-col items-center justify-center hover:bg-yellow-100 transition duration-200">
                            <BarChart className="text-yellow-500 mb-2" size={24} />
                            <span className="text-sm font-medium">Daily Report</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesAssociatePage;