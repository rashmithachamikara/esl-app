
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import SearchButton from "@/components/ui/SearchButton";
import DropdownMenu from "@/components/ui/dropdown-menu";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  columns?: string[];
}

export default function SearchBar({ placeholder = "Search...", onSearch, columns = [] }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColumn, setSelectedColumn] = useState(columns[0] || "Columns");

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex items-center gap-4 w-full">
      {/* Search Input */}
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="px-4 py-2 focus:outline-none rounded-lg border border-gray-300 w-full"
      />
      
      {/* Columns Dropdown */}
      <DropdownMenu options={columns} selected={selectedColumn} onSelect={setSelectedColumn} />
      
      {/* Search Button */}
      <SearchButton onClick={handleSearchClick} />
    </div>
  );
}