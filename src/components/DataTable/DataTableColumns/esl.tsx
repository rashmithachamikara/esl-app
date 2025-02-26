"use client"

import { ColumnDef } from "@tanstack/react-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

// Define Device type
interface Device {
  serial: string;
  mac: string;
  branch: string;
  accessPointMac: string;
  battery: number; // Percentage (0-100)
}


// Table columns definition
export const deviceColumns: ColumnDef<Device>[] = [
  {
    accessorKey: "serial",
    header: "Serial",
    enableHiding: false,
  },
  {
    accessorKey: "mac",
    header: "MAC Address",
  },
  {
    accessorKey: "branch",
    header: "Branch",
  },
  {
    accessorKey: "accessPointMac",
    header: "Access Point MAC",
  },
  {
    accessorKey: "battery",
    header: "Battery (%)",
    cell: ({ row }) => `${row.original.battery}%`,
  },
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const device = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => alert(`Viewing details of ${device.serial}`)}>Details</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert(`Pinging ${device.mac}`)}>Ping</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert(`Refreshing info for ${device.serial}`)}>Refresh Information</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => alert(`Editing ${device.serial}`)}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert(`Deleting ${device.serial}`)}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
