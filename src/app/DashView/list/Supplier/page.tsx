"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TableSearch from "@/components/TableSearch";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { role } from "@/lib/data";

type Supplier = {
  id: number;
  name: string;
  supplier_id: string;
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

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        setLoading(true);  // Start loading
        const response = await fetch("http://localhost:3002/suppliers");
        if (!response.ok) {
          throw new Error("Failed to fetch suppliers");
        }
        const data = await response.json();

        if (Array.isArray(data)) {
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

  const renderRow = (item: Supplier) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-[#FFF6BD] text-sm hover:bg-[#FDE68A]">
      <td className="p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.supplier_id}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td className="hidden lg:table-cell">{item.contact_no}</td>
      <td className="hidden md:table-cell">{item.manufacturing_items}</td>
      <td className="hidden md:table-cell">{item.category}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/suppliers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#FFF6BD]">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <FormModal table="supplier" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );

  if (loading) {
    return <div>Loading...</div>;  // Display loading text while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>;  // Display error message if fetch fails
  }

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
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
            {role === "admin" && (
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
