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
            {plant.imageUrl && (
              <div className="rounded-lg overflow-hidden">
                <img
                  src={plant.imageUrl}
                  alt="Post content"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </CardHeader>
        </div>
        <div className="basis-2/4 flex flex-col justify-between">
          <CardContent className="mt-8 space-y-3">
            <CardTitle className="text-5xl font-bold">{plant.name}</CardTitle>
            <CardTitle className="text-5xl font-bold"></CardTitle>
            <Badge>{plant.category}</Badge>
            <CardDescription className="text-white">
              {plant.description}
            </CardDescription>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
