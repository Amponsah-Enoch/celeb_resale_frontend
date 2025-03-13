import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { motion, AnimatePresence } from "framer-motion";
import { CartProvider } from "@/lib/cart-context";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Auctions from "@/pages/auctions";
import FixedPrice from "@/pages/fixed-price";
import Celebrities from "@/pages/celebrities";
import CelebrityDetail from "@/pages/celebrity/[id]";
import ItemDetails from "@/pages/item-details";
import FAQ from "@/pages/faq";
import Shipping from "@/pages/shipping";
import Authenticity from "@/pages/authenticity";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Returns from "@/pages/returns";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/auctions" component={Auctions} />
        <Route path="/fixed-price" component={FixedPrice} />
        <Route path="/celebrities" component={Celebrities} />
        <Route path="/celebrity/:id" component={CelebrityDetail} />
        <Route path="/item/:id" component={ItemDetails} />
        <Route path="/faq" component={FAQ} />
        <Route path="/shipping" component={Shipping} />
        <Route path="/authenticity" component={Authenticity} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/returns" component={Returns} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main className="container mx-auto px-4">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;