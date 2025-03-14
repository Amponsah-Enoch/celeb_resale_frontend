import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { motion, AnimatePresence } from "framer-motion";
import { CartProvider } from "@/lib/cart-context";
import { ErrorBoundary } from "@/components/error-boundary";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Auctions from "@/pages/auctions";
import FixedPrice from "@/pages/fixed-price";
import Celebrities from "@/pages/celebrities";
import CelebrityDetail from "@/pages/celebrity/[id]";
import ItemDetails from "@/pages/item-details";
import Login from "@/pages/auth/login";
import Signup from "@/pages/auth/signup";
import AdminDashboard from "@/pages/admin/dashboard";
import AdminProducts from "@/pages/admin/products";
import AdminCelebrities from "@/pages/admin/celebrities";
import AdminAuctions from "@/pages/admin/auctions";
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
        {/* Admin Routes - Wrapped in ErrorBoundary */}
        <Route path="/admin">
          {(params) => (
            <ErrorBoundary>
              <AdminDashboard />
            </ErrorBoundary>
          )}
        </Route>
        <Route path="/admin/products">
          {(params) => (
            <ErrorBoundary>
              <AdminProducts />
            </ErrorBoundary>
          )}
        </Route>
        <Route path="/admin/celebrities">
          {(params) => (
            <ErrorBoundary>
              <AdminCelebrities />
            </ErrorBoundary>
          )}
        </Route>
        <Route path="/admin/auctions">
          {(params) => (
            <ErrorBoundary>
              <AdminAuctions />
            </ErrorBoundary>
          )}
        </Route>

        {/* Auth Routes */}
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/signup" component={Signup} />

        {/* Public Routes */}
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

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main>
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </CartProvider>
    </QueryClientProvider>
  );
}