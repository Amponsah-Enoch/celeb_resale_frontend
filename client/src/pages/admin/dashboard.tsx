import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdminLayout from "@/components/layout/admin-layout";
import { Users, ShoppingBag, Gavel, DollarSign } from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$150,245",
    icon: DollarSign,
    change: "+12%",
    timespan: "from last month"
  },
  {
    title: "Active Auctions",
    value: "45",
    icon: Gavel,
    change: "+8%",
    timespan: "from last month"
  },
  {
    title: "Total Products",
    value: "245",
    icon: ShoppingBag,
    change: "+24%",
    timespan: "from last month"
  },
  {
    title: "Verified Celebrities",
    value: "12",
    icon: Users,
    change: "+2",
    timespan: "this month"
  }
];

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">{stat.change}</span>{" "}
                  {stat.timespan}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </AdminLayout>
  );
}
