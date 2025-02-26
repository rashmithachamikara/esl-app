import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  export default function DesignCard({
    title,
    imageUrl,
  }: {
    title: string;
    imageUrl: string;
  }) {
    return (
      <Card className=" ml-16 h-65">
        {" "}
        {/* Custom card size */}
        <CardHeader className="mb-0 pb-1">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-3 mb-0">
            {" "}
            {/* Adjustable gap */}
            <img src={imageUrl} className="resized-image" alt={title} />{" "}
            {/* Adjust image size */}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between mt-0 mb-0">
          {" "}
          {/* Add padding to ensure buttons are inside */}
          <button className="btn btn-primary">Button 1</button>
          <button className="btn btn-secondary">Button 2</button>
        </CardFooter>
      </Card>
    );
  }
  