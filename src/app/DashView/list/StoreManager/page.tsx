"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TableSearch from "@/components/TableSearch";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import DeleteConfirmationModal from "@/components/DeleteConfirmationModal";

type StoreManager = {
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
  // { header: "Name", accessor: "first_name", className: "hidden md:table-cell" },
  { header: "Branch", accessor: "branch_id", className: "hidden md:table-cell" },
  { header: "NIC", accessor: "nic", className: "hidden lg:table-cell" },
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { header: "Actions", accessor: "action" },
];

const StoreManagerListPage = () => {
  const [storeManagers, setStoreManagers] = useState<StoreManager[]>([]);
  const [userRole, setUserRole] = useState<string>("");

  // Add delete handler
  const handleDelete = async (id: number) => {
    try {
      // Check if id is valid
      if (!id) {
        console.error('Invalid ID: ID is undefined or null');
        throw new Error('Invalid ID: Cannot delete without a valid ID');
      }

      console.log(`Attempting to delete Store Manager with ID: ${id}`);

      // Make the delete request
      const response = await fetch(`http://localhost:3002/store-managers/delete/${id}`, {
        method: 'DELETE',
      });

      // Log the response status
      console.log(`Delete response status: ${response.status}`);

      // Try to parse the response as JSON
      let responseData;
      try {
        responseData = await response.json();
        console.log('Response data:', responseData);
      } catch (jsonError) {
        console.error('Error parsing response JSON:', jsonError);
      }

      if (!response.ok) {
        // Extract detailed error information
        const errorMessage = responseData?.message || 'Failed to delete store manager';
        const detailedError = responseData?.error || '';

        console.error('Detailed error:', {
          message: errorMessage,
          error: detailedError
        });

        throw new Error(errorMessage);
      }

      // Remove the deleted item from the state
      setStoreManagers(prevManagers =>
        prevManagers.filter(manager => manager.id !== id)
      );

      // Show success message
      alert(responseData?.message || "Store Manager deleted successfully");

    } catch (error) {
      console.error("Error deleting Store Manager:", error);
      let errorMessage = "Unknown error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      alert(`Failed to delete Store Manager: ${errorMessage}`);
      throw error; // Re-throw the error so the modal can handle it
    }
  };

  useEffect(() => {
    // Get role from localStorage
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setUserRole(storedRole);
    }

    const fetchStoreManagers = async () => {
      try {
        const response = await fetch("http://localhost:3002/store-managers");
        const data = await response.json();

        console.log("Fetched data:", data);  // Log the data to verify its format
        if (Array.isArray(data)) {
          // Log the first item to see its structure
          if (data.length > 0) {
            console.log('Sample store manager data:', data[0]);
          }

          // Map the data to ensure it has the correct property names
          const mappedData = data.map(item => ({
            id: item.user_id || item.id, // Try both possible ID field names
            first_name: item.first_name,
            last_name: item.last_name,
            email: item.email,
            username: item.username,
            branch_id: item.branch_id,
            nic: item.nic,
            phone: item.phone,
            address: item.address
          }));

          setStoreManagers(mappedData);
        } else {
          console.error("Expected an array but got:", data);
        }
      } catch (error) {
        console.error("Error fetching Store Managers:", error);
      }
    };

    fetchStoreManagers();
  }, []);


  const renderRow = (item: StoreManager) => (
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
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/StoreManager/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#FFF6BD]">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {userRole.toLowerCase() === "admin" && (
            <DeleteConfirmationModal
              itemName={`${item.first_name} ${item.last_name}`}
              onDelete={() => handleDelete(item.id)}
            />
          )}
        </div>
      </td>
    </tr>
  );



  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Store Managers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-#FFF6BD">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {userRole.toLowerCase() === "admin" && (
              <FormModal table="store-manager" type="create"/>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={storeManagers} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default StoreManagerListPage;
