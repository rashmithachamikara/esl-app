"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

// Define Branch type
export interface Branch {
  id: number;
  branchName: string;
  location: string;
  address: string;
  contactNumber: string;
  email: string;
}

// Table columns definition
export const branchColumns: ColumnDef<Branch>[] = [
  {
    accessorKey: "branchName",
    header: "Branch Name",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "contactNumber",
    header: "Contact",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const branch = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => alert(`Editing ${branch.branchName}`)}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert(`Deleting ${branch.branchName}`)}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
