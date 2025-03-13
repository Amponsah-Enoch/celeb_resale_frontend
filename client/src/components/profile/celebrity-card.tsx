import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { fadeIn } from "@/lib/animations";
import { Link } from "wouter";

interface CelebrityCardProps {
  id: string;
  name: string;
  image: string;
  itemCount: number;
  category: string;
  verified: boolean;
}

export default function CelebrityCard({
  id,
  name,
  image,
  itemCount,
  category,
  verified
}: CelebrityCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -5 }}
    >
      <Link href={`/celebrity/${id}`}>
        <a>
          <Card className="overflow-hidden hover:border-primary transition-colors">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={image} alt={name} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg flex items-center justify-center gap-2">
                  {name}
                  {verified && (
                    <Badge variant="secondary" className="h-5 w-5">
                      ✓
                    </Badge>
                  )}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {category}
                </p>

                <p className="text-sm">
                  {itemCount} Items Available
                </p>
              </div>
            </CardContent>
          </Card>
        </a>
      </Link>
    </motion.div>
  );
}