import { motion } from "framer-motion";
import { staggerChildren } from "@/lib/animations";
import ItemCard from "@/components/product/item-card";

const FEATURED_ITEMS = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    title: "Vintage Gucci Evening Dress",
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
    image: "https://images.unsplash.com/photo-1531995811006-35cb42e1a022",
    title: "Cartier Love Bracelet",
    price: 12000,
    celebrity: {
      name: "Jennifer Lawrence",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1484327973588-c31f829103fe",
    title: "Red Carpet Gown",
    price: 5000,
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

export default function FeaturedItems() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Items
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_ITEMS.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
