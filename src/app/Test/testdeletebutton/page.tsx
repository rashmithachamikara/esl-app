"use client";

import DeleteButton from "@/components/DeleteButton/DeleteButton";

export default function TestDeleteButton() {
  const handleDelete = () => {
    console.log("Delete button clicked! Perform delete action here.");
    // Add the delete logic here (e.g., API call to delete an item)
  };

  return (
    <div className="p-10">
      
      {/* Render DeleteButton Component */}
      <DeleteButton label="Delete" onClick={handleDelete} />
    </div>
  );
}
