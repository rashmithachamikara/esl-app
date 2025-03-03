"use client";

import { useState } from "react";
import DesignCard from "@/components/design-card";
import { FilterTab } from "@/components/FilterTab/FilterTab";
import AddButton from "@/components/AddButton/AddButton";
import { Modal } from "@/components/Modal/Modal";

export default function Page() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [branch, setBranch] = useState("");

  const handleSave = () => {
    console.log("Save changes clicked");
    // Add your save logic here
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
        <Modal
          buttonLabel="Add Layout"
          dialogTitle="Add Layout"
          dialogDescription="Fill in the details for the new layout."
          onSave={handleSave}
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="col-span-3 border border-gray-300 rounded-md p-2" // Add box styling
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="branch" className="text-right">
                Branch
              </label>
              <select
                id="branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="col-span-3 border border-gray-300 rounded-md p-2" // Add box styling
              >
                <option value="" disabled>
                  Select a Branch
                </option>
                <option value="sl">SL</option>
                <option value="australia">Australia</option>
                <option value="america">America</option>
              </select>
            </div>
          </div>
        </Modal>

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
