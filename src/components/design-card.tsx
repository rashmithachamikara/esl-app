import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

export default function DesignCard({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) {
  return (
    <Card className="mr-16 h-65"> {/* Custom card size */}
      <CardHeader className="mb-0 pb-1">
        <CardTitle className="text-sm">{title}</CardTitle> {/* Reduce font size */}
      </CardHeader>
      <CardContent>
        <div className="p-3 mb-0"> {/* Adjustable gap */}
          <img src={imageUrl} className="resized-image" alt={title} /> {/* Adjust image size */}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between mt-0 mb-0"> {/* Add padding to ensure buttons are inside */}
      <Button>
          <Pencil /> Edit
        </Button>
        <Button className="bg-red-900 text-white">
          <Trash2/>Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
