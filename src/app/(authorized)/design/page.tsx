"use client";

import AddButton from "@/components/AddButton/AddButton";
import DesignCard from "@/components/design-card";
import { FilterTab } from "@/components/FilterTab/FilterTab";

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
          label="Size"
          items={[
            { value: "all", name: "All" },
            { value: "240x320", name: "240x320" },
            { value: "340x460", name: "340x460" },
            { value: "580x640", name: "580x640" },
          ]}
          placeholder="Select a size"
          onChange={(value) => console.log("Selected:", value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-y-5 gap-x-16 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-2 text-sm">
        <DesignCard
          title="Design-001"
          imageUrl="/image-library/design_label.png"
          description="Generic design used for everyday purposes"
          specs="4.2” (400×300, Black White Red Yellow, 0°)"
        />
        <DesignCard
          title="Design-002"
          imageUrl="/image-library/design_label.png"
          description="Generic design used for everyday purposes"
          specs="4.2” (400×300, Black White Red Yellow, 0°)"
        />
        <DesignCard
          title="Design-003"
          imageUrl="/image-library/design_label.png"
          description="Generic design used for everyday purposes"
          specs="4.2” (400×300, Black White Red Yellow, 0°)"
        />
        <DesignCard
          title="Design-004"
          imageUrl="/image-library/design_label.png"
          description="Generic design used for everyday purposes"
          specs="4.2” (400×300, Black White Red Yellow, 0°)"
        />
        <DesignCard
          title="Promotion-001"
          imageUrl="/image-library/design_label.png"
          description="Generic design used for everyday purposes"
          specs="4.2” (400×300, Black White Red Yellow, 0°)"
        />
        <DesignCard
          title="Season-001"
          imageUrl="/image-library/design_label.png"
          description="Generic design used for everyday purposes"
          specs="4.2” (400×300, Black White Red Yellow, 0°)"
        />
      </div>
    </>
  );
}
