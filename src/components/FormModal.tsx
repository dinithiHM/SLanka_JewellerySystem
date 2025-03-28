"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, JSX } from "react";

// Dynamic imports for forms
const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const SalesAssociateForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const SupplierForm = dynamic(() => import("./forms/SupplierForm"), {
  loading: () => <h1>Loading...</h1>,
});
// Add dynamic imports for other forms as needed
const StoreManagerForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
// const ParentForm = dynamic(() => import("./forms/SupplierForm"), {
//   loading: () => <h1>Loading...</h1>,
// });

// const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
//   loading: () => <h1>Loading...</h1>,
// });
// ... Add more dynamic imports for other table types

// Forms mapping object
const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  supplier: (type, data) => <SupplierForm type={type} data={data} />, // ✅ Corrected
  "sales-associate": (type, data) => <SalesAssociateForm type={type} data={data} />, // ✅ Corrected
  "store-manager": (type, data) => <StoreManagerForm type={type} data={data} />,
};


const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "store-manager"
    | "sales-associate"
    | "parent"
    | "supplier"
    | "class"
    | "student"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
  onClose?: () => void;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-yellow"
      : "bg-#FFF6BD";

  const [open, setOpen] = useState(false);

  // Determine the form to render based on the table value
  const Form = () => {
     if (type === "delete" && id) {
      return (
        <form action="" className="p-4 flex flex-col gap-4">
          <span className="text-center font-medium">
            All data will be lost. Are you sure you want to delete this {table}?
          </span>
          <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
            Delete
          </button>
        </form>
      );
    }

    // Check if the form exists for the given table
    const FormComponent = forms[table];
    if (!FormComponent) {
      return <div>Form for {table} not found!</div>;
    }

    return type === "delete" ? null : FormComponent(type, data);
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
