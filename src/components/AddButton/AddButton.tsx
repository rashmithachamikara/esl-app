"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Importing shadcn/ui button

interface AddButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function AddButton({ label, href, onClick, className }: AddButtonProps) {
  return (
    <div className={className}>
      {href ? (
        <Link href={href} passHref>
          <ButtonContent label={label} />
        </Link>
      ) : (
        <Button onClick={onClick} className="bg-[#D93639] hover:bg-red-700 text-white px-4 py-2 flex items-center gap-2 rounded-md w-[141px] h-[40px]">
          <PlusIcon />
          {label}
        </Button>
      )}
    </div>
  );
}

// Extracted button content for stable SSR
function ButtonContent({ label }: { label: string }) {
  return (
    <Button className="bg-[#D93639] hover:bg-red-700 text-white px-4 py-2 flex items-center gap-2 rounded-md w-[141px] h-[40px]">
      <PlusIcon />
      {label}
    </Button>
  );
}

// Plus Icon Component
function PlusIcon() {
  return (
    <div className="w-[24px] h-[24px] flex items-center justify-center border-2 border-white rounded-md bg-[#D93639]">
      <div className="relative w-[12px] h-[12px]">
        {/* Horizontal Bar */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2" />
        {/* Vertical Bar */}
        <div className="absolute top-0 left-1/2 h-full w-[2px] bg-white -translate-x-1/2" />
      </div>
    </div>
  );
}

