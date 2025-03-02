"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Copy, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Device Type Interface
interface Device {
  serial: string;
  mac: string;
  branch: string;
  accessPointMac: string;
  battery: number; // Battery percentage (0-100)
}

// Function to copy text to clipboard
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

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
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span>{row.original.mac}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => copyToClipboard(row.original.mac)}
        >
          <Copy className="w-4 h-4" />
        </Button>
      </div>
    ),
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
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Progress value={row.original.battery} className="w-24 h-2" />
        <span>{row.original.battery}%</span>
      </div>
    ),
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
            <DropdownMenuItem
              onClick={() => alert(`Viewing details of ${device.serial}`)}
            >
              Details
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert(`Pinging ${device.mac}`)}>
              Ping
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => alert(`Refreshing info for ${device.serial}`)}
            >
              Refresh Information
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => alert(`Editing ${device.serial}`)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => alert(`Deleting ${device.serial}`)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
