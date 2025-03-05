import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import React from "react";
import "@/css/typography.css";
import AddButton from "@/components/AddButton/AddButton";
import DeleteButton from "@/components/DeleteButton/DeleteButton";

interface ConfirmModalProps {
  buttonLabel: string;
  dialogTitle: string;
  dialogDescription: string;
  onConfirm: () => void;
  children: React.ReactNode; // Accept children
}

export function ConfirmModal({
  buttonLabel,
  dialogTitle,
  dialogDescription,
  onConfirm,
  
}: ConfirmModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DeleteButton onClick={() => {}} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="button"
            onClick={onConfirm}
            style={{ backgroundColor: "#D93639" }}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
