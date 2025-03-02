"use client";

import { Button } from "@/components/ui/button";

interface ActionButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export default function ActionButton({ label, onClick, className }: ActionButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`bg-[#D93639] hover:bg-[#D93639] text-white text-lg font-medium rounded-md px-6 py-3 ${className}`}
    >
      {label}
    </Button>
  );
}
