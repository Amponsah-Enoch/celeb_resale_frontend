import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { fadeIn } from "@/lib/animations";
import { Link } from "wouter";
import SmartContract from "@/components/blockchain/smart-contract";

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
            <Avatar className="h-6 w-6">
              <AvatarImage src={celebrity.image} alt={celebrity.name} />
              <AvatarFallback>{celebrity.name[0]}</AvatarFallback>
            </Avatar>
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

            <SmartContract />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}