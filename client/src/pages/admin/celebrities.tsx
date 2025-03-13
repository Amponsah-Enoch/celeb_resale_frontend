import { useState } from "react";
import AdminLayout from "@/components/layout/admin-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
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
import { Plus, Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminCelebrities() {
  const [celebrities, setCelebrities] = useState([
    {
      id: "1",
      name: "Emma Stone",
      category: "Actress",
      verified: true,
      itemCount: 12,
      totalSales: 150000
    },
    // Add more mock celebrities as needed
  ]);

  const { toast } = useToast();

  const handleAddCelebrity = (formData: FormData) => {
    // This would normally make an API call
    toast({
      title: "Celebrity Added",
      description: "The celebrity profile has been successfully added.",
    });
  };

  const toggleVerification = (id: string) => {
    setCelebrities(prev =>
      prev.map(celeb =>
        celeb.id === id ? { ...celeb, verified: !celeb.verified } : celeb
      )
    );
    toast({
      title: "Verification Updated",
      description: "The celebrity verification status has been updated.",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Celebrities</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Celebrity
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Celebrity</DialogTitle>
              </DialogHeader>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                handleAddCelebrity(new FormData(e.currentTarget));
              }}>
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <Input name="name" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <Input name="category" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Bio</label>
                  <Textarea name="bio" required />
                </div>
                <div className="flex items-center gap-2">
                  <Switch name="verified" />
                  <label className="text-sm font-medium">Verified Account</label>
                </div>
                <Button type="submit">Add Celebrity</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Verified</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total Sales</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {celebrities.map((celebrity) => (
                <TableRow key={celebrity.id}>
                  <TableCell>{celebrity.name}</TableCell>
                  <TableCell>{celebrity.category}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={celebrity.verified ? "text-green-500" : "text-red-500"}
                      onClick={() => toggleVerification(celebrity.id)}
                    >
                      {celebrity.verified ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <X className="h-4 w-4" />
                      )}
                    </Button>
                  </TableCell>
                  <TableCell>{celebrity.itemCount}</TableCell>
                  <TableCell>${celebrity.totalSales.toLocaleString()}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View Details
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
