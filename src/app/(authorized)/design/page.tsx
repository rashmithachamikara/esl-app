"use client";

import AddButton from "@/components/AddButton/AddButton";
import DesignCard from "@/components/design-card";
import FilterTab from "@/components/FilterTab/FilterTab";

export default function Page() {
  return (
    <>
      <div className="flex justify-between items-center content-start mr-6">
        <h1>Designs</h1>
      </div>
      <div
        style={{ display: "flex" }}
        className="flex flex-row-reverse gap-4 justify-between items-end mt-6"
      >
        <AddButton label="New Design" onClick={() => {}} />
        <FilterTab
          placeholder="Size"
          filters={["All", "240x320", "340x460", "580x640"]}
        />
      </div>
      <div className="grid grid-cols-1 gap-y-5 gap-x-16 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-2 text-sm">
        <DesignCard
          title="Design-001"
          imageUrl="/image-library/design_label.png"
        />
        <DesignCard
          title="Design-002"
          imageUrl="/image-library/design_label.png"
        />
        <DesignCard
          title="Design-003"
          imageUrl="/image-library/design_label.png"
        />
        <DesignCard
          title="Design-004"
          imageUrl="/image-library/design_label.png"
        />
        <DesignCard
          title="Promotion-001"
          imageUrl="/image-library/design_label.png"
        />
        <DesignCard
          title="Season-001"
          imageUrl="/image-library/design_label.png"
        />
      </div>
    </>
  );
}
