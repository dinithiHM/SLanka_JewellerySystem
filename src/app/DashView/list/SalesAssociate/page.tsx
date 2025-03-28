"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TableSearch from "@/components/TableSearch";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
// import { role } from "@/lib/data";

type SalesAssociate = {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  nic: string;
  phone: string;
  address: string;
  branch_id: number;
};

const columns = [
  { header: "Info", accessor: "info" },
  { header: "User Name", accessor: "username", className: "hidden md:table-cell" },
  { header: "Branch", accessor: "branch_id", className: "hidden md:table-cell" },
  { header: "NIC", accessor: "nic", className: "hidden lg:table-cell" },
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { header: "Actions", accessor: "action" },
];

const SalesAssociateListPage = () => {
  const [salesAssociates, setSalesAssociates] = useState<SalesAssociate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string>("");

  useEffect(() => {
    // Get role from localStorage
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setUserRole(storedRole);
    }

    const fetchSalesAssociates = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3002/sales-associates");
        if (!response.ok) {
          throw new Error('Failed to fetch sales associates');
        }
        const data = await response.json();
        
        if (Array.isArray(data)) {
          setSalesAssociates(data);
        } else {
          throw new Error('Invalid data format received');
        }
      } catch (error) {
        console.error("Error fetching Sales Associates:", error);
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchSalesAssociates();
  }, []);

  const renderActions = (item: SalesAssociate) => (
    <div className="flex items-center gap-2">
      {/* View button - visible to all users */}
      <Link href={`/list/sales-associates/${item.id}`}>
        <button 
          className="w-7 h-7 flex items-center justify-center rounded-full bg-[#FFF6BD]"
          title="View details"
        >
          <Image src="/view.png" alt="View" width={16} height={16} />
        </button>
      </Link>
      
      {/* Delete button - only visible to admin */}
      {userRole.toLowerCase() === "admin" && (
        <FormModal 
          table="sales-associate" 
          type="delete" 
          id={item.id}
        />
      )}
    </div>
  );

  const renderRow = (item: SalesAssociate) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-[#FFF6BD] text-sm hover:bg-[#FDE68A]">
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.first_name} {item.last_name}</h3>
          <p className="text-xs text-gray-500">{item.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.username}</td>
      <td className="hidden md:table-cell">{item.branch_id}</td>
      <td className="hidden lg:table-cell">{item.nic}</td>
      <td className="hidden lg:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.address}</td>
      <td>{renderActions(item)}</td>
    </tr>
  );

  if (isLoading) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Sales Associates</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFF6BD]">
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="Sort" width={14} height={14} />
            </button>
            {/* Create button - only visible to admin */}
            {userRole.toLowerCase() === "admin" && (
              <FormModal table="sales-associate" type="create"/>
            )}
          </div> 
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={salesAssociates} />
      <Pagination />
    </div>
  );
};

export default SalesAssociateListPage;
