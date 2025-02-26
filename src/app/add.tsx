"use client";
import AddButton from "../components/AddButton/AddButton";

export default function AddPage() {
  const handleAddClick = () => {
    console.log("Add button clicked");
  };

  return (
    <div className="p-4">
      <h1>Add Page</h1>
      <AddButton label="Add" onClick={handleAddClick} className="mt-4" />
    </div>
  );
}