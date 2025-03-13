import { useParams } from "wouter";
import { motion } from "framer-motion";
import { pageTransition, staggerChildren } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ItemCard from "@/components/product/item-card";
import AuctionCard from "@/components/product/auction-card";

export default function CelebrityDetail() {
  const { id } = useParams();

  // This would normally fetch from an API based on the ID
  const celebrity = {
    id,
    name: "Emma Stone",
    image: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f",
    bio: "Academy Award-winning actress known for her roles in La La Land and The Favourite.",
    itemCount: 12,
    category: "Actress",
    verified: true,
    charityStats: {
      totalRaised: 150000,
      mainCharity: "Red Cross",
      percentageDonated: 20
    }
  };

  const items = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      title: "Vintage Gucci Evening Dress",
      price: 2500,
      celebrity: {
        name: celebrity.name,
        image: celebrity.image
      },
      charity: {
        name: "Red Cross",
        percentage: 20
      }
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e",
      title: "Designer Handbag",
      price: 3500,
      celebrity: {
        name: celebrity.name,
        image: celebrity.image
      }
    }
  ];

  const auctions = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1492714485642-dd6df6baafa2",
      title: "Limited Edition Rolex",
      currentBid: 25000,
      endTime: new Date(Date.now() + 86400000),
      celebrity: {
        name: celebrity.name,
        image: celebrity.image
      }
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="py-12"
    >
      <div className="container mx-auto px-4">
        {/* Celebrity Profile Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={celebrity.image} alt={celebrity.name} />
                  <AvatarFallback>{celebrity.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <h1 className="text-3xl font-bold">{celebrity.name}</h1>
                    {celebrity.verified && (
                      <Badge variant="secondary" className="h-5 w-5">
                        ✓
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">{celebrity.bio}</p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Badge variant="outline">{celebrity.category}</Badge>
                    <Badge variant="outline">{celebrity.itemCount} Items</Badge>
                    <Badge variant="outline">
                      ${celebrity.charityStats.totalRaised.toLocaleString()} Raised
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Items Tabs */}
        <Tabs defaultValue="fixed-price" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="fixed-price">Fixed Price Items</TabsTrigger>
            <TabsTrigger value="auctions">Live Auctions</TabsTrigger>
          </TabsList>
          <TabsContent value="fixed-price">
            <motion.div variants={staggerChildren}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                  <ItemCard key={item.id} {...item} />
                ))}
              </div>
            </motion.div>
          </TabsContent>
          <TabsContent value="auctions">
            <motion.div variants={staggerChildren}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {auctions.map((auction) => (
                  <AuctionCard key={auction.id} {...auction} />
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Charity Impact */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Charity Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">
                    ${celebrity.charityStats.totalRaised.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Raised</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">
                    {celebrity.charityStats.mainCharity}
                  </p>
                  <p className="text-sm text-muted-foreground">Main Charity</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">
                    {celebrity.charityStats.percentageDonated}%
                  </p>
                  <p className="text-sm text-muted-foreground">Average Donation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
