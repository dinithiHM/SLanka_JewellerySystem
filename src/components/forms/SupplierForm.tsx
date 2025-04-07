"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";

// Zod schema for form validation
const schema = z.object({
  name: z.string().min(1, { message: "Supplier name is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  contact_no: z.string().min(1, { message: "Contact number is required!" }),
  manufacturing_items: z.string().min(1, { message: "Manufacturing items are required!" }),
  category: z.string().min(1, { message: "Category is required!" }),
});

type Inputs = z.infer<typeof schema>;

const SupplierForm = ({ type, data }: { type: "create" | "update"; data?: any }) => {
  const [name, setName] = useState(data?.name || "");
  const [address, setAddress] = useState(data?.address || "");
  const [contactNo, setContactNo] = useState(data?.contact_no || "");
  const [manufacturingItems, setManufacturingItems] = useState(data?.manufacturing_items || "");
  const [category, setCategory] = useState(data?.category || "");
  const [categories, setCategories] = useState<{category_id: number, category_name: string}[]>([]);
  const [loading, setLoading] = useState(true);

  const { handleSubmit, register, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

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
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const onSubmit = handleSubmit(async () => {
    try {
      const supplierData = {
        name,
        address,
        contact_no: contactNo,
        manufacturing_items: manufacturingItems,
        category,
      };

      const response = await fetch("http://localhost:3002/suppliers/create", {
        method: type === "create" ? "POST" : "PUT", // POST for create, PUT for update
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(supplierData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(type === "create" ? "New Supplier Added successfully!" : "Supplier Updated successfully!");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to process supplier data!");
    }
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">{type === "create" ? "Create a New Supplier" : "Update Supplier Details"}</h1>

      <div className="flex justify-between flex-wrap gap-4">
        <div className="flex flex-col w-full md:w-1/4">
          <label className="text-xs text-gray-500">Supplier Name</label>
          <input
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col w-full md:w-1/4">
          <label className="text-xs text-gray-500">Address</label>
          <input
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("address")}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <p className="text-xs text-red-400">{errors.address.message}</p>}
        </div>

        <div className="flex flex-col w-full md:w-1/4">
          <label className="text-xs text-gray-500">Contact Number</label>
          <input
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("contact_no")}
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
          {errors.contact_no && <p className="text-xs text-red-400">{errors.contact_no.message}</p>}
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-4">
        <div className="flex flex-col w-full md:w-1/4">
          <label className="text-xs text-gray-500">Manufacturing Items</label>
          <input
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("manufacturing_items")}
            value={manufacturingItems}
            onChange={(e) => setManufacturingItems(e.target.value)}
          />
          {errors.manufacturing_items && <p className="text-xs text-red-400">{errors.manufacturing_items.message}</p>}
        </div>

        <div className="flex flex-col w-full md:w-1/4">
          <label className="text-xs text-gray-500">Category</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("category")}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.category_id} value={cat.category_name}>
                {cat.category_name}
              </option>
            ))}
          </select>
          {errors.category && <p className="text-xs text-red-400">{errors.category.message}</p>}
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          {type === "create" ? "Create" : "Update"} Supplier
        </button>
      </div>
    </form>
  );
};

export default SupplierForm;
