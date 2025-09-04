"use client";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";
import { Card } from "@/components/ui/Card";
import { Rating } from "@/components/ui/Rating";

type Props = {
  title: string;
  price: string;
  badge?: string;
  img: string; // caminho dentro de /public
};

export default function ProductCard({ title, price, badge, img }: Props) {
  return (
    <Card>
      <div className="relative aspect-square w-full overflow-hidden rounded-xl">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority={false}
        />
        {badge && (
          <div className="absolute left-2 top-2">
            <Badge>{badge}</Badge>
          </div>
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-base">{title}</h3>
        <div className="mt-1 text-[--color-primary] font-semibold">{price}</div>
        <div className="mt-2 flex gap-2">
          <Chip active>S</Chip><Chip>M</Chip><Chip>L</Chip><Chip>XL</Chip>
        </div>
        <div className="mt-2">
          <Rating value={4} />
        </div>
        <Button className="mt-4 w-full">Adicionar ao carrinho</Button>
      </div>
    </Card>
  );
}

