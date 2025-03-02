"use client";

import { DataTable } from "@/components/DataTable/DataTable";
import { devices, Device } from "./sample-data";
import { deviceColumns } from "@/components/DataTable/DataTableColumns/esl";
import AddButton from "@/components/AddButton/AddButton";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function EslPage() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  const handleAddClick = () => {
    console.log("Add button clicked");
  };

  return (
    <>
      <h1>ESL</h1>
      <div className="flex flex-row-reverse">
        <AddButton
          label="Add ESL"
          onClick={handleAddClick}
          className="mt-4 items-end"
        />
      </div>
      <div className="z-50">
        <SearchBar
          placeholder="Search ESLs"
          onSearch={handleSearch}
          columns={["Serial", "Mac", "Branch", "AP"]}
        />
      </div>
      <DataTable<Device> columns={deviceColumns} data={devices} />
    </>
  );
}
