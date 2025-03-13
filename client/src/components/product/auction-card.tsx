import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeIn } from "@/lib/animations";
import { Link } from "wouter";

interface AuctionCardProps {
  id: string;
  image: string;
  title: string;
  currentBid: number;
  endTime: Date;
  celebrity: {
    name: string;
    image: string;
  };
}

export default function AuctionCard({
  id,
  image,
  title,
  currentBid,
  endTime,
  celebrity
}: AuctionCardProps) {
  const [bidAmount, setBidAmount] = useState(currentBid + 100);
  
  const timeLeft = new Date(endTime).getTime() - new Date().getTime();
  const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));

  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden">
        <Link href={`/item/${id}`}>
          <a>
            <div className="aspect-square overflow-hidden relative">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              <Badge 
                variant="destructive" 
                className="absolute top-2 right-2"
              >
                {hoursLeft}h left
              </Badge>
            </div>
          </a>
        </Link>

        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Avatar
              src={celebrity.image}
              alt={celebrity.name}
              className="h-6 w-6"
            />
            <span className="text-sm font-medium">{celebrity.name}</span>
          </div>

          <h3 className="font-semibold mb-2">{title}</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Current Bid</span>
              <span className="text-lg font-bold text-primary">
                ${currentBid.toLocaleString()}
              </span>
            </div>
            
            <div className="flex gap-2">
              <Input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(Number(e.target.value))}
                min={currentBid + 100}
                step={100}
              />
              <Button className="whitespace-nowrap">
                Place Bid
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
