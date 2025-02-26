import React from "react";
import { Menu } from "@headlessui/react";

export const DropdownMenu = ({ children }: { children: React.ReactNode }) => (
  <Menu as="div" className="relative inline-block text-left">
    {children}
  </Menu>
);

export const DropdownMenuTrigger = ({ children }: { children: React.ReactNode }) => (
  <Menu.Button className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 h-10">
    {children}
  </Menu.Button>
);

export const DropdownMenuContent = ({ children }: { children: React.ReactNode }) => (
  <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
    {children}
  </Menu.Items>
);

export const DropdownMenuItem = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <Menu.Item>
    {({ active }) => (
      <button
        onClick={onClick}
        className={`w-full px-4 py-2 text-sm text-gray-700 text-left ${
          active ? "bg-gray-100" : ""
        }`}
      >
        {children}
      </button>
    )}
  </Menu.Item>
);

