"use client";

import { useState } from "react";
import { DropdownMenu as ShadDropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

interface DropdownMenuProps {
  options?: string[];
  selected: string;
  onSelect: (option: string) => void;
}

export default function DropdownMenu({ options = [], selected, onSelect }: DropdownMenuProps) {
  return (
    <ShadDropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-gray-900 border border-gray-300 px-4 py-2 flex items-center gap-2 rounded-lg h-10 w-[119px]">
          {selected}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.length > 0 ? (
          options.map((option) => (
            <DropdownMenuItem key={option} onClick={() => onSelect(option)}>
              {option}
            </DropdownMenuItem>
          ))
        ) : (
          <DropdownMenuItem disabled>No options available</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </ShadDropdownMenu>
  );
}