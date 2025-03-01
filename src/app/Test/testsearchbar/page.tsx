"use client";

import SearchBar from "@/components/SearchBar/SearchBar";

export default function TestSearch() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className="p-6">
      <SearchBar
        placeholder="Search Branch"
        onSearch={handleSearch}
        columns={["Columns", "Column1", "Column2", "Column3", "Column4"]}
      />
    </div>
  );
}
