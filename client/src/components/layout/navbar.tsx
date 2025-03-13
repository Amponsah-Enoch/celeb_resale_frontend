import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ShoppingBag, User, Search } from "lucide-react";
import { motion } from "framer-motion";
import WalletConnect from "@/components/blockchain/wallet-connect";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/hooks/use-toast";

export default function Navbar() {
  const [location] = useLocation();
  const { items } = useCart();
  const { toast } = useToast();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/auctions", label: "Auctions" },
    { href: "/fixed-price", label: "Shop" },
    { href: "/celebrities", label: "Celebrities" }
  ];

  const handleSearch = () => {
    toast({
      title: "Search",
      description: "Search functionality coming soon!",
    });
  };

  const handleProfile = () => {
    toast({
      title: "Profile",
      description: "Profile functionality coming soon!",
    });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            <Link href="/">LUXE RESALE</Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                  location === item.href ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <WalletConnect />
            <Button variant="ghost" size="icon" onClick={handleSearch}>
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" onClick={handleProfile}>
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}