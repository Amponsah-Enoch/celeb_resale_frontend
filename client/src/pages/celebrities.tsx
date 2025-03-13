import { motion } from "framer-motion";
import { pageTransition, staggerChildren } from "@/lib/animations";
import CelebrityCard from "@/components/profile/celebrity-card";

const CELEBRITIES = [
  {
    id: "1",
    name: "Emma Stone",
    image: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f",
    itemCount: 12,
    category: "Actress",
    verified: true
  },
  {
    id: "2",
    name: "Brad Pitt",
    image: "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5",
    itemCount: 8,
    category: "Actor",
    verified: true
  },
  {
    id: "3",
    name: "Zendaya",
    image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993",
    itemCount: 15,
    category: "Actress",
    verified: true
  },
  {
    id: "4",
    name: "Nicole Kidman",
    image: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca",
    itemCount: 10,
    category: "Actress",
    verified: true
  }
];

export default function Celebrities() {
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
            <h1 className="text-4xl font-bold mb-4">Featured Celebrities</h1>
            <p className="text-muted-foreground">
              Explore authentic items from your favorite celebrities and support their chosen causes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CELEBRITIES.map((celebrity) => (
              <CelebrityCard key={celebrity.id} {...celebrity} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
