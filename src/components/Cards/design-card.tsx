import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import EditButton from "@/components/EditButton/EditButton";
import DeleteButton from "@/components/DeleteButton/DeleteButton";
import { ConfirmModal } from "@/components/Modal/ConfirmModal";

export default function DesignCard({
  title,
  imageUrl,
  description,
  specs,
}: {
  title: string;
  imageUrl: string;
  description?: string;
  specs?: string;
}) {
  const handleDelete = () => {
    console.log("Delete confirmed");
    // Add your delete logic here
  };

  return (
    <Card className="h-65">
      <CardHeader className="mb-0 pb-1">
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <Image
            src={imageUrl}
            className="resized-image"
            alt={title}
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
        {/* Conditionally render the texts with proper styling */}
        {description && (
          <p className="text-sm text-gray-700 mt-2">{description}</p>
        )}
        {specs && <p className="text-[10px] text-gray-500">{specs}</p>}
      </CardContent>
      <CardFooter className="flex flex-col xl:flex-row justify-between mt-0 mb-0 space-y-2 xl:space-y-0 xl:space-x-2">
        <EditButton onClick={() => {}} />
        <ConfirmModal
          buttonLabel="Delete"
          dialogTitle="Confirm Delete"
          dialogDescription="Are you sure you want to delete this item?"
          onConfirm={handleDelete}
        ><></>
        </ConfirmModal>
      </CardFooter>
    </Card>
  );
}
