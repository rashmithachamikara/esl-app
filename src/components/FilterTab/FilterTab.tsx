"use client";

import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";

interface FilterTabProps {
  placeholder?: string; 
  filters?: string[]; 
}

export default function FilterTab({ placeholder = "Filter", filters = ["All"] }: FilterTabProps) {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-gray-700 font-inter font-normal text-sm leading-6">{placeholder}</label>

      {/* Dropdown Menu */}
      <Menu as="div" className="relative w-[551px]">
        <Menu.Button className="w-full flex justify-between items-center border border-gray-300 rounded-md px-4 py-2 bg-white text-gray-700 text-sm leading-6">
          {selectedFilter}
          <ChevronDownIcon className="w-4 h-4" />
        </Menu.Button>

        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            {filters.map((filter, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button
                    onClick={() => setSelectedFilter(filter)}
                    className={`w-full px-4 py-2 text-left border-b border-gray-200 text-sm leading-6 ${
                      active ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    {filter}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}


