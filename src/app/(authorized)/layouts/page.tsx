"use client";

import DesignCard from "@/components/design-card";
import FilterTab from "@/components/FilterTab/FilterTab";
import AddButton from "@/components/AddButton/AddButton";

export default function Page() {
  const handleAddClick = () => {
    console.log("Add button clicked");
  };

  return (
    <>
      <div className="flex justify-between items-center content-start ml-16 mr-6">
        <h1 className="text-2xl font-bold">Layouts</h1>
      </div>
      <div className="flex justify-between items-center ml-16 mr-6 ">
        <FilterTab />
        <AddButton label="Add Layout" onClick={handleAddClick} />
      </div>
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-4 mt-5 mr-6 text-sm"> {/* Adjust gap to 64px */}
        <DesignCard title="Floor 1" imageUrl="/image-library/Picture1.png" />
        <DesignCard title="Floor 2" imageUrl="/image-library/Picture1.png" />
        <DesignCard title="Floor 3" imageUrl="/image-library/Picture1.png" />
        <DesignCard title="Floor 4" imageUrl="/image-library/Picture1.png" />
        <DesignCard title="Front 1" imageUrl="/image-library/Picture1.png" />
        <DesignCard title="Lobby" imageUrl="/image-library/Picture1.png" />
        <DesignCard title="Promotion Section" imageUrl="/image-library/Picture1.png" />
      </div>
    </>
  );
}
