"use client";

import AddButton from "@/components/AddButton/AddButton";

export default function AddButtonTestPage() {
  return (
    <div className="p-10">
    
      {/* This button redirects to "/layouts/new" when clicked */}
      <AddButton label="Add Branch" href="../Test/testsearchbar" />
    </div>
  );
}
