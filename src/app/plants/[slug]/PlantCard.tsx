import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { getPlantById } from "@/actions/plant.action";

// interface Plant {
//   id: string;
//   name: string;
//   description: string | null;
//   category: string;
//   stock: number;
//   price: number;
//   imageUrl: string | null;
// }

type Plants = Awaited<ReturnType<typeof getPlantById>>;

interface PlantCardProps {
  plant: Plants;
}

export function PlantCard({ plant }: PlantCardProps) {
  if (!plant) {
    return <div>Plant data is not available.</div>;
  }

  return (
    <Card className="max-w">
      <div className="flex flex-row">
        <div className="basis-2/4">
          <CardHeader>
            {plant.imageUrl ? (
              <div className="rounded-lg overflow-hidden">
                <img
                  src={plant.imageUrl}
                  alt="Post content"
                  className="w-80 h-auto object-cover"
                />
              </div>
            ) : (
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
                  alt="No image available"
                  className="w-80 h-auto object-cover"
                />
              </div>
            )}
          </CardHeader>
        </div>
        <div className="basis-2/3 flex flex-col justify-between">
          <CardContent className="mt-8 space-y-3">
            <CardTitle className="text-4xl font-bold">{plant.name}</CardTitle>
            <CardTitle className="text-2xl">{plant.price}$</CardTitle>
            <Badge>{plant.category || "None"}</Badge>
            <CardDescription>{plant.description}</CardDescription>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
