import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Own A Piece Of
            <span className="text-primary"> Celebrity Style</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Authentic fashion pieces from your favorite celebrities.
            Verified, exclusive, and supporting charitable causes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auctions">
              <Button size="lg" className="min-w-[200px]">
                View Auctions
              </Button>
            </Link>
            <Link href="/fixed-price">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                Shop Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,var(--primary)_0,transparent_100%)] opacity-10" />
    </section>
  );
}
