import { motion } from "framer-motion";
import { pageTransition, staggerChildren } from "@/lib/animations";
import AuctionCard from "@/components/product/auction-card";

const AUCTION_ITEMS = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1492714485642-dd6df6baafa2",
    title: "Limited Edition Rolex Daytona",
    currentBid: 25000,
    endTime: new Date(Date.now() + 86400000), // 24 hours from now
    celebrity: {
      name: "Brad Pitt",
      image: "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5"
    }
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721",
    title: "Oscar Night Gown",
    currentBid: 15000,
    endTime: new Date(Date.now() + 172800000), // 48 hours from now
    celebrity: {
      name: "Emma Stone",
      image: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f"
    }
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516",
    title: "Diamond Necklace",
    currentBid: 50000,
    endTime: new Date(Date.now() + 259200000), // 72 hours from now
    celebrity: {
      name: "Nicole Kidman",
      image: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca"
    }
  }
];

export default function Auctions() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div variants={staggerChildren}>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Live Auctions</h1>
            <p className="text-muted-foreground">
              Bid on exclusive items from your favorite celebrities, with new items added daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AUCTION_ITEMS.map((item) => (
              <AuctionCard key={item.id} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
