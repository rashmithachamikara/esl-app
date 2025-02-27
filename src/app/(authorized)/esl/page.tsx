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
      <SearchBar placeholder="Search ESL" onSearch={handleSearch} />
      <DataTable<Device> columns={deviceColumns} data={devices} />
    </>
  );
}
