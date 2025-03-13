import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";
import { Link } from "wouter";

interface ItemCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  celebrity: {
    name: string;
    image: string;
  };
  charity?: {
    name: string;
    percentage: number;
  };
}

export default function ItemCard({
  id,
  image,
  title,
  price,
  celebrity,
  charity
}: ItemCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden">
        <Link href={`/item/${id}`}>
          <a>
            <div className="aspect-square overflow-hidden">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
          </a>
        </Link>

        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={celebrity.image} alt={celebrity.name} />
              <AvatarFallback>{celebrity.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{celebrity.name}</span>
          </div>

          <h3 className="font-semibold mb-2">{title}</h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">
              ${price.toLocaleString()}
            </span>
            {charity && (
              <Badge variant="secondary" className="text-xs">
                {charity.percentage}% to {charity.name}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button className="w-full">
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}