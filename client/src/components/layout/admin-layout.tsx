import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Users,
  ShoppingBag,
  Gavel,
  LayoutDashboard,
  LogOut
} from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [location] = useLocation();

  const menuItems = [
    {
      href: "/admin",
      label: "Dashboard",
      icon: LayoutDashboard
    },
    {
      href: "/admin/celebrities",
      label: "Celebrities",
      icon: Users
    },
    {
      href: "/admin/products",
      label: "Products",
      icon: ShoppingBag
    },
    {
      href: "/admin/auctions",
      label: "Auctions",
      icon: Gavel
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <Card className="w-64 h-screen sticky top-0 p-4 rounded-none border-r">
          <div className="flex flex-col h-full">
            <div className="text-xl font-bold text-primary mb-8">
              Admin Panel
            </div>
            
            <nav className="flex-1">
              <ul className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.href}>
                      <Link href={item.href}>
                        <a className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                          location === item.href
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}>
                          <Icon className="h-5 w-5" />
                          {item.label}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-auto">
              <Link href="/auth/login">
                <a className="flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                  <LogOut className="h-5 w-5" />
                  Logout
                </a>
              </Link>
            </div>
          </div>
        </Card>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
