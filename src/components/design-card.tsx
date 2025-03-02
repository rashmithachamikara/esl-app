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

export default function DesignCard({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) {
  return (
    <Card className="h-65">
      {" "}
      {/* Custom card size */}
      <CardHeader className="mb-0 pb-1">
        <CardTitle className="text-sm">{title}</CardTitle>{" "}
        {/* Reduce font size */}
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
          />{" "}
          {/* Adjust image size */}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col xl:flex-row justify-between mt-0 mb-0 space-y-2 xl:space-y-0 xl:space-x-2">
        <EditButton onClick={() => {}} />
        <DeleteButton onClick={() => {}} />
      </CardFooter>
    </Card>
  );
}
