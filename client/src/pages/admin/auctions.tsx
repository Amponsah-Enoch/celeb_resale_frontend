import { useState } from "react";
import AdminLayout from "@/components/layout/admin-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Plus, Pause, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminAuctions() {
  const [auctions, setAuctions] = useState([
    {
      id: "1",
      title: "Limited Edition Rolex",
      startingBid: 25000,
      currentBid: 27500,
      celebrity: "Emma Stone",
      status: "active",
      endTime: new Date(Date.now() + 86400000).toISOString()
    },
    // Add more mock auctions as needed
  ]);

  const { toast } = useToast();

  const handleAddAuction = (formData: FormData) => {
    // This would normally make an API call
    toast({
      title: "Auction Created",
      description: "The auction has been successfully created.",
    });
  };

  const toggleAuctionStatus = (id: string) => {
    setAuctions(prev =>
      prev.map(auction =>
        auction.id === id
          ? { ...auction, status: auction.status === "active" ? "paused" : "active" }
          : auction
      )
    );
    toast({
      title: "Auction Status Updated",
      description: "The auction status has been updated.",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Auctions</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Auction
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Auction</DialogTitle>
              </DialogHeader>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                handleAddAuction(new FormData(e.currentTarget));
              }}>
                <div>
                  <label className="text-sm font-medium">Item Title</label>
                  <Input name="title" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Starting Bid</label>
                  <Input name="startingBid" type="number" min="0" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Celebrity</label>
                  <Input name="celebrity" required />
                </div>
                <div>
                  <label className="text-sm font-medium">End Time</label>
                  <Input name="endTime" type="datetime-local" required />
                </div>
                <Button type="submit">Create Auction</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Starting Bid</TableHead>
                <TableHead>Current Bid</TableHead>
                <TableHead>Celebrity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>End Time</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auctions.map((auction) => (
                <TableRow key={auction.id}>
                  <TableCell>{auction.title}</TableCell>
                  <TableCell>${auction.startingBid.toLocaleString()}</TableCell>
                  <TableCell>${auction.currentBid.toLocaleString()}</TableCell>
                  <TableCell>{auction.celebrity}</TableCell>
                  <TableCell>
                    <Badge variant={auction.status === "active" ? "default" : "secondary"}>
                      {auction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(auction.endTime).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleAuctionStatus(auction.id)}
                    >
                      {auction.status === "active" ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}
