"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import SearchButton from "../ui/SearchButton";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";

interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

export default function SearchBar({ placeholder, onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("Columns");

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex items-center space-x-4 bg-white">
      {/* Search Input */}
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-4 py-2 focus:outline-none rounded-lg border"
      />

      {/* Columns Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="text-gray-900 border border-gray-300 px-4 py-2 flex items-center gap-2 rounded-lg h-10">
            {selectedColumn}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setSelectedColumn("Column 1")}>Column 1</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedColumn("Column 2")}>Column 2</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedColumn("Column 3")}>Column 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Search Button */}
      <SearchButton onClick={handleSearchClick} />
    </div>
  );
}
