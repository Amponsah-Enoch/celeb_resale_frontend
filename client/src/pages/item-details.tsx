import { motion } from "framer-motion";
import { useParams } from "wouter";
import { pageTransition } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";

export default function ItemDetails() {
  const { id } = useParams();

  // This would normally fetch from an API based on the ID
  const item = {
    id,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    title: "Vintage Gucci Evening Dress",
    description: "Worn at the 2023 Academy Awards, this stunning Gucci evening dress features hand-embroidered details and a classic silhouette.",
    price: 2500,
    celebrity: {
      name: "Emma Stone",
      image: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f",
      bio: "Academy Award-winning actress known for her roles in La La Land and The Favourite."
    },
    charity: {
      name: "Red Cross",
      percentage: 20
    },
    condition: "Excellent",
    eventWorn: "2023 Academy Awards",
    authentication: "Verified by LUXE RESALE authentication team"
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
              <div className="flex items-center gap-4 mb-6">
                <Avatar
                  src={item.celebrity.image}
                  alt={item.celebrity.name}
                  className="h-12 w-12"
                />
                <div>
                  <p className="font-medium">{item.celebrity.name}</p>
                  <p className="text-sm text-muted-foreground">{item.celebrity.bio}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Price</span>
                  <span className="text-2xl font-bold text-primary">
                    ${item.price.toLocaleString()}
                  </span>
                </div>

                {item.charity && (
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">
                      {item.charity.percentage}% to {item.charity.name}
                    </Badge>
                  </div>
                )}

                <Button className="w-full" size="lg">
                  Purchase Now
                </Button>
              </div>
            </Card>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Condition</h3>
                <p className="text-muted-foreground">{item.condition}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Event Worn</h3>
                <p className="text-muted-foreground">{item.eventWorn}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Authentication</h3>
                <p className="text-muted-foreground">{item.authentication}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
