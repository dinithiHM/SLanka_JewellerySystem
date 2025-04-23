'use client'; // This marks it as a client-side component

import React, { useState, useEffect } from "react"; // Importing useState and useEffect hooks from React
// import { useSession } from "next-auth/react"; // Importing the session hook
import Link from "next/link";
import {
  Home, Users, Tag, ClipboardList, Coins, ShoppingCart, BarChart, CalendarCheck, CreditCard,
  Bell, UserCircle, Settings, LogOut, Boxes, Package, FileText
} from "lucide-react"; // Importing correct icons
import { useLanguage } from "@/contexts/LanguageContext";

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: Home, label: "Home", href: "/", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
      { icon: Users, label: "Store Managers", href: "/DashView/list/StoreManager", visible: ["Admin"] }, // Only Admin
      { icon: Users, label: "Sales Associates", href: "/DashView/list/SalesAssociate", visible: ["Admin", "Store Manager"] },
      { icon: Users, label: "Cashiers", href: "/DashView/list/cashier", visible: ["Admin", "Store Manager"] },
      { icon: ClipboardList, label: "Suppliers", href: "/DashView/list/Supplier", visible: ["Admin"] }, // Only Admin
      { icon: BarChart, label: "Supplier Details", href: "/DashView/supplier-details", visible: ["Admin", "Store Manager"] },
      { icon: ClipboardList, label: "Orders", href: "/DashView/orders", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
      { icon: Boxes, label: "Jewellery Stock", href: "/DashView/jewellery-stock", visible: ["Admin", "Store Manager", "Sales Associate"] },
      { icon: FileText, label: "Assay Reports", href: "/DashView/assay-reports", visible: ["Admin", "Store Manager", "Sales Associate"] },
      { icon: Coins, label: "Gold Stock", href: "/DashView/gold-stock", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
      { icon: Tag, label: "Categories", href: "/list/assignments", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
      { icon: ShoppingCart, label: "Sales", href: "/DashView/sales/manage", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
      { icon: BarChart, label: "Reports", href: "/list/attendance", visible: ["Store Manager", "Sales Associate", "Cashier"] },
      { icon: BarChart, label: "Sales Report", href: "/DashView/admin/sales-report", visible: ["Admin"] },
      { icon: CalendarCheck, label: "Events", href: "/list/events", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
      { icon: CreditCard, label: "Advance Payment", href: "/DashView/advance-payment", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
      { icon: Package, label: "Custom Orders", href: "/DashView/custom-orders", visible: ["Admin", "Store Manager", "Sales Associate"] },
      { icon: Bell, label: "Notifications", href: "/list/announcements", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: UserCircle, label: "Profile", href: "/profile", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
      { icon: Settings, label: "Settings", href: "/settings", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
      { icon: LogOut, label: "Logout", href: "/logout", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
    ],
  },
];

const Menu = () => {
  // Using the language context for translations
  const { language } = useLanguage(); // Use language context to trigger re-renders when language changes
  const [role, setRole] = useState<string | null>(null);
  const [translations, setTranslations] = useState<Record<string, string>>({});

  // Create a mapping of menu items to their translations
  useEffect(() => {
    const menuTranslations: Record<string, string> = {
      'Home': language === 'ta' ? 'முகப்பு' : 'Home',
      'Store Managers': language === 'ta' ? 'கடை மேலாளர்கள்' : 'Store Managers',
      'Sales Associates': language === 'ta' ? 'விற்பனை சகாக்கள்' : 'Sales Associates',
      'Cashiers': language === 'ta' ? 'காசாளர்கள்' : 'Cashiers',
      'Suppliers': language === 'ta' ? 'விநியோகஸ்தர்கள்' : 'Suppliers',
      'Supplier Details': language === 'ta' ? 'விநியோகஸ்தர் விவரங்கள்' : 'Supplier Details',
      'Orders': language === 'ta' ? 'ஆர்டர்கள்' : 'Orders',
      'Jewellery Stock': language === 'ta' ? 'நகை இருப்பு' : 'Jewellery Stock',
      'Gold Stock': language === 'ta' ? 'தங்க இருப்பு' : 'Gold Stock',
      'Categories': language === 'ta' ? 'வகைகள்' : 'Categories',
      'Sales': language === 'ta' ? 'விற்பனைகள்' : 'Sales',
      'Reports': language === 'ta' ? 'அறிக்கைகள்' : 'Reports',
      'Sales Report': language === 'ta' ? 'விற்பனை அறிக்கை' : 'Sales Report',
      'Events': language === 'ta' ? 'நிகழ்வுகள்' : 'Events',
      'Advance Payment': language === 'ta' ? 'முன்பணம்' : 'Advance Payment',
      'Custom Orders': language === 'ta' ? 'தனிப்பயன் ஆர்டர்கள்' : 'Custom Orders',
      'Notifications': language === 'ta' ? 'அறிவிப்புகள்' : 'Notifications',
      'Profile': language === 'ta' ? 'சுயவிவரம்' : 'Profile',
      'Settings': language === 'ta' ? 'அமைப்புகள்' : 'Settings',
      'Logout': language === 'ta' ? 'வெளியேறு' : 'Logout',
      'MENU': language === 'ta' ? 'பட்டி' : 'MENU',
      'OTHER': language === 'ta' ? 'மற்றவை' : 'OTHER'
    };

    setTranslations(menuTranslations);
  }, [language]);

  useEffect(() => {
    const storedRole = localStorage.getItem("role"); // Get role from localStorage
    console.log("Stored role:", storedRole); // Log the stored role
    if (storedRole) {
      setRole(storedRole);
    } else {
      setRole("Guest");
    }
  }, []);

  if (!role) {
    return <div>Loading...</div>; // Show loading while fetching role
  }

  return (
    <div className="mt-4 text-sm bg-[#FFF6BD] p-4 rounded-md w-64">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-black font-semibold my-4">
            {translations[section.title] || section.title}
          </span>
          {section.items.map((item) => {
            // Check if the user's role is listed in the 'visible' array for this item
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-start gap-4 text-black py-2 px-4 rounded-md hover:bg-[#F0A500] hover:text-white transition duration-200"
                >
                  <item.icon size={20} className="text-black" />
                  <span className="hidden lg:block">
                    {translations[item.label] || item.label}
                  </span>
                </Link>
              );
            }
            return null; // Don't render items that the user shouldn't see
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
