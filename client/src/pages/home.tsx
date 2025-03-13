import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import HeroSection from "@/components/home/hero-section";
import FeaturedItems from "@/components/home/featured-items";

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <HeroSection />
      <FeaturedItems />
      
      {/* Trust Indicators */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Verified Authentic</h3>
              <p className="text-muted-foreground">
                Every item is authenticated by our expert team
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Support Charities</h3>
              <p className="text-muted-foreground">
                Many items support charitable causes
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-muted-foreground">
                Protected payments and verified sellers
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
