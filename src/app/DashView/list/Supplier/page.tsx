"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TableSearch from "@/components/TableSearch";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import DeleteButton from "@/components/DeleteButton";

type Supplier = {
  id: number;
  supplier_id?: string; // Optional field
  name: string;
  address: string;
  contact_no: string;
  manufacturing_items: string;
  category: string;
};

const columns = [
  { header: "Name", accessor: "name" },
  { header: "Supplier ID", accessor: "supplier_id", className: "hidden md:table-cell" },
  { header: "Address", accessor: "address", className: "hidden md:table-cell" },
  { header: "Contact No", accessor: "contact_no", className: "hidden lg:table-cell" },
  { header: "Manufacturing Items", accessor: "manufacturing_items", className: "hidden md:table-cell" },
  { header: "Category", accessor: "category", className: "hidden md:table-cell" },
  { header: "Actions", accessor: "action" },
];

const SupplierListPage = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState<boolean>(true);  // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [userRole, setUserRole] = useState<string>("");

  // No need for a separate handleDelete function as we're using the DeleteButton component directly

  useEffect(() => {
    // Get role from localStorage
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setUserRole(storedRole);
    }

    // Check database structure to debug
    const checkDatabaseStructure = async () => {
      try {
        const response = await fetch("http://localhost:3002/suppliers/check-table-structure");
        if (response.ok) {
          const data = await response.json();
          console.log("Database structure for suppliers table:", data);
        }
      } catch (error) {
        console.error("Error checking database structure:", error);
      }
    };

    // Test database connection
    const testDatabaseConnection = async () => {
      try {
        const response = await fetch("http://localhost:3002/suppliers/test-connection");
        if (response.ok) {
          const data = await response.json();
          console.log("Database connection test:", data);
        }
      } catch (error) {
        console.error("Error testing database connection:", error);
      }
    };

    // Count suppliers
    const countSuppliers = async () => {
      try {
        const response = await fetch("http://localhost:3002/suppliers/count");
        if (response.ok) {
          const data = await response.json();
          console.log("Supplier count:", data);
        }
      } catch (error) {
        console.error("Error counting suppliers:", error);
      }
    };

    checkDatabaseStructure();
    testDatabaseConnection();
    countSuppliers();

    const fetchSuppliers = async () => {
      try {
        setLoading(true);  // Start loading
        console.log('Fetching suppliers from API...');
        const response = await fetch("http://localhost:3002/suppliers");
        console.log('API response status:', response.status);

        if (!response.ok) {
          throw new Error(`Failed to fetch suppliers: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('API response data type:', typeof data);
        console.log('API response data:', data);

        if (Array.isArray(data)) {
          console.log('Data is an array with length:', data.length);

          // Log the first item to see its structure
          if (data.length > 0) {
            console.log('Sample supplier data:', data[0]);
          } else {
            console.log('No suppliers found in the response');
          }

          // Directly set the data without complex mapping
          console.log('Setting suppliers with raw data:', data);
          setSuppliers(data);
        } else {
          console.error("Expected an array but got:", data);
          setError("Unexpected data format");
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "Failed to fetch suppliers");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchSuppliers();
  }, []);

  const renderRow = (item: any) => {
    console.log("Rendering supplier item:", item); // Debug the item structure
    return (
      <tr key={item.id} className="border-b border-gray-200 even:bg-[#FFF6BD] text-sm hover:bg-[#FDE68A]">
        <td className="p-4">{item.name || 'N/A'}</td>
        <td className="hidden md:table-cell">{item.supplier_id || 'N/A'}</td>
        <td className="hidden md:table-cell">{item.address || 'N/A'}</td>
        <td className="hidden lg:table-cell">{item.contact_no || 'N/A'}</td>
        <td className="hidden md:table-cell">{item.manufacturing_items || 'N/A'}</td>
        <td className="hidden md:table-cell">{item.category || 'N/A'}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/suppliers/${item.supplier_id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#FFF6BD]">
                <Image src="/view.png" alt="" width={16} height={16} />
              </button>
            </Link>
            {userRole.toLowerCase() === "admin" && (
              <DeleteButton
                id={item.supplier_id} // Use supplier_id as the primary key
                name={item.name || 'this supplier'}
                endpoint="http://localhost:3002/suppliers/delete"
                onSuccess={() => {
                  // Remove the deleted item from the state
                  setSuppliers(prevSuppliers => {
                    return prevSuppliers.filter(supplier =>
                      supplier.supplier_id !== item.supplier_id
                    );
                  });
                  // Show success message
                  alert(`Supplier ${item.name || ''} deleted successfully`);
                }}
              />
            )}
          </div>
        </td>
      </tr>
    );
  };

  if (loading) {
    return <div>Loading...</div>;  // Display loading text while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>;  // Display error message if fetch fails
  }

  // Debug component removed as requested

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Debug component removed as requested */}

      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Suppliers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFF6BD]">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {userRole.toLowerCase() === "admin" && (
              <FormModal table="supplier" type="create" />
            )}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={suppliers} />
      <Pagination />
    </div>
  );
};

export default SupplierListPage;
