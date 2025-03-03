"use client";

import DesignCard from "@/components/Cards/design-card";
import { FilterTab } from "@/components/FilterTab/FilterTab";
import AddButton from "@/components/AddButton/AddButton";

export default function Page() {
  const handleAddClick = () => {
    console.log("Add button clicked");
  };

  return (
    <>
      <div className="flex justify-between items-center content-start">
        <h1>Layouts</h1>
      </div>
      <div
        style={{ display: "flex" }}
        className="flex flex-row-reverse gap-4 justify-between items-end mt-6"
      >
        <AddButton label="Add Layout" onClick={handleAddClick} />

        <FilterTab
          label="Branch"
          items={[
            { value: "all", name: "All" },
            { value: "sl", name: "SL" },
            { value: "australia", name: "Australia" },
            { value: "america", name: "America" },
          ]}
          placeholder="Select a Branch"
          onChange={(value) => console.log("Selected:", value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-y-5 gap-x-16 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-2 text-sm">
        {" "}
        {/* Adjust gap to 64px */}
        <DesignCard title="Floor 1" imageUrl="/image-library/Picture1.png" />
        <DesignCard title="Floor 2" imageUrl="/image-library/Picture1.png" />
        <DesignCard title="Floor 3" imageUrl="/image-library/Picture1.png" />
        <DesignCard title="Floor 4" imageUrl="/image-library/Picture1.png" />
        <DesignCard title="Front 1" imageUrl="/image-library/Picture1.png" />
        <DesignCard title="Lobby" imageUrl="/image-library/Picture1.png" />
        <DesignCard
          title="Promotion Section"
          imageUrl="/image-library/Picture1.png"
        />
      </div>
    </>
  );
}
