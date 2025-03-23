'use client'; // This marks it as a client-side component

import React, { useState, useEffect } from "react"; // Importing useState and useEffect hooks from React
import { useSession } from "next-auth/react"; // Importing the session hook
import Link from "next/link";
import { 
  Home, Users, Tag, ClipboardList, Coins, ShoppingCart, BarChart, CalendarCheck, CreditCard, 
  Bell, UserCircle, Settings, LogOut, Boxes 
} from "lucide-react"; // Importing correct icons

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: Home, label: "Home", href: "/", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
      { icon: Users, label: "Store Managers", href: "/DashView/list/StoreManager", visible: ["Admin"] }, // Only Admin
      { icon: Users, label: "Sales Associates", href: "/DashView/list/SalesAssociate", visible: ["Admin", "Store Manager"] },
      { icon: Users, label: "Cashiers", href: "/list/parents", visible: ["Admin"] },
      { icon: ClipboardList, label: "Suppliers", href: "/DashView/list/Supplier", visible: ["Admin"] }, // Only Admin
      { icon: ClipboardList, label: "Orders", href: "/list/classes", visible: ["Admin", "Store Manager"] },
      { icon: Boxes, label: "Jewellery Stock", href: "/list/lessons", visible: ["Admin", "Store Manager"] },
      { icon: Coins, label: "Gold Stock", href: "/list/exams", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
      { icon: Tag, label: "Categories", href: "/list/assignments", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
      { icon: ShoppingCart, label: "Sales", href: "/list/results", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
      { icon: BarChart, label: "Reports", href: "/list/attendance", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
      { icon: CalendarCheck, label: "Events", href: "/list/events", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
      { icon: CreditCard, label: "Advance Payment", href: "/list/messages", visible: ["Admin", "Store Manager", "Sales Associate", "Cashier"] },
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
  const [role, setRole] = useState<string | null>(null);

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
            {section.title}
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
                  <span className="hidden lg:block">{item.label}</span>
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
