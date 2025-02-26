import React from "react";

interface AddButtonProps {
  label: string;
  onClick: () => void;
  className?: string; // Optional className for additional styling
}

export default function AddButton({ label, onClick, className }: AddButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center bg-[#D93639] text-white text-sm font-medium rounded-md px-4 py-2 gap-2 w-[143px] h-[40px] ${className}`}
      style={{
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '24px',
        letterSpacing: '0%',
      }}
    >
      <span className="w-6 h-6 flex items-center justify-center border border-white rounded-md">
        +
      </span>
      {label}
    </button>
  );
}