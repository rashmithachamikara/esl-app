"use client";

import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";

export default function FilterTab() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = [
    "All",
    "Filter 1",
    "Filter 2",
    "Filter 3",
    "Filter 4",
    "Filter 5",
  ];

  return (
    <div
      className="flex flex-col space-y-2"
      style={{
        width: "551px",
        // height: '66px',
        top: "135px",
        left: "408px",
        borderRadius: "6px",
        fontFamily: "Inter",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "24px",
        letterSpacing: "0%",
      }}
    >
      <label className="text-sm font-medium text-gray-700">Filter</label>
      <Menu as="div" className="relative">
        <Menu.Button className="w-full flex justify-between items-center border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700">
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
          <Menu.Items className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
            {filters.map((filter, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button
                    onClick={() => setSelectedFilter(filter)}
                    className={`w-full px-4 py-2 text-left ${
                      active ? "bg-gray-100" : ""
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
