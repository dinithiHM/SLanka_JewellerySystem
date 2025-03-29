"use client";

import Image from "next/image";
import { useState } from "react";

interface DeleteConfirmationModalProps {
  itemName: string;
  onDelete: () => Promise<void>;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ 
  itemName, 
  onDelete 
}) => {
  const [open, setOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteConfirm = async () => {
    if (onDelete) {
      try {
        setIsDeleting(true);
        await onDelete();
        setOpen(false);
      } catch (error) {
        console.error("Error deleting:", error);
        alert("Failed to delete. Please try again.");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <>
      <button
        className="w-7 h-7 flex items-center justify-center rounded-full bg-[#FFF6BD]"
        onClick={() => setOpen(true)}
      >
        <Image src="/delete.png" alt="Delete" width={16} height={16} />
      </button>
      
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md relative w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            
            <p className="mb-6">
              Are you sure you want to delete this person?
              {itemName && <span className="font-semibold block mt-2">{itemName}</span>}
            </p>
            
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-red-600 text-white rounded-md"
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
            
            <button
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="Close" width={14} height={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteConfirmationModal;