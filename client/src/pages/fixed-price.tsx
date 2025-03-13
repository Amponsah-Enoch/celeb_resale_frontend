import { motion } from "framer-motion";
import { pageTransition, staggerChildren } from "@/lib/animations";
import ItemCard from "@/components/product/item-card";

const FIXED_PRICE_ITEMS = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    title: "Vintage Gucci Dress",
    price: 2500,
    celebrity: {
      name: "Emma Stone",
      image: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f"
    },
    charity: {
      name: "Red Cross",
      percentage: 20
    }
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e",
    title: "Designer Handbag",
    price: 3500,
    celebrity: {
      name: "Jennifer Lawrence",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1485125639709-a60c3a500bf1",
    title: "Red Carpet Gown",
    price: 4800,
    celebrity: {
      name: "Zendaya",
      image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993"
    },
    charity: {
      name: "UNICEF",
      percentage: 30
    }
  }
];

export default function FixedPrice() {
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
            <h1 className="text-4xl font-bold mb-4">Shop Fixed Price Items</h1>
            <p className="text-muted-foreground">
              Browse our curated collection of celebrity-worn items available for immediate purchase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FIXED_PRICE_ITEMS.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
