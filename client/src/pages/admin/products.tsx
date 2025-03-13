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
import { Plus, Pencil, Trash } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminProducts() {
  const [products, setProducts] = useState([
    {
      id: "1",
      title: "Vintage Gucci Evening Dress",
      price: 2500,
      celebrity: "Emma Stone",
      status: "Available"
    },
    // Add more mock products as needed
  ]);

  const { toast } = useToast();

  const handleAddProduct = (formData: FormData) => {
    // This would normally make an API call
    toast({
      title: "Product Added",
      description: "The product has been successfully added.",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Products</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
              </DialogHeader>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                handleAddProduct(new FormData(e.currentTarget));
              }}>
                <div>
                  <label className="text-sm font-medium">Title</label>
                  <Input name="title" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Price</label>
                  <Input name="price" type="number" min="0" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Celebrity</label>
                  <Input name="celebrity" required />
                </div>
                <Button type="submit">Add Product</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Celebrity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>${product.price.toLocaleString()}</TableCell>
                  <TableCell>{product.celebrity}</TableCell>
                  <TableCell>{product.status}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-500">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
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
