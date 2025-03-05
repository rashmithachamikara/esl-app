"use client";

import { useState } from "react";

import DesignCard from "@/components/Cards/design-card";
import { FilterTab } from "@/components/FilterTab/FilterTab";
import { Modal } from "@/components/Modal/Modal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SelectProp } from "@/components/select/select";

export default function Page() {
  const [name, setName] = useState("");

  const handleSave = () => {
    console.log("Save changes clicked");
    // Add your save logic here
  };
  return (
    <>
      <div className="flex justify-between items-center content-start mr-6">
        <h1>Designs</h1>
      </div>
      <div
        style={{ display: "flex" }}
        className="flex flex-row-reverse gap-4 justify-between items-end mt-6"
      >
        <Modal
          buttonLabel="Add Design"
          dialogTitle="New Design"
          dialogDescription="Fill in the details for the new Design."
          onSave={handleSave}
          saveButtonLabel="Add Design"
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="name" className="text-left">
                Design Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="border border-gray-300 rounded-md p-2" // Add box styling
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="branch" className="text-left">
                Size
              </Label>
              <SelectProp
                label="Size"
                items={[
                  { value: "240x320", name: "240x320" },
                  { value: "340x460", name: "340x460" },
                  { value: "580x640", name: "580x640" },
                ]}
                placeholder="Select a size"
                onChange={(value) => console.log("Selected:", value)}
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="branch" className="text-left">
                Color Scheme
              </Label>

              <SelectProp
                label="Color Scheme"
                items={[
                  { value: "bw", name: "Black,White" },
                  { value: "col", name: "Coloured" },
                ]}
                placeholder="Select a color"
                onChange={(value) => console.log("Selected:", value)}
              />
            </div>
          </div>
        </Modal>

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
