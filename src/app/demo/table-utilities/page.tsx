"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import AddButton from "@/components/AddButton/AddButton";
import FilterTab from "@/components/FilterTab/FilterTab";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  const handleAddClick = () => {
    console.log("Add button clicked");
  };

  return (
    <div className="p-4">
      <SearchBar
        placeholder="Search Branches"
        onSearch={handleSearch}
        columns={["Name", "Location", "Columns"]}
      />
      <br />
      <AddButton label="Add" onClick={handleAddClick} className="mt-4" />

      <br />
      <br />
      <FilterTab
        placeholder="Branch"
        filters={["All", "SL", "Australia", "NewYork"]}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}
