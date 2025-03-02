"use client";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

interface EditButtonProps {
  label?: string;
  onClick: () => void;
  className?: string;
}

export default function EditButton({
  label = "Edit",
  onClick,
  className,
}: EditButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`w-full bg-[#0F172A] text-white leading-[24px] 
    rounded-md px-4 py-2 flex items-center gap-2 justify-center ${className}`}
    >
      <Pencil className="text-white" />
      <span className="text-white">{label}</span>
    </Button>
  );
}
