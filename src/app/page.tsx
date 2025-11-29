import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Plants } from "@prisma/client";

const plant = (p: Plants) => {
  return (
    <div key={p.id}>
      <h2>{p.category}</h2>
      <p>{p.imageUrl}</p>
      <Button>Buy for {p.price}$</Button>
    </div>
  );
}

export default function Home() {
  return <Hero />;
}
